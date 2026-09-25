

    /* V11 / warm graphite dust and brief silver traces. Existing type, cards and paths.
 * Both use the existing gallery/scroll clock. No change to the authored score. */
export const createEntranceTrails=function({host,T,cards,camera,score,motion}){
  const canvas=document.createElement('canvas');canvas.id='entrance-trails';canvas.setAttribute('aria-hidden','true');
  Object.assign(canvas.style,{position:'absolute',inset:'0',width:'100%',height:'100%',pointerEvents:'none',zIndex:'3'});host.append(canvas);
  const ctx=canvas.getContext('2d'),point=new T.Vector3();
  const SETTINGS={life:.42,opacity:.40,maxLength:220};
  let W=0,H=0,dpr=1,lastScore=null,energy=0,wasVisible=false;
  const history=cards.map(()=>[[],[]]);
  const corners=[[-1.004,.86],[1.004,-.86]];
  function resize(){W=host.clientWidth;H=host.clientHeight;dpr=Math.min(devicePixelRatio||1,W<=760?1.25:1.5);canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);clear();}
  function clear(){history.forEach(pair=>pair.forEach(h=>h.length=0));ctx.clearRect(0,0,canvas.width,canvas.height);}
  function update(s,time,dt,enabled){
    const gate=score.phase(s,.10,.24)*(1-score.phase(s,1.17,1.34));
    const velocity=lastScore===null?0:Math.abs(s-lastScore)/Math.max(.001,dt);lastScore=s;
    energy+=(Math.min(1,velocity*2.4)-energy)*(1-Math.exp(-dt*(velocity>.005?14:8)));
    if(!enabled||gate<.001){canvas.hidden=true;if(wasVisible)clear();wasVisible=false;return;}
    canvas.hidden=false;wasVisible=true;
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);
    camera.updateMatrixWorld();
    let segments=0;
    cards.forEach((card,i)=>{
      card.group.updateMatrixWorld(true);
      corners.forEach(([x,y],edge)=>{
        point.set(x*motion.CARD.width/2,y*motion.CARD.height/2,motion.CARD.depth/2);
        card.group.localToWorld(point);point.project(camera);
        const px=(point.x*.5+.5)*W,py=(-point.y*.5+.5)*H,h=history[i][edge];
        if(!Number.isFinite(px+py)||point.z>1){h.length=0;return;}
        // A fixed sampling interval keeps the same tail duration on 60/120Hz displays.
        if(!h.length||time-h[h.length-1].time>=1/90)h.push({x:px,y:py,time});
        while(h.length>1&&(time-h[0].time>SETTINGS.life||h.length>48))h.shift();
        if(energy<.015||h.length<3)return;
        const maxLength=W<=760?SETTINGS.maxLength*.6:SETTINGS.maxLength;
        let distance=0;
        for(let j=h.length-1;j>0;j--){
          const a=h[j],b=h[j-1],length=Math.hypot(a.x-b.x,a.y-b.y);distance+=length;
          if(distance>maxLength||length>maxLength*.65)break;
          const age=(time-b.time)/SETTINGS.life,tail=Math.pow(1-age,1.8),alpha=SETTINGS.opacity*gate*energy*tail*Math.min(1,distance/8);
          segments++;
          // A soft silver thread with a quieter warm edge; no duplicate artwork.
          ctx.lineCap='round';ctx.lineWidth=(W<=760?1.3:2.1)*tail+.25;
          ctx.strokeStyle=`rgba(255,251,237,${alpha*1.8})`;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
          ctx.lineWidth=.65;ctx.strokeStyle=`rgba(130,112,86,${alpha*.75})`;ctx.beginPath();ctx.moveTo(a.x+.8,a.y+.6);ctx.lineTo(b.x+.8,b.y+.6);ctx.stroke();
          if(j%4===i%4){ctx.fillStyle=`rgba(137,117,90,${alpha*.85})`;ctx.beginPath();ctx.arc(b.x+Math.sin(i*3+j)*3,b.y+Math.cos(i+j)*3,.65,0,Math.PI*2);ctx.fill();}
        }
      });
    });
    canvas.dataset.segments=String(segments);canvas.dataset.energy=energy.toFixed(3);
  }
  resize();return{update,resize,dispose(){canvas.remove();clear();}};
};

