import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const SingelTopic = () => {
    const previousQuiz = useLoaderData();
    const title = previousQuiz.data;
    // console.log(title)
    const singelQuiz = title.questions;
    // console.log(singelQuiz)
    return (
        <div className='px-52'>
            <div >
                <h2 className='text-3xl font-bold'>Quiz of{title.name}</h2>
                
            </div>
            {
                singelQuiz.map( quiz => <Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default SingelTopic;