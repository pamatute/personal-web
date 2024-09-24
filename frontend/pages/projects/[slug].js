import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Project({ project }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Cargando...</div>;
  }

  return (
    <Layout title={`${project.title} - Proyectos`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <div className="prose lg:prose-xl">
          <div dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Tecnologías utilizadas:</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Aquí iría la lógica para obtener todos los slugs de los proyectos
  // Por ahora, usaremos datos de ejemplo
  const paths = [
    { params: { slug: 'campana-marketing-digital' } },
    { params: { slug: 'analisis-datos-cliente' } },
  ];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // Aquí iría la lógica para obtener los datos del proyecto basado en el slug
  // Por ahora, usaremos datos de ejemplo
  const project = {
    title: 'Campaña de Marketing Digital',
    image: '/images/project-1.jpg',
    description: '<p>Descripción detallada del proyecto de campaña de marketing digital...</p>',
    technologies: ['Google Ads', 'Facebook Ads', 'Analytics'],
  };

  return {
    props: { project },
    revalidate: 60, // Revalidar cada minuto
  };
}