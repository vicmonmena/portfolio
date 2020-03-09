import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import ExperienceItem from './experienceItem';

const Timeline = () => {
  
  return (
    <VerticalTimeline>
      <ExperienceItem
        itemType="work"
        title="Full Stack Engineer"
        subtitle="Telefonica S.A."
        description="Desarrollo de Software bajo metodologías Agile. Stack MEAN. Gestión de Proyecto. Desarrollo de Arquitecturas de Sistemas. Apoyo a la gerencia en la toma de decisiones."
        since="Septiembre 2017"
        to="present"
      />
      <ExperienceItem
        itemType="work"
        title="Security Project Management"
        subtitle="Eleven Paths (Telefonica Ingeniería de Seguridad)"
        description="Elaboración del Roadmap del portal de gestión de vulnerabilidades. Detección de nuevas necesidades. Apoyo en la resolución de incidencias. Trabajo con el equipo de desarrollo para la definición de funcionalidades. Workshops de la herramienta."
        since="Marzo 2017"
        to="Septiembre 2017"
      />
      <ExperienceItem
        itemType="work"
        title="Software Development Manager"
        subtitle="Telefonica Ingeniería de Seguridad"
        description="Coordinación de proyectos de desarrollo de Software"
        since="Junio 2016"
        to="Marzo 2017"
      />
      <ExperienceItem
        itemType="work"
        title="Software Engineer, Analyst and Developer"
        subtitle="Telefonica Ingeniería de Seguridad"
        description="Apoyo a la gerencia en toma de deciones técnicas. Desarrollo y mantenimiento de herramienta de gestión de incidencias. Implementanción de herramienta de gestión de BIAs"
        since="Enero 2015"
        to="Junio 2016"
      />
      <ExperienceItem itemType="star" />
    </VerticalTimeline>
  );
  
}

export default Timeline