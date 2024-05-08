import React, { useState } from 'react';
import { Contact } from '../../store/types/type';
import Card from '../Card/Card';

/**
 * ContactEditForm component renders a form for editing contact details.
 * @param {object} props - The props of the component.
 * @param {Contact} props.contact - The contact object to be edited.
 * @param {Function} props.onSave - Function to call when contact details are saved.
 * @param {Function} props.onCancel - Function to call when editing is cancelled.
 */

interface ContactEditFormProps {
  contact: Contact;
  onSave: (editedContact: Contact) => void;
  onCancel: () => void;
}

const ContactEditForm: React.FC<ContactEditFormProps> = ({ contact, onSave, onCancel }) => {
  const [editedContact, setEditedContact] = useState<Contact>({ ...contact });

  // Function to handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedContact);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <Card 
        color="#fff"
        height={400}
        width={350}
        borderRadius={10}
        style={{ transform: 'translate(0%, 0%)' }}
      >
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4 mt-6'>
          <h1 className='font-semibold text-center'>EDIT CONTACT FORM</h1>
          <div className="flex flex-col space-y-1">
            <label htmlFor="firstName" className="text-black mx-4">First Name:</label>
            <input 
              type="text" 
              name="firstName" 
              value={editedContact.firstName} 
              onChange={handleChange} 
              className="border border-black mx-4 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="lastName" className="text-black mx-4">Last Name:</label>
            <input 
              type="text" 
              name="lastName" 
              value={editedContact.lastName} 
              onChange={handleChange}  
              className="border border-black mx-4 rounded-md p-2"
            />
          </div>
          <div className="flex items-center mt-6">
            <label htmlFor="active" className="text-black mx-4">Status:</label>
            <input
              type="radio"
              name="status"
              value="Active"
              checked={editedContact.status === "Active"}
              onChange={handleChange}
              className="mr-1"
            /> 
            <span className="text-green-500 mr-2">Active</span>
            <input
              type="radio"
              name="status"
              value="Inactive"
              checked={editedContact.status === "Inactive"}
              onChange={handleChange}
              className="mr-1"
            /> 
            <span className="text-red-500">Inactive</span>
          </div>
          <div className="flex justify-around mx-4 gap-5">
            {/* Save Button */}
            <button 
              type="submit" 
              className="bg-custom-blue text-white py-2 mr-10 px-4 rounded-md hover:bg-custom-dark-gray transition duration-300 ease-in-out block"
            >
              Save Contact
            </button>
            {/* Cancel Button */}
            <button 
              type="button" 
              onClick={onCancel} 
              className="bg-custom-blue text-white mr-2 py-2 px-4 rounded-md hover:bg-custom-dark-gray transition duration-300 ease-in-out block"
            >
              Cancel
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ContactEditForm;
