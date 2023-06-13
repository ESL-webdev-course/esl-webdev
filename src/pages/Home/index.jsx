import Navbar from '../../components/Navbar';
function Home() {
    return (
        <div className="App">
            <Navbar />

            <div class="container-fluid" id="home">
                <div class="row align-items-center">
                    <div class="mt-5 col-sm-6 text-white d-none d-md-block">
                        <h1 class="header">
                            <span class="tstart">W</span>eb <span class="tstart">D</span>ev
                            <span class="tstart">HTX</span>
                        </h1>
                        <h2
                            style={{
                                textAlign: 'center',
                                fontSize: '1.5rem',
                                paddingLeft: ' 30px',
                                paddingTop: '20px',
                            }}
                        >
                            Empowering individuals and communities through web development education.
                        </h2>
                    </div>
                    <div class="col-12 col-md-6">
                        <img
                            style={{ maxHeight: '100vh', float: 'right' }}
                            class="img-fluid d-none d-md-block"
                            src="images/houston-skyline.jpeg"
                            alt=""
                        />
                        <img
                            style={{ float: 'right' }}
                            class="img-fluid d-md-none s"
                            src="images/houston-skyline.jpeg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div class="container-fluid" id="syllabus">
                <div class="row content">
                    <div class="col-md-4 col-12 order-2 order-md-1">
                        <img src="images/webdev-image.jpeg" class="img-fluid" alt="" />
                    </div>
                    <div class="col-md-8 col-12 text-center order-1 justify-content-center align-items-center">
                        <div class="row justify-content-center mb-5 mb-md-0">
                            <div class="col-10">
                                <h2 class="text-center">Syllabus Overview</h2>
                                <p class="text-left">
                                    This web development course covers HTML, CSS, and JavaScript, the essential
                                    languages for web development. Participants will learn how to structure web content,
                                    style pages, and add interactivity. Through hands-on projects, they will gain
                                    practical skills in creating well-designed, responsive, and dynamic websites.
                                </p>
                                <p class="text-left">
                                    This course will also introduce different publishing and hosting techniques. By the
                                    end of the course, students will be equipped to bring their ideas to life on the
                                    web.
                                </p>
                                <p class="text-left">
                                    <strong>
                                        For the FULL COURSE SYLLABUS click this <a href="./syllabus.html">link</a>
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid" id="about">
                <div class="row content">
                    <div class="col-md-4 col-12 order-2 order-md-1 justify-content-center align-items-center">
                        <img src="images/me.jpeg" class="img-fluid" alt="" />
                    </div>
                    <div class="col-md-8 col-12 text-center justify-content-center align-items-center">
                        <div class="row justify-content-center mb-5 mb-md-0">
                            <div class="col-10 text-left">
                                <h2 class="text-center">About</h2>
                                <p class="text-left">
                                    My name is Mateo Sanchez, I am a rising high school senior. I have been deeply
                                    passionate about sharing my programming knowledge with an interested audience for
                                    years now.
                                </p>
                                <p class="text-left">
                                    I developed this course by compiling the information presented in the online
                                    resources that I found most useful throughout my programming journey as well as what
                                    I learned from my many mentors at my internships and jobs.
                                </p>
                                <p class="text-left">
                                    The resume linked
                                    <a href="https://docs.google.com/document/d/18Zcwbbd_CEGsoroU--9Ymsak321vC6iJ/">
                                        here
                                    </a>
                                    details my numerous experiences in both paid and unpaid software development that I
                                    draw my knowledge from. I would be happy to answer any further questions at the
                                    information listed in the <a href="#contact">contact section.</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid" id="contact">
                <div class="row">
                    <div class="col-md-6">
                        <h2>Contact Us</h2>
                        <p>Email: mateoslopez2005@gmail.com</p>
                        <p>Phone: +1 (832)-888-0327</p>
                    </div>
                    <div class="col-md-6">
                        <h2>Follow Us</h2>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a>
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a>
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a>
                                    <i class="fab fa-instagram"></i>
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
