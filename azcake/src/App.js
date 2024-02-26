import React from "react";
import "./Components/img/head.png";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/pages/About/About";
import Shop from "./Components/pages/Shop/Shop";
import ContactUs from "./Components/pages/Contact/ContactUs";
import Allcake from "./Components/pages/Allcake/Allcake";
import cheesecake from "./Components/pages/Cheesecake/Cheesecake";
import Decoratedcakes from "./Components/pages/Decoratedcake/Decoratedcake";
import Engagement from "./Components/pages/Engagementcake/Engagement";
import Flowers from "./Components/pages/Flowers/Flowers";
import Food from "./Components/pages/Food/Food";
import Giftbox from "./Components/pages/Giftbox/Giftbox";
import Minicake from "./Components/pages/Minicake/Minicake";
import Readycakes from "./Components/pages/Readycake/Readycakes";
import SignUp from "./Components/pages/Signup/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about-us" exact Component={About} />
        <Route path="/shop" exact Component={Shop} />
        <Route path="/contact-us" exact Component={ContactUs} />
        <Route path="/allcakes" exact Component={Allcake} />
        <Route path="/cheesecake" exact Component={cheesecake} />
        <Route path="/decoratedcakes" exact Component={Decoratedcakes} />
        <Route path="/engagement-wedding" exact Component={Engagement} />
        <Route path="/flowers" exact Component={Flowers} />
        <Route path="/food" exact Component={Food} />
        <Route path="/giftbox" exact Component={Giftbox} />
        <Route path="/minicake" exact Component={Minicake} />
        <Route path="/readycakes" exact Component={Readycakes} />
        <Route path="/sign-up" exact Component={SignUp} />
      </Routes>
    </Router>
  );
}

export default App;
