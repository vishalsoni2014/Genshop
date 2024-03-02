import React, { useState } from 'react';
import './contact.css';
import { useAuth0 } from "@auth0/auth0-react";


const Contact = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const initialUserData = {
    Name: '',
    Email: '',
    Subject: '',
    Message: ''
  };

  const [users, setUsers] = useState(initialUserData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  const senddata = async (e) => {
    e.preventDefault();
    const date = new Date();
    const { Name, Email, Subject, Message } = users;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message,
        date
      })
    };

    try {
      const res = await fetch('https://e-commerce-contact-3b36e-default-rtdb.firebaseio.com/messages.json', options);

      if (res.ok) {
        alert('Your message sent');
        // Clear form after successful submission
        setUsers(initialUserData);
      } else {
        alert('An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className='contact_container'>
      <div className='contant'>
        <h2># contact us</h2>
        <div className='form'>
          <form>
            <input
              type='text'
              name='Name'
              value={users.Name}
              placeholder='Enter Your Full Name'
              required
              autoComplete='off'
              onChange={handleChange}
            />
            <input
              type='email'
              name='Email'
              value={users.Email}
              placeholder='Enter Your Email'
              autoComplete='off'
              onChange={handleChange}
            />
            <input
              type='text'
              name='Subject'
              value={users.Subject}
              placeholder='Enter Your Subject'
              autoComplete='off'
              onChange={handleChange}
            />
            <textarea
              name='Message'
              value={users.Message}
              placeholder='Type your message here...'
              autoComplete='off'
              onChange={handleChange}
            ></textarea>
            {isAuthenticated ? (
              <button type='submit' onClick={senddata}>
                Send
              </button>
            ) : (
              <button type='button' onClick={() => loginWithRedirect()}>
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
