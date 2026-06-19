export const initialStore = () => {

  return {
    contactList: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'setContactList':

      const contactList = action.payload

      return {
        ...store,
        contactList: [...contactList]
      };
    case 'addContactList':

      const contactListAdd = store.contactList
      const contact = action.payload

      return {
        ...store,
        contactList: [...contactListAdd, contact]
      };
    case 'deleteContactList':

      const id = action.payload
      const contactListDelete = store.contactList.filter((contact) => contact.id !== id)

      return {
        ...store,
        contactList: [...contactListDelete]
      };
    case 'updateContactList':
      
      const contactEdit = action.payload
      const contactListEdit = store.contactList.map((contact)=>{
        
        
        if (contact.id === contactEdit.id) {
          return contactEdit
        }
        return contact
      })

      return {
        ...store,
        contactList: [...contactListEdit]
      };
    default:
      throw Error('Unknown action.');
  }
}
