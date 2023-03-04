import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const ApplyEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6sya51u', 'template_ndkh3r5', form.current, 'sCR6vb6XBeQa8FmQN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
        <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="user_email">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="user_email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="user_name">
          <Form.Label>Name</Form.Label>
          <Form.Control name='user_name' type="name" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control name="message" type="message" placeholder="Message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    );
};