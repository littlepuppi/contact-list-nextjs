'use client';

import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import LoginButton from './LoginButton';

export default function List() {
  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1>My Contact List</h1>
        <LoginButton />
      </div>

      {/* Form to add a new contact */}
      <AddContactForm />

      {/* List of contacts */}
      <ContactList />
    </main>
  );
}
