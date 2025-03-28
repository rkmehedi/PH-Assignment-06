// function loadLesson(){
// fetch("https://openapi.programming-hero.com/api/levels/all")
// .then((res)=>res.json()
// ).then((mydata) =>showLesson(mydata.data)
// );
// }

// function showLesson(data)
// {
// console.log(data);
// }
function loadLesson(){
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res)=>res.json()
    ).then((mydata) =>{showLesson(mydata.data)}
    );
    }
    
    function showLesson(data)
    {
        
        const lessonCard= document.getElementById("lesson-card-id");

    for (const lesson of data) {
       

        const lessonCardSet=document.createElement("button");
        lessonCardSet.innerHTML=`
        
        <button id="active-btn-${lesson.level_no}" onclick="levelGenerator(${lesson.level_no});" class=" lesson-btn"><i class="fa-solid fa-book-open"></i> ${lesson.lessonName}</button>
        `;
        
        
        
        
        lessonCard.append(lessonCardSet);
        
        
        
        
    }
   
    
    }
    // active class remover
    function activeRemoval(){
    const removeActive=document.getElementsByClassName("active-button");
        for (let active of removeActive){
           active.classList.remove("active-button");
        }
}
    
    // Level-generator
    function levelGenerator(currentLevel){
        
        // displayHide();
        const url= `https://openapi.programming-hero.com/api/level/${currentLevel}`;
        // active
        activeRemoval();
        
        const activeButton = document.getElementById(`active-btn-${currentLevel}`);
            activeButton.classList.add("active-button");
        
        fetch(url)
        .then((res)=>res.json()
        ).then((myLevel) =>
            
          { pronounceGet(myLevel.data)
            
            
        } 

        
        );

    }
        // pronounce
        
        function pronounceGet(data)
        {
            
           

            const pronounce= document.getElementById("main-card-id");
            pronounce.innerHTML="";
            if (data.length==0){
                pronounce.innerHTML=`<div class="empty-card-msg" id="empty-lesson">
                    <img src="./assets/alert-error.png" alt="">
                    <h3 class="bangla text-[#79716B] text-[13px] text-center">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h3>
                    <h3 class="bangla text-[#292524] text-[34px] text-center font-medium">নেক্সট Lesson এ যান।</h3>
                </div>`;
            }
            
        for (const cardFile of data) {
            const cardSet=document.createElement("div");

            
            
            cardSet.innerHTML=`
                        
                       
                        <div class="main-card" >
                     <div  class="main-card-controller">
                     
                        <h2 class="card-title">${cardFile.word}</h2>
                        <h3 class="pronounce">Meaning /Pronounciation</h3>
                        <h2 class="bangla-meaning">"${cardFile.meaning} / ${cardFile.pronunciation}"</h2>
                        
                     </div>
                     <div class="button-side">
                        <button class="details-tts-button"><i class="fa-solid fa-circle-info"></i></button>
                        <button class="details-tts-button"><i class="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
            `;
            pronounce.append(cardSet);
        }
        }
        // Hide No select

        

loadLesson();