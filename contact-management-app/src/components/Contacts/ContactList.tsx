import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts);

  return (
    <ul>
      {contacts.map((contact: any) => (
        <li key={contact.id}>
          <div>{contact.name}</div>
          <div>{contact.phone}</div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
