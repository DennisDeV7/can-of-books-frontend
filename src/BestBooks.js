import React from 'react';
import axios from 'axios';
import Bookshelf from './Bookshelf';
import BookModal from './BookFormModal';
import Button from 'react-bootstrap/Button';
import './Bookshelf.css';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      console.log(results.data)
      this.setState({
        books: results.data
      })
    } catch (error) {
      console.log('error: ', error.response.data)
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Handler fired');
    let newBook = {
      title: e.target.newBookTitle.value,
      description: e.target.newBookDescription.value,
      status: e.target.newBookStatus.value
    }
    console.log(newBook);
    this.postBooks(newBook)
  }

  postBooks = async (newBookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let createdBook = await axios.post(url, newBookObj);
      console.log(createdBook);
      this.setState({
        books: [...this.state.books, createdBook.data]
      });
    } catch (error) {
      console.log('error:', error.response.data);
    }
  }
  
  // added june 29
  updateBooks = async (bookToUpdate) => {
    try{
      let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`;
      let updatedBook = await axios.put(url, bookToUpdate);
      let updatedBookArray = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id 
          ? updatedBook.data
          : existingBook
      });
      this.setState({
        books: updatedBookArray
      })
    } catch(error) {
      console.log('error:', error.response.data);
    }
  }

  deleteBooks = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      });
    } catch(error) {
      console.log('we have an error: ', error.response.data);
    }
  }


  handleOpen = () => {
    this.setState({
      show: true
    })
  }

  handleonHide = () => {
    this.setState({
      show: false
    });
  };

  componentDidMount() {
    this.getBooks();
  }
  

  render() {

    /* TODO: render all the books in a Carousel */
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Bookshelf
            bookData={this.state.books}
            deleteBooks={this.deleteBooks}
            updateBooks={this.updateBooks}
          />
        ) : (
          <h3>Bookshelf is currently empty</h3>
        )}
        <BookModal
          show={this.state.show}
          hideModal={this.handleonHide}
          newBookData={this.handleFormSubmit}
          />
        <Button onClick={this.handleOpen}>
          Add New Book
        </Button>
      </>
    )
  }
}

export default BestBooks;
