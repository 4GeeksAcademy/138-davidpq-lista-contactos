import { Pencil, Trash2 } from "lucide-react";
import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
    const [contacts, setContacts] = useState([
        {
          name: "David",
          phone: "(870) 288-4149",
          email: "mike.ana@example.com",
          address: "5842 Hillcrest Rd",
          id: 1
        },
        {
          name: "Jonathan",
          phone: "(870) 288-4149",
          email: "mike.ana@example.com",
          address: "5842 Hillcrest Rd",
          id: 2
        },
        {
          name: "Frank",
          phone: "(870) 288-4149",
          email: "mike.ana@example.com",
          address: "5842 Hillcrest Rd",
          id: 3
        },
        {
          name: "Alvaro",
          phone: "(870) 288-4149",
          email: "mike.ana@example.com",
          address: "5842 Hillcrest Rd",
          id: 4
        }
    ])

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
                                contacts.map((contact)=>{
                                    return (
                                        <ContactCard key={contact.id} contact={contact} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-primary">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}