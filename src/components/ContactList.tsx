import React from 'react'

type ContactListProps = {
  allContacts: {
    name: string;
    email: string;
    number: string
  }[]
}

const ContactList: React.FC<ContactListProps> = ({allContacts}): JSX.Element => {
    
  return (
    <>{
      allContacts.map((contacts, idx) => {
        return (
          <div key = {idx} >
            <p>{contacts.name}</p>
            <p>{contacts.email}</p>
            <p>{contacts.number}</p>
          </div>
        )
      })}
    </>
  )
}

export default ContactList