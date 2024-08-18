'use client';

import React, { FormEvent } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const ContactForm = () => {
  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const response = await fetch('/api/form-submission', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();

    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-4">
        <label htmlFor="name">Name:</label>
        <Input type="text" name="name" id="name" />
      </div>
      <div className="mb-4">
        <label htmlFor="subject">Subject:</label>
        <Input type="text" name="subject" id="subject" />
      </div>
      <div className="mb-4">
        <label htmlFor="phone">Phone:</label>
        <Input type="text" name="phone" id="phone" />
      </div>
      <div className="mb-4">
        <label htmlFor="message">Message:</label>
        <Textarea name="message" id="message" rows={5}></Textarea>
      </div>
      <div>
        <Button type="submit">Submit Form</Button>
      </div>
    </form>
  )
}

export default ContactForm
