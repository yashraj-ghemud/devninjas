// EduNexus: The Ultimate Learning Ecosystem
// Enhanced Interactive Learning Platform with Comprehensive Content

class EduNexus {
  constructor() {
    this.currentSection = 'hub';
    this.achievements = [];
    this.learningProgress = 0;
    this.selectedTutor = null;
    this.selectedSubject = null;
    this.selectedSkillCategory = 'Technical Skills';
    this.selectedVREnvironment = 'ancient-rome';
    this.accessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      voiceCommands: false
    };
    this.aiTutorData = null;
    this.skillsData = null;
    this.vrData = null;
    this.collaborationData = null;
    this.init();
  }

  init() {
    this.loadApplicationData();
    this.setupEventListeners();
    this.startLoadingSequence();
    this.initializeParticleSystem();
    this.startProgressTracking();
    this.setupAccessibilityFeatures();
  }

  // Load application data from the provided JSON
  loadApplicationData() {
    this.aiTutorData = {
      subjects: [
        {
          name: "Mathematics",
          icon: "fas fa-calculator",
          description: "Algebra, Geometry, Calculus, Statistics",
          features: ["Step-by-step solutions", "Interactive graphs", "Problem generators", "Concept explanations"],
          difficultyLevels: ["Beginner", "Intermediate", "Advanced", "Expert"]
        },
        {
          name: "Science", 
          icon: "fas fa-atom",
          description: "Physics, Chemistry, Biology, Earth Science",
          features: ["Virtual experiments", "3D molecular models", "Lab simulations", "Theory explanations"],
          difficultyLevels: ["Elementary", "High School", "College", "Research"]
        },
        {
          name: "Programming",
          icon: "fas fa-code",
          description: "Python, JavaScript, HTML/CSS, Java",
          features: ["Code debugging", "Project guidance", "Algorithm explanation", "Best practices"],
          difficultyLevels: ["Beginner", "Intermediate", "Advanced", "Professional"]
        },
        {
          name: "Languages",
          icon: "fas fa-language",
          description: "English, Spanish, French, Mandarin, Hindi",
          features: ["Grammar correction", "Pronunciation guides", "Conversation practice", "Cultural context"],
          difficultyLevels: ["A1", "A2", "B1", "B2", "C1", "C2"]
        },
        {
          name: "History",
          icon: "fas fa-landmark",
          description: "World History, Ancient Civilizations, Modern Era",
          features: ["Timeline visualization", "Historical simulations", "Primary sources", "Cultural analysis"],
          difficultyLevels: ["Basic", "Intermediate", "Advanced", "Scholarly"]
        }
      ],
      tutorPersonalities: [
        {
          name: "Alex - Friendly Guide",
          description: "Encouraging and patient, perfect for beginners",
          avatar: "friendly-robot.svg",
          traits: ["Patient", "Encouraging", "Simple explanations", "Celebrates progress"]
        },
        {
          name: "Dr. Nova - Expert Mentor",
          description: "Professional and knowledgeable for advanced learners",
          avatar: "professional-ai.svg", 
          traits: ["Detailed", "Analytical", "Research-focused", "Academic approach"]
        },
        {
          name: "Spark - Creative Coach",
          description: "Innovative and inspiring for creative projects",
          avatar: "creative-bot.svg",
          traits: ["Creative", "Inspiring", "Project-based", "Out-of-the-box thinking"]
        }
      ]
    };

    this.skillsData = {
      categories: [
        {
          name: "Technical Skills",
          color: "#00ffff",
          skills: [
            {
              name: "Web Development",
              progress: 65,
              level: "Intermediate",
              prerequisites: ["HTML Basics", "CSS Fundamentals"],
              nextSkills: ["React.js", "Node.js"],
              badges: ["First Website", "Responsive Design", "JavaScript Master"],
              realWorldApplications: ["E-commerce sites", "Portfolio websites", "Web applications"]
            },
            {
              name: "Data Science",
              progress: 45,
              level: "Beginner",
              prerequisites: ["Python Basics", "Statistics"],
              nextSkills: ["Machine Learning", "Deep Learning"],
              badges: ["Data Explorer", "Visualization Pro"],
              realWorldApplications: ["Market analysis", "Healthcare research", "AI development"]
            },
            {
              name: "Mobile Development",
              progress: 30,
              level: "Beginner",
              prerequisites: ["Programming Fundamentals"],
              nextSkills: ["Flutter", "React Native"],
              badges: ["First App", "UI Designer"],
              realWorldApplications: ["iOS apps", "Android apps", "Cross-platform solutions"]
            }
          ]
        },
        {
          name: "Creative Skills",
          color: "#ff6b9d",
          skills: [
            {
              name: "Digital Art",
              progress: 80,
              level: "Advanced",
              prerequisites: ["Art Fundamentals", "Color Theory"],
              nextSkills: ["3D Modeling", "Animation"],
              badges: ["Digital Picasso", "Color Master", "Portfolio Complete"],
              realWorldApplications: ["Game assets", "Marketing materials", "Concept art"]
            },
            {
              name: "Video Production",
              progress: 55,
              level: "Intermediate", 
              prerequisites: ["Storytelling", "Basic Editing"],
              nextSkills: ["Motion Graphics", "Sound Design"],
              badges: ["First Film", "Editor Pro", "Storyteller"],
              realWorldApplications: ["YouTube content", "Corporate videos", "Documentary films"]
            }
          ]
        },
        {
          name: "Language Skills",
          color: "#4ecdc4",
          skills: [
            {
              name: "Spanish",
              progress: 70,
              level: "B2",
              prerequisites: ["Basic Grammar"],
              nextSkills: ["Advanced Conversation", "Business Spanish"],
              badges: ["Conversationalist", "Grammar Expert", "Cultural Ambassador"],
              realWorldApplications: ["International business", "Travel", "Cultural exchange"]
            },
            {
              name: "Public Speaking",
              progress: 85,
              level: "Advanced",
              prerequisites: ["Communication Basics"],
              nextSkills: ["Leadership", "Presentation Mastery"],
              badges: ["Confident Speaker", "Presentation Pro", "Audience Captivator"],
              realWorldApplications: ["Business presentations", "Academic conferences", "Leadership roles"]
            }
          ]
        },
        {
          name: "Leadership Skills",
          color: "#ffd93d",
          skills: [
            {
              name: "Team Management",
              progress: 40,
              level: "Intermediate",
              prerequisites: ["Communication", "Emotional Intelligence"],
              nextSkills: ["Strategic Planning", "Conflict Resolution"],
              badges: ["Team Player", "Motivator", "Results Driver"],
              realWorldApplications: ["Project management", "Startup leadership", "Non-profit coordination"]
            }
          ]
        }
      ]
    };

    this.vrData = {
      environments: [
        {
          id: "ancient-rome",
          name: "Ancient Rome",
          description: "Walk through the Colosseum and Roman Forum",
          subject: "History",
          duration: "45 minutes",
          features: ["3D reconstruction", "Historical figures", "Interactive artifacts", "Time-lapse evolution"],
          learningObjectives: ["Roman architecture", "Daily life in Rome", "Political system", "Cultural impact"],
          accessibilityOptions: ["Audio descriptions", "Subtitles", "Reduced motion", "Guided tour mode"]
        },
        {
          id: "space-station",
          name: "International Space Station",
          description: "Experience zero gravity and space exploration",
          subject: "Science",
          duration: "60 minutes",
          features: ["Weightlessness simulation", "Earth observation", "Equipment interaction", "Astronaut interviews"],
          learningObjectives: ["Space physics", "Life in space", "Scientific experiments", "Earth systems"],
          accessibilityOptions: ["Voice navigation", "Haptic feedback", "Visual indicators", "Simplified controls"]
        },
        {
          id: "ocean-depths",
          name: "Ocean Depths",
          description: "Explore marine ecosystems and underwater biodiversity",
          subject: "Biology",
          duration: "50 minutes",
          features: ["Marine life interactions", "Ecosystem exploration", "Pressure simulation", "Conservation messages"],
          learningObjectives: ["Marine biology", "Ecosystem relationships", "Ocean conservation", "Biodiversity"],
          accessibilityOptions: ["Color contrast options", "Species identification audio", "Swimming assistance", "Pause functionality"]
        },
        {
          id: "chemistry-lab",
          name: "Virtual Chemistry Lab",
          description: "Conduct safe chemistry experiments",
          subject: "Chemistry", 
          duration: "40 minutes",
          features: ["Molecular manipulation", "Reaction visualization", "Safety protocols", "Equipment handling"],
          learningObjectives: ["Chemical reactions", "Laboratory safety", "Molecular structure", "Scientific method"],
          accessibilityOptions: ["Voice commands", "Large text labels", "Step-by-step guidance", "Emergency stops"]
        },
        {
          id: "paris-cafe",
          name: "Paris Language Café",
          description: "Practice French in authentic Parisian setting",
          subject: "Languages",
          duration: "35 minutes", 
          features: ["Native speaker conversations", "Cultural immersion", "Real-life scenarios", "Pronunciation feedback"],
          learningObjectives: ["Conversational French", "Cultural understanding", "Practical vocabulary", "Confidence building"],
          accessibilityOptions: ["Subtitle options", "Speech rate control", "Visual cues", "Repeat functionality"]
        }
      ]
    };

    this.collaborationData = {
      features: [
        {
          name: "Global Study Groups",
          description: "Connect with students worldwide for collaborative learning",
          icon: "fas fa-users",
          capabilities: [
            "Create subject-specific study groups",
            "Schedule group study sessions",
            "Share notes and resources",
            "Video chat with screen sharing",
            "Collaborative whiteboards",
            "Group progress tracking"
          ]
        },
        {
          name: "Peer Tutoring Network",
          description: "Match with peer tutors and mentees based on skills",
          icon: "fas fa-handshake",
          capabilities: [
            "Skill-based matching algorithm",
            "One-on-one tutoring sessions",
            "Group tutoring opportunities",
            "Tutor rating and feedback system",
            "Flexible scheduling system",
            "Progress tracking for both parties"
          ]
        },
        {
          name: "Cultural Exchange Hub",
          description: "Learn about different cultures while improving language skills",
          icon: "fas fa-globe",
          capabilities: [
            "Cultural immersion experiences",
            "Language exchange partnerships",
            "Virtual cultural events",
            "International project collaborations",
            "Cross-cultural communication training",
            "Global awareness building"
          ]
        },
        {
          name: "Collaborative Projects",
          description: "Work together on real-world projects and assignments",
          icon: "fas fa-project-diagram",
          capabilities: [
            "Project management tools",
            "Real-time document collaboration",
            "Version control and history",
            "Task assignment and tracking",
            "Integrated communication tools",
            "Project showcase gallery"
          ]
        }
      ],
      activeConnections: [
        {
          name: "Maria Rodriguez",
          location: "Madrid, Spain",
          subject: "Spanish Language Exchange",
          level: "Native Speaker",
          status: "Online",
          rating: 4.8,
          languages: ["Spanish", "English"],
          interests: ["Literature", "History", "Art"]
        },
        {
          name: "Kenji Tanaka", 
          location: "Tokyo, Japan",
          subject: "Mathematics & Programming",
          level: "Advanced",
          status: "Available",
          rating: 4.9,
          languages: ["Japanese", "English"],
          interests: ["AI", "Robotics", "Game Development"]
        },
        {
          name: "Amara Johnson",
          location: "London, UK", 
          subject: "Science & Research",
          level: "Expert",
          status: "In Session",
          rating: 5.0,
          languages: ["English", "French"],
          interests: ["Biology", "Environmental Science", "Public Health"]
        },
        {
          name: "Ahmed Hassan",
          location: "Cairo, Egypt",
          subject: "History & Archaeology", 
          level: "Professional",
          status: "Online",
          rating: 4.7,
          languages: ["Arabic", "English", "French"],
          interests: ["Ancient History", "Archaeology", "Cultural Studies"]
        }
      ]
    };
  }

  // Loading Sequence with Cinematic Effects
  startLoadingSequence() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainApp = document.getElementById('mainApp');
    const loadingText = document.querySelector('.loading-text');
    
    const loadingMessages = [
      'Initializing Neural Networks...',
      'Loading AI Modules...',
      'Calibrating Holographic Interface...',
      'Establishing Global Connections...',
      'Activating Learning Matrix...',
      'System Ready!'
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      if (messageIndex < loadingMessages.length - 1) {
        loadingText.textContent = loadingMessages[messageIndex];
        messageIndex++;
      } else {
        clearInterval(messageInterval);
        setTimeout(() => {
          loadingScreen.classList.add('hidden');
          mainApp.classList.remove('hidden');
          this.startWelcomeAnimation();
          this.unlockAchievement('System Initialized', 'Welcome to the future of learning!');
          this.initializeAllSections();
        }, 1000);
      }
    }, 500);
  }

  // Initialize all sections with content
  initializeAllSections() {
    this.initializeAITutorSection();
    this.initializeSkillsSection();
    this.initializeVRSection();
    this.initializeCollaborationSection();
  }

  // Welcome Animation Sequence
  startWelcomeAnimation() {
    const title = document.querySelector('.section-title');
    const description = document.querySelector('.section-description');
    const modules = document.querySelectorAll('.learning-module');

    // Add glitch effect to title
    title.setAttribute('data-text', title.textContent);
    
    // Staggered module animations
    modules.forEach((module, index) => {
      setTimeout(() => {
        module.style.animation = `moduleSlideIn 0.8s ease-out both`;
        module.style.animationDelay = `${index * 0.1}s`;
      }, 500 + (index * 100));
    });

    this.updateProgress(10);
  }

  // Event Listeners Setup
  setupEventListeners() {
    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const section = e.target.getAttribute('data-section') || e.target.parentElement.getAttribute('data-section');
        this.navigateToSection(section);
      });
    });

    // Learning module interactions
    document.querySelectorAll('.learning-module').forEach(module => {
      module.addEventListener('mouseenter', (e) => {
        this.animateModuleHover(module, true);
      });

      module.addEventListener('mouseleave', (e) => {
        this.animateModuleHover(module, false);
      });
    });

    // Back to hub button
    document.getElementById('backToHub').addEventListener('click', () => {
      this.navigateToSection('hub');
    });

    // Accessibility controls
    document.getElementById('accessibilityToggle').addEventListener('click', () => {
      this.toggleAccessibilityPanel();
    });

    document.getElementById('closePanelBtn').addEventListener('click', () => {
      this.hideAccessibilityPanel();
    });

    // Accessibility settings
    this.setupAccessibilityControls();

    // Voice commands button
    document.getElementById('voiceBtn').addEventListener('click', () => {
      this.toggleVoiceCommands();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      this.handleKeyboardNavigation(e);
    });

    // Window resize for responsive particles
    window.addEventListener('resize', () => {
      this.adjustParticleSystem();
    });
  }

  // Navigation System
  navigateToSection(sectionId) {
    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

    // Hide all sections
    document.querySelectorAll('.hub-section, .section-view').forEach(section => {
      section.classList.add('hidden');
      section.classList.remove('active-section');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.remove('hidden');
      targetSection.classList.add('active-section');
      
      this.currentSection = sectionId;
      this.updateProgress(this.learningProgress + 5);

      // Show/hide back button
      const backBtn = document.getElementById('backToHub');
      if (sectionId === 'hub') {
        backBtn.classList.add('hidden');
      } else {
        backBtn.classList.remove('hidden');
      }

      // Trigger section-specific animations
      this.triggerSectionAnimation(sectionId);
    }
  }

  // Trigger animations for specific sections
  triggerSectionAnimation(sectionId) {
    setTimeout(() => {
      const elements = document.querySelectorAll(`#${sectionId} .section-header, #${sectionId} .section-container > div`);
      elements.forEach((el, index) => {
        el.style.animation = `sectionHeaderSlide 0.6s ease-out both`;
        el.style.animationDelay = `${index * 0.1}s`;
      });
    }, 100);
  }

  // AI Tutor Section Initialization
  initializeAITutorSection() {
    this.loadTutorPersonalities();
    this.loadSubjects();
    this.setupAIChat();
    this.selectedTutor = this.aiTutorData.tutorPersonalities[0]; // Default to Alex
    this.updateTutorDisplay();
  }

  loadTutorPersonalities() {
    const personalityGrid = document.getElementById('personalityGrid');
    personalityGrid.innerHTML = '';
    
    this.aiTutorData.tutorPersonalities.forEach((personality, index) => {
      const personalityCard = document.createElement('div');
      personalityCard.className = `personality-card ${index === 0 ? 'selected' : ''}`;
      personalityCard.innerHTML = `
        <div class="personality-header">
          <div class="personality-avatar">
            <div class="avatar-icon">
              <i class="fas fa-robot"></i>
            </div>
          </div>
          <h4>${personality.name}</h4>
        </div>
        <p class="personality-description">${personality.description}</p>
        <div class="personality-traits">
          ${personality.traits.map(trait => `<span class="trait-tag">${trait}</span>`).join('')}
        </div>
      `;
      
      personalityCard.addEventListener('click', () => {
        this.selectTutorPersonality(personality, personalityCard);
      });
      
      personalityGrid.appendChild(personalityCard);
    });
  }

  selectTutorPersonality(personality, cardElement) {
    document.querySelectorAll('.personality-card').forEach(card => {
      card.classList.remove('selected');
    });
    cardElement.classList.add('selected');
    
    this.selectedTutor = personality;
    this.updateTutorDisplay();
    this.unlockAchievement('Tutor Selected', `Meet your new AI companion: ${personality.name}!`);
  }

  updateTutorDisplay() {
    if (this.selectedTutor) {
      document.getElementById('tutorName').textContent = this.selectedTutor.name;
    }
  }

  loadSubjects() {
    const subjectGrid = document.getElementById('subjectGrid');
    subjectGrid.innerHTML = '';
    
    this.aiTutorData.subjects.forEach((subject, index) => {
      const subjectCard = document.createElement('div');
      subjectCard.className = 'subject-card';
      subjectCard.innerHTML = `
        <div class="subject-icon">
          <i class="${subject.icon}"></i>
        </div>
        <h4>${subject.name}</h4>
        <p>${subject.description}</p>
        <div class="subject-features">
          ${subject.features.slice(0, 2).map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
        </div>
      `;
      
      subjectCard.addEventListener('click', () => {
        this.selectSubject(subject, subjectCard);
      });
      
      subjectGrid.appendChild(subjectCard);
    });
  }

  selectSubject(subject, cardElement) {
    document.querySelectorAll('.subject-card').forEach(card => {
      card.classList.remove('selected');
    });
    cardElement.classList.add('selected');
    
    this.selectedSubject = subject;
    this.addAIMessage(`Great choice! I'm excited to help you with ${subject.name}. ${subject.features[0]} is one of my specialties. What would you like to explore first?`);
    this.unlockAchievement('Subject Explorer', `Started learning ${subject.name}!`);
  }

  setupAIChat() {
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendMessageBtn');
    const voiceBtn = document.getElementById('voiceInputBtn');
    const quickActionBtns = document.querySelectorAll('.quick-action-btn');

    // Send message on button click
    sendBtn.addEventListener('click', () => {
      this.sendMessage();
    });

    // Send message on Enter key
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.sendMessage();
      }
    });

    // Voice input simulation
    voiceBtn.addEventListener('click', () => {
      this.startVoiceInput();
    });

    // Quick action buttons
    quickActionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const question = btn.getAttribute('data-question');
        this.sendQuickQuestion(question);
      });
    });
  }

  sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (message) {
      this.addUserMessage(message);
      chatInput.value = '';
      
      // Simulate AI processing and response
      setTimeout(() => {
        this.generateAIResponse(message);
      }, 1000);
    }
  }

  addUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `
      <div class="message-content">
        <p>${message}</p>
      </div>
      <div class="message-time">Just now</div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  addAIMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ai-message';
    messageDiv.innerHTML = `
      <div class="message-content">
        <p>${message}</p>
      </div>
      <div class="message-time">Just now</div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Animate tutor speaking
    this.animateTutorSpeaking();
  }

  generateAIResponse(userMessage) {
    const responses = {
      'hello': "Hello! I'm here to help you learn. What subject interests you today?",
      'math': "Mathematics is fascinating! I can help you with algebra, calculus, geometry, or statistics. Which area would you like to explore?",
      'science': "Science opens up amazing worlds! Whether it's physics, chemistry, biology, or earth science, I'm ready to guide you through experiments and theories.",
      'programming': "Programming is like learning a new language that computers understand! I can help you with Python, JavaScript, Java, or web development basics.",
      'help': "I'm here to provide personalized learning support! I can explain concepts step-by-step, create practice problems, suggest learning paths, and adapt to your learning style.",
      'default': "That's an interesting question! Let me break it down for you step by step. Based on your current learning level, I'd recommend starting with the fundamentals and building up from there."
    };
    
    let response = responses.default;
    const lowerMessage = userMessage.toLowerCase();
    
    for (const keyword in responses) {
      if (lowerMessage.includes(keyword) && keyword !== 'default') {
        response = responses[keyword];
        break;
      }
    }
    
    // Add subject-specific responses
    if (this.selectedSubject) {
      response += ` Since you're interested in ${this.selectedSubject.name}, I can also ${this.selectedSubject.features[Math.floor(Math.random() * this.selectedSubject.features.length)].toLowerCase()}.`;
    }
    
    this.addAIMessage(response);
    this.updateProgress(this.learningProgress + 2);
  }

  sendQuickQuestion(question) {
    this.addUserMessage(question);
    
    setTimeout(() => {
      const responses = {
        'Explain this concept': "I'd be happy to explain any concept! Could you tell me which specific topic you'd like me to break down? I'll use visual examples and step-by-step reasoning to make it crystal clear.",
        'Give me practice problems': "Practice makes perfect! Let me create some custom problems based on your current skill level. I'll start with easier ones and gradually increase the difficulty as you improve.",
        'Show learning path': "Here's a personalized learning path I've created for you based on your interests and current knowledge level. Each step builds on the previous one, ensuring solid understanding before moving forward."
      };
      
      this.addAIMessage(responses[question] || responses['Explain this concept']);
    }, 800);
  }

  startVoiceInput() {
    const voiceBtn = document.getElementById('voiceInputBtn');
    voiceBtn.innerHTML = '<i class="fas fa-stop"></i>';
    voiceBtn.style.background = 'rgba(255, 0, 0, 0.2)';
    
    // Simulate voice recognition
    setTimeout(() => {
      const voiceCommands = [
        "How do I solve quadratic equations?",
        "Explain photosynthesis to me",
        "Help me with JavaScript functions",
        "What is machine learning?"
      ];
      
      const command = voiceCommands[Math.floor(Math.random() * voiceCommands.length)];
      this.addUserMessage(command);
      
      voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
      voiceBtn.style.background = '';
      
      setTimeout(() => {
        this.generateAIResponse(command);
      }, 1000);
    }, 2000);
  }

  animateTutorSpeaking() {
    const mouth = document.getElementById('tutorMouth');
    const waves = document.querySelectorAll('.voice-wave');
    
    if (mouth) mouth.style.animation = 'mouthTalk 0.5s ease-in-out 6';
    waves.forEach(wave => {
      wave.style.animation = 'voiceWaveExpand 0.8s ease-out infinite';
    });
    
    setTimeout(() => {
      waves.forEach(wave => {
        wave.style.animation = '';
      });
    }, 3000);
  }

  // Skills Section Initialization
  initializeSkillsSection() {
    this.loadSkillCategories();
    this.loadSkillTree();
    this.loadAchievements();
  }

  loadSkillCategories() {
    const categoryTabs = document.getElementById('categoryTabs');
    categoryTabs.innerHTML = '';
    
    this.skillsData.categories.forEach((category, index) => {
      const tab = document.createElement('div');
      tab.className = `category-tab ${index === 0 ? 'active' : ''}`;
      tab.textContent = category.name;
      tab.style.borderColor = category.color;
      
      tab.addEventListener('click', () => {
        this.selectSkillCategory(category, tab);
      });
      
      categoryTabs.appendChild(tab);
    });
  }

  selectSkillCategory(category, tabElement) {
    document.querySelectorAll('.category-tab').forEach(tab => {
      tab.classList.remove('active');
    });
    tabElement.classList.add('active');
    
    this.selectedSkillCategory = category.name;
    this.loadSkillTree();
    this.unlockAchievement('Category Explorer', `Exploring ${category.name}!`);
  }

  loadSkillTree() {
    const skillTreeCanvas = document.getElementById('skillTreeCanvas');
    skillTreeCanvas.innerHTML = '';
    
    const category = this.skillsData.categories.find(cat => cat.name === this.selectedSkillCategory);
    if (!category) return;
    
    category.skills.forEach((skill, index) => {
      // Create skill node
      const skillNode = document.createElement('div');
      skillNode.className = `skill-node ${skill.progress >= 100 ? 'unlocked' : skill.progress > 0 ? 'current' : 'locked'}`;
      skillNode.style.left = `${20 + (index * 120)}px`;
      skillNode.style.top = `${50 + (index % 2) * 100}px`;
      skillNode.innerHTML = `<i class="fas fa-star"></i>`;
      
      // Add hover tooltip
      skillNode.title = `${skill.name} - ${skill.level} (${skill.progress}%)`;
      
      skillNode.addEventListener('click', () => {
        this.openSkillDetails(skill);
      });
      
      skillTreeCanvas.appendChild(skillNode);
      
      // Create connections between nodes
      if (index > 0) {
        const connection = document.createElement('div');
        connection.className = 'skill-connection';
        connection.style.left = `${20 + ((index - 1) * 120) + 40}px`;
        connection.style.top = `${50 + ((index - 1) % 2) * 100 + 20}px`;
        connection.style.width = '60px';
        connection.style.transform = `rotate(${(index % 2) === 0 ? '45deg' : '-45deg'})`;
        skillTreeCanvas.appendChild(connection);
      }
    });
  }

  openSkillDetails(skill) {
    // Create modal for skill details
    const modal = document.createElement('div');
    modal.className = 'skill-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>${skill.name}</h3>
          <span class="skill-level">${skill.level}</span>
          <button class="close-modal" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
        </div>
        <div class="skill-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${skill.progress}%"></div>
          </div>
          <span class="progress-text">${skill.progress}% Complete</span>
        </div>
        <div class="skill-details">
          <div class="detail-section">
            <h4>Prerequisites</h4>
            <div class="prerequisites">
              ${skill.prerequisites.map(prereq => `<span class="prereq-tag">${prereq}</span>`).join('')}
            </div>
          </div>
          <div class="detail-section">
            <h4>Earned Badges</h4>
            <div class="badges">
              ${skill.badges.map(badge => `<span class="badge-tag">${badge}</span>`).join('')}
            </div>
          </div>
          <div class="detail-section">
            <h4>Real-World Applications</h4>
            <ul class="applications">
              ${skill.realWorldApplications.map(app => `<li>${app}</li>`).join('')}
            </ul>
          </div>
          <div class="detail-section">
            <h4>Next Skills to Unlock</h4>
            <div class="next-skills">
              ${skill.nextSkills.map(next => `<span class="next-skill-tag">${next}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn btn--primary" onclick="eduNexus.practiceSkill('${skill.name}')">Practice Now</button>
          <button class="btn btn--secondary" onclick="eduNexus.addToLearningPath('${skill.name}')">Add to Path</button>
        </div>
      </div>
    `;
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: modalFadeIn 0.3s ease-out;
    `;
    
    document.body.appendChild(modal);
  }

  practiceSkill(skillName) {
    this.showNotification(`Starting practice session for ${skillName}!`);
    this.updateProgress(this.learningProgress + 10);
    this.unlockAchievement('Practice Master', `Practiced ${skillName}!`);
    
    // Close modal
    document.querySelector('.skill-modal')?.remove();
  }

  loadAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');
    achievementsGrid.innerHTML = '';
    
    const allBadges = this.skillsData.categories.reduce((badges, category) => {
      return badges.concat(category.skills.reduce((skillBadges, skill) => {
        return skillBadges.concat(skill.badges);
      }, []));
    }, []);
    
    // Add some general achievements
    const generalAchievements = [
      { name: "First Steps", icon: "fas fa-baby", earned: true },
      { name: "Quick Learner", icon: "fas fa-bolt", earned: true },
      { name: "Persistent", icon: "fas fa-mountain", earned: false },
      { name: "Team Player", icon: "fas fa-users", earned: true },
      { name: "Innovation", icon: "fas fa-lightbulb", earned: false },
      { name: "Master", icon: "fas fa-crown", earned: false }
    ];
    
    generalAchievements.forEach(achievement => {
      const badgeElement = document.createElement('div');
      badgeElement.className = `achievement-badge ${achievement.earned ? 'earned' : ''}`;
      badgeElement.innerHTML = `
        <div class="badge-icon">
          <i class="${achievement.icon}"></i>
        </div>
        <div class="badge-name">${achievement.name}</div>
      `;
      achievementsGrid.appendChild(badgeElement);
    });
  }

  // VR Section Initialization
  initializeVRSection() {
    this.loadVREnvironments();
    this.setupVRControls();
    this.updateVRStats();
  }

  loadVREnvironments() {
    const environmentGrid = document.getElementById('environmentGrid');
    environmentGrid.innerHTML = '';
    
    this.vrData.environments.forEach((environment, index) => {
      const envCard = document.createElement('div');
      envCard.className = 'environment-card';
      envCard.innerHTML = `
        <div class="env-preview" style="background: linear-gradient(135deg, ${index % 2 === 0 ? 'rgba(50, 184, 198, 0.3)' : 'rgba(138, 43, 226, 0.3)'}, rgba(0, 0, 0, 0.5));">
          <div class="env-overlay">
            <i class="fas fa-play-circle"></i>
          </div>
        </div>
        <div class="env-info">
          <div class="env-title">${environment.name}</div>
          <div class="env-description">${environment.description}</div>
          <div class="env-stats">
            <span><i class="fas fa-clock"></i> ${environment.duration}</span>
            <span><i class="fas fa-graduation-cap"></i> ${environment.subject}</span>
          </div>
        </div>
      `;
      
      envCard.addEventListener('click', () => {
        this.selectVREnvironment(environment);
      });
      
      environmentGrid.appendChild(envCard);
    });
  }

  selectVREnvironment(environment) {
    // Update viewport
    const vrViewport = document.getElementById('vrViewport');
    const scenes = vrViewport.querySelectorAll('.vr-scene');
    
    scenes.forEach(scene => {
      scene.classList.remove('active');
    });
    
    const targetScene = vrViewport.querySelector(`[data-environment="${environment.id}"]`);
    if (targetScene) {
      targetScene.classList.add('active');
    }
    
    this.selectedVREnvironment = environment.id;
    this.showNotification(`Entering ${environment.name} VR experience!`);
    this.unlockAchievement('VR Explorer', `Explored ${environment.name}!`);
    this.updateProgress(this.learningProgress + 8);
  }

  setupVRControls() {
    const controlBtns = document.querySelectorAll('.vr-control-btn');
    
    controlBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        this.handleVRAction(action);
      });
    });
  }

  handleVRAction(action) {
    const actions = {
      'interact': 'Interacting with virtual objects...',
      'navigate': 'Navigation mode activated',
      'info': 'Displaying educational information',
      'fullscreen': 'Entering fullscreen VR mode'
    };
    
    this.showNotification(actions[action] || 'VR action performed');
    
    if (action === 'fullscreen') {
      this.enterVRFullscreen();
    }
  }

  enterVRFullscreen() {
    const vrViewport = document.getElementById('vrViewport');
    vrViewport.style.position = 'fixed';
    vrViewport.style.top = '0';
    vrViewport.style.left = '0';
    vrViewport.style.width = '100vw';
    vrViewport.style.height = '100vh';
    vrViewport.style.zIndex = '10000';
    vrViewport.style.background = 'black';
    
    // Add exit button
    const exitBtn = document.createElement('button');
    exitBtn.innerHTML = '<i class="fas fa-times"></i> Exit VR';
    exitBtn.className = 'btn btn--secondary';
    exitBtn.style.position = 'absolute';
    exitBtn.style.top = '20px';
    exitBtn.style.right = '20px';
    exitBtn.style.zIndex = '10001';
    
    exitBtn.addEventListener('click', () => {
      this.exitVRFullscreen();
    });
    
    vrViewport.appendChild(exitBtn);
    
    this.unlockAchievement('Full Immersion', 'Entered fullscreen VR mode!');
  }

  exitVRFullscreen() {
    const vrViewport = document.getElementById('vrViewport');
    vrViewport.style.position = '';
    vrViewport.style.top = '';
    vrViewport.style.left = '';
    vrViewport.style.width = '';
    vrViewport.style.height = '';
    vrViewport.style.zIndex = '';
    vrViewport.style.background = '';
    
    // Remove exit button
    const exitBtn = vrViewport.querySelector('button');
    if (exitBtn) exitBtn.remove();
  }

  updateVRStats() {
    // Simulate dynamic stats
    const stats = document.querySelectorAll('.session-stat .stat-value');
    if (stats.length >= 4) {
      setInterval(() => {
        // Update session time
        const timeElement = stats[0];
        const currentTime = timeElement.textContent.split(':');
        let minutes = parseInt(currentTime[0]);
        let seconds = parseInt(currentTime[1]);
        seconds += 1;
        if (seconds >= 60) {
          minutes += 1;
          seconds = 0;
        }
        timeElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Randomly update other stats
        if (Math.random() < 0.1) {
          stats[1].textContent = parseInt(stats[1].textContent) + 1; // Objects explored
        }
        if (Math.random() < 0.05) {
          stats[2].textContent = parseInt(stats[2].textContent) + 1; // Concepts learned
        }
      }, 1000);
    }
  }

  // Collaboration Section Initialization
  initializeCollaborationSection() {
    this.loadCollaborationFeatures();
    this.loadActiveConnections();
    this.setupGlobalMap();
  }

  loadCollaborationFeatures() {
    const featuresGrid = document.getElementById('collabFeaturesGrid');
    featuresGrid.innerHTML = '';
    
    this.collaborationData.features.forEach((feature, index) => {
      const featureCard = document.createElement('div');
      featureCard.className = 'feature-card';
      featureCard.innerHTML = `
        <div class="feature-header">
          <div class="feature-icon">
            <i class="${feature.icon}"></i>
          </div>
          <h4>${feature.name}</h4>
        </div>
        <p class="feature-description">${feature.description}</p>
        <div class="feature-capabilities">
          <h5>Key Capabilities:</h5>
          <ul>
            ${feature.capabilities.slice(0, 3).map(cap => `<li>${cap}</li>`).join('')}
          </ul>
          <button class="btn btn--primary btn--sm feature-btn">Explore Feature</button>
        </div>
      `;
      
      const btn = featureCard.querySelector('.feature-btn');
      btn.addEventListener('click', () => {
        this.exploreCollaborationFeature(feature);
      });
      
      featuresGrid.appendChild(featureCard);
    });
  }

  exploreCollaborationFeature(feature) {
    this.showNotification(`Exploring ${feature.name}...`);
    this.unlockAchievement('Collaborator', `Discovered ${feature.name}!`);
    
    // Show detailed feature modal
    this.showFeatureModal(feature);
  }

  showFeatureModal(feature) {
    const modal = document.createElement('div');
    modal.className = 'feature-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <div class="feature-icon-large">
            <i class="${feature.icon}"></i>
          </div>
          <div>
            <h3>${feature.name}</h3>
            <p>${feature.description}</p>
          </div>
          <button class="close-modal" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
        </div>
        <div class="feature-full-capabilities">
          <h4>Complete Capabilities:</h4>
          <div class="capabilities-grid">
            ${feature.capabilities.map(cap => `
              <div class="capability-item">
                <i class="fas fa-check-circle"></i>
                <span>${cap}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn btn--primary" onclick="eduNexus.startCollaborationDemo('${feature.name}')">Start Demo</button>
          <button class="btn btn--secondary" onclick="this.parentElement.parentElement.parentElement.remove()">Close</button>
        </div>
      </div>
    `;
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: modalFadeIn 0.3s ease-out;
    `;
    
    document.body.appendChild(modal);
  }

  startCollaborationDemo(featureName) {
    this.showNotification(`Starting ${featureName} demonstration...`);
    this.updateProgress(this.learningProgress + 12);
    this.unlockAchievement('Demo Expert', `Completed ${featureName} demo!`);
    
    // Close modal
    document.querySelector('.feature-modal')?.remove();
  }

  loadActiveConnections() {
    const connectionsList = document.getElementById('connectionsList');
    connectionsList.innerHTML = '';
    
    this.collaborationData.activeConnections.forEach((connection, index) => {
      const connectionCard = document.createElement('div');
      connectionCard.className = 'connection-card';
      connectionCard.innerHTML = `
        <div class="connection-avatar">
          ${connection.name.charAt(0).toUpperCase()}
          <div class="status-indicator ${connection.status.toLowerCase()}"></div>
        </div>
        <div class="connection-info">
          <div class="connection-name">${connection.name}</div>
          <div class="connection-details">
            <span><i class="fas fa-map-marker-alt"></i> ${connection.location}</span>
            <span><i class="fas fa-star"></i> ${connection.rating}/5.0</span>
          </div>
          <div class="connection-subject">${connection.subject}</div>
          <div class="connection-languages">
            ${connection.languages.map(lang => `<span class="language-tag">${lang}</span>`).join('')}
          </div>
        </div>
        <div class="connection-actions">
          <button class="btn btn--primary btn--sm" onclick="eduNexus.connectWithPeer('${connection.name}')">
            <i class="fas fa-comments"></i> Chat
          </button>
          <button class="btn btn--secondary btn--sm" onclick="eduNexus.viewProfile('${connection.name}')">
            <i class="fas fa-user"></i> Profile
          </button>
        </div>
      `;
      
      connectionsList.appendChild(connectionCard);
    });
  }

  connectWithPeer(peerName) {
    this.showNotification(`Connecting with ${peerName}...`);
    this.unlockAchievement('Global Connector', `Connected with ${peerName}!`);
    this.updateProgress(this.learningProgress + 5);
  }

  viewProfile(peerName) {
    const connection = this.collaborationData.activeConnections.find(conn => conn.name === peerName);
    if (connection) {
      this.showProfileModal(connection);
    }
  }

  showProfileModal(connection) {
    const modal = document.createElement('div');
    modal.className = 'profile-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <div class="profile-avatar">
            ${connection.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3>${connection.name}</h3>
            <p><i class="fas fa-map-marker-alt"></i> ${connection.location}</p>
            <div class="rating">
              <i class="fas fa-star"></i> ${connection.rating}/5.0
            </div>
          </div>
          <button class="close-modal" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
        </div>
        <div class="profile-details">
          <div class="detail-section">
            <h4>Expertise</h4>
            <p>${connection.subject} - ${connection.level}</p>
          </div>
          <div class="detail-section">
            <h4>Languages</h4>
            <div class="language-list">
              ${connection.languages.map(lang => `<span class="language-tag">${lang}</span>`).join('')}
            </div>
          </div>
          <div class="detail-section">
            <h4>Interests</h4>
            <div class="interests-list">
              ${connection.interests.map(interest => `<span class="interest-tag">${interest}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn btn--primary" onclick="eduNexus.startStudySession('${connection.name}')">Start Study Session</button>
          <button class="btn btn--secondary" onclick="eduNexus.connectWithPeer('${connection.name}')">Send Message</button>
        </div>
      </div>
    `;
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: modalFadeIn 0.3s ease-out;
    `;
    
    document.body.appendChild(modal);
  }

  startStudySession(peerName) {
    this.showNotification(`Starting study session with ${peerName}...`);
    this.unlockAchievement('Study Buddy', `Started session with ${peerName}!`);
    this.updateProgress(this.learningProgress + 15);
    
    // Close modal
    document.querySelector('.profile-modal')?.remove();
  }

  setupGlobalMap() {
    const connectionDots = document.querySelectorAll('.connection-dot');
    
    connectionDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const region = dot.getAttribute('data-region');
        this.exploreRegion(region);
      });
    });
  }

  exploreRegion(region) {
    this.showNotification(`Exploring learning community in ${region}...`);
    this.unlockAchievement('World Explorer', `Discovered ${region} community!`);
    this.updateProgress(this.learningProgress + 3);
  }

  // Enhanced Module Hover Animation
  animateModuleHover(module, isHover) {
    const icon = module.querySelector('.module-icon i');
    const preview = module.querySelector('.interaction-preview, .ai-preview, .skill-preview, .vr-preview, .collab-preview, .accessibility-preview');
    
    if (isHover) {
      // Enhanced hover effects
      module.style.transform = 'translateY(-15px) scale(1.03)';
      module.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 40px rgba(50, 184, 198, 0.4)';
      
      if (icon) {
        icon.style.transform = 'scale(1.2) rotateY(10deg)';
        icon.style.textShadow = '0 0 20px rgba(50, 184, 198, 0.8)';
      }
      
      // Create hover particles
      this.createHoverParticles(module);
      
    } else {
      module.style.transform = '';
      module.style.boxShadow = '';
      
      if (icon) {
        icon.style.transform = '';
        icon.style.textShadow = '';
      }
    }
  }

  // Create hover particle effects
  createHoverParticles(element) {
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = '4px';
      particle.style.height = '4px';
      particle.style.background = 'rgba(50, 184, 198, 0.8)';
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '10';
      
      const rect = element.getBoundingClientRect();
      particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
      particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
      
      document.body.appendChild(particle);
      
      // Animate particle
      particle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * -100}px) scale(0)`, opacity: 0 }
      ], {
        duration: 1000,
        easing: 'ease-out'
      }).addEventListener('finish', () => {
        particle.remove();
      });
    }
  }

  // Accessibility Features
  setupAccessibilityControls() {
    const controls = {
      highContrast: document.getElementById('highContrast'),
      largeText: document.getElementById('largeText'),
      reducedMotion: document.getElementById('reducedMotion'),
      screenReader: document.getElementById('screenReader')
    };

    Object.keys(controls).forEach(key => {
      if (controls[key]) {
        controls[key].addEventListener('change', (e) => {
          this.toggleAccessibilityFeature(key, e.target.checked);
        });
      }
    });
  }

  toggleAccessibilityFeature(feature, enabled) {
    this.accessibilitySettings[feature] = enabled;
    
    switch(feature) {
      case 'highContrast':
        document.body.classList.toggle('high-contrast', enabled);
        break;
      case 'largeText':
        document.body.classList.toggle('large-text', enabled);
        break;
      case 'reducedMotion':
        document.body.classList.toggle('reduced-motion', enabled);
        break;
      case 'screenReader':
        this.toggleScreenReaderMode(enabled);
        break;
    }
    
    this.unlockAchievement('Accessibility Champion', `Enabled ${feature} for inclusive learning!`);
  }

  toggleScreenReaderMode(enabled) {
    const elements = document.querySelectorAll('button, .learning-module, .nav-btn');
    elements.forEach(el => {
      if (enabled) {
        el.setAttribute('aria-label', el.textContent || el.getAttribute('data-module') || 'Interactive element');
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');
      } else {
        el.removeAttribute('aria-label');
        el.removeAttribute('role');
        el.removeAttribute('tabindex');
      }
    });
  }

  toggleAccessibilityPanel() {
    const panel = document.getElementById('accessibilityPanel');
    panel.classList.toggle('hidden');
  }

  hideAccessibilityPanel() {
    document.getElementById('accessibilityPanel').classList.add('hidden');
  }

  // Voice Commands
  toggleVoiceCommands() {
    this.accessibilitySettings.voiceCommands = !this.accessibilitySettings.voiceCommands;
    const btn = document.getElementById('voiceBtn');
    
    if (this.accessibilitySettings.voiceCommands) {
      btn.style.background = 'rgba(50, 184, 198, 0.3)';
      btn.innerHTML = '<i class="fas fa-microphone-slash"></i><span>Stop Listening</span>';
      this.startVoiceCommandDemo();
    } else {
      btn.style.background = 'rgba(33, 128, 141, 0.1)';
      btn.innerHTML = '<i class="fas fa-microphone"></i><span>Voice Commands</span>';
    }
  }

  startVoiceCommandDemo() {
    const commands = [
      'Navigate to AI Tutor',
      'Show accessibility options',
      'Open VR classroom',
      'Display progress'
    ];
    
    let commandIndex = 0;
    const commandInterval = setInterval(() => {
      if (this.accessibilitySettings.voiceCommands && commandIndex < commands.length) {
        this.simulateVoiceCommand(commands[commandIndex]);
        commandIndex++;
      } else {
        clearInterval(commandInterval);
      }
    }, 3000);
  }

  simulateVoiceCommand(command) {
    // Show voice recognition visual
    const voiceIndicator = document.createElement('div');
    voiceIndicator.className = 'voice-indicator';
    voiceIndicator.innerHTML = `
      <div class="voice-icon"><i class="fas fa-microphone"></i></div>
      <div class="voice-text">"${command}"</div>
    `;
    voiceIndicator.style.cssText = `
      position: fixed;
      top: 120px;
      right: 24px;
      background: rgba(50, 184, 198, 0.9);
      color: white;
      padding: 16px;
      border-radius: 12px;
      z-index: 10001;
      min-width: 200px;
      animation: voiceCommandSlide 0.5s ease-out;
    `;
    
    document.body.appendChild(voiceIndicator);
    
    // Execute command after delay
    setTimeout(() => {
      this.executeVoiceCommand(command);
      voiceIndicator.remove();
    }, 2000);
  }

  executeVoiceCommand(command) {
    if (command.includes('AI Tutor')) {
      this.navigateToSection('ai-tutor');
    } else if (command.includes('accessibility')) {
      this.toggleAccessibilityPanel();
    } else if (command.includes('VR')) {
      this.navigateToSection('vr');
    } else if (command.includes('progress')) {
      this.showProgressDetail();
    }
  }

  // Keyboard Navigation
  handleKeyboardNavigation(e) {
    switch(e.key) {
      case 'Escape':
        if (this.currentSection !== 'hub') {
          this.navigateToSection('hub');
        }
        break;
      case 'a':
        if (e.ctrlKey) {
          e.preventDefault();
          this.toggleAccessibilityPanel();
        }
        break;
      case 'v':
        if (e.ctrlKey) {
          e.preventDefault();
          this.toggleVoiceCommands();
        }
        break;
    }
  }

  // Achievement System
  unlockAchievement(title, description) {
    if (this.achievements.includes(title)) return;
    
    this.achievements.push(title);
    const notification = document.getElementById('achievementNotification');
    const textElement = document.getElementById('achievementText');
    
    if (textElement && notification) {
      textElement.textContent = title;
      notification.classList.remove('hidden');
      
      setTimeout(() => {
        notification.classList.add('hidden');
      }, 4000);
    }
    
    // Update progress
    this.updateProgress(this.learningProgress + 15);
  }

  // Progress Tracking
  startProgressTracking() {
    setInterval(() => {
      // Simulate learning progress
      if (this.learningProgress < 100) {
        this.updateProgress(this.learningProgress + 0.5);
      }
    }, 10000);
  }

  updateProgress(newProgress) {
    this.learningProgress = Math.min(newProgress, 100);
    const progressBar = document.querySelector('.progress-bar');
    const progressPercent = document.getElementById('progressPercent');
    
    if (progressBar && progressPercent) {
      const circumference = 2 * Math.PI * 15.9155;
      const offset = circumference - (this.learningProgress / 100) * circumference;
      
      progressBar.style.strokeDasharray = `${this.learningProgress}, 100`;
      progressPercent.textContent = `${Math.round(this.learningProgress)}%`;
    }
  }

  showProgressDetail() {
    const modal = document.createElement('div');
    modal.className = 'progress-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>Learning Progress</h3>
          <button class="close-modal" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
        </div>
        <div class="progress-stats">
          <div class="stat">
            <span class="stat-number">${Math.round(this.learningProgress)}%</span>
            <span class="stat-label">Overall Progress</span>
          </div>
          <div class="stat">
            <span class="stat-number">${this.achievements.length}</span>
            <span class="stat-label">Achievements</span>
          </div>
          <div class="stat">
            <span class="stat-number">12</span>
            <span class="stat-label">Modules Available</span>
          </div>
        </div>
        <div class="achievements-list">
          <h4>Recent Achievements</h4>
          ${this.achievements.slice(-5).map(achievement => `
            <div class="achievement-item">
              <i class="fas fa-trophy"></i>
              <span>${achievement}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10002;
      animation: modalFadeIn 0.3s ease-out;
    `;
    
    document.body.appendChild(modal);
  }

  // Learning Path Management
  addToLearningPath(itemName) {
    this.showNotification(`Added ${itemName} to your personalized learning path!`);
    this.unlockAchievement('Path Builder', 'Customized your learning journey!');
  }

  // Particle System Enhancement
  initializeParticleSystem() {
    this.createDynamicParticles();
    this.setupInteractiveParticles();
  }

  createDynamicParticles() {
    const particleContainer = document.querySelector('.floating-particles');
    
    setInterval(() => {
      if (document.querySelectorAll('.dynamic-particle').length < 20) {
        this.createParticle(particleContainer);
      }
    }, 2000);
  }

  createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'dynamic-particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 6 + 2}px;
      height: ${Math.random() * 6 + 2}px;
      background: rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.8);
      border-radius: 50%;
      left: ${Math.random() * 100}vw;
      top: 100vh;
      pointer-events: none;
      box-shadow: 0 0 10px rgba(50, 184, 198, 0.6);
      animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
    `;
    
    container.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 20000);
  }

  setupInteractiveParticles() {
    document.addEventListener('mousemove', (e) => {
      if (Math.random() < 0.1) { // 10% chance to create particle on mouse move
        this.createMouseParticle(e.clientX, e.clientY);
      }
    });
  }

  createMouseParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'mouse-particle';
    particle.style.cssText = `
      position: fixed;
      width: 3px;
      height: 3px;
      background: rgba(50, 184, 198, 0.8);
      border-radius: 50%;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
      z-index: 1000;
      animation: mouseParticleFade 1s ease-out forwards;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 1000);
  }

  adjustParticleSystem() {
    // Adjust particle system based on screen size
    const particles = document.querySelectorAll('.dynamic-particle');
    particles.forEach(particle => {
      particle.style.left = Math.random() * 100 + 'vw';
    });
  }

  setupAccessibilityFeatures() {
    // Initialize accessibility features
    this.setupAccessibilityControls();
  }

  // Utility function to show notifications
  showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(50, 184, 198, 0.9);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      z-index: 10000;
      animation: notificationSlide 0.3s ease-out;
      font-family: 'Rajdhani', sans-serif;
      font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}

