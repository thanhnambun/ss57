import React from 'react'

export default function GetAllProduct() {
    
    fetch("http://localhost:3000/products")
    .then(response=>response.json()
    )
    .then((data)=>{
        console.log(data);
    })
 
  return (
    <div>getAllProduct</div>
  )
}