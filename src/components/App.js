import React from "react";
import blogData from "../data/blog";
import About from "./About"
import Header from "./Header"
import ArticlesList from "./ArticlesList"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header name = {blogData.name}/>
      <About image = {blogData.image} about = {blogData.about}/>
      <ArticlesList posts = {blogData.posts}/>

    </div>
  );
}

export default App;
