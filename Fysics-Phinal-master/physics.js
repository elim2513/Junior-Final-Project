 const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');

function getinput(){

const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?",function(str){

    str.toLowerCase();
    if(str == "motion"){
        terminal.question("What variable are you looking for?",function(str2){
          if(str2 =="d"){
            printOptions();
            terminal.question("What variable do you know?",function(str2){
              if(str2[2] == "null"){
                motion.distance(str2[1],str2[3])
              }
              else{
                motion.distance2(str2[2],str2[3]str2[1])
              }
            })
          }
          else if(str2 == "v"){
            printOptions();
            terminal.question("What variable do you know?",function(str2){
              if(str2[2] == "null"){
                motion.velocity(str2[0],str2[3])
              }
              else{
                motion.velocity2(str2[0],str2[3],str2[2])
              }
            })
          }
          else if(myvar == "a"){
            printOptions();
            terminal.question("What variable do you know?",function str2){
              if(str2[2] == "null"){
                motion.acceleration2(str2[0],str2[1],str2[3])
              }
            }
          }
          else if(myvar == "t"){
            printOptions();
            terminal.question("What variable do you know?",function str2){
              if(str2[3] == "null"){
                motion.time2(str2[1],str2[3])
              }
            }
          }
        });

    }
    else(str == "energy"){
      terminal.question("What variable are you looking for?",function(myvar){
        if(myvar == "ke"){
          printOptions();
          terminal.question("What variable do you know?",function myvar){
            if(myvar[5]){
              motion.kineticenergy(myvar[4],myvar[1])
            }
          }
        }
        else if(myvar == "m"){
          printOptions();
          terminal.question("What variable do you know?",function myvar){
            if(myvar[4]){
              motion.mass(myvar[5],myvar[1])
            }
          }
        }
        else if(myvar == "v"){
          printOptions();
          terminal.question("What variable do you know?")
        }
      });
    }
    else{
      console.log("I do not know how to do that...");
    }


});

}

getinput();
