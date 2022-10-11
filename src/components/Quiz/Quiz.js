import React from 'react';
import QuizOption from '../QuizOption/QuizOption';

const Quiz = ({quiz}) => {
    // console.log(quiz)
    const { question, options, correctAnswer} = quiz;
    // console.log(correctAnswer)
    // const totify = 
    const quizAlert = (e) =>{
        const tost = e.target.innerText;
        const carect = correctAnswer;
        
        if(carect === tost){
           
        }
        else{
            
        }
    }
    return (
        <div>
            <h2 className='text-2xl'><b>Quiz:</b>{question}</h2>
        
            <div className='px-9'>
                <form className='grid grid-cols-2 gap-10 p-6' action="">
                    {
                        options.map((option, idx) => <QuizOption
                            key={idx}
                            option={option}
                            quizAlert={quizAlert}

                        ></QuizOption>)
                    }   
                </form>
            </div>
        </div>
    );
};

export default Quiz;