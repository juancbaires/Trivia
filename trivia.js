// all html question are from guru99.com
// created array of objects for html question and matching anser and wrong anser

const objQuestion = [
  {
    questions: {
      question: 'How do you insert a comment in HTML?',
      right: ' <!-- A SAMPLE COMMENT -->',
      wrong: ' <-- A SAMPLE COMMENT !->'
    }
  },
  {
    questions: {
      question:
        'How do you create text on a webpage that will allow you to send an email when clicked?',
      right: ' <A HREF=”mailto:youremailaddress”>text to be clicked</A>',
      wrong: ' <A HREF=”Emailto:youremailaddress”>text to be clicked</A>'
    }
  },
  {
    questions: {
      question:
        'How do you make a picture into a background image of a web page?',
      right: 'body background = “image.gif”>',
      wrong: ' body background-image = “image.gif”>'
    }
  },
  {
    questions: {
      question: 'Name two new tags included in the HTML 5',
      right: '<Video> and <Audio>',
      wrong: '<Vid> and <Aud>'
    }
  },
  {
    questions: {
      question: 'Can a single text link point to two different web pages?',
      right: 'Yes',
      wrong: 'No'
    }
  },
  {
    questions: {
      question: 'What are the new FORM elements which are available in HTML5?',
      right: '<datalist>, <keygen>, <output>',
      wrong: '<data>, <list>, <input>'
    }
  },
  {
    questions: {
      question: 'HTML stands for',
      right: 'Hyper Text Markup Language',
      wrong: 'Hyper Text Monitor Language'
    }
  },
  {
    questions: {
      question: 'What does the strong element do?',
      right: 'Renders a piece of text bold',
      wrong: 'Render a larger size text'
    }
  },
  {
    questions: {
      question: 'Can you write javascript code into an HTML file?',
      right: 'True',
      wrong: 'False'
    }
  },
  {
    questions: {
      question: 'How do you link a JavaScript file to your HTML file?',
      right: 'Using a <script> tag',
      wrong: 'Using <JS> tag'
    }
  },
  {
    //css questions begin
    questions: {
      question: 'What does CSS stand for?',
      right: 'Cascading Style Sheets',
      wrong: 'Cascaded Style Sheets'
    }
  },
  {
    questions: {
      question: 'What is a Child Selector?',
      right: 'Body > p',
      wrong: 'Body < p'
    }
  },
  {
    questions: {
      question: 'What does vh stand for?',
      right: 'Viewport Height',
      wrong: 'View Height'
    }
  },
  {
    questions: {
      question: 'Which property is used to change the face of a font?',
      right: 'font-family',
      wrong: 'font-face'
    }
  },
  {
    questions: {
      question: 'Which property is used to create small-caps effect?',
      right: 'font-variant',
      wrong: 'font-change'
    }
  },
  {
    questions: {
      question: 'Which property is used to set the color of text?',
      right: 'color',
      wrong: 'text-color'
    }
  },
  {
    questions: {
      question: 'Which property is used to capitalize text?',
      right: 'text-decoration',
      wrong: 'evolve-text'
    }
  },
  {
    questions: {
      question: 'What are the components of CSS style?',
      right: 'selector, property, value',
      wrong: 'element, value, effects'
    }
  },
  {
    questions: {
      question: 'Which property is used make a font italic or oblique?',
      right: 'font-style',
      wrong: 'font-change'
    }
  },
  {
    questions: {
      question: 'Which property is used to set the text shadow around a text?',
      right: 'text-shadow',
      wrong: 'shadow-rear'
    }
  }, //JS questions
  {
    questions: {
      question: 'What are the differences between null and undefined?',
      right:
        'JavaScript has two distinct values for nothing, null and undefined.',
      wrong: "The're practically booleans"
    }
  },
  {
    questions: {
      question:
        'JavaScript syntax to change the text content of the HTML element with an Id?',
      right: ' document.getElementById("demo").innerHTML = "Hello World!"',
      wrong: ' #demo.innerHTML = "Hello World!"'
    }
  },
  {
    questions: {
      question: 'How do you assign value to something in JS?',
      right: 'using =',
      wrong: 'using ==='
    }
  },
  {
    questions: {
      question: "How do you alert 'hello world",
      right: 'alert("hello world")',
      wrong: "msg('hello world')"
    }
  },
  {
    questions: {
      question: ' Is ("false") false?',
      right:
        "No. Because, it's a string with length greater than 0. Only an empty string is false.",
      wrong: 'It literally says false!'
    }
  },
  {
    questions: {
      question: 'Tell me about these []',
      right: "It's used close arrays",
      wrong: "It's used to close objects"
    }
  },
  {
    questions: {
      question: 'What is typeof arguments?',
      right: 'object',
      wrong: 'an array'
    }
  },
  {
    questions: {
      question: 'What is typeof(NaN)',
      right: 'Number',
      wrong: 'Not a number'
    }
  },
  {
    questions: {
      question: 'How do you create a function in JS',
      right: 'function myFunction()',
      wrong: 'function:= myFunction()'
    }
  },
  {
    questions: {
      question: 'How do you call a function named "myFunction"',
      right: 'myFunction()',
      wrong: 'Call myFunction()'
    }
  }
];
// Assigning varable names to html elements according to the games' needs
buttonStart = document.querySelector('.start');
let buttonA = document.querySelector('.a');
let buttonB = document.querySelector('.b');
let questionArea = document.querySelector('.question');
let correctAnswer = document.querySelector('.answerA');
let wrongAnswer = document.querySelector('.answerB');
let spanA = document.querySelector('.A');
let spanB = document.querySelector('.B');
let reset = document.querySelector('.reset');
let points = document.querySelector('.points');
let answerBoard = document.querySelector('.rightOrWrong')
let nextMessage = document.querySelector('.nextMessage')
let nextButton = document.querySelector('.nextbutton')
let popUp = document.querySelector('.popup')
// mapping the array to sigle out the objectes within it
let updatedQuestions = objQuestion.map(x => x.questions);
let individualQuestion = updatedQuestions;
// my load question function should handle just that and set a limit(questions max)
let questionNum = -1;
let totalPoints = 0;
let wrongPoints = 0;
function loadQuestion() {
  questionNum++;
  if (questionNum >= individualQuestion.length) {
    alert('all questions are done');
  } else if (questionNum % 2 === 0) {
    questionArea.innerHTML = individualQuestion[questionNum].question;
    correctAnswer.textContent = spanA.textContent =
      'A. ' + individualQuestion[questionNum].right;
    wrongAnswer.textContent = spanB.textContent =
      'B. ' + individualQuestion[questionNum].wrong;
  } else {
    questionArea.innerHTML = individualQuestion[questionNum].question;
    correctAnswer.textContent = spanB.textContent =
      'A. ' + individualQuestion[questionNum].wrong;
    wrongAnswer.textContent = spanB.textContent =
      'B. ' + individualQuestion[questionNum].right;
  }
  youLost();
  checktotal();
}

