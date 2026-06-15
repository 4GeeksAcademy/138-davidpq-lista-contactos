import { Link, useNavigate } from "react-router-dom";

export default function EditContact() {

    const navigate = useNavigate();
    const contact = {
          name: "David",
          phone: "(870) 288-4149",
          email: "mike.ana@example.com",
          address: "5842 Hillcrest Rd",
          id: 1
        }
    function goBack() {
        navigate(-1)
    }

    function handleSubmit(e) {
        e.preventDefault()
        //Code
        navigate("/")
    }

    return (
        <div className="bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">

                        <div className="card shadow-sm">
                            <div className="card-body p-5">

                                <h2 className="text-center mb-4">Modify contact</h2>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" className="form-control" defaultValue={contact.name} placeholder="Enter full name" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" defaultValue={contact.email} placeholder="Enter email" autoFocus />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Phone</label>
                                        <input type="tel" className="form-control" defaultValue={contact.phone} placeholder="Enter phone" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label">Address</label>
                                        <input type="text" className="form-control" defaultValue={contact.address} placeholder="Enter address" />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">
                                        save
                                    </button>

                                </form>
                                <div className="text-center">
                                    <Link onClick={goBack} className="text-decoration-none text-primary">
                                        or get back to contacts
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}