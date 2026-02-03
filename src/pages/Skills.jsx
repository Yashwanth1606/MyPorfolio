import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import SkillCard from '../components/SkillCard';

const Skills = () => {
    return (
        <section className="py-20 px-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
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
                            💡 Technical Expertise
                        </span>
                    </motion.span>

                    <h2 className="section-title">
                        My <span className="gradient-text">Skills</span>
                    </h2>

                    <p className="section-subtitle mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        A comprehensive toolkit of technologies and frameworks that I use to transform
                        data into actionable insights and build scalable solutions.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.id} skill={skill} index={index} />
                    ))}
                </div>

                {/* Bottom Decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        Click on any skill to see related projects
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
