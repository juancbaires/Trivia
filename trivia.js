// all html question are from guru99.com
// created array of objects for html question and matching anser and wrong anser
const html = [

    {
        question:'How do you insert a comment in HTML?',
        a:'<!-- A SAMPLE COMMENT -->',
        b:'<-- A SAMPLE COMMENT !->',
       
    },
    
     {
         question:'How do you create text on a webpage that will allow you to send an email when clicked?',
         a:'<A HREF=”mailto:youremailaddress”>text to be clicked</A>',
         b:'<A HREF=”Emailto:youremailaddress”>text to be clicked</A>',
        
     },

     {
         question:'How do you make a picture into a background image of a web page?',
         a:'body background = “image.gif”>',
         b:'body background-image = “image.gif”>',
        
     },
     
     {
         question:'Name two new tags included in the HTML 5',
         a:'<Video> and <Audio>',
         b:'<Vid> and <Aud>',
        
     },
     
     {
         question:' Can a single text link point to two different web pages?',
         a:'Yes',
         b:'No',
        
     },
    
     {
         question:'What are the new FORM elements which are available in HTML5?',
         a:'<datalist>, <keygen>, <output>',
         b:'<data>, <list>, <input>',
        
     },
     
     {
         question:'HTML stands for',
         a:'Hyper Text Markup Language',
         b:'Helpful Text Managing Language',
        
     },
     
     {
        question:'What does the <strong> element do?',
         a:'Renders a piece of text bold',
         b:'Render a larger size text',
        
     },
     
     {
        question:'Can you write javascript code into an HTML file?',
         a:'true',
         b:'false',
        
     },
     
     {
         question:'How do you link a JavaScript file to your HTML file?',
         a:'Using a <script> tag',
         b:'Using <JS> tag',
        
     },
]


//creating an array of objects in for js questions
const JavaScript = [
    {
        question:'',
        a:'',
        b:'',
       
    },
    
     {
         question:'',
         a:'',
         b:'',
        
     },

     {
         question:'',
         a:'',
         b:'',
        
     },
     
     {
         question:'',
         a:'',
         b:'',
        
     },
     
     {
         question:'',
         a:'',
         b:'',
        
     },
    
     {
         question:'',
         a:'',
         b:'',
        
     },
     
     {
         question:'',
         a:'',
         b:'',
        
     },
     
     {
        question:'',
         a:'',
         b:'',
        
     },
     
     {
        question:'',
         a:'',
         b:'',
        
     },
     
     {
         question:'',
         a:'',
         b:'',
        
     }
]

// created an array of objects for all css questions and answers

let cssArray = [
    {
        question:'How do you insert a comment in HTML?',
        a:'<!-- A SAMPLE COMMENT -->',
        b:'<-- A SAMPLE COMMENT !->',
       
    },
    
     {
         question:'How do you create text on a webpage that will allow you to send an email when clicked?',
         a:'<A HREF=”mailto:youremailaddress”>text to be clicked</A>',
         b:'<A HREF=”Emailto:youremailaddress”>text to be clicked</A>',
        
     },

     {
         question:'How do you make a picture into a background image of a web page?',
         a:'',
         b:'',
        
     },
     
     {
         question:'',
         a:'',
         b:'',
        
     },
     
     {
         question:'',
         a:'',
         b:'',
        
     },
    
     {
         question:'',
         a:'',
         b:'',
        
     },
     
     {
         question:'',
         a:'',
         b:'',
        
     },
     
     {
        question:'',
         a:'',
         b:'',
        
     },
     
     {
        question:'',
         a:'',
         b:'',
        
     },
     
     {
         question:'',
         a:'',
         b:'',
        
     },
]

html.forEach(function (arrayItem) {
    var x = arrayItem.question;
    var y = arrayItem.a
    var z = arrayItem.b
});
let questions = document.querySelector('.question')
let answerA =  document.querySelector('.answerA')
let answerB =  document.querySelector('.answerB')
let buttonStart = document.querySelector('.start')
let buttunA = document.querySelector('.a')
let buttunB = document.querySelector('.b')

function startGame(){

}