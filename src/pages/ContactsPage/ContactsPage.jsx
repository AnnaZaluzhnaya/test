import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const ContactsPage = () => {
  return (
    <div>
      <Filter />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
