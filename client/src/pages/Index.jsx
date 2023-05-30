import React from "react";
import "../css/style.scss"
import { Link } from "react-router-dom"

const Index = () => {
  return (
    <div>
      <section classname="hero">
        <div classname="hero-text">
          <h1 className="hero-p">Welcome to Taste Talks</h1>
          <p>"Life Made Sweeter..."</p>
          <Link to="/blog"><button>Explore</button></Link>
        </div>
      </section>

      <section classname="about">
        <h2>About Us</h2>
        <div classname="about-content">
          <p>Well hello there my foodie friends! Today we're talking food blogging! If blogging isn't your cup of tea and your just here for food and the recipes, I promise I have some more deliciousness in store for you (really, scout's honor!) soon. In the meantime, why not check out some tasty desserts or decadent breakfast recipes.</p>
        </div>
      </section>

      <section classname="contact">
        <h2>Contact Us</h2>
        <div classname="contact-content">
          <p>Feel free to get in touch with us if you have any questions or comments.</p>
          <ul>
            <li><i classname="fas fa-envelope"></i> Email: info@example.com</li>
            <li><i classname="fas fa-phone"></i> Phone: +1 (123) 456-7890</li>
            <li><i classname="fas fa-map-marker-alt"></i> Address: 123 Main St, Anytown, USA</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default Index;
