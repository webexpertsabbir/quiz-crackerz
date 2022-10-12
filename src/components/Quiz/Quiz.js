import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid';
import './Quiz.css'



const Quiz = ({quiz}) => {
    // console.log(quiz)
    const { question, options, correctAnswer} = quiz;
    // console.log(correctAnswer)
    // const totify = 
    const notify = () => toast("congratulations! Correct answer");
    const notify2 = () => toast("Worng Answer");
    const notify3 = () => toast(correctAnswer);


    const quizAlert = (e) =>{
        const tost = e.target.innerText;
        const carect = correctAnswer;

       
        // tost === carect ? notify() : notify();
        
        if(tost === carect){
             return notify();
        }
        // else if(tost !== carect){
        //      alert('Wornd Answer')
        // }
        else{
    
            return notify2();
        }
    }

    const answerHandeler = () =>{
        notify3();
    }

    return (
        <div>
            <div className='title-icon'>
                <h2 className='text-2xl'><b>Quiz:</b>{question}</h2>
                <span onClick={() => answerHandeler() }><EyeIcon className="h-6 w-6 text-stone-600"/></span>
            </div>
            <div className='px-9'>
                <form className='grid grid-cols-2 gap-10 p-6' action="">
                    {
                        options.map((option, idx) => <QuizOption
                            key={idx}
                            option={option}
                            quizAlert={quizAlert}

                        ></QuizOption>)
                    } 
                    <ToastContainer />

                       
                </form>
            </div>
        </div>
    );
};

export default Quiz;