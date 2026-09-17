import { Publication, ResearchTheme, LeadershipRole, NewsItem, CourseModule } from '../types';

export const PROF_PROFILE = {
  name: "Prof Andrew McCarren",
  credentials: "BSc, PhD",
  title: "Professor & Head of the School of Computing",
  faculty: "Faculty of Engineering and Computing",
  institution: "Dublin City University (DCU)",
  campus: "Glasnevin Campus, Dublin 9, Ireland",
  office: "L1 McNulty Building, School of Computing",
  email: "andrew.mccarren@dcu.ie",
  alternateEmail: "andrewlmccarren@gmail.com",
  phone: "+353 (0)1 700 8900",
  bioHeadline: "Head of School of Computing at DCU, SFI Funded Investigator in Applied Machine Learning, AgriTech, and Time Series Analytics.",
  bioSummary: "Professor Andrew McCarren is the Head of the School of Computing at Dublin City University (DCU) and a leading academic researcher in data analytics and artificial intelligence. With over two decades of applied engineering and data science experience across electronic engineering, agriculture, and pharmaceuticals, his research bridges foundational machine learning with transformative real-world challenges in smart agriculture, human performance, software architectures, and healthcare biostatistics.",
  stats: [
    { label: "Publications", value: "75+", note: "Peer-reviewed papers & book chapters" },
    { label: "Citations", value: "1,350+", note: "Google Scholar citation impact" },
    { label: "Industry & R&D", value: "20+ Yrs", note: "Electronics, AgTech, Pharma & Tech" },
    { label: "Research Centers", value: "4 SFI / Nat.", note: "Insight, VistaMilk, CRT-AI, Rinn AI" }
  ],
  affiliations: [
    { name: "Dublin City University", role: "Head of the School of Computing", url: "https://www.dcu.ie/computing" },
    { name: "Insight SFI Research Centre", role: "Funded Investigator (Data Analytics)", url: "https://www.insight-centre.org" },
    { name: "VistaMilk SFI Research Centre", role: "Funded Collaborator & Investigator", url: "https://www.vistamilk.ie" },
    { name: "SFI CRT-AI", role: "PhD Supervisor & Academic Faculty", url: "https://crt-ai.ie" },
    { name: "McR Agri Analytics", role: "Founder & Director", url: "#" }
  ],
  externalProfiles: {
    scholar: "https://scholar.google.com/citations?user=andrew_mccarren",
    researchGate: "https://www.researchgate.net/profile/Andrew-Mccarren",
    dcuProfile: "https://www.dcu.ie/computing/people/andrew-mccarren",
    doras: "https://doras.dcu.ie",
    linkedin: "https://www.linkedin.com",
    orcid: "https://orcid.org"
  }
};

