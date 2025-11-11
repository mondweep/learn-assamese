# Build Learn Assamese Prototype - Task for Agentic-Flow

## Project: Learn Assamese MVP Prototype

### Overview
Build a Next.js 14 web application for learning Assamese language, targeting diaspora communities. Think Duolingo-style but for Assamese.

### Technology Stack
- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **AI Integration:** Sarvam AI (translation + text-to-speech for Assamese)
- **Fonts:** Noto Sans Assamese from Google Fonts
- **Deployment:** Vercel-ready

### Project Structure
```
learn-assamese-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts
│   │   ├── page.tsx                # Landing page
│   │   ├── learn/
│   │   │   ├── page.tsx           # Lesson library
│   │   │   └── [lessonId]/
│   │   │       └── page.tsx       # Individual lesson
│   │   ├── demo/
│   │   │   └── page.tsx           # Sarvam AI demo
│   │   └── about/
│   │       └── page.tsx           # About page
│   ├── components/
│   │   ├── Hero.tsx               # Landing hero
│   │   ├── Navigation.tsx         # Nav bar
│   │   ├── LessonCard.tsx         # Lesson preview
│   │   ├── LessonPlayer.tsx       # Main lesson UI
│   │   ├── Exercise.tsx           # Interactive quiz
│   │   ├── AudioPlayer.tsx        # TTS player
│   │   ├── TranslationDemo.tsx    # AI translation
│   │   └── ProgressBar.tsx        # Progress UI
│   ├── lib/
│   │   ├── sarvam.ts              # Sarvam AI client
│   │   ├── lessons.ts             # Lesson data
│   │   └── types.ts               # TypeScript types
│   └── styles/
│       └── globals.css            # Global styles
├── public/
│   └── images/                     # Assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

### Core Features to Implement

#### 1. Landing Page (app/page.tsx)
- Hero section with compelling headline: "Reconnect with Your Assamese Roots"
- Problem statement: Diaspora cultural disconnect
- Solution: AI-powered learning platform
- CTA button: "Start Learning Free"
- Showcase: Display Assamese script beautifully
- Mission: Cultural preservation message

#### 2. Lesson Library (app/learn/page.tsx)
- Grid of 5 lesson cards
- Each card shows: Title (English + Assamese), icon, completion status
- Click to start lesson
- Progress indicator

#### 3. Lesson Player (app/learn/[lessonId]/page.tsx)
**Components:**
- Vocabulary section: Display Assamese script, romanization, English
- Audio button: Play pronunciation (integrate Sarvam TTS)
- Cultural note: Context about usage
- Exercise section: Multiple choice questions
- Feedback: Correct/incorrect with explanation
- Navigation: Previous/Next lesson

#### 4. Sarvam AI Demo (app/demo/page.tsx)
- Input field: Enter English or Assamese text
- Translate button: Call Sarvam API for translation
- Audio button: Play translated text with TTS
- Display: Both original and translated text
- Explanation: "Powered by Sarvam.ai - India's Sovereign AI"

#### 5. About Page (app/about/page.tsx)
- Project mission and story
- Technology used (Sarvam AI highlight)
- Call for beta testers
- Contact information

### Required Components

#### Navigation.tsx
```typescript
- Logo: "Learn Assamese" with Assamese script
- Links: Home, Learn, Demo, About
- Mobile responsive (hamburger menu)
- Sticky header
```

#### LessonCard.tsx
```typescript
interface LessonCardProps {
  lesson: {
    id: string;
    title: string;
    titleAssamese: string;
    description: string;
    completed: boolean;
  }
}
- Display lesson info
- Show completion checkmark if completed
- Click to navigate to lesson
```

#### LessonPlayer.tsx
```typescript
- Display vocabulary items with Assamese script (large, readable)
- Romanization below (smaller, gray)
- English translation
- Audio play button
- Cultural context box (highlighted)
- Exercise section at bottom
```

#### Exercise.tsx
```typescript
interface ExerciseProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onComplete: (correct: boolean) => void;
}
- Multiple choice UI
- Click to select answer
- Show correct/incorrect feedback
- Display explanation
- Next button after completion
```

#### AudioPlayer.tsx
```typescript
interface AudioPlayerProps {
  text: string;          // Assamese text to speak
  language: 'as';        // Language code
}
- Play button icon
- Call Sarvam TTS API
- Play audio
- Loading state
- Error handling
```

### Sample Data - 5 Lessons

#### Lesson 1: Greetings (অভিবাদন)
**Vocabulary:**
1. নমস্কাৰ (Namaskar) - Hello
2. আপুনি কেনে আছে? (Apuni kene ase?) - How are you?
3. ভাল আছোঁ (Bhal asu) - I am fine
4. শুভ পুৱা (Xubh puwa) - Good morning
5. শুভ ৰাত্ৰি (Xubh ratri) - Good night

**Cultural Note:** "Namaskar is a respectful greeting in Assamese culture, often accompanied by joining palms together. It's used across all age groups and social contexts."

**Exercises:**
1. How do you say 'Hello'? Options: [নমস্কাৰ, ধন্যবাদ, ভাল আছোঁ, শুভ পুৱা] Correct: নমস্কাৰ
2. What does 'শুভ পুৱা' mean? Options: [Good morning, Good night, How are you, Thank you] Correct: Good morning
3. Translate 'How are you?': Options: [আপুনি কেনে আছে?, নমস্কাৰ, ভাল আছোঁ, শুভ ৰাত্ৰি] Correct: আপুনি কেনে আছে?

#### Lesson 2: Common Phrases (সাধাৰণ বাক্য)
**Vocabulary:**
1. ধন্যবাদ (Dhonnobad) - Thank you
2. ক্ষমা কৰক (Khyama korok) - Sorry / Excuse me
3. অনুগ্ৰহ কৰি (Onugroho kori) - Please
4. হয় (Hoi) - Yes
5. নহয় (Nohoi) - No

**Cultural Note:** "Assamese people value politeness. Using 'অনুগ্ৰহ কৰি' (please) shows respect, especially when speaking to elders."

**Exercises:**
1. How do you say 'Thank you'? Options: [ধন্যবাদ, ক্ষমা কৰক, হয়, নহয়] Correct: ধন্যবাদ
2. What does 'ক্ষমা কৰক' mean? Options: [Sorry, Thank you, Please, Yes] Correct: Sorry
3. Translate 'Please': Options: [অনুগ্ৰহ কৰি, ধন্যবাদ, হয়, নহয়] Correct: অনুগ্ৰহ কৰি

#### Lesson 3: Numbers (সংখ্যা)
**Vocabulary:**
1. এক (Ek) - One / 1
2. দুই (Dui) - Two / 2
3. তিনি (Tini) - Three / 3
4. চাৰি (Sari) - Four / 4
5. পাঁচ (Pas) - Five / 5
6. ছয় (Soy) - Six / 6
7. সাত (Xat) - Seven / 7
8. আঠ (Ath) - Eight / 8
9. ন (No) - Nine / 9
10. দহ (Doh) - Ten / 10

**Cultural Note:** "Counting in Assamese is essential for daily activities like shopping at local markets. Numbers are used in their native form rather than English numerals in traditional settings."

**Exercises:**
1. What is 'তিনি'? Options: [Three, Two, Four, Five] Correct: Three
2. How do you say 'Seven'? Options: [সাত, ছয়, আঠ, ন] Correct: সাত
3. What number is 'দহ'? Options: [Ten, Nine, Eight, Seven] Correct: Ten

#### Lesson 4: Family (পৰিয়াল)
**Vocabulary:**
1. মা (Ma) - Mother
2. দেউতা (Deuta) - Father
3. ভনী (Bhoni) - Sister (younger)
4. ভাই (Bhai) - Brother
5. আই (Aai) - Grandmother
6. আইতা (Aita) - Grandfather

**Cultural Note:** "Family is central to Assamese culture. Respectful terms are used for elders, and family gatherings during festivals like Bihu are important traditions."

**Exercises:**
1. How do you say 'Mother'? Options: [মা, দেউতা, ভনী, ভাই] Correct: মা
2. What does 'ভাই' mean? Options: [Brother, Sister, Father, Mother] Correct: Brother
3. Translate 'Grandmother': Options: [আই, আইতা, মা, ভনী] Correct: আই

#### Lesson 5: Basic Verbs (ক্ৰিয়া)
**Vocabulary:**
1. যা (Ja) - Go
2. আহ (Ah) - Come
3. খা (Kha) - Eat
4. খেল (Khel) - Play
5. শুনা (Xuna) - Listen / Hear

**Cultural Note:** "Assamese verbs are conjugated based on respect level. The verbs shown here are informal commands, used with friends and younger people."

**Exercises:**
1. What does 'যা' mean? Options: [Go, Come, Eat, Play] Correct: Go
2. How do you say 'Eat'? Options: [খা, যা, আহ, খেল] Correct: খা
3. Translate 'Play': Options: [খেল, খা, যা, শুনা] Correct: খেল

### Sarvam AI Integration (lib/sarvam.ts)

```typescript
// Sarvam AI API Client
export class SarvamClient {
  private apiKey: string;
  private baseUrl: string = 'https://api.sarvam.ai/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // Translate text between English and Assamese
  async translate(text: string, targetLang: 'as' | 'en'): Promise<string> {
    const response = await fetch(`${this.baseUrl}/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        text,
        source_language: targetLang === 'as' ? 'en' : 'as',
        target_language: targetLang
      })
    });
    const data = await response.json();
    return data.translated_text;
  }

  // Convert text to speech (Assamese)
  async textToSpeech(text: string): Promise<string> {
    // Returns audio URL or base64
    const response = await fetch(`${this.baseUrl}/text-to-speech`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        text,
        language: 'as',
        voice: 'female' // or 'male'
      })
    });
    const data = await response.json();
    return data.audio_url;
  }
}

// Usage example
export const sarvamClient = new SarvamClient(
  process.env.NEXT_PUBLIC_SARVAM_API_KEY || ''
);
```

**Note:** For development without Sarvam API key, create mock functions that return placeholder data.

### Styling Guidelines

#### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'assamese-primary': '#FF6B35',
        'assamese-secondary': '#004E89',
        'assamese-success': '#00C853',
        'assamese-bg': '#F7F9FC'
      },
      fontFamily: {
        'assamese': ['"Noto Sans Assamese"', 'sans-serif']
      }
    }
  }
}
```

#### Google Fonts (layout.tsx)
```typescript
import { Noto_Sans_Assamese, Inter } from 'next/font/google';

