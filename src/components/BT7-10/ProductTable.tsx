import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  dateAdded: string;
  image: string;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {

    const deleteProductById = async (productId: number) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
          try {
            let response = await fetch(`http://localhost:3000/productB7/${productId}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              }
            });
    
            if (response.ok) {
              console.log(`Đã xóa sản phẩm với ID: ${productId}`);
              location.reload();
            } else {
              console.log('Lỗi khi gọi API:', response.status, response.statusText);
            }
          } catch (error) {
            console.error('Có lỗi xảy ra:', error);
          }
        }
      };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Tên sản phẩm</th>
          <th>Hình ảnh</th>
          <th>Giá</th>
          <th>Số lượng (kg)</th>
          <th>Ngày thêm</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td><img src={product.image} alt={product.name} className="product-image" /></td>
            <td>{product.price} đ</td>
            <td>{product.quantity}</td>
            <td>{product.dateAdded}</td>
            <td>
              <button className="btn btn-warning">Sửa</button>
              <button className="btn btn-danger" onClick={()=>{deleteProductById(product.id)}}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;