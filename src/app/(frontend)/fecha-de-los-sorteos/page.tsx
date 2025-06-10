'use client';
import Link from 'next/link';
export default function Home() {

    return (
        <div className="contenidoGeneral">
            <div className="container">
                <div className="headerTitularContainer">
                    <h1>Fecha de los sorteos</h1>
                </div>
                <div className="gridSorteos">
                    <div className="item">
                        <h2>1er sorteo</h2>
                        <h3>27 de JUNIO</h3>
                        <Link href="/ganadores">Ver los ganadores</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
