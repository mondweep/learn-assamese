# Learn Assamese - Prototype Specification

**Goal:** Build a functional MVP prototype to showcase for feedback from diaspora community

**Timeline:** 1-2 days of focused development

**Tech Stack:** Next.js 14 + TypeScript + Tailwind CSS + Sarvam AI

---

## 🎯 Core Features for Prototype

### 1. Landing Page
**Purpose:** Explain the mission and value proposition

**Elements:**
- Hero section with compelling headline
- Problem statement (diaspora cultural disconnect)
- Solution (AI-powered learning)
- Call-to-action (Start Learning)
- Visual: Assamese script showcase

### 2. Lesson Interface (5 Sample Lessons)
**Purpose:** Demonstrate the learning experience

**Lessons to Include:**
1. Greetings (নমস্কাৰ - Namaskar)
2. Common Phrases (Thank you, Please, Sorry)
3. Numbers 1-10
4. Family Members
5. Basic Verbs (Go, Come, Eat, Drink)

**Lesson Components:**
- Assamese script display
- Romanization (pronunciation guide)
- English translation
- Audio playback (Sarvam AI TTS)
- Interactive exercise (multiple choice)
- Visual aids (icons/images)

### 3. Sarvam AI Integration
**Purpose:** Showcase AI-powered features

**Features:**
- Text-to-Speech: Play Assamese audio
- Translation: Bidirectional English ↔ Assamese
- Demo button: "Try AI Translation"

### 4. Progress Tracking (Basic)
**Purpose:** Show gamification potential

**Elements:**
- Lesson completion status
- Simple point system
- Progress bar
- Next lesson unlock

### 5. Cultural Context
**Purpose:** Differentiate from generic language apps

**Elements:**
- Cultural notes for each lesson
- Assamese cultural images
- Context about when/how to use phrases

---

## 📐 Technical Architecture

### Frontend (Next.js 14 App Router)
```
app/
├── page.tsx                    # Landing page
├── learn/
│   ├── page.tsx               # Lesson library
│   └── [lessonId]/
│       └── page.tsx           # Individual lesson
├── demo/
│   └── page.tsx               # Sarvam AI demo
└── about/
    └── page.tsx               # About the project

components/
├── Hero.tsx                    # Landing hero section
├── LessonCard.tsx             # Lesson preview card
├── LessonPlayer.tsx           # Main lesson interface
├── Exercise.tsx               # Interactive exercises
├── AudioPlayer.tsx            # Sarvam AI TTS player
├── TranslationDemo.tsx        # AI translation showcase
├── ProgressBar.tsx            # Progress tracking
└── Navigation.tsx             # Site navigation

lib/
├── sarvam.ts                  # Sarvam AI client wrapper
├── lessons.ts                 # Lesson data
└── types.ts                   # TypeScript types

styles/
└── globals.css                # Tailwind + custom styles
```

### Sarvam AI Integration
```typescript
// lib/sarvam.ts
export class SarvamClient {
  async translate(text: string, targetLang: 'as' | 'en'): Promise<string>
  async textToSpeech(text: string, lang: 'as'): Promise<AudioBuffer>
}
```

### Data Structure
```typescript
// lib/types.ts
interface Lesson {
  id: string;
  title: string;
  titleAssamese: string;
  description: string;
  culturalNote: string;
  vocabulary: VocabularyItem[];
  exercises: Exercise[];
}

interface VocabularyItem {
  assamese: string;
  romanization: string;
  english: string;
  audioUrl?: string;
  exampleSentence?: string;
  culturalContext?: string;
}

interface Exercise {
  id: string;
  type: 'multiple-choice' | 'translation' | 'listening';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}
```

---

## 🎨 Design Principles

### Visual Style
- **Modern & Clean**: Inspired by Duolingo's clarity
- **Cultural Elements**: Assamese motifs and colors
- **Mobile-First**: Responsive design
- **Accessibility**: High contrast, readable fonts

### Color Palette
```css
/* Based on Assamese cultural colors */
--primary: #FF6B35;      /* Vibrant orange (bihu colors)*/
--secondary: #004E89;    /* Deep blue (traditional) */
--success: #00C853;      /* Green for correct answers */
--background: #F7F9FC;   /* Light, clean background */
--text: #1A202C;         /* Dark text */
--assamese: #2D3748;     /* Assamese script color */
```

### Typography
- **Headings**: Inter (modern, clean)
- **Body**: System fonts (performance)
- **Assamese**: Noto Sans Assamese (Google Fonts)
- **Romanization**: Monospace (clear pronunciation)

---

## 🚀 Development Plan with Agentic-Flow

### Phase 1: Project Setup (30 mins)
```bash
# Use agentic-flow coder agent
npx agentic-flow agent run coder \
  --task "Create Next.js 14 app with TypeScript, Tailwind CSS, and app router.
  Set up project structure for Learn Assamese language learning platform."
```

