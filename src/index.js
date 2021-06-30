import React from 'react'
import ReactDom from 'react-dom'
import './index.css' 
import {books} from './books'

//komponenta
import Book from  './Book'
//this is component needs CapitalCase

// const author = 'Amelia Hephworth';
// const title = "I love you to the moon and back"; 

//Children prop is everything we render beetwen opening and colsing tag of componentn

 
function BookList(){
  return (
  <section className='booklist'> 
  {books.map(book=>
  // trebao bi da se doda id
    {return <Book key={book.id} book={book}></Book>}
    )}
  </section>
  ) ;
  
}


// const Image = ()=> <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" alt="" />

//props 
//<Title title="ranod" number={21}/>
// const Title = (props)=> {
//   console.log(props)
//   return(
//     <header>
//   <h1>{title}</h1>
//   <h4>{author.toUpperCase()}</h4>
//   <h3>{props.title}</h3>
//   </header>
//   );
// }

// const Author = ()=> <h4>Amelia Hepworthy</h4>
// // const Greeting = ()=>{
// //   return React.createElement('div',{},React.createElement('h1',{},'hello world'))
// // }

//inceting js into index.html (What are we going to render, where we going to render)
ReactDom.render(<BookList />,document.getElementById("root"))