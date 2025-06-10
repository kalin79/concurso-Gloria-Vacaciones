"use client";
import { useState, useContext } from "react";
import { ParticiparContext } from '@/context/ParticiparProvider';
import { checkDNI } from '@/actions/apisConcurso';
import { objUser } from "@/interfaces/user";
import { validateParticipantSchema } from '@/lib/validators';
import styles from '@/styles/scss/formulario.module.scss';

const initialTodo = {
    nro_documento: "",
    tipo_documento: "",
    tyc: false,
    tyc_vacaciones: false,
    recibirInformacion: false,
}
const Documento = () => {
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
            const parsedData = validateParticipantSchema.safeParse(userTodo);
            // console.log(parsedData);

            if (!parsedData.success) {
                setError(parsedData.error.errors[0].message);
                setIsLoading(false);
                return;
            }

            try {
                const result = await checkDNI(userTodo);

                console.log(result);
                if (result.status === 'error') {
                    setError(result.message);
                    setIsLoading(false);
                    return;
                }
                if (result.status === 'success') {
                    if (result.data && Object.keys(result.data).length > 0) {
                        updateIdForm(3);
                        updateDNI(userTodo.nro_documento ?? "");
                        console.log(result.data.telefono);
                        updateMovil(result.data.telefono);
                        setIsLoading(true);
                        setError('');
                        return;
                    } else {
                        updateIdForm(2);
                        updateDNI(userTodo.nro_documento ?? "");
                        setIsLoading(true);
                        setError('');
                        return;
                    }

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

    const handleChangeNumber = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        if (/^\d*$/.test(value) && value.length <= 9) {
            setUserTodo((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };
    return (
        <div>
            <div className="titularContainer">
                <h2 className="misti ">Coloca tus datos para participar</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.gridContainer}>
                    <div className={styles.gridBodyForm2}>

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
                                onChange={handleChangeNumber}
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
                                <span className={`checkboxLabel misti`}>Al enviar este formulario, usted acepta que <span className="bold">LECHE GLORIA SOCIEDAD ANONIMA - GLORIA S.A.</span> trate sus datos personales conforme a nuestra política de privacidad. Sus datos serán utilizados exclusivamente para el sorteo de la promoción, <span className="bold">Gloria Paga tus Vacaciones, vigente desde 27/06/25 hasta el 15/08/2025.</span> La cantidad de ganadores será uno por semana, <span className="bold">total de 8 ganadores</span></span>
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
                                <span className={`checkboxLabel`}>Desea recibir informaci&oacute;n</span>
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

export default Documento
