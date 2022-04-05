import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>

            <div className='question-one'>
                <h2>What is Context Api?</h2>
                <p>Context API helps passing data to child component without pops drilling. It is like mobile network. By wrapping context API component any data can be passed through Context API to the child components or file only. It creates a context and export to share file to another file. It provides two components Provider and Consumer wrapped by Context API component. Last, in the Provider component any dynamic or static data can pass through value, and catch from child component.</p>
            </div>
            
            <div className='question-two'>
                <h2>What is Semantic tag?</h2>
                <p>Semantic tags are meaningful html tags. By reading tag we can understand the purpose of that tag. Like - section, article, main, strong, bold etc.</p>
            </div>

        </div>
    );
};

export default Blogs;