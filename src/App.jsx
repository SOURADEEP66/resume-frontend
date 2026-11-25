import { resume } from "./data/resume";
import VisitorCounter from "./components/VisitorCounter";

export default function App() {
  return (
    <main>
      <h1>{resume.name}</h1>
      

      <p>{resume.title}</p>
      <p>{resume.email}</p>

      <h2>About</h2>
      <p>{resume.about}</p>

      <h2>Skills</h2>
      <ul>
        {resume.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      {resume.experience.length > 0 && (
  <>
    <h2>Experience</h2>
    {resume.experience.map((job) => (
      <div key={job.role + job.company}>
        <h3>{job.role} · {job.company}</h3>
        <p>{job.period}</p>
        <ul className="points">
          {job.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </>
)}

      <h2>Projects</h2>
      {resume.projects.map((project) => (
        <div key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}

      <h2>Education</h2>
      {resume.education.map((edu) => (
        <div key={edu.school}>
          <h3>{edu.degree}</h3>
          <p>{edu.school} · {edu.period}</p>
        </div>
      ))}
      <VisitorCounter />
    </main>
  );
}