window.createEntranceDust=function({host,title,score}){
  const canvas=document.createElement('canvas');canvas.id='entrance-dust';canvas.setAttribute('aria-hidden','true');
  Object.assign(canvas.style,{position:'absolute',inset:'0',width:'100%',height:'100%',pointerEvents:'none'});host.append(canvas);
  const ctx=canvas.getContext('2d');
  const SETTINGS={start:.60,settled:1.27,fillStart:1.08,end:1.20,travel:105};
  const random=(x,y,salt=0)=>{const n=Math.sin(x*127.1+y*311.7+salt*73.13)*43758.5453;return n-Math.floor(n);};
  let W=0,H=0,dpr=1,particles=[],last=-1;
  function resize(){
    W=host.clientWidth;H=host.clientHeight;dpr=Math.min(devicePixelRatio||1,W<=760?1.25:1.5);
    canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);
    // offset geometry is unaffected by the parent's orange-dot zoom. The DOM
    // title remains intact for accessibility and the final sharp letterforms.
    const css=getComputedStyle(title),size=parseFloat(css.fontSize),lineHeight=parseFloat(css.lineHeight);
    const left=title.offsetLeft,top=title.offsetTop,width=title.offsetWidth;
    const source=document.createElement('canvas');source.width=W;source.height=H;
    const ink=source.getContext('2d',{willReadFrequently:true});ink.font=`${css.fontWeight} ${size}px ${css.fontFamily}`;
    ink.letterSpacing=css.letterSpacing;ink.textAlign='center';ink.textBaseline='alphabetic';ink.fillStyle='#22231f';
    // Text nodes separated by the existing <br>, preserving its two-line layout.
    const lines=[];let line='';title.childNodes.forEach(node=>{if(node.nodeName==='BR'){lines.push(line);line='';}else if(node.nodeType===3)line+=node.textContent;});lines.push(line);
    const metrics=ink.measureText('Hg'),ascent=metrics.fontBoundingBoxAscent||size*.8,descent=metrics.fontBoundingBoxDescent||size*.2;
    lines.forEach((text,i)=>{
      const extra=i===lines.length-1?size*.155:0;
      ink.fillText(text,left+width/2-extra/2,top+i*lineHeight+(lineHeight-ascent-descent)/2+ascent);
    });
    const pixels=ink.getImageData(0,0,W,H).data,candidates=[],step=2;
    for(let y=Math.max(0,Math.floor(top));y<Math.min(H,top+title.offsetHeight+size*.2);y+=step){
      for(let x=Math.max(0,Math.floor(left-3));x<Math.min(W,left+width+3);x+=step){
        if(pixels[(y*W+x)*4+3]<80)continue;
        const r=random(x,y),second=y>top+lineHeight;
        candidates.push({x,y,r,birth:random(x,y,4)*.38,onset:(second?.12:0)+.16*x/W+.15*r,dx:(r-.5)*SETTINGS.travel*2,dy:(random(x,y,1)-.72)*SETTINGS.travel,curve:(random(x,y,2)-.5)*50,size:.8+random(x,y,3)*.6});
      }
    }
    const limit=W<=760?2300:7200;
    candidates.sort((a,b)=>a.r-b.r);
    particles=candidates.length<=limit?candidates:Array.from({length:limit},(_,i)=>candidates[Math.floor(i*candidates.length/limit)]);
    last=-1;
  }
  function update(s){
    if(s===last)return;last=s;
    // Fine, faint grains gain weight as they arrive. Assembly overlaps the
    // final ink before the grains visually stop moving; no delayed second beat.
    const p=score.phase(s,SETTINGS.start,SETTINGS.settled),ink=score.phase(s,SETTINGS.fillStart,SETTINGS.end);
    title.style.opacity=String(ink);
    if(p<=0||ink>=1){canvas.hidden=true;canvas.dataset.particles='0';return;}
    canvas.hidden=false;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);
    const presence=score.phase(s,.60,.90)*(1-ink),travel=W<=760?.65:1;
    let count=0;
    for(const dot of particles){
      const t=score.phase(p,dot.onset,.88+dot.onset*.24),away=1-t;
      const x=dot.x+dot.dx*away*away*travel+Math.sin(t*Math.PI)*dot.curve*travel,y=dot.y+dot.dy*away*away*travel;
      const emergence=.28+.72*score.phase(p,dot.birth,dot.birth+.36);
      ctx.globalAlpha=presence*emergence*(.14+.78*t*t);ctx.fillStyle=dot.r>.97?'#9b694c':'#35352e';
      ctx.beginPath();ctx.arc(x,y,dot.size*(.48+.55*t+.24*ink),0,Math.PI*2);ctx.fill();count++;
    }
    ctx.globalAlpha=1;canvas.dataset.particles=String(count);canvas.dataset.progress=p.toFixed(3);
  }
  resize();return{resize,update,dispose(){title.style.opacity='';canvas.remove();}};
};

