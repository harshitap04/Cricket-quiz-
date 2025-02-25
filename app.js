const quizData = [
    {
        question: "Who was the first captain of the Indian cricket team in Test matches?",
        options: ["Kapil Dev", "Lala Amarnath", "C.K. Nayudu", "Sunil Gavaskar"],
        correctAns: "C.K. Nayudu"
    },
    {
        question: "Which Indian cricketer is known as the 'God of Cricket'?",
        options: ["Virat Kohli", "Rahul Dravid", "MS Dhoni", "Sachin Tendulkar"],
        correctAns: "Sachin Tendulkar"
    },
    {
        question: "Who was the captain of the Indian team when they won the 1983 Cricket World Cup?",
        options: ["Sunil Gavaskar", "Kapil Dev", "Mohinder Amarnath", "Ravi Shastri"],
        correctAns: "Kapil Dev"
    },
    {
        question: "Which Indian bowler has taken the highest number of wickets in Test cricket?",
        options: ["Harbhajan Singh", "Zaheer Khan", "Anil Kumble", "Ravichandran Ashwin"],
        correctAns: "Anil Kumble"
    },
    {
        question: "Who was the first Indian batsman to score a triple century in Test cricket?",
        options: ["Virender Sehwag", "Sachin Tendulkar", "Sunil Gavaskar", "Rahul Dravid"],
        correctAns: "Virender Sehwag"
    },
    {
        question: "Which year did India win their second ICC Cricket World Cup?",
        options: ["2011", "2015", "2007", "2003"],
        correctAns: "2011"
    },
    {
        question: "Who was the captain of the Indian team when they won the 2007 ICC T20 World Cup?",
        options: ["Virat Kohli", "Rahul Dravid", "MS Dhoni", "Sourav Ganguly"],
        correctAns: "MS Dhoni"
    },
    {
        question: "Which Indian player has scored the fastest century in ODI cricket?",
        options: ["Virat Kohli", "Virender Sehwag", "Rohit Sharma", "Kapil Dev"],
        correctAns: "Virat Kohli"
    },
    {
        question: "Who was the first Indian cricketer to score a double century in ODIs?",
        options: ["Virender Sehwag", "MS Dhoni", "Rohit Sharma", "Sachin Tendulkar"],
        correctAns: "Sachin Tendulkar"
    },
    {
        question: "Who is the only Indian bowler to take 10 wickets in a Test innings?",
        options: ["Ravichandran Ashwin", "Harbhajan Singh", "Anil Kumble", "Jasprit Bumrah"],
        correctAns: "Anil Kumble"
    },
    {
        question: "Which Indian cricketer is known as 'The Wall'?",
        options: ["Sourav Ganguly", "MS Dhoni", "Rahul Dravid", "VVS Laxman"],
        correctAns: "Rahul Dravid"
    },
    {
        question: "Who is the leading run-scorer for India in international cricket?",
        options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Sourav Ganguly"],
        correctAns: "Sachin Tendulkar"
    },
    {
        question: "Which Indian batsman hit six sixes in an over in T20 international cricket?",
        options: ["MS Dhoni", "Virender Sehwag", "Yuvraj Singh", "Hardik Pandya"],
        correctAns: "Yuvraj Singh"
    },
    {
        question: "Who was the first Indian cricketer to score a century in T20 Internationals?",
        options: ["Rohit Sharma", "Suresh Raina", "Virat Kohli", "Gautam Gambhir"],
        correctAns: "Suresh Raina"
    },
    {
        question: "Which Indian cricketer has won the most 'Man of the Match' awards in ODIs?",
        options: ["MS Dhoni", "Sachin Tendulkar", "Virat Kohli", "Kapil Dev"],
        correctAns: "Sachin Tendulkar"
    },
    {
        question: "Who was India's coach during the 2011 Cricket World Cup win?",
        options: ["Greg Chappell", "Gary Kirsten", "Anil Kumble", "Ravi Shastri"],
        correctAns: "Gary Kirsten"
    },
    {
        question: "Which Indian cricketer has the most centuries in international cricket after Sachin Tendulkar?",
        options: ["Virat Kohli", "Rohit Sharma", "Rahul Dravid", "Sourav Ganguly"],
        correctAns: "Virat Kohli"
    },
    {
        question: "Who holds the record for the highest individual score in ODIs for India?",
        options: ["Virender Sehwag", "Rohit Sharma", "Sachin Tendulkar", "MS Dhoni"],
        correctAns: "Rohit Sharma"
    },
    {
        question: "Who was the first Indian cricketer to take a hat-trick in Test cricket?",
        options: ["Kapil Dev", "Harbhajan Singh", "Anil Kumble", "Javagal Srinath"],
        correctAns: "Harbhajan Singh"
    },
    {
        question: "Which Indian captain has won all three ICC trophies (T20 World Cup, ODI World Cup, and Champions Trophy)?",
        options: ["Sourav Ganguly", "MS Dhoni", "Virat Kohli", "Kapil Dev"],
        correctAns: "MS Dhoni"
    }
];

function randomQue() {
    const data = new Set();
    while (data.size < 5) {
        const index = Math.floor(Math.random() * quizData.length);
        data.add(quizData[index]);
    }
    return [...data];
}

const form = document.querySelector('form');
const problem = randomQue();
const original_answer={};
problem.forEach((obj, index) => {
    const div_element = document.createElement('div');
    div_element.className = "question";

    const para = document.createElement('p');
    para.innerText = `Q${index + 1}. ${obj['question']}`;
    div_element.appendChild(para);

    obj['options'].forEach((data) => {
        const label = document.createElement("label");
        const input = document.createElement('input');
        input.type = "radio";
        input.name = `q${index + 1}`;
        input.value = data;

        label.appendChild(input);
        label.appendChild(document.createTextNode(data));
        div_element.appendChild(label);
        div_element.appendChild(document.createElement('br'));
    });

    form.appendChild(div_element);
    original_answer[`q${index+1}`]=obj['correctAns']
});

const button = document.createElement('button');
button.type = 'submit';
button.className = "submit-btn";
button.innerText = "Submit";
form.appendChild(button);

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const data= new FormData(form);
    let result=0
    for(let [key,value] of data.entries()){
        if(value===original_answer[key])
            result++
    }
    const out=document.querySelector('#out')
    out.innerHTML=`${result} out of 5 is correct`
    
})