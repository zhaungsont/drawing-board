var isDragging = false;
var mouseIsDown = false;
var mouseIsMove = false;
var currentColor = "#FF6B6B";
var marker = true;
var bucket = false;
var prevChosenColor = "";
var prevChosenTool = "";

//長輩提示
alert("用滑鼠來作畫！畫面上方有三個顏色可以選擇。工具可以選擇筆刷（預設）或是油漆桶！準備好就可以按下「確定」啦！期待你的精采傑作！")

//Tool Picker
$(".bucket").click(function(){
  bucket = true;
  marker = false;
  chosenToolChanger(".bucket");
})

$(".marker").click(function(){
  bucket = false;
  marker = true;
  chosenToolChanger(".marker");
})

//Detect Mouse Drag
$(".box1").mousedown(function(){
  mouseIsDown = true;

  if(marker){
    $(this).css("background-color", currentColor);
  }else{
    $(".box1").css("background-color", currentColor);
  }

  console.log("mousedown is true");
  if(mouseIsMove){
    isDragging = true;
    console.log("DRAGGING");
  }
})

$(".box1").mouseup(function(){
  mouseIsDown = false;
  mouseIsMove = false;
  isDragging = false;
  console.log("operation stops");
})

$(".box1").mouseover(function(){
  mouseIsMove = true;
  console.log("moving is true");
  if(mouseIsDown){
    isDragging = true;
    console.log("DRAGGING");
  }
})


// Draw Function
$(".box1").mouseover(function(){
  if(isDragging){
    $(this).css("background-color", currentColor);
  }
})

// Color Changer
$(".color1-sample").click(function(){
  currentColor = "#5F7A61"
  chosenColorChanger(".color1-sample");
})

$(".color2-sample").click(function(){
  currentColor = "#6E85B2"
  chosenColorChanger(".color2-sample");
})

$(".color3-sample").click(function(){
  currentColor = "#FF6B6B"
  chosenColorChanger(".color3-sample");
})

function chosenColorChanger(event){
  $(event).addClass("chosen-color");
  $(prevChosenColor).removeClass("chosen-color");
  prevChosenColor = $(event);
}

function chosenToolChanger(event){
  $(event).addClass("chosen-tool");
  $(prevChosenTool).removeClass("chosen-tool");
  prevChosenTool = $(event);
}

$(".reset").click(function(){
  //clear canvas
  $(".box1").css("background-color", "white");

  //reset tools
  currentColor = "#FF6B6B";
  marker = true;
  bucket = false;
  prevChosenColor = "";
  prevChosenTool = "";

  //reset tools visuals
  $(".button").removeClass("chosen-tool");
  $(".color-samples-general-style").removeClass("chosen-color");
});

// WIP Message
$("input").click(function(){
  alert("I haven't figured out how to customize colors...my apologies! 抱歉，我還不知道怎麼使用自訂顏色！");
})

// Pointer Color Preview
// $(".box1").mouseover(function(){
//   prevColor = $(this).css("background-color");
//   $(this).css("background-color", currentColor);
//   console.log("prev " + prevColor);
// })
//
// $(".box1").mouseout(function(){
//   setTimeout(function(){ $(this).css("background-color", prevColor); }, 1000);
//
// })
