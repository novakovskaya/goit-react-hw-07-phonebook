import Container from "./components/Container";
import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import styles from "./App.module.scss";

const App = () => (
  <Container>
    <Section title="Phonebook">
      <ContactForm />
    </Section>

    <Section title="Contacts">
      <Filter />
      <ContactList />
    </Section>
  </Container>
);

export default App;
