import React, { useState } from 'react';
import { Contact } from '../../store/types/type';

interface ContactEditFormProps {
  contact: Contact;
  onSave: (editedContact: Contact) => void;
  onCancel: () => void;
}

const ContactEditForm: React.FC<ContactEditFormProps> = ({ contact, onSave, onCancel }) => {
  const [editedContact, setEditedContact] = useState<Contact>({ ...contact });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedContact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={editedContact.firstName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={editedContact.lastName} onChange={handleChange} />
      </label>
      <label>
        Status:
        <input type="text" name="status" value={editedContact.status} onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ContactEditForm;
