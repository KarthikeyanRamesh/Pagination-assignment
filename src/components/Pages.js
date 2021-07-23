import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';

const Pages = () => {
  const [posts, setSports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const getData=()=>{
    setLoading(true);
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setSports(myJson)
        setLoading(false);
      });
  }
  useEffect(()=>{
    getData()
  },[])

   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
 
   const paginate = pageNumber => setCurrentPage(pageNumber);
 
   return (
     <div className='container mt-5'>
       <h1 className='text-primary mb-3'>Olympic games</h1>
       <Posts posts={currentPosts} loading={loading} />
       <Pagination
         postsPerPage={postsPerPage}
         totalPosts={posts.length}
         paginate={paginate}
       />
     </div>
   );
 };
 
 export default Pages;
