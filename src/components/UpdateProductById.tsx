import React from 'react'

interface Product {
 
        id: string,
        product_name: string,
        image: string,
        price: number,
        quantity: number,
        created_at: string
   
}
export default function UpdateProductById() {
    async function updateProductById(productId:number, updatedProduct:Product) {
       
        let product = {
            id: updatedProduct.id,
            product_name: updatedProduct.product_name,
            image: updatedProduct.image,
            price: updatedProduct.price,
            quantity: updatedProduct.quantity,
            created_at: updatedProduct.created_at
        };
    
        try {

            let response = await fetch(`URL_API_CUA_BAN/${productId}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
    
   
            if (response.ok) {
                let result = await response.json();
                console.log('Kết quả trả về từ server:', result);
            } else {
                console.log('Lỗi khi gọi API:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Có lỗi xảy ra:', error);
        }
    }
    
    let updatedProduct = {
            id: "111",
            product_name: "Laptop Dell XPS 13",
            image: "https://example.com/images/dell-xps-13.jpg",
            price: 1500,
            quantity: 10,
            created_at: "2024-01-15T10:30:00Z"
    };
    updateProductById(111, updatedProduct);
  return (
    <div>UpdateProductById</div>
  )
}