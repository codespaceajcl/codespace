import React from "react";
import { Container } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter_main">
      <Container>
        <h1>Newsletter</h1>
        <p>
          Be the first one to know about discounts, offers and events weekly in
          your mailbox. Unsubscribe whenever you like with one click.
        </p>

        <div className="submit_div">
          <input placeholder="Enter your email" />
          <button>Submit</button>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
