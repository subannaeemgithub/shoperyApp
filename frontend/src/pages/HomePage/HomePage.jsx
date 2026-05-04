import "./HomePage.css";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/ProductApi";
import ProductCard from "../../components/ProductCard";
import Categories from "../Categories";
// icons
import { FaShippingFast, FaHeadset, FaLock, FaUndo } from "react-icons/fa";


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

    <>
     <div className="container-fluid my-4">
      <div className="row g-3">

        {/* LEFT BIG CARD */}
        <div className="col-lg-8 col-12">
          <div
            className="card text-white border-0 h-100"
            style={{
              borderRadius: "12px",
              backgroundImage: `url('/girl.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "400px"
            }}>
          
            <div className="card-body d-flex flex-column justify-content-center p-4 p-md-5" style={{ maxWidth: "500px" }}>

              <h1 className="fw-bold mb-3 display-5">
                Fresh & Healthy <br /> Organic Food
              </h1>

              <div className="d-flex align-items-center mb-2">
                <p className="mb-0 me-2">Sale up to</p>
                <span className="badge bg-warning text-dark px-3 py-2 fw-bold" style={{ fontSize: "1.1rem" }}>
                  30% OFF
                </span>
              </div>

              <p className="small opacity-75">
                Free shipping on all your order.
              </p>

              <button
                className="btn btn-light text-success fw-bold mt-3 px-4 py-2"
                style={{ borderRadius: "50px", fontSize: "16px", width: "fit-content" }}
              >
                Shop now →
              </button>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-4 col-12 d-flex flex-column gap-3">

          {/* TOP CARD */}
          <div
            className="card border-0 text-dark h-100"
            style={{
              borderRadius: "12px",
              backgroundImage: `url('/first.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "195px"
            }}
          >
            <div className="card-body p-4 d-flex flex-column justify-content-center">

              <p className="small mb-1 fw-bold opacity-75">SUMMER SALE</p>
              <h3 className="fw-bold mb-1">75% OFF</h3>
              <p className="small mb-3">Only Fruit & Vegetable</p>

              <button
                className="btn btn-link text-success p-0 fw-bold text-decoration-none text-start"
                style={{ fontSize: "14px" }}
              >
                Shop Now →
              </button>

            </div>
          </div>

          {/* BOTTOM CARD */}
          <div
            className="card text-white border-0 h-100"
            style={{
              borderRadius: "12px",
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/second.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "195px"
            }}
          >
            <div className="card-body d-flex flex-column justify-content-center align-items-center p-4 text-center">

              <p className="small mb-1 fw-bold opacity-75">BEST DEAL</p>
              <h4 className="fw-bold mb-3">
                Special Products <br /> Deal of the Month
              </h4>

              <button
                className="btn btn-link text-success p-0 fw-bold text-decoration-none"
                style={{ fontSize: "14px" }}
              >
                Shop Now →
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>

    

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

      <Categories />

      {/* 🔥 TITLE */}
      <h4 className="mb-3">Popular Products</h4>

      {/* 🔥 LOADING / ERROR */}
      {loading && <p>Loading products...</p>}
      {error && <p className="text-danger">{error}</p>}

      

      {/* 🔥 PRODUCTS GRID */}
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-item" key={p._id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>

    </div>
    
    </>
  );
};

export default HomePage;