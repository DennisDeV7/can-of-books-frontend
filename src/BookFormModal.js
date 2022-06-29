import axios from 'axios';
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class BookModal extends React.Component {

  

  render() {

    return (
      <>
        <Modal show={this.props.show} onHide={this.props.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.newBookData}>
              <Form.Group className="mb-3" controlId="newBookTitle">
                <Form.Label>Title: </Form.Label>
                <Form.Control type="text" placeholder="Title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="newBookDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="newBookStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" placeholder="Status" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>

    )
  }
}

export default BookModal;