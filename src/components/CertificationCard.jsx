import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CertificationCard = ({ certification, index }) => {
    return (
        <Link to={`/certifications/${certification.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="card rounded-xl sm:rounded-2xl p-4 sm:p-6 cursor-pointer group h-full"
            >
                {/* Gradient Header */}
                <div className={`h-2 rounded-t-xl sm:rounded-t-2xl bg-gradient-to-r ${certification.color} -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 mb-4 sm:mb-6`} />

                <div className="flex items-start gap-3 sm:gap-4">
                    <div
                        className={`skill-icon ${certification.bgColor} group-hover:scale-110 transition-transform duration-300 w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0`}
                    >
                        <span className="text-xl sm:text-2xl">{certification.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3
                            className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 group-hover:gradient-text transition-all duration-300 line-clamp-2"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            {certification.title}
                        </h3>
                        <div
                            className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium"
                            style={{
                                backgroundColor: 'var(--bg-tertiary)',
                                color: 'var(--text-secondary)',
                            }}
                        >
                            {certification.skillCategory}
                        </div>
                    </div>
                </div>

                {/* View Details Arrow */}
                <motion.div
                    className="mt-3 sm:mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex"
                >
                    <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--gradient-start)' }}
                    >
                        View Certificate
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
                </motion.div>
            </motion.div>
        </Link>
    );
};

export default CertificationCard;
