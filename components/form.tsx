'use client';
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');

  const submitForm = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:1337', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, request }),
    });

    const result = await response.text();
    alert(result);
  };

  return (
    <form onSubmit={submitForm}>
    <div style={{ marginBottom: "20px" }}>
        <label>Email:</label><br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ color: "darkgrey" }} />
    </div>
    <div style={{ marginBottom: "20px" }}>
      <label>Feedback:</label><br />
      <input type="text" value={request} onChange={(e) => setRequest(e.target.value)} style={{ color: "darkgrey" }}/>
    </div>
    <button type="submit" style={{
        backgroundColor: '#6D28D9', /* purple - 600*/
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
        borderRadius: '5px',
        transition: '0.3s',
        ':hover': {
          boxShadow: '0px 0px 0px',
          transform: 'translateY(2px)'
        }
      }}>Submit</button>
  </form>
  );
};

export default FeedbackForm;
