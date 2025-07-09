'use client';
export default function Ganadores() {
    const ganador1 = true;
    const ganador2 = true;
    const ganador3 = false;
    const ganador4 = false;
    const ganador5 = false;
    const ganador6 = false;
    const ganador7 = false;
    const ganador8 = false;
    return (
        <div className="contenidoGeneral">
            <div className="container">
                <div className="headerTitularContainer">
                    <h1>Nuestros ganadores</h1>
                </div>
                <div className="gridSorteos">
                    <div className={`item centerAlign ${!ganador1 ? 'bgGris' : ''} `}>
                        {
                            (ganador1) ? (
                                <>
                                    <h4>1er Sorteo: viernes 27 de junio</h4>
                                    <h5>RUDDY</h5>
                                    <p>DNI: 47502096</p>
                                    <p>Los Olivos </p>
                                    <div className='montoContent'>S/5,000.00</div>
                                    <span>Cinco mil nuevos soles</span>
                                </>
                            ) : (
                                <div>
                                    <h5 className='boldTexto'>Próximo sorteo 27 de JUNIO</h5>

                                </div>
                            )
                        }

                    </div>
                    <div className={`item centerAlign ${!ganador2 ? 'bgGris' : ''} `}>
                        {
                            (ganador2) ? (
                                <div>
                                    <h4>1er Sorteo: viernes 27 de junio</h4>
                                    <h5>Berenda Katia</h5>
                                    <p>DNI: 08137321</p>
                                    <p>Rimac</p>
                                    <div className='montoContent'>S/5,000.00</div>
                                    <span>Cinco mil nuevos soles</span>
                                </div>
                            ) : (
                                <div>
                                    <h5 className='boldTexto'>Próximo sorteo 04 de JULIO</h5>

                                </div>
                            )
                        }

                    </div>
                    <div className={`item centerAlign ${!ganador3 ? 'bgGris' : ''} `}>
                        {
                            (ganador3) ? (
                                <div>
                                    <h4>1er Sorteo: viernes 27 de junio del año 2025</h4>
                                    <h5>ELVIS</h5>
                                    <p>DNI: 12345678</p>
                                    <p>San Juan de Lurigancho </p>
                                    <div className='montoContent'>S/3000.00</div>
                                    <span>Tres mil nuevos, soles</span>
                                </div>
                            ) : (
                                <div>
                                    <h5 className='boldTexto'>Próximo sorteo 11 de JULIO</h5>

                                </div>
                            )
                        }

                    </div>
                    <div className={`item centerAlign ${!ganador4 ? 'bgGris' : ''} `}>
                        {
                            (ganador4) ? (
                                <div>
                                    <h4>1er Sorteo: viernes 27 de junio del año 2025</h4>
                                    <h5>ELVIS</h5>
                                    <p>DNI: 12345678</p>
                                    <p>San Juan de Lurigancho </p>
                                    <div className='montoContent'>S/3000.00</div>
                                    <span>Tres mil nuevos, soles</span>
                                </div>
                            ) : (
                                <div>
                                    <h5 className='boldTexto'>Próximo sorteo 18 de JULIO</h5>

                                </div>
                            )
                        }

                    </div>
                    <div className={`item centerAlign ${!ganador5 ? 'bgGris' : ''} `}>
                        {
                            (ganador5) ? (
                                <div>
                                    <h4>1er Sorteo: viernes 27 de junio del año 2025</h4>
                                    <h5>ELVIS</h5>
                                    <p>DNI: 12345678</p>
                                    <p>San Juan de Lurigancho </p>
                                    <div className='montoContent'>S/3000.00</div>
                                    <span>Tres mil nuevos, soles</span>
                                </div>
                            ) : (
                                <div>
                                    <h5 className='boldTexto'>Próximo sorteo 25 de JULIO</h5>

                                </div>
                            )
                        }

                    </div>
                    <div className={`item centerAlign ${!ganador6 ? 'bgGris' : ''} `}>
                        {
                            (ganador6) ? (
                                <div>
                                    <h4>1er Sorteo: viernes 27 de junio del año 2025</h4>
                                    <h5>ELVIS</h5>
                                    <p>DNI: 12345678</p>
                                    <p>San Juan de Lurigancho </p>
                                    <div className='montoContent'>S/3000.00</div>
                                    <span>Tres mil nuevos, soles</span>
                                </div>
                            ) : (
                                <div>
                                    <h5 className='boldTexto'>Próximo sorteo 01 de AGOSTO</h5>

                                </div>
                            )
                        }

                    </div>
                    <div className={`item centerAlign ${!ganador7 ? 'bgGris' : ''} `}>
                        {
                            (ganador7) ? (
                                <div>
                                    <h4>1er Sorteo: viernes 27 de junio del año 2025</h4>
                                    <h5>ELVIS</h5>
                                    <p>DNI: 12345678</p>
                                    <p>San Juan de Lurigancho </p>
                                    <div className='montoContent'>S/3000.00</div>
                                    <span>Tres mil nuevos, soles</span>
                                </div>
                            ) : (
                                <div>
                                    <h5 className='boldTexto'>Próximo sorteo 08 de AGOSTO</h5>

                                </div>
                            )
                        }

                    </div>
                    <div className={`item centerAlign ${!ganador8 ? 'bgGris' : ''} `}>
                        {
                            (ganador8) ? (
                                <div>
                                    <h4>1er Sorteo: viernes 27 de junio del año 2025</h4>
                                    <h5>ELVIS</h5>
                                    <p>DNI: 12345678</p>
                                    <p>San Juan de Lurigancho </p>
                                    <div className='montoContent'>S/3000.00</div>
                                    <span>Tres mil nuevos, soles</span>
                                </div>
                            ) : (
                                <div>
                                    <h5 className='boldTexto'>Próximo sorteo 15 de AGOSTO</h5>

                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}
