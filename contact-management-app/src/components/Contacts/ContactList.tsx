import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, Contact } from '../../store/types/type';

interface ContactListProps {
  contacts: Contact[];
  onContactDeleted: (deletedId: string) => void;
  onContactEdit: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onContactDeleted, onContactEdit }) => {
  const dispatch = useDispatch();
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
  const handleDeleteContact = (id: string) => {
    dispatch(deleteContact(id));
    onContactDeleted(id);
  };
  const handleViewContact = (id: string) => {
    setSelectedContactId(id === selectedContactId ? null : id);
  };
  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id} className="border p-4 mb-4 flex items-center justify-between">
          <div>
            <p onClick={() => handleViewContact(contact.id)}>
            {selectedContactId === contact.id ? (
                <>
                  <span>First Name: {contact.firstName} <br/></span>
                  <span>Last Name: {contact.lastName} <br/></span>
                  <span>Status: {contact.status}</span>
                </>
              ) : (
                <>
                  <span>{contact.firstName} {contact.lastName}</span>
                </>
              )}
            </p>
          </div>
          <div>
            <button
              onClick={() => handleDeleteContact(contact.id)}
              className="bg-red-500 text-white py-2 px-4 rounded-md mr-2"
            >
              Delete
            </button>
            <button
              onClick={() => onContactEdit(contact)} // Trigger edit directly here
              className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleViewContact(contact.id)}
              className="bg-green-500 text-white py-2 px-4 rounded-md"
            >
              {selectedContactId === contact.id ? 'Hide' : 'View'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
