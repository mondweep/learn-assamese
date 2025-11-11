import { getAllLessons } from '@/lib/lessons';
import LessonCard from '@/components/LessonCard';

export default function LearnPage() {
  const lessons = getAllLessons();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Start Your Assamese Journey
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Learn Assamese through interactive lessons designed for diaspora communities.
          Each lesson includes vocabulary, cultural context, and practice exercises.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">More Lessons Coming Soon!</h2>
          <p className="text-gray-600 mb-6">
            We're continuously adding new lessons covering grammar, conversation,
            and advanced topics. Stay tuned for updates!
          </p>
          <a
            href="/about"
            className="inline-block bg-assamese-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Learn More About This Project
          </a>
        </div>
      </div>
    </div>
  );
}
