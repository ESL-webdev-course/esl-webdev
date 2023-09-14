import { HashLink } from 'react-router-hash-link';

import { IoIosArrowBack } from 'react-icons/io';

function SelfGuided(props) {
    return (
        <div>
            <p>{props.text}</p>
            <a href={props.video}>{props.video}</a>
            <iframe
                src={props.link}
                width="576"
                height="420"
                title="#1.5 Lesson ES: Setting up to program"
                scrolling="no"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
            ></iframe>
        </div>
    );
}
function NotSelfGuided(props) {
    return (
        <div>
            <p>Wideo Embedded HEre</p>
        </div>
    );
}
export default function Class(props) {
    const section = props.class;
    if (window?.location.pathname === '/' + section.url) require('./pindex.css');
    return (
        <div className="container mt-5 p-5" id="home">
            <HashLink class="btn btn-outline-light" to={'/syllabus#' + section.url}>
                <IoIosArrowBack />
            </HashLink>
            <div className="mt-5">
                <h2>{section.title + ' -- ' + section.description}</h2>
                {section.selfGuided && (
                    <SelfGuided link={section.slidesLink} video={section.video} text={section.selfText} />
                )}
                {!section.selfGuided && (
                    <NotSelfGuided link={section.slidesLink} video={section.video} text={section.selfText} />
                )}
            </div>
        </div>
    );
}
