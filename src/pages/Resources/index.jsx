function Resources(props) {
    const text = props.language.content.resources;

    return (
        <div className="container-fluid" id="home">
            <div className="row align-items-center">
                <div className="col-12 mt-5 p-5 col-sm-7 text-white text-left">
                    <div className="container">
                        <h2 className="header text-white text-left">{text.title}</h2>

                        <hr />

                        <div>
                            <h3>{text.overview.title}</h3>
                            {text.overview.p.map((text) => {
                                if (text.strong) {
                                    return <h6 key={text.key}>{text.text}</h6>;
                                }
                                return (
                                    <p key={text.key} className="text-left">
                                        {text.text}
                                    </p>
                                );
                            })}
                        </div>
                        <div id="index">
                            <hr />

                            <h3>{text.index.title}</h3>

                            <ul>
                                {text.index.links.map((link) => {
                                    return (
                                        <li key={link.key}>
                                            <a key={link.key} href={link.link}>
                                                {link.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        {text.sections.map((section) => {
                            return (
                                <div key={section.key} className="container-fluid" id="stack-overflow">
                                    <hr />

                                    <h4>{section.title}</h4>

                                    <p>
                                        {section.subHeader.description}
                                        <a target="_blank" href={section.subHeader.link}>
                                            {' ' + section.subHeader.linkText}
                                        </a>
                                    </p>
                                    {section.p.map((text) => {
                                        return (
                                            <p key={text.key} className="text-left">
                                                {text.text}
                                            </p>
                                        );
                                    })}
                                </div>
                            );
                        })}
                        <div className="contain-fluid" id="other">
                            <hr />

                            <h4>{text.other.title}</h4>
                            <ul>
                                <li>
                                    <a href="https://www.youtube.com/" target="_blank">
                                        Youtube
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.freecodecamp.org/" target="_blank">
                                        freeCodeCamp.org
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.coursera.org/" target="_blank">
                                        Coursera
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.udemy.com/" target="_blank">
                                        Udemy
                                    </a>
                                </li>
                            </ul>
                            {text.other.p.map((text) => {
                                return (
                                    <p key={text.key} className="text-left">
                                        {text.text}
                                    </p>
                                );
                            })}
                            <a target="_blank" href="https://www.udemy.com/course/the-web-developer-bootcamp/">
                                {text.other.udemyCourseLinkText}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="position-fixed d-none d-md-block" style={{ right: '0', top: '0' }}>
                    <img
                        style={{ width: '40vw', float: 'right' }}
                        className="img-fluid d-none d-md-block"
                        src="images/houston-skyline-two.jpeg"
                        alt=""
                    />
                    <img className="img-fluid d-md-none s" src="images/houston-skyline.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Resources;
