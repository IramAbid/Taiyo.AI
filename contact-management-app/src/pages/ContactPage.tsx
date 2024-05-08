import React, { useState } from 'react';
import AddContactForm from '../components/Contacts/AddContactForm';
import ContactList from '../components/Contacts/ContactList';
import ContactEditForm from '../components/Contacts/EditContactForm'; // Import the edit form component
import { Contact } from '../store/types/type';
import Sidebar from '../components/Sidebar/SideBar';

/**
 * ContactPage component renders the main page for managing contacts.
 */
const ContactPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editContact, setEditContact] = useState<Contact | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);

  // Function to handle click event for creating a new contact
  const handleCreateContactClick = () => {
    setShowForm(true);
  };

  // Function to handle click event for cancelling contact creation
  const handleCancelClick = () => {
    setShowForm(false);
  };

  // Function to handle adding a new contact
  const handleContactAdded = (newContact: Contact) => {
    setContacts([...contacts, newContact]);
    setShowForm(false);
  };

  // Function to handle contact deletion
  const handleContactDeleted = (deletedId: string) => {
    setContacts(contacts.filter(contact => contact.id !== deletedId));
  };

  // Function to handle contact edit
  const handleContactEdit = (editedContact: Contact) => {
    setEditContact(editedContact);
    setShowEditForm(true);
  };

  // Function to handle saving edited contact
  const handleSaveEditedContact = (editedContact: Contact) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === editedContact.id ? editedContact : contact
    );
    setContacts(updatedContacts);
    setShowEditForm(false);
    setEditContact(null);
  };

  // Function to handle cancelling edit
  const handleCancelEdit = () => {
    setShowEditForm(false);
    setEditContact(null);
  };

  return (
    <div className="bg-custom-color flex flex-col h-full min-h-screen">
      <Sidebar />
      <div className="w-full mt-4 mb-4 ml-auto sm:pl-20 pb:10 sm:pb-20 md:w-full md:px-2 sm:w-full md:w-full md:px lg:w-5/6 xl:w-5/6">
        <h1 className="text-3xl sm:text-3xl font-semibold mb-2 mt-10 sm:mb-8 text-center text-custom-black">
          CONTACT PAGE
        </h1>
        
        {showForm ? (
          <AddContactForm onContactAdded={handleContactAdded} onCancel={handleCancelClick} />
        ) : (
          <div className="flex flex-col sm:flex-row justify-center items-center h-full mb-9 sm:mt-0 mt-10 sm:mx-0 mx-8">
            {!showForm && contacts.length === 0 && (
              <div className="ml-0 sm:ml-20 text-center text-custom-dark-gray mb-4 sm:mb-0">
                <p>
                  <span className="text-red-500 font-semibold">Error ! </span>No contacts found. Please add contacts using create contact button.
                </p>
              </div>
            )}
            <div className={`sm:ml-auto ${!showForm && contacts.length === 0 ? 'sm:mr-4' : ''}`}>
              <button
                onClick={handleCreateContactClick}
                className={`flex mr-0 sm:mr-20 flex-row bg-custom-blue text-white py-2 px-4 rounded-md hover:bg-custom-dark-gray transition duration-300 ease-in-out block ${showForm || contacts.length > 0 ? 'place-self-start' : 'place-self-end sm:mr-10'}`}
                style={{ width: 'fit-content' }}
              >
                Create Contact
              </button>
            </div>
          </div>
        )}

        {contacts.length > 0 && (
          <ContactList contacts={contacts} onContactDeleted={handleContactDeleted} onContactEdit={handleContactEdit} />
        )}
        {showEditForm && editContact && (
          <ContactEditForm
            contact={editContact}
            onSave={handleSaveEditedContact}
            onCancel={handleCancelEdit}
          />
        )}
      </div>
    </div>
  );
};

export default ContactPage;