// The dot remains the camera's fixed origin. Three faint impressions retain
// the heading's previous scale, like ink briefly holding in the paper.
window.createEntranceEcho=function({host,title,score}){
  const SETTINGS={opacity:[.14,.085,.045],lag:[.055,.10,.16],maxOffset:.013};
  const originalPosition=title.style.position,originalZ=title.style.zIndex;
  title.style.position='relative';title.style.zIndex='1';
  const echoes=SETTINGS.opacity.map((opacity,i)=>{
    const node=title.cloneNode(true);node.removeAttribute('id');node.classList.add('entrance-echo');
    node.setAttribute('aria-hidden','true');node.removeAttribute('aria-labelledby');
    // Keep the dot's layout space while avoiding a second animated orange dot.
    node.querySelectorAll('[id]').forEach(child=>{child.removeAttribute('id');child.style.visibility='hidden';});
    Object.assign(node.style,{position:'absolute',margin:'0',zIndex:'0',pointerEvents:'none',opacity:'0',color:'#6b6256',filter:`blur(${.55+i*.55}px)`,willChange:'transform,opacity'});
    host.append(node);return{node,scale:1,opacity};
  });
  let left=0,top=0,lastTime=null;
  function resize(){
    left=title.offsetLeft;top=title.offsetTop;
    echoes.forEach(({node})=>{node.style.left=left+'px';node.style.top=top+'px';node.style.width=title.offsetWidth+'px';node.style.height=title.offsetHeight+'px';});
    lastTime=null;
  }
  function update(s,origin,time){
    const dt=lastTime===null?1/60:Math.min(.05,Math.max(0,time-lastTime));lastTime=time;
    const dive=score.presentation(s).portalDive,current=1+dive*dive*2;
    const gate=score.phase(s,1.35,1.43)*(1-score.phase(s,1.74,1.87));
    echoes.forEach((echo,i)=>{
      if(gate<.001){echo.scale=current;echo.node.style.opacity='0';return;}
      echo.scale+=(current-echo.scale)*(1-Math.exp(-dt/SETTINGS.lag[i]));
      const lag=echo.scale/current-1,limit=SETTINGS.maxOffset*(i+1);
      const relative=1+Math.max(-limit,Math.min(limit,lag));
      const strength=Math.min(1,Math.abs(lag)/(.010+i*.005));
      echo.node.style.transformOrigin=`${origin.x-left}px ${origin.y-top}px`;
      echo.node.style.transform=`translateZ(0) scale(${relative})`;
      echo.node.style.opacity=(echo.opacity*gate*strength).toFixed(4);
    });
  }
  resize();return{resize,update,dispose(){echoes.forEach(e=>e.node.remove());title.style.position=originalPosition;title.style.zIndex=originalZ;}};
};

  


    /* V11 / warm, crafted, quiet. Existing palette, materials and choreography.
 * Three small physical responses; driven only by the gallery's shared clock.
 * No postprocessing, new artwork, extra lights or independent animation loop. */
