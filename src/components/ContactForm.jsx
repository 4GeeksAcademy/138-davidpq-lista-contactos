import { Link, useNavigate, useParams } from "react-router-dom";
import contactServices from "../services/contactServices";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export default function ContactForm({ handleSubmit, addOrEdit, contact }) {
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams();
    
    function handleBack() {
        navigate(-1)
    }

    return (
        <div className="bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">

                        <div className="card shadow-sm">
                            <div className="card-body p-5">

                                <h2 className="text-center mb-4">{addOrEdit === "add" ? "Add a new contact" : "Modify contact"}</h2>

                                <form onSubmit={(e) => { handleSubmit(e) }}>
                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" className="form-control" defaultValue={contact !== undefined ? contact.name : ""} placeholder="Enter full name" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" defaultValue={contact !== undefined ? contact.email : ""} placeholder="Enter email" autoFocus />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Phone</label>
                                        <input type="number" className="form-control" defaultValue={contact !== undefined ? contact.phone : ""} placeholder="Enter phone" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label">Address</label>
                                        <input type="text" className="form-control" defaultValue={contact !== undefined ? contact.address : ""} placeholder="Enter address" />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">
                                        save
                                    </button>

                                    <div className="text-center">
                                        <Link onClick={handleBack} className="text-decoration-none text-primary">
                                            or get back to contacts
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}