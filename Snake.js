class Snake {
    constructor(){
      this.x = 300,
      this.y = 300,
      this.vx = 1,
      this.vy = 0

      this.total = 0;
      this.parts = [];
    }
  
    update(){
        //if(this.total === this.parts.length){
            for(let i = 0; i<this.parts.length-1;i++){
                this.parts[i] = this.parts[i+1];
            }
        //}

        this.parts[this.total-1] = {x:this.x,y:this.y};

        this.x += this.vx*resolution;
        this.y += this.vy*resolution;

        this.x = constrain(this.x , 0,width-resolution);
        this.y = constrain(this.y,0,height-resolution);

      if(DEBUG){
        let ds = 100;
        let dwM = dist(this.x,this.y,width,this.y)
        let dhM = dist(this.x,this.y,this.x,height)

        let dwm = dist(this.x,this.y,0,this.y)
        let dhm = dist(this.x,this.y,this.x,0)
        
        if(dwM<ds){stroke(255,0,0) }else{ stroke(255,200,0)}
        line(this.x,this.y+resolution/2,width,this.y+resolution/2);

        if(dwm<ds){stroke(255,0,0) }else{ stroke(255,200,0)}
        line(this.x,this.y+resolution/2,-1*width,this.y+resolution/2);

        if(dhM<ds){stroke(255,0,0) }else{ stroke(255,200,0)}
        line(this.x+resolution/2,this.y,this.x+resolution/2,height);

        if(dhm<ds){stroke(255,0,0) }else{ stroke(255,200,0)}
        line(this.x+resolution/2,this.y,this.x+resolution/2,-1*height);

      } 

    }
  
    show(){
        fill(255);
        stroke(51);
        for(let i = 0; i<this.parts.length;i++){
            rect(this.parts[i].x,this.parts[i].y,resolution,resolution);
        }
        rect(this.x,this.y,resolution,resolution);
    }
  
    dir(vx,vy){
      this.vx = vx;
      this.vy = vy;

      
    }

    checkEatFood(){
        for (let i = 0; i < frutas.length; i++) {
            const distancia = dist(frutas[i].x,frutas[i].y,this.x,this.y);
            
            //debug
            if(DEBUG){
                stroke(100,0,100);
                line(this.x+resolution/2,this.y+resolution/2,frutas[i].x+resolution/2,frutas[i].y+resolution/2)  
            }

            if(distancia < 1){
                //comeu a fruta
                frutas.splice(i,1);
                createNewFood();
                this.total++;
            }
            
        }
    }

    death(){
        for(let i=0 ;i<this.parts.length;i++){
            let posX = this.parts[i].x;
            let posY = this.parts[i].y;
            let d = dist(this.x,this.y,posX,posY);
            if(d<1){
                this.total = 0;
                this.parts=[];
            }
        }
    }
}