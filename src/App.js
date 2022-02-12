import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import { useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './components/Container';
import { Section } from './components/Section';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const isError = useSelector(contactsSelectors.getError);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        {isLoading && (
          <TailSpin
            heigth="80"
            width="80"
            color="#A5CED0"
            ariaLabel="loading"
          />
        )}
        {isError && toast.error('We were unable to load contacts!')}
        <ContactList />
      </Section>
      <ToastContainer autoClose={1500} />
    </Container>
  );
};

export default App;
