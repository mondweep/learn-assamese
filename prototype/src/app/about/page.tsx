import { Heart, Users, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Learn Assamese
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A passion project to preserve and promote Assamese language and culture
          for diaspora communities worldwide.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <Target className="text-assamese-primary" size={40} />
          <h2 className="text-3xl font-bold">Our Mission</h2>
        </div>
        <p className="text-lg text-gray-700 mb-4">
          Assamese diaspora communities are growing year after year outside of Assam.
          An increased rate of emigration has the potential to create a worldwide cultural
          disconnect between future generations and their Assamese roots.
        </p>
        <p className="text-lg text-gray-700">
          We understand that many hold Assamese heritage close to their hearts. However,
          busy lives and a lack of reliable, mainstream resources can make maintaining
          cultural roots taxing. <strong className="text-assamese-primary">Learn Assamese</strong> is
          here to bridge that gap with modern, AI-powered learning tools.
        </p>
      </div>

      {/* The Gap */}
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-red-800">The Gap We're Filling</h2>
        <p className="text-lg text-gray-800 mb-4">
          Despite being spoken by 23+ million people worldwide, <strong>Assamese is absent
          from all major language learning platforms</strong>:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 ml-4">
          <li>Duolingo does NOT offer Assamese (even after 2025 India expansion)</li>
          <li>Rosetta Stone, Babbel, Memrise - none support Assamese</li>
          <li>Existing apps are basic, with poor UX and limited content</li>
          <li>No modern, gamified learning experience exists</li>
        </ul>
      </div>

      {/* Why Now */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <Sparkles className="text-assamese-primary" size={40} />
          <h2 className="text-3xl font-bold">Why Now?</h2>
        </div>
        <p className="text-lg text-gray-700 mb-4">
          2025 marks a turning point for Assamese language technology:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-assamese-bg p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3 text-assamese-secondary">🇮🇳 Sarvam.ai Launch</h3>
            <p>
              India's Government-backed Sovereign AI now provides comprehensive Assamese
              language support - translation, speech recognition, and text-to-speech.
            </p>
          </div>
          <div className="bg-assamese-bg p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3 text-assamese-secondary">🚀 Modern Tech Stack</h3>
            <p>
              AI/ML capabilities that weren't available even 2 years ago now make
              interactive, intelligent language learning possible.
            </p>
          </div>
        </div>
      </div>

      {/* Technology */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-2">Frontend</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Next.js 14</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• React</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">AI/ML</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Sarvam.ai APIs</li>
              <li>• Translation</li>
              <li>• Speech-to-Text</li>
              <li>• Text-to-Speech</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Design</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Noto Sans Assamese</li>
              <li>• Cultural color palette</li>
              <li>• Mobile-first</li>
              <li>• Accessibility</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Current Status */}
      <div className="bg-gradient-to-r from-assamese-primary to-assamese-secondary text-white rounded-lg p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <Users className="text-white" size={40} />
          <h2 className="text-3xl font-bold">Current Status: MVP Prototype</h2>
        </div>
        <p className="text-lg mb-4">
          This is a <strong>working prototype</strong> showcasing the core features and potential
          of a full-fledged Assamese learning platform. We're seeking feedback from the
          diaspora community to guide further development.
        </p>
        <div className="bg-white bg-opacity-20 rounded-lg p-6 mt-6">
          <h3 className="font-bold text-xl mb-3">What's Included:</h3>
          <ul className="space-y-2">
            <li>✅ 5 complete lessons (Greetings, Phrases, Numbers, Family, Verbs)</li>
            <li>✅ Interactive exercises with feedback</li>
            <li>✅ Sarvam AI integration (translation & TTS)</li>
            <li>✅ Cultural context for each lesson</li>
            <li>✅ Mobile-responsive design</li>
          </ul>
        </div>
      </div>

      {/* Roadmap */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Roadmap</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-assamese-primary mb-2">Phase 1: MVP (Current)</h3>
            <p className="text-gray-700">
              5 lessons, basic gamification, AI translation demo
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-assamese-primary mb-2">Phase 2: Enhanced (Next 3-6 months)</h3>
            <p className="text-gray-700">
              20-30 lessons, speech recognition, AI conversation practice, mobile apps,
              progress tracking, user accounts
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-assamese-primary mb-2">Phase 3: Community (6-12 months)</h3>
            <p className="text-gray-700">
              Community forums, user-generated content, live tutoring, certifications,
              cultural deep-dives, offline mode
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-b from-assamese-bg to-white rounded-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <Heart className="text-assamese-primary" size={60} />
        </div>
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          This platform is for the community, by the community. Your feedback and
          participation will shape the future of Assamese language preservation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/learn"
            className="bg-assamese-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Start Learning Now
          </Link>
          <Link
            href="/demo"
            className="border-2 border-assamese-primary text-assamese-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-assamese-primary hover:text-white transition-all"
          >
            Try AI Demo
          </Link>
        </div>
        <p className="text-sm text-gray-600 mt-8">
          Built with research-swarm and agentic-flow • Powered by Sarvam.ai
        </p>
      </div>
    </div>
  );
}
