var currentQuestion = 0;
var timerInterval = null;
var timerValue = 0;
var score = 0;

$("#start-button").click(function(){
    $("#start-screen").hide();
    $("#question").show();
    if(timerInterval){
        clearInterval(timerInterval);
        timerInterval = null;
    }
    setTimerValue(200);
    timerInterval = setInterval(function(){
        setTimerValue(timerValue -1);
        if(timerValue<=0){
            gameOver();
        }
    }, 1000)
    currentQuestion = 0;
    loadQuestion();
});

function setTimerValue(newTimerValue){
    timerValue=newTimerValue;
    $("#time").text(timerValue);
}

function loadQuestion(){
    var question = questions[currentQuestion];
    console.log(question);
    $("#q-title").text(question.title);
    $("#q-a").text(question.choices[0]);
    $("#q-b").text(question.choices[1]);
    $("#q-c").text(question.choices[2]);
    $("#q-d").text(question.choices[3]);
}

function submitAnswer(answer){
    var question = questions[currentQuestion];
    if (question.answer===answer){
        console.log("right");
    }
    else {
        setTimerValue(timerValue -15);
    }
    currentQuestion++;
    if (currentQuestion < questions.length){
        loadQuestion();
    } else {
        gameOver();
    }
}

function gameOver(){
    score = timerValue;
    if(timerInterval){
        clearInterval(timerInterval);
        timerInterval = null;
    }
    $("#displayed-score").text(score);
    $("#question").hide();
    $("#gameOver-screen").show();
}

$("#q-a").click(function(){
    submitAnswer($(this).text());
});

$("#q-b").click(function(){
    submitAnswer($(this).text());
});

$("#q-c").click(function(){
    submitAnswer($(this).text());
});

$("#q-d").click(function(){
    submitAnswer($(this).text());
});

$("#hs-save").submit(function(event){
    event.preventDefault();
    var initials = $("#initials").val();
    if (initials.length > 0) {
        var hs = localStorage.getItem(initials);
        if(!hs || hs<score){
            localStorage.setItem(initials,score);
        }
    }
});

