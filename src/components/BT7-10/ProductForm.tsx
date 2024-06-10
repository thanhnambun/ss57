import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    dateAdded: string;
    image: string;
}

interface ProductFormProps {
  products: Product[];
  onCancel: () => void;
  onSave: (product: Omit<Product, 'id'>) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ products, onCancel, onSave }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [image, setImage] = useState('');

  const handleSave = () => {
    if (!name  || !price  || !quantity || !image) {
      alert('Các trường không được phép để trống');
      return;
    }

    if (products.some(product => product.name === name)) {
      alert('Tên sản phẩm không được phép trùng');
      return;
    }

    const newProduct = {
      name,
      price,
      quantity,
      dateAdded: new Date().toISOString().split('T')[0],
      image
    };

    onSave(newProduct);
  };

  return (
    <div className="product-form">
      <h2>Thêm mới sản phẩm</h2>
      <div>
        <label>Tên sản phẩm:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
 
      <div>
        <label>Giá:</label>
        <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} />
      </div>
     
      <div>
        <label>Số lượng:</label>
        <input type="number" value={quantity} onChange={e => setquantity(Number(e.target.value))} />
      </div>
      <div>
        <label>Hình ảnh:</label>
        <input type="text" value={image} onChange={e => setImage(e.target.value)} />
      </div>
      <button onClick={handleSave}>Lưu</button>
      <button onClick={onCancel}>Hủy</button>
    </div>
  );
}

export default ProductForm;