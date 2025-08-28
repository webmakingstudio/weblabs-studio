const fs = require('fs');
const path = require('path');

// Script para convertir SVG a PNG/JPG
// Necesitas instalar: npm install -g svgexport

console.log('🎨 Convirtiendo imágenes SVG a PNG/JPG...');

const images = [
  {
    input: 'public/og-image.svg',
    output: 'public/og-image.jpg',
    width: 1200,
    height: 630
  },
  {
    input: 'public/og-precios.svg',
    output: 'public/og-precios.jpg',
    width: 1200,
    height: 630
  },
  {
    input: 'public/og-mobile.svg',
    output: 'public/og-mobile.jpg',
    width: 750,
    height: 1334
  }
];

// Verificar si svgexport está instalado
const { execSync } = require('child_process');

function convertSVGToJPG(input, output, width, height) {
  try {
    const command = `svgexport "${input}" "${output}" ${width}:${height}`;
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ Convertido: ${input} → ${output}`);
  } catch (error) {
    console.log(`❌ Error convirtiendo ${input}: ${error.message}`);
    console.log('💡 Instala svgexport: npm install -g svgexport');
  }
}

// Convertir todas las imágenes
images.forEach(img => {
  if (fs.existsSync(img.input)) {
    convertSVGToJPG(img.input, img.output, img.width, img.height);
  } else {
    console.log(`⚠️  Archivo no encontrado: ${img.input}`);
  }
});

console.log('\n🎯 Próximos pasos:');
console.log('1. Instala svgexport: npm install -g svgexport');
console.log('2. Ejecuta: node scripts/convert-images.js');
console.log('3. Las imágenes se convertirán automáticamente');
console.log('4. Usa las imágenes .jpg en tus metadatos Open Graph');
