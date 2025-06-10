'use client';
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
const NavMain = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='navMain'>
                <div></div>
                <div className='logoMain'>
                    <Link href="/">
                        <Image src="/gloria.svg" width={163} height={130} alt='' />
                    </Link>
                </div>
                <div className='mainMenu' onClick={() => setIsOpen(!isOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={`navMainMobile ${isOpen ? "open" : ""}`}>
                <div className="container">
                    <div className='headerMain'>
                        <Image src="/gloria.svg" width={163} height={130} alt='' />
                        <p className='btnClose' onClick={() => setIsOpen(!isOpen)}>
                            <Image src="/close.svg" width={46} height={46} alt='' />
                        </p>
                    </div>
                </div>
                <nav>
                    <Link href="/" onClick={() => setIsOpen(false)}>Inicio</Link>
                    <Link href="/como-participar" onClick={() => setIsOpen(false)}>Como Participar</Link>
                    <Link href="/ganadores" onClick={() => setIsOpen(false)}>Ganadores</Link>
                    <Link href="/politicas-de-privacidad" onClick={() => setIsOpen(false)}>Políticas y privacidad</Link>
                    <Link href="/terminos-y-condiciones" onClick={() => setIsOpen(false)}>Términos y condiciones</Link>
                    <Link href="/fecha-de-los-sorteos" onClick={() => setIsOpen(false)}>Fechas del sorteo</Link>
                    <Link href="/" className='btnLink' onClick={() => setIsOpen(false)}>
                        <span>REGISTRAR TICKET</span>
                        <Image src="/ticket.svg" width={35} height={18} alt='' />
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default NavMain
