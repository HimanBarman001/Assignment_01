
  function Footer() {
    return (
        <footer className="border-t border-border-subtle bg-background">
            <div className="mx-auto max-w-7xl px-6">

                {/* Main Footer */}
                <div className="py-16 sm:py-20">

                    {/* Brand */}
                    <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">

                        <div>
                            <a
                                href="#"
                                className="group inline-block"
                            >
                                <span className="text-4xl font-semibold tracking-tight text-text-primary transition-colors duration-300 group-hover:text-text-secondary sm:text-5xl">
                                    Himan
                                </span>

                                <span className="text-4xl font-semibold text-text-muted sm:text-5xl">
                                    .
                                </span>
                            </a>

                            <p className="mt-5 max-w-md text-sm leading-7 text-text-tertiary sm:text-base">
                                Building thoughtful digital experiences,
                                learning continuously, and turning ideas
                                into meaningful products.
                            </p>
                        </div>

                        {/* Social */}
                        <div className="lg:col-span-4">
                            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                                Connect
                            </p>

                            <div className="space-y-3">

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex w-fit items-center gap-3 text-sm text-text-tertiary transition-colors duration-200 hover:text-text-primary"
                                >
                                    GitHub
                                </a>

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex w-fit items-center gap-3 text-sm text-text-tertiary transition-colors duration-200 hover:text-text-primary"
                                >
                                    LinkedIn
                                    
                                </a>

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex w-fit items-center gap-3 text-sm text-text-tertiary transition-colors duration-200 hover:text-text-primary"
                                >
                                    Instagram
                                    
                                </a>

                            </div>
                        </div>

                    </div>

                    
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col gap-4 border-t border-border-subtle py-6 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-xs text-text-muted">
                        © 2026 Himan. All rights reserved.
                    </p>

                    <a
                            href="#"
                            className="group flex w-fit items-center gap-3 rounded-full border border-border-subtle bg-surface px-5 py-3 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-border hover:bg-surface-elevated hover:text-text-primary"
                        >
                            <span>Back to top</span>

                            <span className="transition-transform duration-300 group-hover:-translate-y-1">
                                ↑
                            </span>
                        </a>

                </div>

            </div>
        </footer>
    );
}

export default Footer;