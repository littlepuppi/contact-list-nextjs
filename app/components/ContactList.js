'use client';

import { useContacts } from '../contexts/ContactsContext';
import ContactCard from './ContactCard';

export default function ContactList() {
  const { contacts } = useContacts();

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts yet</p>
      ) : (
        contacts.map((contact) => <ContactCard key={contact.id} contact={contact} />)
      )}
    </div>
  );
}
