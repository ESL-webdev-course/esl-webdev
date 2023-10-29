import { HashLink } from 'react-router-hash-link';

export default function Syllabus(props) {
    if (window?.location.pathname === '/syllabus') require('./cindex.css');

    const text = props.language.content.syllabus;
    return (
        <div className="container-fluid" id="home">
            <div className="row align-items-center">
                <div className="col-12 mt-5 p-5 col-md-7  text-left">
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
                        <div id="index">
                            <h2>{text.indext}</h2>
                            <ul>
                                {text.classes.map((section) => {
                                    return (
                                        <li>
                                            <HashLink to={'/syllabus#' + section.url}>
                                                {section.title + ' -- ' + section.description}
                                            </HashLink>
                                            <ul>
                                                {section.exercises.map((exercise) => {
                                                    return (
                                                        <li>
                                                            <HashLink to={'/syllabus#' + exercise.url}>
                                                                {exercise.title + ' -- ' + exercise.description}
                                                            </HashLink>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div id="classes">
                            {text.classes.map((section) => {
                                return (
                                    <div>
                                        <div className="class" id={section.url}>
                                            <h5>{section.title + ' -- ' + section.description}</h5>
                                            <p>{section.estimate}</p>
                                            <a href={'/' + section.url}>{text.full}</a>
                                            <p>{section.extended}</p>
                                        </div>
                                        {section.exercises.map((exercise) => {
                                            return (
                                                <div className="class" id={exercise.url}>
                                                    <h5>{exercise.title + ' -- ' + exercise.description}</h5>
                                                    <p>{exercise.estimate}</p>
                                                    <a href={'/' + exercise.url}>{text.full}</a>
                                                    <p>{exercise.extended}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="position-fixed d-none d-md-block" style={{ right: '0', top: '0' }}>
                    <img
                        alt="skyline"
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
