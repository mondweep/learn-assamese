# Learn Assamese - Prototype

AI-powered language learning platform for Assamese diaspora communities. This is an MVP prototype showcasing the core features.

## 🎯 Features

- ✅ **5 Complete Lessons** - Greetings, Common Phrases, Numbers, Family, Basic Verbs
- ✅ **Interactive Exercises** - Multiple choice questions with immediate feedback
- ✅ **Sarvam AI Integration** - Translation and Text-to-Speech for Assamese
- ✅ **Cultural Context** - Each lesson includes cultural notes
- ✅ **Modern UI** - Beautiful, responsive design with Assamese script
- ✅ **AI Demo** - Try translation between English and Assamese

## 🚀 Quick Start

### Prerequisites
- Node.js >= 16.0.0
- npm >= 7.0.0

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Sarvam AI Setup (Optional)

The prototype works in **demo mode** without an API key. To activate real AI features:

1. Sign up at https://www.sarvam.ai/
2. Get your API key
3. Create `.env.local` file:
```bash
NEXT_PUBLIC_SARVAM_API_KEY=your_api_key_here
SARVAM_AP_API_KEY=your_api_key_here
```

## 📁 Project Structure

```
prototype/
├── src/
│   ├── app/                 # Next.js 14 App Router pages
│   │   ├── page.tsx        # Landing page
│   │   ├── learn/          # Lesson library & individual lessons
│   │   ├── demo/           # AI translation demo
│   │   └── about/          # About page
│   ├── components/          # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── LessonCard.tsx
│   │   ├── LessonPlayer.tsx
│   │   ├── Exercise.tsx
│   │   ├── AudioPlayer.tsx
│   │   └── TranslationDemo.tsx
│   └── lib/                 # Business logic & data
│       ├── types.ts         # TypeScript interfaces
│       ├── lessons.ts       # 5 Assamese lessons
│       └── sarvam.ts        # Sarvam AI client
├── public/                  # Static assets
└── package.json
```

## 🎓 Lessons Included

1. **Greetings** (অভিবাদন) - Hello, How are you?, Good morning, etc.
2. **Common Phrases** (সাধাৰণ বাক্য) - Thank you, Please, Sorry, Yes, No
3. **Numbers** (সংখ্যা) - Count from 1 to 10 in Assamese
4. **Family** (পৰিয়াল) - Mother, Father, Sister, Brother, etc.
5. **Basic Verbs** (ক্ৰিয়া) - Go, Come, Eat, Play, Listen

Each lesson includes:
- Vocabulary with Assamese script, romanization, and English
- Cultural context notes
- Example sentences
- Interactive exercises
- Audio playback (TTS)

## 🛠️ Technology Stack

- **Frontend:** Next.js 14, React, TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Noto Sans Assamese (Google Fonts)
- **AI:** Sarvam.ai (Translation, TTS)
- **Icons:** lucide-react

## 🌟 Key Components

### LessonPlayer
Main interface for learning vocabulary and completing exercises. Shows Assamese script prominently with romanization and cultural notes.

### Exercise System
Interactive multiple-choice questions with immediate feedback, explanations, and progress tracking.

### Sarvam AI Integration
Client wrapper for Sarvam.ai APIs with mock fallback for development. Supports translation (English ↔ Assamese) and text-to-speech.

### TranslationDemo
Interactive demo page where users can try AI translation and hear Assamese pronunciation.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Netlify

This app is configured for Netlify deployment with optimized settings.

**Quick Deploy via Dashboard:**
1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import from Git"
3. Select your repository and branch
4. Configuration (auto-detected from `netlify.toml`):
   - Base directory: `prototype`
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variables:
   ```
   NEXT_PUBLIC_SARVAM_API_KEY = your_sarvam_api_key
   SARVAM_AP_API_KEY = your_sarvam_api_key
   ```
6. Click "Deploy site"

**Complete deployment guide:** See [NETLIFY_DEPLOY.md](./NETLIFY_DEPLOY.md)

The app will automatically use real Sarvam AI translation and text-to-speech when deployed with API keys configured.

## 🎨 Design System

### Colors
- **Primary:** `#FF6B35` (Vibrant orange - Bihu colors)
- **Secondary:** `#004E89` (Deep blue - Traditional)
- **Success:** `#00C853` (Green - Correct answers)
- **Background:** `#F7F9FC` (Light, clean)

### Typography
- **Assamese Text:** Noto Sans Assamese (Google Fonts)
- **English:** Inter (System fonts)
- **Romanization:** Monospace (Clear pronunciation)

## 🔍 Testing

```bash
# Run development server
npm run dev

# Test these pages:
- http://localhost:3000          (Landing)
- http://localhost:3000/learn    (Lesson Library)
- http://localhost:3000/learn/lesson-01  (Lesson 1)
- http://localhost:3000/demo     (AI Demo)
- http://localhost:3000/about    (About)
```

## 📝 Development Notes

### Mock Mode
The app runs in mock mode without Sarvam API key:
- Translation uses predefined dictionary
- TTS shows console log instead of playing audio
- All UI functionality works normally
- Perfect for development and demo

### Real AI Mode
When API key is provided:
- Real English ↔ Assamese translation
- Authentic Assamese pronunciation with TTS
- Full Sarvam.ai capabilities

## 🤝 Contributing

This is a prototype for gathering feedback. To contribute:

1. Try all lessons and exercises
2. Test the AI demo
3. Provide feedback on:
   - Learning experience
   - UI/UX design
   - Content accuracy (Assamese speakers)
   - Feature requests
   - Technical issues

## 📧 Feedback

For feedback and suggestions, see the About page in the app.

## 📜 License

ISC

## 🙏 Acknowledgments

- **Sarvam.ai** - India's Sovereign AI for Assamese language support
- **Assamese Diaspora Community** - For inspiration and validation
- **research-swarm** - For comprehensive feasibility research
- **agentic-flow** - For accelerated prototyping

---

**Built with ❤️ for the Assamese diaspora community**

*"Our language is not just words - it's our history, our stories, our identity."*
