import { Input } from './Input/Input.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { Filter } from './Filter/Filter.jsx';

export const App = () => {
  // const getFilteredData = () => {
  //   if (filter) {
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   }
  //   return contacts;
  // };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <h1>Phonebook</h1>
      <Input />

      <h2>Contacts</h2>
      <ContactList>
        <Filter />
      </ContactList>
    </div>
  );
};
