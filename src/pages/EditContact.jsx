import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import ContactForm from "../components/ContactForm";
import { useEffect } from "react";
import contactServices from "../services/contactServices";
import ContactNotFound from "../components/ContactNotFound";

export default function EditContact() {
    const navigate = useNavigate()
    const {id} = useParams();
    const { store, dispatch } = useGlobalReducer()
    const contact = store.contactList.find((contact) => contact.id === Number(id));

    async function handleSubmit(e) {
        e.preventDefault()
        const contactEdit = {
            "name": e.target[0].value,
            "email": e.target[1].value,
            "phone": e.target[2].value,
            "address": e.target[3].value,
            "id": id
        }
        const dataContact = await contactServices.updateContact(contactEdit)
        dispatch({ type: 'updateContactList', payload: dataContact })

        navigate("/")
    }

    return (
        (contact===undefined ?
            <ContactNotFound></ContactNotFound>
            :
            <ContactForm handleSubmit={handleSubmit} addOrEdit={"edit"} contact={contact ? contact : undefined}></ContactForm>
        )
    )
}