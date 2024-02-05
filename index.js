import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push,remove ,onValue,get,set,update} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://kquiz-9ea66-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const quizDb = ref(database, "Quiz");

/*let arr = {
   Q1: ["what does css stand for?","casscadingstylesheets","cekelezasonke","colorstylingsheets","none of the above",1],
   H1:["What is the correct HTML element for inserting a line break?"," <lb>","<break>","<br>","line-break()","3"],
   J1:["What does JavaScript stand for?","java-supertext","javascript","kitso mogale","jasonscripter","2"],
   Q2: ["What is the purpose of the z-index property in CSS?","the direction on an element.","the stacking order of positioned elements. ","how far a section is from heading ","none of the above",2],
   H1:["Which HTML tag is used to define an unordered list?","","","","",""],
   J1:["Which symbol is used for single-line comments in JavaScript?","??","//","/*","()","2"],
   Q3: ["what is the box model in css?","a model that separates css boxes","the principles for defining flex-box ","a layout model that describes the layout of elements in a webpage","how margin is magnified",3],
   H1:["","","","","",""],
   J1:["What is the correct way to declare a JavaScript variable?","var,js,let","var,let,const","const,tag,style","letMyvar","2"],
    Q4:["How do you center an element horizontally in CSS?","by setting its margin property to auto ","by setting display property to center","by setting the before and after psuedo codes","by centering the styles tag within html file",1],
    H1:["","","","","",""],
   Q5: ["What is a CSS pseudo-class?"," a keyword added to selectors that specify a special state of the selected element(s)","the class atrribute value","selectors that specify how an element should be rendered before runtime","all of the above","1"],
   H1:["","","","","",""],
   J1:["Which function is used to print output in JavaScript?","print()","console.log()","output()","display()","2"],
   Q6:["Which property is used to change the background color of an element?","color","bg","background-color","backdrop","3"],
   J1:["Which built-in method removes the last element from an array and returns that element?","pop()","shift()","slice()","remove()","1"],
   Q7:["Which property is used to control the spacing between lines of text?","spacing","padding","margin","line-height","2"],
   J1:["How do you write a function in JavaScript?","func name()","-function-name()","function name()","var function()","3"],
   Q8:["Which property is used to change the font size of text?","font-size","font-style","text-size","font-weight","1"],
   J1:["Which statement is used to stop the execution of a function and return a value?","return","stop","haukt","exit","1"],
   Q9:["Which CSS property is used to specify the space between the content and its border?","margin","padding","border-spacing","border-width","2"],
   J1:["What is the result of 6 + '2' in JavaScript?","8","sixy-two","62","2","3"],
   Q10:["Which property is used to create space between the element's border and its content?","spacing","padding","margin","gap","3"],
   J1:["Which event is triggered when a user clicks on an HTML element?","onmouseover","onclick","onkeydown","onsubmit","2"],
   Q11:["Which value of the display property makes an element not displayed at all?","none","cancel","hidden","block","3"],
   J1:["Which loop is used to iterate over the properties of an object?","for","while","do-while","for..in","1"],
   Q12:["Which CSS property is used to add rounded corners to an element?","rounded-corners","border-circle","rounded","border-radius","4"],
   J1:["What is the result of 10 % 3 in JavaScript?","3.3","1","30%","9.9","2"],
   Q13:["Which CSS property is used to specify the stack order of an element?","z-index","stack-order","position","order","1"],
   J1:["What is the correct way to write a conditional statement in JavaScript?"," if (x === 5) { }","if x === 5 then { }"," if x = 5 { }"," if x == 5 { }","1"],
   Q14:["Which property is used to control the order of the flexible items inside a flex","flex-order","flex","order","flex-item","2"],
   J1:["What does the isNaN() function return if the argument is not a number?","undefined","true","null","NaN","4"],
   Q15:["Which property is used to add a shadow effect to text?","shadow","box-shadow","text-shadow","",""],
   H1:["Which attribute is used to specify the URL of the page the link goes to?","url","href","link","src","2"],
   
}*/

const h1 = document.getElementById("h22");
const div2 = document.getElementById("div2");
const input1 = document.getElementById("input-0");
const QH = document.getElementById("h11");
const addButton = document.getElementById("btn");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const btn1 = document.getElementById("btn1");


/*set(arr)
    .then(() => {
        console.log("Data has been successfully written to the database.");
    })
    .catch((error) => {
        console.error("Error writing data to the database:", error);
    }); */

