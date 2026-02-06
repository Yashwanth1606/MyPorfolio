import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import CertificationCard from '../components/CertificationCard';

const Certifications = () => {
    return (
        <section className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h2 className="section-title">
                        My <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Professional certifications and courses that validate my skills and continuous learning journey.
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {certifications.map((certification, index) => (
                        <CertificationCard
                            key={certification.id}
                            certification={certification}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
