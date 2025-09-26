// Futuristic Portfolio JavaScript
class FuturisticPortfolio {
    constructor() {
        this.init();
        this.bindEvents();
        this.startAnimations();
    }

    init() {
        this.isLoaded = false;
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.matrixInterval = null;
        this.particleInterval = null;
        this.typingIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        
        this.typedTexts = [
            'Data Scientist',
            'AI/ML Engineer',
            'Problem Solver',
            'Leadership Catalyst'
        ];

        this.projects = [
            {
                id: 1,
                title: "Deckify - AI PPT Generator",
                category: "Web",
                description: "AI-powered application to automatically generate presentation slides from a simple prompt.",
                problem: "Creating compelling presentations is time-consuming. Users often struggle with content generation and design, leading to inefficient workflows.",
                approach: "Leveraged a Large Language Model (LLM) for content generation with a Next.js frontend. The architecture uses a serverless backend to interface with the AI model, ensuring scalability.",
                result: "The final product reduces presentation creation time by an estimated 70%. It features a clean, intuitive UI and generates well-structured, visually appealing slides.",
                technologies: ["AI", "LLM", "Next.js", "Web App", "Productivity"],
                image: "images/projects/deckify.png",
                github: "https://github.com/23f2000792/deckify-ppt-generator",
                demo: "https://deckify-ppt-generator.vercel.app/",
                impact: "Reduced presentation creation time by 70%"
            },
            {
                id: 2,
                title: "LLM Agent",
                category: "ML",
                description: "A browser-based agent with multi-tool reasoning capabilities, leveraging Large Language Models.",
                problem: "Standard LLMs lack access to real-time information and external tools. This project aimed to create an autonomous agent that could reason and use tools to solve complex queries.",
                approach: "Using a framework similar to LangChain, I developed a reasoning loop that allows the LLM to select tools (like web search) based on the user's query to formulate a comprehensive answer.",
                result: "The agent successfully answered complex, multi-step questions that a base LLM could not, showcasing an ability to build sophisticated, reasoning-based AI systems.",
                technologies: ["Python", "LangChain", "LLM", "AI Agent", "React"],
                image: "images/projects/llm-agent.png",
                github: "https://github.com/23f2000792/llm_agent",
                demo: "https://llm-agent-five.vercel.app/",
                impact: "Enabled multi-step reasoning for complex queries"
            },
            {
                id: 3,
                title: "Data Analyst Agent",
                category: "Data Science",
                description: "An intelligent agent designed to perform data analysis tasks autonomously.",
                problem: "Repetitive data analysis tasks can be automated to free up human analysts for higher-level strategic thinking.",
                approach: "The agent was built to ingest data, perform exploratory data analysis (EDA), generate visualizations, and summarize key insights automatically.",
                result: "Successfully automated the initial stages of the data analysis workflow, providing quick, actionable insights from raw datasets.",
                technologies: ["Python", "Pandas", "Matplotlib", "AI Agent", "Automation"],
                image: "images/projects/data-analyst.png",
                github: "https://github.com/23f2000792/TDS_Data_Analyst_Agent",
                demo: "https://tds-data-analyst-agent-2.onrender.com/",
                impact: "Automated exploratory data analysis workflow"
            },
            {
                id: 4,
                title: "Stock Market Trend Analyzer",
                category: "ML",
                description: "Utilizes AI to analyze and predict trends in the stock market.",
                problem: "Predicting stock market trends is notoriously difficult due to the volatile nature of financial data. The goal was to find underlying patterns for forecasting.",
                approach: "Employed a Long Short-Term Memory (LSTM) network, ideal for time-series data. The process involved extensive data preprocessing, feature engineering, and model training on historical stock data.",
                result: "The model demonstrated a promising ability to predict the direction of stock price movements with a notable accuracy score on the test set.",
                technologies: ["Python", "TensorFlow", "LSTM", "Time Series", "Finance"],
                image: "images/projects/stock-market.jpg",
                github: "https://github.com/23f2000792/ai-market-trend-analysis",
                demo: "https://ai-market-trend-analysis-v5.streamlit.app",
                impact: "Achieved significant predictive accuracy on volatile financial data"
            },
            {
                id: 5,
                title: "MyPortfolio",
                category: "Web",
                description: "Personal portfolio website to showcase my skills and projects.",
                problem: "A standard resume doesn't effectively demonstrate technical and creative abilities. A dynamic portfolio was needed to showcase projects and skills interactively.",
                approach: "Built with modern web technologies (HTML, CSS, JS) to be fully responsive, visually engaging, and easily updatable.",
                result: "Created a central hub for my professional presence, effectively communicating my skills and project experience to recruiters and peers.",
                technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
                image: "images/projects/portfolio.png",
                github: "https://github.com/23f2000792/myportfolio",
                demo: "https://www.krishgupta.in",
                impact: "Established a strong, interactive professional presence online"
            },
             {
                id: 6,
                title: "Quiz Master V1",
                category: "Web",
                description: "An interactive quiz application to test and expand knowledge on various subjects.",
                problem: "Creating an engaging and simple-to-use quiz application that can be easily customized and deployed.",
                approach: "Developed a clean, user-friendly interface with dynamic question loading and a scoring system to provide an enjoyable user experience.",
                result: "A fully functional and responsive quiz application that serves as a practical example of front-end development skills.",
                technologies: ["JavaScript", "HTML5", "CSS3", "Application"],
                image: "images/projects/quiz.png",
                github: "https://github.com/23f2000792/quiz-master-app-v1",
                demo: "https://github.com/23f2000792/quiz-master-app-v1",
                impact: "Demonstrated core front-end development capabilities"
            },
             {
                id: 7,
                title: "News Headline Generator",
                category: "ML",
                description: "An AI model that generates compelling headlines for news articles based on the article's content.",
                problem: "Manually writing engaging headlines is a creative and time-consuming task for journalists and content creators, slowing down the publishing workflow.",
                approach: "Fine-tuned a transformer-based model on a large dataset of news articles and their headlines to learn the art of summarization and catchy title creation. The model is deployed on Hugging Face Spaces using Gradio for an interactive user interface.",
                result: "The model can generate contextually relevant and engaging headlines from body text, demonstrating a practical, end-to-end application of modern NLP text-generation models.",
                technologies: ["NLP", "Transformers", "Hugging Face", "Gradio", "Python"],
                image: "images/projects/news.png",
                github: "https://huggingface.co/spaces/krish200510/headline-generator2",
                demo: "https://huggingface.co/spaces/krish200510/headline-generator2",
                impact: "Automates headline creation, boosting content creator productivity"
            },
        ];

        this.education = [
            {
                id: 1,
                institution: "Indian Institute of Technology Madras",
                degree: "B.S. in Data Science and Applications",
                period: "2023 - Present",
                details: "Pursuing a B.S. in Data Science and Applications. Completed foundational Data Science courses including ML Foundations, ML Techniques and Business Analytics. Gained programming experience in Python, Java, PostgreSQL and Linux commands to work with frameworks and libraries like Flask, Vue, NumPy, Scikit-learn, PyTorch and OpenCV for real-world Data Science applications."
            },
            {
                id: 2,
                institution: "Indian Institute of Technology Ropar",
                degree: "Minor in Artificial Intelligence",
                period: "2024 - 2025",
                details: "Completed a Minor in AI focusing on neural networks, convolutional neural networks (CNNs), reinforcement learning, NLP, and IoT applications. Hands-on labs and projects include building AI solutions for real-world problems and working with cutting-edge AI frameworks."
            },
            {
                id: 3,
                institution: "St. Thomas Senior Secondary School, Ludhiana",
                degree: "Schooling (Mathematics & Science)",
                period: "2010 - 2023",
                details: "Completed schooling with a strong foundation in core academics. Excelled in CBSE board examinations with high marks. Actively engaged in leadership roles, school clubs, and extracurricular activities such as cricket, football, and chess, developing teamwork and strategic thinking."
            }
        ];


        this.experiences = [
            {
                organization: "Sundarbans House",
                role: "Regional Coordinator",
                duration: "Aug 2024 — Jul 2025",
                description: "Led regional coordination activities and community engagement initiatives across multiple districts in the Chandigarh region with strategic planning.",
                achievements: [
                    "Coordinated 15+ regional events with 500+ participants",
                    "Co-founded 'Aryavarta Sangam', a cultural knowledge-sharing initiative",
                    "Played a central role in the 'Voices of Power' series attended by 1000+ participants",
                    "Improved community engagement by 40%",
                    "Managed cross-functional teams of 25+ members"
                ]
            },
            {
                organization: "Paradox 2025",
                role: "Event Head - Kampus Run",
                duration: "Apr 2025 — Jun 2025", 
                description: "Managed large-scale event planning and execution for college fest activities with strategic oversight.",
                achievements: [
                    "Successfully organized event for 1200+ participants",
                    "Reduced planning time by 30% through process optimization",
                    "Led team of 20+ volunteers across multiple departments"
                ]
            },
            {
                organization: "Devabhasha",
                role: "Managing Editor",
                duration: "Sep 2023 — Apr 2025",
                description: "Led editorial operations and content strategy for 'Saṃskṛta Makarandah', the Sanskrit publication with quality assurance.",
                achievements: [
                    "Coordinated writers and reviewers to ensure quality",
                    "Increased publication readership by 60%",
                    "Streamlined editorial workflow reducing production time by 25%",
                    "Managed content creation and quality assurance processes"
                ]
            },
            {
                organization: "THE Sportify",
                role: "Head of Research & Publications",
                duration: "Jun 2024 — Oct 2024",
                description: "Led content development for newsletters and magazines, featuring sports news, athlete profiles, and analytical articles.",
                achievements: [
                    "Published 12+ research articles on sports analytics",
                    "Established research collaboration with 5+ institutions",
                    "Developed data-driven insights improving platform engagement by 45%"
                ]
            },
            {
                organization: "Student Placement Council",
                role: "Volunteer - Outreach Team", 
                duration: "Aug 2024 — Jan 2025",
                description: "Connected with industry professionals and supported placement initiatives for students.",
                achievements: [
                    "Facilitated connections with 50+ industry professionals",
                    "Improved placement success rate by 15%",
                    "Organized career development workshops for 200+ students"
                ]
            }
        ];

        // Certifications data
        this.certifications = [
            {
                id: 1,
                title: "Introduction to Deploy ML Apps using GCP",
                organization: "Indian Institute of Technology Madras",
                date: "September 07, 2025",
                category: "tech",
                description: "A hands-on session on deploying machine learning models efficiently using Google Cloud Platform (GCP). Covered the end-to-end workflow from model packaging to scalable serving, API deployment, and best practices for rapid ML app deployment.",
                image: "images/certificates/ML_Apps_GCP.jpg",
                skills: ["ML Deployment", "Google Cloud Platform (GCP)", "APIs", "Scalable Model Serving", "Docker", "Cloud Run"],
                issuedBy: "Indian Institute of Technology Madras",
                verificationUrl: "https://ds.study.iitm.ac.in/document_verification/462b1d5363f77742e6ff3997cd0fbaf0b621c366f8e09a1abb5b6d4cb9493a63"
            },
            {
                id: 2,
                title: "Mathematical Foundations for Machine Learning",
                organization: "Indian Institute of Technology Madras",
                date: "August 15, 2025",
                category: "tech",
                description: "An intensive program covering the mathematical concepts essential for machine learning, including linear algebra, probability, statistics, and optimization techniques required for building and understanding ML models.",
                image: "images/certificates/Mathematical_Foundations_for_Machine_Learning.jpg",
                skills: ["Linear Algebra", "Probability & Statistics", "Optimization", "Mathematical Modeling", "Machine Learning Foundations"],
                issuedBy: "Indian Institute of Technology Madras",
                verificationUrl: "https://ds.study.iitm.ac.in/document_verification/d80c47c3c6aa807ac8585cf40f2fa5246ed6b2466db48b37c0aaf674062e321c"
            },
            {
                id: 3,
                title: "Regional Coordinator - Sundarbans House, IIT Madras",
                organization: "Sundarbans House, IIT Madras",
                date: "July 23, 2025",
                category: "leadership",
                description: "Served as the Regional Coordinator for Sundarbans House, managing events, coordinating with teams, and organizing activities to foster engagement and community growth.",
                image: "images/certificates/Sundarbans_Regional_Coordinator.jpg",
                skills: ["Leadership", "Team Coordination", "Event Management", "Communication", "Community Engagement"],
                issuedBy: "Student Affairs Department, IIT Madras",
            },
            {
                id: 4,
                title: "Event Head - Kampus Run, Paradox 2025 ",
                organization: "Paradox, IIT Madras",
                date: "July 17, 2025",
                category: "leadership",
                description: "Led the team and execution of the Kampus Run event, overseeing the planning and execution of the event, coordinating volunteers, managing logistics, and ensuring a smooth and engaging experience for all participants.",
                image: "images/certificates/PRDX250060.jpg",
                skills: ["Event Management", "Leadership", "Logistics Coordination", "Team Management", "Problem Solving"],
                issuedBy: "Paradox, IIT Madras",
                verificationUrl: "https://verify.iitmparadox.org/?cert=PRDX2500603"
            },
            {
                id: 5,
                title: "Introduction to Data Engineering using Azure",
                organization: "NPTEL, IIT Madras",
                date: "April 27, 2025",
                category: "tech",
                description: "A hands-on workshop introducing core data engineering concepts using Microsoft Azure. Covered relational and non-relational data, big data analytics, and Azure services like Synapse Analytics, Cosmos DB, and Data Factory. Designed for both technical and non-technical participants.",
                image: "images/certificates/azure.jpg",
                credentialId: "NP25WS275573835868",
                skills: ["Data Engineering", "Microsoft Azure", "Azure Synapse Analytics", "Azure Cosmos DB", "Azure Data Factory", "Big Data Analytics"],
                issuedBy: "NPTEL, IIT Madras",
                verificationUrl: "https://elearn.nptel.ac.in/Ecertificate/?q=NP25WS275573835868"
            },
            {
                id: 6,
                title: " Hands-on Dynamic Programming",
                organization: "Indian Institute of Technology Madras",
                date: "January 22, 2025",
                category: "tech",
                description: "A practical workshop on mastering dynamic programming techniques, learning to design optimal solutions for computational problems, and implementing them effectively using real-world examples.",
                image: "images/certificates/DPOSP.jpg",
                skills: ["Dynamic Programming", "Algorithm Design", "Problem Solving", "Optimization Techniques", "Python"],
                issuedBy: "Indian Institute of Technology Madras",
                verificationUrl: "https://ds.study.iitm.ac.in/document_verification/6b1293ef7e499a8ba1140dbe773528cae9bc5769feca0768e30adc3bf611e8ff"
            },
            {
                id: 7,
                title: "Understanding Google Cloud Platform",
                organization: "Indian Institute of Technology Madras",
                date: "January 19, 2025",
                category: "tech",
                description: "An introductory course on Google Cloud Platform (GCP), covering its core services, cloud computing fundamentals, deployment workflows, and best practices for leveraging GCP in real-world applications.",
                image: "images/certificates/Understanding_GCP.jpg",
                skills: ["Google Cloud Platform (GCP)", "Cloud Computing", "Cloud Services", "Compute Engine", "Storage", "Networking"],
                issuedBy: "Indian Institute of Technology Madras",
                verificationUrl: "https://ds.study.iitm.ac.in/document_verification/d4c6fd06493f241732057bb7434ecdde43ed405139f429bfa1bdc1bc6678060e"
            },
            {
                id: 8,
                title: "SQL (Advanced) Certificate",
                organization: "HackerRank",
                date: "July 10, 2024",
                category: "tech",
                description: "An advanced-level certification in SQL, focusing on complex queries, joins, subqueries, indexing, performance optimization, and practical database management skills.",
                image: "images/certificates/SQL-advanced.png",
                credentialId: "DBS25DFAF0BF",
                skills: ["SQL", "Advanced Queries", "Database Management", "Joins & Subqueries", "Indexing", "Performance Optimization"],
                issuedBy: "HackerRank",
                verificationUrl: "https://www.hackerrank.com/certificates/dbc25dfaf0bf"
            }
        ];

        this.blogPosts = [
            {
                title: "Advanced Techniques in Computer Vision: From Theory to Production",
                excerpt: "Exploring cutting-edge computer vision techniques and their real-world applications in modern AI systems, from neural architectures to deployment strategies.",
                date: "2024-08-15",
                tags: ["Computer Vision", "Deep Learning", "AI"],
                readTime: "8 min read"
            },
            {
                title: "Building Scalable Data Pipelines: Lessons from IoT Projects", 
                excerpt: "Key insights and best practices for designing robust data pipelines that handle millions of IoT sensor readings with real-time processing.",
                date: "2024-07-22",
                tags: ["Data Engineering", "IoT", "Scalability"],
                readTime: "6 min read"
            },
            {
                title: "The Evolution of NLP: From Rule-Based to Transformer Models",
                excerpt: "A comprehensive journey through natural language processing evolution and the transformative impact of transformer architectures on modern AI.",
                date: "2024-06-10",
                tags: ["NLP", "Transformers", "Machine Learning"],
                readTime: "10 min read"
            }
        ];

        this.applyTheme(this.currentTheme);
    }