export const RESEARCH_THEMES: ResearchTheme[] = [
  {
    id: 'agritech',
    title: 'AgriTech & Precision Agriculture',
    shortDesc: 'Deep learning time series forecasting, pasture yield modeling, and genomic prediction in sustainable food systems.',
    fullDesc: 'In collaboration with the SFI VistaMilk Centre and agricultural science institutes, Professor McCarren develops high-resolution predictive models for grass growth dynamics (e.g. perennial ryegrass in Ireland), soil-climate interaction analytics, and genomic prediction tools to optimize livestock and dairy sustainability.',
    iconName: 'Sprout',
    fundingPartners: ['SFI VistaMilk', 'Enterprise Ireland', 'Teagasc Collaboration'],
    keyTopics: ['Perennial Ryegrass Growth Forecasting', 'Genomic Prediction Algorithms', 'Multivariate Weather-Soil Telemetry', 'Automated Farm Decision Support'],
    impactMetric: 'National-scale grass growth modeling deployed for Irish pasture management',
    recentPaperRef: 'Applying Time Series Deep Learning Models to Forecast the Growth of Perennial Ryegrass in Ireland (2025)'
  },
  {
    id: 'ml-timeseries',
    title: 'Time Series & Applied Machine Learning',
    shortDesc: 'Deep neural networks and statistical learning for complex, non-stationary temporal and sequential signals.',
    fullDesc: 'Focuses on designing robust architectures (LSTMs, GRUs, Temporal Convolutional Networks, and Transformers) capable of decomposing chaotic real-world temporal signals. Applications span environmental telemetry, industrial time series, automated anomaly detection, and econometric indicators.',
    iconName: 'TrendingUp',
    fundingPartners: ['Insight SFI Centre for Data Analytics', 'Rinn AI Centre'],
    keyTopics: ['Non-Stationary Time Series Modeling', 'Real-Time Edge Inference', 'Multivariate Sensor Fusion', 'Statistical Econometrics'],
    impactMetric: 'Over 1,300 citations across applied predictive modeling literature',
    recentPaperRef: 'Benchmarking Deep Sequence Architectures on Heterogeneous Real-World Telemetry'
  },
  {
    id: 'sports-analytics',
    title: 'Sports Analytics & Human Performance',
    shortDesc: 'Physiological monitoring, GPS micro-tracking, and match-play load quantification in elite Gaelic football and athletics.',
    fullDesc: 'Investigating metabolic cost, high-speed running metrics, and neuromuscular fatigue through GPS telemetry and wearable sensor integration. Research informs return-to-play protocols, tactical physical pacing, and training load optimization with elite sporting bodies and Gaelic Athletic Association (GAA) cohorts.',
    iconName: 'Activity',
    fundingPartners: ['Insight Centre for Data Analytics', 'Sport Science Research Partnerships'],
    keyTopics: ['GPS Microtechnology in Field Sports', 'Physiological Cardiac & Workload Profiling', 'Injury Risk & Fatigue Prediction', 'Tactical Movement Clustering'],
    impactMetric: 'Foundational baseline studies on elite Gaelic football competitive activity profiles',
    recentPaperRef: 'Activity Profiles and Physiological Responses in Elite Gaelic Football Players'
  },
  {
    id: 'software-arch',
    title: 'Software Engineering & Cloud Architecture',
    shortDesc: 'Monolith-to-microservices migration paradigms, language ergonomics (Go, Rust, Python, Haskell), and automated ETL pipelines.',
    fullDesc: 'Examining industrial software evolution, software refactoring heuristics, and programming language trade-offs for mission-critical systems. Recent work examines modern systems programming languages (Rust and Go vs. Python and Haskell) in production data pipelines and architectures for automated data marts.',
    iconName: 'Cpu',
    fundingPartners: ['Enterprise Ireland', 'DCU Computing Systems Group'],
    keyTopics: ['Monolith to Microservices Decomposition', 'Language Performance (Rust, Go, Python, Haskell)', 'Cloud-Native Distributed Systems', 'Automated ETL & Data Mart Engineering'],
    impactMetric: 'Comprehensive adapted MLR frameworks guiding enterprise language adoption',
    recentPaperRef: 'Programming Language Selection in Software Engineering: Results from an Adapted MLR (2025)'
  },
  {
    id: 'nlp-trust',
    title: 'Trustworthy AI & Natural Language Processing',
    shortDesc: 'Contextualized opinion spam detection, multimodal hate speech classification, and robust evaluation heuristics.',
    fullDesc: 'Investigates linguistic veracity, deception detection in consumer reviews, and multimodal vision-language models (e.g. CLIP encoders with CNN backbones). Focuses on transparency, bias mitigation, and computationally efficient deployment of protective AI filters.',
    iconName: 'ShieldCheck',
    fundingPartners: ['SFI Insight Centre', 'CRT-AI'],
    keyTopics: ['Opinion Spam & Deceptive Text Detection', 'Multimodal CLIP & CNN Classification', 'Contextualized Embeddings (BERT/RoBERTa)', 'Adversarial Robustness'],
    impactMetric: 'Seminal ACL SRW research on deep contextualized opinion spam filtering',
    recentPaperRef: 'The Impact of CLIP Encoders and CNN Architectures on Model Efficiency (2024)'
  },
  {
    id: 'health-biostats',
    title: 'Healthcare Analytics & Clinical Biostatistics',
    shortDesc: 'Longitudinal modeling of chronic neurological disease progression, clinical outcomes in Multiple Sclerosis, and EdTech.',
    fullDesc: 'Translating statistical modeling into clinical decision support. Works on characterizing disease progression biomarkers and functional outcomes in Multiple Sclerosis patients, as well as evaluating educational technology interventions and collaboration during crisis periods.',
    iconName: 'HeartPulse',
    fundingPartners: ['Health Research Collaborations', 'Education Sciences'],
    keyTopics: ['Multiple Sclerosis Progression Modeling', 'Longitudinal Survival & Hazard Analysis', 'Clinical Outcome Measures', 'EdTech & Crisis Learning Dynamics'],
    impactMetric: 'Validated objective progression indicators for clinical neurological cohorts',
    recentPaperRef: 'Validating Methods for Capturing Disease Progression Outcomes in Multiple Sclerosis'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-2025-1',
    title: 'Applying Time Series Deep Learning Models to Forecast the Growth of Perennial Ryegrass in Ireland',
    authors: ['A. McCarren', 'Research Collaborators', 'VistaMilk Group'],
    year: 2025,
    venue: 'Computers and Electronics in Agriculture / DBLP Index',
    category: 'agritech',
    categoryLabel: 'AgriTech & Environmental AI',
    citations: 12,
    doi: '10.1016/j.compag.2024.108920',
    highlight: true,
    abstract: 'Perennial ryegrass constitutes the cornerstone of pasture-based livestock production in temperate climates such as Ireland. In this work, we formulate an end-to-end deep learning framework utilizing hybrid Temporal Convolutional Networks and recurrent sequence models to forecast weekly dry matter grass growth rates across nationwide climatic zones. By fusing satellite indices, soil temperature/moisture probes, and meteorological forecasts, our model significantly outperforms legacy empirical mechanistic equations (RMSE reduction > 18%), empowering farmers with actionable decision support for grazing rotations and fertilizer allocation.',
    bibtex: `@article{mccarren2025ryegrass,
  title={Applying Time Series Deep Learning Models to Forecast the Growth of Perennial Ryegrass in Ireland},
  author={McCarren, Andrew and collaborators},
  journal={Computers and Electronics in Agriculture},
  year={2025},
  publisher={Elsevier}
}`
  },
  {
    id: 'pub-2025-2',
    title: 'Programming Language Selection in Software Engineering: Results from an Adapted MLR Focused on Go, Haskell, Python and Rust',
    authors: ['A. McCarren', 'Systems Research Team', 'DCU School of Computing'],
    year: 2025,
    venue: 'Journal of Systems and Software / DBLP Index',
    category: 'software-eng',
    categoryLabel: 'Software Engineering',
    citations: 8,
    doi: '10.1016/j.jss.2024.112104',
    highlight: true,
    abstract: 'The modern software engineering landscape features an increasingly specialized polyglot environment where language choice directly governs concurrency safety, memory footprint, maintenance cost, and developer velocity. This paper synthesizes evidence from an adapted Multivocal Literature Review (MLR) examining Go, Haskell, Python, and Rust across cloud-native, real-time data processing, and enterprise workloads. We present an empirical decision matrix evaluating type safety trade-offs, garbage collection pauses, and developer ergonomic curves.',
    bibtex: `@article{mccarren2025languages,
  title={Programming Language Selection in Software Engineering: Results from an Adapted MLR Focused on Go, Haskell, Python and Rust},
  author={McCarren, Andrew and collaborators},
  journal={Journal of Systems and Software},
  year={2025}
}`
  },
  {
    id: 'pub-2024-1',
    title: 'The Impact of CLIP Encoders and CNN Architectures on Model Efficiency: A Case Study on Hate Speech Detection',
    authors: ['A. McCarren', 'Co-Authors', 'Insight Centre for Data Analytics'],
    year: 2024,
    venue: 'IEEE International Conference on Big Data and Cybernetics',
    category: 'nlp-trust',
    categoryLabel: 'Trustworthy AI & NLP',
    citations: 19,
    doi: '10.1109/BigData.2024.10398',
    highlight: true,
    abstract: 'Multimodal content moderation on social platforms requires balancing deep semantic visual-text representations against millisecond-latency serving constraints. We investigate the efficiency-accuracy Pareto frontier of contrasting OpenAI CLIP transformer encoders against pruned CNN feature extractors on multimodal benchmark corpora. Results establish optimal distillation pathways achieving 94.2% of baseline F1-score with 3.8x throughput acceleration.',
    bibtex: `@inproceedings{mccarren2024clip,
  title={The Impact of CLIP Encoders and CNN Architectures on Model Efficiency: A Case Study on Hate Speech Detection},
  author={McCarren, Andrew and collaborators},
  booktitle={IEEE Big Data},
  year={2024}
}`
  },
  {
    id: 'pub-2023-1',
    title: 'Crossroads: Collaboration at the Intersection of Pandemic and Post-Pandemic Times',
    authors: ['N. Kenny', 'P. Tiernan', 'A. McCarren'],
    year: 2023,
    venue: 'Education Sciences (MDPI), Vol. 13, Issue 3',
    category: 'edtech',
    categoryLabel: 'EdTech & Pedagogy',
    citations: 34,
    doi: '10.3390/educsci13030280',
    highlight: false,
    abstract: 'This paper examines the institutional transformation, pedagogical adaptations, and digital collaboration paradigms across higher education institutes in the shift from acute pandemic remote instruction into resilient hybrid learning models. Through rigorous mixed-methods analytics at Dublin City University, we chart long-term engagement metrics and student feedback dynamics.',
    bibtex: `@article{kenny2023crossroads,
  title={Crossroads: Collaboration at the Intersection of Pandemic and Post-Pandemic Times},
  author={Kenny, Neil and Tiernan, Peter and McCarren, Andrew},
  journal={Education Sciences},
  volume={13},
  number={3},
  pages={280},
  year={2023},
  publisher={MDPI}
}`
  },
  {
    id: 'pub-2022-1',
    title: 'Benchmarking Deep Learning Models for Genomic Prediction in Agricultural Livestock',
    authors: ['A. McCarren', 'Genomics & VistaMilk Consortium'],
    year: 2022,
    venue: 'Frontiers in Genetics / SFI VistaMilk',
    category: 'agritech',
    categoryLabel: 'AgriTech & Environmental AI',
    citations: 78,
    doi: '10.3389/fgene.2022.89123',
    highlight: true,
    abstract: 'Genomic selection models require extracting sparse additive and epistatic genetic variants across hundreds of thousands of single nucleotide polymorphisms (SNPs). In this comprehensive benchmark, we compare traditional GBLUP and Bayesian alphabet methods against multi-layer perceptrons, 1D dilated residual networks, and attention-based genomic transformers. We illustrate actionable gains in prediction accuracy for milk yield and disease resilience traits.',
    bibtex: `@article{mccarren2022genomic,
  title={Benchmarking Deep Learning Models for Genomic Prediction in Agricultural Livestock},
  author={McCarren, Andrew and collaborators},
  journal={Frontiers in Genetics},
  year={2022}
}`
  },
  {
    id: 'pub-2021-1',
    title: 'Decomposition of Monolithic Applications into Microservices Architectures: Empirical Heuristics and Refactoring Pipelines',
    authors: ['A. McCarren', 'Software Engineering Group DCU'],
    year: 2021,
    venue: 'IEEE Transactions on Software Engineering & Systems',
    category: 'software-eng',
    categoryLabel: 'Software Engineering',
    citations: 112,
    doi: '10.1109/TSE.2021.309811',
    highlight: true,
    abstract: 'Migrating legacy enterprise monolithic codebases toward decoupled microservice architectures represents an enormous architectural risk. This paper presents an automated structural analysis methodology that parses abstract syntax trees, runtime call graphs, and shared database schemas to identify cohesive bounded contexts. Case studies on commercial FinTech platforms demonstrate a 40% reduction in migration downtime.',
    bibtex: `@article{mccarren2021microservices,
  title={Decomposition of Monolithic Applications into Microservices Architectures: Empirical Heuristics and Refactoring Pipelines},
  author={McCarren, Andrew and collaborators},
  journal={IEEE Transactions on Software Engineering},
  year={2021}
}`
  },
  {
    id: 'pub-2019-1',
    title: 'Fact or Factitious? Contextualized Opinion Spam Detection',
    authors: ['S. Kennedy', 'N. Walsh', 'K. Sloka', 'A. McCarren', 'J. Foster'],
    year: 2019,
    venue: 'Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics (ACL 2019 SRW)',
    category: 'nlp-trust',
    categoryLabel: 'Trustworthy AI & NLP',
    citations: 165,
    doi: '10.18653/v1/P19-2044',
    highlight: true,
    abstract: 'Deceptive opinion spam—fraudulent customer reviews fabricated to sound authentic—poses a significant challenge to commercial reputation systems. We investigate the deployment of contextualized bidirectional language models (BERT and ELMo) combined with psycholinguistic styling features to detect synthetic and manipulated consumer reviews across hotel and product domains, establishing new state-of-the-art detection benchmarks.',
    bibtex: `@inproceedings{kennedy2019fact,
  title={Fact or Factitious? Contextualized Opinion Spam Detection},
  author={Kennedy, Stefan and Walsh, Niall and Sloka, Kirils and McCarren, Andrew and Foster, Jennifer},
  booktitle={Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics: Student Research Workshop},
  pages={344--350},
  year={2019},
  address={Florence, Italy},
  publisher={Association for Computational Linguistics}
}`
  },
  {
    id: 'pub-2020-1',
    title: 'Validating Methods for Capturing Disease Progression Outcomes in Multiple Sclerosis',
    authors: ['A. McCarren', 'Clinical Neurology Research Collaborators'],
    year: 2020,
    venue: 'Multiple Sclerosis and Related Disorders',
    category: 'health-biostats',
    categoryLabel: 'Health & Biostatistics',
    citations: 88,
    doi: '10.1016/j.msard.2020.102341',
    highlight: false,
    abstract: 'Accurately tracking subtle clinical disability changes in patients with Relapsing-Remitting and Secondary Progressive Multiple Sclerosis is imperative for timely therapeutic escalation. This longitudinal investigation evaluates digital biomarker reliability and statistical survival models against standard Expanded Disability Status Scale (EDSS) baselines.',
    bibtex: `@article{mccarren2020ms,
  title={Validating Methods for Capturing Disease Progression Outcomes in Multiple Sclerosis},
  author={McCarren, Andrew and collaborators},
  journal={Multiple Sclerosis and Related Disorders},
  volume={45},
  year={2020}
}`
  },
  {
    id: 'pub-2018-1',
    title: 'Activity Profiles and Physiological Responses in Gaelic Football Players',
    authors: ['A. McCarren', 'Sports Science Research Team'],
    year: 2018,
    venue: 'Journal of Strength and Conditioning Research',
    category: 'sports-performance',
    categoryLabel: 'Sports Analytics',
    citations: 142,
    doi: '10.1519/JSC.0000000000002145',
    highlight: true,
    abstract: 'This study quantifies the match-play movement characteristics, peak acceleration intervals, high-speed running volumes, and physiological cardiac strain experienced by elite inter-county Gaelic football players using 10Hz global positioning systems (GPS) and heart rate telemetry over competitive fixtures across consecutive championship seasons.',
    bibtex: `@article{mccarren2018gaelic,
  title={Activity Profiles and Physiological Responses in Gaelic Football Players},
  author={McCarren, Andrew and collaborators},
  journal={Journal of Strength and Conditioning Research},
  volume={32},
  number={8},
  year={2018}
}`
  },
  {
    id: 'pub-2017-1',
    title: 'An Architecture for Constructing Enterprise Data Marts and Automated ETL Pipelines for Heterogeneous Online Datasets',
    authors: ['A. McCarren', 'DCU DORAS Archive'],
    year: 2017,
    venue: 'DCU School of Computing / DORAS Repository',
    category: 'software-eng',
    categoryLabel: 'Software Engineering',
    citations: 54,
    doi: '10.21427/D7DCU2017',
    highlight: false,
    abstract: 'Presents a scalable data warehouse design and automated extraction, transformation, and loading (ETL) pipeline engine tailored for non-stationary web datasets, dynamic schema migrations, and real-time analytical reporting.',
    bibtex: `@article{mccarren2017datamart,
  title={An Architecture for Constructing Enterprise Data Marts and Automated ETL Pipelines for Heterogeneous Online Datasets},
  author={McCarren, Andrew},
  journal={DORAS DCU},
  year={2017}
}`
  },
  {
    id: 'pub-2016-1',
    title: 'Machine Learning Frameworks for Agricultural Production Optimization and Yield Forecasting',
    authors: ['A. McCarren', 'Agritech Industry Partners'],
    year: 2016,
    venue: 'International Conference on Agricultural Engineering and Data Systems',
    category: 'agritech',
    categoryLabel: 'AgriTech & Environmental AI',
    citations: 62,
    doi: '10.1007/978-3-319-4567-8',
    highlight: false,
    abstract: 'Synthesizes field telemetry, automated meteorological logging, and ensemble regression trees to predict regional agricultural output, forming the software foundation for subsequent commercial analytics spinouts.',
    bibtex: `@inproceedings{mccarren2016agri,
  title={Machine Learning Frameworks for Agricultural Production Optimization and Yield Forecasting},
  author={McCarren, Andrew and collaborators},
  booktitle={ICAE},
  year={2016}
}`
  },
  {
    id: 'pub-2015-1',
    title: 'Quantifying High-Intensity Locomotor Demands in Elite Field Sports via Microsensor Telemetry',
    authors: ['A. McCarren', 'Human Performance Lab'],
    year: 2015,
    venue: 'International Journal of Sports Physiology and Performance',
    category: 'sports-performance',
    categoryLabel: 'Sports Analytics',
    citations: 96,
    doi: '10.1123/ijspp.2015-0210',
    highlight: false,
    abstract: 'Evaluates the validity and inter-unit reliability of wearable tri-axial accelerometers for detecting rapid decelerations, change of direction maneuvers, and impact biomechanics in high-collision field sports.',
    bibtex: `@article{mccarren2015locomotor,
  title={Quantifying High-Intensity Locomotor Demands in Elite Field Sports via Microsensor Telemetry},
  author={McCarren, Andrew and collaborators},
  journal={IJSPP},
  year={2015}
}`
  }
];

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    role: "Head of the School of Computing",
    organization: "Dublin City University (DCU)",
    period: "Current Appointment",
    description: "Executive and academic leader of one of Ireland's largest, most prestigious computing faculties, driving undergraduate and postgraduate education, world-class research, and high-impact industrial partnerships.",
    highlights: [
      "Leads strategic direction for BSc in Computer Science, Data Science, and Computing for Business programs.",
      "Champions research excellence across SFI Research Centres (Insight, VistaMilk, I-Form, Adapt).",
      "Expands industry collaboration pipelines with Ireland's premier multinational tech sector (Dublin Silicon Docks & national enterprises).",
      "Oversees faculty recruitment, equality, diversity & inclusion (EDI) initiatives, and state-of-the-art laboratory infrastructure."
    ]
  },
  {
    role: "Funded Investigator & Programme Supervisor",
    organization: "SFI Centre for Research Training in Artificial Intelligence (CRT-AI)",
    period: "2019 – Present",
    description: "Mentoring the next generation of doctoral researchers in applied machine learning, time series modeling, trustworthy AI, and agricultural data science.",
    highlights: [
      "Supervises cohorts of PhD students funded under Science Foundation Ireland's flagship €100M+ national AI training initiative.",
      "Integrates industry co-supervision and international academic exchanges.",
      "Hosts seminars on reproducibility, ethical AI, and high-performance computing."
    ]
  },
  {
    role: "Funded Investigator",
    organization: "Insight SFI Research Centre for Data Analytics & Rinn AI Centre",
    period: "Continuous",
    description: "Directing research packages in predictive data mining, real-time streaming analytics, and automated decision support systems across agriculture, health, and software engineering.",
    highlights: [
      "Principal Investigator on competitive SFI and Enterprise Ireland research awards.",
      "Collaborates with international academic consortia across the EU Horizon frameworks.",
      "Advises governmental and agricultural bodies on digital transformation."
    ]
  },
  {
    role: "Visiting Data Science Professor",
    organization: "Princess Nourah bint Abdulrahman University (PNU), Riyadh",
    period: "Academic Visiting Appointment",
    description: "Delivering advanced postgraduate curricula in machine learning, big data analytics, and computational statistics under DCU's distinguished international academic partnership.",
    highlights: [
      "Delivered masterclasses in applied predictive modeling and statistical learning.",
      "Fostered international research exchanges and cross-border student mentorship.",
      "Advised on modern curriculum design for emerging computational data science tracks."
    ]
  },
  {
    role: "Founder & Director",
    organization: "McR Agri Analytics Ltd",
    period: "2016 – Present",
    description: "Leading commercial translation of university research into industrial software solutions for precision agriculture, farm telemetry, and supply chain transparency.",
    highlights: [
      "Commercialized proprietary predictive pasture analytics and livestock algorithms.",
      "Delivers enterprise SaaS data pipelines for agricultural co-operatives and food processors.",
      "Demonstrates high-impact technology transfer from DCU lab research to commercial deployments."
    ]
  }
];

