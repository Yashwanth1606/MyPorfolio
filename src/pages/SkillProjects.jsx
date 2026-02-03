import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { skills } from '../data/skills';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const SkillProjects = () => {
    const { skillId } = useParams();
    const skill = skills.find((s) => s.id === skillId);

    // Filter projects that include this skill
    const filteredProjects = projects.filter((project) =>
        project.skills.some(
            (s) => s.toLowerCase().replace(/\s+/g, '-') === skillId ||
                s.toLowerCase() === skill?.name.toLowerCase()
        )
    );

    if (!skill) {
        return (
            <section className="min-h-screen pt-24 pb-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-4">Skill not found</h1>
                    <Link to="/skills" className="btn-primary">
                        Back to Skills
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen pt-24 pb-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link
                        to="/skills"
                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Skills
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className={`skill-icon ${skill.bgColor} text-3xl`}>
                            {skill.icon}
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold">
                                <span className="gradient-text">{skill.name}</span> Projects
                            </h1>
                            <p className="mt-1" style={{ color: 'var(--text-secondary)' }}>
                                {skill.description}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <div className="text-6xl mb-4">🔍</div>
                        <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                            No projects found
                        </h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            There are no projects currently listed for this skill.
                        </p>
                        <Link to="/projects" className="btn-primary mt-6 inline-flex">
                            View All Projects
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default SkillProjects;
