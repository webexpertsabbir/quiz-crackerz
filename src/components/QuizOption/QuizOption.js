import React from 'react';

const QuizOption = ({option,  quizAlert}) => {

    // console.log(correctAnswer)

    // const quizAlert = (e) =>{
    //     const tost = e.target.innerText;
    //     console.log(tost)
    // }

    return (
        <div className='border p-5 hover:bg-green-100 '>
            
            <input type="radio" name="select" id={option} />
            <label onClick={(e) => quizAlert(e)}  htmlFor={option} className="w-full px-1">
            {option}
            
            </label>
        </div>
    );
};

export default QuizOption;