    // Certifications Methods
    generateCertifications() {
        const certificationsGrid = document.getElementById('certifications-grid');
        if (!certificationsGrid) return;

        certificationsGrid.innerHTML = '';
        this.certifications.forEach(cert => {
            const certCard = document.createElement('div');
            certCard.className = 'certificate-card glass-card';
            certCard.dataset.category = cert.category;

            certCard.innerHTML = `
                <div class="cert-thumbnail">
                    ${cert.image ? 
                        `<img src="${cert.image}" alt="${cert.title}" onerror="this.parentElement.innerHTML='<div class=\'cert-placeholder\'><i class=\'fas fa-certificate\'></i></div>'">` :
                        `<div class="cert-placeholder"><i class="fas fa-certificate"></i></div>`
                    }
                </div>
                <div class="cert-info">
                    <div class="cert-category-tag">${cert.category.toUpperCase()}</div>
                    <h3>${cert.title}</h3>
                    <div class="cert-organization">${cert.organization}</div>
                    <div class="cert-date">${cert.date}</div>
                    <div class="cert-description">${cert.description.substring(0, 120)}...</div>
                    <div class="cert-actions">
                        <button class="cert-view-btn" onclick="portfolio.showCertificateModal(${cert.id})">
                            <i class="fas fa-eye"></i> VIEW DETAILS
                        </button>
                        <button class="cert-download-btn" onclick="portfolio.downloadCertificate(${cert.id})" title="Download Certificate">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                </div>
            `;

            certificationsGrid.appendChild(certCard);
        });
    }

