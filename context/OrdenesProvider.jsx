import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";

const OrdenesContext = createContext();

const OrdenesProvider = ({ children }) => {

    return(
        <OrdenesContext.Provider
        value={{}}
        >
        {children}
        </OrdenesContext.Provider>
    )
}

export { OrdenesProvider };
export default OrdenesContext;
