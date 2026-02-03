import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SkillCard = ({ skill, index }) => {
    return (
        <Link to={`/skills/${skill.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="card rounded-xl sm:rounded-2xl p-4 sm:p-6 cursor-pointer group"
            >
                <div className="flex items-start gap-3 sm:gap-4">
                    <div
                        className={`skill-icon ${skill.bgColor} group-hover:scale-110 transition-transform duration-300 w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0`}
                    >
                        <span className="text-xl sm:text-2xl">{skill.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3
                            className="text-base sm:text-lg font-semibold mb-1 group-hover:gradient-text transition-all duration-300"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            {skill.name}
                        </h3>
                        <p
                            className="text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            {skill.description}
                        </p>

                        {/* Proficiency Bar */}
                        <div className="relative h-1.5 sm:h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                            <motion.div
                                className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.proficiency}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                            />
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="text-[10px] sm:text-xs" style={{ color: 'var(--text-muted)' }}>Proficiency</span>
                            <span className="text-[10px] sm:text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                                {skill.proficiency}%
                            </span>
                        </div>
                    </div>
                </div>

                {/* Hover Arrow */}
                <motion.div
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                >
                    <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        style={{ color: 'var(--gradient-start)' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </motion.div>
            </motion.div>
        </Link>
    );
};

export default SkillCard;

