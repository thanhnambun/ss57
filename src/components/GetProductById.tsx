import React from 'react'

export default function GetProductById() {

    let id=2;
    fetch(`http://localhost:3000/products/${id}`)
    .then(response=>response.json())
    .then((data)=>{console.log(data);
    })
  return (
    <div>GetProductById</div>
  )
}