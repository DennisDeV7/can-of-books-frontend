import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class UpdateBookForm extends React.Component {

  handleSubmit = (e) => {
    let bookToUpdate = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.value || this.props.book.status,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    this.props.updateBooks(bookToUpdate)
  }

  render() {
    console.log(this.props.book.title);

    return (

      <>
        <Modal show={this.props.showUpdateForm} onHide={this.props.handleOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>Modify Your Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title: </Form.Label>
                <Form.Control type="text" placeholder={this.props.book.title} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder={this.props.book.description} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" placeholder={this.props.book.status} />
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

export default UpdateBookForm;