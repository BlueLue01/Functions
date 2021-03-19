var wrap = document.body.querySelector(".wrapper");
var drgn = document.createElement("div");
 
var dragonHealth = 0;
drgn.innerHTML= "Dragon Health: " + dragonHealth;

document.body.querySelector(".fire").addEventListener("click", function(){
  dragon(2, "fire");
})

document.body.querySelector(".ice").addEventListener("click", function(){
  dragon(1, "ice");
})

document.body.querySelector(".poison").addEventListener("click", function(){
  dragon(4, "poison");
})
function dragon(damage, attacktype){
  if(attacktype == "fire"){
    dragonHealth = dragonHealth + 2;
  }else if(attacktype == "ice"){
    dragonHealth = dragonHealth + 2;
  }else if(attacktype == "poison"){
    dragonHealth = dragonHealth + 4;
  }
   
  drgn.innerHTML = "Dragon Health: " + dragonHealth;
  
  if (dragonHealth >= 10){
    wrap.innerHTML = "You have slain the dragon!";
  }
}
  
  wrap.appendChild(drgn);