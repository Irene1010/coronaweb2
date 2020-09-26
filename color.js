var body = {
  setBackgroundColor: function(color){
    //document.querySelector('body').style.backgroundColor=color;
    $("body").css("backgroundColor", color);
  },
  setColor: function(color){
    //document.querySelector('body').style.color=color;
    $("body").css("color", color);
  }
}
var link = {
  setColor: function(color){
    // var i=0;
    // var x=document.querySelectorAll('a');
    // while(i<x.length){
    //     x[i].style.color=color;
    //     i=i+1;
    // }
    $("a").css( "color", color );
  }
}
function nightDayHandler(self, bool){
  if(self.value==='night'){
    body.setBackgroundColor('black');
    body.setColor('white');
    self.value='day';
    if(bool!=0){
      link.setColor('powderblue');
    }
  }else{
    body.setBackgroundColor('white');
    body.setColor('black');
    self.value='night';
    if(bool!=0){
      link.setColor('blue');
    }
  }
}
