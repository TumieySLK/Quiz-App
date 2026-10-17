// GETTING ALL ELEMENTS

const start_button = document.querySelector(".start_button button");
const  info_box= document.querySelector(".info_box");
const  exit_btn= info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const next_btn = document.querySelector("next_btn");

let que_count = 0;

//PRESS START BUTTON
start_button.onclick = ()=>
{
    info_box.classList.add("activeInfo");
}
//PRESS EXIT BUTTON
exit_btn.onclick = ()=>
{
    info_box.classList.remove("activeInfo");
}
//PRESS CONTINUE
continue_btn.onclick = ()=>
{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(que_count);
    
}
//PRESS NEXT

//const next_btn = document.querySelector(".next_btn");

// PRESS NEXT
next_btn.onclick = () => 
    {
    if (que_count < questions.length - 1) 
        {
        que_count++;
        showQuestions(que_count);
         }
    };

//QUESTIONS 




function showQuestions(index)
{
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].question + '</span>';
    let option_tag ='<div class ="option">'+ questions[index].options[0] +'<span></span></div>' +
                  + '<div class ="option">'+ questions[index].options[1] +'<span></span></div>' +
                  + '<div class ="option">'+ questions[index].options[2] +'<span></span></div>' +
                  + '<div class ="option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}