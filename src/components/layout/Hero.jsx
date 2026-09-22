function Hero() {
    return (
        <section id="home" className="min-h-screen flex-tems-center">
            <div className="mx-auto w-full max-w-7xl px-6 py-32">
                
                <div className="max-w-4xl">
                    <p className="mb-6 mt-5 text-3xl font-medium uppercase tracking-[0.25rem] text-text-muted">
                        Hello, <br />
                        I'm Himan
                    </p>

                    <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl">
                        BCA Student
                        <br />

                        <span className="text-text-tertiary">
                            & Software Developer.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
                        I build clean, practical and thoughtful digital
                        experiences with modern web technologies.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-inverse-bg px-6 py-3 text-sm font-medium text-inverse-text transition-colors duration-200 hover:bg-mono-100">
                            View my work
                        </a>

                        <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:bg-surface-elevated">
                            Contact me
                        </a>
                    </div>
                </div>

                <div className="mt-24 flex items-center justify-between border-t border-border-subtle pt-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                        Based in India
                    </p>

                    <a href="#about" className="text-xs uppercase tracking-[0.2em] text-text-muted transition-colors hover:text-text-primary">
                        Scroll to explore
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;