    filterCertifications(e) {
        const category = e.target.dataset.category;
        const filterBtns = document.querySelectorAll('.cert-filter-btn');
        const certCards = document.querySelectorAll('.certificate-card');

        // Update active filter
        filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Filter certificates
        certCards.forEach(card => {
            const cardCategory = card.dataset.category;
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    card.classList.remove('hidden');
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                }, 300);
            }
        });
    }

    showCertificateModal(certId) {
        const cert = this.certifications.find(c => c.id === certId);
        if (!cert) return;

        const modal = document.getElementById('certificate-modal');
        const modalBody = document.getElementById('cert-modal-body');

        modalBody.innerHTML = `
            <div class="cert-modal-header">
                ${cert.image ? 
                    `<img src="${cert.image}" alt="${cert.title}" class="cert-modal-image" onerror="this.style.display='none'">` : 
                    ''
                }
                <div class="cert-modal-details">
                    <h2>${cert.title}</h2>
                    <div class="cert-modal-org">${cert.organization}</div>
                    <div class="cert-modal-date">Issued: ${cert.date}</div>
                    ${cert.credentialId ? `<div class="cert-modal-date">Credential ID: ${cert.credentialId}</div>` : ''}
                </div>
            </div>
            <div class="cert-modal-content">
                <h4 style="color: var(--primary-neon); margin-bottom: 15px; font-family: var(--font-primary);">
                    <i class="fas fa-info-circle"></i> DESCRIPTION
                </h4>
                <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 25px;">${cert.description}</p>

                <h4 style="color: var(--primary-neon); margin-bottom: 15px; font-family: var(--font-primary);">
                    <i class="fas fa-tools"></i> SKILLS COVERED
                </h4>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 25px;">
                    ${cert.skills.map(skill => `<span style="background: rgba(0, 255, 255, 0.1); color: var(--primary-neon); padding: 5px 12px; border-radius: 15px; font-size: 0.8rem; border: 1px solid var(--primary-neon);">${skill}</span>`).join('')}
                </div>

                <h4 style="color: var(--primary-neon); margin-bottom: 15px; font-family: var(--font-primary);">
                    <i class="fas fa-building"></i> ISSUED BY
                </h4>
                <p style="color: var(--text-secondary); margin-bottom: 30px;">${cert.issuedBy}</p>
            </div>
            <div class="cert-modal-actions">
                ${cert.verificationUrl ? 
                    `<a href="${cert.verificationUrl}" target="_blank" class="cert-modal-btn">
                        <i class="fas fa-external-link-alt"></i> VERIFY CERTIFICATE
                    </a>` : ''
                }
                <button class="cert-modal-btn download" onclick="portfolio.downloadCertificate(${cert.id})">
                    <i class="fas fa-download"></i> DOWNLOAD
                </button>
            </div>
        `;

        modal.classList.add('active');
    }

    downloadCertificate(certId) {
        const cert = this.certifications.find(c => c.id === certId);
        if (!cert || !cert.image) {
            this.showNotification('Certificate not found!', 'error');
            return;
        }
        
        this.showNotification(`Downloading certificate: ${cert.title}`, 'success');
        
        // Create an <a> element to trigger download
        const link = document.createElement('a');
        link.href = cert.image; // use the actual image URL
        link.download = `${cert.title.replace(/\s+/g, '_')}_Certificate.${cert.image.split('.').pop()}`;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click(); // trigger download
        document.body.removeChild(link);
    }


    // Add certifications event listeners
    bindCertificationsEvents() {
        // Certificate filtering
        document.querySelectorAll('.cert-filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.filterCertifications(e));
        });

        // Certificate modal close
        document.getElementById('cert-modal-close')?.addEventListener('click', () => {
            document.getElementById('certificate-modal')?.classList.remove('active');
        });

        // Close modal on overlay click
        document.getElementById('certificate-modal')?.addEventListener('click', (e) => {
            if (e.target.id === 'certificate-modal') {
                e.target.classList.remove('active');
            }
        });
    }

