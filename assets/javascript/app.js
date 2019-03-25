
var intervalID;

function startTimer(duration, display) {
  
    var timer = duration;
    var minutes;
    var seconds;
    
    intervalID=setInterval(function () {
        console.log(intervalID);
       
        if (timer < 0) {
            console.log(intervalID);
            clearInterval(intervalID);
            console.log(timer);
            timer = duration;
            console.log(duration);
            alert("Sorry you lost");
        
           
        } else {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
            console.log(timer);
        }

        timer--;
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector("#time");
    startTimer(fiveMinutes, display);
};



var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "What computer component holds all the others together?", "Motherboard", "Graphics card", "Expansion card", "A" ],
    [ "What component is used to generate and output images to display?", "Sound card", "Expansion card", "Graphics card", "C" ],
    [ "What component makes it possible to find specific information quickly?", "Expansion card", "Sound card", "RAM", "C" ],
    [ "What gives your computer power?", "Modem", "PSU", "Router", "B" ],
    [ "What is the main processing unit in your computer?", "HDD", "CPU", "SSD", "B" ],
    [ "What component displays your computer?", "Monitor", "Mouse", "Keyboard", "A" ],
];

function _(x){
    return document.getElementById(x);
}

function renderQuestion(){
    test = _("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        _("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return fales; 
    }
    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer() '>Submit Answer</button>";
}

function checkAnswer(){
   choices = document.getElementsByName("choices");
   for(var i=0; i<choices.length; i++){
       if(choices[i].checked){
           choice = choices[i].value;
       }
   }
   if(choice == questions[pos][4]){
       correct++;
   }
   pos++;
   renderQuestion();
}

window.addEventListener("load", renderQuestion, false);
