

import type { Metadata, Viewport } from "next";
import { GTM, GTMNoScript } from '@/components/GTM';
import CookieBanner from '@/components/CookieBanner';
import ParticiparProvider from '@/context/ParticiparProvider'


import NavComponent from "@/components/nav/NavMain"
import LogoCompanaComponent from "@/components/elements/LogoCampana"
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import "@/styles/scss/global.scss";

const misti = localFont({
    src: [
        { path: "../../../public/fonts/MistiFont-Black.woff2", weight: "900", style: "black" },
        { path: "../../../public/fonts/MistiFont-BlackItalic.woff2", weight: "900", style: "italic" },
        { path: "../../../public/fonts/MistiFont-Bold.woff2", weight: "700", style: "bold" },
        { path: "../../../public/fonts/MistiFont-BoldItalic.woff2", weight: "700", style: "italic" },
        { path: "../../../public/fonts/MistiFont-Light.woff2", weight: "300", style: "light" },
        { path: "../../../public/fonts/MistiFont-LightItalic.woff2", weight: "300", style: "italic" },
        { path: "../../../public/fonts/MistiFont-Medium.woff2", weight: "500", style: "medium" },
        { path: "../../../public/fonts/MistiFont-MediumItalic.woff2", weight: "500", style: "italic" },
        { path: "../../../public/fonts/MistiFont-Regular.woff2", weight: "400", style: "normal" },
        { path: "../../../public/fonts/MistiFont-RegularItalic.woff2", weight: "400", style: "italic" },
    ],
    variable: "--fuente-misti",
    display: "swap",
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: "Gloria Paga tus Vacaciones",
    description: "Este es el sitio Web de Gloria",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={`${misti.variable}`}>
            <head />
            <body>
                <GTM />
                <GTMNoScript />
                <ParticiparProvider>
                    <div className="bgCielo">
                        <div className='container'>
                            <NavComponent />
                        </div>
                    </div>
                    <div className='bgContenido'>
                        <div className='curvaSuperior'></div>
                        <div className='container'>
                            <div className='containerRelative'>
                                <LogoCompanaComponent />
                                {children}
                            </div>
                        </div>
                    </div>
                </ParticiparProvider>
                <CookieBanner />
            </body>
        </html>
    );
}
