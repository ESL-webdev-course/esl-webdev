import { HashLink } from 'react-router-hash-link';

import { IoIosArrowBack } from 'react-icons/io';

function SelfGuided(props) {
    return (
        <div>
            <p>{props.text}</p>
            <a target="_blank" rel="noreferrer" style={{ display: 'block' }} href={props.video}>
                {props.other.instruction.videoLink}
            </a>
            <br />
            <div>
                <iframe
                    src={props.link}
                    width="576"
                    height="420"
                    title={props.description}
                    scrolling="no"
                    frameborder="2"
                    webkitAllowfullScreen
                    mozAllowFullscreen
                    allowFullScreen
                ></iframe>
            </div>

            <a target="_blank" rel="noreferrer" style={{ display: 'block' }} href={props.link}>
                {props.other.instruction.slidesLink}
            </a>
        </div>
    );
}
function NotSelfGuided(props) {
    return (
        <div>
            <p>{props.other.instruction.video}</p>

            <iframe
                width="560"
                height="315"
                src={props.video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <a target="_blank" rel="noreferrer" style={{ display: 'block' }} href={props.link}>
                {props.other.instruction.slidesLink}
            </a>
            <br />
            <p>{props.other.instruction.video2}</p>
            <a target="_blank" rel="noreferrer" style={{ display: 'block' }} href={props.video}>
                {props.video}
            </a>
        </div>
    );
}
export default function Class(props) {
    console.log(props.text);
    const section = props.class;
    if (window?.location.pathname === '/' + section.url) require('./pindex.css');
    return (
        <div className="container mt-5 p-5" id="home">
            <HashLink class="btn btn-outline-dark" to={'/syllabus#' + section.url}>
                <IoIosArrowBack />
            </HashLink>
            <div className="mt-5">
                <h2>{section.title + ' -- ' + section.description}</h2>
                {section.selfGuided && (
                    <SelfGuided
                        link={section.slidesLink}
                        video={section.video}
                        text={section.selfText}
                        other={props.text}
                    />
                )}
                {!section.selfGuided && (
                    <NotSelfGuided
                        link={section.slidesLink}
                        video={section.video}
                        other={props.text}
                        text={section.selfText}
                    />
                )}
            </div>
        </div>
    );
}
