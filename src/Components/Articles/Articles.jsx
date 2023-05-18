import React from "react";
import "./Articles.css";
import Array from "./ArticlesArray";

const Articles = () => {
  return (
    <div>
      <h1 className="articles__header">Last articles</h1>
      <div className="articles__section">
        {Array.map((article) => (
          <div className="articles__section-tab">
            <img src={article.image} alt={article.header} />
            <div>
              <h6>By {article.publisher}</h6>
              <h3>{article.header}</h3>
              <p> {article.paragraph} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
