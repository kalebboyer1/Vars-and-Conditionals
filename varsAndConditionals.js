let jonattack = 25
let jamieattaack = 35

if (jonattack > jamieattaack){
   console.log('jons attack is greater than jamies')
} else if (jamieattaack > jonattack){
   console.log('jamies attack is greater than jons')
} else{
   console.log('their attacks are the same')
}

let jonhealth = 100
let jondefense = 0

if (jonhealth <= jamieattaack){
    console.log('jon has been slain')
} else {
    jonhealth -= jamieattaack
    console.log(`jons health is now ${jonhealth}`)
}

jondefense += 25 

if (jonhealth <= jamieattaack - jondefense){
    console.log('jon has been slain')
} else {
    jonhealth -= jamieattaack - jondefense
    console.log(`jons health is now ${jonhealth}`)
}

if ((jonhealth + 50)>=100){
    jonhealth = 100
} else {
    jonhealth +=50
}
console.log(`jons health after bandage ${jonhealth}`)

for(let i = 1; i <= 5; i++){
   if (jonhealth <= jamieattaack - jondefense){
       console.log('jon has been slain')
   } else {
       jonhealth -= jamieattaack - jondefense
       console.log(`jons current health is ${jonhealth}`)
   }
}

let hits = 0
let bandage = 5
while(jonhealth>0){
    if(jonhealth<50 && bandage > 0){
        jonhealth += 50
        bandage--
        console.log(`jon used a bandage his health is ${jonhealth} he has ${bandage} remaining bandages`)
    }
    jonhealth -= jamieattaack - jondefense
    hits++
}

console.log(hits)