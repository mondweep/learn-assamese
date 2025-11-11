import Link from 'next/link';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';
import { Lesson } from '@/lib/types';

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  const isCompleted = lesson.completed || false;

  return (
    <Link href={`/learn/${lesson.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer border-2 border-transparent hover:border-assamese-primary">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {lesson.title}
            </h3>
            <div className="font-assamese text-xl text-assamese-secondary mb-2">
              {lesson.titleAssamese}
            </div>
          </div>
          <div>
            {isCompleted ? (
              <CheckCircle className="text-assamese-success" size={32} />
            ) : (
              <Circle className="text-gray-300" size={32} />
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          {lesson.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{lesson.vocabulary.length} words</span>
          <span>{lesson.exercises.length} exercises</span>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span className="text-assamese-primary font-semibold">
            {isCompleted ? 'Review' : 'Start Lesson'}
          </span>
          <ArrowRight className="text-assamese-primary" size={20} />
        </div>

        {/* Progress Bar */}
        {isCompleted && (
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-assamese-success h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
