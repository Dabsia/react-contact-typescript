import React, { useState } from 'react'

interface addContactProps {
    addToContactList(params: object): void 
}


const AddContact: React.FC<addContactProps> = ({addToContactList}): JSX.Element => {

    // Initia State of Inputs
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [number, setNumber] = useState<string>('')

    // State if inputs has values

    const [nameHasValue, setNameHasValue] = useState<boolean>(true)
    const [emailHasValue, setEmailHasValue] = useState<boolean>(false)
    const [numberHasValue, setNumberHasValue] = useState<boolean>(false)



    const contactDetails = {
        name, email, number
    }

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        addToContactList(contactDetails)
        setName('')
        setEmail('')
        setNumber('')

        if (name.length > 0) {
            setNameHasValue(true)
        }
        else {
            setNameHasValue(false)
        }
    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input style={{'borderColor': (nameHasValue? '#121212' : 'red')}} placeholder='name' type='text' onChange={(e) => setName(e.currentTarget.value)} value={name} />
              <input placeholder='email' type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
              <input placeholder='Phone Number' type= 'number' onChange={(e) => setNumber(e.target.value)} value = {number } />
              <button>Submit</button>
          </form>
      </div>
  )
}

export default AddContact