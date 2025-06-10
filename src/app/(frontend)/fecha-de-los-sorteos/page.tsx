'use client';
import Link from 'next/link';
export default function Fechas() {
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
                    <div className="item">
                        <h2>2do sorteo</h2>
                        <h3>04 de JULIO</h3>
                        <div className='diabledLink'>Ver los ganadores</div>
                        {/* <Link href="/ganadores" disabled="disabled">Ver los ganadores</Link> */}

                    </div>
                    <div className="item">
                        <h2>3er sorteo</h2>
                        <h3>11 de JULIO</h3>
                        <div className='diabledLink'>Ver los ganadores</div>
                        {/* <Link href="/ganadores">Ver los ganadores</Link> */}
                    </div>
                    <div className="item">
                        <h2>4to sorteo</h2>
                        <h3>18 de JULIO</h3>
                        <div className='diabledLink'>Ver los ganadores</div>
                        {/* <Link href="/ganadores">Ver los ganadores</Link> */}
                    </div>
                    <div className="item">
                        <h2>5to sorteo</h2>
                        <h3>25 de JULIO</h3>
                        <div className='diabledLink'>Ver los ganadores</div>
                        {/* <Link href="/ganadores">Ver los ganadores</Link> */}
                    </div>
                    <div className="item">
                        <h2>6to sorteo</h2>
                        <h3>01 de AGOSTO</h3>
                        <div className='diabledLink'>Ver los ganadores</div>
                        {/* <Link href="/ganadores">Ver los ganadores</Link> */}
                    </div>
                    <div className="item">
                        <h2>7to sorteo</h2>
                        <h3>08 de AGOSTO</h3>
                        <div className='diabledLink'>Ver los ganadores</div>
                        {/* <Link href="/ganadores">Ver los ganadores</Link> */}
                    </div>
                    <div className="item">
                        <h2>8to sorteo</h2>
                        <h3>15 de AGOSTO</h3>
                        <div className='diabledLink'>Ver los ganadores</div>
                        {/* <Link href="/ganadores">Ver los ganadores</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
