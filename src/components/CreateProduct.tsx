import React from 'react'

export default function CreateProduct() {
    let product=
    {
        "id": "10",
        "product_name": "Laptop Dell XPS 13",
        "image": "https://example.com/images/dell-xps-13.jpg",
        "price": 1501230,
        "quantity": 12320,
        "created_at": "2024-01-15T10:30:00Z"
      };
    fetch(`http://localhost:3000/products/`, {method:"POST",   
        headers: {
        'Content-Type': 'application/json'
    },
    
    body: JSON.stringify(product)})
    .then(response=>{
      console.log("thanh cong them moi");
    })

    

  return (
    <div>CreateProduct</div>
  )
}