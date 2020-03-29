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
      <ExperienceItem
        itemType="work"
        title="Software Developer"
        subtitle="SOLTEL"
        description="Encargado de realizar tareas de desarrollo e integración con software: Liferay + JSF + Java + HTML + CSS + Alfresco"
        since="Noviembre 2014"
        to="Diciembre 2014"
      />
      <ExperienceItem
        itemType="work"
        title="Software Developer"
        subtitle="Abengoa (Simosa IT)"
        description="Encargado de tareas de soporte para software BPM Bizagi"
        since="Junio 2013"
        to="Noviembre 2014"
      />
      <ExperienceItem
        itemType="work"
        title="Software Developer"
        subtitle="SOLTEL"
        description="Trabajé realizando tareas de desarrollo con Drupal, JEE, Android, estimación, análisis y demos a clientes."
        since="Marzo 2013"
        to="Junio 2013"
      />
      <ExperienceItem
        itemType="work"
        title="Web and Mobile Developer"
        subtitle="Abengoa (Simosa IT)"
        description="Realicé tareas de desarrollo y correcciones sobre aplicaciones Web JEE y app para Blackberry"
        since="Agosto 2012"
        to="Marzo 2013"
      />
      <ExperienceItem
        itemType="work"
        title="Software Developer"
        subtitle="SOLTEL"
        description="Desarrollo web con Bonita BPM"
        since="Febrero 2012"
        to="Agosto 2012"
      />
      <ExperienceItem
        itemType="work"
        title="Android Developer"
        subtitle="SOLTEL"
        description="Desarrollo de app GlutenFreeList para dispositivos Android"
        since="Septiembre 2011"
        to="Febrero 2012"
      />
      <ExperienceItem
        itemType="work"
        title="Junior Software Developer"
        subtitle="SOLTEL"
        description="Trabajé realizando tareas de desarrollo web (J2EE, Struts2, Ibernate, OpenCMS)."
        since="Julio 2009"
        to="Septiembre 2011"
      />
      <ExperienceItem
        itemType="work"
        title="Programador en Prácticas"
        subtitle="SOLTEL"
        description="Desarrollador web para plataformas J2EE y .NET Web application development based on JEE platform and .NET framework"
        since="Junio 2009"
        to="Julio 2009"
      />
      <ExperienceItem itemType="star" />
    </VerticalTimeline>
  );
  
}

export default Timeline