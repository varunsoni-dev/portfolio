import "./About.css";

function About() {

    const aboutCards = [

        {
            title:"🎓 Education",
            description:"B.E. CSE (AI) with Microsoft Program"
        },

        {
            title:"💻 Focus",
            description:"Artificial Intelligence & Full Stack Development"
        },

        {
            title:"🚀 Career Goal",
            description:"AI Software Engineer"
        },

        {
            title:"🌍 Based In",
            description:"India • Open to Global Opportunities"
        }

    ];

    return (

        <section className="about" id="about">

            <div className="about-grid">

                <div className="about-text-content">

                    <h2 className="section-title">
                        About Me
                    </h2>

                    <p className="about-text">
                        Hi, I'm <span className="highlight">Varun Soni</span>, a passionate
                        Computer Science student specializing in
                        <span className="highlight"> Artificial Intelligence</span> through
                        Microsoft's industry-integrated program.

                        <br /><br />

                        I enjoy building intelligent software, modern web applications,
                        and solving real-world problems using technology. My interests
                        include AI, Full Stack Development, and creating clean,
                        user-friendly digital experiences.

                        <br /><br />

                        My goal is to become an
                        <span className="highlight"> AI Software Engineer</span> 
                        working on products that impact millions of users worldwide.
                        I'm continuously learning new technologies and improving my
                        problem-solving skills every day.
                    </p>

                </div>

                <div className="about-info">

                    {
                        aboutCards.map((card) => (

                            <div
                                className="info-card"
                                key={card.title}
                            >

                                <h3>{card.title}</h3>

                                <p>{card.description}</p>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

    );

}

export default About;