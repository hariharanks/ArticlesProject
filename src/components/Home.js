import React, { useEffect, useState } from "react";
import getArticles from "../api/article";
import ArticleCard from './ArticleCard';

const Home = () => {
    const [articlesData, setArticlesData] = useState([]);

    const fetchArticles = async () => {
        const articles = await getArticles();
        if (articles && articles.results.length > 0) {
            setArticlesData(articles.results);
        }
    }

    useEffect(() => {
        fetchArticles();
    }, [])

    return (
        <>
            <div className='container'>
                <h1>Articles</h1>
                <div className="articleContainer">
                {articlesData.length > 0 && articlesData.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                ))}
                </div>
            </div>
        </>
    )
};

export default Home;
