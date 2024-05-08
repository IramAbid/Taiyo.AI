import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../store/types/type';
import { Contact } from '../../store/types/type';
import Card from '../Card/Card';
import store from '../../store/store';




interface AddContactFormProps {
  onContactAdded: (newContact: Contact) => void;
  onCancel: () => void;
}

const AddContactForm: React.FC<AddContactFormProps> = ({ onContactAdded, onCancel }) => {
  
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'active' | 'inactive'>('active');

  const generateId = (): string => {
    // Generate a unique ID using a combination of timestamp and random number
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if any of the input fields are empty
    if (!firstName || !lastName) {
      alert('Please fill in all fields');
      return; // Prevent further execution of the function
    }

    const id = generateId(); // Generate an id
    const contact: Contact = { id, firstName, lastName, status };
    dispatch(addContact(contact));
    const currentState = store.getState();
    console.log('Current Redux Store State:', currentState);
    onContactAdded(contact); // Call the onContactAdded function with the new contact
    setFirstName('');
    setLastName('');
    setStatus('active'); // Reset status after adding contact
  };

  return (
    <div className="w-80 sm:w-80 mt-8 mb-4 p-4 ml-auto sm:pr-20 sm:pl-20 pb:10 sm:pb-20">
    <Card 
      color="#fef"
      height={300}
      width={300}
      borderRadius={10}
      x={400}
      y={300}
    >
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="firstName" className="text-gray-600">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-gray-600">Last Name:</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="active" className="text-gray-600 mr-2">Status:</label>
          <label htmlFor="active" className="flex items-center mr-4">
            <input
              id="active"
              type="radio"
              value="active"
              checked={status === 'active'}
              onChange={() => setStatus('active')}
              className="mr-1"
            />
            <span className="text-green-500 mr-2">Active</span>
          </label>
          <label htmlFor="inactive" className="flex items-center">
            <input
              id="inactive"
              type="radio"
              value="inactive"
              checked={status === 'inactive'}
              onChange={() => setStatus('inactive')}
              className="mr-1"
            />
            <span className="text-red-500">Inactive</span>
          </label>
        </div>
        <div className="flex justify-end">
        <button type="submit" className="bg-blue-500 mr-9 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Add Contact</button>
       
          <button
            type="button"
            onClick={onCancel}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Cancel
          </button>
         
        </div>
      </form>
    </Card>
    </div>
  );
};

export default AddContactForm;
