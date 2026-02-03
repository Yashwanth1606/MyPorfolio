import { motion } from 'framer-motion';
import { useState } from 'react';

const Home = () => {
    const [emailCopied, setEmailCopied] = useState(false);
    const [phoneCopied, setPhoneCopied] = useState(false);

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === 'email') {
            setEmailCopied(true);
            setTimeout(() => setEmailCopied(false), 2000);
        } else {
            setPhoneCopied(true);
            setTimeout(() => setPhoneCopied(false), 2000);
        }
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            href: 'https://www.linkedin.com/in/yashwanthu/',
            action: 'link',
        },
        {
            name: 'Email',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            value: 'yashwanthu702@gmail.com',
            action: 'copy',
            type: 'email',
        },
        {
            name: 'Phone',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            value: '+917760892102',
            action: 'copy',
            type: 'phone',
        },
    ];

    return (
        <section className="min-h-[100vh] flex items-center pt-20 pb-12 px-4">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1"
                    >
                        {/* Greeting */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 rounded-full mb-6"
                            style={{ backgroundColor: 'var(--bg-tertiary)' }}
                        >
                            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                👋 Welcome to my portfolio
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
                        >
                            Hi, I'm{' '}
                            <span className="gradient-text whitespace-nowrap">Yashwanth U</span>
                        </motion.h1>

                        {/* Role */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl sm:text-2xl font-semibold mb-6"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            Data Analyst & BI Developer
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-base sm:text-lg mb-8 max-w-xl"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            Computer Science Engineer with 2 years of experience as a Data Analyst.
                            Skilled in Python, SQL, PySpark, Power BI, Microsoft Fabric, and Azure.
                            Passionate about transforming raw data into actionable insights and building
                            scalable data solutions.
                        </motion.p>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-3 mb-8"
                        >
                            {socialLinks.map((link) => (
                                <motion.button
                                    key={link.name}
                                    onClick={() => {
                                        if (link.action === 'link') {
                                            window.open(link.href, '_blank');
                                        } else {
                                            copyToClipboard(link.value, link.type);
                                        }
                                    }}
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 group"
                                    style={{
                                        backgroundColor: 'var(--card-bg)',
                                        border: '1px solid var(--border-color)',
                                    }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span
                                        className="group-hover:text-blue-500 transition-colors"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {link.icon}
                                    </span>
                                    <span
                                        className="text-sm font-medium"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        {link.name}
                                    </span>
                                    {link.action === 'copy' && (
                                        <span className="text-xs px-2 py-0.5 rounded-md gradient-bg text-white ml-1">
                                            {(link.type === 'email' && emailCopied) || (link.type === 'phone' && phoneCopied)
                                                ? 'Copied!'
                                                : 'Click to copy'}
                                        </span>
                                    )}
                                </motion.button>
                            ))}
                        </motion.div>

                        {/* Download CV Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <a
                                href="./Yashwanth_U_CV.pdf"
                                download="Yashwanth_U_CV.pdf"
                                className="btn-primary inline-flex"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download CV
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative">
                            {/* Decorative Elements */}
                            <motion.div
                                className="absolute -inset-4 rounded-3xl opacity-20"
                                style={{
                                    background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                                }}
                                animate={{
                                    rotate: [0, 5, 0, -5, 0],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />

                            {/* Image Container */}
                            <motion.div
                                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden"
                                style={{
                                    boxShadow: 'var(--card-shadow)',
                                    border: '4px solid var(--border-color)',
                                }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img
                                    src="./MyImage.jpg"
                                    alt="Yashwanth U"
                                    className="w-full h-full object-cover object-top"
                                />

                                {/* Overlay Gradient */}
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                                    }}
                                />
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl"
                                style={{
                                    backgroundColor: 'var(--card-bg)',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: 'var(--card-shadow)',
                                }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8, type: 'spring' }}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">💼</span>
                                    <div>
                                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Experience</p>
                                        <p className="font-bold gradient-text">2+ Years</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Second Floating Badge */}
                            <motion.div
                                className="absolute -top-4 -left-4 px-4 py-2 rounded-xl"
                                style={{
                                    backgroundColor: 'var(--card-bg)',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: 'var(--card-shadow)',
                                }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1, type: 'spring' }}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">📊</span>
                                    <div>
                                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Role</p>
                                        <p className="font-bold gradient-text">Data Analyst</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Home;
