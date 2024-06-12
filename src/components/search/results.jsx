import React from 'react';
import { useState,useEffect } from 'react';
import './results.css'
import { Link,useNavigate} from 'react-router-dom';

const Results =({query})=>{
    const [result ,setresult] = useState([]);

    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCQfp-VjFklSmAT9SZ4pZBNlDDjMaAMY1w`;

    
   useEffect( ()=>{
  const fetchresults = async ()=>{
    const resp = await fetch(url);
    const data = await  resp.json();
    console.log(data)
    setresult(data.items || []);
}
fetchresults();
},[query])

console.log(query);
   
  return (
    <>
    <div className="grid_outer">
<div className="grid_cont"> 
{result.map((user,index)=>{
const {authors,title,subtitle,description,publisher,publishedDate,imageLinks} = user.volumeInfo;
const photo = imageLinks?.thumbnail;
const Id = user.id;

return (
 <> 
 <div className="grid_outer">
  
  <div key={index} className="grid_item">
        <button className='bts' ><Link to={`/MoreAbtBook/${Id}`}>
        <img src={photo} alt="Book Cover" />
        <h1>{title}</h1>
        <h2>Authors : {authors}</h2>
        <h3>Published On : {publishedDate}</h3>
        {/* <p>{description}</p> */}
        <p>{Id}</p>
          </Link></button>
    </div>
 </div>
    </>
)
})}
   
</div>
</div>
    </>
  )
}
export default Results;