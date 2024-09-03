import React from 'react';
import './Gallery.css';
import { ProjectCard } from '../components/ProjectCard';

// Import images
import image2024 from '../assets/images/image2024.jpg';
import image2023 from '../assets/images/image2023.jpg';
import image2022 from '../assets/images/image2022.jpg';
import image2021 from '../assets/images/image2021.jpg';

const galleryProjects = [
  {
    title: "2024",
    description: "View and order photos from 2024.",
    imgUrl: image2024,
    additionalLink: "https://skphotography.smugmug.com/MGT-2024"
  },
  {
    title: "2023",
    description: "View and order photos from 2023.",
    imgUrl: image2023,
    additionalLink: "https://skphotography.smugmug.com/MG-Tumbling-2023"
  },
  {
    title: "2022",
    description: "View and order photos from 2022.",
    imgUrl: image2022,
    additionalLink: "https://skphotography.smugmug.com/MGT-2022"
  },
  {
    title: "2021",
    description: "View and order photos from 2021.",
    imgUrl: image2021,
    additionalLink: "https://skphotography.smugmug.com/MGTumbling"
  },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>Gallery</h1>
        <p>
          Photos can be ordered or downloaded through{' '}
          <a href="https://skphotography.smugmug.com/" className="gallery-link">
            SK Photography
          </a>{' '}
          | (801) 388-7555
        </p>
      </div>
      <div className="gallery-items">
        {galleryProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            additionalLink={project.additionalLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
