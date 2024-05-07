import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/actions';
import Card from '../Card/Card';

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isActive, setIsActive] = useState(true); // State for active/inactive status
  //const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // dispatch(addContact({ id: Date.now().toString(), name: `${firstName} ${lastName}`, isActive }));
    setFirstName('');
    setLastName('');
    setIsActive(true); // Reset isActive state after form submission
  };

  return (
    <Card
      color="#ffffff"
      height="400px"
      width="600px"
      borderRadius="10px"
      x={600}
      y={150}
    >
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="first-name" className="block text-gray-700 grid-1">First Name:</label>
          <input
            id="first-name"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-gray-700 grid-col-1">Last Name:</label>
          <input
            id="last-name"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="col-span-2 flex items-center">
          <label className="block text-gray-700">Status:</label>
          <div className="ml-2">
            <input
              type="radio"
              value="active"
              checked={isActive}
              onChange={() => setIsActive(true)}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2 text-gray-700">Active</span>
          </div>
          <div className="ml-2">
            <input
              type="radio"
              value="inactive"
              checked={!isActive}
              onChange={() => setIsActive(false)}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2 text-gray-700">Inactive</span>
          </div>
        </div>
        <button type="submit" className="col-span-2 bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Add Contact
        </button>
      </form>
    </Card>
  );
};

export default ContactForm;
