import React from "react";
import { WhyUsCard } from "./whyUsCard";

export const WhyUs = () => {
    const cards = [
        {
            title: "Fractional Ownership",
            text: "Invest in real estate by purchasing tokens that represent fractional ownership of property assets. This diversifies your investments and lowers your risk."
        },
        {
            title: "Accessibility",
            text: "Our platform is designed to be user-friendly and accessible. Whether you're a seasoned investor or new to real estate, Tokunize offers a straightforward way to get started."
        },
        {
            title: "Transparency",
            text: "Tokunize ensures full transparency in transactions and property management, helping you make informed investment decisions."
        }
    ];
    
    return (
        <section id="features" className="my-5">
            <div className="container">
                <h2 className="text-center mb-5">Why Choose Tokunize?</h2>
                <div className="row text-center">
                    {cards.map((card, index) => (
                        <WhyUsCard
                            key={index}
                            title={card.title}
                            text={card.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