bindEvents() {
        // Loading complete
        window.addEventListener('load', () => this.handleLoad());
        
        // Navigation - Fixed smooth scrolling
        document.getElementById('hamburger')?.addEventListener('click', () => this.toggleMobileMenu());
        document.getElementById('theme-toggle')?.addEventListener('click', () => this.toggleTheme());
        
        // Fixed navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId && targetId.startsWith('#')) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const offsetTop = targetElement.offsetTop - 100;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu
                        document.getElementById('hamburger')?.classList.remove('active');
                        document.getElementById('nav-menu')?.classList.remove('active');
                    }
                }
            });
        });
        // Certifications events
        this.bindCertificationsEvents();

        // Hero actions - Fixed
        document.querySelectorAll('[data-action]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const action = btn.getAttribute('data-action');
                
                switch(action) {
                    case 'contact':
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        break;
                    case 'resume':
                        this.downloadResume();
                        break;
                    case 'projects':
                        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                        break;
                }
            });
        });

        // Project filtering
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.filterProjects(e));
        });

        // Recruiter mode
        document.getElementById('recruiter-mode')?.addEventListener('click', () => this.showRecruiterMode());
        document.getElementById('close-recruiter')?.addEventListener('click', () => this.hideRecruiterMode());

        // Chatbot
        document.getElementById('chatbot-toggle')?.addEventListener('click', () => this.toggleChatbot());
        document.getElementById('close-chatbot')?.addEventListener('click', () => this.closeChatbot());
        document.getElementById('send-message')?.addEventListener('click', () => this.sendChatMessage());
        document.getElementById('chatbot-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.sendChatMessage();
            }
        });

        // Chatbot suggestions
        document.querySelectorAll('.suggestion-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleSuggestion(e));
        });

        // Easter egg
        document.getElementById('easter-egg-trigger')?.addEventListener('click', () => this.showQuiz());

        // Contact form - Fixed
        document.getElementById('contact-form')?.addEventListener('submit', (e) => this.handleContactForm(e));

        // Modal close handlers - Fixed
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                e.target.classList.remove('active');
            }
            if (e.target.classList.contains('recruiter-overlay')) {
                e.target.classList.remove('active');
            }
            if (e.target.classList.contains('quiz-modal')) {
                e.target.classList.remove('active');
            }
        });

        // Escape key to close modals - Fixed
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal-overlay.active, .recruiter-overlay.active, .quiz-modal.active').forEach(modal => {
                    modal.classList.remove('active');
                });
                document.getElementById('chatbot-window')?.classList.remove('active');
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-close')) {
                 // Find the parent modal and close it
                 const modal = e.target.closest('.modal-overlay, .recruiter-overlay, .quiz-modal');
                 if (modal) {
                    modal.classList.remove('active');
                }
            }
        });

        // Scroll events
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Resize events
        window.addEventListener('resize', () => this.handleResize());
    }

    startAnimations() {
        this.createMatrixRain();
        this.createParticleSystem();
        this.createGeometricShapes();
        this.startTypingAnimation();
        this.animateCounters();
        this.createNeuralNetwork();
        this.initSkillsRadar();
    }

    handleLoad() {
        setTimeout(() => {
            document.getElementById('loading-screen').classList.add('hidden');
            this.isLoaded = true;
            this.generateProjects();
            this.generateTimeline();
            this.generateEducation();
            this.generateCertifications();
            this.generateBlogPosts();
            this.initScrollAnimations();
        }, 3000);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
    }

    toggleMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        hamburger?.classList.toggle('active');
        navMenu?.classList.toggle('active');
    }

    createMatrixRain() {
        const matrixContainer = document.getElementById('matrix-rain');
        if (!matrixContainer) return;

        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        
        this.matrixInterval = setInterval(() => {
            if (Math.random() > 0.95) {
                const char = document.createElement('div');
                char.className = 'matrix-char';
                char.textContent = chars[Math.floor(Math.random() * chars.length)];
                char.style.left = Math.random() * 100 + '%';
                char.style.animationDuration = (Math.random() * 3 + 2) + 's';
                
                matrixContainer.appendChild(char);
                
                setTimeout(() => {
                    if (char.parentNode) {
                        char.parentNode.removeChild(char);
                    }
                }, 5000);
            }
        }, 100);
    }

    createParticleSystem() {
        const particlesContainer = document.getElementById('particles-system');
        if (!particlesContainer) return;

        // Create initial particles
        for (let i = 0; i < 30; i++) {
            this.createParticle(particlesContainer);
        }

        // Continuously add particles
        this.particleInterval = setInterval(() => {
            if (particlesContainer.children.length < 50 && Math.random() > 0.7) {
                this.createParticle(particlesContainer);
            }
        }, 2000);
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        container.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 10000);
    }

    createGeometricShapes() {
        const shapesContainer = document.getElementById('geometric-shapes');
        if (!shapesContainer) return;

        const shapeTypes = ['triangle', 'square', 'circle'];
        
        for (let i = 0; i < 8; i++) {
            const shape = document.createElement('div');
            shape.className = `shape ${shapeTypes[Math.floor(Math.random() * shapeTypes.length)]}`;
            shape.style.left = Math.random() * 100 + '%';
            shape.style.top = Math.random() * 100 + '%';
            shape.style.animationDelay = Math.random() * 20 + 's';
            shape.style.opacity = Math.random() * 0.3 + 0.1;
            
            shapesContainer.appendChild(shape);
        }
    }

    startTypingAnimation() {
        const typedElement = document.getElementById('typed-text');
        if (!typedElement) return;

        const typeSpeed = 100;
        const deleteSpeed = 50;
        const pauseTime = 2000;

        const type = () => {
            const currentText = this.typedTexts[this.typingIndex];
            
            if (this.isDeleting) {
                typedElement.textContent = currentText.substring(0, this.charIndex - 1);
                this.charIndex--;
            } else {
                typedElement.textContent = currentText.substring(0, this.charIndex + 1);
                this.charIndex++;
            }

            let nextTypeSpeed = this.isDeleting ? deleteSpeed : typeSpeed;

            if (!this.isDeleting && this.charIndex === currentText.length) {
                nextTypeSpeed = pauseTime;
                this.isDeleting = true;
            } else if (this.isDeleting && this.charIndex === 0) {
                this.isDeleting = false;
                this.typingIndex = (this.typingIndex + 1) % this.typedTexts.length;
                nextTypeSpeed = 500;
            }

            setTimeout(type, nextTypeSpeed);
        };

        setTimeout(type, 1000);
    }

    animateCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const animateCounter = (element) => {
            const target = parseInt(element.dataset.target);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 16);
        };

        // Intersection Observer to trigger animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => observer.observe(stat));
    }

    createNeuralNetwork() {
        const networkContainer = document.getElementById('brain-network');
        if (!networkContainer) return;

        // Create nodes and connections for neural network visualization
        const nodes = [];
        const layers = [4, 6, 6, 3];
        let nodeId = 0;

        layers.forEach((nodeCount, layerIndex) => {
            for (let i = 0; i < nodeCount; i++) {
                const node = document.createElement('div');
                node.style.position = 'absolute';
                node.style.width = '15px';
                node.style.height = '15px';
                node.style.background = '#00ffff';
                node.style.borderRadius = '50%';
                node.style.border = '2px solid #00ffff';
                node.style.boxShadow = '0 0 10px #00ffff';
                
                const x = (layerIndex * 80) + 20;
                const y = (i * 40) + (140 - (nodeCount * 20));
                
                node.style.left = x + 'px';
                node.style.top = y + 'px';
                
                networkContainer.appendChild(node);
                nodes.push({ element: node, layer: layerIndex, index: i, x, y });
                nodeId++;
            }
        });

        // Create connections
        nodes.forEach((node, index) => {
            if (node.layer < layers.length - 1) {
                const nextLayerNodes = nodes.filter(n => n.layer === node.layer + 1);
                nextLayerNodes.forEach(nextNode => {
                    if (Math.random() > 0.3) {
                        const connection = document.createElement('div');
                        connection.style.position = 'absolute';
                        connection.style.height = '1px';
                        connection.style.background = 'rgba(0, 255, 255, 0.3)';
                        connection.style.transformOrigin = 'left center';
                        
                        const dx = nextNode.x - node.x;
                        const dy = nextNode.y - node.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                        
                        connection.style.width = distance + 'px';
                        connection.style.left = node.x + 'px';
                        connection.style.top = node.y + 'px';
                        connection.style.transform = `rotate(${angle}deg)`;
                        
                        networkContainer.appendChild(connection);
                    }
                });
            }
        });

        // Add pulsing animation
        setInterval(() => {
            nodes.forEach(node => {
                if (Math.random() > 0.8) {
                    node.element.style.animation = 'pulse 0.5s ease-in-out';
                    setTimeout(() => {
                        node.element.style.animation = '';
                    }, 500);
                }
            });
        }, 2000);
    }

    initSkillsRadar() {
        const canvas = document.getElementById('skills-radar');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 180;

        const skills = [
            { name: 'Python', value: 95 },
            { name: 'Machine Learning', value: 92 },
            { name: 'Data Analysis', value: 93 },
            { name: 'Deep Learning', value: 88 },
            { name: 'Computer Vision', value: 87 },
            { name: 'NLP', value: 85 },
            { name: 'Leadership', value: 90 }
        ];

        const drawRadar = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw grid
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
            ctx.lineWidth = 1;
            
            for (let i = 1; i <= 5; i++) {
                ctx.beginPath();
                ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI);
                ctx.stroke();
            }

            // Draw axes
            const angleStep = (2 * Math.PI) / skills.length;
            skills.forEach((skill, index) => {
                const angle = index * angleStep - Math.PI / 2;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;
                
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(x, y);
                ctx.stroke();
                
                // Draw labels
                ctx.fillStyle = '#00ffff';
                ctx.font = '12px Orbitron';
                ctx.textAlign = 'center';
                const labelX = centerX + Math.cos(angle) * (radius + 20);
                const labelY = centerY + Math.sin(angle) * (radius + 20);
                ctx.fillText(skill.name, labelX, labelY);
            });

            // Draw skill values
            ctx.fillStyle = 'rgba(0, 255, 255, 0.2)';
            ctx.strokeStyle = '#00ffff';
            ctx.lineWidth = 2;
            
            ctx.beginPath();
            skills.forEach((skill, index) => {
                const angle = index * angleStep - Math.PI / 2;
                const value = (skill.value / 100) * radius;
                const x = centerX + Math.cos(angle) * value;
                const y = centerY + Math.sin(angle) * value;
                
                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
                
                // Draw value points
                ctx.save();
                ctx.fillStyle = '#ff00ff';
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, 2 * Math.PI);
                ctx.fill();
                ctx.restore();
            });
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        };

        drawRadar();
    }

    generateProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = '';
        
        this.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card glass-card';
            projectCard.dataset.category = project.category;
            
            projectCard.innerHTML = `
                <img src="${project.image || 'images/projects/default.png'}" alt="${project.title}" class="project-image">
                <div class="project-header">
                    <div>
                        <h3 class="project-title">${project.title}</h3>
                    </div>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> CODE
                    </a>
                    <button class="project-link" onclick="portfolio.showProjectModal(${project.id})">
                        <i class="fas fa-info-circle"></i> DETAILS
                    </button>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
        
        // Initialize skill bars after generating projects
        this.initSkillBars();
    }

    initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const level = entry.target.dataset.level;
                    entry.target.style.setProperty('--skill-width', level + '%');
                    setTimeout(() => {
                        entry.target.querySelector('::before').style.width = level + '%';
                    }, 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => observer.observe(bar));
    }

    filterProjects(e) {
        const filter = e.target.dataset.filter;
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        // Update active filter
        filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
            const category = card.dataset.category;
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    showProjectModal(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) return;

        const modal = document.getElementById('project-modal');
        const modalBody = document.getElementById('modal-body');
        
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <div class="modal-project-meta" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                <span class="project-category" style="background: var(--secondary-neon); color: var(--dark-bg); padding: 5px 15px; border-radius: 15px; font-size: 0.8rem; font-weight: 600;">${project.category}</span>
                <div class="project-links" style="display: flex; gap: 15px;">
                    <a href="${project.github}" target="_blank" class="project-link" style="padding: 10px 20px; background: var(--glass-bg); border: 1px solid var(--glass-border); color: var(--text-primary); text-decoration: none; border-radius: 20px; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">
                        <i class="fab fa-github"></i> CODE
                    </a>
                    ${project.demo !== '#' ? `<a href="${project.demo}" target="_blank" class="project-link" style="padding: 10px 20px; background: var(--glass-bg); border: 1px solid var(--glass-border); color: var(--text-primary); text-decoration: none; border-radius: 20px; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-external-link-alt"></i> DEMO
                    </a>` : ''}
                </div>
            </div>
            
            <div class="project-section" style="margin-bottom: 25px;">
                <h3 style="color: var(--primary-neon); margin-bottom: 15px; font-family: var(--font-primary);"><i class="fas fa-exclamation-circle"></i> PROBLEM</h3>
                <p style="color: var(--text-secondary); line-height: 1.6;">${project.problem}</p>
            </div>
            
            <div class="project-section" style="margin-bottom: 25px;">
                <h3 style="color: var(--primary-neon); margin-bottom: 15px; font-family: var(--font-primary);"><i class="fas fa-cogs"></i> APPROACH</h3>
                <p style="color: var(--text-secondary); line-height: 1.6;">${project.approach}</p>
            </div>
            
            <div class="project-section" style="margin-bottom: 25px;">
                <h3 style="color: var(--primary-neon); margin-bottom: 15px; font-family: var(--font-primary);"><i class="fas fa-trophy"></i> RESULT</h3>
                <p style="color: var(--text-secondary); line-height: 1.6;">${project.result}</p>
            </div>
            
            <div class="project-section" style="margin-bottom: 25px;">
                <h3 style="color: var(--primary-neon); margin-bottom: 15px; font-family: var(--font-primary);"><i class="fas fa-chart-line"></i> IMPACT</h3>
                <p style="color: var(--accent-neon); font-weight: 600; text-shadow: 0 0 10px var(--accent-glow);">${project.impact}</p>
            </div>
            
            <div class="project-section">
                <h3 style="color: var(--primary-neon); margin-bottom: 15px; font-family: var(--font-primary);"><i class="fas fa-tools"></i> TECHNOLOGIES</h3>
                <div class="project-tech" style="display: flex; flex-wrap: wrap; gap: 10px;">
                    ${project.technologies.map(tech => `<span class="tech-tag" style="background: rgba(0, 255, 255, 0.1); color: var(--primary-neon); padding: 5px 12px; border-radius: 15px; font-size: 0.8rem; border: 1px solid var(--primary-neon);">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        modal.classList.add('active');
    }
    
    generateTimeline() {
        const timeline = document.getElementById('timeline-3d');
        if (!timeline) return;

        timeline.innerHTML = '';
        
        this.experiences.forEach((exp, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item glass-card';
            
            timelineItem.innerHTML = `
                <div class="timeline-date" style="color: var(--secondary-neon); font-family: var(--font-primary); font-size: 0.9rem; margin-bottom: 10px;">${exp.duration}</div>
                <h3 class="timeline-role" style="font-family: var(--font-primary); color: var(--primary-neon); font-size: 1.3rem; margin-bottom: 5px;">${exp.role}</h3>
                <h4 class="timeline-org" style="color: var(--accent-neon); font-size: 1.1rem; margin-bottom: 15px;">${exp.organization}</h4>
                <p class="timeline-description" style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">${exp.description}</p>
                <div class="timeline-achievements">
                    <h5 style="color: var(--primary-neon); margin-bottom: 10px; font-size: 1rem;">KEY ACHIEVEMENTS:</h5>
                    <ul style="color: var(--text-secondary); padding-left: 20px;">
                        ${exp.achievements.map(achievement => `<li style="margin-bottom: 5px;">${achievement}</li>`).join('')}
                    </ul>
                </div>
            `;
            
            timeline.appendChild(timelineItem);
        });
    }

    generateEducation() {
        const container = document.getElementById('education-timeline-3d');
        if (!container) return;
        container.innerHTML = '';
        
        this.education.forEach(edu => {
            const item = document.createElement('div');
            item.className = 'timeline-item glass-card';
        
            item.innerHTML = `
                <div class="timeline-date" style="color: var(--secondary-neon); font-family: var(--font-primary); font-size: 0.9rem; margin-bottom: 10px;">${edu.period}</div>
                <h3 class="timeline-degree" style="font-family: var(--font-primary); color: var(--primary-neon); font-size: 1.3rem; margin-bottom: 5px;">${edu.degree}</h3>
                <h4 class="timeline-institution" style="color: var(--accent-neon); font-size: 1.1rem; margin-bottom: 15px;">${edu.institution}</h4>
                <p class="timeline-details" style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">${edu.details}</p>
            `;
            
            container.appendChild(item);
        });
    }


    generateBlogPosts() {
        const blogGrid = document.querySelector('.blog-grid');
        if (!blogGrid) return;

        blogGrid.innerHTML = '';
        
        this.blogPosts.forEach(post => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            
            blogCard.innerHTML = `
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>
                <div class="blog-meta">
                    <span>${post.date}</span>
                    <span>${post.readTime}</span>
                </div>
            `;
            
            blogGrid.appendChild(blogCard);
        });
    }

    // Chatbot functionality
    toggleChatbot() {
        const chatbotWindow = document.getElementById('chatbot-window');
        chatbotWindow?.classList.toggle('active');
    }

    closeChatbot() {
        document.getElementById('chatbot-window')?.classList.remove('active');
    }

    handleSuggestion(e) {
        const question = e.target.dataset.question;
        this.sendChatMessage(question);
    }

    sendChatMessage(predefinedMessage = null) {
        const input = document.getElementById('chatbot-input');
        const message = predefinedMessage || input?.value.trim();
        
        if (!message) return;
        
        this.addChatMessage(message, 'user');
        if (input) input.value = '';
        
        // Simulate AI response
        setTimeout(() => {
            const response = this.generateAIResponse(message);
            this.addChatMessage(response, 'bot');
        }, 1000);
    }

    addChatMessage(message, type) {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (!messagesContainer) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        messageDiv.innerHTML = `
            <div class="avatar">
                <i class="fas fa-${type === 'user' ? 'user' : 'robot'}"></i>
            </div>
            <div class="message-content">${message}</div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    generateAIResponse(message) {
        const lower = message.toLowerCase();
        
        // ======= About / Profile =======
        if (lower.includes("about him") || lower.includes("about Krish") ||lower.includes("profile") || lower.includes("system overview")) {
            return "Krish Gupta is an AI/ML specialist focusing on neural architectures, computer vision, and NLP. Currently pursuing BS Data Science at IIT Madras with a Minor in AI from IIT Ropar. He excels in AI research, web development, and leadership.";
        }
        if (lower.includes("location")) {
            return "Krish is based in Punjab, India.";
        }
        if (lower.includes("status")) {
            return "Krish is active and available for projects and collaborations.";
        }
        if (lower.includes("hobbies") || lower.includes("interests")) {
            return "Krish enjoys cricket, football, chess, esports (Free Fire, Clash of Clans), and designing.";
        }
        
        // ======= Skills =======
        if (lower.includes("skills") || lower.includes("expertise") || lower.includes("skill matrix")) {
            return "Krish's technical skills include Python, SQL, JavaScript, Java, Machine Learning, Deep Learning, NLP, Computer Vision, Tensorflow, Data Analysis, Pandas, NumPy, Project Management, Team Leadership, and Strategic Planning.";
        }
        if (lower.includes("python")) return "Python is Krish's primary language, used extensively for AI/ML, data analysis, and building scalable systems.";
        if (lower.includes("ml") || lower.includes("machine learning")) return "Krish has built multiple machine learning models with over 90% accuracy for classification and predictive tasks.";
        if (lower.includes("artificial intelligence") || lower.includes("deep learning") || lower.includes("neural network")) return "Krish has worked on computer vision, NLP, and neural networks, including real-time AI dashboards, object detection, and sentiment analysis.";

        // ======= Projects =======
        if (lower.includes("projects") || lower.includes("portfolio") || lower.includes("project archives")) {
            return "Krish has completed 7+ major projects including Deckify (AI PPT Generator), LLM Agent, Data Analyst Agent, Stock Market Trend Analyzer, MyPortfolio, Quiz Master V1, and News Headline Generator. Each project demonstrates innovation and measurable impact.";
        }
        if (lower.includes("deckify") || lower.includes("ppt") || lower.includes("ppt generator")) {
            return "Deckify generates presentation slides automatically from text prompts using AI and Next.js, reducing creation time by 70%. Demo: https://deckify-ppt-generator.vercel.app/";
        }
        if (lower.includes("llm agent")) {
            return "LLM Agent is a browser-based AI agent capable of multi-step reasoning using tools and large language models. Demo: https://llm-agent-five.vercel.app/";
        }
        if (lower.includes("data analyst agent")) {
            return "Data Analyst Agent automates data ingestion, analysis, visualization, and insight generation using Python, Pandas, and Matplotlib. Demo: https://tds-data-analyst-agent-2.onrender.com/";
        }
        if (lower.includes("stock") || lower.includes("market")) {
            return "Stock Market Trend Analyzer predicts financial trends using LSTM networks. Demo: https://ai-market-trend-analysis-v5.streamlit.app";
        }
        if (lower.includes("myportfolio")) {
            return "MyPortfolio is Krish's personal portfolio website showcasing skills and projects interactively. Demo: https://www.krishgupta.in";
        }
        if (lower.includes("quiz master")) {
            return "Quiz Master V1 is an interactive quiz web application built with HTML, CSS, and JavaScript. Demo: https://github.com/23f2000792/quiz-master-app-v1";
        }
        if (lower.includes("headline generator") || lower.includes("news")) {
            return "News Headline Generator uses NLP and transformers to generate catchy headlines from article text. Demo: https://huggingface.co/spaces/krish200510/headline-generator2";
        }

        // ======= Experience =======
        if (lower.includes("experience") || lower.includes("leadership") || lower.includes("operational history")) {
            return "Krish has held multiple leadership and professional roles: Regional Coordinator at Sundarbans House, Event Head at Paradox 2025, Managing Editor at Devabhasha, Head of Research & Publications at Sportify, and Outreach Volunteer at Student Placement Council.";
        }
        if (lower.includes("sundarbans")) {
            return "At Sundarbans House, Krish coordinated 15+ regional events, co-founded 'Aryavarta Sangam', and managed 25+ team members.";
        }
        if (lower.includes("paradox")) {
            return "At Paradox 2025, Krish organized the Kampus Run event for 1200+ participants and led a team of 20+ volunteers.";
        }
        if (lower.includes("devabhasha")) {
            return "As Managing Editor at Devabhasha, Krish increased readership by 60%, streamlined editorial workflow, and managed content creation for 'Saṃskṛta Makarandah'.";
        }

        // ======= Education =======
        if (lower.includes("education") || lower.includes("academic") || lower.includes("background")) {
            return "Krish Gupta is pursuing a Bachelor of Science in Data Science at IIT Madras. Additionally, he is completing a Minor in Artificial Intelligence from IIT Ropar, gaining hands-on experience in neural networks, computer vision, NLP, robotics, and IoT. He has also participated in multiple AI/ML workshops and certification programs to strengthen practical skills.";
        }

        // ======= Certifications =======
        if (lower.includes("certifications") || lower.includes("certificates") || lower.includes("credentials matrix")) {
            return "Krish holds multiple certifications in AI/ML, Data Science, SQL, GCP, Azure, Dynamic Programming, and Leadership. These are available in the Certifications section of the website.";
        }

        // ======= Contact =======
        if (lower.includes("contact") || lower.includes("email") || lower.includes("social")) {
            return "You can reach Krish at krishgupta200510@gmail.com. Social links: GitHub: https://github.com/23f2000792, LinkedIn: https://www.linkedin.com/in/krish-gupta-11612327a, Website: https://www.krishgupta.in";
        }

        // ======= Blogs =======
        if (lower.includes("blog") || lower.includes("knowledge hub")) {
            return "Krish writes AI/ML insights, research articles, and tutorials. Check the Knowledge Hub section on his portfolio for all blogs.";
        }
        
        // ======= Default =======
        return "Hi! I am Manas.ai. I can help you learn about Krish Gupta's experience in AI/ML, data science, leadership roles, education, and his certifications and projects. Feel free to ask specific questions about any of these areas.";
    
    }

    // Recruiter mode
    showRecruiterMode() {
        const overlay = document.getElementById('recruiter-overlay');
        if (!overlay) return;
        
        overlay.classList.add('active');
        
        // Generate project highlights
        const highlights = document.getElementById('project-highlights');
        if (highlights) {
            const topProjects = this.projects.slice(0, 4);
            
            highlights.innerHTML = topProjects.map(project => `
                <div class="project-item">
                    <h4>${project.title}</h4>
                    <p>${project.impact}</p>
                </div>
            `).join('');
        }
        
        // Generate achievements
        const achievements = document.getElementById('achievements-list');
        if (achievements) {
            const keyAchievements = [
                "Built and deployed ML models achieving over 90% accuracy in academic projects",
                "Designed real-time dashboards for faster insights in data-driven tasks",
                "Applied NLP techniques with strong results in multi-language processing",
                "Worked on IoT and AI projects reducing manual effort and improving efficiency",
                "Led and managed teams of 25+ members across societies and organizations"
            ];
            
            achievements.innerHTML = keyAchievements.map(achievement => `
                <div class="achievement-item">${achievement}</div>
            `).join('');
        }
    }

    hideRecruiterMode() {
        document.getElementById('recruiter-overlay')?.classList.remove('active');
    }

    downloadResume() {
        window.open("Krish_Gupta_Resume.pdf", '_blank');
        this.showNotification('Resume download initiated!', 'success');
    }

    handleContactForm(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        if (!name || !email || !subject || !message) {
            this.showNotification('All fields are required', 'error');
            return;
        }
        
        if (!this.isValidEmail(email)) {
            this.showNotification('Please enter a valid email', 'error');
            return;
        }
        
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> TRANSMITTING...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            this.showNotification('Message transmitted successfully! Response incoming.', 'success');
            e.target.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    showNotification(message, type = 'info') {
        const container = document.getElementById('notification-container');
        if (!container) return;
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 
                          type === 'error' ? 'fa-exclamation-circle' : 
                          'fa-info-circle'}"></i>
            <span>${message}</span>
        `;
        
        container.appendChild(notification);
        
        setTimeout(() => notification.classList.add('show'), 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    handleScroll() {
        const scrollProgress = document.querySelector('.scroll-progress');
        if (scrollProgress) {
            const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        }
        
        // Update active navigation
        this.updateActiveNav();
    }

    updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        const scrollPos = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        // Animate elements on scroll
        const animateElements = document.querySelectorAll('.glass-card, .section-header, .timeline-item');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });
    }

    handleResize() {
        // Reinitialize canvas-based elements on resize
        if (this.isLoaded) {
            this.initSkillsRadar();
        }
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolio = new FuturisticPortfolio();
});

// Global functions for inline event handlers
window.runSentimentDemo = () => window.portfolio?.runSentimentDemo();
window.runImageDemo = () => window.portfolio?.runImageDemo(); 
window.runFinancialDemo = () => window.portfolio?.runFinancialDemo();
window.downloadResume = () => window.portfolio?.downloadResume();