"use client";
import { useState, useRef, useContext } from "react";
import Image from "next/image";
import { ParticiparContext } from '@/context/ParticiparProvider';
import { registerFiles } from '@/actions/apisConcurso';

import { objFiles } from "@/interfaces/files";
import styles from '@/styles/scss/formulario.module.scss';

// Si quieres iniciar vacío:
const initialTodo: objFiles[] = [];
const Tickets = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [images, setImages] = useState<objFiles[]>(initialTodo);
    const [uploading, setUploading] = useState(false);
    const { updateIdForm, dni, movil } = useContext(ParticiparContext)

    // 👉 Abre el input al hacer clic en el botón
    const handleSelectFiles = () => {
        fileInputRef.current?.click();
    };
    // 👉 Cuando seleccionas una o varias imágenes
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const fileArray = Array.from(files).map((file) => ({
                file,
                preview: URL.createObjectURL(file),
                dni: dni
            }));
            setImages((prev) => [...prev, ...fileArray]);
        }
    };
    // 👉 Eliminar una imagen
    const removeImage = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    // 👉 Subir todas las imágenes
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setUploading(true);
        if (images.length === 0) return alert("Debes agregar al menos una foto");

        const formData = new FormData();
        images.forEach((img) => {
            formData.append("files[]", img.file);
            formData.append("dni[]", img.dni);
            formData.append("telefono[]", movil);
        });
        console.log(images);
        console.log(formData);


        try {
            const result = await registerFiles(formData);
            updateIdForm(4);
            setUploading(false);
            console.log(result);
        } catch {
            setUploading(false);
            // setError('Ocurrió un error inesperado'); // fallback
            // if (error instanceof Error) {
            //     setError(error.message); // Mensaje real del Error
            // } else if (typeof error === 'string') {
            //     setError(error);
            // } else {
            //     setError('Ocurrió un error inesperado'); // fallback
            // }
        }
        // try {
        //     const res = await fetch("/api/upload", {
        //         method: "POST",
        //         body: formData,
        //     });

        //     if (res.ok) {
        //         alert("Fotos subidas correctamente ✅");
        //         setImages([]); // Limpiar después de subir
        //     } else {
        //         alert("❌ Error al subir las fotos");
        //     }
        // } catch (error) {
        //     console.log(error);
        //     alert("❌ Error al conectar con el servidor");
        // } finally {
        //     setUploading(false);
        // }
    };
    return (
        <div>
            <div className="titularContainer">
                <h2 className="misti ">¡Registra tus tickets!</h2>
                <p className="misti">¡Ya estás a un paso de ganar! Sube tu ticket de compra (físico o digital) y entra al sorteo.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.gridContainer}>
                    <div className={styles.rowContainer}>
                        <div>
                            <input
                                type="file"
                                accept="image/*"
                                capture="environment"
                                multiple
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            {/* BOTÓN PERSONALIZADO */}
                            <button
                                type="button"
                                onClick={handleSelectFiles}
                                className="btnUploadFile"
                            >
                                <span className="misti">Subir ticket de compra</span>
                                <Image src="/upload.svg" alt="" width={24} height={24} />
                            </button>
                        </div>
                        <div>
                            <div className="anuncioContent">
                                <h3>Sube una imagen clara y de buena calidad.</h3>
                                <ul>
                                    <li>
                                        <p>Asegúrate de que esté bien iluminada, sin sombras, sin filtros ni efectos. La imagen debe mostrar el contenido de forma nítida y natural.</p>
                                    </li>
                                    <li>
                                        <p>Los formatos acetados: JPG, PNG. Peso máximo 10mb, se aceptan máximo 5 archivos.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            {images.length > 0 && (
                                <div className="listFileContainer">
                                    {images.map((img, index) => (
                                        <div key={index} className="item">
                                            <div>
                                                <Image
                                                    src={img.preview}
                                                    alt={`Foto ${index + 1}`}
                                                    width={50}
                                                    height={50}
                                                />
                                                <p>{img.file.name}</p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeImage(index)}
                                                className="btnDelete"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                        <div>
                            {images.length > 0 && (
                                <button
                                    type="submit"
                                    disabled={uploading}
                                    className="btnUploadSubmit misti"
                                >
                                    {uploading ? "Subiendo fotos..." : "Registrar"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Tickets
