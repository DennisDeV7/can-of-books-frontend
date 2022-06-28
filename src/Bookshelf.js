import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Bookshelf extends React.Component {
  render() {
    let booksArr = this.props.bookData.map((info) => {
      return(
      <Carousel.Item key={info._id}>
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
      </Carousel.Item>
      )
    });

      return (
        <Carousel variant='dark'>
          {booksArr}
        </Carousel>

      );

  }
}

export default Bookshelf;