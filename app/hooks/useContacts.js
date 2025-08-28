import { useState } from "react";

export default function useContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = () => {
    // TODO: fetch contacts from API
  };

  return { contacts, loading, error, refetch };
}
