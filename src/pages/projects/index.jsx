import './style.css'; // Import du fichier CSS
import SophieBluelImg from '../../assets/sophie-bluel.webp'; // Import de l'image
import BookiImg from '../../assets/Booki.webp';
import OhMyFoodImg from '../../assets/oh-my-food.webp';
import ArgentBankimg from '../../assets/Argent-Bank.webp';
import NinaCarducciimg from '../../assets/Nina-Carducci.webp';
import Kasaimg from '../../assets/Kasa.webp';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Booki',
      description: 'Plateforme de réservation d’hôtels et logements.',
      image: BookiImg,
      link: '#', 
    },
    {
      id: 2,
      title: 'Oh Myfood',
      description: 'Site vitrine pour des restaurants proposant des menus interactifs.',
      image: OhMyFoodImg ,
      link: 'https://github.com/Omar-D100/Omar_Derouich_4_Ohmyfoods_06.2024',
    },
    {
      id: 3,
      title: 'Sophie Bluel',
      description: 'Description du troisième projet : Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image: SophieBluelImg,
      link: 'https://github.com/Omar-D100/Omar_Derouich_6_Sphie-Bluel_08.2024',
    },


    {
      id: 4,
      title: 'Kasa',
      description: 'Description du quatrième projet : Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
      image: Kasaimg ,
      link: 'https://github.com/Omar-D100/Omar_Derouich_7_Kasa_09.2024',
    },
    {
      id: 5,
      title: 'Nina-Carducci',
      description: 'Description du cinquième projet : Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
      image: NinaCarducciimg,
      link: 'https://github.com/Omar-D100/Omar_Derouich_8_Nina-Carducci_11.2024',
    },
    {
      id: 6,
      title: 'Argent Bank',
      description: 'Description du sixième projet : Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      image:ArgentBankimg ,
      link: 'https://github.com/Omar-D100/Omar_Derouich_10_AgentBank_12.2024',
    },
  ];

  return (
    <section className="projects-page">
      <div className="projects-container">
        <h2>Mes Projets</h2>
        <p>Découvrez mes projets récents.</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>

              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;