import { Card, Button } from "react-bootstrap";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {

const navigate  = useNavigate();
const NavigateToDetail =(id)=>{
    navigate(`/product/${id}`)
}

  return (
    <Card>
      
      {/* IMAGE */}
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "180px", objectFit: "cover" }}
       onClick={() => NavigateToDetail(product._id)}
      />

      <Card.Body>

        {/* NAME */}
        <Card.Title>{product.name}</Card.Title>

        {/* PRICE + CART ICON SAME LINE */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5 style={{ margin: 0 }}>${product.price}</h5>

          <Button variant="secondary" size="sm" className="border-rounded">
            <FaShoppingCart />
          </Button>
        </div>

        {/* RATING */}
        <div style={{ marginTop: "8px" }}>
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <span style={{ marginLeft: "5px" }}>4.5</span>
        </div>

      </Card.Body>
    </Card>
  );
};

export default ProductCard;