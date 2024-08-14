import React from "react";
import "../styles/whyuscard.css"

export const WhyUsCard = ({ title, text }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-light rounded custom-card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
};
