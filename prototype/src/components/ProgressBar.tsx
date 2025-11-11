interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export default function ProgressBar({ current, total, label }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>{label}</span>
          <span>
            {current} / {total}
          </span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-assamese-success h-3 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        >
          <div className="h-full flex items-center justify-end pr-2">
            {percentage > 10 && (
              <span className="text-xs text-white font-bold">{percentage}%</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