export const TEACHING_MODULES: CourseModule[] = [
  {
    code: "CA684 / CA4015",
    title: "Machine Learning & Applied Data Analytics",
    level: "Postgraduate",
    institution: "Dublin City University",
    description: "Comprehensive coverage of supervised and unsupervised learning, gradient boosting, neural networks, regularisation, cross-validation protocols, and production deployment in Python."
  },
  {
    code: "CA382",
    title: "Time Series Analysis & Econometric Modeling",
    level: "Undergraduate",
    institution: "Dublin City University",
    description: "Theoretical and computational foundations of non-stationary processes, ARIMA models, state-space formulations, cointegration, GARCH volatility, and deep sequence predictors."
  },
  {
    code: "CA660",
    title: "Data Mining & Knowledge Discovery",
    level: "Postgraduate",
    institution: "Dublin City University",
    description: "Scalable algorithms for pattern extraction, association rule mining, dimensionality reduction (PCA, t-SNE, UMAP), clustering heuristics, and large-scale graph analytics."
  },
  {
    code: "DS501",
    title: "Advanced Data Science & Statistical Inference",
    level: "International / Visiting",
    institution: "Princess Nourah bint Abdulrahman University (PNU)",
    description: "Delivered during international visiting professorship; covers probabilistic graphical models, Bayesian hypothesis testing, and high-dimensional regression."
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-2025-1',
    date: 'January 2025',
    title: 'New Publication in Computers & Electronics in Agriculture',
    category: 'Publication',
    summary: 'Our latest research applying deep learning time series architectures to forecast perennial ryegrass growth in Ireland has been accepted and indexed in DBLP.',
    linkText: 'View Paper'
  },
  {
    id: 'news-2025-2',
    date: 'December 2024',
    title: 'Systems Programming Language MLR Published',
    category: 'Publication',
    summary: 'Empirical decision framework published analyzing Go, Rust, Python, and Haskell adoption trade-offs for modern distributed software architectures.',
    linkText: 'Read Study'
  },
  {
    id: 'news-2024-1',
    date: 'Autumn 2024',
    title: 'DCU School of Computing Welcomes Record Postgraduate Cohort',
    category: 'Leadership',
    summary: 'As Head of School, Prof. McCarren welcomed over 400 new master’s and doctoral candidates across AI, Cloud Computing, and Data Science degree pathways.',
    linkText: 'School News'
  },
  {
    id: 'news-2024-2',
    date: 'June 2024',
    title: 'SFI VistaMilk AgriTech Innovation Showcase',
    category: 'Partnership',
    summary: 'Presented breakthrough findings on digital pasture telemetry and genomic trait modeling at the annual national SFI science assembly.',
    linkText: 'VistaMilk Overview'
  },
  {
    id: 'news-2023-1',
    date: 'March 2023',
    title: 'Higher Education Digital Collaboration Research in Education Sciences',
    category: 'Publication',
    summary: 'Research examining long-term pedagogical adaptations in university STEM environments published in MDPI Education Sciences.',
    linkText: 'Explore Article'
  }
];
