import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Cargando...</div>;
  }

  return (
    <Layout title={`${post.title} - Blog`}>
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <p className="text-gray-600">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Aquí iría la lógica para obtener todos los slugs de los posts
  // Por ahora, usaremos datos de ejemplo
  const paths = [
    { params: { slug: 'estrategias-growth-hacking' } },
    { params: { slug: 'optimizacion-conversion' } },
  ];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // Aquí iría la lógica para obtener los datos del post basado en el slug
  // Por ahora, usaremos datos de ejemplo
  const post = {
    title: 'Estrategias de Growth Hacking',
    date: '2023-05-01',
    content: '<p>Contenido del artículo sobre estrategias de growth hacking...</p>',
  };

  return {
    props: { post },
    revalidate: 60, // Revalidar cada minuto
  };
}