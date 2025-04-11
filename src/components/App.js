import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image}
              about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      
    </div>
  );
}
export function Header ({name}){
  return <header><h1>{name}</h1></header>
}

export function About ({image="https://via.placeholder.com/215",about}){
  return <aside>
    <img src={image} alt="blog logo"/>
    <p>{about}</p>
  </aside>
}

export function ArticleList({posts}){
 return <main>
  {posts.map((post)=>{
    return <Article 
              key={post.id}
              title={post.title}
              date={post.date}
              preview={post.preview}/>
            
  })}
 </main>
}

export function Article({title,date="January 1, 1970",preview}){
  return <article>
    <h3>{title}</h3>
    <small>{date}</small>
    <p>{preview}</p>
  </article>
}

export default App;