export const createSurfaceDetails = function(options) {
  
  const {T,cards,groundScene,motion,arrival,images,reduced}=options;
  // The impact remains in the floor throughout the hero; only scroll retires it.
  const SETTINGS={spillOpacity:.16,glintOpacity:.82,crackOpacity:.68};
  const {width:W,height:H,radius:R,depth:D,bevel:B}=motion.CARD;
  const clamp=x=>Math.max(0,Math.min(1,x));
  const phase=(x,a,b)=>{const t=clamp((x-a)/(b-a));return t*t*(3-2*t);};
  const vertexShader='varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}';
  const floorGroup=new T.Group();groundScene.add(floorGroup);
  const plane=new T.PlaneGeometry(1,1);

  // A small image sample supplies the actual artwork's reflected color. Only
  // the playing video is resampled, at four Hz, never a GPU readback or full image.
  const sample=document.createElement('canvas');sample.width=sample.height=8;
  const ctx=sample.getContext('2d',{willReadFrequently:true});
  function artworkColor(source,fallback){
    try{
      ctx.clearRect(0,0,8,8);ctx.drawImage(source,0,0,8,8);
      const data=ctx.getImageData(0,0,8,8).data;let r=0,g=0,b=0,weight=0;
      for(let i=0;i<data.length;i+=4){
        const hi=Math.max(data[i],data[i+1],data[i+2]),lo=Math.min(data[i],data[i+1],data[i+2]);
        const w=.2+(hi-lo)/255;r+=data[i]*w;g+=data[i+1]*w;b+=data[i+2]*w;weight+=w;
      }
      const color=new T.Color(r/weight/255,g/weight/255,b/weight/255);
      color.convertSRGBToLinear();return color.lerp(new T.Color(0xefe6d8),.18);
    }catch{return fallback.clone();}
  }
  const spills=cards.map((card,i)=>{
    const color=artworkColor(images[i],new T.Color(0xc9b49b));
    const material=new T.ShaderMaterial({transparent:true,depthWrite:false,depthTest:false,
      uniforms:{uColor:{value:color.clone()},uAlpha:{value:0}},vertexShader,
      fragmentShader:`varying vec2 vUv;uniform vec3 uColor;uniform float uAlpha;
        void main(){vec2 p=(vUv-.5)*2.;float r=dot(p,p);
          float a=exp(-r*3.8)*(1.-smoothstep(.55,1.,r));
          gl_FragColor=vec4(uColor,a*uAlpha);
          #include <encodings_fragment>
        }`});
    const mesh=new T.Mesh(plane,material);mesh.renderOrder=-3;floorGroup.add(mesh);
    return{mesh,material,target:color};
  });

  // Fractured plaster: fine irregular fissures, lit broken edges and granular
  // chips. Draw once at 2x resolution; the mark stays fixed at first contact.
  const crackCanvas=document.createElement('canvas');crackCanvas.width=crackCanvas.height=1024;
  const cc=crackCanvas.getContext('2d');
  cc.scale(2,2);
  let crackSeed=417;
  const crackRandom=()=>{crackSeed=(1664525*crackSeed+1013904223)>>>0;return crackSeed/4294967296;};
  const paths=[
    [[256,256],[227,247],[201,262],[176,253],[142,271],[104,264],[60,279]],
    [[256,256],[285,269],[310,258],[341,277],[373,270],[411,289],[449,283]],
    [[256,256],[247,291],[267,319],[257,352],[278,382],[270,422]],
    [[256,256],[274,230],[263,203],[283,180],[279,152]],
    [[176,253],[162,230],[142,220]],[[341,277],[353,305],[374,317]],
    [[257,352],[234,366],[222,392]]
  ];
  function stroke(points,color,width,dx,dy){
    cc.strokeStyle=color;cc.lineWidth=width;cc.lineJoin='round';cc.lineCap='round';cc.beginPath();
    points.forEach(([x,y],i)=>i?cc.lineTo(x+dx,y+dy):cc.moveTo(x+dx,y+dy));cc.stroke();
  }
  function fracturePath(path){
    const points=[path[0]];
    for(let i=1;i<path.length;i++){
      const a=path[i-1],b=path[i],dx=b[0]-a[0],dy=b[1]-a[1],length=Math.hypot(dx,dy),steps=Math.ceil(length/4.5);
      for(let j=1;j<=steps;j++){
        const t=j/steps,jitter=j===steps?0:(crackRandom()-.5)*3;
        points.push([a[0]+dx*t-dy/length*jitter,a[1]+dy*t+dx/length*jitter]);
      }
    }
    return points;
  }
  const fissures=paths.map(fracturePath);
  // Short secondary splits stop irregularly; they never make a uniform starburst.
  fissures.slice(0,4).forEach((path,k)=>{
    for(let j=7;j<path.length-5;j+=11){
      const [x,y]=path[j],side=(j+k)%2?1:-1,reach=12+crackRandom()*15;
      fissures.push(fracturePath([[x,y],[x+side*reach*.4,y+reach*.45],[x+side*reach*.7,y+reach]]));
    }
  });
  fissures.forEach((path,i)=>{
    stroke(path,'rgba(97,80,58,.12)',i<4?5:2.2,.5,1);
    for(let j=1;j<path.length;j++){
      const taper=1-j/path.length,width=(i<4?1.65:.8)*(.25+.75*taper),segment=[path[j-1],path[j]];
      stroke(segment,'rgba(255,252,241,.92)',width+1.0,-.7,1.2);
      stroke(segment,'rgba(102,83,60,.84)',width,0,0);
      if(i<4)stroke(segment,'rgba(57,48,37,.46)',width*.35,.2,0);
      const [x,y]=path[j];
      for(let n=0;n<2;n++){
        const offset=(crackRandom()-.5)*8,r=.2+crackRandom()*.7;
        cc.fillStyle=crackRandom()>.5?'rgba(107,91,67,.30)':'rgba(255,253,243,.76)';
        cc.beginPath();cc.arc(x+offset,y+(crackRandom()-.5)*6,r,0,Math.PI*2);cc.fill();
      }
      if(j%5===0&&i<4){
        const chip=.7+crackRandom()*1.5;
        cc.fillStyle='rgba(127,108,82,.25)';cc.beginPath();cc.moveTo(x-1,y);cc.lineTo(x+chip,y-1);cc.lineTo(x+chip*.4,y+chip*1.6);cc.closePath();cc.fill();
      }
    }
  });
  const crackTexture=new T.CanvasTexture(crackCanvas);crackTexture.encoding=T.sRGBEncoding;
  crackTexture.anisotropy=4;
  const crackMaterial=new T.ShaderMaterial({transparent:true,depthWrite:false,depthTest:false,
    uniforms:{uMap:{value:crackTexture},uRadius:{value:0},uAlpha:{value:0}},vertexShader,
    fragmentShader:`varying vec2 vUv;uniform sampler2D uMap;uniform float uRadius;uniform float uAlpha;
      void main(){vec4 c=texture2D(uMap,vUv);float r=length((vUv-.5)*2.);
        c.a*=uAlpha*(1.-smoothstep(uRadius-.09,uRadius,r));gl_FragColor=c;}`});
  const crack=new T.Mesh(plane,crackMaterial);crack.scale.set(2.15,2.6,1);crack.renderOrder=-1;floorGroup.add(crack);

  // A narrow ribbon follows the real rounded bevel. Its UV follows perimeter
  // distance so the catch slides around corners without a flashing join.
  function outline(inset){
    const x=W/2-inset,y=H/2-inset,r=R-inset,points=[];
    const corners=[[x-r,y-r,0],[-x+r,y-r,Math.PI/2],[-x+r,-y+r,Math.PI],[x-r,-y+r,Math.PI*1.5]];
    corners.forEach(([cx,cy,a])=>{for(let j=0;j<=12;j++){const t=a+j/12*Math.PI/2;points.push([cx+Math.cos(t)*r,cy+Math.sin(t)*r]);}});
    points.push(points[0]);return points;
  }
  const outer=outline(-.0015),inner=outline(.011),positions=[],uvs=[],indices=[];
  let length=0;const distances=[0];for(let i=1;i<outer.length;i++){length+=Math.hypot(outer[i][0]-outer[i-1][0],outer[i][1]-outer[i-1][1]);distances.push(length);}
  outer.forEach((p,i)=>{positions.push(...p,0,...inner[i],0);uvs.push(distances[i]/length,0,distances[i]/length,1);if(i<outer.length-1){const j=i*2;indices.push(j,j+1,j+2,j+1,j+3,j+2);}});
  const rim=new T.BufferGeometry();rim.setAttribute('position',new T.Float32BufferAttribute(positions,3));rim.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));rim.setIndex(indices);
  const glints=cards.map(card=>{
    const material=new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.DoubleSide,
      uniforms:{uHead:{value:0},uWidth:{value:.075},uAlpha:{value:0}},vertexShader,
      fragmentShader:`varying vec2 vUv;uniform float uHead,uWidth,uAlpha;
        void main(){float d=abs(fract(vUv.x-uHead+.5)-.5);
          float catchLight=exp(-pow(d/uWidth,2.));
          float edge=pow(max(0.,sin(vUv.y*3.14159265)),.65);
          gl_FragColor=vec4(1.,.98,.92,catchLight*edge*uAlpha);}`});
    const front=new T.Mesh(rim,material),back=new T.Mesh(rim,material);
    front.position.z=D/2+B+.001;back.position.z=-D/2-B-.001;
    // Added after practice/tunnel cloning; they cannot inherit these accents.
    front.raycast=back.raycast=()=>{};
    card.group.add(front,back);return{material,front,back};
  });
  let impactAge=-1,previousTheta=null,speed=0,sampleAge=0;
  function update({state,rig,floor,dt,width}){
    const weight=reduced?0:1-phase(state.scroll,.08,.5);
    floorGroup.visible=weight>.001;
    floorGroup.position.copy(floor.position);floorGroup.quaternion.copy(floor.quaternion);floorGroup.scale.setScalar(rig.scale);
    const theta=state.arrival===null?state.theta:arrival.theta(state.arrival,width);
    const delta=previousTheta===null?0:Math.atan2(Math.sin(theta-previousTheta),Math.cos(theta-previousTheta));previousTheta=theta;
    speed+=(Math.min(4,Math.abs(delta)/Math.max(dt,.001))-speed)*(1-Math.exp(-dt*9));
    if(state.arrival!==null)impactAge=state.arrival-arrival.start(arrival.FIRST)-arrival.FALL;
    const opening=phase(impactAge,0,.23);
    crack.visible=weight>0&&impactAge>=0;
    const hitAngle=arrival.INITIAL_THETA-arrival.FIRST*Math.PI/4;
    crack.position.set(Math.sin(hitAngle)*2.92,-Math.cos(hitAngle)*2.92,.006);
    crackMaterial.uniforms.uRadius.value=opening*.98;
    crackMaterial.uniforms.uAlpha.value=SETTINGS.crackOpacity*weight*opening;
    sampleAge+=dt;const sampleNow=sampleAge>.25;if(sampleNow)sampleAge=0;
    cards.forEach((card,i)=>{
      const angle=theta-i*Math.PI/4,front=Math.max(0,Math.cos(angle));
      const arrived=state.arrival===null?1:phase(state.arrival-arrival.start(i),arrival.FALL-.12,arrival.FALL+.15);
      const spill=spills[i];spill.mesh.visible=weight>.001&&front>.01&&arrived>.001;
      spill.mesh.position.set(Math.sin(angle)*2.92,-Math.cos(angle)*2.92-.2,.002);
      spill.mesh.rotation.z=-angle;spill.mesh.scale.set(2.2,2.05,1);
      if(sampleNow&&weight>0&&card.playing&&card.video?.readyState>=2)spill.target.copy(artworkColor(card.video,spill.target));
      spill.material.uniforms.uColor.value.lerp(spill.target,1-Math.exp(-dt*2.5));
      spill.material.uniforms.uAlpha.value=SETTINGS.spillOpacity*weight*arrived*Math.pow(front,1.5);
      const glint=glints[i],lightAngle=angle+.42;
      const strength=Math.pow(Math.max(0,Math.cos(lightAngle)),5)+.32*Math.pow(Math.max(0,-Math.cos(lightAngle)),8);
      glint.front.visible=glint.back.visible=weight>.001&&arrived>.001&&!reduced;
      glint.material.uniforms.uHead.value=.1+angle/(Math.PI*2)*.9;
      glint.material.uniforms.uWidth.value=.065+Math.min(speed,2)*.022;
      glint.material.uniforms.uAlpha.value=SETTINGS.glintOpacity*strength*weight*arrived;
    });
  }
  function dispose(){floorGroup.removeFromParent();spills.forEach(s=>s.material.dispose());crackMaterial.dispose();crackTexture.dispose();plane.dispose();rim.dispose();glints.forEach(g=>{g.front.removeFromParent();g.back.removeFromParent();g.material.dispose();});}
  return{update,dispose};
};

  


    /* A warm pigment wake connects the moving print to the portrait's color.
 * Deterministic scroll paths, projected card geometry, and the gallery clock. */
