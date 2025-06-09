'use client';
import { useContext } from "react";

import { ParticiparContext } from '@/context/ParticiparProvider';
import Image from "next/image";

const Gracias = () => {
    const { updateIdForm } = useContext(ParticiparContext)

    const handleTickets = () => {

        updateIdForm(3);

    }
    return (
        <div className="graciasContainer">
            <div>
                <Image src="/vaca.png" width={394} height={438} alt="" />
            </div>
            <div>
                <h2 className="misti ">¡Listo! </h2>
                <p className="misti ">
                    Estás a un paso de vivir unas vacaciones inolvidables en familia.
                </p>
                <button onClick={handleTickets} className="misti ">
                    Registrar más tickets
                </button>
            </div>

        </div>
    )
}

export default Gracias
