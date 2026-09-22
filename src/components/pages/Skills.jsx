import Card from "../ui/Card";

function Skills() {
    return (
        <section
            id="skills"
            className="border-t border-border-subtle"
        >
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">

                {/* Section Header */}
                <div className="mb-16 flex items-center gap-4">
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
                        03
                    </span>

                    <span className="h-px w-10 bg-border" />

                    <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
                        Skills
                    </h2>
                </div>

                {/* Intro */}
                <div className="max-w-3xl">
                    <h3 className="text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                        Tools I use to turn
                        <span className="text-text-tertiary">
                            {" "}ideas into reality.
                        </span>
                    </h3>

                    <p className="mt-6 text-base leading-7 text-text-tertiary sm:text-lg">
                        A growing set of technologies and fundamentals that I
                        use while learning, building projects and solving
                        problems.
                    </p>
                </div>

                {/* Skills Cards */}
                <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Programming */}
                    <Card>
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                            01
                        </span>

                        <h4 className="mt-8 text-xl font-semibold text-text-primary">
                            Programming
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-text-tertiary">
                            Languages and programming fundamentals I use to
                            understand and solve problems.
                        </p>

                        <div className="mt-8 space-y-3">
                            <p className="text-sm text-text-secondary">
                                C++
                            </p>

                            <p className="text-sm text-text-secondary">
                                Python
                            </p>

                            <p className="text-sm text-text-secondary">
                                Java
                            </p>

                            <p className="text-sm text-text-secondary">
                                Data Structures & Algorithms
                            </p>
                        </div>
                    </Card>

                    {/* Web Development */}
                    <Card>
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                            02
                        </span>

                        <h4 className="mt-8 text-xl font-semibold text-text-primary">
                            Web Development
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-text-tertiary">
                            Technologies I use to create modern and responsive
                            web experiences.
                        </p>

                        <div className="mt-8 space-y-3">
                            <p className="text-sm text-text-secondary">
                                HTML
                            </p>

                            <p className="text-sm text-text-secondary">
                                CSS
                            </p>

                            <p className="text-sm text-text-secondary">
                                JavaScript
                            </p>

                            <p className="text-sm text-text-secondary">
                                React
                            </p>

                            <p className="text-sm text-text-secondary">
                                Tailwind CSS
                            </p>
                        </div>
                    </Card>

                    {/* Backend */}
                    <Card>
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                            03
                        </span>

                        <h4 className="mt-8 text-xl font-semibold text-text-primary">
                            Backend
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-text-tertiary">
                            Technologies and concepts for building application
                            logic and working with data.
                        </p>

                        <div className="mt-8 space-y-3">
                            <p className="text-sm text-text-secondary">
                                Node.js
                            </p>

                            <p className="text-sm text-text-secondary">
                                Express.js
                            </p>

                            <p className="text-sm text-text-secondary">
                                REST APIs
                            </p>

                            <p className="text-sm text-text-secondary">
                                MongoDB
                            </p>

                            <p className="text-sm text-text-secondary">
                                SQL
                            </p>
                        </div>
                    </Card>

                    {/* Database */}
                    <Card>
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                            04
                        </span>

                        <h4 className="mt-8 text-xl font-semibold text-text-primary">
                            Database
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-text-tertiary">
                            Working with structured data, queries and database
                            design.
                        </p>

                        <div className="mt-8 space-y-3">
                            <p className="text-sm text-text-secondary">
                                MySQL
                            </p>

                            <p className="text-sm text-text-secondary">
                                MongoDB
                            </p>

                            <p className="text-sm text-text-secondary">
                                Database Design
                            </p>

                            <p className="text-sm text-text-secondary">
                                SQL
                            </p>
                        </div>
                    </Card>

                    {/* Tools */}
                    <Card>
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                            05
                        </span>

                        <h4 className="mt-8 text-xl font-semibold text-text-primary">
                            Tools
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-text-tertiary">
                            Development tools that support my everyday
                            workflow.
                        </p>

                        <div className="mt-8 space-y-3">
                            <p className="text-sm text-text-secondary">
                                Git
                            </p>

                            <p className="text-sm text-text-secondary">
                                GitHub
                            </p>

                            <p className="text-sm text-text-secondary">
                                VS Code
                            </p>

                            <p className="text-sm text-text-secondary">
                                Linux
                            </p>
                        </div>
                    </Card>

                    {/* Fundamentals */}
                    <Card>
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                            06
                        </span>

                        <h4 className="mt-8 text-xl font-semibold text-text-primary">
                            Fundamentals
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-text-tertiary">
                            Core computer science concepts that form the
                            foundation of my development journey.
                        </p>

                        <div className="mt-8 space-y-3">
                            <p className="text-sm text-text-secondary">
                                Data Structures
                            </p>

                            <p className="text-sm text-text-secondary">
                                Algorithms
                            </p>

                            <p className="text-sm text-text-secondary">
                                DBMS
                            </p>

                            <p className="text-sm text-text-secondary">
                                Computer Networks
                            </p>

                            <p className="text-sm text-text-secondary">
                                OOP
                            </p>
                        </div>
                    </Card>

                </div>

            </div>
        </section>
    );
}

export default Skills;