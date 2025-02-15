import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass , FaGitAlt , FaGithub } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import "./style.css";

export default function SkillsGrid() {
  const skills = [
    {
      category: "Intégration Web",
      skills: [
        { name: "HTML5", description: "Intermédiaire", icon: <FaHtml5 className="skill-icon text-orange" /> },
        { name: "CSS3", description: "Intermédiaire", icon: <FaCss3Alt className="skill-icon text-blue" /> },
        { name: "SASS", description: "Intermédiaire", icon: <FaSass className="skill-icon text-pink" /> },
        { name: "Git", description: "Intermédiaire", icon: <FaGitAlt className="skill-icon text-orange" /> },
        { name: "GitHub", description: "Intermédiaire", icon: <FaGithub className="skill-icon" /> }
      ]
    },
    {
      category: "Front-End",
      skills: [
        { name: "JavaScript", description: "Base", icon: <FaJs className="skill-icon text-yellow" /> },
        { name: "React", description: "Base", icon: <FaReact className="skill-icon text-blue-light" /> },
        { name: "Redux", description: "Base", icon: <SiRedux className="skill-icon text-purple" /> }
      ]
    }
  ];

  return (
    <div className="skills-container">
      {/* ✅ Titre bien séparé de la grille */}
      <h2 className="skills-title">Mes compétences</h2>

      {/* ✅ Conteneur des catégories */}
      <div className="skills-grid">
        {skills.map((group, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{group.category}</h3>
            <div className="skill-list">
              {group.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  {skill.icon}
                  <span className="skill-name">{skill.name}</span>
                  {skill.description && <span className="skill-description">{skill.description}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