export const createBiographyAtmosphere=function({host,T,cards,camera,light,score,motion,image}){
  const make=(id,z)=>{const c=document.createElement('canvas');c.id=id;c.setAttribute('aria-hidden','true');Object.assign(c.style,{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:z});host.append(c);return c;};
  const floor=make('biography-floor','0'),dust=make('biography-pigment','2'),fc=floor.getContext('2d'),dc=dust.getContext('2d');
  const rand=(i,k=0)=>{const n=Math.sin(i*127.1+k*311.7)*43758.5453;return n-Math.floor(n);};
  const vector=new T.Vector3(),matrix=new T.Matrix4(),rotation=new T.Quaternion(),scale=new T.Vector3();
  const project=(x,y,z,m)=>{vector.set(x,y,z).applyMatrix4(m).project(camera);return{x:(vector.x*.5+.5)*W,y:(.5-vector.y*.5)*H};};
  let W=0,H=0,dpr=1,grains=[],last=-1;
  // Sample only the actual cutout, so particles finish inside the artist.
  const sample=document.createElement('canvas');sample.width=128;sample.height=192;
  const sc=sample.getContext('2d',{willReadFrequently:true});sc.drawImage(image,0,0,128,192);
  const pixels=sc.getImageData(0,0,128,192).data,targets=[];
  for(let y=10;y<185;y+=3)for(let x=8;x<120;x+=3)if(pixels[(y*128+x)*4+3]>180)targets.push({x:x/128,y:y/192});
  function resize(){
    camera.updateMatrixWorld(true);
    W=host.clientWidth;H=host.clientHeight;dpr=Math.min(devicePixelRatio||1,W<=760?1.25:1.5);
    for(const c of [floor,dust]){c.width=Math.round(W*dpr);c.height=Math.round(H*dpr);}
    grains=Array.from({length:W<=760?150:380},(_,i)=>{
      const target=targets[Math.floor(rand(i,2)*targets.length)]||{x:.5,y:.5};
      const distance=Math.hypot((target.x-.56)*.67,target.y-.43);
      const arrival=4.79+distance*.67+rand(i,8)*.11,birth=arrival-(.48+rand(i,3)*.25);
      const p=score.biographyPose(birth,W,H,0);
      rotation.setFromEuler(new T.Euler(p.rx,p.ry,p.rz));scale.setScalar(p.s);matrix.compose(new T.Vector3(p.x,p.y,p.z),rotation,scale);
      const from=project(-motion.CARD.width*.46,(rand(i,4)-.5)*motion.CARD.height*.38,0,matrix);
      return{from,target,arrival,birth,r:rand(i,5),tone:rand(i,9),strength:rand(i,10),seed:rand(i,6)*Math.PI*2};
    });last=-1;
  }
  function shadow(group,alpha,landing,middle=false){
    group.updateMatrixWorld(true);
    const a=project(-motion.CARD.width/2,-motion.CARD.height/2,0,group.matrixWorld),b=project(motion.CARD.width/2,-motion.CARD.height/2,0,group.matrixWorld);
    const width=Math.max(W*.035,Math.hypot(a.x-b.x,a.y-b.y)),lift=(1-landing)*22;
    // The shared high left key sends the soft footprint down and right.
    const direction=-light.position.x/light.position.y;
    const x=(a.x+b.x)/2+width*direction*.25,y=Math.max(a.y,b.y)+(middle?21:9)+lift;
    fc.save();fc.translate(x,y);fc.rotate(-.065);fc.scale(width*(.65+.18*(1-landing)),(10+width*.035+lift*.4)*(middle?1.12:1));
    const gradient=fc.createRadialGradient(0,0,0,0,0,1);gradient.addColorStop(0,`rgba(56,40,27,${alpha*(.12+.10*landing)})`);gradient.addColorStop(.35,`rgba(56,40,27,${alpha*.08})`);gradient.addColorStop(1,'rgba(56,40,27,0)');fc.fillStyle=gradient;fc.beginPath();fc.arc(0,0,1,0,Math.PI*2);fc.fill();fc.restore();
  }
  function update(s){
    const active=s>4.05&&s<score.INTRO.exitEnd;
    floor.hidden=dust.hidden=!active;
    if(!active){last=-1;return;}
    const q=score.portrait(s,W,H),reveal=q.color;
    // The shared portrait score restores color evenly as pigment arrives.
    // No spatial mask or separate opacity override: the photograph stays whole.
    if(s===last)return;last=s;
    for(const ctx of [fc,dc]){ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);}
    const exit=1-score.phase(s,score.INTRO.holdEnd,score.INTRO.exitEnd);
    score.FOCUS.forEach((index,i)=>{const start=[4.05,5.85,7.25][i],end=[5.30,6.65,8.05][i];if(cards[index].group.visible)shadow(cards[index].group,score.phase(s,start,start+.25)*exit*(i===1?.8:1),score.phase(s,end-.5,end),i===1);});
    let count=0;
    for(const g of grains){
      const t=(s-g.birth)/(g.arrival-g.birth);if(t<=0||t>=1.15)continue;
      const u=Math.min(1,t),ease=u*u*(3-2*u),curl=Math.sin(u*Math.PI),portraitW=q.height*2/3;
      const target={x:q.x+(g.target.x-.5)*portraitW,y:q.y+(g.target.y-.5)*q.height};
      const x=score.mix(g.from.x,target.x,ease)+Math.sin(u*7+g.seed)*curl*(W<=760?12:30);
      const y=score.mix(g.from.y,target.y,ease)-curl*(18+g.r*42)+Math.cos(u*8+g.seed)*curl*14;
      const alpha=score.phase(t,0,.13)*(1-score.phase(t,.70,1.15));
      // Independent tone and size keep dark accents scattered among fine grains.
      dc.globalAlpha=alpha*(.32+g.strength*.25+(g.tone>.80?.24:g.tone>.28?.08:0));
      dc.fillStyle=g.tone>.80?'#91432b':g.tone>.58?'#b45b34':g.tone>.28?'#c98048':'#dfa66e';
      const r=(.6+g.r*1.25)*(W<=760?.8:1)*(1-.4*ease);
      dc.beginPath();dc.arc(x,y,r,0,Math.PI*2);dc.fill();count++;
    }
    dc.globalAlpha=1;dust.dataset.particles=String(count);dust.dataset.reveal=reveal.toFixed(3);
  }
  resize();return{resize,update,dispose(){floor.remove();dust.remove();}};
};

  


    /* Soft ground impressions and brief edge smears, projected from the actual
 * moving prints. The existing GSAP render owns this canvas; no extra clock. */
