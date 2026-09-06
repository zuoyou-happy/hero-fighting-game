drawHero=function(w,h){
  ctx.save();
  const x=state.heroX+10,y=h-145+state.heroY;
  const halo=ctx.createRadialGradient(x,y,8,x,y,58);
  halo.addColorStop(0,'#071c24dd');
  halo.addColorStop(.62,'#071c2499');
  halo.addColorStop(1,'#071c2400');
  ctx.fillStyle=halo;
  ctx.fillRect(x-62,y-62,124,124);
  ctx.restore();
  baseDrawHero(w,h);
};

drawEnemy=function(w,h){
  ctx.save();
  const x=state.enemyX,y=h-165;
  const halo=ctx.createRadialGradient(x,y,15,x,y,95);
  halo.addColorStop(0,'#07151bdd');
  halo.addColorStop(.68,'#07151baa');
  halo.addColorStop(1,'#07151b00');
  ctx.fillStyle=halo;
  ctx.fillRect(x-105,y-105,210,210);
  ctx.restore();
  baseDrawEnemy(w,h);
};

drawBackdrop=function(l,w,h){
  ctx.save();
  const t=state.worldTime;
  const glow=ctx.createRadialGradient(w*.82,90,8,w*.82,90,135);
  glow.addColorStop(0,state.level===3?'#eafcff99':'#ffe39d88');
  glow.addColorStop(1,'#ffffff00');
  ctx.fillStyle=glow;
  ctx.fillRect(w*.62,0,w*.38,240);

  const mistX=(t*.35)%(w+420)-210;
  const mist=ctx.createLinearGradient(mistX,0,mistX+420,0);
  mist.addColorStop(0,'#ffffff00');
  mist.addColorStop(.5,'#ffffff22');
  mist.addColorStop(1,'#ffffff00');
  ctx.fillStyle=mist;
  ctx.fillRect(0,100,w,250);

  ctx.globalAlpha=.58;
  if(state.level===0){
    ctx.strokeStyle='#ffd58c';ctx.lineWidth=2;
    for(let i=0;i<4;i++){const y=h-128-i*18;ctx.beginPath();ctx.moveTo(0,y);ctx.quadraticCurveTo(w/2,y+Math.sin(t/16+i)*9,w,y);ctx.stroke();}
  }else if(state.level===1){
    ctx.fillStyle='#b7efc2';
    for(let i=0;i<18;i++){const x=(i*83+t*.15)%w,y=80+(i*57)%350;ctx.beginPath();ctx.ellipse(x,y,2,8,Math.sin(t/30+i),0,Math.PI*2);ctx.fill();}
  }else if(state.level===2){
    ctx.strokeStyle='#9decf7';ctx.lineWidth=3;
    for(let i=0;i<5;i++){const y=h-150-i*23;ctx.beginPath();for(let x=0;x<=w;x+=30)ctx.lineTo(x,y+Math.sin(x/62+t/8+i)*7);ctx.stroke();}
  }else if(state.level===3){
    ctx.fillStyle='#fff';
    for(let i=0;i<45;i++){const x=(i*79+t*(.4+i%3*.1))%w,y=(i*47+t*.6)%420;ctx.fillRect(x,y,2+(i%3),2+(i%3));}
  }else{
    ctx.strokeStyle='#f4c96b';ctx.lineWidth=3;
    for(let i=0;i<4;i++){ctx.beginPath();ctx.arc(w/2,h/2,80+i*42+Math.sin(t/12+i)*8,0,Math.PI*2);ctx.stroke();}
  }
  ctx.globalAlpha=1;
  ctx.fillStyle='#ffffffdd';ctx.font='700 13px Inter';ctx.fillText(`${String(state.level+1).padStart(2,'0')} / ${l.name}`,24,30);
  ctx.fillStyle='#ffffffaa';ctx.font='10px Inter';ctx.fillText('RESCUE BEACON ONLINE',24,48);
  ctx.restore();
};
