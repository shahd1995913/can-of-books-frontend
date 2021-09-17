import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import css from './Login.css'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'

class BookItems extends React.Component {
    render() {
        return (
            <div >
                <Carousel >


                    {
                        this.props.item.map(item => {


                            return (
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.unsplash.com/photo-1547555999-14e818e09e33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                          alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3> Title  : {item.BookName}</h3>
                                        <h5> Status :{item.Status}</h5>
                                        <p> Email :{item.email}</p>
                                        <p> Description :{item.Description}</p>
                                        <Button variant="success" size="lg" onClick={() => this.props.deleteBook(item._id)}>Delete</Button>
                                        <Button variant="warning" size="lg" onClick={() => this.props.showUpdateForm(item)}>Update</Button>
                                    </Carousel.Caption>
                                </Carousel.Item>


                            )



                        })
                    }


                    {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/94/2a/21/942a21f55fbe7d4e7b8a783670b23e95.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> Title  : {this.props.item.BookName}</h3>
          <h5> Status :{this.props.item.Status}</h5>
          <p> Email :{this.props.item.email}</p>
         <p> Description :{this.props.item.Description}</p>
        </Carousel.Caption>
      </Carousel.Item> */}

                </Carousel>
                {/* <p > Title  : {this.props.item.BookName}</p>
                <p> Status :{this.props.item.Status}</p>
                <p> Email :{this.props.item.email}</p>
                <p> Description :{this.props.item.Description}</p>
                 */}
               

            </div>
        )
    }
}



export default BookItems;