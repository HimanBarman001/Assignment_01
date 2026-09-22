function About() {
    return (
        <section id="about" className="border-t border-border-subtle">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">

                {/* Section Header */}
                <div className="mb-16 flex items-center gap-4">
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
                        01
                    </span>

                    <span className="h-px w-10 bg-border" />

                    <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
                        About
                    </h2>
                </div>

                {/* Main Content */}
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

                    {/* Heading */}
                    <div className="lg:col-span-5">
                        <h3 className="text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                            Building with curiosity,
                            <span className="text-text-tertiary">
                                {" "}learning with purpose.
                            </span>
                        </h3>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-7">

                        <p className="text-lg leading-8 text-text-secondary">
                            I'm a BCA student with a growing interest in software
                            development, problem solving and modern technology.
                            I enjoy turning ideas into practical digital
                            experiences and continuously improving the way I build.
                        </p>

                        <p className="mt-6 text-base leading-7 text-text-tertiary">
                            My journey is driven by learning through projects,
                            experimenting with new technologies and understanding
                            the fundamentals behind the tools I use. I'm currently
                            focused on strengthening my development skills and
                            building meaningful projects along the way.
                        </p>

                        {/* Small Details */}
                        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border-subtle pt-8 sm:grid-cols-3">

                            <div>
                                <p className="text-xs uppercase tracking-[0.15em] text-text-muted">
                                    Focus
                                </p>

                                <p className="mt-2 text-sm font-medium text-text-primary">
                                    Software Development
                                </p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.15em] text-text-muted">
                                    Education
                                </p>

                                <p className="mt-2 text-sm font-medium text-text-primary">
                                    BCA
                                </p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.15em] text-text-muted">
                                    Location
                                </p>

                                <p className="mt-2 text-sm font-medium text-text-primary">
                                    India
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;