const notoAssamese = Noto_Sans_Assamese({ subsets: ['assamese'] });
const inter = Inter({ subsets: ['latin'] });
```

#### Global Styles (globals.css)
```css
.assamese-text {
  font-family: 'Noto Sans Assamese', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: #2D3748;
}

.romanization {
  font-family: monospace;
  font-size: 0.875rem;
  color: #718096;
}

.lesson-card {
  @apply bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer;
}

.exercise-option {
  @apply border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:border-assamese-primary transition-colors;
}

.exercise-option-correct {
  @apply border-assamese-success bg-green-50;
}

.exercise-option-incorrect {
  @apply border-red-500 bg-red-50;
}
```

### Key Implementation Notes

1. **Type Safety:** Use TypeScript interfaces for all data structures
2. **Responsive Design:** Mobile-first approach, test on small screens
3. **Loading States:** Show spinners for API calls
4. **Error Handling:** Graceful fallbacks if Sarvam API fails
5. **Accessibility:** Proper ARIA labels, keyboard navigation
6. **Performance:** Lazy load components, optimize images
7. **SEO:** Proper meta tags in layout.tsx

### Environment Variables (.env.local)
```
NEXT_PUBLIC_SARVAM_API_KEY=your-sarvam-api-key-here
```

### Package Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.0.0",
    "lucide-react": "^0.300.0"  // For icons
  }
}
```

### Success Criteria
✅ 5 complete lessons with real Assamese content
✅ Lesson player with vocabulary display and exercises
✅ Sarvam AI integration prepared (mock if no API key)
✅ Audio player component ready
✅ Translation demo page
✅ Responsive design (mobile + desktop)
✅ Clean, modern UI with Assamese cultural colors
✅ TypeScript throughout
✅ Ready to deploy to Vercel

### Development Priority
1. **High Priority:** Lesson player, vocabulary display, exercise system
2. **Medium Priority:** Translation demo, audio player
3. **Nice to Have:** Progress tracking, animations

Build this as an impressive, demo-ready prototype that showcases the potential of an AI-powered Assamese learning platform!
