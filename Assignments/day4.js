// 🔨 Build: A Game Entity Hierarchy Using Prototypes
// Build a game entity system with inheritance. 
// This combines prototypes, 'this', and closures — 
// everything from Week 1.


// step-1
class Entity {
    constructor(name,health){
        this.name = name;
        this.health = health;
    }

    takeDamage(amount){
        this.health -= amount;
    }
    isAlive(){
    return this.health > 0
       
    }
    describe(){
        return ` ${this.name} has ${this.health} and ${this.isAlive()}`
    }
}
// step-2
class Player extends Entity{
    constructor(name,health,level,experience){
        super(name,health)
        this.level = level;
        this.experience = experience;
        
    }
   

    gainXp(amount){

    }
}

class Enemy extends Entity{
constructor(damage){
    this.damage = damage;
}
attack(target){

}

}

class Boss extends Enemy{
    constructor(phase){
        this.phase = phase;
    }
    enrage(){

    }
}

static.Entity.prototype.compareHealth(entity1,entity2){
    

}

