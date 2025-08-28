'use client';

import { useParams, useRouter } from 'next/navigation';
import { useContacts } from '@/contexts/ContactsContext';
import ContactForm from '@/components/ContactForm';

export default function EditContactPage() {
  const { id } = useParams();
  const router = useRouter();
  const { contacts, updateContact } = useContacts();

  const contact = contacts.find((c) => String(c.id) === id);

  if (!contact) return <p>Contact not found.</p>;

  const handleSubmit = (data) => {
    console.log('handleSubmit called with data:', data);

    // ✅ More robust validation with trim()
    if (!data || !data.name?.trim() || !data.phone?.trim()) {
      console.error('Invalid data!');
      return;
    }

    updateContact({ ...data, id: Number(id) });
    console.log('Contact updated, navigating back to /contacts');
    
    router.push('/contacts');
  };

  return (
    <ContactForm
      initialData={{
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
      }}
      onSubmit={handleSubmit}
      submitLabel="Save Changes"
    />
  );
}
