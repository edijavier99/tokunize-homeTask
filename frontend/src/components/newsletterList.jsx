import React, { useState, useEffect } from 'react';

const NewsletterList = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const apiUrl = `${process.env.REACT_APP_BACKEND_URL}myapp/api/newsletter/list`;

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSubscribers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, [apiUrl]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <div className="alert alert-danger" role="alert">
          {`Error: ${error}`}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Newsletter Subscribers</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Email</th>
                      <th>Registration Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map(subscriber => (
                      <tr key={subscriber.id}>
                        <td>{subscriber.id}</td>
                        <td>{subscriber.client_email}</td>
                        <td>{new Date(subscriber.created_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default NewsletterList