import React from 'react';

const Blog = () => {
    return (
        <div className='lg:px-72 md:px-28 py-20'>
            <div>
                <h2 className='text-2xl font-semibold'><b>Q1:</b> What is React Router and what does it do with it?</h2>
                <p><b>Ans:</b> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>  
            <div className='mt-5'>
                <h2 className='text-2xl font-semibold'><b>Q1:</b> How does the context api work?</h2>
                <p><b>Ans:</b> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. </p>
            </div>  
            <div className='mt-5'>
                <h2 className='text-2xl font-semibold'><b>Q1:</b> What is useRef and how does it work?</h2>
                <p><b>Ans:</b> useRef returns a mutable ref object whose .current property is initialized to the passed argument  initialValue . The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
                </p>
            </div>  
        </div>
    );
};

export default Blog;