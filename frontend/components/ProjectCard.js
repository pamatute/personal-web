import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`} className="text-blue-500 hover:text-blue-700">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;