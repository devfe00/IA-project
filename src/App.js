import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    interest: '',
    location: ''
  });
  const [connections, setConnections] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const generateConnections = () => {
    const possibleConnections = [
      {
        name: 'Maria Silva',
        description: 'Especialista em IA aplicada ao Direito, com foco em automação de análises contratuais.',
        interests: ['Direito', 'Tecnologia', 'IA', 'Jurimetria', 'Legal Tech'],
        locations: ['São Paulo', 'Campinas', 'Rio de Janeiro']
      },
      {
        name: 'João Oliveira',
        description: 'Desenvolvedor full stack com experiência em projetos de legal tech e soluções para escritórios de advocacia.',
        interests: ['Programação', 'Tecnologia', 'Legal Tech', 'Direito Digital', 'Desenvolvimento Web'],
        locations: ['São Paulo', 'Belo Horizonte', 'Brasília']
      },
      {
        name: 'Ana Costa',
        description: 'Advogada com especialização em direito digital e proteção de dados, interessada em soluções tecnológicas para o setor jurídico.',
        interests: ['Direito', 'LGPD', 'Legal Tech', 'Privacidade', 'Tecnologia'],
        locations: ['Rio de Janeiro', 'São Paulo', 'Curitiba']
      },
      {
        name: 'Pedro Santos',
        description: 'Product Manager com background em ciência de dados e experiência em produtos para o setor jurídico.',
        interests: ['Gestão de Produtos', 'Tecnologia', 'UX/UI', 'Legal Tech', 'Ciência de Dados'],
        locations: ['São Paulo', 'Porto Alegre', 'Florianópolis']
      },
      {
        name: 'Camila Mendes',
        description: 'Pesquisadora em NLP e processamento de documentos jurídicos, com publicações sobre análise automatizada de jurisprudência.',
        interests: ['Pesquisa', 'NLP', 'Machine Learning', 'Direito', 'IA'],
        locations: ['Brasília', 'São Paulo', 'Salvador']
      },
      {
        name: 'Lucas Ferreira',
        description: 'Engenheiro de software sênior especializado em arquitetura de sistemas para empresas de tecnologia jurídica.',
        interests: ['Arquitetura de Software', 'Tecnologia', 'Cloud Computing', 'Legal Tech', 'Desenvolvimento'],
        locations: ['São Paulo', 'Curitiba', 'Recife']
      }
    ];

    const matchedConnections = possibleConnections.map(connection => {
      
      let affinityScore = 50; 
      
      // compatibilidade de interesses
      const userInterest = formData.interest.toLowerCase();
      const matchingInterests = connection.interests.filter(interest => 
        interest.toLowerCase().includes(userInterest) || 
        userInterest.includes(interest.toLowerCase())
      );
      
      affinityScore += matchingInterests.length * 10; 
      
      // compatibilidade de localização
      const userLocation = formData.location.toLowerCase();
      const locationMatch = connection.locations.some(location => 
        location.toLowerCase().includes(userLocation) || 
        userLocation.includes(location.toLowerCase())
      );
      
      if (locationMatch) affinityScore += 15; 
      
      affinityScore += Math.floor(Math.random() * 10);
      
      affinityScore = Math.min(affinityScore, 99);
      
      return {
        ...connection,
        affinity: affinityScore
      };
    });

    return matchedConnections
      .sort((a, b) => b.affinity - a.affinity)
      .slice(0, 3);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.interest && formData.location) {
      const results = generateConnections();
      setConnections(results);
      setShowResults(true);
    } else {
      alert('Por favor, preencha todos os campos');
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Match Inteligente</h1>
        <p>Encontre profissionais com interesses e habilidades compatíveis</p>
      </header>

      <main>
        <section className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="interest">Area de Interesse</label>
              <input
                type="text"
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                placeholder="Ex: Legal Tech, Direito Digital, IA..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Localização</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Sua cidade"
                required
              />
            </div>

            <button type="submit" className="search-button">
              Buscar Conexões
            </button>
          </form>
        </section>

        {showResults && (
          <section className="results-section">
            <h2>Conexões Encontradas</h2>
            
            {connections.length > 0 ? (
              <div className="connections-list">
                {connections.map((connection, index) => (
                  <div className="connection-card" key={index}>
                    <div className="connection-header">
                      <h3>{connection.name}</h3>
                      <span className="affinity-badge">
                        {connection.affinity}% de afinidade
                      </span>
                    </div>
                    <p>{connection.description}</p>
                    <div className="connection-details">
                      <p><strong>Interesses:</strong> {connection.interests.join(', ')}</p>
                      <p><strong>Localizações:</strong> {connection.locations.join(', ')}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-results">Nenhuma conexão encontrada. Tente outras áreas de interesse ou localização.</p>
            )}
          </section>
        )}
      </main>

      <footer>
        <p>©2025 LEGAL.AI - Desafio MVP de Match Inteligente</p>
      </footer>
    </div>
  );
}

export default App;