/* for(let i=0;i<arr.length;i++){
        
    push(quizInDB,arr[i]);
    }
    */
  
  /* function add(){
               
        const quizInDB = ref(database, "Quiz/");
        set(quizInDB,{
              Q1: ["what does css stand for?","casscadingstylesheets","cekelezasonke","colorstylingsheets","none of the above",1],
   H1:["What is the correct HTML element for inserting a line break?"," lb","break","br","line-break()","3"],
   J1:["What does JavaScript stand for?","java-supertext","javascript","kitso mogale","jasonscripter","2"],
   Q2: ["What is the purpose of the z-index property in CSS?","the direction on an element.","the stacking order of positioned elements. ","how far a section is from heading ","none of the above",2],
   H2:["Which HTML tag is used to define an unordered list?","li","ulist","ul","ol","3"],
   J2:["Which symbol is used for single-line comments in JavaScript?","??","//","/*","()","2"],
   Q3: ["what is the box model in css?","a model that separates css boxes","the principles for defining flex-box ","a layout model that describes the layout of elements in a webpage","how margin is magnified",3],
   J3:["What is the correct way to declare a JavaScript variable?","var,js,let","var,let,const","const,tag,style","letMyvar","2"],
    Q4:["How do you center an element horizontally in CSS?","by setting its margin property to auto ","by setting display property to center","by setting the before and after psuedo codes","by centering the styles tag within html file",1],
    H3:["What does HTML stand for?","Hyper Text Markup Language","Hyperlinks and Text Markup Language"," Home Tool Markup Language"," Hyper Tool Markup Language","1"],
   Q5: ["What is a CSS pseudo-class?"," a keyword added to selectors that specify a special state of the selected element(s)","the class atrribute value","selectors that specify how an element should be rendered before runtime","all of the above","1"],
   H4:["Which tag is used to define a paragraph in HTML?","para"," p"," paragraph","pg","2"],
   J0:["Which function is used to print output in JavaScript?","print()","console.log()","output()","display()","2"],
   Q6:["Which property is used to change the background color of an element?","color","bg","background-color","backdrop","3"],
   J4:["Which built-in method removes the last element from an array and returns that element?","pop()","shift()","slice()","remove()","1"],
   Q7:["Which property is used to control the spacing between lines of text?","spacing","padding","margin","line-height","2"],
   J5:["How do you write a function in JavaScript?","func name()","-function-name()","function name()","var function()","3"],
   Q8:["Which property is used to change the font size of text?","font-size","font-style","text-size","font-weight","1"],
   J6:["Which statement is used to stop the execution of a function and return a value?","return","stop","haukt","exit","1"],
   Q9:["Which CSS property is used to specify the space between the content and its border?","margin","padding","border-spacing","border-width","2"],
   J7:["What is the result of 6 + '2' in JavaScript?","8","sixy-two","62","2","3"],
   Q10:["Which property is used to create space between the element's border and its content?","spacing","padding","margin","gap","3"],
   J8:["Which event is triggered when a user clicks on an HTML element?","onmouseover","onclick","onkeydown","onsubmit","2"],
   Q11:["Which value of the display property makes an element not displayed at all?","none","cancel","hidden","block","3"],
   J9:["Which loop is used to iterate over the properties of an object?","for","while","do-while","for..in","1"],
   Q12:["Which CSS property is used to add rounded corners to an element?","rounded-corners","border-circle","rounded","border-radius","4"],
   J10:["What is the result of 10 % 3 in JavaScript?","3.3","1","30%","9.9","2"],
   Q13:["Which CSS property is used to specify the stack order of an element?","z-index","stack-order","position","order","1"],
   J12:["What is the correct way to write a conditional statement in JavaScript?"," if (x === 5) { }","if x === 5 then { }"," if x = 5 { }"," if x == 5 { }","1"],
   Q14:["Which property is used to control the order of the flexible items inside a flex","flex-order","flex","order","flex-item","2"],
   J14:["What does the isNaN() function return if the argument is not a number?","undefined","true","null","NaN","4"],
   Q15:["Which property is used to add a shadow effect to text?","shadow","box-shadow","text-shadow","",""],
   H5:["Which attribute is used to specify the URL of the page the link goes to?","url","href","link","src","2"],
        });
           
    }
    
    add();*/
    main();
    function main()
    {
    const numb = prompt("Enter Student Number (e.g 15):");
    let sNum = parseFloat(numb);
  
    if(!isNaN(sNum))
    {
    QH.innerHTML = "";
    div2.innerHTML= ""
    p1.innerHTML = "";
    p2.innerHTML = "";
    p3.innerHTML = "" ;
    p4.innerHTML = "";
    
    const imgW = document.createElement('img');
    const imgC = document.createElement('img');
    imgW.src = './images/Screenshot.jpg';
    imgC.src = './images/IMG_3.jpg';
    
    imgW.height = 90;
    imgW.width = 90;
    imgC.height = 90;
    imgC.width = 90;
    
    
    let score=0;
    let A= Math.floor(Math.random()*(78-51+1))+51;
    let B=0;
    let C=0;
    let F = 0;
    let aNum;
    let T = 0;
    let N =sNum;
    
    
   onValue(quizDb,function(snapshot){
        if(snapshot.exists()){
                let itemsArray = Object.entries(snapshot.val());
                h1.innerHTML =`${itemsArray[sNum-1][1].name}` ;
                
                sNum = itemsArray[sNum-1][1].name;
                if(itemsArray[N-1][1].challenge == true){
                    
                    alert("A challenge from " + itemsArray[N-1][1].aname);
                    T = 1;
                    func(A,B,C,F,T);
                    
                   /* set(quizInDB2,{"name":`${It[aNum-1][1].name}`,"challenge":"true","score":"0","aScore":"0","aname":`${It[sNum-1][1].name}`});*/
                   // alert(itemsArray[aNum][1].challenge + " scored " +itemsArray[sNum][1].aScore )
                    
                }
                
                
                
            }})
    
            btn1.addEventListener("click",function(){
                
           //   onValue(quizDb,function(snapshot){
                  
                 //   let It = Object.entries(snapshot.val());
        let sc = prompt("Enter the stundent number of the person you want to challenge:");
                    aNum = parseFloat(sc);
                     if(!isNaN(aNum)){
                         T=0;
                    func(A,B,C,F,T,aNum);
                   
                   
               
               
    
                
                
                
                    }
                    else{
                        QH.innerHTML = "enter a vaild number to start quiz";
                    
   // `${It[aNum-1][1].name}`
   //`${It[sNum-1][1].name}`
    p1.innerHTML = "";
    p2.innerHTML = "";
    p3.innerHTML = "" ;
    p4.innerHTML = "";
                    }
              })
               /*  const quizInDB1 = ref(database, "Quiz/"+`${sNum}`+"/");
               set(quizInDB1,{"name":"Kitso Mogale","challenge":false,"score":`${score}`,"aScore":"0"}) ;*/
                
            
            
           
    
    
    
    function func(a,b,c,f,t,anum){
    
    onValue(quizDb, function(snapshot) {
    if (snapshot.exists()) {
        let items = Object.entries(snapshot.val());
        
        QH.innerHTML = "";
    
    p1.innerHTML = "";
    p2.innerHTML = "";
    p3.innerHTML = "" ;
    p4.innerHTML = "";
    
 function clicked() {
                if (input1.value == items[a][b + 1][c + 5]) {
                    console.log("Correct");
                    
                 // div2.removeChild(imgW);
                   div2.innerHTML="Previous answer is correct";
                    div2.appendChild(imgC);
                    input1.value = "";
                    score += 1;
                } else {
                   
                    //div2.removeChild(imgC);
                    div2.innerHTML="Previous answer is wrong";
                     div2.appendChild(imgW);
                    console.log("Wrong");
                    input1.value = "";
                  
                   

                }

                // Move to the next question
                if (f == 4) {
                   // alert("Your score is " + score + ".");
                    
    if(t == 0){
        
         const quizInDB2 = ref(database, "Quiz/"+`${aNum}`+"/");
                    const quizInDB1 = ref(database, "Quiz/"+`${N}`+"/");
        update(quizInDB1,{"score":`${score}`});
        
         update(quizInDB2,{"challenge":"true","aScore":`${score}`,"aname":`${sNum}`});
        QH.innerHTML = "Your score: "+`${score}`;
        div2.innerHTML = "";
    p1.innerHTML = "waiting for opponent to complete challenge....";
    p2.innerHTML = "";
    p3.innerHTML = "" ;
    p4.innerHTML = "";
    
    }
    else{
        QH.innerHTML = "Your score: "+`${score}`;
        div2.innerHTML = "";
        p1.innerHTML = `${items[N-1][1].aname}`+ " scored "+ `${items[N-1][1].aScore}`;
    p2.innerHTML = "";
    p3.innerHTML = "" ;
    p4.innerHTML = "";
    }
                
                } 
                else {
                    
                    func(a + 1, b, c,f+1,t,anum);
                }
                addButton.removeEventListener("click",clicked);
 }
    addButton.addEventListener("click",clicked);
        QH.innerHTML = `${items[a][b+1][c]}`;
        
    p1.innerHTML = `1. ${items[a][b+1][c+1]}`;
    p2.innerHTML = `2. ${items[a][b+1][c+2]}`;
    p3.innerHTML = `3. ${items[a][b+1][c+3]}`;
    p4.innerHTML = `4. ${items[a][b+1][c+4]}`;
    
    
    }
    })
    
    
    }
    
    
    }
    else{
        alert("Enter a vaild student number!!!");
        main();
    }
    
    }
/*for(let i =0;i<5;i++){
     add(arr[i],arr[i+1],arr[i+2],arr[i+3],arr[i+4]);
}
    
/*onValue(quizInDB, function(snapshot) {
    if (snapshot.exists()) {
        let items = Object.entries(snapshot.val());
     
     
     for(let i = 0;i<items.length;i++){
     
  
    QH.innerHTML = `${items[0][0]}`;
    
    p1.innerHTML = `1. ${items[0][1]}`;
    p2.innerHTML = `2. ${items[0][2]}`;
    p3.innerHTML = `3. ${items[0][3]}`;
    p4.innerHTML = `4. ${items[0][4]}`;
    
     
    
     }
     
     }
    
    }
    
)
    */
    
   