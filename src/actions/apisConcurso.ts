'use server';
import { objUser } from "@/interfaces/user";


export async function registerFiles(formData: FormData) {
    const API_TOKEN = process.env.NEXTAUTH_SECRET; // Acceso a variable de entorno
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    // const formDataFiles = new FormData();
    // formData.file.forEach((img) => formDataFiles.append("files", img.file));

    if (!API_TOKEN) {
        throw new Error('API_TOKEN no está definido');
    }

    console.log(formData)

    // Ejemplo de envío a una API externa
    const response = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${API_TOKEN}`,
            "Content-Type": 'application/json',
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Error al enviar los datos');
    }

    return { success: true };
}

export async function registerParticipant(formData: objUser) {
    const API_TOKEN = process.env.NEXTAUTH_SECRET; // Acceso a variable de entorno
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!API_TOKEN) {
        throw new Error('API_TOKEN no está definido');
    }

    console.log(formData)

    // Ejemplo de envío a una API externa
    const response = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${API_TOKEN}`,
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(
            formData
        ),
    });

    if (!response.ok) {
        throw new Error('Error al enviar los datos');
    }

    return { success: true };
}


export async function checkDNI(formData: objUser) {
    const tipo = formData.tipo_documento;
    const dni = formData.nro_documento;
    const tyc = formData.tyc;
    const tyc_vacaciones = formData.tyc_vacaciones;
    const recibirInformacion = formData.recibirInformacion;
    const API_TOKEN = process.env.NEXTAUTH_SECRET; // Acceso a variable de entorno
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    console.log(API_TOKEN);
    console.log(apiUrl);
    console.log(dni);
    if (!API_TOKEN) {
        throw new Error('API_TOKEN no está definido');
    }

    // Ejemplo de envío a una API externa
    const response = await fetch(`${apiUrl}/verificar`, {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${API_TOKEN}`,
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(
            {
                "tipo_documento": tipo,
                "nro_documento": dni,
                "tyc": tyc,
                "tyc_vacaciones": tyc_vacaciones,
                "recibirInformacion": recibirInformacion,
            }
        ),
    });

    if (!response.ok) {
        throw new Error('Error al enviar los datos');
    }

    return { success: true };
}
