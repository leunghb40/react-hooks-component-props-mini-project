import React from "react";
import Article from "./Article"; // Make sure to provide the correct path to your Article component

function ArticleList(props) {
  const articles = props.posts.map((post) => (
    <Article
      key={post.id} // Assign a unique key for each article
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  ));

  return <main>{articles}</main>;
}

export default ArticleList;