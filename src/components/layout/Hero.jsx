import { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Small delay so the paint settles before animations fire
        const id = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <section
            id="home"
            className="hero-section relative min-h-screen overflow-hidden"
        >
            {/* ── Ambient background elements ── */}
            <div className="hero-grid-overlay" aria-hidden="true" />
            <div className="hero-glow hero-glow--top" aria-hidden="true" />
            <div className="hero-glow hero-glow--bottom" aria-hidden="true" />
            <div className="hero-noise" aria-hidden="true" />

            {/* ── Content ── */}
            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-32 lg:px-10">
                <div
                    className={`hero-content max-w-5xl ${visible ? 'is-visible' : ''}`}
                >
                    {/* Greeting */}
                    <p className="hero-reveal hero-reveal--1 mb-4 text-lg font-medium uppercase tracking-[0.3em] text-text-muted sm:text-xl">
                        Hello, I'm Himan
                    </p>

                    {/* Main headline */}
                    <h1 className="hero-reveal hero-reveal--2 hero-headline text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                        <span className="block">BCA Student</span>
                        <span className="hero-gradient-text block">
                            &amp; Software Developer.
                        </span>
                    </h1>

                    {/* Sub‑copy */}
                    <p className="hero-reveal hero-reveal--3 mt-8 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-8">
                        Crafting clean, practical &amp; thoughtful digital
                        experiences — powered by modern web technologies and a
                        keen eye for detail.
                    </p>

                    {/* CTAs */}
                    <div className="hero-reveal hero-reveal--4 mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <a
                            href="#projects"
                            className="hero-btn hero-btn--primary"
                        >
                            <span className="hero-btn__label">View my work</span>
                            <span className="hero-btn__icon" aria-hidden="true">
                                →
                            </span>
                        </a>

                        <a
                            href="#contact"
                            className="hero-btn hero-btn--secondary"
                        >
                            <span className="hero-btn__label">Get in touch</span>
                        </a>
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div
                    className={`hero-bottom hero-reveal hero-reveal--5 ${visible ? 'is-visible' : ''}`}
                >
                    <p className="text-[0.7rem] uppercase tracking-[0.25em] text-text-muted">
                        Based in India
                    </p>

                    <a
                        href="#about"
                        className="hero-scroll-hint group flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.25em] text-text-muted transition-colors hover:text-text-primary"
                    >
                        <span className="hero-scroll-line" />
                        Scroll to explore
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;