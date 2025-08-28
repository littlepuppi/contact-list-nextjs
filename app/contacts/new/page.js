'use client';

import Link from 'next/link';
import { useContacts } from '../../contexts/ContactsContext';

export default function ContactsPage() {
  const { contacts } = useContacts();

  if (!contacts.length) return <p>No contacts found.</p>;

  return (
    <div>
      <h1>Contacts</h1>
      <Link href="/contacts/new">Add Contact</Link>
      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            {c.name} ({c.phone}) — <Link href={`/contacts/${c.id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
