import Form from '../Form';
import Section from '../Section';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import { connect } from "react-redux";
import { getItems } from "../../redux/contacts/items/items-selector";
// import s from './App.module.css';
import slide from "../../transition/slide.module.css";
import pop from "../../transition/pop.module.css";
import { CSSTransition } from 'react-transition-group';
import { Title, Subtitle } from "./styles";


const App = ({ contacts }) => {
  
  return (
    <>
      <Section>
        <CSSTransition
          in={true}
          appear={true}
          classNames={slide}
          timeout={500}
        >
          <Title>
            Phonebook
          </Title>
        </CSSTransition>
        <Form />
      </Section>
      <Section>
        <CSSTransition
          in={contacts.length > 1}
          classNames={pop}
          timeout={500}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <CSSTransition
          in={!!contacts.length}
          classNames={pop}
          timeout={500}
          unmountOnExit
        >
        <Subtitle>Contacts</Subtitle>
          </CSSTransition>
        <ContactsList />
      </Section>
    </>
  );
};

const mapStateToProps = state => ({
  contacts: getItems(state)
});

export default connect(mapStateToProps)(App);
