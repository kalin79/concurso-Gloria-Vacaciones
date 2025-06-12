"use client";
import { useState, useContext } from "react";
import { ParticiparContext } from '@/context/ParticiparProvider';
import { registerParticipant } from '@/actions/apisConcurso';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { objUser } from "@/interfaces/user";
import { registerSchema } from '@/lib/validators';
import styles from '@/styles/scss/formulario.module.scss';

const initialTodo = {
    nombres: "",
    apellidos: "",
    fecha_cumple: "",
    nro_documento: "",
    tipo_documento: "",
    email: "",
    departamento: "",
    provincia: "",
    distrito: "",
    movil: "",
    tyc: false,
    tyc_vacaciones: false,
    recibirInformacion: false,
}
const DatosPersonales = () => {
    const [userTodo, setUserTodo] = useState<objUser>(initialTodo);
    const [isLoading, setIsLoading] = useState(false);
    // const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [error, setError] = useState("");
    const { updateIdForm, updateDNI, updateMovil } = useContext(ParticiparContext)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);
        try {
            // Validar con Zod en el cliente.
            const parsedData = registerSchema.safeParse(userTodo);
            // console.log(parsedData);
            if (!parsedData.success) {
                setError(parsedData.error.errors[0].message);
                setIsLoading(false);
                return;
            }

            try {
                const result = await registerParticipant(userTodo);
                if (result.status === 'error') {
                    setError(result.message);
                    setIsLoading(false);
                    return;
                }
                if (result.status === 'success') {
                    updateIdForm(3);
                    updateDNI(userTodo.nro_documento ?? "");
                    updateMovil(userTodo.movil ?? "");
                    setIsLoading(true);
                    setError('');
                    return;
                }
            } catch {
                setIsLoading(false);
                setError('Ocurrió un error inesperado'); // fallback
                // if (error instanceof Error) {
                //     setError(error.message); // Mensaje real del Error
                // } else if (typeof error === 'string') {
                //     setError(error);
                // } else {
                //     setError('Ocurrió un error inesperado'); // fallback
                // }
            }


        } catch (err) {
            setError(` ${err} Error inesperado. Intenta de nuevo.`);
            setIsLoading(false);
        }

    }

    const handleChangeChecked = (value: boolean) => {

        setUserTodo((prev) => ({
            ...prev,
            tyc: value,
        }));
    }

    const handleChangeChecked2 = (value: boolean) => {

        setUserTodo((prev) => ({
            ...prev,
            tyc_vacaciones: value,
        }));
    }
    const handleChangeChecked3 = (value: boolean) => {

        setUserTodo((prev) => ({
            ...prev,
            recibirInformacion: value,
        }));
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setUserTodo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    return (
        <div>
            <div className="titularContainer">
                <h2 className="misti ">Regístrate</h2>
                <p className="misti">Completa tus datos para participar</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.gridContainer}>
                    <div className={styles.gridBodyForm}>
                        <div>
                            <input
                                type="text"
                                value={userTodo.nombres}
                                name="nombres"
                                placeholder="Nombres"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                value={userTodo.apellidos}
                                name="apellidos"
                                placeholder="Apellidos"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <DatePicker
                                placeholderText="Cumpleaños"
                                className="mi-input" // tu clase CSS normal
                                selected={userTodo.fecha_cumple ? new Date(userTodo.fecha_cumple) : null}
                                onChange={(date: Date | null) =>
                                    setUserTodo((prev) => ({
                                        ...prev,
                                        fecha_cumple: date ? date.toISOString().split("T")[0] : "",
                                    }))
                                }
                                dateFormat="dd/MM/YYYY"
                                locale="es"
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"

                            />

                        </div>
                        <div>
                            <div className="customSelect">
                                <select
                                    value={userTodo.tipo_documento}
                                    name="tipo_documento"
                                    onChange={handleChange}
                                    className={`selectContainer`}
                                >
                                    <option value="" disabled>
                                        Tipo de documento
                                    </option>
                                    <option value="dni">DNI</option>
                                    <option value="ce">CE</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <input
                                type="text"
                                value={userTodo.nro_documento}
                                name="nro_documento"
                                placeholder="N° de identidad"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            {/* <div className="customSelect">
                                <select
                                    value={userTodo.departamento}
                                    name="departamento"
                                    onChange={handleChange}
                                    className={`selectContainer`}
                                >
                                    <option value="" disabled>
                                        Departamento
                                    </option>
                                    <option value="dni">Lima</option>
                                    <option value="ce">Jauja</option>
                                </select>
                            </div> */}
                            <div>
                                <input
                                    type="text"
                                    value={userTodo.departamento}
                                    name="departamento"
                                    placeholder="Departamento"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            {/* <div className="customSelect">
                                <select
                                    value={userTodo.provincia}
                                    name="provincia"
                                    onChange={handleChange}
                                    className={`selectContainer`}
                                >
                                    <option value="" disabled>
                                        Provincia
                                    </option>
                                    <option value="dni">Lima</option>
                                    <option value="ce">Huacho</option>
                                </select>
                            </div> */}
                            <div>
                                <input
                                    type="text"
                                    value={userTodo.provincia}
                                    name="provincia"
                                    placeholder="Provincia"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            {/* <div className="customSelect">
                                <select
                                    value={userTodo.distrito}
                                    name="distrito"
                                    onChange={handleChange}
                                    className={`selectContainer`}
                                >
                                    <option value="" disabled>
                                        Distrito
                                    </option>
                                    <option value="dni">San Miguel</option>
                                    <option value="ce">Callao</option>
                                </select>
                            </div> */}
                            <div>
                                <input
                                    type="text"
                                    value={userTodo.distrito}
                                    name="distrito"
                                    placeholder="Distrito"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <input
                                type="email"
                                value={userTodo.email}
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                value={userTodo.movil}
                                name="movil"
                                placeholder="Teléfono"
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                    <div className={styles.gridFooterForm}>
                        <div>
                            <label className="customCheckbox">
                                <input
                                    type="checkbox"
                                    checked={userTodo.tyc_vacaciones}
                                    onChange={() => handleChangeChecked2(!userTodo.tyc_vacaciones)}
                                />
                                <span className="checkboxBox bajar">
                                    {userTodo.tyc_vacaciones && (
                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z" fill="white" />
                                        </svg>
                                    )}
                                </span>
                                <span className={`checkboxLabel misti`}>Al enviar este formulario, acepto que <span className="bold">LECHE GLORIA SOCIEDAD ANONIMA - GLORIA S.A.</span> trate mis datos personales conforme a su política de privacidad. Sus datos serán utilizados exclusivamente para el sorteo de la promoción, <a href="/politicas-de-privacidad" target="_blank">política de privacidad.</a> <span className="bold">Gloria Paga tus Vacaciones, vigente desde 27/06/25 hasta el 15/08/2025. </span> Habrá un <span className="bold">ganador por semana, serán 8 ganadores en total.</span></span>
                            </label>
                        </div>
                        <div>
                            <label className="customCheckbox">
                                <input
                                    type="checkbox"
                                    checked={userTodo.tyc}
                                    onChange={() => handleChangeChecked(!userTodo.tyc)}
                                />
                                <span className="checkboxBox">
                                    {userTodo.tyc && (
                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z" fill="white" />
                                        </svg>
                                    )}
                                </span>
                                <span className={`checkboxLabel`}>Acepto los <a href="/terminos-y-condiciones" target="_blank">Términos y Condiciones,</a></span>
                            </label>
                        </div>
                        <div>
                            <label className="customCheckbox">
                                <input
                                    type="checkbox"
                                    checked={userTodo.recibirInformacion}
                                    onChange={() => handleChangeChecked3(!userTodo.recibirInformacion)}
                                />
                                <span className="checkboxBox">
                                    {userTodo.recibirInformacion && (
                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z" fill="white" />
                                        </svg>
                                    )}
                                </span>
                                <span className={`checkboxLabel`}>Deseo recibir más información de productos y promociones.</span>
                            </label>
                        </div>
                        <div>
                            {error &&
                                (
                                    <div className="alert alert-danger">
                                        <p>{error}</p>
                                    </div>
                                )
                            }
                        </div>
                        <div className={`buttonContainer`} style={{ gridArea: "submit" }}>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`buttonBtnForm misti`}
                            >
                                {isLoading ? 'Cargando...' : 'PARTICIPAR'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DatosPersonales
