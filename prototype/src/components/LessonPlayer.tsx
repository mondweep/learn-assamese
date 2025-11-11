'use client';

import { useState } from 'react';
import { Lesson, VocabularyItem } from '@/lib/types';
import AudioPlayer from './AudioPlayer';
import Exercise from './Exercise';
import ProgressBar from './ProgressBar';
import { Info, CheckCircle } from 'lucide-react';

interface LessonPlayerProps {
  lesson: Lesson;
}

export default function LessonPlayer({ lesson }: LessonPlayerProps) {
  const [currentStep, setCurrentStep] = useState<'vocabulary' | 'exercises'>('vocabulary');
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isLessonComplete, setIsLessonComplete] = useState(false);

  const handleExerciseComplete = (correct: boolean) => {
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
    }

    // Move to next exercise or complete lesson
    if (currentExerciseIndex < lesson.exercises.length - 1) {
      setTimeout(() => {
        setCurrentExerciseIndex(prev => prev + 1);
      }, 1500);
    } else {
      setTimeout(() => {
        setIsLessonComplete(true);
      }, 1500);
    }
  };

  const startExercises = () => {
    setCurrentStep('exercises');
  };

  if (isLessonComplete) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <CheckCircle className="text-assamese-success mx-auto mb-6" size={80} />
          <h2 className="text-3xl font-bold mb-4">Lesson Complete! 🎉</h2>
          <p className="text-xl text-gray-700 mb-6">
            You got {correctAnswers} out of {lesson.exercises.length} correct!
          </p>
          <div className="mb-6">
            <ProgressBar current={correctAnswers} total={lesson.exercises.length} />
          </div>
          <div className="space-y-3">
            <a
              href="/learn"
              className="block w-full bg-assamese-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all"
            >
              Back to Lessons
            </a>
            <button
              onClick={() => {
                setCurrentStep('vocabulary');
                setCurrentExerciseIndex(0);
                setCorrectAnswers(0);
                setIsLessonComplete(false);
              }}
              className="block w-full border-2 border-assamese-primary text-assamese-primary py-4 rounded-lg font-bold text-lg hover:bg-assamese-primary hover:text-white transition-all"
            >
              Review Lesson
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress */}
      {currentStep === 'exercises' && (
        <div className="mb-6">
          <ProgressBar
            current={currentExerciseIndex + 1}
            total={lesson.exercises.length}
            label="Exercise Progress"
          />
        </div>
      )}

      {/* Vocabulary Section */}
      {currentStep === 'vocabulary' && (
        <div>
          {/* Cultural Note */}
          <div className="bg-blue-50 border-l-4 border-assamese-secondary p-6 rounded-lg mb-8">
            <div className="flex items-start gap-3">
              <Info className="text-assamese-secondary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2 text-assamese-secondary">Cultural Note</h3>
                <p className="text-gray-700">{lesson.culturalNote}</p>
              </div>
            </div>
          </div>

          {/* Vocabulary List */}
          <div className="space-y-6 mb-8">
            {lesson.vocabulary.map((item, index) => (
              <VocabularyCard key={index} item={item} />
            ))}
          </div>

          {/* Start Exercises Button */}
          <div className="text-center">
            <button
              onClick={startExercises}
              className="bg-assamese-primary text-white px-12 py-4 rounded-lg font-bold text-xl hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Start Exercises
            </button>
          </div>
        </div>
      )}

      {/* Exercises Section */}
      {currentStep === 'exercises' && !isLessonComplete && (
        <Exercise
          exercise={lesson.exercises[currentExerciseIndex]}
          onComplete={handleExerciseComplete}
        />
      )}
    </div>
  );
}

// Vocabulary Card Component
function VocabularyCard({ item }: { item: VocabularyItem }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          {/* Assamese Text */}
          <div className="font-assamese text-4xl text-assamese-secondary mb-2">
            {item.assamese}
          </div>

          {/* Romanization */}
          <div className="font-mono text-sm text-gray-500 mb-3">
            {item.romanization}
          </div>

          {/* English Translation */}
          <div className="text-2xl font-semibold text-gray-900 mb-3">
            {item.english}
          </div>

          {/* Example Sentence */}
          {item.exampleSentence && (
            <div className="bg-assamese-bg p-3 rounded-lg mb-3">
              <div className="text-sm text-gray-600 mb-1">Example:</div>
              <div className="font-assamese text-lg text-gray-800">
                {item.exampleSentence}
              </div>
            </div>
          )}

          {/* Cultural Context */}
          {item.culturalContext && (
            <div className="text-sm text-gray-600 italic">
              💡 {item.culturalContext}
            </div>
          )}
        </div>

        {/* Audio Player */}
        <div className="flex-shrink-0">
          <AudioPlayer text={item.assamese} label="Listen" />
        </div>
      </div>
    </div>
  );
}
