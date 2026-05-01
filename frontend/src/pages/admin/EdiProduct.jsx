import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct } from '../../services/ProductApi';

const EditProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [inStock, setInStock] = useState(true);
  const [quantity, setQty] = useState("");
  const [image, setImg] = useState("");

  const [load, setLoad] = useState(false);
  const [message, setMessage] = useState(null);

  // 🟢 FETCH EXISTING DATA
  const fetchProduct = async (id) => {
    try {
      const data = await getProductById(id);

      const product = data.data;

      setName(product.name);
      setDesc(product.description);
      setPrice(product.price);
      setCategory(product.category);
      setQty(product.quantity);
      setImg(product.image);
      setInStock(product.inStock);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  // 🔵 UPDATE FUNCTION
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoad(true);

      const updatedData = {
        name,
        description,
        price,
        category,
        quantity,
        image,
        inStock
      };

      const data = await updateProduct(id, updatedData);

      setMessage({
        variant: "success",
        text: "Product updated successfully!"
      });

      // 🔁 redirect after 2 sec
      setTimeout(() => {
        navigate("/admin");
      }, 2000);

    } catch (error) {
      setMessage({
        variant: "danger",
        text: "Update failed!"
      });
    } finally {
      setLoad(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg p-4">

            <h3 className="text-center mb-4">Edit Product</h3>

            {message && (
              <div className={`alert alert-${message.variant}`}>
                {message.text}
              </div>
            )}

            <Form onSubmit={handleUpdate}>

              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  value={description}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </Form.Group>

              <Form.Check
                type="checkbox"
                label="In Stock"
                checked={inStock}
                onChange={(e) => setInStock(e.target.checked)}
              />

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="fruit">Fruits</option>
                  <option value="vegetables">Vegetables</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  value={quantity}
                  onChange={(e) => setQty(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  value={image}
                  onChange={(e) => setImg(e.target.value)}
                />
              </Form.Group>

              <div className="d-grid">
                <Button type="submit" disabled={load}>
                  {load ? "Updating..." : "Update Product"}
                </Button>
              </div>

            </Form>

          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProduct;