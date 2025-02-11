const Questions = [
    {
        q: "What color clothing do referees wear?",
        a: [{text: "All Black", isCorrect: false},
            {text: "All White.", isCorrect: true},
            {text: "Black and White.", isCorrect: false},
            {text: "All Gray.", isCorrect: false},
           ]
    },
    {
        q: "What does one whistle mean?",
        a: [{text: "One whistle: Player is injured must leave the pool", isCorrect: false},
            {text: "One whistle: Offensive foul (defense gets the ball)", isCorrect: false},
            {text: "One whistle: Major/personal foul (offense keeps the ball; shot clock resets; defender is ejected)", isCorrect: false},
            {text: "One whistle: Minor/ordinary foul (offense keeps the ball)", isCorrect: true},
           ]
    },
    {
        q: "What does a Penlty play look like?",
        a: [{text: "All players dash towards the cage in a straight line", isCorrect: false},
            {text: "Players set up to have a M shape in the center of the cage", isCorrect: false},
            {text: "One player gets ball lets fastest player swim in, then they close in to stop defenders.", isCorrect: true},
            {text: "Two people go down to cage, two stay on the posts, and one stays at point", isCorrect: false},
           ]
    },
    {
        q: "What is the requsted time to spend on ball handling?",
        a: [{text: "1 year", isCorrect: true},
            {text: "5 years", isCorrect: false},
            {text: "1/2 a year", isCorrect: false},
            {text: "None of the above", isCorrect: false},
           ]
    },
    {
        q: "When did water polo become a sport?",
        a: [{text: "1946", isCorrect: false},
            {text: "1880", isCorrect: true},
            {text: "2005", isCorrect: false},
            {text: "1870", isCorrect: false},
           ]
    },
    {
        q: "What are the set up spots called?",
        a: [{text: "Wings", isCorrect: false},
            {text: "Posts", isCorrect: false},
            {text: "Center/point", isCorrect: false},
            {text: "All of the above", isCorrect: true},
           ]
    },
    {
        q: "What does the sprinter do?",
        a: [{text: "swims as fast as they can to get the ball", isCorrect: true},
            {text: "follows behind someone to get the ball", isCorrect: false},
            {text: "stays in the cage to prevent goals", isCorrect: false},
            {text: "The strongest player to take the most shots", isCorrect: false},
           ]
    },
    {
        q: "What are the three starting places?",
        a: [{text: "Posts/sprinter/goalie", isCorrect: false},
            {text: "Sprinter/trailer/backup trailer", isCorrect: true},
            {text: "Center/point/wing", isCorrect: false},
            {text: "Goalie/posts/trailer", isCorrect: false},
           ]
    },
    {
        q: "What can you not do with the ball?",
        a: [{text: "Grab with two hands", isCorrect: false},
            {text: "Put under the water", isCorrect: false},
            {text: "Hit someone with it", isCorrect: false},
            {text: "All of the above", isCorrect: true},
           ]
    },
    {
        q: "How long is the defender out if they are ejected?",
        a: [{text: "5 seconds", isCorrect: false},
            {text: "1 quarter", isCorrect: false},
            {text: "20 seconds", isCorrect: true},
            {text: "1 minute", isCorrect: false},
           ]
    },
    {
        q: "Which of these basic rules are false?",
        a: [{text: "You can punch", isCorrect: true},
            {text: "No drowning", isCorrect: false},
            {text: "No hitting the goalie", isCorrect: false},
            {text: "No cusing", isCorrect: false},
           ]
    },
    {
        q: "What do you think of water polo?",
        a: [{text: "great", isCorrect: true},
            {text: "okay", isCorrect: true},
            {text: "meh", isCorrect: true},
            {text: "Its bad", isCorrect: true},
           ]
    },
    
]; 
let currQuestion = 0;
let score = 0;
function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";
    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}
loadQues();
function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}
function loadScore() 
{
    const totalScore = document.getElementById("score");
    totalScore.textContent = `Your score is ${score} out of ${Questions.length}`;

}
function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore() ;
    }
}