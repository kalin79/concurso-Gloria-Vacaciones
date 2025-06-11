'use client';
import Link from 'next/link';
import Image from "next/image";

export default function Fechas() {
    return (
        <div className="contenidoGeneral">
            <div className="container">
                <div className="headerTitularContainer">
                    <h1>¿Cómo participar?</h1>
                </div>
                <div className="gridParticipante">
                    <div>
                        <div className='lineaBox'>
                            <Image src="/linea.png" width={2} height={342} alt='' />
                        </div>
                        <div className='headerParticipante'>
                            <div>1</div>
                        </div>
                        <div className='bodyParticipante'>
                            <div>
                                <p>
                                    Realiza tu compra de <span>S/ 20.00</span> en
                                    productos seleccionados:
                                </p>
                                <p>
                                    <span>Gloria Light y Zero Lacto evaporada</span> (170G Y 390G) y <span>UHT</span> (1LT Y 900ML)
                                </p>
                                <p className='textM'>
                                    Promoción exclusiva en:
                                </p>
                                <div className='logosContainer'>
                                    <Image src="/plaza.svg" width={116} height={43} alt='' />
                                    <Image src="/vivanda.svg" width={139} height={42} alt='' />
                                </div>
                            </div>
                            <div>
                                <Image src="/producto.png" width={189} height={106} alt='' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='lineaBox'>
                            <Image src="/linea.png" width={2} height={342} alt='' />
                        </div>
                        <div className='headerParticipante'>
                            <div>2</div>
                        </div>
                        <div className='bodyParticipante'>
                            <div className='full separate'>
                                <p className='center'>
                                    Registra tus tickets en <br />cualquier momento.
                                </p>
                                <Link href="/" className='btnLink'>
                                    <span>REGISTRAR TICKET</span>
                                    <Image src="/ti.svg" width={35} height={18} alt='' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='headerParticipante'>
                            <div>3</div>
                        </div>
                        <div className='bodyParticipante'>
                            <div className='full'>
                                <p className='center'>
                                    Si has completado todos los pasos,
                                    ¡ya estás automáticamente participando en nuestro sorteo!
                                    Los resultados serán publicados en nuestras redes sociales y
                                    en nuestra página web, en la sección de <Link href="/ganadores">ganadores</Link>,
                                    que estará activa una vez finalice el conteo.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='anuncioContentParticipante'>
                    <p>Promoción válida del 12/06 al 15/08 del 2025 o hasta agotar stock en plazaVea a nivel nacional.</p>
                </div>
            </div>
        </div>
    );
}
