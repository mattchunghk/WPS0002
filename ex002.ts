

// interface Attack{
//     damage:number
    
//  }
 
//  class BowAndArrow implements Attack{
//       damage:number;
//       constructor(damage:number){
//         this.damage = damage;
//       }
//  }
 
//  class ThrowingSpear implements Attack{
//     damage:number;
//     constructor(damage:number){
//       this.damage = damage;
//     }
//  }
 
 
//  interface Player{
//      attack(monster:Monster): void;
//      switchAttack(): void;
//      gainExperience(exp:number): void;
//  }

 
//  class Amazon implements Player{
//      private primary: Attack['damage'];
//      private secondary: Attack['damage'];
//      private usePrimaryAttack: boolean;
//      private exp:number;
//      constructor(){
//  
//          this.primary = new BowAndArrow(30).damage;
//           this.secondary = new ThrowingSpear(40).damage;
//             this.usePrimaryAttack = true;
//             this.exp = 0

//          // TODO: set the default value of usePrimaryAttack
//       }
      
//       attack(monster:Monster){
//         let random:number = (Math.floor(Math.random() * 2)+1)

//         if(monster.hp <= 0){
//             monster.hp = 0
//             console.log("Monster Died")
//         }else{
//             if (random == 2){
//                 if (this.usePrimaryAttack){
//                     monster.hp -= this.primary * 2
//                     this.gainExperience(this.primary * 2) 
//                     console.log(`Player Amazon primary attacks a monster (HP:${monster.hp}) [CRITICAL]`)

//                 }else{
//                     monster.hp -= this.secondary * 2
//                     this.gainExperience(this.secondary * 2) 
//                     console.log(`Player Amazon secondary attacks a monster (HP:${monster.hp}) [CRITICAL]`)
//                 }
//                 console.log(`Player Amazon player total experience ${this.exp}`)


//             }else {
//                 if (this.usePrimaryAttack){
//                     monster.hp -= this.primary
//                     this.gainExperience(this.primary) 
//                     console.log(`Player Amazon primary attacks a monster (HP:${monster.hp})`)
//                 }else{
//                     monster.hp -= this.secondary
//                     this.gainExperience(this.secondary) 
//                     console.log(`Player Amazon secondary attacks a monster (HP:${monster.hp})`)
//                 }
//                 console.log(`Player Amazon player total experience ${this.exp}`)
//             }
//         }

//         console.log("")

//     }

      
//       switchAttack(){
//           // TODO: Change the attack mode for this player
//           if(this.usePrimaryAttack){
//             this.usePrimaryAttack = false
//           }else{
//             this.usePrimaryAttack = true
//           }
          
//           if (this.usePrimaryAttack){
//             return true;
//           }else{
//             return false;
//           }
//       }

//       gainExperience(exp:number){
//         this.exp += exp
//     }
 
//       //.. The remaining methods.
//  }

//  class Monster{
//     // Think of how to write injure
//     public hp:number;
//     constructor(hp:number){
//             this.hp = hp;
        
//     }

// }

// // const amazon = new Amazon(30, 40 ,false, 0);
// const monster2 = new Monster(300);

// const player2 = new Amazon()

// player2.attack(monster2);
// player2.switchAttack()
// player2.attack(monster2);
// player2.attack(monster2);
// player2.attack(monster2);
// player2.switchAttack()
// player2.attack(monster2);
// player2.attack(monster2);
// player2.attack(monster2);



