import { Mail, MapPin, Pencil, Phone, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCard({ contact, setNumberDelete }) {
    


    return (
        <div className="list-group-item list-group-item-action p-3">
            <div className="d-flex align-items-start">
                <img src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/bw/512px/1f464.png"
                    className="rounded-circle me-3" width="64" height="64" alt={contact.name} />

                <div className="flex-grow-1">
                    <h5 className="mb-1">{contact.name}</h5>
                    <div className="text-muted small">
                        <div className="d-flex align-items-center mb-1">
                            <MapPin className="me-2"/>
                            {contact.address}
                        </div>
                        <div className="d-flex align-items-center mb-1">
                            <Phone className="me-2"/>
                            {contact.phone}
                        </div>
                        <div className="d-flex align-items-center">
                            <Mail className="me-2"/>
                            {contact.email}
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-2">
                    <Link to={`edit-contact/${contact.id}`}>
                        <button className="btn btn-warning text-muted p-2">
                            <Pencil color="white" />
                        </button>
                    </Link>
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={()=>setNumberDelete(contact.id)}>
                        <Trash2 color="white" />
                    </button>
                </div>
            </div>
        </div>
    )
}