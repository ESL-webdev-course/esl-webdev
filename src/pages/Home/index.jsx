function Home(props) {
    const text = props.language.content.home;

    return (
        <div className="App">
            <div className="container-fluid" id="home">
                <div className="row align-items-center">
                    <div className="mt-5 col-sm-6 d-none d-md-block">
                        <h1 className="header">
                            <span className="tstart">E</span>SL
                            <span className="tstart"> W</span>ebdev
                        </h1>
                        <h2
                            style={{
                                textAlign: 'center',
                                fontSize: '1.5rem',
                                paddingLeft: ' 30px',
                                paddingTop: '20px',
                            }}
                        >
                            {text.mission}
                        </h2>
                    </div>
                    <div className="col-12 col-md-6">
                        <img
                            style={{ maxHeight: '100vh', float: 'right' }}
                            className="img-fluid d-none d-md-block"
                            src="images/houston-skyline.jpeg"
                            alt=""
                        />
                        <img
                            style={{ float: 'right' }}
                            className="img-fluid d-md-none s"
                            src="images/houston-skyline.jpeg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="syllabus">
                <div className="row content">
                    <div className="col-md-4 col-12 order-2 order-md-1">
                        <img src="images/webdev-image.jpeg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8 col-12 text-center order-1 justify-content-center align-items-center">
                        <div className="row justify-content-center mb-5 mb-md-0">
                            <div className="col-10">
                                <h2 className="text-center">{text.syllabus.title}</h2>
                                {text.syllabus.p.map((text) => {
                                    return (
                                        <p key={text.key} className="text-left">
                                            {text.text}
                                        </p>
                                    );
                                })}
                                <p className="text-left">
                                    <strong>
                                        {text.syllabus.link.description}{' '}
                                        <a href="./syllabus.html">{text.syllabus.link.linkText}</a>
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="about">
                <div className="row content">
                    <div className="col-md-4 col-12 order-2 order-md-1 justify-content-center align-items-center">
                        <img src="images/me.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8 col-12 text-center justify-content-center align-items-center">
                        <div className="row justify-content-center mb-5 mb-md-0">
                            <div className="col-10 text-left">
                                <h2 className="text-center">About</h2>
                                {text.about.p.map((text) => {
                                    return (
                                        <p key={text.key} className="text-left">
                                            {text.text}
                                        </p>
                                    );
                                })}

                                <a href="https://docs.google.com/document/d/18Zcwbbd_CEGsoroU--9Ymsak321vC6iJ/">
                                    {text.about.resume}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="contact">
                <div className="row">
                    <div className="col-md-6">
                        <h2>{text.footer.contact.title}</h2>
                        <p>Email: mateoslopez2005@gmail.com</p>
                        <p>{text.footer.contact.phone}</p>
                    </div>
                    <div className="col-md-6">
                        <h2>{text.footer.follow}</h2>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/mateoslnegrete">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mateo.sanchez.14/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
