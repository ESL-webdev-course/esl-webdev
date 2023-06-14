import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const spanishFlagStyle = {
    backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg')",
    backgroundSize: 'cover',
    width: '30px',
    height: '20px',
    border: 'none',
    float: 'right',
};
const americanFlagStyle = {
    backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg')",
    backgroundSize: 'cover',
    width: '30px',
    height: '20px',
    border: 'none',
    float: 'right',
};
function Navbar(props) {
    function chooseFlagStyle(english) {
        if (english) {
            return americanFlagStyle;
        } else {
            return spanishFlagStyle;
        }
    }
    const [flagStyle, setFlagStyle] = useState(chooseFlagStyle(props.language.english));
    const buttonClick = () => {
        const toggle = !props.language.english;
        setFlagStyle(chooseFlagStyle(toggle));

        localStorage.setItem('english', JSON.stringify({ english: toggle }));
        props.setLanguage({ english: toggle, content: props.getContent(toggle) });
    };

    return (
        <nav id="mainNav" className="fixed-top navbar navbar-dark navbar-expand-md">
            <button className="navbar-toggler butt" data-toggle="collapse" data-target="#navLinks">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a href="#" className="navbar-brand">
                ESL Webdev Course
            </a>

            <div className="collapse navbar-collapse" id="navLinks">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <HashLink to="/home" className="nav-link">
                            HOME
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink to="syllabus" className="nav-link">
                            SYLLABUS
                        </HashLink>
                    </li>

                    <li className="nav-item">
                        <HashLink to="resources" className="nav-link">
                            RESOURCES
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink to="/home#about" preventScrollReset={true} className="nav-link">
                            ABOUT
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink to="/home#contact" className="nav-link">
                            CONTACT
                        </HashLink>
                    </li>
                </ul>
            </div>
            <button style={flagStyle} onClick={buttonClick}></button>
        </nav>
    );
}
export default Navbar;
