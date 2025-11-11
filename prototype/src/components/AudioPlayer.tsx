'use client';

import { Volume2, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { speakAssamese } from '@/lib/sarvam';

interface AudioPlayerProps {
  text: string;
  label?: string;
}

export default function AudioPlayer({ text, label = 'Play Audio' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    setIsPlaying(true);
    try {
      await speakAssamese(text);
    } catch (error) {
      console.error('Audio playback error:', error);
    } finally {
      setTimeout(() => setIsPlaying(false), 1500);
    }
  };

  return (
    <button
      onClick={handlePlay}
      disabled={isPlaying}
      className="inline-flex items-center gap-2 px-4 py-2 bg-assamese-primary text-white rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      title={label}
    >
      {isPlaying ? (
        <Loader2 className="animate-spin" size={20} />
      ) : (
        <Volume2 size={20} />
      )}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
