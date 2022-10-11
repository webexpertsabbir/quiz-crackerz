import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const previousTopics = useLoaderData();
    const topics = previousTopics.data;
    console.log(topics);
    return (
        <div className='grid grid-cols-4 gap-4 px-24 py-24'>
            {
              topics.map(topic => <Topic
              key={topic.id}
              topic={topic}
              ></Topic>)  
            }
        </div>
    );
};

export default Topics;