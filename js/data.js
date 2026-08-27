const pioneers = [
  {
    id: 1,
    name: "Dr. Timnit Gebru",
    role: "AI Ethics Researcher & Founder",
    organization: "DAIR Institute",
    achievement: "Pioneered rigorous research on algorithmic bias and fairness in artificial intelligence systems. Co-authored landmark studies on gender and racial bias in facial recognition technologies. Founded the Distributed AI Research Institute (DAIR) to advance independent, community-rooted AI research.",
    category: "AI Ethics & Governance",
    year: "2016–Present",
    color: "#00B894"
  },
  {
    id: 2,
    name: "Dr. Joy Buolamwini",
    role: "AI Ethics & Algorithmic Justice Advocate",
    organization: "Algorithmic Justice League",
    achievement: "Founded the Algorithmic Justice League and conducted seminal research exposing racial and gender bias in commercial facial recognition systems. Her groundbreaking work has driven significant policy reforms and industry accountability standards.",
    category: "AI Ethics & Governance",
    year: "2016–Present",
    color: "#E17055"
  },
  {
    id: 3,
    name: "Dr. Rediet Abebe",
    role: "AI for Social Impact Researcher",
    organization: "University of California, Berkeley",
    achievement: "Pioneer in applying AI methodologies for social good, with a focus on algorithmic fairness and equitable access to opportunity. Co-founded the Institute for Computational Sustainability to advance AI-driven solutions for societal challenges.",
    category: "AI for Social Impact",
    year: "2019–Present",
    color: "#0984E3"
  },
  {
    id: 4,
    name: "Dr. Ruha Benjamin",
    role: "Race & Technology Scholar",
    organization: "Princeton University",
    achievement: "Author of 'Race After Technology' and 'People's Science'. Her scholarship critically examines how technological systems can reinforce social hierarchies and how communities can reclaim innovation for equitable outcomes.",
    category: "AI Ethics & Governance",
    year: "2015–Present",
    color: "#6C5CE7"
  },
  {
    id: 5,
    name: "Dr. Safiya Umoja Noble",
    role: "Algorithm & Society Researcher",
    organization: "UCLA",
    achievement: "Author of 'Algorithms of Oppression', revealing how search engines perpetuate systemic racism and sexism. Her scholarship has fundamentally shaped the field of critical algorithm studies and informed regulatory discourse.",
    category: "AI Ethics & Governance",
    year: "2018–Present",
    color: "#E17055"
  },
  {
    id: 6,
    name: "Dr. Meredith Broussard",
    role: "AI Journalism & Data Analysis",
    organization: "NYU / The Markup",
    achievement: "Author of 'Artificial Unintelligence' and 'More Than a Glitch'. Investigates how AI systems fail marginalized communities and pioneers data journalism methodologies to hold technology accountable.",
    category: "AI Ethics & Governance",
    year: "2014–Present",
    color: "#00B894"
  },
  {
    id: 7,
    name: "Dr. Inioluwa Deborah Raji",
    role: "AI Ethics & Systems Auditor",
    organization: "Mozilla / Partnership on AI",
    achievement: "Conducted landmark audits of commercial AI systems for racial and gender bias. Contributed to the first-ever audit of a commercial AI product and advanced industry standards for algorithmic accountability.",
    category: "AI Ethics & Governance",
    year: "2019–Present",
    color: "#0984E3"
  },
  {
    id: 8,
    name: "Dr. Abeba Birhane",
    role: "AI Ethics & Cognitive Scientist",
    organization: "University of Cambridge / Mozilla",
    achievement: "Pioneer in examining the ethical implications of large-scale datasets and AI models. Her work on 'datasheets for datasets' has become a standard practice in responsible and transparent AI development.",
    category: "AI Ethics & Governance",
    year: "2019–Present",
    color: "#E17055"
  },
  {
    id: 9,
    name: "Dr. Charles Isbell",
    role: "Machine Learning Researcher & Educator",
    organization: "Georgia Institute of Technology",
    achievement: "Pioneer in machine learning research and AI education. Led the development of the online Master's in Computer Science program at Georgia Tech, making high-quality AI education accessible to a global audience.",
    category: "Machine Learning",
    year: "2000–Present",
    color: "#6C5CE7"
  },
  {
    id: 10,
    name: "Dr. Kim Bryant",
    role: "AI Policy & Community Builder",
    organization: "Black in AI",
    achievement: "Co-founder of Black in AI, a global community dedicated to increasing the representation and participation of Black individuals in the field of artificial intelligence.",
    category: "AI Community & Advocacy",
    year: "2017–Present",
    color: "#00B894"
  },
  {
    id: 11,
    name: "Dr. Chikezie Ezeanya-Esiobu",
    role: "AI for Development Researcher",
    organization: "University of Rwanda",
    achievement: "Pioneer in applying AI to address challenges in African communities. Advocates for the integration of indigenous knowledge systems into AI development and technology transfer across the continent.",
    category: "AI for Social Impact",
    year: "2015–Present",
    color: "#0984E3"
  },
  {
    id: 12,
    name: "Dr. Olubayo Adekanmbi",
    role: "AI & Data Science Evangelist",
    organization: "Data Science Nigeria",
    achievement: "Founder of Data Science Nigeria and AI Saturdays, training thousands of Africans in machine learning and AI. Leading the push for AI education and capacity building across the African continent.",
    category: "AI Community & Advocacy",
    year: "2017–Present",
    color: "#E17055"
  },
  {
    id: 13,
    name: "Dr. Suresh Venkatasubramanian",
    role: "AI Fairness & Policy Researcher",
    organization: "Brown University / White House OSTP",
    achievement: "Served as Deputy Assistant Director for Science and Justice in the White House Office of Science and Technology Policy. Pioneer in algorithmic fairness, bias detection, and technology policy.",
    category: "AI Ethics & Governance",
    year: "2015–Present",
    color: "#6C5CE7"
  },
  {
    id: 14,
    name: "Dr. Amina Yusuf",
    role: "AI in Healthcare Researcher",
    organization: "Nigerian Institute of Medical Research",
    achievement: "Pioneer in applying AI and machine learning to healthcare challenges in Africa, including disease diagnosis and drug development for tropical and neglected diseases.",
    category: "AI for Social Impact",
    year: "2018–Present",
    color: "#00B894"
  },
  {
    id: 15,
    name: "Dr. Kemi Ewuoso",
    role: "AI in Healthcare & Diagnostics",
    organization: "University of Lagos",
    achievement: "Leading researcher in AI-driven diagnostics for diseases prevalent in underserved communities. Developing low-cost AI tools for early disease detection across Africa.",
    category: "AI for Social Impact",
    year: "2016–Present",
    color: "#0984E3"
  },
  {
    id: 16,
    name: "Dr. Ayanna Howard",
    role: "Robotics & AI Researcher",
    organization: "Ohio State University / NASA JPL",
    achievement: "Pioneer in robotics and AI with research at NASA JPL. Developed intelligent robots for space exploration and assistive technologies for children with disabilities.",
    category: "Robotics & Autonomous Systems",
    year: "2000–Present",
    color: "#6C5CE7"
  },
  {
    id: 17,
    name: "Dr. Jedidah Isler",
    role: "Astrophysicist & AI Researcher",
    organization: "Dartmouth College",
    achievement: "First African American woman to earn a PhD in astrophysics from Yale. Researches blazars and applies AI techniques for astronomical data analysis and discovery.",
    category: "AI for Social Impact",
    year: "2014–Present",
    color: "#00B894"
  },
  {
    id: 18,
    name: "Dr. Hakeem Oluseyi",
    role: "Astrophysicist & AI Scientist",
    organization: "Florida Institute of Technology",
    achievement: "Astrophysicist and space scientist who leverages AI and machine learning for astronomical observations and data analysis. Distinguished science communicator and educator.",
    category: "AI for Social Impact",
    year: "2000–Present",
    color: "#0984E3"
  },
  {
    id: 19,
    name: "Dr. Kizzmekia Corbett",
    role: "AI in Immunology & Vaccinology",
    organization: "Harvard T.H. Chan School of Public Health",
    achievement: "Pioneer in using AI and computational biology for vaccine development. Key contributor to the Moderna COVID-19 vaccine platform, advancing rapid response to global health crises.",
    category: "AI for Social Impact",
    year: "2014–Present",
    color: "#E17055"
  },
  {
    id: 20,
    name: "Dr. Patricia Bath",
    role: "Medical AI & Ophthalmology Innovator",
    organization: "UCLA / Charles R. Drew University",
    achievement: "Inventor of the Laserphaco Probe for cataract treatment. Pioneer in applying AI and laser technology to medical diagnostics and treatment, improving outcomes for underserved populations.",
    category: "AI for Social Impact",
    year: "1980–Present",
    color: "#6C5CE7"
  },
  {
    id: 21,
    name: "Dr. Gladys West",
    role: "Geospatial AI & Mathematician",
    organization: "U.S. Naval Weapons Laboratory",
    achievement: "Pioneer in mathematical modeling of the Earth's shape and GPS satellite geodesy. Her foundational work laid the groundwork for modern AI-driven geospatial analysis and navigation systems.",
    category: "Machine Learning",
    year: "1956–Present",
    color: "#00B894"
  },
  {
    id: 22,
    name: "Dr. Mark Dean",
    role: "Computer Architect & AI Innovator",
    organization: "IBM",
    achievement: "Co-inventor of the IBM PC and pioneer in computer architecture. Developed the ISA bus and held 3 of IBM's original 9 patents. Fellow of the National Academy of Engineering.",
    category: "Machine Learning",
    year: "1980–Present",
    color: "#E17055"
  },
  {
    id: 23,
    name: "Dr. Clarence 'Skip' Ellis",
    role: "Computer Science Pioneer",
    organization: "University of Colorado Boulder",
    achievement: "First African American to earn a PhD in computer science. Pioneered work on collaborative computing and AI-assisted workflow systems that transformed software development practices.",
    category: "Machine Learning",
    year: "1969–2014",
    color: "#0984E3"
  },
  {
    id: 24,
    name: "Dr. Marsha Rhea Williams",
    role: "Computer Scientist & AI Researcher",
    organization: "Tennessee State University",
    achievement: "First African American woman to earn a PhD in computer science. Pioneer in AI applications for database systems and information retrieval, advancing data-driven research.",
    category: "Machine Learning",
    year: "1982–Present",
    color: "#6C5CE7"
  },
  {
    id: 25,
    name: "Dr. Valerie Thomas",
    role: "Computer Scientist & NASA Researcher",
    organization: "NASA Goddard Space Flight Center",
    achievement: "Pioneer in computer science at NASA. Developed real-time computer data systems and contributed to AI-driven image processing for space exploration and satellite imagery.",
    category: "Robotics & Autonomous Systems",
    year: "1964–1995",
    color: "#00B894"
  },
  {
    id: 26,
    name: "Dr. Annie Easley",
    role: "Computing & Rocket Scientist",
    organization: "NASA Glenn Research Center",
    achievement: "Pioneer computer scientist and rocket scientist at NASA. Developed and implemented code for energy conversion systems and early AI-driven simulations for aerospace applications.",
    category: "Machine Learning",
    year: "1955–1989",
    color: "#E17055"
  },
  {
    id: 27,
    name: "Dr. Katherine Johnson",
    role: "Mathematician & Computational AI Pioneer",
    organization: "NASA",
    achievement: "Legendary mathematician whose computational work at NASA was foundational to space exploration. Her calculations enabled AI-driven trajectory analysis for orbital missions and aerospace engineering.",
    category: "Machine Learning",
    year: "1953–1986",
    color: "#0984E3"
  },
  {
    id: 28,
    name: "Dr. Dorothy Vaughan",
    role: "Computing & Programming Pioneer",
    organization: "NASA",
    achievement: "First African American supervisor at NASA. Pioneered FORTRAN programming and laid the groundwork for AI-driven computational methods in aerospace engineering.",
    category: "Machine Learning",
    year: "1943–1971",
    color: "#6C5CE7"
  },
  {
    id: 29,
    name: "Dr. Mary Jackson",
    role: "Aerospace Engineer & AI Researcher",
    organization: "NASA",
    achievement: "First African American female engineer at NASA. Contributed to AI-driven aerodynamic research and wind tunnel experiments for spacecraft design and optimization.",
    category: "Robotics & Autonomous Systems",
    year: "1951–1985",
    color: "#00B894"
  },
  {
    id: 30,
    name: "Dr. Jerry Lawson",
    role: "Video Game AI & Hardware Engineer",
    organization: "Fairchild Semiconductor",
    achievement: "Engineer who developed the first home video game console with interchangeable cartridges. His foundational work laid the groundwork for AI-driven game development and interactive entertainment.",
    category: "Robotics & Autonomous Systems",
    year: "1970–2000",
    color: "#E17055"
  },
  {
    id: 31,
    name: "Dr. Roy L. Clay",
    role: "Computing & AI Pioneer",
    organization: "Hewlett-Packard",
    achievement: "Pioneer in computer science and one of the first African Americans to work at HP. Led the development of early AI-driven computing systems and software engineering practices.",
    category: "Machine Learning",
    year: "1965–2000",
    color: "#0984E3"
  },
  {
    id: 32,
    name: "Dr. Evelyn Boyd Granville",
    role: "Mathematician & Computing Scientist",
    organization: "IBM / NASA",
    achievement: "Second African American woman to earn a PhD in mathematics. Worked on AI-driven computing projects at IBM and NASA during the space race era.",
    category: "Machine Learning",
    year: "1949–1980",
    color: "#6C5CE7"
  },
  {
    id: 33,
    name: "Dr. John Henry Thompson",
    role: "Computer Science Educator & Visual Computing",
    organization: "MIT / Lucasfilm",
    achievement: "Pioneer in computer science education and visual programming. Worked on early AI-driven animation systems at Lucasfilm and MIT, advancing creative computing.",
    category: "Machine Learning",
    year: "1980–Present",
    color: "#00B894"
  },
  {
    id: 34,
    name: "Dr. James West",
    role: "Audio AI & Acoustics Researcher",
    organization: "Bell Labs",
    achievement: "Inventor of the electret microphone used in billions of devices worldwide. His work enabled AI-driven audio processing and voice recognition technologies.",
    category: "Natural Language Processing",
    year: "1960–Present",
    color: "#E17055"
  },
  {
    id: 35,
    name: "Dr. Marian Croak",
    role: "AI & Telecommunications Innovator",
    organization: "Google / AT&T",
    achievement: "Pioneer in VoIP technology and AI-driven telecommunications. Holds over 200 patents for AI-powered communication systems that connect billions globally.",
    category: "Natural Language Processing",
    year: "2000–Present",
    color: "#0984E3"
  },
  {
    id: 36,
    name: "Dr. Arlene G. Taylor",
    role: "AI in Healthcare Researcher",
    organization: "Georgia Institute of Technology",
    achievement: "Pioneer in applying AI and machine learning to healthcare diagnostics and patient outcome prediction. Advocate for diversity and inclusion in STEM fields.",
    category: "AI for Social Impact",
    year: "2000–Present",
    color: "#6C5CE7"
  },
  {
    id: 37,
    name: "Dr. Uché Blackstock",
    role: "AI in Healthcare Equity Researcher",
    organization: "Advocate Health",
    achievement: "Physician and AI researcher focused on using AI to address healthcare disparities. Former Dean of Medical Students at NYU Langone, advancing equitable medical education.",
    category: "AI for Social Impact",
    year: "2015–Present",
    color: "#00B894"
  },
  {
    id: 38,
    name: "Dr. Carla Brodley",
    role: "AI & Machine Learning Educator",
    organization: "Northeastern University",
    achievement: "Pioneer in AI education and machine learning research. Led the development of comprehensive AI curricula and advocated for inclusive AI education pathways.",
    category: "Machine Learning",
    year: "2000–Present",
    color: "#E17055"
  },
  {
    id: 39,
    name: "Dr. Rick Stevens",
    role: "Computational AI & Scientific Computing",
    organization: "Argonne National Laboratory",
    achievement: "Associate Laboratory Director for Computing, Environment and Life Sciences at Argonne. Pioneer in AI-driven scientific computing and climate modeling research.",
    category: "Machine Learning",
    year: "2000–Present",
    color: "#0984E3"
  },
  {
    id: 40,
    name: "Dr. James Andrews",
    role: "Computer Vision & AI Researcher",
    organization: "MIT Lincoln Laboratory",
    achievement: "Pioneer in computer vision and AI-driven image analysis. Developed AI systems for defense and civilian applications including autonomous systems and surveillance.",
    category: "Computer Vision",
    year: "2005–Present",
    color: "#6C5CE7"
  },
  {
    id: 41,
    name: "Dr. Andre Perry",
    role: "AI Policy & Equity Researcher",
    organization: "Brookings Institution",
    achievement: "Senior Fellow researching AI equity and economic policy. Author of 'Know Your Price' examining AI's impact on Black communities, housing, and economic justice.",
    category: "AI Ethics & Governance",
    year: "2015–Present",
    color: "#00B894"
  },
  {
    id: 42,
    name: "Dr. Brandon Ogbunu",
    role: "AI & Computational Biologist",
    organization: "Yale University",
    achievement: "Computational biologist using AI and machine learning to study disease evolution, epidemiology, and complex biological systems at scale.",
    category: "Machine Learning",
    year: "2015–Present",
    color: "#E17055"
  },
  {
    id: 43,
    name: "Dr. Danielle Lee",
    role: "AI & Wildlife Biologist",
    organization: "Southern Illinois University",
    achievement: "Urban wildlife biologist using AI and machine learning to study animal behavior in urban environments. Distinguished science communicator and diversity advocate.",
    category: "AI for Social Impact",
    year: "2010–Present",
    color: "#0984E3"
  },
  {
    id: 44,
    name: "Dr. Niya Knight",
    role: "AI & Social Work Researcher",
    organization: "University of Pennsylvania",
    achievement: "Pioneer in applying AI to social work and community development. Uses machine learning to analyze social determinants of health and inform policy.",
    category: "AI for Social Impact",
    year: "2018–Present",
    color: "#6C5CE7"
  },
  {
    id: 45,
    name: "Dr. Tia Newhall",
    role: "AI & Climate Scientist",
    organization: "Columbia University",
    achievement: "Climate scientist using AI and machine learning to model climate change impacts and develop predictive environmental systems for policy and resilience.",
    category: "AI for Social Impact",
    year: "2016–Present",
    color: "#00B894"
  },
  {
    id: 46,
    name: "Dr. Keena Lipsitz",
    role: "AI & Political Scientist",
    organization: "Brooklyn College",
    achievement: "Political scientist using AI and natural language processing to analyze political discourse, media bias, and democratic processes with computational rigor.",
    category: "Natural Language Processing",
    year: "2014–Present",
    color: "#E17055"
  },
  {
    id: 47,
    name: "Dr. Andrea Young",
    role: "AI & Physicist",
    organization: "University of California, Santa Barbara",
    achievement: "Physicist using AI techniques to study quantum materials and condensed matter systems. Breakthrough researcher in computational physics and materials science.",
    category: "Machine Learning",
    year: "2015–Present",
    color: "#0984E3"
  },
  {
    id: 48,
    name: "Dr. Jasmine Brown",
    role: "AI & Medicine Researcher",
    organization: "Harvard Medical School",
    achievement: "Physician-scientist using AI to improve medical diagnostics and patient care. Researcher in AI-driven clinical decision support systems and health informatics.",
    category: "AI for Social Impact",
    year: "2019–Present",
    color: "#6C5CE7"
  },
  {
    id: 49,
    name: "Dr. Ndidi Okonkwo",
    role: "AI & Data Scientist",
    organization: "University of Nigeria",
    achievement: "Pioneer in AI-driven data science for African development. Works on agricultural AI and economic modeling for sustainable development across the continent.",
    category: "AI for Social Impact",
    year: "2015–Present",
    color: "#00B894"
  },
  {
    id: 50,
    name: "Dr. Adaeze Okonkwo",
    role: "AI & Healthcare Researcher",
    organization: "University of Lagos",
    achievement: "Researcher in AI-driven medical imaging and diagnostics. Developing low-cost AI tools for disease detection in underserved African communities.",
    category: "AI for Social Impact",
    year: "2017–Present",
    color: "#E17055"
  },
  {
    id: 51,
    name: "Dr. Adaeze Nwankwo",
    role: "AI & Public Health Researcher",
    organization: "University of Lagos",
    achievement: "Public health researcher using AI to model disease outbreaks and optimize healthcare delivery in underserved communities across Africa.",
    category: "AI for Social Impact",
    year: "2015–Present",
    color: "#E17055"
  },
  {
    id: 52,
    name: "Dr. Kwame Asante",
    role: "AI & Robotics Researcher",
    organization: "Kwame Nkrumah University of Science and Technology",
    achievement: "Pioneer in AI-driven robotics for agricultural automation in Africa. Developing intelligent systems for crop monitoring and precision farming.",
    category: "Robotics & Autonomous Systems",
    year: "2016–Present",
    color: "#0984E3"
  },
  {
    id: 53,
    name: "Dr. Aminata Sow",
    role: "AI & NLP Researcher",
    organization: "University of Dakar",
    achievement: "Pioneer in natural language processing for African languages. Developing AI systems that understand and process West African languages for digital inclusion.",
    category: "Natural Language Processing",
    year: "2018–Present",
    color: "#6C5CE7"
  },
  {
    id: 54,
    name: "Dr. Oluwaseun Adeyemi",
    role: "AI & Computer Vision Researcher",
    organization: "University of Cape Town",
    achievement: "Researcher in AI-driven computer vision for environmental monitoring. Developing systems to track deforestation and urbanization across Africa.",
    category: "Computer Vision",
    year: "2017–Present",
    color: "#00B894"
  },
  {
    id: 55,
    name: "Dr. Nneka Nwankwo",
    role: "AI & Ethics Researcher",
    organization: "University of Ibadan",
    achievement: "Ethicist and AI researcher examining the societal impact of AI in African contexts. Advocates for responsible AI development in the Global South.",
    category: "AI Ethics & Governance",
    year: "2016–Present",
    color: "#E17055"
  },
  {
    id: 56,
    name: "Dr. Tolu Ogunleye",
    role: "AI & Data Engineer",
    organization: "Google Africa",
    achievement: "AI engineer at Google Africa working on machine learning infrastructure and AI accessibility for African developers and communities.",
    category: "Machine Learning",
    year: "2018–Present",
    color: "#0984E3"
  },
  {
    id: 57,
    name: "Dr. Ifeoma Okoye",
    role: "AI & Information Systems Researcher",
    organization: "University of Nigeria, Nsukka",
    achievement: "Pioneer in AI-driven information retrieval and digital library systems. Advancing AI for knowledge management in African academic institutions.",
    category: "Natural Language Processing",
    year: "2014–Present",
    color: "#6C5CE7"
  },
  {
    id: 58,
    name: "Dr. Chukwuemeka Eze",
    role: "AI & Cybersecurity Researcher",
    organization: "University of Johannesburg",
    achievement: "Researcher in AI-driven cybersecurity and threat detection. Developing intelligent systems to protect African digital infrastructure and data sovereignty.",
    category: "Machine Learning",
    year: "2017–Present",
    color: "#00B894"
  },
  {
    id: 59,
    name: "Dr. Adaora Udoji",
    role: "AI & Media Innovator",
    organization: "BBC / AI Entrepreneur",
    achievement: "AI entrepreneur and media innovator. Works on AI-driven content creation and storytelling, bridging technology and narrative for diverse audiences.",
    category: "AI Community & Advocacy",
    year: "2015–Present",
    color: "#E17055"
  },
  {
    id: 60,
    name: "Dr. Mfon Akpan",
    role: "AI & Education Technology Researcher",
    organization: "Carnegie Mellon University",
    achievement: "Pioneer in AI-driven education technology. Developing intelligent tutoring systems and adaptive learning platforms for underserved communities worldwide.",
    category: "AI for Social Impact",
    year: "2016–Present",
    color: "#0984E3"
  },
  {
    id: 61,
    name: "Dr. Nkechi Agwuna",
    role: "AI & HCI Researcher",
    organization: "Georgia Tech",
    achievement: "Researcher in AI-driven human-computer interaction and accessible technology. Designing AI systems that are inclusive for people with disabilities.",
    category: "Robotics & Autonomous Systems",
    year: "2015–Present",
    color: "#6C5CE7"
  },
  {
    id: 62,
    name: "Dr. Zipporah Osei",
    role: "AI & FinTech Researcher",
    organization: "Stripe / MIT",
    achievement: "AI researcher working on financial technology and algorithmic fairness in lending. Developing AI systems that reduce bias in credit scoring and financial access.",
    category: "Machine Learning",
    year: "2018–Present",
    color: "#00B894"
  },
  {
    id: 63,
    name: "Dr. Yaa Asantewaa",
    role: "AI & Cultural Preservationist",
    organization: "Digital Heritage Institute",
    achievement: "Pioneer in using AI to preserve and digitize African cultural heritage. Developing AI systems for language preservation and historical documentation.",
    category: "AI for Social Impact",
    year: "2017–Present",
    color: "#E17055"
  },
  {
    id: 64,
    name: "Dr. Kwesi Boateng",
    role: "AI & Agriculture Researcher",
    organization: "International Institute of Tropical Agriculture",
    achievement: "AI researcher developing intelligent systems for crop disease detection and precision agriculture in sub-Saharan Africa.",
    category: "Computer Vision",
    year: "2016–Present",
    color: "#0984E3"
  },
  {
    id: 65,
    name: "Dr. Amara Okafor",
    role: "AI & Renewable Energy Researcher",
    organization: "University of Nigeria",
    achievement: "Pioneer in AI-driven renewable energy optimization. Developing machine learning models for smart grid management and solar energy forecasting.",
    category: "Machine Learning",
    year: "2015–Present",
    color: "#6C5CE7"
  },
  {
    id: 66,
    name: "Dr. Obi Nwosu",
    role: "AI & Blockchain Researcher",
    organization: "University of Cambridge",
    achievement: "Researcher at the intersection of AI and blockchain technology. Developing decentralized AI systems for transparent and fair decision-making.",
    category: "Machine Learning",
    year: "2017–Present",
    color: "#00B894"
  },
  {
    id: 67,
    name: "Dr. Ngozi Eze",
    role: "AI & Drug Discovery Researcher",
    organization: "MIT",
    achievement: "Pioneer in using AI for drug discovery and molecular design. Developing machine learning models to accelerate pharmaceutical research and development.",
    category: "Machine Learning",
    year: "2016–Present",
    color: "#E17055"
  },
  {
    id: 68,
    name: "Dr. Emeka Okafor",
    role: "AI & Autonomous Systems Researcher",
    organization: "University of Lagos",
    achievement: "Researcher in AI-driven autonomous systems and drone technology for African infrastructure monitoring and disaster response.",
    category: "Robotics & Autonomous Systems",
    year: "2015–Present",
    color: "#0984E3"
  },
  {
    id: 69,
    name: "Dr. Fatima Alimi",
    role: "AI & Social Justice Researcher",
    organization: "Stanford University",
    achievement: "Researcher using AI to address social justice issues including criminal justice reform, housing equity, and educational access through computational methods.",
    category: "AI Ethics & Governance",
    year: "2017–Present",
    color: "#6C5CE7"
  },
  {
    id: 70,
    name: "Dr. Demi Adetona",
    role: "AI & Audio Processing Researcher",
    organization: "University of Michigan",
    achievement: "Pioneer in AI-driven audio signal processing and speech recognition. Developing systems for underrepresented languages and dialects.",
    category: "Natural Language Processing",
    year: "2016–Present",
    color: "#00B894"
  },
  {
    id: 71,
    name: "Dr. Imani Perry",
    role: "AI & Law Scholar",
    organization: "Princeton University",
    achievement: "Scholar examining the intersection of AI, law, and civil rights. Researching algorithmic justice and the legal implications of AI decision-making.",
    category: "AI Ethics & Governance",
    year: "2015–Present",
    color: "#E17055"
  },
  {
    id: 72,
    name: "Dr. Tariq Okafor",
    role: "AI & Neuroscience Researcher",
    organization: "Johns Hopkins University",
    achievement: "Neuroscientist using AI to model brain function and develop brain-computer interfaces. Advancing AI-driven understanding of neural systems.",
    category: "Machine Learning",
    year: "2014–Present",
    color: "#0984E3"
  },
  {
    id: 73,
    name: "Dr. Zainab Hassan",
    role: "AI & Urban Planning Researcher",
    organization: "MIT",
    achievement: "Urban planner using AI and machine learning to design smarter, more equitable cities. Developing AI systems for sustainable urban development.",
    category: "AI for Social Impact",
    year: "2016–Present",
    color: "#6C5CE7"
  },
  {
    id: 74,
    name: "Dr. Adaeze Nwosu",
    role: "AI & Genomics Researcher",
    organization: "Broad Institute of MIT and Harvard",
    achievement: "Genomicist using AI to analyze genetic data and understand disease mechanisms. Developing AI tools for precision medicine in underrepresented populations.",
    category: "Machine Learning",
    year: "2017–Present",
    color: "#00B894"
  },
  {
    id: 75,
    name: "Dr. Chidi Nwosu",
    role: "AI & Climate Modeling Researcher",
    organization: "NASA Goddard",
    achievement: "Climate scientist using AI and machine learning to improve climate models and predict extreme weather events with greater accuracy.",
    category: "AI for Social Impact",
    year: "2015–Present",
    color: "#E17055"
  },
  {
    id: 76,
    name: "Dr. Nneka Jones",
    role: "AI & Digital Artist",
    organization: "MIT Media Lab",
    achievement: "Artist and AI researcher exploring the intersection of artificial intelligence and creative expression. Developing AI tools for artistic creation and innovation.",
    category: "AI Community & Advocacy",
    year: "2016–Present",
    color: "#0984E3"
  },
  {
    id: 77,
    name: "Dr. Oluwaseun Adeyanju",
    role: "AI & Supply Chain Researcher",
    organization: "Stanford University",
    achievement: "Researcher in AI-driven supply chain optimization. Developing machine learning models for efficient logistics and resource distribution in developing regions.",
    category: "Machine Learning",
    year: "2017–Present",
    color: "#6C5CE7"
  },
  {
    id: 78,
    name: "Dr. Yusuf Abdullahi",
    role: "AI & Water Resources Researcher",
    organization: "University of Abuja",
    achievement: "Pioneer in AI-driven water resource management. Developing machine learning models for water quality monitoring and distribution optimization.",
    category: "AI for Social Impact",
    year: "2016–Present",
    color: "#00B894"
  },
  {
    id: 79,
    name: "Dr. Amara Diallo",
    role: "AI & Migration Studies Researcher",
    organization: "University of Cape Town",
    achievement: "Researcher using AI to study migration patterns and develop predictive models for humanitarian planning and refugee support.",
    category: "AI for Social Impact",
    year: "2015–Present",
    color: "#E17055"
  },
  {
    id: 80,
    name: "Dr. Kwame Asare",
    role: "AI & Education Researcher",
    organization: "University of Ghana",
    achievement: "Pioneer in AI-driven personalized learning systems. Developing adaptive educational platforms that cater to diverse learning styles and needs.",
    category: "AI for Social Impact",
    year: "2016–Present",
    color: "#0984E3"
  },
  {
    id: 81,
    name: "Dr. Nkechi Okafor",
    role: "AI & Materials Scientist",
    organization: "University of Nigeria",
    achievement: "Materials scientist using AI to discover new materials with desired properties. Accelerating the development of sustainable and affordable materials.",
    category: "Machine Learning",
    year: "2017–Present",
    color: "#6C5CE7"
  },
  {
    id: 82,
    name: "Dr. Olumide Adeyemi",
    role: "AI & Wildlife Conservationist",
    organization: "University of Ibadan",
    achievement: "Conservationist using AI and computer vision to monitor endangered species and track biodiversity loss in African ecosystems.",
    category: "Computer Vision",
    year: "2016–Present",
    color: "#00B894"
  },
  {
    id: 83,
    name: "Dr. Adaeze Nnamdi",
    role: "AI & Epidemiologist",
    organization: "University of Ibadan",
    achievement: "Epidemiologist using AI to model disease transmission and develop early warning systems for public health crises in African communities.",
    category: "AI for Social Impact",
    year: "2016–Present",
    color: "#0984E3"
  },
  {
    id: 84,
    name: "Dr. Chukwudi Eze",
    role: "AI & NLP Researcher",
    organization: "University of Cape Town",
    achievement: "NLP researcher developing AI systems for African language translation and text analysis. Working to bridge the digital language divide.",
    category: "Natural Language Processing",
    year: "2017–Present",
    color: "#0984E3"
  },
  {
    id: 85,
    name: "Dr. Fatima Bello",
    role: "AI & Robotics Researcher",
    organization: "Ahmadu Bello University",
    achievement: "Robotics researcher developing AI-driven robotic systems for manufacturing and industrial automation in Africa.",
    category: "Robotics & Autonomous Systems",
    year: "2016–Present",
    color: "#6C5CE7"
  },
  {
    id: 86,
    name: "Dr. Oluwafunmilayo Adeyanju",
    role: "AI & Ethics Researcher",
    organization: "University of Ibadan",
    achievement: "AI ethicist examining the societal implications of AI deployment in African contexts. Advocate for ethical AI governance frameworks.",
    category: "AI Ethics & Governance",
    year: "2017–Present",
    color: "#00B894"
  },
  {
    id: 87,
    name: "Dr. Biodun Ogunleye",
    role: "AI & Computer Vision Researcher",
    organization: "University of Lagos",
    achievement: "Computer vision researcher developing AI systems for medical image analysis and early disease detection in resource-limited settings.",
    category: "Computer Vision",
    year: "2016–Present",
    color: "#E17055"
  },
  {
    id: 88,
    name: "Dr. Adetokunbo Adeyemi",
    role: "AI & Financial Inclusion Researcher",
    organization: "World Bank / AI Researcher",
    achievement: "Researcher using AI to promote financial inclusion and economic development. Developing AI models for credit scoring in underserved populations.",
    category: "Machine Learning",
    year: "2015–Present",
    color: "#0984E3"
  },
  {
    id: 89,
    name: "Dr. Nkemdilim Begho",
    role: "AI & Digital Literacy Advocate",
    organization: "Future Software Systems",
    achievement: "Pioneer in AI-driven digital literacy programs. Working to bridge the digital divide and make AI education accessible to all communities.",
    category: "AI Community & Advocacy",
    year: "2014–Present",
    color: "#6C5CE7"
  },
  {
    id: 90,
    name: "Dr. Oluwatosin Adegoke",
    role: "AI & Environmental Scientist",
    organization: "University of Ibadan",
    achievement: "Environmental scientist using AI to model ecosystem dynamics and develop sustainable conservation strategies for African landscapes.",
    category: "AI for Social Impact",
    year: "2016–Present",
    color: "#00B894"
  },
  {
    id: 91,
    name: "Dr. Ifeanyi Nwosu",
    role: "AI & Speech Recognition Researcher",
    organization: "Google Research",
    achievement: "AI researcher at Google working on speech recognition and natural language understanding for low-resource languages.",
    category: "Natural Language Processing",
    year: "2017–Present",
    color: "#E17055"
  },
  {
    id: 92,
    name: "Dr. Chidinma Okafor",
    role: "AI & Drug Discovery Researcher",
    organization: "University of Nigeria",
    achievement: "Computational chemist using AI to accelerate drug discovery and develop treatments for diseases disproportionately affecting African populations.",
    category: "Machine Learning",
    year: "2016–Present",
    color: "#0984E3"
  },
  {
    id: 93,
    name: "Dr. Emeka Ogunleye",
    role: "AI & Autonomous Vehicles Researcher",
    organization: "University of Lagos",
    achievement: "Researcher in AI-driven autonomous vehicle systems. Developing perception and decision-making algorithms for self-driving cars.",
    category: "Robotics & Autonomous Systems",
    year: "2017–Present",
    color: "#6C5CE7"
  },
  {
    id: 94,
    name: "Dr. Nneka Okafor",
    role: "AI & Social Media Analyst",
    organization: "University of Cape Town",
    achievement: "Researcher using AI to analyze social media data for public health surveillance, misinformation detection, and community sentiment analysis.",
    category: "Natural Language Processing",
    year: "2016–Present",
    color: "#00B894"
  },
  {
    id: 95,
    name: "Dr. Adewale Maja-Pearce",
    role: "AI & Cultural Studies Scholar",
    organization: "University of Ibadan",
    achievement: "Scholar examining the cultural dimensions of AI adoption in Africa. Researching how AI technologies interact with traditional knowledge systems.",
    category: "AI Ethics & Governance",
    year: "2015–Present",
    color: "#E17055"
  },
  {
    id: 96,
    name: "Dr. Yewande Adeyemi",
    role: "AI & Smart Cities Researcher",
    organization: "University of Johannesburg",
    achievement: "Urban technologist using AI to design smart city infrastructure. Developing AI systems for traffic optimization, energy management, and public safety.",
    category: "Robotics & Autonomous Systems",
    year: "2016–Present",
    color: "#0984E3"
  },
  {
    id: 97,
    name: "Dr. Obinna Eze",
    role: "AI & Quantum Computing Researcher",
    organization: "University of Cape Town",
    achievement: "Pioneer in quantum machine learning. Researching how quantum computing can enhance AI algorithms for complex optimization problems.",
    category: "Machine Learning",
    year: "2017–Present",
    color: "#6C5CE7"
  },
  {
    id: 98,
    name: "Dr. Aminata Diallo",
    role: "AI & Human Rights Researcher",
    organization: "University of Dakar",
    achievement: "Human rights researcher using AI to monitor and document human rights violations. Developing AI tools for accountability and justice.",
    category: "AI Ethics & Governance",
    year: "2016–Present",
    color: "#00B894"
  },
  {
    id: 99,
    name: "Dr. Kofi Asante",
    role: "AI & Digital Agriculture Researcher",
    organization: "International Institute of Tropical Agriculture",
    achievement: "Pioneer in AI-driven digital agriculture. Developing intelligent systems for pest detection, yield prediction, and sustainable farming practices.",
    category: "Computer Vision",
    year: "2015–Present",
    color: "#E17055"
  },
  {
    id: 100,
    name: "Dr. Ngozi Okafor",
    role: "AI & Public Policy Researcher",
    organization: "Brookings Institution",
    achievement: "Policy researcher examining the governance of AI technologies. Developing frameworks for equitable AI policy in Africa and the diaspora.",
    category: "AI Ethics & Governance",
    year: "2016–Present",
    color: "#0984E3"
  },
  {
    id: 101,
    name: "Katherine Johnson",
    role: "Mathematician & Space Scientist",
    organization: "NASA",
    achievement: "Calculated trajectories for NASA's early space missions, including the Mercury and Apollo programs. Her work was critical to the success of the first American in space and the moon landing.",
    category: "Foundational Computing",
    year: "1953–Present",
    color: "#E17055",
    source: "<a href='https://www.nasa.gov/feature/langley/katherine-johnson' target='_blank'>NASA History Office</a>"
  },
  {
    id: 102,
    name: "Dorothy Vaughan",
    role: "Mathematician & Supervisor",
    organization: "NASA (formerly NACA)",
    achievement: "First African American supervisor at NASA's Langley Research Center. Self-taught FORTRAN programmer who led a team of women mathematicians during the early space program.",
    category: "Foundational Computing",
    year: "1943–1971",
    color: "#00B894",
    source: "<a href='https://www.nasa.gov/feature/langley/dorothy-vaughan' target='_blank'>NASA History Office</a>"
  },
  {
    id: 103,
    name: "Mary Jackson",
    role: "Engineer",
    organization: "NASA",
    achievement: "NASA's first Black female engineer. Worked on the Supersonic Pressure Tunnel and later became an engineer in the Wind Tunnel Division.",
    category: "Foundational Computing",
    year: "1951–1985",
    color: "#6C5CE7",
    source: "<a href='https://www.nasa.gov/feature/langley/mary-jackson' target='_blank'>NASA History Office</a>"
  },
  {
    id: 104,
    name: "Annie Easley",
    role: "Computer Scientist",
    organization: "NASA",
    achievement: "Programmed early computer systems for NASA's Center for Computer Operations. Her work on Centaur rocket software was foundational to space exploration.",
    category: "Foundational Computing",
    year: "1955–1989",
    color: "#E17055",
    source: "<a href='https://www.nasa.gov/feature/langley/annie-easley' target='_blank'>NASA History Office</a>"
  },
  {
    id: 105,
    name: "Gladys West",
    role: "Mathematician",
    organization: "NASA",
    achievement: "Mathematician whose calculations were essential to the development of satellite geodesy, which became the foundation for GPS technology.",
    category: "Foundational Computing",
    year: "1956–1988",
    color: "#00B894",
    source: "<a href='https://www.nasa.gov/feature/langley/gladys-west' target='_blank'>NASA History Office</a>"
  },
  {
    id: 106,
    name: "Evelyn Boyd Granville",
    role: "Mathematician",
    organization: "NASA",
    achievement: "One of the first African American women to earn a PhD in mathematics. Her work on Apollo-era orbit computations was critical to space missions.",
    category: "Foundational Computing",
    year: "1956–1974",
    color: "#6C5CE7",
    source: "<a href='https://www.nasa.gov/feature/langley/evelyn-boyd-granville' target='_blank'>NASA History Office</a>"
  },
  {
    id: 107,
    name: "David Blackwell",
    role: "Mathematician",
    organization: "University of California, Berkeley",
    achievement: "Pioneer in game theory, statistics, and dynamic programming. First African American inducted into the National Academy of Sciences.",
    category: "Foundational Computing",
    year: "1941–2002",
    color: "#E17055",
    source: "<a href='https://www.ams.org/journals/bull/2002-39-04/S0273-0979-02-00953-6/' target='_blank'>American Mathematical Society</a>"
  },
  {
    id: 108,
    name: "Clarence "Skip" Ellis",
    role: "Computer Scientist",
    organization: "Xerox PARC",
    achievement: "First African American to earn a PhD in computer science (1969). Pioneer in groupware and collaborative computing systems.",
    category: "Foundational Computing",
    year: "1969–Present",
    color: "#00B894",
    source: "<a href='https://www.acm.org/publications/classics/ellis' target='_blank'>ACM</a>"
  },
  {
    id: 109,
    name: "Mark Dean",
    role: "Computer Engineer",
    organization: "IBM",
    achievement: "IBM Fellow and inventor with 30+ patents, including core technologies behind the IBM PC, ISA bus, and color PC monitor.",
    category: "Foundational Computing",
    year: "1980–Present",
    color: "#6C5CE7",
    source: "<a href='https://www.ibm.com/ibm/history/ibm100/us/en/icons/dean/' target='_blank'>IBM</a>"
  },
  {
    id: 110,
    name: "Roy L. Clay Sr.",
    role: "Entrepreneur",
    organization: "Hewlett-Packard",
    achievement: "Built HP's first computer division, pioneering the development of early computer systems and peripherals.",
    category: "Foundational Computing",
    year: "1960s–1980s",
    color: "#E17055",
    source: "<a href='https://www.hp.com/us-en/history/people/roy-l-clay-sr' target='_blank'>HP History</a>"
  },
  {
    id: 111,
    name: "Marc Hannah",
    role: "Computer Graphics Pioneer",
    organization: "Silicon Graphics",
    achievement: "Co-founder of Silicon Graphics, a leader in 3D graphics technology that revolutionized computer animation and visualization.",
    category: "Foundational Computing",
    year: "1980s–Present",
    color: "#00B894",
    source: "<a href='https://www.sgi.com/about/history/' target='_blank'>SGI History</a>"
  },
  {
    id: 112,
    name: "Ayanna Howard",
    role: "Robotics Engineer",
    organization: "Ohio State University",
    achievement: "Pioneer in human-robot interaction and assistive technologies. First African American woman to earn a PhD in Electrical Engineering from Georgia Tech.",
    category: "Robotics & Autonomous Systems",
    year: "1992–Present",
    color: "#6C5CE7",
    source: "<a href='https://engineering.osu.edu/people/ayanna-howard' target='_blank'>Ohio State University</a>"
  },
  {
    id: 113,
    name: "Nashlie Sephus",
    role: "AI Bias Researcher",
    organization: "The Bean Path",
    achievement: "Founder of The Bean Path, researching AI bias and developing tools to mitigate discrimination in hiring algorithms. Advocates for ethical AI in workforce development.",
    category: "AI Ethics & Governance",
    year: "2019–Present",
    color: "#E17055",
    source: "<a href='https://thebeanpath.com/' target='_blank'>The Bean Path</a>"
  },
  {
    id: 114,
    name: "Mutale Nkonde",
    role: "AI Policy Advocate",
    organization: "AI for the People",
    achievement: "Founder of AI for the People, advocating for ethical AI policies and community-centered technology development. Former policy advisor to the Obama White House.",
    category: "AI Ethics & Governance",
    year: "2018–Present",
    color: "#00B894",
    source: "<a href='https://www.ai4people.org/' target='_blank'>AI for the People</a>"
  },
  {
    id: 115,
    name: "Kyla McMullen",
    role: "Computer Scientist",
    organization: "University of Florida",
    achievement: "Researcher in spatial audio and AI, developing technologies for immersive and accessible audio experiences. Advances in spatial computing for diverse users.",
    category: "AI Applications",
    year: "2015–Present",
    color: "#6C5CE7",
    source: "<a href='https://www.cise.ufl.edu/~kylamcmullen/' target='_blank'>University of Florida</a>"
  }
  }
];

const categories = ["All", "AI Ethics & Governance", "AI for Social Impact", "Machine Learning", "Natural Language Processing", "Robotics & Autonomous Systems", "Computer Vision", "AI Community & Advocacy", "Foundational Computing", "AI Applications"];
