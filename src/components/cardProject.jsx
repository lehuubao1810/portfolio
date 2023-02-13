const CardProject = (props) => {
    const skills = props.project.skills.split(", ");
    const isWeb = props.project.type === "web";
    return(
        <div className="card-project">
            <div className="card-project__image">
                <img src={props.project.image} alt={props.project.title} />
            </div>
            <div className="card-project__content">
                <h3 className="card-project__title">{props.project.title}</h3>
                <p className="card-project__description">{props.project.description}</p>
                <div className="card-project__skills">
                    {skills.map((skill, index) => {
                        return(
                            <span className="card-project__skill" key={index}>{skill}</span>
                        )
                    })
                    }
                </div>
                <div className="card-project__links">
                    <a href={props.project.github}><i className="fa-brands fa-github"></i></a>
                    <a href={props.project.preview}>
                        {
                            isWeb ?
                            <i className="fa-solid fa-up-right-from-square"></i> :
                            <i className="fa-solid fa-mobile-screen"></i>
                        }
                    </a>
                </div>
            </div>
        </div>
    )
};

export default CardProject;