const CardProject = (props) => {
    const skills = props.skills.split(", ");
    const isWeb = props.type === "web";
    return(
        <div className="card-project">
            <div className="card-project__image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="card-project__content">
                <h3 className="card-project__title">{props.title}</h3>
                <p className="card-project__description">{props.description}</p>
                <div className="card-project__skills">
                    {skills.map((skill, index) => {
                        return(
                            <span className="card-project__skill" key={index}>{skill}</span>
                        )
                    })
                    }
                </div>
                <div className="card-project__links">
                    <a href={props.github}><i className="fa-brands fa-github"></i></a>
                    <a href={props.preview}>
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