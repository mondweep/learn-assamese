import { getLessonById } from '@/lib/lessons';
import LessonPlayer from '@/components/LessonPlayer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function LessonPage({ params }: { params: { lessonId: string } }) {
  const lesson = getLessonById(params.lessonId);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link
        href="/learn"
        className="inline-flex items-center gap-2 text-assamese-primary hover:underline mb-8"
      >
        <ArrowLeft size={20} />
        Back to Lessons
      </Link>

      {/* Lesson Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          {lesson.title}
        </h1>
        <div className="font-assamese text-3xl text-assamese-secondary mb-4">
          {lesson.titleAssamese}
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {lesson.description}
        </p>
      </div>

      {/* Lesson Player */}
      <LessonPlayer lesson={lesson} />
    </div>
  );
}
