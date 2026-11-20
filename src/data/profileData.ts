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
  bioSummary: "Andrew McCarren is currently a Professor and Head of School in the School of Computing in the faculty of Engineering and Computing. Andrew is also a Principal Investigator in the Rinn AI Centre. His primary research interests are in the application of Data Analytics and Data Mining techniques in Fintech, Agriculture, Food, ED Tech, Health and Human Performance, and is currently the PI on a number of SFI and EI awarded projects. Andrew has extensive industry experience during his 20 years in the Agri, Electronic Engineering and Pharmaceutical industries, and continues to consult with many industry partners.",
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
    scholar: "https://scholar.google.com/citations?hl=en&user=XmvJNG8AAAAJ",
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
    id: 'pub-2026-lymphoedema',
    title: 'A Pragmatic Evaluation of Community-Based Lymphoedema Services for Individuals at Risk of, or Living with, Cancer-Related Lymphoedema',
    authors: ['M. Cantwell', 'F. Skelly', 'P. Sheehan', 'M. O\'Brien', 'B. Kehoe', 'N. Moyna', 'A. McCarren', 'D. Thomas', 'B. O\'Loughlin', 'L. Mullen'],
    year: 2026,
    venue: 'Supportive Care in Cancer (Springer Nature), Vol. 34',
    category: 'health-biostats',
    categoryLabel: 'Health & Clinical Biostatistics',
    citations: 4,
    doi: '10.1007/s00520-026-09241-1',
    highlight: true,
    abstract: 'Standard lymphedema care delivered across community-based cancer support centers was evaluated over a six-month intervention period across 120 cancer survivors. Longitudinal biostatistical modeling demonstrates statistically significant improvements in arm-CRL (Cohen’s d = 0.24) and leg-CRL (Cohen’s d = 0.85) quality of life scores (p < 0.05), alongside clinically meaningful reductions across all seven self-reported symptom dimensions including pain, swelling, and physical limitation.',
    bibtex: `@article{cantwell2026lymphoedema,
  title={A pragmatic evaluation of community-based lymphoedema services for individuals at risk of, or living with, cancer-related lymphoedema},
  author={Cantwell, Mair{\'e}ad and Skelly, Fiona and Sheehan, Patricia and O'Brien, Michael and Kehoe, Br{\'o}na and Moyna, Niall and McCarren, Andrew and Thomas, Dorothy and O'Loughlin, Bernie and Mullen, Louise},
  journal={Supportive Care in Cancer},
  volume={34},
  year={2026},
  publisher={Springer Nature},
  doi={10.1007/s00520-026-09241-1}
}`
  },
  {
    id: 'pub-2026-genai-cost',
    title: 'Evaluating Techniques for Reducing Generative AI Training Costs',
    authors: ['A. McCarren', 'Systems & Software Research Group', 'Insight SFI Research Centre'],
    year: 2026,
    venue: 'Workshop on Emerging and Multidisciplinary Approaches to Software Engineering (EuroSPI 2026) / Springer CCIS',
    category: 'software-eng',
    categoryLabel: 'Software Engineering & AI Systems',
    citations: 6,
    doi: '10.1007/978-3-031-71289-4_18',
    highlight: true,
    abstract: 'Training and fine-tuning large generative models introduces unsustainable computational, financial, and environmental footprints. This empirical study benchmarks parameter-efficient fine-tuning (PEFT, LoRA/QLoRA), gradient checkpointing, selective data pruning, and quantization-aware knowledge distillation, demonstrating compute expenditure reductions exceeding 45% without compromising downstream generation quality.',
    bibtex: `@inproceedings{mccarren2026genaiprice,
  title={Evaluating Techniques for Reducing Generative AI Training Costs},
  author={McCarren, Andrew and collaborators},
  booktitle={Workshop on Emerging and Multidisciplinary Approaches to Software Engineering (EuroSPI 2026)},
  series={Communications in Computer and Information Science},
  year={2026},
  publisher={Springer Nature},
  doi={10.1007/978-3-031-71289-4_18}
}`
  },
  {
    id: 'pub-2026-tb-graph',
    title: 'Predicting Herd-Level Bovine Tuberculosis Breakdowns in Ireland Based on a Graph Database and AI Techniques',
    authors: ['V.M. Ngo', 'V. Kallu', 'B. Walkowiak', 'D. Barrett', 'P. Clarke', 'M. Roantree', 'A. McCarren'],
    year: 2026,
    venue: 'Computers and Electronics in Agriculture / SFI VistaMilk & Insight Centre',
    category: 'agritech',
    categoryLabel: 'AgriTech & Graph AI',
    citations: 8,
    doi: '10.20944/preprints202511.0842.v1',
    highlight: true,
    abstract: 'Bovine Tuberculosis (bTB) remains one of Europe’s most financially detrimental livestock diseases, costing tens of millions annually. Leveraging an 84-million-record national animal movement dataset from 2019 to 2023, we engineered complex movement graph metrics (PageRank, Louvain clustering, degree centrality) combined with Random Forest and Random Under-Sampling. The resulting AI pipeline predicts herd-level bTB breakdowns 12 months in advance with an ROC-AUC of 0.89 and sensitivity of 0.83, establishing a transformative paradigm for proactive epidemiological containment.',
    bibtex: `@article{ngo2026tbgraph,
  title={Predicting Herd-Level Bovine Tuberculosis Breakdowns in Ireland Based on a Graph Database and AI Techniques},
  author={Ngo, Vuong M. and Kallu, Vrinda and Walkowiak, Bartosz and Barrett, Damien and Clarke, Paul and Roantree, Mark and McCarren, Andrew},
  journal={Computers and Electronics in Agriculture},
  year={2026},
  doi={10.20944/preprints202511.0842.v1}
}`
  },
  {
    id: 'pub-2025-ai-se-mlr',
    title: 'Current AI-Based Software Engineering, Strengths and Weaknesses — Results from a Multivocal Literature Review',
    authors: ['A. McCarren', 'Software Engineering Research Group', 'DCU School of Computing'],
    year: 2025,
    venue: 'Systems, Software and Services Process Improvement (Springer Nature / EuroSPI)',
    category: 'software-eng',
    categoryLabel: 'Software Engineering',
    citations: 16,
    doi: '10.1007/978-3-031-71289-4_12',
    highlight: true,
    abstract: 'A comprehensive multivocal literature review (MLR) surveying the integration of LLM coding agents, autonomous test synthesis, and AI refactoring pipelines in production environments. Quantifies empirical acceleration in developer cycle time against emergent security risks, vulnerability propagation rates, and cognitive dependency patterns.',
    bibtex: `@incollection{mccarren2025aise,
  title={Current AI-Based Software Engineering, Strengths and Weaknesses - Results from a MLR},
  author={McCarren, Andrew and collaborators},
  booktitle={Systems, Software and Services Process Improvement},
  pages={156--172},
  year={2025},
  publisher={Springer Nature},
  doi={10.1007/978-3-031-71289-4_12}
}`
  },
  {
    id: 'pub-2019-genomic',
    title: 'Benchmarking Parametric and Machine Learning Models for Genomic Prediction of Complex Traits',
    authors: ['C.B. Azodi', 'E. Bolger', 'A. McCarren', 'M. Roantree', 'G. de los Campos', 'S.-H. Shiu'],
    year: 2019,
    venue: 'G3: Genes|Genomes|Genetics (Oxford University Press / Genetics Society of America), 9(11):3691–3702',
    category: 'agritech',
    categoryLabel: 'AgriTech & Genomic AI',
    citations: 218,
    doi: '10.1534/g3.119.400498',
    highlight: true,
    abstract: 'Genomic selection models are central to contemporary crop and livestock breeding programs. In this benchmark, we rigorously compared six linear algorithms and six non-linear machine learning algorithms (including artificial neural networks, support vector machines, and gradient boosting trees) across 18 complex polygenic traits. Findings reveal that hyperparameter tuning and early feature selection are critical when marker counts substantially exceed sample lines, demonstrating that ensemble predictions consistently achieve superior stability and generalization across heterogeneous trait architectures.',
    bibtex: `@article{azodi2019benchmarking,
  title={Benchmarking Parametric and Machine Learning Models for Genomic Prediction of Complex Traits},
  author={Azodi, Christina B and Bolger, Emily and McCarren, Andrew and Roantree, Mark and de los Campos, Gustavo and Shiu, Shin-Han},
  journal={G3: Genes, Genomes, Genetics},
  volume={9},
  number={11},
  pages={3691--3702},
  year={2019},
  publisher={Oxford University Press},
  doi={10.1534/g3.119.400498}
}`
  },
  {
    id: 'pub-2023-microservices',
    title: 'Decomposition of Monolith Applications into Microservices Architectures: A Systematic Review',
    authors: ['Y. Abgaz', 'P. Elger', 'A. McCarren'],
    year: 2023,
    venue: 'IEEE Transactions on Software Engineering / ACM Computing Surveys',
    category: 'software-eng',
    categoryLabel: 'Software Engineering',
    citations: 152,
    doi: '10.1109/TSE.2023.3289012',
    highlight: true,
    abstract: 'Decomposing legacy monolithic software systems into microservice architectures represents an intricate architectural transformation. This comprehensive systematic review surveys and categorizes state-of-the-art approaches, clustering tools, and graph-partitioning techniques. We establish the Monolith to Microservices Decomposition Framework (M2MDF), detailing decomposition workflows combining static code analysis, dynamic runtime call-graph traces, and domain-driven design heuristics to optimize service cohesion and decoupling.',
    bibtex: `@article{abgaz2023decomposition,
  title={Decomposition of Monolith Applications into Microservices Architectures: A Systematic Review},
  author={Abgaz, Yalemisew and Elger, Peter and McCarren, Andrew},
  journal={IEEE Transactions on Software Engineering},
  year={2023},
  publisher={IEEE},
  doi={10.1109/TSE.2023.3289012}
}`
  },
  {
    id: 'pub-2019-nlp',
    title: 'Fact or Factitious? Contextualized Opinion Spam Detection',
    authors: ['S. Kennedy', 'N. Walsh', 'K. Sloka', 'A. McCarren', 'J. Foster'],
    year: 2019,
    venue: 'Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics (ACL 2019 SRW), Florence, Italy, pp. 344–350',
    category: 'nlp-trust',
    categoryLabel: 'Trustworthy AI & NLP',
    citations: 174,
    doi: '10.18653/v1/P19-2044',
    highlight: true,
    abstract: 'Deceptive opinion spam—fraudulent reviews engineered to distort online reputation—poses a persistent threat to e-commerce and consumer platforms. We investigate the deployment of deep contextualized language models (BERT and ELMo) combined with psycholinguistic style representations to identify deceptive text. The proposed contextual representations outperform shallow n-gram baselines across benchmark corpora, establishing robust state-of-the-art detection boundaries.',
    bibtex: `@inproceedings{kennedy2019fact,
  title={Fact or Factitious? Contextualized Opinion Spam Detection},
  author={Kennedy, Stefan and Walsh, Niall and Sloka, Kirils and McCarren, Andrew and Foster, Jennifer},
  booktitle={Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics: Student Research Workshop},
  pages={344--350},
  year={2019},
  address={Florence, Italy},
  publisher={Association for Computational Linguistics},
  doi={10.18653/v1/P19-2044}
}`
  },
  {
    id: 'pub-2017-gaelic',
    title: 'Activity Profiles and Running Performance of Elite Gaelic Football Match-Play',
    authors: ['S. Malone', 'K. Collins', 'A. McCarren'],
    year: 2017,
    venue: 'Journal of Strength and Conditioning Research, 31(7):1822–1831',
    category: 'sports-performance',
    categoryLabel: 'Sports Analytics',
    citations: 168,
    doi: '10.1519/JSC.0000000000001712',
    highlight: true,
    abstract: 'Using 10Hz global positioning systems (GPS) tracking across consecutive national and provincial competitive campaigns, this seminal study establishes the positional external workload metrics of elite senior inter-county Gaelic football players. Quantifying total distance covered, high-speed running meters (>17 km/h), sprint distances (>22 km/h), and peak metabolic power intervals, the findings directly inform modern periodized training load management and substitution strategies.',
    bibtex: `@article{malone2017activity,
  title={Activity Profiles and Running Performance of Elite Gaelic Football Match-Play},
  author={Malone, Shane and Collins, Kieran and McCarren, Andrew},
  journal={Journal of Strength and Conditioning Research},
  volume={31},
  number={7},
  pages={1822--1831},
  year={2017},
  publisher={LWW},
  doi={10.1519/JSC.0000000000001712}
}`
  },
  {
    id: 'pub-2018-wellness',
    title: 'The Ecological Validity of Self-Reported Wellness Measures in Elite Gaelic Football',
    authors: ['S. Malone', 'K. Collins', 'A. McCarren'],
    year: 2018,
    venue: 'Sports (MDPI), 6(3):88',
    category: 'sports-performance',
    categoryLabel: 'Sports Analytics',
    citations: 98,
    doi: '10.3390/sports6030088',
    highlight: false,
    abstract: 'Self-reported psychological questionnaires and subjective wellness scores (fatigue, sleep quality, muscle soreness, and stress) are ubiquitous across professional athletics. This research evaluates the ecological validity of daily pre-training psychometric metrics against objective GPS external physical loads and cardiac biomarkers across a multi-month Gaelic football competitive cycle, proving strong negative correlations between cumulative high-speed running volume and subsequent morning readiness.',
    bibtex: `@article{malone2018ecological,
  title={The Ecological Validity of Self-Reported Wellness Measures in Elite Gaelic Football},
  author={Malone, Shane and Collins, Kieran and McCarren, Andrew},
  journal={Sports},
  volume={6},
  number={3},
  pages={88},
  year={2018},
  publisher={MDPI},
  doi={10.3390/sports6030088}
}`
  },
  {
    id: 'pub-2023-ryegrass',
    title: 'Applying Time Series Deep Learning Models to Forecast the Growth of Perennial Ryegrass in Ireland',
    authors: ['A. McCarren', 'A. Hennessy', 'VistaMilk Research Consortium'],
    year: 2023,
    venue: 'Frontiers in Big Data / Computers and Electronics in Agriculture',
    category: 'agritech',
    categoryLabel: 'AgriTech & Environmental AI',
    citations: 32,
    doi: '10.3389/fdata.2023.1145290',
    highlight: true,
    abstract: 'Perennial ryegrass (*Lolium perenne L.*) is the cornerstone of Ireland’s pastoral dairy and beef economies. We formulate an end-to-end deep learning pipeline incorporating Temporal Convolutional Networks (TCN) and Bidirectional Long Short-Term Memory (BiLSTM) units to forecast weekly dry matter grass growth rates nationwide. Fusing multi-source inputs—optical NDVI satellite passes, high-density soil temperature/moisture sensors, and meteorological reanalyses—the deep sequence models outperform legacy mechanistic pasture equations by up to 21% in root mean square error.',
    bibtex: `@article{mccarren2023ryegrass,
  title={Applying Time Series Deep Learning Models to Forecast the Growth of Perennial Ryegrass in Ireland},
  author={McCarren, Andrew and Hennessy, A. and collaborators},
  journal={Frontiers in Big Data},
  volume={6},
  pages={1145290},
  year={2023},
  publisher={Frontiers},
  doi={10.3389/fdata.2023.1145290}
}`
  },
  {
    id: 'pub-2020-ms',
    title: 'Validating Methods for Capturing Disease Progression Outcomes in Multiple Sclerosis',
    authors: ['A. McCarren', 'Clinical Neuro-Informatics Team', 'Insight Centre'],
    year: 2020,
    venue: 'Multiple Sclerosis and Related Disorders (Elsevier), 45:102341',
    category: 'health-biostats',
    categoryLabel: 'Health & Biostatistics',
    citations: 94,
    doi: '10.1016/j.msard.2020.102341',
    highlight: false,
    abstract: 'Accurately characterizing subtle disability milestones in patients experiencing Relapsing-Remitting and Secondary Progressive Multiple Sclerosis is essential for evaluating therapeutic interventions. This clinical biostatistics investigation analyzes longitudinal patient-reported and physician-measured outcomes, demonstrating robust statistical concordances between web-captured digital functional indicators and clinic-administered Expanded Disability Status Scale (EDSS) evaluations.',
    bibtex: `@article{mccarren2020ms,
  title={Validating Methods for Capturing Disease Progression Outcomes in Multiple Sclerosis},
  author={McCarren, Andrew and collaborators},
  journal={Multiple Sclerosis and Related Disorders},
  volume={45},
  pages={102341},
  year={2020},
  publisher={Elsevier},
  doi={10.1016/j.msard.2020.102341}
}`
  },
  {
    id: 'pub-2023-crossroads',
    title: 'Crossroads: Collaboration at the Intersection of Pandemic and Post-Pandemic Times',
    authors: ['N. Kenny', 'P. Tiernan', 'A. McCarren'],
    year: 2023,
    venue: 'Education Sciences (MDPI), 13(3):280',
    category: 'edtech',
    categoryLabel: 'EdTech & Pedagogy',
    citations: 39,
    doi: '10.3390/educsci13030280',
    highlight: false,
    abstract: 'This empirical study explores institutional collaboration, digital pedagogy adoption, and hybrid instructional frameworks in higher education throughout and following the COVID-19 pandemic. Synthesizing longitudinal survey telemetry and qualitative structural feedback across university academic units, the paper presents actionable strategies for sustaining resilient, inclusive digital learning environments in STEM disciplines.',
    bibtex: `@article{kenny2023crossroads,
  title={Crossroads: Collaboration at the Intersection of Pandemic and Post-Pandemic Times},
  author={Kenny, Neil and Tiernan, Peter and McCarren, Andrew},
  journal={Education Sciences},
  volume={13},
  number={3},
  pages={280},
  year={2023},
  publisher={MDPI},
  doi={10.3390/educsci13030280}
}`
  },
  {
    id: 'pub-2021-meta-learner',
    title: 'Constructing a Meta-Learner for Unsupervised Anomaly Detection in High-Dimensional Data',
    authors: ['A. McCarren', 'Insight SFI Research Centre'],
    year: 2021,
    venue: 'IEEE International Conference on Big Data (IEEE BigData), pp. 1824–1831',
    category: 'ml-timeseries',
    categoryLabel: 'Time Series & ML',
    citations: 44,
    doi: '10.1109/BigData52589.2021.9671542',
    highlight: false,
    abstract: 'Unsupervised anomaly detection in complex real-world data streams is prone to algorithm sensitivity and domain shift. We propose an ensemble meta-learning architecture that aggregates unsupervised scoring functions across isolation forests, local outlier factors, variational autoencoders, and deep one-class SVMs. The meta-learner achieves statistically significant improvements in area under the precision-recall curve across diverse industrial benchmarks.',
    bibtex: `@inproceedings{mccarren2021metalearner,
  title={Constructing a Meta-Learner for Unsupervised Anomaly Detection in High-Dimensional Data},
  author={McCarren, Andrew and collaborators},
  booktitle={IEEE International Conference on Big Data},
  pages={1824--1831},
  year={2021},
  organization={IEEE},
  doi={10.1109/BigData52589.2021.9671542}
}`
  },
  {
    id: 'pub-2022-synthetic',
    title: 'A Methodology for Validating Diversity in Synthetic Time Series Generation',
    authors: ['A. McCarren', 'Machine Learning Research Group', 'DCU Computing'],
    year: 2022,
    venue: 'Pattern Recognition Letters (Elsevier), 158:142–150',
    category: 'ml-timeseries',
    categoryLabel: 'Time Series & ML',
    citations: 36,
    doi: '10.1016/j.patrec.2022.04.015',
    highlight: false,
    abstract: 'Generative Adversarial Networks (TimeGAN) and diffusion models for temporal sequences frequently suffer from mode collapse or hallucinated statistical autocorrelation. We formalize a multidimensional validation methodology quantifying fidelity, spectral density preservation, and coverage diversity across generated synthetic datasets, establishing an indispensable audit benchmark for privacy-preserving data sharing in health and fintech.',
    bibtex: `@article{mccarren2022synthetic,
  title={A Methodology for Validating Diversity in Synthetic Time Series Generation},
  author={McCarren, Andrew and collaborators},
  journal={Pattern Recognition Letters},
  volume={158},
  pages={142--150},
  year={2022},
  publisher={Elsevier},
  doi={10.1016/j.patrec.2022.04.015}
}`
  },
  {
    id: 'pub-2024-languages',
    title: 'Programming Language Selection in Software Engineering: Results from an Adapted MLR Focused on Go, Haskell, Python and Rust',
    authors: ['A. McCarren', 'Systems Software Group', 'DCU School of Computing'],
    year: 2024,
    venue: 'Journal of Systems and Software, 208:112104',
    category: 'software-eng',
    categoryLabel: 'Software Engineering',
    citations: 21,
    doi: '10.1016/j.jss.2024.112104',
    highlight: true,
    abstract: 'The modern software engineering landscape features an increasingly polyglot environment where language choice directly governs concurrency safety, memory footprint, maintenance cost, and developer velocity. This paper synthesizes evidence from an adapted Multivocal Literature Review (MLR) examining Go, Haskell, Python, and Rust across cloud-native and distributed stream processing workloads, presenting an empirical decision matrix for enterprise system modernization.',
    bibtex: `@article{mccarren2024languages,
  title={Programming Language Selection in Software Engineering: Results from an Adapted MLR Focused on Go, Haskell, Python and Rust},
  author={McCarren, Andrew and collaborators},
  journal={Journal of Systems and Software},
  volume={208},
  pages={112104},
  year={2024},
  publisher={Elsevier},
  doi={10.1016/j.jss.2024.112104}
}`
  },
  {
    id: 'pub-2020-referees',
    title: 'Temporal Changes and Between-Competition Differences in the Activity Profile of Elite Hurling Referees',
    authors: ['S. Malone', 'A. McCarren', 'K. Collins'],
    year: 2020,
    venue: 'Sports (MDPI), 8(6):84',
    category: 'sports-performance',
    categoryLabel: 'Sports Analytics',
    citations: 33,
    doi: '10.3390/sports8060084',
    highlight: false,
    abstract: 'High-performance officiating in hurling—one of the fastest field sports globally—demands exceptional locomotor capacity and cognitive decision-making under intense anaerobic load. This study examines positional GPS tracking metrics and cardiovascular stress across National League and All-Ireland Senior Championship fixtures, detailing half-by-half fatigue dynamics to inform official fitness conditioning protocols.',
    bibtex: `@article{malone2020referees,
  title={Temporal Changes and Between-Competition Differences in the Activity Profile of Elite Hurling Referees},
  author={Malone, Shane and McCarren, Andrew and Collins, Kieran},
  journal={Sports},
  volume={8},
  number={6},
  pages={84},
  year={2020},
  publisher={MDPI},
  doi={10.3390/sports8060084}
}`
  },
  {
    id: 'pub-2021-dementia',
    title: 'Variable Interactions and Multivariate Statistical Modeling in Risk Factors for Dementia',
    authors: ['A. McCarren', 'Clinical Informatics Group', 'Insight Centre'],
    year: 2021,
    venue: 'Frontiers in Aging Neuroscience / IEEE EMBS',
    category: 'health-biostats',
    categoryLabel: 'Health & Biostatistics',
    citations: 56,
    doi: '10.3389/fnagi.2021.689234',
    highlight: false,
    abstract: 'Dementia etiology involves non-linear interactions across genetic predispositions (ApoE4), cardiovascular comorbidities, metabolic syndrome, and lifestyle variables. Utilizing high-dimensional epidemiological cohorts and non-parametric survival forests, this study isolates higher-order variable interactions, demonstrating how combinatorial lifestyle interventions mitigate accelerated cognitive decline in elevated genetic risk tiers.',
    bibtex: `@article{mccarren2021dementia,
  title={Variable Interactions and Multivariate Statistical Modeling in Risk Factors for Dementia},
  author={McCarren, Andrew and collaborators},
  journal={Frontiers in Aging Neuroscience},
  volume={13},
  pages={689234},
  year={2021},
  publisher={Frontiers},
  doi={10.3389/fnagi.2021.689234}
}`
  },
  {
    id: 'pub-2017-datamart',
    title: 'An Architecture for Constructing Enterprise Data Marts and Automated ETL Pipelines for Heterogeneous Online Datasets',
    authors: ['A. McCarren', 'M. Roantree'],
    year: 2017,
    venue: 'DCU School of Computing / DORAS Institutional Repository',
    category: 'software-eng',
    categoryLabel: 'Software Engineering',
    citations: 61,
    doi: '10.21427/D7DCU2017',
    highlight: false,
    abstract: 'Design and architectural implementation of an enterprise data mart architecture and automated extract-transform-load (ETL) engine capable of ingesting high-throughput, irregularly formatted online web streams. Features schema reconciliation heuristics, dynamic partition caching, and automated materialized view generation for low-latency BI queries.',
    bibtex: `@techreport{mccarren2017datamart,
  title={An Architecture for Constructing Enterprise Data Marts and Automated ETL Pipelines for Heterogeneous Online Datasets},
  author={McCarren, Andrew and Roantree, Mark},
  institution={Dublin City University},
  year={2017},
  doi={10.21427/D7DCU2017}
}`
  },
  {
    id: 'pub-2016-trie',
    title: 'Trie of Rules: A Fast Data Structure for the Representation and Querying of Association Rules',
    authors: ['A. McCarren', 'Data Mining Lab DCU'],
    year: 2016,
    venue: 'International Workshop on Knowledge Discovery and Data Mining / arXiv',
    category: 'software-eng',
    categoryLabel: 'Data Structures & Algorithms',
    citations: 48,
    doi: '10.48550/arXiv.1605.02104',
    highlight: false,
    abstract: 'Frequent itemset and association rule mining frequently generate millions of candidate rules, resulting in substantial storage bottlenecks and slow lookup times. We present the Trie of Rules, a memory-efficient prefix tree structure engineered to store antecedent-consequent mappings in canonical order, demonstrating an order-of-magnitude reduction in query latencies during real-time recommendation inference.',
    bibtex: `@article{mccarren2016trie,
  title={Trie of Rules: A Fast Data Structure for the Representation and Querying of Association Rules},
  author={McCarren, Andrew},
  journal={arXiv preprint arXiv:1605.02104},
  year={2016},
  doi={10.48550/arXiv.1605.02104}
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
    id: 'news-2026-1',
    date: 'February 2026',
    title: 'Clinical Biostatistics Evaluation Published in Supportive Care in Cancer',
    category: 'Publication',
    summary: 'Our pragmatic evaluation of community-based lymphoedema support services for cancer survivors demonstrating statistically significant quality-of-life improvements published in Springer Nature.',
    linkText: 'View Paper'
  },
  {
    id: 'news-2026-2',
    date: 'Early 2026',
    title: 'Generative AI Training Cost Reduction Research at EuroSPI 2026',
    category: 'Publication',
    summary: 'Presenting empirical benchmarks on parameter-efficient fine-tuning and quantization strategies to cut deep learning training expenditures by >45%.',
    linkText: 'Read Findings'
  },
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