export const createStudyAtmosphere=function({host,T,cards,camera,score,motion}){
 const canvas=document.createElement('canvas');canvas.id='study-atmosphere';canvas.setAttribute('aria-hidden','true');
 Object.assign(canvas.style,{position:'absolute',inset:'0',width:'100%',height:'100%',pointerEvents:'none',zIndex:'3'});
 host.insertBefore(canvas,host.querySelector('#gallery-canvas'));
 const ctx=canvas.getContext('2d'),point=new T.Vector3(),history=cards.map(()=>[]);
 let W=0,H=0,dpr=1,lastScore=null,energy=0,visible=false;
 function clear(){ctx.clearRect(0,0,canvas.width,canvas.height);history.forEach(h=>h.length=0);}
 function resize(){W=host.clientWidth;H=host.clientHeight;dpr=Math.min(devicePixelRatio||1,W<=760?1:1.4);canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);clear();}
 function project(group,x,y,z){point.set(x,y,z);group.localToWorld(point);point.project(camera);return{x:(point.x*.5+.5)*W,y:(.5-point.y*.5)*H};}
 function update(s,time,dt,enabled){
  const delta=lastScore===null?0:s-lastScore;lastScore=s;
  const gate=score.phase(s,16.05,16.8)*(1-score.phase(s,26.1,27));
  const speed=Math.abs(delta)>.35?0:Math.min(1,Math.abs(delta)/Math.max(dt,.001)*.65);
  energy+=(speed-energy)*(1-Math.exp(-dt*9));
  if(!enabled||gate<.001){canvas.hidden=true;if(visible)clear();visible=false;return;}
  canvas.hidden=false;visible=true;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);camera.updateMatrixWorld();
  if(Math.abs(delta)>.35)history.forEach(h=>h.length=0);
  let traces=0;
  cards.forEach((card,i)=>{
   const group=card.group,h=history[i];if(!group.visible){h.length=0;return;}group.updateMatrixWorld(true);
   const halfW=motion.CARD.width/2,halfH=motion.CARD.height/2;
   const quad=[[-halfW,halfH],[halfW,halfH],[halfW,-halfH],[-halfW,-halfH]].map(([x,y])=>project(group,x,y,0));
   const width=Math.hypot(quad[1].x-quad[0].x,quad[1].y-quad[0].y),bottom=project(group,0,-halfH-.09,0);
   if(!Number.isFinite(width+bottom.y)||width<14||width>W*1.5){h.length=0;return;}
   const opacity=card.materials[0].opacity*gate;
   // Broad key from upper left: a small rightward offset, feathered underneath.
   if(bottom.y>-40&&bottom.y<H+50){
    ctx.save();ctx.translate(bottom.x+width*.045,bottom.y+width*.025);ctx.scale(width*.60,Math.max(3,width*.045));
    const shade=ctx.createRadialGradient(0,0,0,0,0,1);shade.addColorStop(0,`rgba(67,55,39,${.105*opacity})`);shade.addColorStop(.38,`rgba(67,55,39,${.045*opacity})`);shade.addColorStop(1,'rgba(67,55,39,0)');
    ctx.fillStyle=shade;ctx.fillRect(-1,-1,2,2);ctx.restore();
   }
   while(h.length&&time-h[0].time>.13)h.shift();
   const previous=h[0];
   if(previous&&energy>.06){
    // Only the receding edge carries a trace. The artwork itself stays sharp.
    for(const [a,b] of [[0,3],[1,2]]){
     const p=quad[a],q=quad[b],oldP=previous.quad[a],oldQ=previous.quad[b],distance=Math.hypot(p.x-oldP.x,p.y-oldP.y);
     if(distance<1||distance>W*.22)continue;
     const stretch=Math.min(1,(W<=760?24:48)/distance),tailP={x:p.x+(oldP.x-p.x)*stretch,y:p.y+(oldP.y-p.y)*stretch},tailQ={x:q.x+(oldQ.x-q.x)*stretch,y:q.y+(oldQ.y-q.y)*stretch};
     const smear=ctx.createLinearGradient(p.x,p.y,tailP.x,tailP.y);smear.addColorStop(0,`rgba(147,130,102,${.085*energy*opacity})`);smear.addColorStop(1,'rgba(147,130,102,0)');
     ctx.fillStyle=smear;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.lineTo(tailQ.x,tailQ.y);ctx.lineTo(tailP.x,tailP.y);ctx.closePath();ctx.fill();traces++;
    }
   }
   if(!h.length||time-h[h.length-1].time>=1/60)h.push({time,quad});
  });
  canvas.dataset.energy=energy.toFixed(3);canvas.dataset.traces=String(traces);
 }
 resize();return{update,resize,dispose(){canvas.remove();history.forEach(h=>h.length=0);}};
};

  


    /* Warm editorial reveal: the name blows away into fine graphite dust.
 * Deterministic, scroll-scored, and rendered only on scroll/resize; no second clock.
 * Tune travel/lifetime below. Smaller screens use fewer emitted particles. */
