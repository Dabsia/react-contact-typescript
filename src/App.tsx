import  {useState} from 'react'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

interface ContactProps{
  name: string;
  email: string;
  number: string
}

const App = () => {

  const [allContacts, setAllContacts] = useState<ContactProps[]>([])

  const addToContactList = (contact :ContactProps): void => {
    setAllContacts(prevState => [...prevState, contact])
  }

  return (
    <>
      <AddContact addToContactList={addToContactList} />
      <ContactList allContacts = {allContacts} />
    </>
  )
}

export default App