// CSS Animations for JavaScript-created elements
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
  @keyframes modalFadeIn {
    0% { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }
  
  @keyframes voiceCommandSlide {
    0% { transform: translateX(100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes notificationSlide {
    0% { transform: translateX(-50%) translateY(-100%); opacity: 0; }
    100% { transform: translateX(-50%) translateY(0); opacity: 1; }
  }
  
  @keyframes particleFloat {
    0% { transform: translateY(0) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
  }
  
  @keyframes mouseParticleFade {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0) translateY(-20px); opacity: 0; }
  }

  /* Modal styles */
  .modal-content {
    background: rgba(var(--color-slate-900-rgb), 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(var(--color-teal-500-rgb), 0.3);
    border-radius: var(--radius-lg);
    padding: var(--space-24);
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    color: var(--color-text);
  }

  .modal-header {
    display: flex;
    align-items: center;
    gap: var(--space-16);
    margin-bottom: var(--space-20);
    padding-bottom: var(--space-16);
    border-bottom: 1px solid rgba(var(--color-teal-500-rgb), 0.2);
  }

  .close-modal {
    background: transparent;
    border: none;
    color: var(--color-text-secondary);
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s ease;
    margin-left: auto;
  }

  .close-modal:hover {
    color: var(--color-text);
  }

  .modal-actions {
    display: flex;
    gap: var(--space-12);
    margin-top: var(--space-20);
    padding-top: var(--space-16);
    border-top: 1px solid rgba(var(--color-teal-500-rgb), 0.2);
  }

  .trait-tag, .prereq-tag, .badge-tag, .next-skill-tag {
    background: rgba(var(--color-teal-500-rgb), 0.2);
    color: var(--color-teal-300);
    padding: var(--space-4) var(--space-8);
    border-radius: var(--radius-sm);
    font-size: 0.8rem;
    margin-right: var(--space-4);
    margin-bottom: var(--space-4);
    display: inline-block;
  }

  .personality-header {
    text-align: center;
    margin-bottom: var(--space-12);
  }

  .personality-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(var(--color-teal-500-rgb), 0.2);
    border: 2px solid var(--color-teal-300);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-8);
    font-size: 1.5rem;
    color: var(--color-teal-300);
  }

  .personality-traits {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
  }

  .skill-progress {
    margin-bottom: var(--space-16);
  }

  .skill-details .detail-section {
    margin-bottom: var(--space-16);
  }

  .skill-details .detail-section h4 {
    color: var(--color-teal-300);
    margin-bottom: var(--space-8);
  }

  .capabilities-grid {
    display: grid;
    gap: var(--space-8);
  }

  .capability-item {
    display: flex;
    align-items: center;
    gap: var(--space-8);
  }

  .capability-item i {
    color: var(--color-teal-300);
  }

  .feature-icon-large {
    font-size: 2rem;
    color: var(--color-teal-300);
    margin-right: var(--space-12);
  }

  .profile-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--color-teal-300), var(--color-primary));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-slate-900);
    font-size: 2rem;
    font-weight: 700;
    margin-right: var(--space-16);
  }

  .language-list, .interests-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
  }

  .interest-tag {
    background: rgba(138, 43, 226, 0.2);
    color: #8a2be2;
    padding: var(--space-4) var(--space-8);
    border-radius: var(--radius-sm);
    font-size: 0.8rem;
  }

  .rating {
    color: #ffd700;
    margin-top: var(--space-4);
  }

  .progress-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-16);
    margin-bottom: var(--space-20);
    text-align: center;
  }

  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-teal-300);
    font-family: 'Orbitron', monospace;
  }

  .stat-label {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }

  .achievement-item {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    padding: var(--space-8);
    margin-bottom: var(--space-4);
    background: rgba(var(--color-teal-500-rgb), 0.1);
    border-radius: var(--radius-base);
  }

  .achievement-item i {
    color: #ffd700;
  }
`;
document.head.appendChild(additionalStyles);

// Initialize the application
let eduNexus;
document.addEventListener('DOMContentLoaded', () => {
  eduNexus = new EduNexus();
});