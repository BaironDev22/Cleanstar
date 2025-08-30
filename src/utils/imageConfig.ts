// Configuración de imágenes para Cleanstar Detailing
// Aquí defines todas las rutas y metadatos de tus imágenes

export interface ImageData {
  src: string;
  alt: string;
  title: string;
  category: 'detailing' | 'ceramico' | 'interior' | 'exterior' | 'premium';
  description?: string;
  featured?: boolean;
}

// Imágenes del Hero
export const heroImages: ImageData[] = [
  {
    src: '../assets/images/hero/hero-1.webp',
    alt: 'Auto deportivo con tratamiento cerámico brillante',
    title: 'Detailing Premium',
    category: 'premium',
    description: 'Resultado de nuestro servicio premium con protección cerámica',
    featured: true
  },
  // Agregar más imágenes del hero aquí
];

// Imágenes de servicios
export const serviceImages: ImageData[] = [
  {
    src: '../assets/images/services/detailing-exterior.webp',
    alt: 'Lavado y encerado exterior profesional',
    title: 'Detailing Exterior',
    category: 'exterior',
    description: 'Lavado profundo, descontaminación y encerado premium'
  },
  {
    src: '../assets/images/services/detailing-interior.webp',
    alt: 'Limpieza profunda de interior automotriz',
    title: 'Detailing Interior',
    category: 'interior',
    description: 'Limpieza y protección completa del interior'
  },
  {
    src: '../assets/images/services/tratamiento-ceramico.webp',
    alt: 'Aplicación de coating cerámico en pintura',
    title: 'Tratamiento Cerámico',
    category: 'ceramico',
    description: 'Protección duradera con coating cerámico de alta calidad'
  },
  // Agregar más imágenes de servicios aquí
];

// Imágenes de la galería principal
export const galleryImages: ImageData[] = [
  {
    src: '../assets/images/gallery/trabajo-1.webp',
    alt: 'BMW Serie 3 después del detailing completo',
    title: 'BMW Serie 3 - Detailing Completo',
    category: 'detailing',
    description: 'Transformación completa con lavado profundo y encerado premium'
  },
  {
    src: '../assets/images/gallery/trabajo-2.webp',
    alt: 'Mercedes-Benz con tratamiento cerámico aplicado',
    title: 'Mercedes-Benz - Coating Cerámico',
    category: 'ceramico',
    description: 'Protección cerámica de 3 años aplicada exitosamente'
  },
  {
    src: '../assets/images/gallery/trabajo-3.webp',
    alt: 'Interior de Audi limpio y protegido',
    title: 'Audi A4 - Interior Premium',
    category: 'interior',
    description: 'Limpieza profunda y protección de cueros y plásticos'
  },
  // Agregar más imágenes de trabajos aquí
];

// Imágenes de testimonios (fotos de clientes si tienen autorización)
export const testimonialImages: ImageData[] = [
  {
    src: '../assets/images/testimonials/cliente-1.webp',
    alt: 'Cliente satisfecho con el servicio',
    title: 'Cliente Satisfecho',
    category: 'detailing',
    description: 'Cliente con su vehículo después del servicio'
  },
  // Agregar más imágenes de testimonios aquí
];

// Función helper para obtener imágenes por categoría
export function getImagesByCategory(category: string, images: ImageData[] = galleryImages): ImageData[] {
  return images.filter(img => img.category === category);
}

// Función helper para obtener imágenes destacadas
export function getFeaturedImages(images: ImageData[] = galleryImages): ImageData[] {
  return images.filter(img => img.featured);
}

// Función helper para obtener imagen aleatoria
export function getRandomImage(images: ImageData[] = galleryImages): ImageData | null {
  return images.length > 0 ? images[Math.floor(Math.random() * images.length)] : null;
}
