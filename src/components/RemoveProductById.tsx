import React from 'react'

export default function RemoveProductById() {
    let id=3;
    fetch(`http://localhost:3000/products/${id}`, {method:"DELETE",})
    .then(response=>{
        if (response.ok) {
            console.log(response);
        }else{
            console.log("Da xoa hoac ko ton tai");
        }
    })
  return (
    <div>removeProductById</div>
  )
}