
var chiffre_aleatoire=Math.floor(Math.random()*10)


 function jeu(chiffre_aleatoire){
   var d= prompt("Select the difficulty (1,2,3)");
   if (d == 1) 
    essais = 10;
   else if (d ==2){
    essais= 5;}
   else if (d == 3){
    essais =3;}

    while(essais > 0){
       essais --;
       var nombre = prompt("Enter your number :");
       if(nombre == chiffre_aleatoire){
        window.alert("you are a winner!!!!");
        essais=0;}
       else {
        window.alert("GO ON, Only  " + essais + " tries." );}
    }
   
    window.alert("If you wanna play again write yes!")
    response=window.prompt()
    if(response=="yes") {
   alert(jeu(chiffre_aleatoire))}
    else exit;
} 

    alert(jeu(chiffre_aleatoire));

    