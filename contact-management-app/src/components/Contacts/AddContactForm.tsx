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
  const [status, setStatus] = useState<'Active' | 'Inactive'>('Active');

  const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      alert('Please fill in all fields');
      return;
    }

    const id = generateId();
    const contact: Contact = { id, firstName, lastName, status };
    dispatch(addContact(contact));
    const currentState = store.getState();
    console.log('Current Redux Store State:', currentState);
    onContactAdded(contact);
    setFirstName('');
    setLastName('');
    setStatus('Active');
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
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-6">
        <h1 className='font-semibold text-center'>ADD CONTACT FORM</h1>
          <div className="flex flex-col space-y-1">
            <label htmlFor="firstName" className="text-black mx-4 ">First Name:</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="border border-black mx-4 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="lastName" className="text-black mx-4 ">Last Name:</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="border border-black mx-4 rounded-md p-2"
            />
          </div>
          <div className="flex items-center mt-6">
            <label htmlFor="active" className="text-black mx-4 ">Status:</label>
            <div>
              <input
                id="active"
                type="radio"
                value="Active"
                checked={status === 'Active'}
                onChange={() => setStatus('Active')}
                className="mr-1"
              />
              <label htmlFor="Active" className="text-green-500 mr-2">Active</label>
            </div>
            <div>
              <input
                id="inactive"
                type="radio"
                value="Inactive"
                checked={status === 'Inactive'}
                onChange={() => setStatus('Inactive')}
                className="mr-1"
              />
              <label htmlFor="Inactive" className="text-red-500">Inactive</label>
            </div>
          </div>
          <div className="flex justify-around mx-4 gap-5">
            <button 
              type="submit" 
              className="bg-custom-blue text-white mr-10 py-2 px-4 rounded-md hover:bg-custom-dark-gray transition duration-300 ease-in-out block"
            >
              Add Contact
            </button>
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

export default AddContactForm;
