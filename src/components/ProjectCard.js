import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  webLink,
  gitLink,
  additionalLink, // New prop for the additional link
  isGymSection = false,  // New prop to determine if it's the gym section
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className={`proj-imgbx ${isGymSection ? 'facility-feature' : ''}`}>
        {imgUrl ? (
          <img src={imgUrl} alt={title} />
        ) : (
          <div className="placeholder-image">No Image Available</div>
        )}
        <div className={`proj-txtx ${isGymSection ? 'facility-feature' : ''}`}>
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <br />
          {webLink && (
            <a href={webLink} className="projectbtn" target="_blank" rel="noopener noreferrer">
              View Website
            </a>
          )}
          {gitLink && (
            <a href={gitLink} className="projectbtn" target="_blank" rel="noopener noreferrer">
              View GitHub Repo
            </a>
          )}
          {additionalLink && (
            <a href={additionalLink} className="projectbtn" target="_blank" rel="noopener noreferrer">
              View Content
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
