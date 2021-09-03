let data=[
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
      question:"Which ocean lies on the east coast of the United States?",
      choice:["Eastern","Pacific","Indian","Atlantic"],
      answer:"Atlantic"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
      question:"Which is the world's highest mountain?",
      choice:["K2","Makalu","Mount Everest","Kilimanjaro"],
      answer:"Mount Everest"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
      question:"Which of these cities is not in Europe?",
      choice:["Prague","Moscow","Barcelona","Reykjavik"],
      answer:"Moscow"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
      question:"True or False: Iceland is covered in ice.",
      choice:[true,false],
      answer:false
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"The United Kingdom is comprised of how many countries?",
      choice:[1,2,3,4],
      answer:4
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"Which of the following countries do not border France?",
      choice:["Germany","Netherlands","Spain","Italy"],
      answer:"Netherlands"
    },
      { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
      question:"Which U.S. state is the Grand Canyon located in?",
      choice:["Wyoming","Arizona","New Mexico","Nevada"],
      answer:"Arizona"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
      question:"Which is the smallest country, measured by total land area?",
      choice:["Maldives","Monaco","Vatican"],
      answer:"Vatican"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
      question:"Which is the longest river in the world?",
      choice:["Amazon River","Congo River","Yellow River","Nile River"],
      answer:"Nile River"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
      question:"Which is the largest body of water?",
      choice:["indian Ocean","Pacific Ocean","Atlantic Ocean","Nile River"],
      answer:"Pacific Ocean"
    }
]
function changeToGray(arg){ //die Funktion die die Divs wieder zu grau ändern soll 
    document.getElementById(arg).style.background='rgb(87, 87, 87)'
}
console.log(data[0].answer)
for (let i = 0; i < data.length; i++) {
    let newDiv=document.createElement('div');//die divs werden erstellt und kriegen eine ID
    newDiv.id=`div${i}`;
    document.body.appendChild(newDiv); 

    let image=document.createElement('img');//Image wird gesetzt
    image.src=data[i].url;
    document.getElementById(`div${i}`).prepend(image);

    let question=document.createElement('H2')//Frage wird erstellt und in dem createten div gesetzt unter dem bild
    question.innerText=data[i].question;
    document.getElementById(`div${i}`).appendChild(question);

    let childDiv=document.createElement('div')//Div unter der Frage wird erstellt wo in der unteren schleife dann die choices rein sollen 
    childDiv.id=`childDiv${i}`;
    document.getElementById(`div${i}`).appendChild(childDiv);

    for (let j = 0; j < data[i].choice.length; j++) { //schleife für die choices
        let choice1=document.createElement('div')//pro choice wird ein div erstellt
        choice1.id=`choice${i}${j}`
        document.getElementById(`childDiv${i}`).appendChild(choice1);//wird im ChildDiv platziert
        //bekommt eine ID je nachdem in welchem über div es ist und die wievielte choice
        let choiceContent=document.createElement('p')
        document.getElementById(`choice${i}${j}`).appendChild(choiceContent);//wird im choiceDiv platziert
        choiceContent.id=`choiceContent${i}${j}`//der ChoiceContent bekommt eine ID damit man unten eine Fallunterscheidung ausführen kann 
        choiceContent.innerText = data[i].choice[j]; //hier bekommt der Paragraph der im choice Div steht den Content aus data 

        if(data[i].choice[j]==data[i].answer){
            document.getElementById(`choice${i}${j}`).addEventListener('click',()=>{
                document.getElementById(`choice${i}${j}`).style.background='green'
                
            })
            
        }
        else{
            document.getElementById(`choice${i}${j}`).addEventListener('click',()=>{
                document.getElementById(`choice${i}${j}`).style.background='red'
            })
        }    
        // if( document.getElementById(`choice${i}${j}`).style.background='red'){Ein versuch eine timeout function zu machen umd die falschen antworten wieder auf grau zu stellen nach einiger zeit
        //     setTimeout(changeToGray(`choice${i}${j}`),200);
        // }
        
        
    }             
    

    
}