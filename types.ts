
export interface Verse {
  reference: string;
  text: string;
}

export interface Announcement {
  id: number;
  title: string;
  content: string;
}

export interface ChurchEvent {
  id: number;
  date: string;
  time: string;
  title: string;
  description: string;
}

export interface Note {
  id: number;
  content: string;
  createdAt: string;
}

export interface ChatMessage {
  id: number;
  username: string;
  text: string;
  timestamp: string;
}
