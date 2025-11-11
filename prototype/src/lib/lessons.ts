// Lesson data for Learn Assamese prototype
import { Lesson } from './types';

export const lessons: Lesson[] = [
  {
    id: 'lesson-01',
    title: 'Greetings',
    titleAssamese: 'অভিবাদন (Ôbhibadon)',
    description: 'Learn how to greet people in Assamese',
    culturalNote: 'In Assamese culture, "Namaskar" (নমস্কাৰ) is used for respectful greetings, similar to "Namaste" in Hindi. It\'s accompanied by joining palms together and is used across all age groups and social contexts.',
    vocabulary: [
      {
        assamese: 'নমস্কাৰ',
        romanization: 'Namaskar',
        english: 'Hello / Greetings',
        exampleSentence: 'নমস্কাৰ, আপুনি কেনে আছে?',
        culturalContext: 'Most common respectful greeting'
      },
      {
        assamese: 'আপুনি কেনে আছে?',
        romanization: 'Apuni kene ase?',
        english: 'How are you?',
        exampleSentence: 'নমস্কাৰ, আপুনি কেনে আছে?',
        culturalContext: 'Formal way to ask someone\'s well-being'
      },
      {
        assamese: 'ভাল আছোঁ',
        romanization: 'Bhal asu',
        english: 'I am fine',
        exampleSentence: 'মই ভাল আছোঁ, ধন্যবাদ।'
      },
      {
        assamese: 'শুভ পুৱা',
        romanization: 'Xubh puwa',
        english: 'Good morning',
        culturalContext: 'Used until noon'
      },
      {
        assamese: 'শুভ ৰাত্ৰি',
        romanization: 'Xubh ratri',
        english: 'Good night'
      }
    ],
    exercises: [
      {
        id: 'ex-01-01',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Assamese?',
        options: ['নমস্কাৰ', 'ধন্যবাদ', 'ভাল আছোঁ', 'শুভ পুৱা'],
        correctAnswer: 'নমস্কাৰ',
        explanation: 'নমস্কাৰ (Namaskar) is the most common greeting in Assamese.'
      },
      {
        id: 'ex-01-02',
        type: 'multiple-choice',
        question: 'What does "শুভ পুৱা" mean?',
        options: ['Good morning', 'Good night', 'How are you?', 'Thank you'],
        correctAnswer: 'Good morning',
        explanation: 'শুভ পুৱা (Xubh puwa) means "Good morning" and is used until noon.'
      },
      {
        id: 'ex-01-03',
        type: 'translation',
        question: 'Translate: "How are you?"',
        options: ['আপুনি কেনে আছে?', 'নমস্কাৰ', 'ভাল আছোঁ', 'শুভ ৰাত্ৰি'],
        correctAnswer: 'আপুনি কেনে আছে?',
        explanation: 'আপুনি কেনে আছে? (Apuni kene ase?) is the formal way to ask "How are you?"'
      }
    ]
  },
  {
    id: 'lesson-02',
    title: 'Common Phrases',
    titleAssamese: 'সাধাৰণ বাক্য (Sadharon Bakyo)',
    description: 'Essential phrases for daily conversation',
    culturalNote: 'Assamese people value politeness. Using "অনুগ্ৰহ কৰি" (please) shows respect, especially when speaking to elders. These phrases are fundamental to polite conversation.',
    vocabulary: [
      {
        assamese: 'ধন্যবাদ',
        romanization: 'Dhonnobad',
        english: 'Thank you',
        exampleSentence: 'আপোনাক বহুত ধন্যবাদ।',
        culturalContext: 'Essential expression of gratitude'
      },
      {
        assamese: 'ক্ষমা কৰক',
        romanization: 'Khyama korok',
        english: 'Sorry / Excuse me',
        exampleSentence: 'ক্ষমা কৰক, মই দেৰি কৰিলোঁ।'
      },
      {
        assamese: 'অনুগ্ৰহ কৰি',
        romanization: 'Onugroho kori',
        english: 'Please',
        culturalContext: 'Shows respect, especially to elders'
      },
      {
        assamese: 'হয়',
        romanization: 'Hoi',
        english: 'Yes'
      },
      {
        assamese: 'নহয়',
        romanization: 'Nohoi',
        english: 'No'
      }
    ],
    exercises: [
      {
        id: 'ex-02-01',
        type: 'multiple-choice',
        question: 'How do you say "Thank you"?',
        options: ['ধন্যবাদ', 'ক্ষমা কৰক', 'হয়', 'নহয়'],
        correctAnswer: 'ধন্যবাদ',
        explanation: 'ধন্যবাদ (Dhonnobad) means "Thank you".'
      },
      {
        id: 'ex-02-02',
        type: 'multiple-choice',
        question: 'What does "ক্ষমা কৰক" mean?',
        options: ['Sorry / Excuse me', 'Thank you', 'Please', 'Yes'],
        correctAnswer: 'Sorry / Excuse me',
        explanation: 'ক্ষমা কৰক (Khyama korok) is used to say "Sorry" or "Excuse me".'
      },
      {
        id: 'ex-02-03',
        type: 'translation',
        question: 'Translate: "Please"',
        options: ['অনুগ্ৰহ কৰি', 'ধন্যবাদ', 'হয়', 'নহয়'],
        correctAnswer: 'অনুগ্ৰহ কৰি',
        explanation: 'অনুগ্ৰহ কৰি (Onugroho kori) means "Please" and shows respect.'
      }
    ]
  },
  {
    id: 'lesson-03',
    title: 'Numbers',
    titleAssamese: 'সংখ্যা (Sonkhya)',
    description: 'Learn to count from 1 to 10 in Assamese',
    culturalNote: 'Counting in Assamese is essential for daily activities like shopping at local markets. Numbers are used in their native form rather than English numerals in traditional settings.',
    vocabulary: [
      {
        assamese: 'এক',
        romanization: 'Ek',
        english: 'One (1)'
      },
      {
        assamese: 'দুই',
        romanization: 'Dui',
        english: 'Two (2)'
      },
      {
        assamese: 'তিনি',
        romanization: 'Tini',
        english: 'Three (3)'
      },
      {
        assamese: 'চাৰি',
        romanization: 'Sari',
        english: 'Four (4)'
      },
      {
        assamese: 'পাঁচ',
        romanization: 'Pas',
        english: 'Five (5)'
      },
      {
        assamese: 'ছয়',
        romanization: 'Soy',
        english: 'Six (6)'
      },
      {
        assamese: 'সাত',
        romanization: 'Xat',
        english: 'Seven (7)'
      },
      {
        assamese: 'আঠ',
        romanization: 'Ath',
        english: 'Eight (8)'
      },
      {
        assamese: 'ন',
        romanization: 'No',
        english: 'Nine (9)'
      },
      {
        assamese: 'দহ',
        romanization: 'Doh',
        english: 'Ten (10)'
      }
    ],
    exercises: [
      {
        id: 'ex-03-01',
        type: 'multiple-choice',
        question: 'What is "তিনি"?',
        options: ['Three', 'Two', 'Four', 'Five'],
        correctAnswer: 'Three',
        explanation: 'তিনি (Tini) means "Three".'
      },
      {
        id: 'ex-03-02',
        type: 'multiple-choice',
        question: 'How do you say "Seven"?',
        options: ['সাত', 'ছয়', 'আঠ', 'ন'],
        correctAnswer: 'সাত',
        explanation: 'সাত (Xat) means "Seven".'
      },
      {
        id: 'ex-03-03',
        type: 'multiple-choice',
        question: 'What number is "দহ"?',
        options: ['Ten', 'Nine', 'Eight', 'Seven'],
        correctAnswer: 'Ten',
        explanation: 'দহ (Doh) means "Ten".'
      }
    ]
  },
  {
    id: 'lesson-04',
    title: 'Family',
    titleAssamese: 'পৰিয়াল (Poriyal)',
    description: 'Learn words for family members',
    culturalNote: 'Family is central to Assamese culture. Respectful terms are used for elders, and family gatherings during festivals like Bihu are important traditions. Extended family relationships are highly valued.',
    vocabulary: [
      {
        assamese: 'মা',
        romanization: 'Ma',
        english: 'Mother',
        culturalContext: 'Most endearing term for mother'
      },
      {
        assamese: 'দেউতা',
        romanization: 'Deuta',
        english: 'Father'
      },
      {
        assamese: 'ভনী',
        romanization: 'Bhoni',
        english: 'Sister (younger)',
        culturalContext: 'Different terms exist for younger/older siblings'
      },
      {
        assamese: 'ভাই',
        romanization: 'Bhai',
        english: 'Brother'
      },
      {
        assamese: 'আই',
        romanization: 'Aai',
        english: 'Grandmother'
      },
      {
        assamese: 'আইতা',
        romanization: 'Aita',
        english: 'Grandfather'
      }
    ],
    exercises: [
      {
        id: 'ex-04-01',
        type: 'multiple-choice',
        question: 'How do you say "Mother"?',
        options: ['মা', 'দেউতা', 'ভনী', 'ভাই'],
        correctAnswer: 'মা',
        explanation: 'মা (Ma) means "Mother".'
      },
      {
        id: 'ex-04-02',
        type: 'multiple-choice',
        question: 'What does "ভাই" mean?',
        options: ['Brother', 'Sister', 'Father', 'Mother'],
        correctAnswer: 'Brother',
        explanation: 'ভাই (Bhai) means "Brother".'
      },
      {
        id: 'ex-04-03',
        type: 'translation',
        question: 'Translate: "Grandmother"',
        options: ['আই', 'আইতা', 'মা', 'ভনী'],
        correctAnswer: 'আই',
        explanation: 'আই (Aai) means "Grandmother".'
      }
    ]
  },
  {
    id: 'lesson-05',
    title: 'Basic Verbs',
    titleAssamese: 'ক্ৰিয়া (Kriya)',
    description: 'Essential action words',
    culturalNote: 'Assamese verbs are conjugated based on respect level. The verbs shown here are informal commands, used with friends and younger people. Different forms are used when speaking to elders.',
    vocabulary: [
      {
        assamese: 'যা',
        romanization: 'Ja',
        english: 'Go',
        exampleSentence: 'তুমি ঘৰলৈ যা।'
      },
      {
        assamese: 'আহ',
        romanization: 'Ah',
        english: 'Come',
        exampleSentence: 'ইয়ালৈ আহ।'
      },
      {
        assamese: 'খা',
        romanization: 'Kha',
        english: 'Eat',
        exampleSentence: 'ভাত খা।'
      },
      {
        assamese: 'খেল',
        romanization: 'Khel',
        english: 'Play',
        exampleSentence: 'বাহিৰত খেল।'
      },
      {
        assamese: 'শুনা',
        romanization: 'Xuna',
        english: 'Listen / Hear',
        culturalContext: 'Used for both listening and hearing'
      }
    ],
    exercises: [
      {
        id: 'ex-05-01',
        type: 'multiple-choice',
        question: 'What does "যা" mean?',
        options: ['Go', 'Come', 'Eat', 'Play'],
        correctAnswer: 'Go',
        explanation: 'যা (Ja) means "Go".'
      },
      {
        id: 'ex-05-02',
        type: 'multiple-choice',
        question: 'How do you say "Eat"?',
        options: ['খা', 'যা', 'আহ', 'খেল'],
        correctAnswer: 'খা',
        explanation: 'খা (Kha) means "Eat".'
      },
      {
        id: 'ex-05-03',
        type: 'translation',
        question: 'Translate: "Play"',
        options: ['খেল', 'খা', 'যা', 'শুনা'],
        correctAnswer: 'খেল',
        explanation: 'খেল (Khel) means "Play".'
      }
    ]
  }
];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find(lesson => lesson.id === id);
}

export function getAllLessons(): Lesson[] {
  return lessons;
}
