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
        question: 'How do you make a picture into a background image of a web page?', 
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
// Assigning varable names to html elements according to the games' needs
buttonStart = document.querySelector('.start')  
let buttonA = document.querySelector('.a')
let buttonB = document.querySelector('.b')
let questionArea = document.querySelector('.question')
let correctAnswerArea = document.querySelector('.answerA')
let wrongAnswerArea = document.querySelector('.answerB')

// mapping the array to sigle out the objectes within it
let updatedQuestions = objQuestion.map(x => x.questions)
let individualQuestion = updatedQuestions
// my load question function should handle just that and set a limit(questions max)
let questionNum = -1;
    function loadQuestion() {
        ++questionNum;
        if (questionNum >= individualQuestion.length) {
            alert("all questions are done");
            questionNum = -1
        } else {
            questionArea.innerHTML = individualQuestion[questionNum].question;
            correctAnswerArea.textContent = individualQuestion[questionNum].right;
            wrongAnswerArea.textContent = individualQuestion[questionNum].wrong;
        }
    }

    buttonStart.addEventListener('click', function(e) {
        loadQuestion();
        e.preventDefault()
        buttonStart.style.pointerEvents = 'none'
    })
        
       buttonA.onclick = function(){
            alert('true')
        loadQuestion();
       }
       buttonB.onclick = function() {
           alert('wrong')
           loadQuestion()
       }
    
   