import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
    const highlights = [
        {
            icon: '🎓',
            title: 'Education',
            description: 'Computer Science Engineering background with strong analytical foundation',
        },
        {
            icon: '💼',
            title: 'Experience',
            description: '2+ years as a Data Analyst working with enterprise clients',
        },
        {
            icon: '🚀',
            title: 'Impact',
            description: 'Delivered multiple high-impact BI and data engineering projects',
        },
        {
            icon: '🎯',
            title: 'Focus',
            description: 'Transforming complex data into actionable business insights',
        },
    ];

    const tools = [
        'Python', 'SQL', 'PySpark', 'Power BI', 'Microsoft Fabric', 'Azure',
        'Databricks', 'DBeaver', 'SSMS', 'Report Builder', 'Jira', 'Git',
    ];



    return (
        <section className="py-12 sm:py-20 px-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
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
                            👨‍💻 Get to know me
                        </span>
                    </motion.span>

                    <h2 className="section-title">
                        About <span className="gradient-text">Me</span>
                    </h2>

                    <p className="section-subtitle mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        A passionate Data Analyst dedicated to transforming raw data into meaningful
                        insights that drive business decisions.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-16">
                    {/* Left - About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="card rounded-xl sm:rounded-2xl p-6 sm:p-8">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                                Hi, I'm <span className="gradient-text">Yashwanth U</span>
                            </h3>

                            <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                                <p>
                                    I'm a <strong style={{ color: 'var(--text-primary)' }}>Computer Science Engineer</strong> with
                                    over <strong style={{ color: 'var(--text-primary)' }}>2 years of experience</strong> as a
                                    Data Analyst. My expertise lies in building robust data pipelines, creating impactful
                                    visualizations, and implementing enterprise-grade BI solutions.
                                </p>

                                <p>
                                    Throughout my career, I've had the privilege of working with leading organizations
                                    including <strong style={{ color: 'var(--text-primary)' }}>Bajaj Life Insurance</strong>,
                                    <strong style={{ color: 'var(--text-primary)' }}> Renaissance Global Limited</strong>, and
                                    <strong style={{ color: 'var(--text-primary)' }}> Wonder Cement Ltd</strong>, delivering
                                    solutions that have streamlined their data operations and enhanced decision-making capabilities.
                                </p>

                                <p>
                                    I specialize in the Microsoft data ecosystem, with deep expertise in
                                    <strong style={{ color: 'var(--text-primary)' }}> Power BI</strong>,
                                    <strong style={{ color: 'var(--text-primary)' }}> Microsoft Fabric</strong>, and
                                    <strong style={{ color: 'var(--text-primary)' }}> Azure</strong>. My technical toolkit also
                                    includes Python, SQL, PySpark, and modern data architecture patterns like the
                                    Medallion Architecture.
                                </p>
                            </div>

                            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                                <a
                                    href="./Yashwanth_U_CV.pdf"
                                    download="Yashwanth_U_CV.pdf"
                                    className="btn-primary"
                                >
                                    Download CV
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/yashwanthu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all hover:scale-105 text-center"
                                    style={{
                                        backgroundColor: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                >
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 gap-3 sm:gap-4"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="card rounded-xl sm:rounded-2xl p-4 sm:p-6"
                            >
                                <span className="text-2xl sm:text-3xl mb-2 sm:mb-3 block">{item.icon}</span>
                                <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>
                                    {item.title}
                                </h4>
                                <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Tools & Technologies */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 sm:mb-16"
                >
                    <div className="card rounded-xl sm:rounded-2xl p-6 sm:p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">
                            <span className="gradient-text">Tools & Technologies</span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {tools.map((tool, index) => (
                                <motion.span
                                    key={tool}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="px-4 py-2 rounded-lg text-sm font-medium cursor-default"
                                    style={{
                                        backgroundColor: 'var(--bg-tertiary)',
                                        color: 'var(--text-primary)',
                                    }}
                                >
                                    {tool}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>



                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 sm:mt-16 text-center"
                >
                    <div className="card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                            Let's <span className="gradient-text">Connect</span>
                        </h3>
                        <p className="mb-6 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            I'm always open to discussing new opportunities, interesting projects,
                            or just having a conversation about data and technology.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                            <a
                                href="https://www.linkedin.com/in/yashwanthu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                Connect on LinkedIn
                            </a>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText('yashwanthu702@gmail.com');
                                    alert('Email copied to clipboard!');
                                }}
                                className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto"
                                style={{
                                    backgroundColor: 'var(--bg-tertiary)',
                                    color: 'var(--text-primary)',
                                }}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Copy Email
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default About;
