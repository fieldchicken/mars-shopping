import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'Portable Solar Power Kit',
    image: 'https://cdn1.imggmi.com/uploads/2019/11/6/121a495237275b59fa785a63af423763-full.jpg',
    description: 'Low battery and no charger sounds as scary as the trip itself. Whatever electronics you are bringing, as long as there is no electricity, forget about your entertainment. You don’t want to die of boredom.',
    price: 79.95
  },

  {
    item: 'Portable Water Filter',
    image: 'https://cdn1.imggmi.com/uploads/2019/11/6/88ea3fe0ff4df9c691854ce619e1a237-full.jpg',
    description: 'We know there is frozen water on the planet. But we don’t know if it’s drinkable. All the ice deserves a drink, so bring a filter (Water Deionization Systems).',
    price: 49.99
  },

  {
    item: 'First Aid Kit',
    image: 'https://cdn1.imggmi.com/uploads/2019/11/6/f4852290f2588a415cafadb4040fb4f4-full.jpg',
    description: 'For those who are accident-prone (Adventure Marine 1000 First Aid Kit).',
    price: 339.99
  },

  {
    item: 'Drone',
    image: 'https://cdn1.imggmi.com/uploads/2019/11/6/04eb091c918f8892cf2b22a9b47f94e2-full.jpg',
    description: 'Use the Mavic Air to navigate unknown territory. An additional benefit is take a video of the landscape to send to your friends and family back on earth.',
    price: 849.99
  },

  {
    item: 'Mars Bar',
    image: 'https://cdn1.imggmi.com/uploads/2019/11/6/973a15b1dc926c28c3d3995c041f0c3c-full.jpg',
    description: 'You never know who you will meet on red planet but a Mars bar will be a goodwill gift to present to the Martians, just in case. Everyone loves chocolate.',
    price: 6.89
  },
]

function App() {
  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
     <SearchForm />
     <ShoppingCart />
     <a href="https://www.myku.co/blogs/journal/10-things-to-pack-for-your-trip-to-mars">Original Content</a>
    </div>
  );
}

function ShoppingCart() {
  return(
    <div className="cart">
      {shoppingCartItems.map(item => Product(item))}
    </div>
  );
}

function Product(props) {
  return(
    <div className="product">
      <div className="product-title">
       <h3>{props.item}</h3> 
      </div>
      <div className="product-content">
        <div className="product-img">
          <img src={props.image} />
        </div>
        <div className="product-desc">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="product-footer">
        <p>${props.price}</p>
        <div className="quantity">
        </div>
      </div>
    </div>
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
