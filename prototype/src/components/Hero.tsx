import Link from 'next/link';
import { BookOpen, Globe, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-assamese-bg to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Reconnect with Your
            <span className="text-assamese-primary"> Assamese Roots</span>
          </h1>

          {/* Assamese Script Showcase */}
          <div className="font-assamese text-4xl sm:text-5xl text-assamese-secondary mb-8">
            অসমীয়া ভাষা শিকক
          </div>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            The first AI-powered platform designed for the Assamese diaspora.
            Learn your heritage language with modern technology and cultural authenticity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/learn"
              className="bg-assamese-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Start Learning Free
            </Link>
            <Link
              href="/demo"
              className="border-2 border-assamese-primary text-assamese-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-assamese-primary hover:text-white transition-all"
            >
              Try AI Demo
            </Link>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <BookOpen className="text-assamese-primary" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Lessons</h3>
              <p className="text-gray-600">
                Learn Assamese through engaging, gamified lessons designed for all skill levels
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Globe className="text-assamese-primary" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-600">
                Powered by Sarvam.ai, India's Sovereign AI, with real pronunciation and translation
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Heart className="text-assamese-primary" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultural Context</h3>
              <p className="text-gray-600">
                Learn not just the language, but the culture, traditions, and heritage of Assam
              </p>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="mt-20 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Why This Matters</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Assamese diaspora communities are growing worldwide, but <span className="font-semibold text-assamese-primary">mainstream platforms like Duolingo don't offer Assamese</span>.
              This creates a cultural disconnect between generations. We're here to change that with a platform
              built by the diaspora, for the diaspora.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
