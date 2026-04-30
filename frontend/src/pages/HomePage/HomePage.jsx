
import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/ProductApi";
import ProductCard from "../../components/ProductCard";

// icons
import { FaShippingFast, FaHeadset, FaLock, FaUndo } from "react-icons/fa";
import { Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";









const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const navigate = useNavigate();
const addToProduct =()=>{
  navigate('/add/product')
}


  // fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getAllProducts();
      setProducts(data.data);

    } catch (err) {
      setError("Could not load products!");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">

      {/* 🔥 INFO SECTION */}
      <div className="row text-center shadow py-3 mb-4">

        {/* 1st - Shipping */}
        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <FaShippingFast size={28} className="text-success me-2" />
          <div className="text-start">
            <h6 className="mb-1">Shipping</h6>
            <p className="mb-0">Free shipping on all your order</p>
          </div>
        </div>

        {/* 2nd - Support */}
        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <FaHeadset size={28} className="text-success me-2" />
          <div className="text-start">
            <h6 className="mb-1">Customer Support 24/7</h6>
            <p className="mb-0">Instant access to Support</p>
          </div>
        </div>

        {/* 3rd - Secure Payment */}
        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <FaLock size={28} className="text-success me-2" />
          <div className="text-start">
            <h6 className="mb-1">100% Secure Payment</h6>
            <p className="mb-0">We ensure your money is safe</p>
          </div>
        </div>

        {/* 4th - Refund */}
        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <FaUndo size={28} className="text-success me-2" />
          <div className="text-start">
            <h6 className="mb-1">Money-Back Guarantee</h6>
            <p className="mb-0">30 Days Money-Back Guarantee</p>
          </div>
        </div>

      </div>

      {/* 🔥 TITLE */}
      <h4 className="mb-3">Popular Products</h4>

      {/* 🔥 LOADING / ERROR */}
      {loading && <p>Loading products...</p>}
      {error && <p className="text-danger">{error}</p>}

      {/* 🔥 PRODUCTS GRID */}
      <Row>     
        {products.map((p) => (
          <div className="col-xl-2 col-lg-3 col-md-5">
          <div className="product-item" key={p._id}>
            <ProductCard product={p} />
          </div>
          </div>
        ))}
        </Row>
        <button className="btn btn-success"   as={Link} to='/add/product'   >Add product</button>
       <Link to='/add/product'> <button className="btn btn-success" >Add product</button></Link>
       <button onClick={addToProduct}>add</button>
      </div>

    
  );
};

export default HomePage;