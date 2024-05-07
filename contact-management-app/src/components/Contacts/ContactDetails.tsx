import React from 'react';
import { Contact } from '../../types/type';

interface Props {
  contact: Contact;
}

const ContactDetails: React.FC<Props> = ({ contact }) => {
  return (
    <div>
      <h2>Contact Details</h2>
      <div>Name: {contact.name}</div>
      <div>Phone: {contact.phone}</div>
    </div>
  );
};

export default ContactDetails;
