import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import BookItems from './BookItems';
import UpdateForm from './UpdateForm';
import './BestBooks.css';

class MyFavoriteBooks extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      FavBookArr: [],
      showFlag:false,
BookName:'',
Description:'' ,
Status:'',
bookId:''
    }


  }

  componentDidMount = () => {


    const { user } = this.props.auth0;
    const email = user.email;
    axios.get(`http://localhost:3010/getBook?email=${email}`).then(result => {
      this.setState({
         FavBookArr: result.data
         })


    })

      .catch(err => {


        console.log(err + 'Error');

      })

  }


  addBook = (event) => {
    event.preventDefault();
    
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
 
      BookName: event.target.BookName.value,
      Description: event.target.Description.value,
      Status: event.target.Status.value,
      email: email

    
    }

console.log(obj);


    axios.post(`http://localhost:3010/addBook`, obj)
    .then(result => {

      this.setState({ 
        FavBookArr: result.data })


    })

      .catch(err => {

        console.log("Error on Adding data");

      })

  }

  // we need the POST to send data and the data secoure the data in body must to be not in the header
  //  POST-->Add  for security put the data inside the body no one can acess expect the authorized
  // When send data use POST the data will not be in Qury String Parameter QSP
  // the GET data will be exist in the QSP



  deleteBook = (id) => {
    // how to delete a specsifi item from DS  
    // delete like Get  i can acess by ? in URL 
    //PUT like Post
    const { user } = this.props.auth0;
    const email = user.email;
    axios.delete(`http://localhost:3010/deleteBook/${id}?email=${email}`)
      .then(result => {
        this.setState({
          FavBookArr: result.data
        })
      })
      .catch(err => {
        console.log('error in deleting Book');
      })
  }

  // i need to update the array after make a delete item 

  // console.log(id)

  handleClose = () => {
    this.setState({
      showFlag : false
    })
  }

  showUpdateForm = (item) => {
    this.setState({
      showFlag: true,
      BookName : item.BookName,
      Description : item.Description,
      Status:item.Status,
      bookId : item._id

    })
  }

  updateBook = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      BookName : event.target.BookName.value,
      Description : event.target.Description.value,
      Status : event.target.Status.value,
      email : email
    }

    axios
    .put(`http://localhost:3010/updateBook/${this.state.bookId}`,obj)
    .then(result =>{
      this.setState({
       FavBookArr:result.data,
        showFlag : false
      })
    })
    .catch(err=>{
      console.log('error in updating the data');
    })
  }
























  render() {
    return (
      <>
        <h1>My Favorite Books</h1>
        <form onSubmit={this.addBook }>
          <fieldset>

            <legend>Add Book :</legend>
            <input type="text" name="BookName" placeholder="Book Name"></input>
            <input type="text" name="Description" placeholder="Description"></input>
            <input type="text" name="Status" placeholder="Status"></input>
            <button type="submit">Add</button>


          </fieldset>





      </form>
      { this.state.FavBookArr.map(item => {

        return (
          <BookItems item={item} 
          
          deleteBook ={this.deleteBook}
          showUpdateForm = {this.showUpdateForm}
          />

        )
      })
    }
    {/* <p>
      This is a collection of my favorite books
    </p> */}

    <UpdateForm  show = {this.state.showFlag}
    handleClose = {this.handleClose}
    BookName = {this.state.BookName}
    Description = {this.state.Description}
    Status = {this.state.Status}
    updateBook = {this.updateBook} />


  </>
  )
  }
}

export default withAuth0(MyFavoriteBooks);
