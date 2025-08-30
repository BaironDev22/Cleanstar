# 📸 Guía de Manejo de Imágenes - Cleanstar Detailing

## Estructura de Carpetas

```
src/assets/images/
├── hero/              # Imágenes principales del hero
├── services/          # Imágenes de cada servicio
├── gallery/           # Galería de trabajos realizados
└── testimonials/      # Fotos de clientes (con autorización)
```

## Formatos Recomendados

### ✅ **Formatos Soportados (en orden de preferencia):**
1. **WebP** - Mejor compresión y calidad (recomendado)
2. **AVIF** - Excelente para navegadores modernos
3. **JPEG** - Fallback universal
4. **PNG** - Solo para imágenes con transparencia

### 📏 **Tamaños Recomendados:**

| Uso | Ancho | Alto | Ratio |
|-----|-------|------|-------|
| Hero Principal | 1920px | 1080px | 16:9 |
| Galería | 800px | 600px | 4:3 |
| Servicios | 600px | 400px | 3:2 |
| Testimoniales | 400px | 400px | 1:1 |
| Móvil Hero | 800px | 600px | 4:3 |

## Cómo Agregar Imágenes

### 1. **Agregar Archivos Físicos:**
```bash
# Copia tus archivos .webp a las carpetas correspondientes
src/assets/images/gallery/mi-trabajo-1.webp
src/assets/images/services/detailing-exterior.webp
src/assets/images/hero/hero-principal.webp
```

### 2. **Configurar en imageConfig.ts:**
```typescript
export const galleryImages: ImageData[] = [
  {
    src: '../assets/images/gallery/mi-trabajo-1.webp',
    alt: 'Descripción del trabajo realizado',
    title: 'Título del Trabajo',
    category: 'detailing', // detailing | ceramico | interior | exterior | premium
    description: 'Descripción detallada del servicio realizado',
    featured: true // Si quieres destacar esta imagen
  },
  // ... más imágenes
];
```

### 3. **Usar en Componentes:**
```astro
---
import OptimizedImage from '../components/OptimizedImage.astro';
import { galleryImages } from '../utils/imageConfig';
---

<!-- Imagen individual -->
<OptimizedImage
  src="../assets/images/hero/mi-imagen.webp"
  alt="Descripción de la imagen"
  width={800}
  height={600}
  class="mi-clase-css"
/>

<!-- Galería completa -->
<Gallery images={galleryImages} title="Mis Trabajos" />
```

## Optimización Automática

### ✅ **Características Incluidas:**
- **Lazy Loading** - Carga solo cuando sea necesario
- **Responsive Images** - Se adapta a diferentes pantallas  
- **Format Conversion** - Convierte automáticamente a WebP
- **Compression** - Reduce el tamaño sin perder calidad
- **Progressive Loading** - Carga progresiva con blur
- **SEO Optimized** - Alt text y metadata correctos

### 🎯 **Beneficios:**
- **⚡ Carga más rápida** - Hasta 70% menos peso
- **📱 Mobile-friendly** - Optimizado para móviles
- **🔍 SEO mejorado** - Mejor posicionamiento
- **💰 Menos ancho de banda** - Ahorro en hosting

## Convención de Nombres

### 📝 **Estructura recomendada:**
```
hero-principal.webp
detailing-bmw-serie3.webp
ceramico-mercedes-clase-c.webp
interior-audi-a4.webp
exterior-toyota-camry.webp
testimonio-cliente-juan.webp
```

### 🏷️ **Categorías:**
- `detailing` - Trabajos completos de detailing
- `ceramico` - Tratamientos cerámicos específicos
- `interior` - Trabajos de interior
- `exterior` - Trabajos de exterior
- `premium` - Servicios premium destacados

## Herramientas de Conversión

### 🛠️ **Para convertir a WebP:**

**Online:**
- [Squoosh.app](https://squoosh.app/) (Google)
- [CloudConvert](https://cloudconvert.com/)

**Desktop:**
- **Photoshop** - Exportar como WebP
- **GIMP** - Plugin WebP
- **ImageOptim** (Mac)

**Línea de comandos:**
```bash
# Convertir JPEG/PNG a WebP
cwebp input.jpg -q 80 -o output.webp

# Conversión masiva
for file in *.jpg; do cwebp "$file" -q 80 -o "${file%.*}.webp"; done
```

## Lista de Verificación

### ✅ **Antes de subir imágenes:**
- [ ] Formato WebP preferentemente
- [ ] Tamaño optimizado según tabla
- [ ] Nombres descriptivos y consistentes
- [ ] Alt text descriptivo y útil
- [ ] Categoría correcta asignada
- [ ] Compresión aplicada (calidad 80-90%)
- [ ] Agregado a imageConfig.ts

### ✅ **Después de agregar:**
- [ ] Verificar carga en desarrollo
- [ ] Probar responsive en móvil
- [ ] Confirmar lazy loading funcionando
- [ ] Revisar SEO con alt text
- [ ] Validar rendimiento con DevTools

## Troubleshooting

### ❌ **Problemas Comunes:**

**Imagen no carga:**
- Verificar ruta en imageConfig.ts
- Confirmar que archivo existe
- Revisar permisos de carpeta

**Carga lenta:**
- Reducir tamaño de archivo
- Usar format WebP
- Implementar lazy loading

**No se ve en móvil:**
- Verificar responsive CSS
- Ajustar tamaños para móvil
- Probar en DevTools

## Contacto

Para dudas sobre manejo de imágenes:
- 📧 Contactar al desarrollador
- 📖 Revisar documentación de Astro
- 🔍 Buscar en issues del proyecto
