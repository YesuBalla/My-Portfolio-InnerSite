import React from 'react';
// @ts-ignore
import FinVisual from '../../../assets/pictures/projects/software/FinVisual.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import Todo from '../../../assets/pictures/projects/software/Todo.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps { }

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
                        href="https://my-portfolio-2yu6.onrender.com"
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
                            href="https://my-portfolio-2yu6.onrender.com"
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
                <h2>FinVisual – Personal Finance Tracker</h2>
                <br />
                <br />
                <p>
                    Developed a secure full-stack web application using Next.js and MongoDB that enables users to manage personal finances through a clean,
                    interactive dashboard with transaction tracking and dynamic visualizations of spending trends.
                    <br />
                    <br />
                    *Implemented secure login with email/password and social logins (Google, GitHub) using NextAuth.
                    <br />
                    <br />
                    *Designed protected REST APIs using Mongoose so users can safely add, update, delete, and
                    view their own transactions.
                    <br />
                    <br />
                    *Used Zustand for state management and styled the UI with Tailwind CSS and Shadcn for a responsive and accessible interface.
                    <br />
                    <br />
                    *Added interactive pie and bar charts to visualize spending trends by category and over time.
                    <br />
                    <br />
                    *Currently working on adding automated insights using data science techniques to help users
                    better understand their spending behavior.
                    <br />
                    <br />
                    *Developed a /api/seed-transactions route to instantly populate test data for demo and development.
                    <br />
                    <br />
                    *More features are being added to enhance usability and insights.
                    <br />
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={FinVisual} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> FinVisual is a professional personal finance tracker with interactive dashboards and insightful spending analytics.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    <br />
                    Tech Stack: Next.js 14, MongoDB, NextAuth, Zustand, Tailwind CSS, Shadcn, Axios, Chart.js
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://personal-finance-visualizer-wheat-two.vercel.app/signin"
                        >
                            <p>
                                <b>[Site]</b> - FinVisual
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/YesuBalla/Personal-Finance-Visualizer.git"
                        >
                            <p>
                                <b>[GitHub]</b> - FinVisual
                                Assets Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>ToDo App – MERN Stack Task Manager</h2>
                <br />
                <p>
                    Engineered a fully featured, production-ready task management web application from the ground up using the MERN stack (MongoDB, Express.js, React.js, Node.js),
                    delivering seamless full-stack functionality with user authentication, task operations, and responsive UI.
                    <br />
                    <br />
                    *Enabled secure user registration, login, and password change functionality using JWT,
                    bcrypt for hashing, and JoiPasswordComplexity for validation.
                    <br />
                    <br />
                    *Designed modular RESTful APIs with Express and Mongoose to allow users to create, update, delete, and view personal tasks securely.
                    <br />
                    <br />
                    *Built an interactive frontend using React with React-Bootstrap for responsive design and floating input labels.
                    <br />
                    *Implemented task pagination and CSV file upload support to allow batch task creation on both client and server.
                    <br />
                    <br />
                    *Used localStorage to persist login sessions and reload authenticated views dynamically.
                    <br />
                    <br />
                    *Deployed backend on Render and frontend on Netlify with a polished UI and smooth user experience.
                    <br />
                    <br />
                    *Future updates include drag-and-drop task reordering and due-date reminders.
                    <br />
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={Todo} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> ToDo App is a modern task management system with secure authentication and intuitive features for organizing daily activities.
                        </sub>
                    </p>
                </div>
                <p>
                    Tech Stack: MongoDB, Express.js, React.js, Node.js, JWT, React-Bootstrap, Axios, CSV-Parser
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://todo-app-yesuballa.netlify.app"
                        >
                            <p>
                                <b>[Site]</b> - ToDo App
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/YesuBalla/ToDoApp-MERN.git"
                        >
                            <p>
                                <b>[GitHub]</b> - ToDo
                                Assets Repository
                            </p>
                        </a>
                    </li>
                </ul>
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
