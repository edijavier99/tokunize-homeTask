import React, { useState,useEffect } from "react";
import "../styles/newsletterform.css"

export const NewsletterForm = () => {
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleOnChange = (e) => {
        setNewsletterEmail(e.target.value);
        // Clear error message when user starts typing
        setErrorMessage("");
    };

    const validateEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const apiUrl = `${process.env.REACT_APP_BACKEND_URL}myapp/api/newsletter/register`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ client_email: newsletterEmail })
            });

            const data = await response.json();
            if (response.ok) {
                // Clear email field and set success message
                setNewsletterEmail("");
                setSuccessMessage(data.message);
                setErrorMessage(""); // Clear any previous error message
            } else {
                // Display error message from server
                setErrorMessage(data.error || "An unexpected error occurred.");
                setSuccessMessage(""); // Clear any previous success message
            }
        } catch (error) {
            setErrorMessage("Error submitting the form: " + error.message);
            setSuccessMessage(""); // Clear any previous success message
            setNewsletterEmail("")
            console.error("Error submitting the form: ", error);
        }
    };

    useEffect(() => {
        // Set a timer to clear messages after 2 seconds
        const timer = setTimeout(() => {
            setErrorMessage("");
            setSuccessMessage("");
        }, 2000);

        return () => clearTimeout(timer);
    }, [errorMessage, successMessage]);



    return (
        <>
            <form id="newsletterform" onSubmit={handleSubmitForm}>
                <div className="row">
                    <div className="col">
                        <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="newsletteremail"
                            name="firstName"
                            value={newsletterEmail}
                            onChange={handleOnChange}
                            placeholder="newsletteremail"
                            required
                        />
                        <label  htmlFor="newsletteremail">Email Address</label>
                        </div>
                    </div>
                </div>
                
                <button id="subtmitBtn" type="submit" disabled={!validateEmail(newsletterEmail)}>
                    Sign Up
                </button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </>
    );
};
