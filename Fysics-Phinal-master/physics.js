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
      //do something
        terminal.question("What variable are you lookig for?",function(myvar){
          if(myvar =="d"){}
          else if(myvar == "v"){}
          else if(myvar == "a"){}
          else if(myvar == "t"){}
        });

    }
    else(str == "energy"){
      //do something else
      terminal.question("What variable are you looking for?",function(myvar){
        if(myvar == "ke"){
          //q3 in video
        }
        else if(myvar == "m"){

        }
        else if(myvar == "v"){

        }
      });
    }
    else{
      console.log("I do not know how to do that...");
    }


});

}

getinput();
