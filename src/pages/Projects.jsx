import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-block px-4 py-2 rounded-full mb-4"
                        style={{ backgroundColor: 'var(--bg-tertiary)' }}
                    >
                        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                            🚀 Featured Work
                        </span>
                    </motion.span>

                    <h2 className="section-title">
                        My <span className="gradient-text">Projects</span>
                    </h2>

                    <p className="section-subtitle mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        Real-world data engineering and analytics projects that have delivered
                        measurable business impact for enterprise clients.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { label: 'Projects Delivered', value: '3+', icon: '🎯' },
                        { label: 'Enterprise Clients', value: '3', icon: '🏢' },
                        { label: 'Technologies Used', value: '10+', icon: '🛠️' },
                        { label: 'Years Experience', value: '2+', icon: '📈' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card rounded-2xl p-6 text-center"
                        >
                            <span className="text-3xl mb-2 block">{stat.icon}</span>
                            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
