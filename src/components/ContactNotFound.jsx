import { Link } from "react-router-dom";

export default function ContactNotFound() {

    return (
        <div className="bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">

                        <div className="card shadow-sm">
                            <div className="card-body p-5">

                                <h2 className="text-center mb-4">Contact Not Found</h2>
                                <div className="text-center">
                                    <Link to={"/"} className="text-decoration-none text-primary">
                                        Return Contacts
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