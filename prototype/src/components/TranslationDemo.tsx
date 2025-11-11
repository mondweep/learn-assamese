'use client';

import { useState } from 'react';
import { ArrowRight, Loader2, Volume2 } from 'lucide-react';
import { translateText, speakAssamese, sarvamClient } from '@/lib/sarvam';

export default function TranslationDemo() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [targetLang, setTargetLang] = useState<'as' | 'en'>('as');

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setIsTranslating(true);
    try {
      const result = await translateText(inputText, targetLang);
      setTranslatedText(result);
    } catch (error) {
      console.error('Translation error:', error);
      setTranslatedText('Translation error. Please try again.');
    } finally {
      setIsTranslating(false);
    }
  };

  const handlePlayAudio = async () => {
    if (!translatedText || targetLang !== 'as') return;

    setIsPlaying(true);
    try {
      await speakAssamese(translatedText);
    } catch (error) {
      console.error('Audio playback error:', error);
    } finally {
      setTimeout(() => setIsPlaying(false), 1500);
    }
  };

  const swapLanguages = () => {
    setTargetLang(prev => (prev === 'as' ? 'en' : 'as'));
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  const quickPhrases = [
    { en: 'Hello', as: 'নমস্কাৰ' },
    { en: 'Thank you', as: 'ধন্যবাদ' },
    { en: 'How are you?', as: 'আপুনি কেনে আছে?' },
    { en: 'Good morning', as: 'শুভ পুৱা' },
  ];

  const handleQuickPhrase = (phrase: { en: string; as: string }) => {
    setInputText(targetLang === 'as' ? phrase.en : phrase.as);
    setTranslatedText('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Sarvam AI Badge */}
      {sarvamClient.isMockMode() && (
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <div className="font-bold text-yellow-800">Demo Mode</div>
              <div className="text-sm text-yellow-700">
                Using mock translations. Deploy to production to activate real Sarvam AI.
              </div>
            </div>
          </div>
        </div>
      )}

      {!sarvamClient.isMockMode() && (
        <div className="bg-gradient-to-r from-assamese-primary to-assamese-secondary text-white rounded-lg p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🇮🇳</div>
            <div>
              <div className="font-bold text-xl mb-1">Powered by Sarvam.ai</div>
              <div className="text-sm opacity-90">
                India's Sovereign AI Initiative - Supporting all 22 Indian languages including Assamese
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Translation Interface */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Language Selector */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setTargetLang('as')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              targetLang === 'as'
                ? 'bg-assamese-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            English → Assamese
          </button>
          <button
            onClick={swapLanguages}
            className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all"
            title="Swap languages"
          >
            <ArrowRight size={24} className="transform rotate-90" />
          </button>
          <button
            onClick={() => setTargetLang('en')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              targetLang === 'en'
                ? 'bg-assamese-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Assamese → English
          </button>
        </div>

        {/* Input */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Enter {targetLang === 'as' ? 'English' : 'Assamese'} text:
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={targetLang === 'as' ? 'Type in English...' : 'অসমীয়া লিখক...'}
            className={`w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:border-assamese-primary focus:outline-none ${
              targetLang === 'en' ? 'font-assamese text-2xl' : ''
            }`}
          />
        </div>

        {/* Translate Button */}
        <button
          onClick={handleTranslate}
          disabled={isTranslating || !inputText.trim()}
          className="w-full bg-assamese-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-6"
        >
          {isTranslating ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin" size={24} />
              Translating...
            </span>
          ) : (
            'Translate'
          )}
        </button>

        {/* Output */}
        {translatedText && (
          <div className="bg-assamese-bg rounded-lg p-6">
            <div className="flex justify-between items-start mb-3">
              <label className="block text-sm font-semibold text-gray-700">
                Translation:
              </label>
              {targetLang === 'as' && (
                <button
                  onClick={handlePlayAudio}
                  disabled={isPlaying}
                  className="flex items-center gap-2 px-4 py-2 bg-assamese-primary text-white rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50"
                >
                  {isPlaying ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <Volume2 size={20} />
                  )}
                  <span className="text-sm">Play</span>
                </button>
              )}
            </div>
            <div
              className={`text-2xl ${
                targetLang === 'as' ? 'font-assamese text-4xl text-assamese-secondary' : 'text-gray-900'
              }`}
            >
              {translatedText}
            </div>
          </div>
        )}
      </div>

      {/* Quick Phrases */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Try these common phrases:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickPhrases.map((phrase, index) => (
            <button
              key={index}
              onClick={() => handleQuickPhrase(phrase)}
              className="bg-white border-2 border-gray-300 hover:border-assamese-primary rounded-lg p-3 text-sm font-medium transition-all"
            >
              <div className="mb-1">{phrase.en}</div>
              <div className="font-assamese text-assamese-secondary">{phrase.as}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
