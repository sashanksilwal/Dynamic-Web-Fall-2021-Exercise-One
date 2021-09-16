import React from 'react'

function Article(props){
    let hello = "Hello Article"
    return (
        <div className="PageWrapper App">
            <h1 >
                {hello}
            </h1>
        </div>
    );
}

export default Article;