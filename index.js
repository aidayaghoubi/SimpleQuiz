const quesDB = [
    {
        ques: 'what is my fav animal',
        a: 'dog',
        b: 'cat',
        c: 'wolf',
        d: 'hourse',
        ansKey: 'b'
    },
    {
        ques: 'what is my fav food',
        a: 'pizza',
        b: 'rice and kebab',
        c: 'omlet',
        d: 'potato',
        ansKey: 'd'
    },
    {
        ques: 'what is my fav sport',
        a: 'football',
        b: 'vollyball',
        c: 'chess',
        d: 'mental',
        ansKey: 'b'
    },
    {
        ques: 'what is my fav style',
        a: 'sport',
        b: 'lash',
        c: 'classic',
        d: 'mehmooni',
        ansKey: 'a'
    },
    {

        ques: 'what is my fav personlaity',
        a: 'angry',
        b: 'happy',
        c: 'hopefull',
        d: 'serios',
        ansKey: 'a'

    }
];

const question = document.querySelector('.question-text');
const form = document.querySelector('.quiz-wrapper');
const first = document.querySelector('.first');
const secend = document.querySelector('.secend');
const third = document.querySelector('.third');
const four = document.querySelector('.four');
const choises = document.querySelectorAll('.coises');
const lastScore = document.querySelector('.score');
const trigger = document.getElementById('trigger');
const inputList = document.querySelectorAll("form input")



let couonter = 0;
let score = 0;


question.innerText = quesDB[couonter].ques;
first.innerText = quesDB[couonter].a;
secend.innerText = quesDB[couonter].b;
third.innerText = quesDB[couonter].c;
four.innerText = quesDB[couonter].d;




form.addEventListener('submit', e => {

    e.preventDefault();
    if (form.q1.value === quesDB[couonter].ansKey) {
        score += 20;

    }
    couonter++;
    if (couonter == 5) {
        question.innerText = `your score is ${score}`;
        choises.forEach(addclass);
        trigger.textContent = 'Try Again!';


    } else {
        question.innerText = quesDB[couonter].ques;
        first.innerText = quesDB[couonter].a;
        secend.innerText = quesDB[couonter].b;
        third.innerText = quesDB[couonter].c;
        four.innerText = quesDB[couonter].d;

    }
    localStorage.setItem('lastScore', score);


})

function addclass(itrm) {
    itrm.classList.add('hide');
}
if (localStorage.getItem('lastScore')) {
    lastScore.innerText = `your last score is ${localStorage.getItem('lastScore')}`
}

function resetEntireProcess () {
    lastScore.innerText = `your last score is ${score}`
    couonter = 0;
    score = 0;
    question.innerText = quesDB[couonter].ques;
    first.innerText = quesDB[couonter].a;
    secend.innerText = quesDB[couonter].b;
    third.innerText = quesDB[couonter].c;
    four.innerText = quesDB[couonter].d;
    Array.from(choises).map(el => el.classList.remove("hide"));
    trigger.textContent = 'next question';
   
}



trigger.addEventListener('click', e => (couonter ===  5) ? resetEntireProcess() : goNextStep())



let s = 'STRING'
let a = false;

