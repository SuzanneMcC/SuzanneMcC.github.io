export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  category: 'agritech' | 'ml-ai' | 'ml-timeseries' | 'software-eng' | 'sports-performance' | 'health-biostats' | 'nlp-trust' | 'edtech';
  categoryLabel: string;
  citations?: number;
  doi?: string;
  url?: string;
  abstract: string;
  bibtex: string;
  highlight?: boolean;
}

export interface ResearchTheme {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  fundingPartners: string[];
  keyTopics: string[];
  impactMetric: string;
  recentPaperRef: string;
}

export interface LeadershipRole {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: 'Publication' | 'Grant' | 'Leadership' | 'Keynote' | 'Partnership';
  summary: string;
  linkText?: string;
  linkUrl?: string;
}

export interface CourseModule {
  code: string;
  title: string;
  level: 'Undergraduate' | 'Postgraduate' | 'International / Visiting';
  institution: string;
  description: string;
}
