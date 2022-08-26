


interface Attack{
    damage:number
    
 }

 class createAttack implements Attack{
    damage:number;
    constructor(damage:number){
      this.damage = damage;
    }
 }
 
 class BowAndArrow extends createAttack implements Attack{
 }
 
 class ThrowingSpear extends createAttack implements Attack{
 }

 class Swords extends createAttack implements Attack{
 }

 class Spells extends createAttack implements Attack{
 }

 interface Player{
     attack(monster:Monster): void;
     switchAttack(): void;
     gainExperience(exp:number): void;
 }


 class createPlayer implements Player{
    protected name: string;
    protected primary: Attack['damage'];
    protected secondary: Attack['damage'];
    protected usePrimaryAttack: boolean = true;
    protected exp:number;
    constructor(name: string,primary:Attack['damage'],secondary:Attack['damage']){
        // this.primary = new BowAndArrow(30).damage;
        // this.secondary = new ThrowingSpear(40).damage;
        this.name = name;
        this.primary = primary;
        this.secondary = secondary;
        this.usePrimaryAttack = true;
        this.exp = 0
        // TODO: set the default value of usePrimaryAttack
     }
     
     attack(monster:Monster){
       let random:number = (Math.floor(Math.random() * 2)+1)

       if(monster.hp < 0){
        console.log(`Monster is died`)
        }else{

       
    

           if (random == 2){
               if (this.usePrimaryAttack){
                   monster.hp -= this.primary * 2
                   this.gainExperience(this.primary * 2) 
                   console.log(`Player ${this.name} primary attacks a monster (HP:${monster.hp}) [CRITICAL]`)
               }else{
                   monster.hp -= this.secondary * 2
                   this.gainExperience(this.secondary * 2) 
                   console.log(`Player ${this.name} secondary attacks a monster (HP:${monster.hp}) [CRITICAL]`)
               }
               console.log(`Player ${this.name} player total experience ${this.exp}`)


           }else {
               if (this.usePrimaryAttack){
                   monster.hp -= this.primary
                   this.gainExperience(this.primary) 
                   console.log(`Player ${this.name} primary attacks a monster (HP:${monster.hp})`)
               }else{
                   monster.hp -= this.secondary
                   this.gainExperience(this.secondary) 
                   console.log(`Player ${this.name} secondary attacks a monster (HP:${monster.hp})`)
               }
               console.log(`Player ${this.name} player total experience ${this.exp}`)
           }
       
       if(monster.checkMonsterInjure(monster.hp)){
        console.log(`Monster is injure`)
        }
        console.log("")

    }

   
    //     else {
    //     this.attack(monster);
    //  }  

   }
     
     switchAttack(){
         // TODO: Change the attack mode for this player
         if(this.usePrimaryAttack){
           this.usePrimaryAttack = false
         }else{
           this.usePrimaryAttack = true
         }
     }

     gainExperience(exp:number){
       this.exp += exp
   }

     //.. The remaining methods.
}

class Amazon extends createPlayer{  
    constructor(name: string){
        super(name,new BowAndArrow(30).damage,new ThrowingSpear(40).damage);
        // TODO: set the default value of usePrimaryAttack
     }
}

class Paladin extends createPlayer{  
    constructor(name: string){
        super(name,new Swords(50).damage,new Spells(25).damage);
        // TODO: set the default value of usePrimaryAttack
     }
}

class Barbarian extends createPlayer{  
    constructor(name: string){
        super(name,new Swords(55).damage,new ThrowingSpear(30).damage);
        // TODO: set the default value of usePrimaryAttack
     }
}


class Monster{
    // Think of how to write injure
    public hp:number;
    public maxHp:number;
    constructor(){
        this.maxHp = 200
        this.hp = 200
    }

    checkMonsterInjure(hp:number){
        if (hp < (this.maxHp/2) && hp > 0){
          return true
        } else {
            return false;
        }
    }


}

// const amazon = new Amazon(30, 40 ,false, 0);
const monster = new Monster();

const amazon = new Amazon("Amazon")
const paladin = new Paladin("Paladin")
const barbarian = new Barbarian("Barbarian")


amazon.attack(monster);
amazon.switchAttack()
amazon.attack(monster);

paladin.attack(monster);
paladin.switchAttack()
paladin.attack(monster);

barbarian.attack(monster);
barbarian.switchAttack()
barbarian.attack(monster);





