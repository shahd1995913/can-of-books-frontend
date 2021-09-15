import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './Login.css'

class BookItems extends React.Component {
    render(){
        return(
            <div >
                <p > Title  : {this.props.item.BookName}</p>
                <p> Status :{this.props.item.Status}</p>
                <p> Email :{this.props.item.email}</p>
                <p> Description :{this.props.item.Description}</p>
                <button onClick={() => this.props.deleteBook(this.props.item._id)}>Delete</button>
            </div>
        )
    }
}

           
           
export default BookItems;