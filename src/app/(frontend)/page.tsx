'use client';
import dynamic from 'next/dynamic'
import { useContext } from 'react';
import { ParticiparContext } from '@/context/ParticiparProvider'
const DynamicFormDocumento = dynamic(() => import('@/components/home/Documento'), { loading: () => <p>Loading...</p> })
const DynamicRegisterDocumento = dynamic(() => import('@/components/home/DatosPersonales'), { loading: () => <p>Loading...</p> })
const DynamicUploadTickets = dynamic(() => import('@/components/home/Tickets'), { loading: () => <p>Loading...</p> })
const DynamicThank = dynamic(() => import('@/components/home/Gracias'), { loading: () => <p>Loading...</p> })
// Map of forms
const formComponents: { [key: number]: React.ReactNode } = {
    1: <DynamicFormDocumento />,
    2: <DynamicRegisterDocumento />,
    3: <DynamicUploadTickets />,
    4: <DynamicThank />
};
export default function Home() {
    const { idForm } = useContext(ParticiparContext)
    return (
        <>
            <div className='formContainer'>
                <h1 className='h1Oculto'>Gloria :: Paga tus Vacaciones</h1>
                {formComponents[idForm] || <p>Formulario no encontrado</p>}

            </div>
        </>
    );
}
