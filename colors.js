var links = {
  setColor : function(color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i <alist.length){
    //   alist[i].style.color = color;
    //   i+=1;
    // }
    $('a').css('color', color);
  }

}

var body = {
  setColor : function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackGroundColor : function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  },

}


function nightDayHandler (self) {
  var target = document.querySelector('body')
  if(self.value === 'night_f'){
  body.setBackGroundColor('black'); //객체화 필요!
  body.setColor('white');//
  self.value = 'day_f'

  links.setColor('powderblue');//
  } else {
  body.setBackGroundColor('white');//
  body.setColor('black');//
  self.value = 'night_f'

  links.setColor('blue');//
  }
}
