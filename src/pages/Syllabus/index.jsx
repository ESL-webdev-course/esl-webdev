export default function Syllabus(props) {
    const text = props.language.content.syllabus;
    return (
        <div className="container-fluid" id="home">
            <div className="row align-items-center">
                <div className="col-12 mt-5 p-5 col-md-7 text-white text-left">
                    <div className="container">
                        <h1>{text.title}</h1>
                        <div id="overview">
                            <h2>{text.overview.title}</h2>
                            {text.overview.p.map((text) => {
                                return (
                                    <p key={text.key} className="text-left">
                                        {text.text}
                                    </p>
                                );
                            })}
                        </div>
                        <div id="classes">
                            {text.classes.map((section) => {
                                return (
                                    <div className="class" id="1">
                                        <h3>{section.title}</h3>
                                        <p>{section.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="position-fixed d-none d-md-block" style={{ right: '0', top: '0' }}>
                    <img
                        style={{ width: '40vw' }}
                        className="img-fluid d-none d-md-block"
                        src="images/skyline-3.jpeg"
                    />
                    <img className="img-fluid d-md-none" src="images/skyline-3.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
}
