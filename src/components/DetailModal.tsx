import { X } from 'lucide-react';
import { type Metric } from '../constants';
import { cn } from '../lib/utils';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface Props {
  metric: Metric;
  onClose: () => void;
}

export default function DetailModal({ metric, onClose }: Props) {
  const isReportable = metric.type === '填报';

  // Mock data generation
  const chartData = Array.from({ length: 24 }).map((_, i) => ({
    time: `0${i}:00`,
    value: isReportable ? 150 + Math.random() * 30 : 1280 + Math.random() * 15
  }));

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded w-full max-w-[1000px] flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-[#E8E8E8] flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-[#333]">{metric.name}</h2>
            <div className="text-xs text-[#999] mt-2 flex gap-2">
              <span>{metric.id}</span> | <span>{metric.unit}</span> | <span>{metric.workshop}</span> | <span>{metric.source}</span>
            </div>
          </div>
          <div className="flex gap-2 text-[#999]">
            <X className="h-5 w-5 hover:text-[#333] cursor-pointer" onClick={onClose} />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
            {/* Range Selector */}
            <div className="flex gap-4 mb-6 items-center">
                <input type="date" className="border border-[#D9D9D9] rounded px-2 py-1 text-xs outline-none" />
                <span className="text-[#666]">-</span>
                <input type="date" className="border border-[#D9D9D9] rounded px-2 py-1 text-xs outline-none" />
                <button className="bg-[#1890FF] text-white px-6 py-1 rounded text-xs">查询</button>
            </div>

            <div className="h-[380px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    {isReportable ? (
                            <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
                            <XAxis dataKey="time" tick={{fontSize: 10}} />
                            <YAxis tick={{fontSize: 10}} />
                            <Tooltip />
                            <Bar dataKey="value" fill="#FA8C16" />
                        </BarChart>
                    ) : (
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
                            <XAxis dataKey="time" tick={{fontSize: 10}} />
                            <YAxis domain={['auto', 'auto']} tick={{fontSize: 10}} />
                            <Tooltip />
                            <Line type="monotone" dataKey="value" stroke="#1890FF" strokeWidth={2} dot={false} />
                        </LineChart>
                    )}
                </ResponsiveContainer>
            </div>
        </div>
      </div>
    </div>
  );
}
