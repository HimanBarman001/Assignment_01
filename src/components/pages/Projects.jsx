function Projects() {
    return (
        <section
            id="projects"
            className="border-t border-border-subtle"
        >
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">

                {/* Section Header */}
                <div className="mb-16 flex items-center gap-4">
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
                        04
                    </span>

                    <span className="h-px w-10 bg-border" />

                    <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
                        Projects
                    </h2>
                </div>

                {/* Intro */}
                <div className="max-w-3xl">
                    <h3 className="text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                        Things I've
                        <span className="text-text-tertiary">
                            {" "}built.
                        </span>
                    </h3>

                    <p className="mt-6 text-base leading-7 text-text-tertiary sm:text-lg">
                        A selection of projects where I experiment with
                        technologies, solve problems and turn ideas into
                        working products.
                    </p>
                </div>

                {/* Projects */}
                <div className="mt-16">

                    {/* Project 01 */}
                    <article className="group border-t border-border-subtle py-10 sm:py-12">

                        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">

                            {/* Number */}
                            <div className="lg:col-span-1">
                                <span className="text-sm font-medium text-text-muted">
                                    01
                                </span>
                            </div>

                            {/* Project Info */}
                            <div className="lg:col-span-8">

                                <h4 className="text-2xl font-semibold tracking-tight text-text-primary transition-colors duration-200 group-hover:text-text-secondary sm:text-3xl">
                                    Smart Campus
                                </h4>

                                <p className="mt-5 max-w-2xl text-base leading-7 text-text-tertiary">
                                    A modern college management platform
                                    designed to bring academic information,
                                    attendance, schedules, notices and other
                                    campus services into one digital
                                    experience.
                                </p>

                                {/* Technologies */}
                                <div className="mt-7 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        React
                                    </span>

                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        Node.js
                                    </span>

                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        Express
                                    </span>

                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        MongoDB
                                    </span>
                                </div>

                            </div>

                            {/* Link */}
                            <div className="flex items-start lg:col-span-3 lg:justify-end">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
                                >
                                    View project

                                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>
                            </div>

                        </div>

                    </article>

                    {/* Project 02 */}
                    <article className="group border-t border-border-subtle py-10 sm:py-12">

                        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">

                            <div className="lg:col-span-1">
                                <span className="text-sm font-medium text-text-muted">
                                    02
                                </span>
                            </div>

                            <div className="lg:col-span-8">

                                <h4 className="text-2xl font-semibold tracking-tight text-text-primary transition-colors duration-200 group-hover:text-text-secondary sm:text-3xl">
                                    Lexora
                                </h4>

                                <p className="mt-5 max-w-2xl text-base leading-7 text-text-tertiary">
                                    A vocabulary learning and knowledge
                                    management application focused on
                                    organizing words, meanings, examples and
                                    personal learning material.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        Flutter
                                    </span>

                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        Dart
                                    </span>

                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        Supabase
                                    </span>

                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        SQLite
                                    </span>
                                </div>

                            </div>

                            <div className="flex items-start lg:col-span-3 lg:justify-end">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
                                >
                                    View project

                                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>
                            </div>

                        </div>

                    </article>

                    {/* Project 03 */}
                    <article className="group border-t border-border-subtle py-10 sm:py-12">

                        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">

                            <div className="lg:col-span-1">
                                <span className="text-sm font-medium text-text-muted">
                                    03
                                </span>
                            </div>

                            <div className="lg:col-span-8">

                                <h4 className="text-2xl font-semibold tracking-tight text-text-primary transition-colors duration-200 group-hover:text-text-secondary sm:text-3xl">
                                    Antigravity Chess
                                </h4>

                                <p className="mt-5 max-w-2xl text-base leading-7 text-text-tertiary">
                                    An Android chess application featuring
                                    multiple difficulty levels, a native chess
                                    engine and a focused mobile gameplay
                                    experience.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        Kotlin
                                    </span>

                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        Jetpack Compose
                                    </span>

                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        C++
                                    </span>

                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        Stockfish
                                    </span>
                                </div>

                            </div>

                            <div className="flex items-start lg:col-span-3 lg:justify-end">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
                                >
                                    View project

                                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>
                            </div>

                        </div>

                    </article>

                    {/* Project 04 */}
                    <article className="group border-y border-border-subtle py-10 sm:py-12">

                        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">

                            <div className="lg:col-span-1">
                                <span className="text-sm font-medium text-text-muted">
                                    04
                                </span>
                            </div>

                            <div className="lg:col-span-8">

                                <h4 className="text-2xl font-semibold tracking-tight text-text-primary transition-colors duration-200 group-hover:text-text-secondary sm:text-3xl">
                                    KIRTI
                                </h4>

                                <p className="mt-5 max-w-2xl text-base leading-7 text-text-tertiary">
                                    A platform concept for discovering Durga
                                    Puja pandals, exploring their craft and
                                    connecting people through ratings,
                                    rankings and location-based discovery.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        React
                                    </span>

                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        JavaScript
                                    </span>

                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        Supabase
                                    </span>

                                    <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                                        Maps
                                    </span>
                                </div>

                            </div>

                            <div className="flex items-start lg:col-span-3 lg:justify-end">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
                                >
                                    View project

                                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>
                            </div>

                        </div>

                    </article>

                </div>

            </div>
        </section>
    );
}

export default Projects;