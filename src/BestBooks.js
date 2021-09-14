import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import BookItems from './BookItems';
import axios from 'axios';
import './BestBooks.css';

class MyFavoriteBooks extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
    FavBookArr: []

    }


  }

  componentDidMount = () => {


    const { user } = this.props.auth0;
    const email = user.email;
    axios.get(`http://localhost:3010/getBook?email=${email}`).then(result => {
      this.setState({ FavBookArr: result.data })


    })

    // catch(err=>{


    // console.log(err + 'Error');

    // })

  }


addBook=(event)=>{
event.preventDefault();
const{user}=this.props.auth0;
const email =user.email;
const obj={

  BookName:event.target.BookName.value,
  Description:event.target.Description.value,
  Status:event.target.Status.value,
  ownerEmail:email

}


// we need the POST to send data and the data secoure the data in body must to be not in the header
//  POST-->Add  for security put the data inside the body no one can acess expect the authorized
// When send data use POST the data will not be in Qury String Parameter QSP
// the GET data will be exist in the QSP
}

  render() {
    return (
      <>
        <h1>My Favorite Books</h1>
        <form>
<fieldset>

<legend>Add Book :</legend>
<input type="text" name="BookName" placeholder="Book Name"></input>
<input type="text" name="Description" placeholder="Description"></input>
<input type="text" name="Status" placeholder="Status"></input>
<button type="submit">Add</button>


</fieldset>





        </form>
        {this.state.FavBookArr.map(item => {

          return (
            <BookItems item={item} />

          )
        })
        }
        <p>
          This is a collection of my favorite books
        </p>
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
