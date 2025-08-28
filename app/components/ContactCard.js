'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import { useContacts } from '../contexts/ContactsContext';

export default function ContactCard({ contact }) {
  const { removeContact } = useContacts();
  const router = useRouter();

  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${contact.display_name}"?`
    );
    if (confirmed) {
      removeContact(contact.id);
    }
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '12px',
        margin: '8px 0',
        boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <p><strong>{contact.name}</strong></p>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={handleDelete}
          style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '6px 12px',
            cursor: 'pointer',
          }}
        >
          Delete
        </button>

        <button
          onClick={() => router.push(`/contacts/${contact.id}/edit`)}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '6px 12px',
            cursor: 'pointer',
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    display_name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
