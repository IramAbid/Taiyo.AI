// components/ContactPage.tsx
import React from 'react';
import ContactForm from '../components/Contacts/ContactForm';
// import ContactDetails from '../components/ContactDetails';
// import ContactList from '../components/ContactList';
// import { Contact } from '../types/type';

const ContactPage: React.FC = () => {
    // const sampleContact: Contact = {
    //     id: '1',
    //     name: 'John Doe',
    //     phone: '123-456-7890',
    //     isActive: true,
    //   };
//   const { data: contacts, isLoading, error } = useQuery('contacts', async () => {
//     const response = await fetch('API_ENDPOINT_HERE');
//     if (!response.ok) {
//       throw new Error('Failed to fetch contacts');
//     }
//     return response.json();
//   });


//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: error.message</div>;

  

  return (
    <div className='h-screen bg-custom-color px-4 py-4'>
   
      <h1>Contact Page</h1>
      {/* <ContactDetails contact={sampleContact}/> */}
      <ContactForm />
      {/* <ContactList /> */}
    </div>
  );
};

export default ContactPage;
