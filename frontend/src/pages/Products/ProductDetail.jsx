import './ProductDetail.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/ProductApi";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getProductById(id);
      setProduct(data.data); // ✅ FIX

    } catch (err) {
      setError("Could not load product!");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]); // ✅ FIX

  // ✅ loading
  if (loading) return <p>Loading...</p>;

  // ✅ error
  if (error) return <p className="text-danger">{error}</p>;

  // ✅ null check
  if (!product) return <p>No product found</p>;

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6"><img
        src={product.image}
        alt={product.name}
        style={{ width: "200px" }}
      /></div>
          <div className="col-6"> <h2 className='color text-center'>{product.name}</h2>

      

      <p className='my-5'><span className='text-dark fs-3'> {product.description}</span></p>
      <p className='fs-3'><strong>Price:</strong> $ {product.price}</p>
      <p className='fs-3'><strong>Available Quantity:</strong> {product.quantity}</p>

      <button className='btn btn-success btn-lg'>Add to Cart</button></div>
     
      </div>
      </div>
    </div>
  );
};

export default ProductDetail;