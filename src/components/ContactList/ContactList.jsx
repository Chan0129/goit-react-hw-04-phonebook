import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

const ContactListItem = ({ contact, handleDelete }) => {
  const { id, name, number } = contact;

  return (
    <li className={css.contactListItem}>
      {name}: {number}
      <button
        type="button"
        className={css.contactListItemBtn}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
