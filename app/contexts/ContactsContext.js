'use client';

import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';


const ContactsContext = createContext();

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([{ id: 1, name: "Alice", email: "alice@example.com", phone: "123-456-7890" },
  { id: 2, name: "Bob", email: "bob@example.com", phone: "987-654-3210" }]);

  const addContact = (contact) => {
    setContacts((prev) => [...prev, { ...contact, id: generateId() }]);
  };

    const removeContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const updateContact = (updated) => {
  console.log('updateContact called with:', updated);
  setContacts(prev => {
    const exists = prev.map(c => c.id === updated.id);
    if (!exists) console.error('Contact not found for update!');
    return prev.map(c => (c.id === updated.id ? updated : c));
  });
};


  const getContactById = (id) => {
    return contacts.find((c) => c.id === Number(id));
  };

  return (
    <ContactsContext.Provider value={{ contacts, addContact, removeContact, updateContact, getContactById }}>
      {children}
    </ContactsContext.Provider>
  );
}

ContactsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useContacts() {
  return useContext(ContactsContext);
}

function generateId() {
  return Math.round(Math.random() * 100000000);
}
