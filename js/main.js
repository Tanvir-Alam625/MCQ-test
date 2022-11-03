// all selectors 
const countDown = document.getElementById('countdown');
const mcqContainer = document.getElementById('mcq-container');
const finishButton = document.getElementById('finish-btn');


// load the mcq data 

fetch("data.json")
.then(res=>res.json())
.then(data=>{

    let mcqCount  = 1; 
    let resultCount = 0;
    data.forEach(mcqQuestion => {
        mcqCount++;
        const div = document.createElement("div");
        div.innerHTML = `
                        <div class="mcq-question">
                        <p>${mcqQuestion.title}</p>
                        ${mcqQuestion?.options.map(option=>
                            `<div class="input-box">
                            <input  type="radio" id="${option}${mcqQuestion.title}" name="mcq${mcqCount}"  value="${option}/${mcqQuestion.title}">
                            <label for="${option}${mcqQuestion.title}">${option}</label><br>
                            </div>`
                            )}     
                            </div>
                            `;

            mcqContainer.appendChild(div);
            const mcqOption = document.querySelectorAll(`[name="mcq${mcqCount}"]`);
            console.log(mcqOption);
            mcqOption.forEach(answerOption => {
                    answerOption.addEventListener('click',()=>{
                        if(answerOption.value === mcqQuestion.answer){
                            console.log("right");
                        }
                    })
                });
        });
});

const getResult=(result)=>{
    console.log(result);
}

// boolean variables 
let mcqTimeIdentifier = false;

// countdown timer 
const staringMinutes = 10;
let totalSecond = staringMinutes * 60;
const storedCounter =  setInterval(getUpdatecountdown,1000);

function getUpdatecountdown() {
    let minutes = Math.floor(totalSecond / 60);
    let seconds = totalSecond % 60;
    if(minutes < 1 && seconds < 1){
        console.log('time over');
        clearInterval(storedCounter);
        finishButton.setAttribute('disabled', true);
        finishButton.className = 'btn-disabled';
        // changeLocation();
    }
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countDown.innerText = `00:${minutes}:${seconds}`;
    totalSecond--;
}





const  changeLocation = () =>{

}


// finish button logic 
finishButton.addEventListener('click',()=>{
console.log('clicked');
});

