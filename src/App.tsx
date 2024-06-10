import React, { useEffect, useState } from 'react'
import GetAllProduct from './components/GetAllProduct'
import GetProductById from './components/GetProductById'
import RemoveProductById from './components/RemoveProductById'
import CreateProduct from './components/CreateProduct'
import UpdateProductById from './components/UpdateProductById'
import ProductTable from './components/BT7-10/ProductTable'
import ProductForm from './components/BT7-10/ProductForm'
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  dateAdded: string;
  image: string;
}
export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  useEffect(() => {
    fetch('http://localhost:3000/productB7')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
    }, []);
    const addProduct = async (newProduct: Omit<Product, 'id'>) => {
      try {
        let response = await fetch('http://localhost:3000/productB7', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newProduct)
        });
  
        if (response.ok) {
         location.reload();
          setIsFormVisible(false);
        } else {
          console.log('Lỗi khi gọi API:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Có lỗi xảy ra:', error);
      }
    };
    const updateProduct = async (updatedProduct: Product) => {
      try {
        let response = await fetch(`URL_API_CUA_BAN/${updatedProduct.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedProduct)
        });
  
        if (response.ok) {
          location.reload();
          setIsFormVisible(false); 
          setCurrentProduct(null); 
        } else {
          console.log('Lỗi khi gọi API:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Có lỗi xảy ra:', error);
      }
    };
  

  return (
    <div>
      <GetAllProduct/>
      <GetProductById/>
      <RemoveProductById/>
      {/* <CreateProduct/> */}
      <UpdateProductById/>
      <h1>Danh sách sản phẩm</h1>
      <button className="btn btn-primary" onClick={() => setIsFormVisible(true)}>Thêm mới sản phẩm</button>
      {isFormVisible && <ProductForm products={products} onCancel={() => setIsFormVisible(false)} onSave={addProduct} />}
      <ProductTable products={products} />
    </div>
  )
}