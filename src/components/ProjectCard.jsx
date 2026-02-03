import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
    return (
        <Link to={`/projects/${project.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="card rounded-2xl overflow-hidden cursor-pointer group h-full"
            >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                <div className="p-6">
                    {/* Client Badge */}
                    <div
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                        style={{
                            backgroundColor: 'var(--bg-tertiary)',
                            color: 'var(--text-secondary)',
                        }}
                    >
                        {project.client}
                    </div>

                    {/* Title */}
                    <h3
                        className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        {project.title}
                    </h3>

                    {/* Short Description */}
                    <p
                        className="text-sm mb-4 line-clamp-2"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        {project.shortDescription}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                        <span className="text-xs font-medium mb-2 block" style={{ color: 'var(--text-muted)' }}>
                            Skills
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2 py-1 rounded-md text-xs font-medium"
                                    style={{
                                        background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))`,
                                        color: 'white',
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div>
                        <span className="text-xs font-medium mb-2 block" style={{ color: 'var(--text-muted)' }}>
                            Tools
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="px-2 py-1 rounded-md text-xs"
                                    style={{
                                        backgroundColor: 'var(--bg-tertiary)',
                                        color: 'var(--text-secondary)',
                                    }}
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* View Details Arrow */}
                    <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span
                            className="text-sm font-medium"
                            style={{ color: 'var(--gradient-start)' }}
                        >
                            View Details
                        </span>
                        <motion.svg
                            className="w-4 h-4"
                            style={{ color: 'var(--gradient-start)' }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </motion.svg>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default ProjectCard;
