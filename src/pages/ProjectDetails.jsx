import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === projectId);

    const handleBackToProjects = () => {
        navigate('/');
        // Wait for navigation then scroll to projects section
        setTimeout(() => {
            const element = document.getElementById('projects');
            if (element) {
                const navHeight = 80;
                const elementPosition = element.offsetTop - navHeight;
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    if (!project) {
        return (
            <section className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="text-6xl mb-4">🔍</div>
                    <h1 className="text-3xl font-bold mb-4">Project not found</h1>
                    <button onClick={handleBackToProjects} className="btn-primary">
                        Back to Projects
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-6 sm:mb-8"
                >
                    <button
                        onClick={handleBackToProjects}
                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Projects
                    </button>
                </motion.div>

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="card rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8"
                >
                    {/* Gradient Banner */}
                    <div className={`h-4 bg-gradient-to-r ${project.color}`} />

                    <div className="p-5 sm:p-8">
                        {/* Client Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4"
                            style={{
                                backgroundColor: 'var(--bg-tertiary)',
                                color: 'var(--text-secondary)',
                            }}
                        >
                            🏢 {project.client}
                        </motion.div>

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                            <span className="gradient-text">{project.title}</span>
                        </h1>

                        {/* Skills & Tools */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                            {/* Skills */}
                            <div>
                                <h3
                                    className="text-sm font-semibold uppercase tracking-wider mb-3"
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    Skills Used
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 rounded-lg text-sm font-medium"
                                            style={{
                                                background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
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
                                <h3
                                    className="text-sm font-semibold uppercase tracking-wider mb-3"
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    Tools & Platforms
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="px-3 py-1.5 rounded-lg text-sm"
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
                        </div>
                    </div>
                </motion.div>

                {/* Project Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="card rounded-xl sm:rounded-2xl p-5 sm:p-8"
                >
                    <h2
                        className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        <span className="text-xl sm:text-2xl">📋</span>
                        Project Overview
                    </h2>

                    <ul className="space-y-4">
                        {project.description.map((point, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="flex items-start gap-3"
                            >
                                <span
                                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                                    style={{
                                        background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                                        color: 'white',
                                    }}
                                >
                                    {index + 1}
                                </span>
                                <span
                                    className="text-base leading-relaxed"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {point}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Navigation to Other Projects */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 sm:mt-12 text-center"
                >
                    <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                        Explore more of my work
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {projects
                            .filter((p) => p.id !== project.id)
                            .map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/projects/${p.id}`}
                                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                                    style={{
                                        backgroundColor: 'var(--bg-tertiary)',
                                        color: 'var(--text-secondary)',
                                    }}
                                >
                                    {p.title}
                                </Link>
                            ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectDetails;
