function Education() {
    return (
        <section
            id="education"
            className="border-t border-border-subtle"
        >
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">

                {/* Section Header */}
                <div className="mb-16 flex items-center gap-4">
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
                        02
                    </span>

                    <span className="h-px w-10 bg-border" />

                    <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
                        Education
                    </h2>
                </div>

                {/* Education Content */}
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

                    {/* Intro */}
                    <div className="lg:col-span-4">
                        <h3 className="text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
                            Learning the
                            <span className="text-text-tertiary">
                                {" "}foundations.
                            </span>
                        </h3>

                        <p className="mt-6 max-w-sm text-base leading-7 text-text-tertiary">
                            My academic journey has helped me build a strong
                            foundation in computer science while giving me
                            opportunities to explore software development.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="lg:col-span-8">

                        {/* Education Item */}
                        <article className="border-t border-border-subtle py-8">

                            <div className="grid gap-6 sm:grid-cols-[140px_1fr]">

                                {/* Year */}
                                <div>
                                    <p className="text-sm font-medium text-text-muted">
                                        2023 — Present
                                    </p>
                                </div>

                                {/* Details */}
                                <div>
                                    <h4 className="text-xl font-semibold tracking-tight text-text-primary">
                                        Bachelor of Computer Applications
                                    </h4>

                                    <p className="mt-2 text-sm text-text-secondary">
                                        Techno India University, West Bengal
                                    </p>

                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-text-tertiary">
                                        Studying computer applications with
                                        coursework covering programming,
                                        databases, networking, mathematics
                                        and software development.
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                            Computer Science
                                        </span>

                                        <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                            Programming
                                        </span>

                                        <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                            DBMS
                                        </span>

                                        <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                            Networking
                                        </span>
                                    </div>
                                </div>

                            </div>

                        </article>

                        {/* Education Item */}
                        <article className="border-t border-border-subtle py-8">

                            <div className="grid gap-6 sm:grid-cols-[140px_1fr]">

                                {/* Year */}
                                <div>
                                    <p className="text-sm font-medium text-text-muted">
                                        Higher Secondary
                                    </p>
                                </div>

                                {/* Details */}
                                <div>
                                    <h4 className="text-xl font-semibold tracking-tight text-text-primary">
                                        Higher Secondary Education
                                    </h4>

                                    <p className="mt-2 text-sm text-text-secondary">
                                        Science / Computer-related studies
                                    </p>

                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-text-tertiary">
                                        Developed an early interest in
                                        mathematics, computers and technology,
                                        which eventually led me toward
                                        computer applications.
                                    </p>
                                </div>

                            </div>

                        </article>

                        {/* Bottom Border */}
                        <div className="border-t border-border-subtle" />

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Education;