import type { Metadata } from "next";
import { Inter, Oswald, Space_Grotesk } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import NeuralNetworkBackground from "@/components/ui/NeuralNetworkBackground";
import Script from "next/script";
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
    default: "RSYNAPSEAI | Transformamos Negocios con Inteligencia Artificial",
    template: "%s | RSYNAPSEAI - Consultoría en IA"
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
    "rsynapseai",
    "Rodolfo Figueroa",
    "consultoría tecnológica",
    "soluciones IA personalizadas"
  ],
  authors: [{ name: "rsynapseai", url: "https://rsynapseai.com" }],
  creator: "rsynapseai",
  publisher: "rsynapseai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rsynapseai.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://rsynapseai.com",
    title: "rsynapseai | Transformamos Negocios con Inteligencia Artificial",
    description: "Consultoría especializada en IA. Desarrollamos soluciones de inteligencia artificial para automatización, machine learning y transformación digital empresarial.",
    siteName: "rsynapseai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "rsynapseai - Consultoría en Inteligencia Artificial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "rsynapseai | Transformamos Negocios con IA",
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
    google: "08BJSr2OwH0HyaxlJQRJ-qLlzPwj-aHpaKde75APqLI",
    yandex: "your-yandex-verification-code",
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "rsynapseai",
  "alternateName": "rsynapseai",
  "url": "https://rsynapseai.com",
  "logo": "https://rsynapseai.com/logo.png",
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
    "email": "info@rsynapseai.com",
    "availableLanguage": "Spanish"
  },
  "sameAs": [
    "https://linkedin.com/company/rsynapseai",
    "https://twitter.com/rsynapseai"
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
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        
        <NeuralNetworkBackground />
        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
