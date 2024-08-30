import React from 'react';
// @ts-ignore
import nxtwatch from '../../../assets/pictures/projects/software/nxtwatch.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import nxttrendz from '../../../assets/pictures/projects/software/nxttrendz.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>yesuballa.live</h2>
                <br />
                <p>
                    yesuballa.live is my portfolio website, and also the
                    website you are on right now. This project was an absolute
                    joy to make and challenged me both technically and
                    creatively. Early in 2024, I knew I wanted to make an
                    interactive portfolio to aid my job search. I eventually got
                    the idea for this site around early May and began
                    development early June. I have been developing it in parallel with my React course, and if you are reading this, 
                    it is essentially complete.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    Now, a quick technical breakdown of the site. The website is
                    split into two parts, the 3D site, and the 2D OS site. The
                    3D site uses Three.js to render the scene and renders the 2D
                    site inside of it using an iframe. The 2D OS site is a
                    simple react site that is hosted{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.yesuballa.live/"
                    >
                        here
                    </a>{' '}
                    and works as a standalone web app. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.yesuballa.live/"
                        >
                            <p>
                                <b>[3D Site]</b> - yesuballa.live
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://yesu-portfolio-innersite.netlify.app/"
                        >
                            <p>
                                <b>[OS Site]</b> - yesu-portfolio.netlify.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/YesuBalla/My-Portfolio.git"
                        >
                            <p>
                                <b>[GitHub]</b> - 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/YesuBalla/My-Portfolio-InnerSite.git"
                        >
                            <p>
                                <b>[GitHub]</b> - OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to follow me on LinkedIn{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/yesuballa/"
                    >
                        @yesuballa
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h2>Nxt Watch(Youtube Clone)</h2>
                <br />
                <br />
                <p>
                Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of
                videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details, and
                users can toggle the theme (Light/Dark).
                <br />
                <br />
                *Implemented Different pages like Login, Home, Trending, Gaming, Saved videos using React
                components, props, state, lists, event handlers, form inputs.
                <br />
                <br />
                *Authenticating by taking username, password and doing login post HTTP API Call.
                <br />
                <br />
                *Persisted user login state by keeping jwt token in local storage, Sending it in headers of further API calls
                to authorize the user.
                <br />
                <br />
                *Implemented different routes for Login, Home, Trending, Gaming, Saved videos, Video item details
                pages by using React Router components Route, Switch, Link.
                <br />
                <br />
                *Redirecting to the login page if the user tries to open Home, Trending, Gaming, Saved videos, Video
                item details routes which need authentication by implementing protected Route.
                <br />
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={nxtwatch} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> The Nxt Watch application is a professional YouTube clone with similar video streaming features.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                <br />
                Technologies used: React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token,
                Authorization, Authentication.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://yesuwatch.ccbp.tech/"
                        >
                            <p>
                                <b>[Site]</b> - Nxt Watch
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/YesuBalla/Nxt-Watch-App.git"
                        >
                            <p>
                                <b>[GitHub]</b> - Nxt Watch
                                Assets Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Nxt-Trendz(ECommerce Clone-Amazon,Flipkart)</h2>
                <br />
                <p>
                Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where
                users can login and can see list of products with search, filters, sort by, etc..
                <br />
                <br />
                *Implemented Different pages and routes for Login, Products, Product details using React Router
                components Route, Switch, Link, props, state, lists, event handlers, form inputs.
                <br />
                <br />
                *Authenticating and authorizing users by taking username, password and doing login POST HTTP API
                Call and implementing filters by sending them as query parameters to product api calls.
                <br />
                <br />
                *Persisted user login state by keeping jwt token in local storage, Sending it in headers of further api calls
                to authorize the user. 
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={nxttrendz} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> A sleek eCommerce app with user login, product listings, 
                            search, and sorting features.
                        </sub>
                    </p>
                </div>
                <p>
                Technologies used: React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token,
                Authorization, Authentication
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://nxttrndsbyk.ccbp.tech/"
                        >
                            <p>
                                <b>[Site]</b> - Nxt Trendz
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://chrome.google.com/webstore/detail/skip-the-scroll/mfehannpjmgfagldoilpngeoecdfgmnd"
                        >
                            <p>
                                <b>[GitHub]</b> - Nxt Trendz
                                Assets Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                Technologies used: React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token,
                Authorization, Authentication
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
