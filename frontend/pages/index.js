import Layout from '../components/Layout';
import BlogPost from '../components/BlogPost';
import ProjectCard from '../components/ProjectCard';

export default function Home({ recentPosts, featuredProjects }) {
  return (
    <Layout title="Inicio - Mi Sitio Web Personal">
      <div className="space-y-12">
        <section>
          <h1 className="text-4xl font-bold mb-6">Bienvenido a Mi Sitio Web Personal</h1>
          <p className="text-xl">Soy un experto en marketing, growth y consultoría. Explora mis proyectos y artículos para aprender más sobre estrategias de crecimiento y marketing digital.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Artículos Recientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Aquí iría la lógica para obtener los posts recientes y proyectos destacados
  // Por ahora, usaremos datos de ejemplo
  const recentPosts = [
    { id: 1, title: 'Estrategias de Growth Hacking', date: '2023-05-01', excerpt: 'Descubre las últimas estrategias...', slug: 'estrategias-growth-hacking' },
    { id: 2, title: 'Optimización de Conversión', date: '2023-04-15', excerpt: 'Aprende a mejorar tus tasas de...', slug: 'optimizacion-conversion' },
  ];

  const featuredProjects = [
    { id: 1, title: 'Campaña de Marketing Digital', description: 'Estrategia completa para...', tags: ['Marketing', 'Digital'], slug: 'campana-marketing-digital' },
    { id: 2, title: 'Análisis de Datos de Cliente', description: 'Proyecto de análisis profundo...', tags: ['Análisis', 'Datos'], slug: 'analisis-datos-cliente' },
  ];

  return {
    props: {
      recentPosts,
      featuredProjects,
    },
  };
}