// game starts at the click of start button
buttonStart.addEventListener('click', function(e) {
  loadQuestion();
  e.preventDefault();
  buttonStart.style.pointerEvents = 'none';
});

buttonB.onclick = function() {
  if (questionNum % 2 !== 0) {
    nextMessage.textContent = 'TRUE!!';
    totalPoints++;
    points.textContent = `Score: ${totalPoints} /30`;
    popUp.style.display ='flex'
    loadQuestion();
    next();
  } else {
    nextMessage.textContent = 'WRONG!!';
    console.log('i am no longer a bug');
    wrongPoints++;
    popUp.style.display ='flex'
    loadQuestion();
    next();
  }
};
buttonA.onclick = function() {
  if (questionNum % 2 === 0) {
    nextMessage.textContent = 'TRUE!!';
    totalPoints++;
    points.textContent = `Score: ${totalPoints} /30`;
    popUp.style.display ='flex'
    loadQuestion();
    next();
  } else {
    nextMessage.textContent = 'WRONG!!';
    wrongPoints++;
    popUp.style.display ='flex'
    loadQuestion();
    next();
  }
};

reset.addEventListener('click', function() {
  window.location.reload()  
  questionNum = -1;
  answerBoard.textContent = 'Try Again!'
  totalPoints = 0
});

function checktotal() {
  if (totalPoints === individualQuestion.length) {
    answerBoard.textContent = 'You\'re a front-end genius';
  } else if (totalPoints === 10) {
      nextMessage.textContent = 'YOU WON!! Press next to see what you\'ve got'
      popUp.style.display = 'flex'
   answerBoard.textContent = 'CSS';
  } else if (totalPoints === 20) {
    answerBoard.textContent = 'JS'
  } else if(totalPoints === 0){
      answerBoard.textContent = 'HTML'
  }   
}

function youLost() {
  if (wrongPoints === 3) {
    nextMessage.textContent = 'Game over!';
    popUp.style.display = 'flex'
    next();
    answerBoard.textContent = 'Press reset to play again'
    buttonStart.style.pointerEvents = 'none';
    buttonA.style.pointerEvents = 'none';
    buttonB.style.pointerEvents = 'none';
    points.textContent = `Final Score: ${totalPoints} /30`;
  }
}
    function next() {
    nextButton.addEventListener('click', function(){
        popUp.style.display = 'none'
    })
}