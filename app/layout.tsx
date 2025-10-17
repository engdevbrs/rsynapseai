import type { Metadata } from "next";
import { Inter, Oswald, Space_Grotesk } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import "./globals.css";

// Configuración de fuentes optimizadas
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Synapse.ia | Transformamos Negocios con Inteligencia Artificial",
    template: "%s | Synapse.ia - Consultoría en IA"
  },
  description: "Consultora especializada en inteligencia artificial. Desarrollamos e integramos soluciones de IA para automatización, machine learning, chatbots y desarrollo de software. Transformamos tu negocio con tecnología avanzada.",
  keywords: [
    "inteligencia artificial",
    "IA",
    "consultoría IA",
    "automatización empresarial",
    "machine learning",
    "desarrollo software",
    "chatbots",
    "asistentes virtuales",
    "análisis predictivo",
    "transformación digital",
    "Synapse.ia",
    "Rodolfo Figueroa",
    "consultoría tecnológica",
    "soluciones IA personalizadas"
  ],
  authors: [{ name: "Synapse.ia", url: "https://synapse.ia" }],
  creator: "Synapse.ia",
  publisher: "Synapse.ia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://synapse.ia"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://synapse.ia",
    title: "Synapse.ia | Transformamos Negocios con Inteligencia Artificial",
    description: "Consultoría especializada en IA. Desarrollamos soluciones de inteligencia artificial para automatización, machine learning y transformación digital empresarial.",
    siteName: "Synapse.ia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Synapse.ia - Consultoría en Inteligencia Artificial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synapse.ia | Transformamos Negocios con IA",
    description: "Consultoría especializada en inteligencia artificial para empresas. Automatización, machine learning y desarrollo de software.",
    images: ["/og-image.jpg"],
    creator: "@synapse_ia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Synapse.ia",
  "alternateName": "Synapse IA",
  "url": "https://synapse.ia",
  "logo": "https://synapse.ia/logo.png",
  "description": "Consultora especializada en inteligencia artificial. Desarrollamos e integramos soluciones de IA para automatización, machine learning y transformación digital empresarial.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Rodolfo Figueroa",
    "jobTitle": "CEO",
    "description": "Ingeniero en Informática con Magíster en Inteligencia Artificial. Más de 10 años de experiencia en tecnología."
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Anywhere ST.",
    "addressLocality": "Any City",
    "addressRegion": "ST",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+123-456-7890",
    "contactType": "customer service",
    "email": "info@synapse.ia",
    "availableLanguage": "Spanish"
  },
  "sameAs": [
    "https://linkedin.com/company/synapse-ia",
    "https://twitter.com/synapse_ia"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "Consultoría en Inteligencia Artificial",
      "description": "Asesoramos a las empresas en la implementación efectiva de inteligencia artificial aplicada al negocio."
    },
    {
      "@type": "Service", 
      "name": "Automatización de Procesos",
      "description": "Automatizamos procesos empresariales mediante algoritmos de machine learning y análisis predictivo."
    },
    {
      "@type": "Service",
      "name": "Desarrollo de Software a Medida",
      "description": "Creamos aplicaciones y sistemas personalizados que se integran perfectamente en la infraestructura empresarial."
    },
    {
      "@type": "Service",
      "name": "Chatbots y Asistentes Virtuales",
      "description": "Diseño y desarrollo de soluciones conversacionales automatizadas para mejorar la atención al cliente."
    }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Global"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${oswald.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
