import React from 'react';
import { ListItem } from '../ListItem/ListItem.jsx';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = ({ children }) => {
  // const filteredContacts = getFilteredData(contacts);

  const contacts = useSelector(state => state.phonebook.contacts);
  return (
    <>
      {children}
      {contacts.length === 0 ? (
        <p className={s.errorMessage}>No contacts match your search</p>
      ) : (
        <ul className={s.listOfContacts}>
          {contacts.map(({ id, name, number }) => (
            <ListItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </>
  );
};
