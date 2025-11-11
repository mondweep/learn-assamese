'use client';

import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Exercise as ExerciseType } from '@/lib/types';

interface ExerciseProps {
  exercise: ExerciseType;
  onComplete: (correct: boolean) => void;
}

export default function Exercise({ exercise, onComplete }: ExerciseProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSelect = (option: string) => {
    if (isChecked) return;
    setSelectedAnswer(option);
  };

  const handleCheck = () => {
    if (!selectedAnswer) return;

    const correct = selectedAnswer === exercise.correctAnswer;
    setIsCorrect(correct);
    setIsChecked(true);
    onComplete(correct);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsChecked(false);
    setIsCorrect(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      {/* Question */}
      <div className="mb-6">
        <div className="text-sm font-semibold text-assamese-primary mb-2">
          {exercise.type === 'multiple-choice' && 'MULTIPLE CHOICE'}
          {exercise.type === 'translation' && 'TRANSLATION'}
          {exercise.type === 'listening' && 'LISTENING'}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{exercise.question}</h3>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {exercise.options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrectAnswer = exercise.correctAnswer === option;
          const showCorrect = isChecked && isCorrectAnswer;
          const showIncorrect = isChecked && isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              disabled={isChecked}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                showCorrect
                  ? 'border-assamese-success bg-green-50'
                  : showIncorrect
                  ? 'border-red-500 bg-red-50'
                  : isSelected
                  ? 'border-assamese-primary bg-blue-50'
                  : 'border-gray-300 hover:border-assamese-primary'
              } ${isChecked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">{option}</span>
                {showCorrect && <CheckCircle className="text-assamese-success" size={24} />}
                {showIncorrect && <XCircle className="text-red-500" size={24} />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {isChecked && (
        <div
          className={`p-4 rounded-lg mb-6 ${
            isCorrect ? 'bg-green-50 border-2 border-assamese-success' : 'bg-red-50 border-2 border-red-500'
          }`}
        >
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle className="text-assamese-success flex-shrink-0 mt-1" size={24} />
            ) : (
              <XCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
            )}
            <div>
              <div className="font-bold mb-2">{isCorrect ? 'Correct!' : 'Not quite right'}</div>
              {exercise.explanation && <p className="text-gray-700">{exercise.explanation}</p>}
              {!isCorrect && (
                <p className="text-gray-700 mt-2">
                  The correct answer is: <span className="font-semibold">{exercise.correctAnswer}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Action Button */}
      {!isChecked ? (
        <button
          onClick={handleCheck}
          disabled={!selectedAnswer}
          className="w-full bg-assamese-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Check Answer
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="w-full bg-assamese-success text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all"
        >
          Continue
        </button>
      )}
    </div>
  );
}
