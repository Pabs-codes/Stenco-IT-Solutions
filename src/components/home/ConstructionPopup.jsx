import { useState, useEffect } from 'react';
import { Send, Clock, Lightbulb, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const ConstructionPopup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [idea, setIdea] = useState('');
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 60000); // Automatically close after 60 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleIdeaSubmit = () => {
    const whatsappUrl = `https://wa.me/+94779976585?text=${encodeURIComponent(idea)}`;
    window.open(whatsappUrl, '_blank');
    setIdea('');
  };

  if (!showPopup) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.heading}> Stenco IT Solutions:<br/> Coming Soon! </h2>
        
        <div style={styles.tabs}>
          <button 
            style={{...styles.tabButton, ...(activeTab === 'about' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button 
            style={{...styles.tabButton, ...(activeTab === 'features' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button 
            style={{...styles.tabButton, ...(activeTab === 'contact' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </button>
        </div>
        
        {activeTab === 'about' && (
          <div style={styles.tabContent}>
            <p style={styles.text}>
              Welcome to the future of IT solutions! We're working hard to bring you a revolutionary 
              platform that will transform your digital experience. Stay tuned for our grand launch!
            </p>
            <div style={styles.featuresPreview}>
              <div style={styles.feature}><Clock size={24} /> 24/7 Support</div>
              <div style={styles.feature}><Lightbulb size={24} /> Innovative Solutions</div>
              <div style={styles.feature}><GithubIcon size={24} /> Open Source Friendly</div>
            </div>
          </div>
        )}
        
        {activeTab === 'features' && (
          <div style={styles.tabContent}>
            <h3 style={styles.subheading}> Upcoming Features</h3>
            <ul style={styles.featureList}>
              <li>AI-powered IT infrastructure management</li>
              <li>Blockchain-based secure data storage</li>
              <li>Quantum computing integration for complex problem-solving</li>
              <li>Virtual and augmented reality training modules</li>
              <li>Green IT solutions for sustainable computing</li>
            </ul>
          </div>
        )}
        
        {activeTab === 'contact' && (
          <div style={styles.tabContent}>
            <h3 style={styles.subheading}>💡 Share Your Ideas</h3>
            <p style={styles.text}>We value your input! Send us your ideas via WhatsApp:</p>
            <div style={styles.inputGroup}>
              <input 
                type="text" 
                value={idea} 
                onChange={(e) => setIdea(e.target.value)} 
                placeholder="Your brilliant idea..."
                style={styles.input}
              />
              <button onClick={handleIdeaSubmit} style={styles.sendButton}>
                <Send size={20} />
              </button>
            </div>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialIcon}><LinkedinIcon size={24} /></a>
              <a href="#" style={styles.socialIcon}><TwitterIcon size={24} /></a>
              <a href="#" style={styles.socialIcon}><GithubIcon size={24} /></a>
            </div>
          </div>
        )}
        
        <button onClick={handleClose} style={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(60, 60, 60, 0.8))',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    animation: 'fadeIn 0.5s ease-in-out',
  },
  modal: {
    backgroundColor: '#282c34',
    padding: '60px',
    borderRadius: '20px',
    textAlign: 'center',
    maxWidth: '550px',
    width: '100%',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
    animation: 'scaleIn 0.3s ease-in-out',
  },
  heading: {
    color: '#fafafa',
    fontSize: '30px',
    marginBottom: '20px',
  },
  subheading: {
    color: '#15b380',
    marginBottom: '15px',
    fontSize: '22px',
  },
  text: {
    color: '#eee',
    marginBottom: '20px',
    lineHeight: '1.8',
    fontSize: '16px',
  },
  closeButton: {
    marginTop: '20px',
    padding: '12px 30px',
    backgroundColor: '#ff4b5c',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 10px rgba(255, 75, 92, 0.3)',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    backgroundColor: '#444',
    borderRadius: '8px',
  },
  tabButton: {
    flex: 1,
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    fontWeight: 'bold',
  },
  activeTab: {
    backgroundColor: '#15b380',
    borderRadius: '8px',
    transform: 'scale(1.1)',
  },
  tabContent: {
    minHeight: '180px',
    animation: 'fadeIn 0.3s ease-in-out',
  },
  featuresPreview: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: '16px',
  },
  featureList: {
    color: '#eee',
    textAlign: 'left',
    paddingLeft: '20px',
    lineHeight: '1.6',
  },
  inputGroup: {
    display: 'flex',
    marginBottom: '20px',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '10px 0 0 10px',
  },
  sendButton: {
    padding: '12px',
    backgroundColor: '#00b894',
    color: '#fff',
    border: 'none',
    borderRadius: '0 10px 10px 0',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 10px rgba(0, 184, 148, 0.3)',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  socialIcon: {
    color: '#fff',
    margin: '0 10px',
    transition: 'color 0.3s ease',
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  '@keyframes scaleIn': {
    from: { transform: 'scale(0.9)' },
    to: { transform: 'scale(1)' },
  },
};

export default ConstructionPopup;
