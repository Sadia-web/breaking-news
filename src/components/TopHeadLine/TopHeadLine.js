import React, { useEffect, useState } from 'react';
import News from '../News/News';



const TopHeadLine = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() =>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ecf2254474e34f1d873adff51f51f6dc')
        .then(res => res.json())
        .then(data => setArticles(data.articles))

    }, [])
    return (
        <div>
            <h2>Top Headlines: {articles.length}</h2>
            {
                articles.map(articles => <News article={articles}></News>)
            }
        </div>
    );
};

export default TopHeadLine;