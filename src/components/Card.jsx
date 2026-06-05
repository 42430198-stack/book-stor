function Card({ image, text, link }) {
    return (
        <div className="card h-100 shadow-sm d-flex flex-column">
            <img 
                src={image} 
                className="card-img-top" 
                alt={text}
                style={{
                    height: "250px",
                    objectFit: "cover",
                    objectPosition: "center"
                }}
            />
            <div className="card-body d-flex flex-column flex-grow-1">
                <p className="card-text flex-grow-1">{text}</p>
                <a
                    href={link}
                    className="btn btn-primary btn-sm w-100"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        fontSize: "14px",
                        padding: "6px 12px",
                        height: "38px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "auto"
                    }}
                >
                    Learn More
                </a>
            </div>
        </div>
    );
}

export default Card;