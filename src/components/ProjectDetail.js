import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../data/projectData';
import '../css/ProjectDetail.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [showSpecs, setShowSpecs] = useState(false);
  const [showRepo, setShowRepo] = useState(false);
  const { projectTitle } = useParams(); 

  useEffect(() => {
    const foundProject = projects.find(p => p.id === projectTitle);
    if (foundProject) {
      setProject(foundProject);
    } else {
      console.error('Project not found');
    }
  }, [projectTitle]);

  if (!project) {
    return <div>Loading project details...</div>;
  }

  const toggleSpecs = () => {
    setShowSpecs(!showSpecs);
  };

  const toggleRepo = () => {
    setShowRepo(!showRepo);
  };

  const getIcon = (isActive) => {
    return isActive ? faChevronUp : faChevronDown;
  };

  return (
    <div className="project-detail-container">
      <h1 className="project-title">{project.title}</h1>
      <img src={project.getImageSrc()} alt={project.title} className="project-image"/>
      <p className="project-description">{project.description}</p>

      {/* Collapsible section for project specifications */}
      <div className={`collapsible-section ${showSpecs ? 'active' : ''}`} onClick={toggleSpecs}>
        <span>Project Specifications</span>
        <FontAwesomeIcon icon={getIcon(showSpecs)} className="fa-icon" />
      </div>
      {/* Content section immediately follows the toggle for CSS sibling selector */}
      {showSpecs && (
        <div className="content">
          {<div dangerouslySetInnerHTML={{ __html: project.specification }} />}
        </div>
      )}

      {project.hasReport || project.hasCode ? (
        <div className={`collapsible-section ${showRepo ? 'active' : ''}`} onClick={toggleRepo}>
          <span>{project.hasReport ? 'Technical Report' : 'GitHub Repository'}</span>
          <FontAwesomeIcon icon={getIcon(showRepo)} className="fa-icon" />
        </div>
      ) : null}

      {/* Content section for GitHub link or PDF */}
      {showRepo && (
        <div className="content">
          {project.hasReport ? (
            // Assuming the report is stored in a 'reports' folder in 'public'
            <a href={`${process.env.PUBLIC_URL}/reports/${project.id}.pdf`} className="project-pdf-link" download>Download Technical Report</a>
          ) : null}
          {project.hasCode ? (
            // Replace `project.githubLink` with the actual GitHub link of your project
            <a href={project.githubLink} className="project-github-link" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
          ) : null}
        </div>
      )}
      

      <div className="back-to-home-wrapper">
        <Link to="/" className="back-to-home">Back to Home</Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
