import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import UpdateBookForm from './UpdateBookForm';
import './Bookshelf.css';

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false,
      bookUpdate: ''
    }
  }

  handleonHide = () => {
    this.setState({
      showUpdateForm: false
    });
  };

  render() {
    let booksArr = this.props.bookData.map((info) => {
      return(
        <Carousel.Item key={info._id} >
        <img 
        className="d-block"
        src={require('./bills.png' )}
        alt='test' 
        />
        <Carousel.Caption >
          <p>{info.title}</p>
          <p>Description: {info.description}</p>
          <p>Status: {info.status}</p>
        </Carousel.Caption>
        <Button id="deleteButton" variant="dark" onClick={() => this.props.deleteBooks(info._id)}>Delete</Button>
        <Button id="updateButton" variant="dark" onClick={() => this.setState({showUpdateForm: true, bookUpdate: info})} >Update</Button>
      </Carousel.Item>
      )
    });

      return (
        <>
        <Carousel variant='dark'>
          {booksArr}
        </Carousel>
        {
          this.state.showUpdateForm &&
          <UpdateBookForm
            book={this.state.bookUpdate}
            updateBooks={this.props.updateBooks}
            handleOnHide={this.handleOnHide}
            showUpdateForm={this.state.showUpdateForm}            
          />
        }
        </>

      );

  }
}

export default Bookshelf;