// TypeScript type definitions for Learn Assamese app

export interface VocabularyItem {
  assamese: string;
  romanization: string;
  english: string;
  exampleSentence?: string;
  culturalContext?: string;
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'translation' | 'listening';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface Lesson {
  id: string;
  title: string;
  titleAssamese: string;
  description: string;
  culturalNote: string;
  vocabulary: VocabularyItem[];
  exercises: Exercise[];
  completed?: boolean;
}

export interface UserProgress {
  completedLessons: string[];
  currentLesson: string;
  points: number;
  streak: number;
}
