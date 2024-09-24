/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Agrega los dominios de las imágenes que uses
  },
  // Puedes agregar más configuraciones según sea necesario
}

module.exports = nextConfig