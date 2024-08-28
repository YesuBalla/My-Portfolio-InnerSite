import React from 'react';
import fellowAt from '../../assets/pictures/fellowAt.jpg';
import meNow from '../../assets/pictures/myPhoto.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Yesu Balla</h3>
            <br />
            <div className="text-block">
                <p>
                I am an aspiring Full Stack Developer. In May 2021, 
                I graduated with a Bachelor's degree in Computer Science from Samhitha Degree and PG College.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:yesushakir@gmail.com">
                        yesushakir@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                From a young age, I’ve been fascinated by how things work, which naturally sparked my obsession with technology and passion for building. 
                After graduating, I joined Nxt Wave Online Institute for my first in-depth exposure to programming. In 2023, my family and 
                I relocated from Kakinada to Rajahmundry, where I completed my middle school, high school, and college education.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={fellowAt} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> An image that captures and represents who I am. :)
                        </sub>
                    </p>
                </div>

                <p>
                I began focusing on programming more seriously during my undergraduate studies,
                    initially learning how to scrape and interact with websites.
                    I went on to do a ton of passion projects, many of them with
                    one of my closest friends,{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/lakshmi-swamy-nemala-1aba51169/"
                    >
                        Swamy Nemala
                    </a>
                    . We worked on many projects together, including chat bots,
                    multiple projects, apps, and more. One of these
                    projects is viewable on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                {/* <p>
                    In 2017, I got accepted into Rennselear Polytechnic
                    Institute to study Computer Science. It was my first choice
                    and I was absolutely ecstatic to be going to such a great
                    university. At the end of my sophomore year, I got an
                    internship working for the startup Hover, primarily focusing
                    on frontend work. I continued to work at Hover on and off
                    for about a year and a half, until the start of my senior
                    year when I decided to focus on other opportunities.
                </p> */}
                {/* <br /> */}
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time. The more tangible
                            hobbies I have are{' '}
                            <Link to="/projects/music">Music Production</Link>{' '}
                            and creating{' '}
                            <Link to="/projects/art">Digital Art</Link>. You can
                            read more about each of these on their respective
                            pages under my projects tab. Some other hobbies I
                            enjoy are working out, Photography, and (unsurprisingly)
                            playing video games.
                        </p>
                        <br />
                        <p>
                        In college, I was actively involved in cultural activities and held several leadership roles in related organizations. 
                        I connected with many wonderful people and thoroughly enjoyed contributing to and being part of the college community.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2023
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on LinkedIn{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/yesuballa/"
                    >
                        @yesuballa
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:yesushakir@gmail.com">
                        yesuballa@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