**Deliverables:**
- Next.js project initialized
- Tailwind configured
- Folder structure created
- Basic layout component

### Phase 2: Sarvam AI Integration (1 hour)
```bash
# Use agentic-flow backend-dev agent
npx agentic-flow agent run backend-dev \
  --task "Create Sarvam AI API client wrapper with TypeScript.
  Implement translation (English ↔ Assamese) and text-to-speech functions.
  Add error handling and type safety. Use SARVAM_API_KEY from environment."
```

**Deliverables:**
- `lib/sarvam.ts` with API client
- Type definitions
- Error handling
- Example usage

### Phase 3: Lesson Data & Components (1.5 hours)
```bash
# Use agentic-flow coder agent
npx agentic-flow agent run coder \
  --task "Create 5 Assamese lessons with vocabulary, exercises, and cultural notes.
  Build LessonCard, LessonPlayer, Exercise, and AudioPlayer components.
  Integrate Sarvam AI for audio playback."
```

**Deliverables:**
- 5 complete lessons with Assamese content
- Interactive lesson player
- Exercise system (multiple choice)
- Audio integration

### Phase 4: Landing & Navigation (1 hour)
```bash
# Use agentic-flow coder agent
npx agentic-flow agent run coder \
  --task "Create compelling landing page for Learn Assamese.
  Include hero section, problem/solution, CTA, and Assamese script showcase.
  Add navigation and lesson library page."
```

**Deliverables:**
- Landing page
- Navigation component
- Lesson library view
- About page

### Phase 5: Sarvam AI Demo Page (45 mins)
```bash
# Use agentic-flow coder agent
npx agentic-flow agent run coder \
  --task "Create interactive Sarvam AI demo page.
  Allow users to input text and translate English ↔ Assamese,
  and play audio using text-to-speech. Show API capabilities."
```

**Deliverables:**
- Translation demo
- TTS demo
- Interactive UI

### Phase 6: Progress & Gamification (45 mins)
```bash
# Use agentic-flow coder agent
npx agentic-flow agent run coder \
  --task "Add basic progress tracking and gamification.
  Track lesson completion, show progress bars,
  simple point system, and next lesson unlock."
```

**Deliverables:**
- Progress tracking
- Points system
- Completion status
- Visual feedback

### Phase 7: Testing & Polish (1 hour)
```bash
# Use agentic-flow tester agent
npx agentic-flow agent run tester \
  --task "Test all components, Sarvam AI integration,
  lesson navigation, and user interactions.
  Check mobile responsiveness and accessibility."

# Use agentic-flow reviewer agent
npx agentic-flow agent run reviewer \
  --task "Review code quality, performance,
  and user experience. Suggest improvements."
```

**Deliverables:**
- Bug fixes
- Performance optimizations
- Code review feedback
- Final polish

---

## 📋 Sample Lesson Data

### Lesson 1: Greetings

```json
{
  "id": "lesson-01",
  "title": "Greetings",
  "titleAssamese": "অভিবাদন (Ôbhibadon)",
  "description": "Learn how to greet people in Assamese",
  "culturalNote": "In Assamese culture, 'Namaskar' (নমস্কাৰ) is used for respectful greetings, similar to 'Namaste' in Hindi. It's accompanied by joining palms together.",
  "vocabulary": [
    {
      "assamese": "নমস্কাৰ",
      "romanization": "Namaskar",
      "english": "Hello / Greetings",
      "exampleSentence": "নমস্কাৰ, আপুনি কেনে আছে?",
      "culturalContext": "Most common respectful greeting"
    },
    {
      "assamese": "আপুনি কেনে আছে?",
      "romanization": "Apuni kene ase?",
      "english": "How are you?",
      "exampleSentence": "নমস্কাৰ, আপুনি কেনে আছে?",
      "culturalContext": "Formal way to ask someone's well-being"
    },
    {
      "assamese": "ভাল আছোঁ",
      "romanization": "Bhal asu",
      "english": "I am fine",
      "exampleSentence": "মই ভাল আছোঁ, ধন্যবাদ।"
    },
    {
      "assamese": "শুভ পুৱা",
      "romanization": "Xubh puwa",
      "english": "Good morning",
      "culturalContext": "Used until noon"
    },
    {
      "assamese": "শুভ ৰাত্ৰি",
      "romanization": "Xubh ratri",
      "english": "Good night"
    }
  ],
  "exercises": [
    {
      "id": "ex-01-01",
      "type": "multiple-choice",
      "question": "How do you say 'Hello' in Assamese?",
      "options": ["নমস্কাৰ", "ধন্যবাদ", "ভাল আছোঁ", "শুভ পুৱা"],
      "correctAnswer": "নমস্কাৰ",
      "explanation": "নমস্কাৰ (Namaskar) is the most common greeting in Assamese."
    },
    {
      "id": "ex-01-02",
      "type": "translation",
      "question": "Translate: 'How are you?'",
      "options": ["আপুনি কেনে আছে?", "নমস্কাৰ", "ভাল আছোঁ", "শুভ ৰাত্ৰি"],
      "correctAnswer": "আপুনি কেনে আছে?"
    },
    {
      "id": "ex-01-03",
      "type": "multiple-choice",
      "question": "What does 'শুভ পুৱা' mean?",
      "options": ["Good morning", "Good night", "How are you?", "Thank you"],
      "correctAnswer": "Good morning"
    }
  ]
}
```

