import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  state = {
    products: [
      {
        "_id": "1",
        "title": "The Monk Who Sold His Ferrari",
        "author": "Robin Sharma",
        "src": [
          process.env.PUBLIC_URL + '/assets/book1.png',
          process.env.PUBLIC_URL + '/assets/book2.png',
          process.env.PUBLIC_URL + '/assets/book3.png',
          
        ],
        "description": "The Monk Who Sold His Ferrari is a self-help book by Robin Sharma, a writer and motivational speaker. The book is a business fable derived from Sharma's personal experiences after leaving his career as a litigation lawyer at the age of 25.",
        "price": "₹250",
        "sold_by": "Aditi Mishra"

      }

    ],
    index:0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0;i< images.length; i++){
      images[i].className = images[i].className.replace("actiev","");
    }
    images[index].className= "active";
  };

  componentDidMount(){
    const {index}= this.state;
    this.myRef.current.children[index].className = "active"
  }





  render() {
    const { products,index } = this.state;
    return (
      <div className="container">
                
      <div className="app">
        {
          products.map(item => (
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} />
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>

              

                </div>
                <h3>Author: {item.author}</h3>
                <h4>Price: {item.price}</h4>
                {/* <div className="colors">
                  {
                    item.colors.map(color, index) =>(
                      <button style={{background:color}} key={index}></button>
                    ))
                  }
                </div> */}
                <p>{item.description}</p>
                <p>Sold By: {item.sold_by}</p>

                <div className="thumb" ref={this.myRef}>
                  {
                    item.src.map((img, index) => (
                      <img src={img} key={index} 
                        onClick={() => this.handleTab(index)}
                      />
                    ))
                  }

                </div>
                <Button className="wishlist">Add to WishList</Button>
                <Button className="wishlist">Contact Seller</Button>


              </div>
            </div>

          ))
        }

      </div>
      </div>
    );
  };
}

export default App;
