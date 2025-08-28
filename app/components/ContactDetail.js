'use client';

import { useParams } from 'next/navigation';
import { useContacts } from '@/contexts/ContactsContext';

export default function ContactDetail() {
  const { id } = useParams();
  const { getContactById } = useContacts();

  const contact = getContactById(id);

  if (!contact) {
    return <p>Contact not found</p>;
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
}
