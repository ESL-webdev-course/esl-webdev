function Navbar() {
    return (
        <nav id="mainNav" class="fixed-top navbar navbar-dark navbar-expand-md">
            <a href="#" class="navbar-brand">
                WEBDEV HTX
            </a>
            <button class="navbar-toggler butt" data-toggle="collapse" data-target="#navLinks">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navLinks">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#home" class="nav-link">
                            HOME
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#syllabus" class="nav-link">
                            SYLLABUS
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="./resources.html" class="nav-link">
                            RESOURCES
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">
                            ABOUT
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
