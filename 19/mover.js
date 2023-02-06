class Mover{
    constructor(x,y,vx,vy,m){
      this.pos=createVector(x,y);
      this.vel = createVector(vx,vy)
      this.acc = createVector(0,0)
      this.mass = m
      this.r = sqrt(this.mass)*2
    }
    
    applyForce(force){
      let f = p5.Vector.div(force,this.mass)
      this.acc.add(f)
    }
    
    attract(mover){
      let force = p5.Vector.sub(this.pos, mover.pos)
      let distanceSq = constrain(force.magSq(),100,1000)
      let G=25
      let strength = G*(this.mass * mover.mass)/distanceSq
      
      force.setMag(strength)
      
      mover.applyForce(force)
    }
    
    
    update(){
      
      this.vel.add(this.acc)
      this.pos.add(this.vel)
      this.acc.set(0,0)
      
    }
    
    show(){
      stroke(255)
      strokeWeight(2)
      fill(255,100)
      // ellipse(this.pos.x,this.pos.y,32,32)
    }
  }