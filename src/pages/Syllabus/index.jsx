export default function Syllabus() {
    return (
        <div className="container-fluid" id="home">
            <div className="row align-items-center">
                <div className="col-12 mt-5 p-5 col-md-7 text-white text-left">
                    <div className="container">
                        <h1>Course Syllabus</h1>
                        <div id="overview">
                            <h2>Overview</h2>
                            <p className="text-left">
                                This web development course is designed to provide a comprehensive introduction to HTML,
                                CSS, and JavaScript: the foundational building blocks of the modern web. Over the
                                duration of the course, participants will gain a solid understanding of each language
                                and how they work together to create static and dynamic websites.
                            </p>
                            <p className="text-left">
                                The course begins with HTML, the backbone of web development, teaching students how to
                                structure content, create semantic markup, and incorporate multimedia elements. Through
                                hands-on exercises and projects, learners will develop proficiency in crafting
                                well-organized and accessible web pages.
                            </p>
                            <p className="text-left">
                                Moving on to CSS, participants will explore the power of cascading style sheets to
                                control the presentation and layout of web pages. They will learn how to manipulate
                                colors, fonts, backgrounds, and borders, as well as how to create responsive designs
                                that adapt to different screen sizes and devices.
                            </p>
                            <p className="text-left">
                                JavaScript, the language of interactivity, will be introduced next. Students will
                                discover how to add functionality to web pages, create dynamic content, handle events,
                                and validate user inputs. They will gain practical experience in writing scripts,
                                working with variables, arrays, and functions, and utilizing libraries and frameworks to
                                enhance their coding capabilities.
                            </p>
                        </div>
                        <div id="details">
                            <div className="class" id="1">
                                <h3>Class 1</h3>
                                <p>In Prog.</p>
                            </div>
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
