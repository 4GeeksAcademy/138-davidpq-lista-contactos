import { Pencil, Trash2 } from "lucide-react";
import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import contactServices from "../services/contactServices";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function Contact() {
    const { store, dispatch } = useGlobalReducer()
    const contacts = store.contactList
    const [numberDelete, setNumberDelete] = useState(null)
    async function handleDelete() {
        await contactServices.deleteContact(numberDelete)
        dispatch({ type: 'deleteContactList', payload: numberDelete })
        const modal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
        modal.hide();
    }
    return (
        <>
            <div className="bg-light py-4">

                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2>Contactos</h2>
                        <Link to="/create-contact">
                            <button className="btn btn-success">Add new contact</button>
                        </Link>

                    </div>

                    <div className="card shadow-sm">

                        <div className="list-group list-group-flush">
                            {
                                contacts.map((contact) => {
                                    return (
                                        <ContactCard key={contact.id} contact={contact} setNumberDelete={setNumberDelete} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deleteModal" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">Are you sure?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{setNumberDelete(null)}}></button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{setNumberDelete(null)}}>No</button>
                            <button type="button" className="btn btn-primary" onClick={()=>{handleDelete()}}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}