import React from 'react';
import { Navbar } from './components/navbar';
import { WhyUs } from './components/whyUs';
import { Footer } from './components/footer';
import { NewsletterSection } from './components/newsletterSection';
import "./styles/app.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* Introduction */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-3 font-weight-bold">Welcome to Tokunize</h1>
          <p className="lead mb-4">
            We are excited to announce our rebranding as Tokunize! Tokunize will serve as a marketplace where users can purchase tokens representing fractional ownership in real estate assets. Our goal is to democratize access to property investments and create opportunities for everyone to participate in the real estate market.
          </p>
          <a href="#features" id='learmoreBtn' className="btn btn-light btn-lg">Learn More</a>
        </div>
      </header>
      {/* Why us section */}
      <WhyUs/>
      {/* Newsletter section*/}
      <NewsletterSection/>
      {/*Footer Section */}
      <Footer/>
    </div>
  );
}

export default App;
