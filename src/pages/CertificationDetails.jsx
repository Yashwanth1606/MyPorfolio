import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { certifications } from '../data/certifications';

const CertificationDetails = () => {
    const { certId } = useParams();
    const navigate = useNavigate();
    const certification = certifications.find((c) => c.id === certId);

    const handleBackToCertifications = () => {
        navigate('/');
        // Wait for navigation then scroll to certifications section
        setTimeout(() => {
            const element = document.getElementById('certifications');
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

    const handleViewPdf = () => {
        // Use import.meta.env.BASE_URL to handle the base path correctly
        const basePath = import.meta.env.BASE_URL || '/';
        const pdfUrl = `${basePath}${certification.pdfPath.replace(/^\//, '')}`;
        window.open(pdfUrl, '_blank');
    };

    if (!certification) {
        return (
            <section className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-4">Certification not found</h1>
                    <button onClick={handleBackToCertifications} className="btn-primary">
                        Back to Certifications
                    </button>
                </div>
            </section>
        );
    }

    const basePath = import.meta.env.BASE_URL || '/';
    const pdfUrl = `${basePath}${certification.pdfPath.replace(/^\//, '')}`;

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
                        onClick={handleBackToCertifications}
                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Certifications
                    </button>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="card rounded-xl sm:rounded-2xl p-6 sm:p-8">
                        {/* Gradient Header */}
                        <div className={`h-2 rounded-t-xl sm:rounded-t-2xl bg-gradient-to-r ${certification.color} -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 sm:mb-8`} />

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                            <div className={`skill-icon ${certification.bgColor} text-2xl sm:text-3xl w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0`}>
                                {certification.icon}
                            </div>
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                                    <span className="gradient-text">{certification.title}</span>
                                </h1>
                                <div
                                    className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                                    style={{
                                        backgroundColor: 'var(--bg-tertiary)',
                                        color: 'var(--text-secondary)',
                                    }}
                                >
                                    {certification.skillCategory}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <motion.button
                                onClick={handleViewPdf}
                                className="btn-primary"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                View PDF
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* PDF Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="card rounded-xl sm:rounded-2xl overflow-hidden"
                >
                    <div
                        className="p-4 border-b"
                        style={{ borderColor: 'var(--border-color)' }}
                    >
                        <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                            Certificate Preview
                        </h2>
                    </div>
                    <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                        <iframe
                            src={`${pdfUrl}#view=FitH`}
                            title={certification.title}
                            className="absolute inset-0 w-full h-full"
                            style={{
                                backgroundColor: 'var(--bg-tertiary)',
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CertificationDetails;
