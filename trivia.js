// all html question are from guru99.com
// created array of objects for html question and matching anser and wrong anser


const objQuestion = [
    {
      questions: {
        question: 'How do you insert a comment in HTML?',  
        right: '<!-- A SAMPLE COMMENT -->',
        wrong: '<-- A SAMPLE COMMENT !->'
      },
    },
    {
      questions: {
        question: 'How do you create text on a webpage that will allow you to send an email when clicked?',  
        right: '<A HREF=”mailto:youremailaddress”>text to be clicked</A>',
        wrong: '<A HREF=”Emailto:youremailaddress”>text to be clicked</A>'
      },
    },
    {
      questions: {
        qustion: 'How do you make a picture into a background image of a web page?', 
        right: 'body background = “image.gif”>',
        wrong: 'body background-image = “image.gif”>'
      },
    },
    {
      questions: {
        question: 'Name two new tags included in the HTML 5',
        right: '<Video> and <Audio>',
        wrong: '<Vid> and <Aud>'
      },
    },
    {
      questions: {
        question:'Can a single text link point to two different web pages?', 
        right: 'Yes',
        wrong: 'No'
      },
    },
    {
      questions: {
        question: 'What are the new FORM elements which are available in HTML5?', 
        right: '<datalist>, <keygen>, <output>',
        wrong: '<data>, <list>, <input>'
      },
    },
    {
      questions: {
        question: 'HTML stands for',  
        right: 'Hyper Text Markup Language',
        wrong: 'Hyper Text Monitor Language'
      },  
    },
    {
        questions: {
            question: 'What does the <strong> element do?',
            right: 'Renders a piece of text bold',
            wrong: 'Render a larger size text',
        },
    },
    {
        questions: {
            question:'You write javascript code into an HTML file?',
            right: 'True',
            wrong: 'False'
        },
    },
    {
        questions: {
            question: 'How do you link a JavaScript file to your HTML file?',
            right: 'Using a <script> tag',
            wrong: 'Using <JS> tag',
        },
    }
  ]
buttonStart = document.querySelector('.start')  
let buttonA = document.querySelector('.a')
let buttonB = document.querySelector('.b')
let questionArea = document.querySelector('.question')
let correctAnswerArea = document.querySelector('.answerA')
let wrongAnswerArea = document.querySelector('.answerB')

let updatedQuestions = objQuestion.map(x => x.questions)
let individualQuestion = updatedQuestions
console.log(individualQuestion[0].wrong)
questionCounter = 0;
for (i = 0; i < individualQuestion.length; i++) {
    buttonStart.addEventListener('click', function(e) {
        e.preventDefault()
    questionArea.textContent = individualQuestion[0].question
    correctAnswerArea.textContent = individualQuestion[0].right
    wrongAnswerArea.textContent = individualQuestion[0].wrong
    })
       buttonA.onclick = function(){
            alert('true')
            individualQuestion[+1]
       }
       buttonB.onclick = function() {
           individualQuestion[+1]
           alert('wrong')
       }
    }