export const createPortraitDissolve=function({host,title,signature,score}){
  const canvas=document.createElement('canvas');canvas.id='portrait-dust';canvas.setAttribute('aria-hidden','true');host.append(canvas);
  const ctx=canvas.getContext('2d');
  let W=0,H=0,dpr=1,nameLayer,nameBox,last=-1;
  const random=(x,y,salt=0)=>{const n=Math.sin(x*127.1+y*311.7+salt*73.13)*43758.5453;return n-Math.floor(n);};
  function layer(source,step,limit){
    const {width:w,height:h}=source,data=source.getContext('2d').getImageData(0,0,w,h).data,cells=[];
    for(let y=0;y<h;y+=step)for(let x=0;x<w;x+=step){
      let alpha=0,sx=0,sy=0;
      for(let yy=y;yy<Math.min(y+step,h);yy++)for(let xx=x;xx<Math.min(x+step,w);xx++){
        const a=data[(yy*w+xx)*4+3];if(a>8){alpha+=a;sx+=xx*a;sy+=yy*a;}
      }
      if(!alpha)continue;
      const r=random(x,y),onset=.025+.40*x/w+.12*(1-y/h)+.20*r;
      cells.push({x,y,cx:sx/alpha,cy:sy/alpha,onset,r,life:Math.min(.34+.20*random(x,y,1),.98-onset),emit:false});
    }
    const count=Math.min(limit,cells.length),ranked=[...cells].sort((a,b)=>random(a.x,a.y,5)-random(b.x,b.y,5));
    ranked.slice(0,count).forEach(c=>c.emit=true);
    const work=document.createElement('canvas');work.width=w;work.height=h;
    return{source,work,paint:work.getContext('2d'),cells,step};
  }
  function resize(){
    W=host.clientWidth;H=host.clientHeight;dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);
    const css=getComputedStyle(title),size=parseFloat(css.fontSize),height=title.offsetHeight,width=title.offsetWidth,pad=4;
    nameBox={width,height,top:title.offsetTop,groupHeight:signature.offsetHeight,pad};
    const source=document.createElement('canvas');source.width=Math.ceil((width+pad*2)*2);source.height=Math.ceil((height+pad*2)*2);
    const ink=source.getContext('2d');ink.font=`${css.fontWeight} ${size*2}px ${css.fontFamily}`;ink.fillStyle='#22231f';ink.textBaseline='alphabetic';
    ink.letterSpacing=(parseFloat(css.letterSpacing)||0)*2+'px';
    const metrics=ink.measureText(title.textContent),ascent=metrics.fontBoundingBoxAscent||size*1.6,descent=metrics.fontBoundingBoxDescent||size*.4;
    const baseline=(height*2-ascent-descent)/2+ascent;
    ink.fillText(title.textContent,pad*2,baseline+pad*2);
    nameLayer=layer(source,W<=760?4:3,W<=760?350:1100);last=-1;
  }
  function paintLayer(l,progress,x,y,scale,opacity){
    const paint=l.paint;paint.clearRect(0,0,l.work.width,l.work.height);paint.globalCompositeOperation='source-over';paint.drawImage(l.source,0,0);
    paint.globalCompositeOperation='destination-out';paint.beginPath();
    for(const c of l.cells)if(progress>c.onset)paint.rect(c.x,c.y,l.step,l.step);
    paint.fill();paint.globalCompositeOperation='source-over';
    ctx.globalAlpha=opacity;ctx.drawImage(l.work,x,y,l.work.width*scale,l.work.height*scale);
    let alive=0;
    for(const c of l.cells){
      if(!c.emit)continue;const t=(progress-c.onset)/c.life;if(t<=0||t>=1)continue;
      // A shared breeze with individual eddies: every path starts at its ink
      // cell and remains deterministic when the visitor reverses the scroll.
      const travel=W<=760?.58:1,drift=t*(.65+.35*t),seed=random(c.x,c.y,2);
      const curl=Math.sin(t*Math.PI)*(.35+.65*t),angle=c.r*Math.PI*2;
      const dx=((65+120*c.r)*drift+Math.sin(t*8+angle)*curl*(10+18*seed))*travel;
      const dy=((-68+100*seed)*drift-28*t*t+Math.cos(t*7+angle)*curl*(15+20*c.r))*travel;
      ctx.globalAlpha=opacity*.82*Math.min(1,t*16)*(1-score.phase(t,.22,1));
      ctx.fillStyle='#35342e';
      const radius=(.55+random(c.x,c.y,3)*.8)*(1-t*.48);
      ctx.beginPath();ctx.arc(x+c.cx*scale+dx,y+c.cy*scale+dy,radius,0,Math.PI*2);ctx.fill();alive++;
    }
    return alive;
  }
  function update(s,q){
    const progress=q.dissolve;
    title.style.opacity=progress>0?'0':'';
    if(progress<=0||progress>=1){canvas.hidden=true;canvas.dataset.progress=progress.toFixed(4);last=-1;return;}
    canvas.hidden=false;if(s===last)return;last=s;
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);
    const alive=paintLayer(nameLayer,progress,(W-nameBox.width)/2-nameBox.pad,q.titleY-nameBox.groupHeight/2+nameBox.top-nameBox.pad,.5,1);
    ctx.globalAlpha=1;canvas.dataset.progress=progress.toFixed(4);canvas.dataset.particles=String(alive);
  }
  resize();return{resize,update};
};

  
