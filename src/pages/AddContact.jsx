import { Link, useNavigate } from "react-router-dom";
import contactServices from "../services/contactServices";
import useGlobalReducer from "../hooks/useGlobalReducer";
import ContactForm from "../components/ContactForm";

export default function AddContact() {
    const { dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        const contact = {
            "name": e.target[0].value,
            "email": e.target[1].value,
            "phone": e.target[2].value,
            "address": e.target[3].value
        }
        const dataContact = await contactServices.postContact(contact)
        dispatch({ type: 'addContactList', payload: dataContact })
        navigate("/")
    }

    return (
        <ContactForm handleSubmit={ handleSubmit } addOrEdit={"add"}></ContactForm>
    )
}