---

## 🎥 Prototype Demo Flow

**For Showcase/Feedback:**

1. **Landing Page** (15 seconds)
   - Show mission statement
   - Highlight problem (diaspora disconnect)
   - Click "Start Learning"

2. **Lesson Library** (10 seconds)
   - Display 5 lessons
   - Show cultural imagery
   - Click Lesson 1

3. **Lesson Experience** (90 seconds)
   - Display Assamese script prominently
   - Show romanization
   - Click audio to hear pronunciation (Sarvam AI)
   - Complete 1-2 exercises
   - Show correct answer feedback
   - Display cultural note

4. **Sarvam AI Demo** (45 seconds)
   - Type English text → Translate to Assamese
   - Type Assamese text → Translate to English
   - Click audio to hear Sarvam TTS
   - Explain: "This is powered by Sarvam.ai, India's Sovereign AI"

5. **Progress View** (20 seconds)
   - Show lesson completion
   - Display points earned
   - Show next lesson unlocked

**Total Demo Time:** ~3 minutes

**Key Message:** "This is just the beginning. With your feedback, we can build the Duolingo for Assamese that our community deserves."

---

## ✅ Success Criteria for Prototype

**Must Have:**
- ✅ 5 complete lessons with real Assamese content
- ✅ Sarvam AI translation working (English ↔ Assamese)
- ✅ Sarvam AI text-to-speech working (play Assamese audio)
- ✅ Interactive exercises (at least multiple choice)
- ✅ Mobile responsive design
- ✅ Cultural context displayed
- ✅ Clean, modern UI

**Nice to Have:**
- 🎯 Progress tracking with points
- 🎯 Smooth animations
- 🎯 Cultural images/illustrations
- 🎯 About page with project story

**Demo-Ready:**
- ✅ Deployed to Vercel (live URL)
- ✅ No critical bugs
- ✅ Fast loading (<3 seconds)
- ✅ Works on mobile browsers

---

## 🚨 Key Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Sarvam API issues | High | Test API first, have fallback audio files |
| Assamese font rendering | Medium | Use Google Fonts (Noto Sans Assamese) |
| Complex features delaying demo | High | Stick to MVP scope, no feature creep |
| Translation quality concerns | Medium | Validate with Assamese speaker before demo |
| Performance issues | Medium | Optimize images, lazy load components |

---

## 📊 Feedback Collection Plan

**During Showcase:**
1. Screen record the demo
2. Take notes on reactions
3. Ask specific questions:
   - Is the learning experience intuitive?
   - Would you use this to learn Assamese?
   - What's missing?
   - Would you pay for premium features?
   - What cultural content matters most?

**After Showcase:**
1. Send follow-up survey (5-7 questions)
2. Schedule 3-5 deeper interviews
3. Collect email addresses for beta testing
4. Gauge willingness to pay

---

## 🎯 Next Steps After Prototype

**If feedback is positive (70%+ interested):**
1. Expand to 20-30 lessons
2. Add speech recognition (Sarvam AI)
3. Implement proper authentication
4. Build lesson creator tool
5. Start beta testing phase

**If feedback needs iteration:**
1. Identify top 3 issues
2. Use research-swarm for solutions
3. Iterate on prototype
4. Re-demo with improvements

---

## 💡 Development Tips

1. **Start with Sarvam AI testing** - Validate API before building UI
2. **Use agentic-flow agents strategically** - Right agent for right task
3. **Keep it simple** - MVP means Minimum Viable Product
4. **Focus on the "wow" moment** - Hearing Assamese from AI
5. **Cultural authenticity** - Validate content with native speakers
6. **Document decisions** - Use research-swarm for tough choices

---

## 🔗 Resources

- **Sarvam AI Docs:** https://docs.sarvam.ai/
- **Agentic-Flow Docs:** https://github.com/ruvnet/agentic-flow
- **Next.js 14 Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Noto Sans Assamese:** https://fonts.google.com/noto/specimen/Noto+Sans+Assamese

---

**Let's build this! 🚀**
