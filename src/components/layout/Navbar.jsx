function Navbar() {
    return (
        <nav className="fixed top-0 left-0 z-50 w-full px-4 pt-4 sm:px-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-border-subtle bg-surface/85 px-5 py-3 backdrop-blur-xl sm:px-6">
                
                {/* Logo */}
                <a
                    href="#"
                    className="shrink-0 text-xl font-semibold tracking-tight text-text-primary transition-opacity duration-200 hover:opacity-80"
                >
                    Himan
                    <span className="text-text-muted">.</span>
                </a>

                {/* Navigation */}
                <ul className="hidden items-center gap-1 md:flex">
                    
                    <li>
                        <a
                            href="#"
                            className="group relative flex items-center rounded-xl px-4 py-2.5 text-base font-medium text-text-secondary transition-all duration-200 hover:bg-surface-elevated hover:text-text-primary"
                        >
                            Home
                            <span className="absolute bottom-1.5 left-4 right-4 h-px origin-center scale-x-0 bg-text-primary transition-transform duration-200 group-hover:scale-x-100" />
                        </a>
                    </li>

                    <li>
                        <a
                            href="#about"
                            className="group relative flex items-center rounded-xl px-4 py-2.5 text-base font-medium text-text-secondary transition-all duration-200 hover:bg-surface-elevated hover:text-text-primary"
                        >
                            About
                            <span className="absolute bottom-1.5 left-4 right-4 h-px origin-center scale-x-0 bg-text-primary transition-transform duration-200 group-hover:scale-x-100" />
                        </a>
                    </li>

                    <li>
                        <a
                            href="#education"
                            className="group relative flex items-center rounded-xl px-4 py-2.5 text-base font-medium text-text-secondary transition-all duration-200 hover:bg-surface-elevated hover:text-text-primary"
                        >
                            Education
                            <span className="absolute bottom-1.5 left-4 right-4 h-px origin-center scale-x-0 bg-text-primary transition-transform duration-200 group-hover:scale-x-100" />
                        </a>
                    </li>

                    <li>
                        <a
                            href="#skills"
                            className="group relative flex items-center rounded-xl px-4 py-2.5 text-base font-medium text-text-secondary transition-all duration-200 hover:bg-surface-elevated hover:text-text-primary"
                        >
                            Skills
                            <span className="absolute bottom-1.5 left-4 right-4 h-px origin-center scale-x-0 bg-text-primary transition-transform duration-200 group-hover:scale-x-100" />
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            className="group relative flex items-center rounded-xl px-4 py-2.5 text-base font-medium text-text-secondary transition-all duration-200 hover:bg-surface-elevated hover:text-text-primary"
                        >
                            Projects
                            <span className="absolute bottom-1.5 left-4 right-4 h-px origin-center scale-x-0 bg-text-primary transition-transform duration-200 group-hover:scale-x-100" />
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className="group relative flex items-center rounded-xl px-4 py-2.5 text-base font-medium text-text-secondary transition-all duration-200 hover:bg-surface-elevated hover:text-text-primary"
                        >
                            Contact
                            <span className="absolute bottom-1.5 left-4 right-4 h-px origin-center scale-x-0 bg-text-primary transition-transform duration-200 group-hover:scale-x-100" />
                        </a>
                    </li>

                </ul>

                {/* Right Side */}
                <a
                    href="#contact"
                    className="hidden rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-text-primary transition-all duration-200 hover:border-border hover:bg-surface-elevated md:block"
                >
                    Let's talk
                </a>

                {/* Mobile Menu */}
                <button
                    type="button"
                    className="rounded-xl border border-border-subtle p-2.5 text-text-primary transition-colors duration-200 hover:bg-surface-elevated md:hidden"
                    aria-label="Open navigation menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>

            </div>
        </nav>
    );
}

export default Navbar;