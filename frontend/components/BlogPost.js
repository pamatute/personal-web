import Link from 'next/link';

const BlogPost = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.date}</p>
        <p className="text-gray-700 mb-4">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:text-blue-700">
          Leer más
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;