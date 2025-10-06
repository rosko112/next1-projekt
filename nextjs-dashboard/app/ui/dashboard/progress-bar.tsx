import { Revenue } from '@/app/lib/definitions';
import { fetchRevenue } from '@/app/lib/data';

type ProgressBarProps = {
  collected: number;
  pending?: number;
  limit?: number;
};

export default function ProgressBar({ collected, pending = 0, limit= 10000}: ProgressBarProps) {
  const collectedPercent = Math.min((collected / limit) * 100, 100);
  const pendingPercent = Math.min((pending / limit) * 100, 100 - collectedPercent);
  const missingPercent = Math.max(0, 100 - collectedPercent - pendingPercent);

  return (
    <div className="w-full max-w-xl mx-auto my-8">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">
          Collected: ${collected.toLocaleString()}
        </span>
        <span className="text-sm font-medium text-gray-700">
          Pending: ${pending.toLocaleString()}
        </span>
        <span className="text-sm font-medium text-gray-700">
          Goal: ${limit.toLocaleString()}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden flex">
        <div
          className="bg-green-500 h-6 transition-all duration-500"
          style={{ width: `${collectedPercent}%` }}
        ></div>
        <div
          className="bg-blue-500 h-6 transition-all duration-500"
          style={{ width: `${pendingPercent}%` }}
        ></div>
        <div
          className="bg-red-500 h-6 transition-all duration-500"
          style={{ width: `${missingPercent}%` }}
        ></div>
      </div>
      <div className="text-right text-xs text-gray-500 mt-1">
        {collectedPercent.toFixed(1)}% collected, {pendingPercent.toFixed(1)}% pending, {missingPercent.toFixed(1)}% missing
      </div>
    </div>
  );
}