'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';
import { useContacts } from '../contexts/ContactsContext';

export default function AddContactForm() {
  const { addContact } = useContacts();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (data) => {
    if (!data.name?.trim() || !data.phone?.trim()) return;

    addContact({
      id: Date.now(), // unique id
      name: data.name,
      email: data.email,
      phone: data.phone,
    });

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <ContactForm onSubmit={handleSubmit} submitLabel="Add Contact">
      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '8px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginRight: '8px' }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ marginRight: '8px' }}
        />
        <button type="submit">Add Contact</button>
      </div>
    </ContactForm>
  );
}
