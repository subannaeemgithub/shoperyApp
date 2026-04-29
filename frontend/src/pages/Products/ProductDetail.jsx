import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/ProductApi";


const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
     const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
    
      // fetch products
      const fetchProduct = async () => {
        try {
          setLoading(true);
          setError(null);
    
          const data = await getProductById(id);
          setProducts(data.data);
    
        } catch (err) {
          setError("Could not load products!");
          console.log(err);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchProduct();
      }, []);
    
  
  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>

      <img
        src={product.image}
        alt={product.name}
        style={{ width: "200px" }}
      />

      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> Rs. {product.price}</p>
      <p><strong>Available Quantity:</strong> {product.quantity}</p>

      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;