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

    static compareHealth(entity1,entity2){
    if(entity1.health > entity2.health){
        return 'Entity1 has higher health'
    }
    else if(entity1.health == entity2.health){
        return 'both have equal health'
    }
    else{
        return 'Entity2 has higher health'
    }
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
        this.experience += amount; 
        while(this.experience >= 100){
            this.level++;
            this.experience -=100;
        }
    }
}

class Enemy extends Entity{
constructor(name,health,damage){
    super(name,health)
    this.damage = damage;
}
attack(target){
   target.takeDamage(this.damage)
}

}

class Boss extends Enemy{
    constructor(name,health,damage,phase){
        super(name,health,damage)
        this.phase = phase;
    }
    enrage(){
        this.damage++
        this.phase++
    }
}



let player = new Player('ayush',1000,1,80);
let boss = new Boss('demon',10,22,1)
boss.attack(player)
console.log(player.isAlive())
player.gainXp(100)
boss.enrage()
boss.attack(player)
console.log(player.describe())