import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Toaster } from 'react-hot-toast';
import css from './App.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { getFilter } from '../redux/selectors';

export function App() {
  // const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem('contacts')) ?? []);
  // const [filter, setFilter] = useState('');
  // const dispatch = useDispatch();
  // const filter = useSelector(getFilter);
  // const handleAddContact = contact => {
  //   dispatch(contact);
  //   addNameContact();
  // };

  // const handleDeleteContact = id => {
  //   setContacts(prevState => {
  //     return prevState.filter(contact => contact.id !== id);
  //   });
  // };
  // const handleChangeFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const handleFilterContacts = getFilter => {
  //   // return contacts.filter(contact =>
  //   //   contact.name
  //   //     .toLowerCase()
  //   //     .includes(filter.toLowerCase().trim())
  //   // );
  // };

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}> Contacts</h2>
      <Filter />
      <ContactsList />
      <Toaster />
    </>
  );
}
