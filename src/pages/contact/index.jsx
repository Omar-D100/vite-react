import { useState } from 'react';
import './style.css';

function App() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    societe: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      <h1>Entrer en contact</h1>
      <p className="subtitle">
        Si vous avez des questions, une opportunité demploi ou un projet en tête,
        nhésitez pas à me contacter. Je suis impatient de discuter de la manière dont
        nous pourrions collaborer.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="prenom">
              Prénom <span className="required">*</span>
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="nom">
              Nom <span className="required">*</span>
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="societe">Société</label>
            <input
              type="text"
              id="societe"
              name="societe"
              value={formData.societe}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="message">
            Votre message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Écrivez votre message ici."
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default App;