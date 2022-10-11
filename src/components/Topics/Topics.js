import React from 'react';
import { createBrowserRouter, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Topic from '../Topic/Topic';

const Topics = () => {
    const previousTopics = useLoaderData();
    const topics = previousTopics.data;
    // console.log(topics);
    
    return (
        <div className=''>
            <Banner></Banner>
            <div className='grid grid-cols-4 gap-4 px-24 py-12'>
                {
                topics.map(topic => <Topic
                key={topic.id}
                topic={topic}
                ></Topic>)  
                }
            </div>
        </div>
    );
};

export default Topics;