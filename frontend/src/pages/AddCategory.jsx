import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function AddCategory() {
  return (
    <div className="py-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="border-0 shadow-lg rounded-4">
              <Card.Body className="p-4">
                {/* Header */}
                <div className="text-center mb-4">
                  <h3 className="fw-bold">Add New Category</h3>
                  <p className="text-muted">Fill the details below</p>
                </div>

                <Form>
                  {/* Title */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="Enter category title"
                      className="py-2"
                      required
                    />
                  </Form.Group>

                  {/* Image */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Image URL</Form.Label>
                    <Form.Control
                      type="text"
                      name="img"
                      placeholder="Paste image link"
                      className="py-2"
                      required
                    />
                  </Form.Group>

                  {/* Buttons */}
                  <div className="d-grid gap-2 mt-4">
                    <Button variant="success" size="lg" type="submit">
                      Add Category
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
