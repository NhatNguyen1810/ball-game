var canvas = document.getElementById('canvas'); 
var ctx = canvas.getContext('2d'); 
var raf ; 
var diem = 0 ; 
var bangdiem = document.getElementById('bangdiem'); 
var ball = {
  color: 'violet',
  x:100,
  y:100,
  vx:2,
  vy:2,
  radius:15,
  draw: function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true); 
    ctx.closePath(); 
    ctx.fillStyle= this.color; 
    ctx.fill(); 
  }
};
var line = {
  x : 250 , 
  y : 280 , 
  draw : function () {
    ctx.beginPath(); 
    ctx.moveTo(this.x,this.y); 
    ctx.lineTo(this.x + 60 , this.y); 
    ctx.closePath(); 
    ctx.fill(); 
    ctx.stroke(); 
  }
};
var d ; 
document.addEventListener("keydown",function(event){
  var key = event.keyCode; 
  if(key == 37 && line.x >= 25){
    line.x -= 25 ; 
  }
  if (key == 39 && line.x <= canvas.width - 75){
   line.x += 25 ; 
  }
});




function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height); 
  ball.draw(); 
  line.draw();
  ball.x += ball.vx ; 
  ball.y += ball.vy ; 
  var lineX = line.x ; 
 
  if(d == "RIGHT" ){
   
    lineX += 30 ; 
   
  }
  if(d =="LEFT" ){
   
    
    lineX -= 30 ; 
  }
  
  
  if (ball.y + ball.vy == canvas.height ){
      ball = {
  color: 'violet',
  x:100,
  y:100,
  vx:2,
  vy:2,
  radius:15,
  draw: function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true); 
    ctx.closePath(); 
    ctx.fillStyle= this.color; 
    ctx.fill(); 
        }
        
    }
    diem = 0 ; 
    bangdiem.innerHTML = diem ; 
  }
  if(ball.y + ball.vy < 0){
    ball.vy = - ball.vy ; 
  }
  
  
  
  if (ball.x + ball.vx > canvas.width ||
     ball.x + ball.vx < 0 ){
    ball.vx = -ball.vx; 
  }
  
  
  if(ball.y + ball.vy == (line.y) && (ball.x + ball.vx) >= line.x &&(ball.x + ball.vx <= line.x + 60) ){
    ball.vy = - ball.vy ; 
    diem ++ ; 
    bangdiem.innerHTML = diem ; 
  }
  
   raf = window.requestAnimationFrame(draw);
  
  
  
}




canvas.addEventListener('mouseover',function(e){
    raf = window.requestAnimationFrame(draw);
  });
  canvas.addEventListener('mouseout',function(e){
    window.cancelAnimationFrame(raf); 
  });


ball.draw();
line.draw();
