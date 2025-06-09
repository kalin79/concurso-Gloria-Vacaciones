'use client';
import { useState, createContext } from "react";

interface ParticiparContext {
    idForm: number;
    dni: string;
    updateDNI: (payload: string) => void;
    updateIdForm: (payload: number) => void;
}

interface Props {
    children: React.ReactNode;
}

// export const ParticiparContent = createContext({} as ParticiparContext);
export const ParticiparContext = createContext({} as ParticiparContext);


const ParticiparProvider = ({ children }: Props) => {
    const [idForm, setIdForm] = useState<number>(1);
    const [dni, setDni] = useState<string>("");
    const updateIdForm = (payLoad: number) => {
        setIdForm(payLoad)
    }
    const updateDNI = (payLoad: string) => {
        setDni(payLoad)
    }
    return (
        <ParticiparContext.Provider value={{ idForm, updateIdForm, updateDNI, dni }}>
            {children}
        </ParticiparContext.Provider>
    )
}
export default ParticiparProvider