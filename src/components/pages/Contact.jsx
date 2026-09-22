function Contact() {
    return (
        <section
            id="contact"
            className="border-t border-border-subtle"
        >
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">

                {/* Section Header */}
                <div className="mb-16 flex items-center gap-4">
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
                        05
                    </span>

                    <span className="h-px w-10 bg-border" />

                    <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
                        Contact
                    </h2>
                </div>

                {/* Main Content */}
                <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">

                    {/* Heading */}
                    <div className="lg:col-span-7">

                        <h3 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                            Have an idea?
                            <br />
                            <span className="text-text-tertiary">
                                Let's talk.
                            </span>
                        </h3>

                        <p className="mt-8 max-w-xl text-base leading-7 text-text-secondary sm:text-lg">
                            Whether it's a project, collaboration, opportunity
                            or simply a conversation about technology, feel
                            free to reach out.
                        </p>

                        <a
                            href="mailto:your.email@example.com"
                            className="mt-10 inline-flex items-center gap-3 text-base font-medium text-text-primary transition-colors duration-200 hover:text-text-tertiary"
                        >
                            himanbarman@example.com

                            
                        </a>

                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-5">

                        <div className="border-t border-border-subtle">

                            {/* Email */}
                            <a
                                href="mailto:your.email@example.com"
                                className="group flex items-center justify-between border-b border-border-subtle py-6"
                            >
                                <div>
                                    <p className="text-xs uppercase tracking-[0.15em] text-text-muted">
                                        Email
                                    </p>

                                    <p className="mt-2 text-sm text-text-secondary">
                                        himanbarman@example.com
                                    </p>
                                </div>

                                
                            </a>

                            {/* GitHub */}
                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center justify-between border-b border-border-subtle py-6"
                            >
                                <div>
                                    <p className="text-xs uppercase tracking-[0.15em] text-text-muted">
                                        GitHub
                                    </p>

                                    <p className="mt-2 text-sm text-text-secondary">
                                        github.com/HimanBarman001
                                    </p>
                                </div>

                                
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center justify-between border-b border-border-subtle py-6"
                            >
                                <div>
                                    <p className="text-xs uppercase tracking-[0.15em] text-text-muted">
                                        LinkedIn
                                    </p>

                                    <p className="mt-2 text-sm text-text-secondary">
                                        linkedin.com/in/himanbarman
                                    </p>
                                </div>

                            </a>

                        </div>

                    </div>

                </div>

                {/* Bottom CTA */}
                <div className="mt-24 border-t border-border-subtle pt-8">

                    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

                        <p className="text-sm text-text-muted">
                            Open to interesting ideas and opportunities.
                        </p>

                        <a
                            href="mailto:your.email@example.com"
                            className="inline-flex w-fit items-center justify-center rounded-full bg-inverse-bg px-6 py-3 text-sm font-medium text-inverse-text transition-colors duration-200 hover:bg-mono-100"
                        >
                            Start a conversation
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;