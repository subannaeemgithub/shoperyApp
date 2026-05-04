import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { addProduct } from '../../services/ProductApi';

const AddProduct = () => {

  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [inStock, setInStock] = useState(true);
  const [quantity, setQty] = useState("");
  const [image, setImg] = useState("");

  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const addItem = async (e) => {
    e.preventDefault();

    try {
      setLoad(true);
      setError(null);

      // ✅ payload (backend matching)
      const productData = {
        name,
        description,
        price,
        category,
        inStock,
        quantity,
        image
      };

      // ⚡ API CALL (IMPORTANT FIX WAS HERE IN YOUR PROJECT)
      const data = await addProduct(productData);

      // ✅ success message
      setMessage({
        variant: "success",
        text: data.message || "Product added successfully!"
      });

      // ✅ RESET FORM (FIXED CATEGORY NAME)
      setName("");
      setDesc("");
      setPrice("");
      setCategory("");
      setQty("");
      setImg("");
      setInStock(true);

      // auto hide message
      setTimeout(() => {
        setMessage(null);
      }, 3000);

    } catch (error) {
      setError(error);

      setMessage({
        variant: "danger",
        text: "Failed to add product!"
      });

      setTimeout(() => {
        setMessage(null);
      }, 3000);

    } finally {
      setLoad(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg p-4">

            <h3 className="text-center mb-4">Add Product</h3>

            {/* MESSAGE */}
            {message && (
              <div className={`alert alert-${message.variant}`}>
                {message.text}
              </div>
            )}

            <Form onSubmit={addItem}>

              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
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
                  <option value="">Select category</option>
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
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  value={image}
                  onChange={(e) => setImg(e.target.value)}
                />
              </Form.Group>

              <div className="d-grid">
                <Button type="submit" disabled={load}>
                  {load ? "Adding..." : "Add Product"}
                </Button>
              </div>

            </Form>

          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;