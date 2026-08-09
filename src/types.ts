export interface ResearchPaper {
  id: string;
  title: string;
  subtitle: string;
  abstract: string;
  category: string;
  date: string;
  image: string;
  citation: string;
  keyTakeaways: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
  featured?: boolean;
}

export interface Discipline {
  id: string;
  icon: string;
  title: string;
  description: string;
  deepDive: string;
  keyFocusPoints: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  episodeNumber: number;
  duration: string;
  date: string;
  summary: string;
  audioUrl?: string;
  topics: string[];
}

export interface BookingDetails {
  serviceType: string;
  date: string;
  timeSlot: string;
  name: string;
  email: string;
  company?: string;
  notes?: string;
}
