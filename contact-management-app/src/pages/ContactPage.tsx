import React, { useState } from 'react';
import AddContactForm from '../components/Contacts/AddContactForm';
import ContactList from '../components/Contacts/ContactList';
import ContactEditForm from '../components/Contacts/EditContactForm'; // Import the edit form component
import { Contact } from '../store/types/type';

const ContactPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editContact, setEditContact] = useState<Contact | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleCreateContactClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  const handleContactAdded = (newContact: Contact) => {
    setContacts([...contacts, newContact]);
    setShowForm(false);
  };

  const handleContactDeleted = (deletedId: string) => {
    setContacts(contacts.filter(contact => contact.id !== deletedId));
  };

  const handleContactEdit = (editedContact: Contact) => {
    setEditContact(editedContact);
    setShowEditForm(true);
  };

  const handleSaveEditedContact = (editedContact: Contact) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === editedContact.id ? editedContact : contact
    );
    setContacts(updatedContacts);
    setShowEditForm(false);
    setEditContact(null);
  };

  const handleCancelEdit = () => {
    setShowEditForm(false);
    setEditContact(null);
  };

  
  return (
    <div className="bg-custom-color flex flex-col h-screen">
      <h1 className='text-center mb-4 text-2xl'>Contact Page</h1>
      {!showForm && contacts.length === 0 && (
        <div className="text-center text-gray-600 mb-4">
          <p>No contacts found. Please add contacts.</p>
        </div>
      )}
      {showForm ? (
        <AddContactForm onContactAdded={handleContactAdded} onCancel={handleCancelClick} />
      ) : (
        <button
          onClick={handleCreateContactClick}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mb-4 mx-auto block"
          style={{ width: 'fit-content' }}
        >
          Create Contact
        </button>
      )}
      {contacts.length > 0 && (
        <ContactList
          contacts={contacts}
          onContactDeleted={handleContactDeleted}
          onContactEdit={handleContactEdit}
        />
      )}
      {showEditForm && editContact && (
        <ContactEditForm
          contact={editContact}
          onSave={handleSaveEditedContact}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default ContactPage;
