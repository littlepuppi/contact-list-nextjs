import './globals.css';
import { ContactsProvider } from './contexts/ContactsContext';
import SessionProviderWrapper from './components/SessionProviderWrapper'; // client wrapper

export const metadata = {
  title: "Contact List",
  description: "My contact list app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          <ContactsProvider>{children}</ContactsProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