interface Attack{
    damage:number
    
 }
 
 class BowAndArrow implements Attack{
      damage:number;
      constructor(damage:number){
        this.damage = damage;
      }
 }
 
 class ThrowingSpear implements Attack{
    damage:number;
    constructor(damage:number){
      this.damage = damage;
    }
 }

 class Swords implements Attack{
    damage:number;
    constructor(damage:number){
      this.damage = damage;
    }
 }

 class Spells implements Attack{
    damage:number;
    constructor(damage:number){
      this.damage = damage;
    }
 }

 interface Player{
     attack(monster:Monster): void;
     switchAttack(): void;
     gainExperience(exp:number): void;
 }

 class Amazon implements Player{
    protected primary: Attack['damage'];
    protected secondary: Attack['damage'];
    protected usePrimaryAttack: boolean = true;
    protected exp:number;
    constructor(){
        this.primary = new BowAndArrow(30).damage;
        this.secondary = new ThrowingSpear(40).damage;
        this.usePrimaryAttack = true;
        this.exp = 0
        // TODO: set the default value of usePrimaryAttack
     }
     
     attack(monster:Monster){
       let random:number = (Math.floor(Math.random() * 2)+1)
       if(monster.hp <= 0){
           monster.hp = 0
           console.log("Monster Died")
       }else{
           if (random == 2){
               if (this.usePrimaryAttack){
                   monster.hp -= this.primary * 2
                   this.gainExperience(this.primary * 2) 
                   console.log(`Player Amazon primary attacks a monster (HP:${monster.hp}) [CRITICAL]`)
               }else{
                   monster.hp -= this.secondary * 2
                   this.gainExperience(this.secondary * 2) 
                   console.log(`Player Amazon secondary attacks a monster (HP:${monster.hp}) [CRITICAL]`)
               }
               console.log(`Player Amazon player total experience ${this.exp}`)


           }else {
               if (this.usePrimaryAttack){
                   monster.hp -= this.primary
                   this.gainExperience(this.primary) 
                   console.log(`Player Amazon primary attacks a monster (HP:${monster.hp})`)
               }else{
                   monster.hp -= this.secondary
                   this.gainExperience(this.secondary) 
                   console.log(`Player Amazon secondary attacks a monster (HP:${monster.hp})`)
               }
               console.log(`Player Amazon player total experience ${this.exp}`)
           }
       }
       console.log("")
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

class Paladin extends Amazon implements Player{
    protected primary: Attack['damage'];
    protected secondary: Attack['damage'];
    protected usePrimaryAttack: boolean = true;
    protected exp:number;

    attack(monster:Monster){
        let random:number = (Math.floor(Math.random() * 2)+1)
        if(monster.hp <= 0){
            monster.hp = 0
            console.log("Monster Died")
        }else{
            if (random == 2){
                if (this.usePrimaryAttack){
                    monster.hp -= this.primary * 2
                    this.gainExperience(this.primary * 2) 
                    console.log(`Player Amazon primary attacks a monster (HP:${monster.hp}) [CRITICAL]`)
                }else{
                    monster.hp -= this.secondary * 2
                    this.gainExperience(this.secondary * 2) 
                    console.log(`Player Amazon secondary attacks a monster (HP:${monster.hp}) [CRITICAL]`)
                }
                console.log(`Player Amazon player total experience ${this.exp}`)
 
 
            }else {
                if (this.usePrimaryAttack){
                    monster.hp -= this.primary
                    this.gainExperience(this.primary) 
                    console.log(`Player Amazon primary attacks a monster (HP:${monster.hp})`)
                }else{
                    monster.hp -= this.secondary
                    this.gainExperience(this.secondary) 
                    console.log(`Player Amazon secondary attacks a monster (HP:${monster.hp})`)
                }
                console.log(`Player Amazon player total experience ${this.exp}`)
            }
        }
        console.log("")
    }


}


 

 class Monster{
    // Think of how to write injure
    public hp:number;
    constructor(){
            this.hp = 1000;
    }

}

// const amazon = new Amazon(30, 40 ,false, 0);
const monster = new Monster();

// const paladin = new Amazon()
const paladin = new Paladin();

paladin.attack(monster);
paladin.switchAttack()
paladin.attack(monster);
paladin.attack(monster);
paladin.attack(monster);
paladin.switchAttack()
paladin.attack(monster);
paladin.attack(monster);
paladin.attack(monster);



