import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <section className="about">
        <img
          className="about--img"
          src={
            'https://images.unsplash.com/photo-1532115298834-4c70d11ec8f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        />
        <div className="about--content">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="about--action">
          <h2>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link to="/vans" className="link-button">
            Explore our vans
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
