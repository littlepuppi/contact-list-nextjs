'use client';

import { useSession } from 'next-auth/react';
import LoginButton from './components/LoginButton';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';

export default function List() {
  const { data: session } = useSession();

  return (
    <main>
      <div>
        <h1>My Contact List</h1>

        {session ? (
          <p>
            Signed in as <strong>{session.user?.name}</strong> (
            {session.user?.email})
          </p>
        ) : (
          <p>Not signed in</p>
        )}

        <LoginButton />

        <AddContactForm />
        <ContactList />
      </div>
    </main>
  );
}
