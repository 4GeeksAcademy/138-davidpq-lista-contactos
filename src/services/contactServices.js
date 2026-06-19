async function getAllContact() {
    const res = await fetch("https://playground.4geeks.com/contact/agendas/davidpq/contacts")
    const data = await res.json()
    return data;
}

async function postContact(contact) {
    const res = await fetch("https://playground.4geeks.com/contact/agendas/davidpq/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
    const data = await res.json()
    return data;
}

async function deleteContact(id) {
    const res = await fetch(`https://playground.4geeks.com/contact/agendas/davidpq/contacts/${id}`, {
        method: "DELETE",
    })
}

async function updateContact(contact) {    
        const res = await fetch(`https://playground.4geeks.com/contact/agendas/davidpq/contacts/${contact.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
    const data = await res.json()
    return data;
}

const contactServices = {
    getAllContact,
    postContact,
    deleteContact,
    updateContact
}

export default contactServices