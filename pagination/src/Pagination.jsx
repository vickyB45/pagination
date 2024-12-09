import React, { useState } from 'react'
const Pagination = ({items, itemPerPage}) => {


    const [product,setProduct] = useState('')
    const [currentPage,setCurrentPage] = useState(1)

    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage

    const currentItem = items.slice(indexOfFirstItem,indexOfLastItem).filter((item)=>(
      item.toLowerCase().includes(product.toLowerCase())
   ) )
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(items.length / itemPerPage); i++){
        pageNumber.push(i)
    }
  


  return (
    <div>
        <div className="search-container">
      <input className='search' type="search" placeholder='Search...' onChange={(e)=>setProduct(e.target.value)}/>
        </div>
        <div className='main-container'>
        <ul>
        {
            currentItem.map((item,index)=>{
                return <li key={index}>{item}</li>
            })
        }
      </ul>
            </div>
      {
        pageNumber.map((num)=>{
            return (
                    <button key={num} onClick={()=>setCurrentPage(num)}>{num}</button>
            )
        })
      }
    </div>
  )
}

export default Pagination
