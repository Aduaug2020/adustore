import "./css/App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import React from "react";
import Product from "./Components/Product";
import { loadStripe } from "@stripe/stripe-js";
import DetailPage from "./Components/DetailPage";
import CheckoutPage from "./Components/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe("pk_test_51Hf9EsIjq2KMm1vIrtyaI9OtGTvf45UJtZJgN3TPTmOaTQ5IAqHwTs4YIhZCQNNphj6NkIAFZN75pLloPCwMrsZz00SVhcXIq6");
function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          
          <Route path="/cart"><Header /><Checkout /></Route>
          <Route path="/DetailPage"><Header /><DetailPage /></Route>
          <Route path="/checkoutpage"><Elements stripe={promise}><Header /><CheckoutPage /></Elements></Route>
          <Route path="/"><Header /><Product /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
