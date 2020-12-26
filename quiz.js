const quiz =[
   
    { 
        question : 'FXは何の略？',
        answers : ['fast echange', 'food echange','foreigng echange','final echange', ],
        correct : 'foreigng echange' 
    },
    {
        question : '日本に存在しない株式市場はどれか？',
        answers : ['名古屋証券取引所', '神奈川証券取引所','東京証券取引所','札幌証券取引所', ],
        correct : '神奈川証券取引所' 
    },
    {
        question : '東京証券取引所における市場区分で存在しない市場はどれか？',
        answers : ['東証1部','東証2部', 'マザーズ','ファザーズ' ],
        correct : 'ファザーズ'    
    },
]     

const quizLength = quiz.length
let quizIndex = 0  
let score = 0


const $button = document.getElementsByTagName('span')
const buttonLnegth = $button.length

const setupQuiz = () =>  {
    document.getElementById('js-question').textContent = quiz[quizIndex].question 
    let buttonIndex = 0
    while(buttonIndex < buttonLnegth ){
        $button [buttonIndex].textContent  = quiz[quizIndex].answers[buttonIndex]
        buttonIndex++
     }

}

setupQuiz()

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解')
        score++
    }else{
        window.alert('不正解')
    }
    quizIndex++

    if(quizIndex < quizLength){
        setupQuiz()
    }else{
        window.alert('終了！あなたの正解数は'+score+'/'+quizLength+'です!')
    }
}

let handlerIndex = 0
while(handlerIndex < buttonLnegth){
    $button[handlerIndex].addEventListener('click',(e)=>{
        clickHandler(e)
    })
    handlerIndex++
}

