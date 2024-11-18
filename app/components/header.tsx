export default function Header() {
    return (
        <header className="module-header hor-nav-spacer">
            <div className="fixed-container">
                <div className="header-top">
                    <div className="header-logo">
                        <a
                            className="logo"
                            href="/"
                        >
                            <div className="module-image">
                                <img
                                    className="lazyautosizes lazyloaded"
                                    src="/images/rexroth_logo_animated_113.gif"
                                    alt="Bosch Rexroth Logo"
                                    srcSet="/images/rexroth_logo_animated_113.gif 768w,/images/rexroth_logo_animated_300.gif 920w"
                                    sizes="113px"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
