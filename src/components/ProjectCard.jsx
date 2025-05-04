// src/components/ProjectCard.jsx
import React from 'react';
import { FaLink } from 'react-icons/fa'; // Ícone de link

const ProjectCard = ({ title, description, imgSrc, tags = [], link = "#", delayClass }) => {
  return (
    <div className={`project-card group flex flex-col rounded-lg border border-border-color bg-bg-card shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-accent hover:shadow-lg hover:bg-[rgba(255,255,255,0.02)] overflow-hidden animate-on-scroll fade-in ${delayClass}`}>
      <a href={link} className="project-img-link relative block overflow-hidden" aria-label={`Ver detalhes do Projeto ${title}`}>
        <img
          src={imgSrc || "https://via.placeholder.com/400x210.png?text=Projeto"} // Placeholder
          alt={title}
          className="project-img h-[210px] w-full object-cover transition-transform duration-400 ease-in-out group-hover:scale-105 border-b border-border-color"
        />
        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(18,18,18,0.75)] text-white text-4xl opacity-0 transition-opacity duration-400 group-hover:opacity-100">
          <FaLink />
        </div>
      </a>
      <div className="project-content flex flex-grow flex-col p-7">
        <h3 className="project-title mb-2 text-xl font-semibold text-text-primary">{title}</h3>
        <p className="project-description mb-6 flex-grow text-sm text-text-secondary">{description}</p>
        <div className="project-tags mt-auto flex flex-wrap gap-2 pt-4">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag rounded bg-accent-light px-3 py-1 text-xs font-medium text-accent">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;