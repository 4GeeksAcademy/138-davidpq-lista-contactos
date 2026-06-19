import { Outlet } from "react-router-dom/dist"
import useGlobalReducer from "../hooks/useGlobalReducer";
import contactServices from "../services/contactServices";
import { useEffect } from "react";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const { store, dispatch } = useGlobalReducer()
    const contacts = store.contactList
    
    useEffect(() => {
        async function obtenerContactos() {
            const dataContact = await contactServices.getAllContact()
            dispatch({ type: 'setContactList', payload: dataContact.contacts })
        }
        obtenerContactos()
    }, []);

    return (
        <Outlet />
    )
}