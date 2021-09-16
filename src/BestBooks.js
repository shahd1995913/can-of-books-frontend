import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import BookItems from './BookItems';

import './BestBooks.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import css from './Login.css'
// import Button from 'react-bootstrap/Button';


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

      .catch(err => {


        console.log(err + 'Error');

      })


  }

  render() {
    return (
      <>
        <h1>My Favorite Books</h1>
        {this.state.FavBookArr.map(item => {
          return (<BookItems item={item} />

          )

        }


        )
        }

        {this.state.FavBookArr.length > 0 && <BookItems item={this.state.FavBookArr} />
        }
        <p>
          This is a collection of my favorite books
        </p>
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
