import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class BookItems extends React.Component {
    render(){
        return(
            <>
                <p > Title  : {this.props.item.title}</p>
                <p> Status :{this.props.item.status}</p>
                <p> Email :{this.props.item.email}</p>
                <p> Description :{this.props.item.description}</p>
            </>
        )
    }
}

export default BookItems;