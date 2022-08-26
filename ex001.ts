
// class Player{
//     private strength:number;
//     private name:string;
//     private exp:number;
//     constructor(strength:number,name:string){
//         this.strength  = strength;
//         this.name = name;
//         this.exp = 0;
//     }


//     attack(monster:Monster){
//         let random:number = (Math.floor(Math.random() * 2)+1)

//             if (random == 2){
//                 monster.hp -= this.strength * 2
//                 player.gainExperience(this.strength * 2) 
//                 console.log(`Player ${this.name} attacks a monster (HP:${monster.hp}) [CRITICAL]`)
//                 console.log(`Player ${this.name} player gain experience ${this.exp}`)
  
//             }else {
//                 monster.hp -= this.strength
//                 player.gainExperience(this.strength) 
//                 console.log(`Player ${this.name} attacks a monster (HP:${monster.hp})`)
//                 console.log(`Player ${this.name} player gain experience ${this.exp}`)

//             }

//             if(monster.checkMonsterInjure(monster.hp)){
//                 console.log(`Monster is injure`)
//             }

//         console.log("")
//         if(monster.hp > 0){
//             player.attack(monster);
//         } else {
//             console.log(`Monster is died`)
//         }

//     }


//     gainExperience(exp:number){
//         this.exp += exp

//     }

// }


// class Monster{
//     // Think of how to write injure
//     public hp:number;
//     constructor(){
//         this.hp = 100
//     }

//     checkMonsterInjure(hp:number){
//         if (hp < 30 && hp > 0){
//           return true
//         } else {
//             return false;
//         }
//     }


// }


// // Invocations of the class and its methods
// const player = new Player(20,'Peter');
// const monster = new Monster();
// player.attack(monster);

