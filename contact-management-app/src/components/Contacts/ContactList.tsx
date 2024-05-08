import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, Contact } from '../../store/types/type';
import userView from './assets/user-view.png';
import userHide from './assets/user-hide-dark.png';
import userEdit from './assets/user-edit.png';
import userDelete from './assets/user-delete.png';

/**
 * ContactList component displays a list of contacts and provides options to view, edit, and delete contacts.
 * @param {object} props - The props of the component.
 * @param {Array} props.contacts - An array of contact objects.
 * @param {Function} props.onContactDeleted - Function to call when a contact is deleted.
 * @param {Function} props.onContactEdit - Function to call when a contact is edited.
 */

interface ContactListProps {
  contacts: Contact[];
  onContactDeleted: (deletedId: string) => void;
  onContactEdit: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onContactDeleted, onContactEdit }) => {
  const dispatch = useDispatch();
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);

  // Function to handle contact deletion
  const handleDeleteContact = (id: string) => {
    dispatch(deleteContact(id));
    onContactDeleted(id);
  };

  // Function to handle toggling of contact details view
  const handleViewContact = (id: string) => {
    setSelectedContactId(id === selectedContactId ? null : id);
  };

  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id} className="border p-4 mb-4 w-auto flex items-center justify-between rounded-lg shadow-lg bg-white">
          <div >
            <p onClick={() => handleViewContact(contact.id)}>
              {selectedContactId === contact.id ? (
                <>
                  <span className='ml-10 px-8 font-semibold text-custom-dark-gray2'>First Name : <span className='text-blue-500 ml-2'>{contact.firstName} <br/></span></span>
                  <span className='ml-10 px-8 font-semibold text-custom-dark-gray2'>Last Name : <span className='text-blue-500 ml-2'>{contact.lastName} <br/></span></span>
                  <span className='ml-10  px-8 font-semibold text-custom-dark-gray2'>Status <span className='ml-8'>:</span> <span className= {contact.status === 'Active' ? 'text-green-500 ml-2' : 'text-red-500 ml-2'} >{contact.status}</span></span>
                </>
              ) : (
                <>
                  <span className='ml-10 px-8 font-semibold text-custom-dark-gray2'>{contact.firstName} {contact.lastName}</span>
                </>
              )}
            </p>
          </div>
          <div>
            {/* Edit Button */}
            <button
              onClick={() => onContactEdit(contact)} 
              className="py-2 px-4 rounded-md mr-2"
            >
              <img src={userEdit} width={40} alt='edit-icon' title='Edit Contact'/> 
            </button>
            {/* View/Hide Button */}
            <button
              onClick={() => handleViewContact(contact.id)}
              className=" py-2 px-4 rounded-md mr-2"
            >
              {selectedContactId === contact.id ? <img src={userHide} alt='hide-icon' title='Hide Details' width={40}/> : <img src={userView} alt='view-icon' title='View Details' width={40}/>}
            </button>
            {/* Delete Button */}
            <button
              onClick={() => handleDeleteContact(contact.id)}
              className=" py-2 px-4 rounded-md mr-5"
            >
              <img src={userDelete} width={40} alt='delete-icon' title='Delete Contact'/>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
