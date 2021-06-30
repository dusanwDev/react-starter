import React from 'react'

const Book = (props)=> {
    const {img,title,author} = props.book;
   const clickHandler = ()=>{
     alert ('hello world')
   }
   const complexExample = (author)=>{
   console.log(author)
   }
   return (
     <article>    
       <header>
       <img src={img} alt="" />
       <h1>{title}</h1>
       <h4>{author}</h4>
       {/* {children} */}
       </header>
       <button type="button" onClick={()=>complexExample(author )}>Click</button>
     </article>
   
   )}
export default Book
