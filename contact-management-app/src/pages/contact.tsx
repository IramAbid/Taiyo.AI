// ContactPage.tsx
import React, { useState } from 'react';
import ContactDetails from '../components/Contacts/ContactDetails';
import ContactForm from '../components/Contacts/ContactForm';
import ContactList from '../components/Contacts/ContactList';
import { Contact } from '../types/type';

const ContactPage: React.FC = () => {
  const [view, setView] = useState<'details' | 'form' | 'list'>('details');
  const sampleContact: Contact = {
    id: '1',
    name: 'John Doe',
    phone: '123-456-7890',
    isActive: true,
  };
  const renderView = () => {
    switch (view) {
      case 'details':
        return <ContactDetails contact={sampleContact}/>;
      case 'form':
        return <ContactForm />;
      case 'list':
        return <ContactList />;
      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={() => setView('details')}>View Details</button>
      <button onClick={() => setView('form')}>Add Contact</button>
      <button onClick={() => setView('list')}>View List</button>
      {renderView()}
    </div>
  );
};

export default ContactPage;
