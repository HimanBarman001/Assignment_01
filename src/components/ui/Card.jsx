function Card({ children, className = "" }) {
    return (
        <div
            className={`
                rounded-2xl
                border border-border-subtle
                bg-surface
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-border
                hover:bg-surface-elevated
                ${className}
            `}
        >
            {children}
        </div>
    );
}

export default Card;