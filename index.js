//Guessing Game
//Guess a number 1 to 5
//Generate a number 1 to 5
//If guess machtes the random message will be shown
//Run for 3 times
//Show number of win & lose



var nOWin=0;
var nOLose =0 ;

for (i=1 ; i<=3; i++){
var enterNum= parseInt(prompt("What can be the number between 1 to 5?"));
var randomNum = Math.floor(Math.random()*5)+1;

if(enterNum == randomNum){
    document.write("CONGRATULATION!! You Enterted - "+ enterNum +", and hidden number was also - " + randomNum + ".<br/><br/>.") ;
    nOWin++;
}
else{
    document.write( "SORRY!! You Enterted - "+ enterNum +", But hidden number was - " + randomNum + ".<br/><br/>");
    nOLose++;
}
}
document.write("Total number of Correct Guess  = "+ nOWin + "<br/><br/>");
document.write("Total number of Wrong Guess  = "+ nOLose + "<br/>");

function rf (){
window.location.reload();

}