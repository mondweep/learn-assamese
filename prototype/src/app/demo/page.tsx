import TranslationDemo from '@/components/TranslationDemo';

export default function DemoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Translation Demo
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Experience the power of Sarvam.ai's language AI. Translate between English
          and Assamese, and hear authentic pronunciation with text-to-speech.
        </p>
      </div>

      <TranslationDemo />

      <div className="mt-12 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">About Sarvam.ai</h2>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-4">
            <strong>Sarvam.ai</strong> is India's Government-backed Sovereign AI initiative,
            providing comprehensive AI capabilities for all 22 officially recognized Indian
            languages, including Assamese.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-assamese-bg p-4 rounded-lg">
              <h3 className="font-bold mb-2">🗣️ Speech Recognition</h3>
              <p className="text-sm">
                Convert Assamese speech to text with high accuracy
              </p>
            </div>
            <div className="bg-assamese-bg p-4 rounded-lg">
              <h3 className="font-bold mb-2">🔊 Text-to-Speech</h3>
              <p className="text-sm">
                Natural-sounding Assamese audio generation
              </p>
            </div>
            <div className="bg-assamese-bg p-4 rounded-lg">
              <h3 className="font-bold mb-2">🌐 Translation</h3>
              <p className="text-sm">
                Accurate translation across 22 Indian languages
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
