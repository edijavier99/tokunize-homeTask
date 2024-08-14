import React from "react";
import { NewsletterForm } from "../forms/newsletterform";

export const NewsletterSection = () =>{
    return(
        <section className="bg-light py-5">
            <div className="container text-center">
                <h2 className="mb-4">Join the Future of Real Estate Investment</h2>
                <p className="lead mb-4">
                    Be the first to receive updates on our launch and exclusive offers. Subscribe to our newsletter to stay informed about how Tokunize is transforming the real estate market!
                </p>
                <NewsletterForm />
            </div>
      </section>
    )
}