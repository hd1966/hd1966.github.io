function onHoverLink()
{
    var options = {
        duration: 2000,
        delay: 1000,
        iterations: 3,
        direction: 'alternate',
        fill: 'both',
        id: 'myAnimation'
      };
      window.animatelo.bounceIn('#gamename', options);
}
 

function onDubbel(){
    var anim3 = window.animatelo.fadeOut('#header', {
        delay: 500,
        duration: 3000
      })[0];
      anim3.onfinish = function() {
        var anim4 = window.animatelo.fadeIn('#header', {
          duration: 3000
        })[0];
      };
    var anim1 = window.animatelo.rotateOut('#explain', {
        delay: 500,
        duration: 3000
      })[0];
      anim1.onfinish = function() {
        var anim2 = window.animatelo.rotateIn('#explain', {
          duration: 3000
        })[0];
      };
}


function testTinyAnimate1()
{
  var square = document.querySelector('#header');
  TinyAnimate.animateCSS(square, 'left', 'px', 10, 1000, 5000, 'easeInOutQuart');
}
function testTinyAnimate2()
{
  var svg = document.querySelector("#svgtype");
  TinyAnimate.animate(480, 40, 5000, function(x) {
      svg.setAttribute('cx', x);
  });
  TinyAnimate.animateCSS(svg, 'opacity','',0.1, 1,75000, 'easeOutElastic');
}

function testTinyAnimate3()
{
  var svg = document.querySelector('#svgtype');
  TinyAnimate.animate(480, 40, 5000, function(x) {
      svg.setAttribute('cx', x);
  });
  
}
function testTinyAnimate4()
{
  var rb = document.querySelector("#header");
  TinyAnimate.animateCSS(rb, 'left', 'px', 10, 1000, 5000, 'easeInOutQuart');
  TinyAnimate.animateCSS(rb, 'opacity','',0.1, 1,5000, 'easeInOutQuart');
}


function testTinyAnimate5()
{
  var svg = document.querySelector('#svgtype');
  TinyAnimate.animate(600, 200, 5000, function(x) {
      svg.setAttribute('cy', x);
  });
  TinyAnimate.animate(20, 80, 10000, function(x) {
    svg.setAttribute('r', x);
});
  
}
function testTinyAnimate6()
{
  var rb = document.querySelector("#header");
  TinyAnimate.animateCSS(rb, 'top', 'vh', 5, 80, 5000, 'easeInOutQuart');
  TinyAnimate.animateCSS(rb, 'opacity','',0, 1,5000, 'easeInOutQuart');
  
}
function testTinyAnimate7()
{
  var rb = document.querySelector("#header");
  TinyAnimate.animateCSS(rb, 'top', 'vh', 80, 5, 5000, 'easeInOutQuart');
  TinyAnimate.animateCSS(rb, 'opacity','',0, 1,5000, 'easeInOutQuart');
  
}







