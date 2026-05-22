/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { WORKSHOPS, REPORTS, METRICS, type Metric } from './constants';
import { cn } from './lib/utils';
import DetailModal from './components/DetailModal';

export default function App() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(WORKSHOPS[0]);
  const [selectedReport, setSelectedReport] = useState("全部报表");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMetric, setSelectedMetric] = useState<Metric | null>(null);

  const filteredMetrics = METRICS.filter(m => 
    (selectedWorkshop === "全部" || m.workshop === selectedWorkshop) &&
    (selectedReport === "全部报表" || m.source === selectedReport) &&
    (searchQuery === "" || m.name.includes(searchQuery))
  );

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-[#333] font-sans overflow-hidden">
      {/* Header */}
      <header className="bg-[#1D2B44] text-white px-6 h-14 flex items-center justify-between shrink-0">
        <h1 className="text-lg font-bold tracking-wide">生产指标查询中心</h1>
      </header>

      {/* Filters */}
      <div className="px-6 py-4 flex gap-4 bg-white border-b border-[#E8E8E8] items-center shrink-0">
        <div className="flex items-center gap-2">
            <span className="text-xs text-[#999]">车间:</span>
            <select className="border border-[#D9D9D9] rounded px-2 py-1 text-xs outline-none bg-[#FAFAFA]" value={selectedWorkshop} onChange={e => setSelectedWorkshop(e.target.value)}>
                <option value="全部">全部</option>
                {WORKSHOPS.map(w => <option key={w}>{w}</option>)}
            </select>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-xs text-[#999]">指标来源:</span>
            <select className="border border-[#D9D9D9] rounded px-2 py-1 text-xs outline-none bg-[#FAFAFA]" value={selectedReport} onChange={e => setSelectedReport(e.target.value)}>
                {REPORTS.map(r => <option key={r}>{r}</option>)}
            </select>
        </div>
        <div className="flex-grow flex justify-end gap-2">
            <div className="relative w-48">
              <input type="text" placeholder="指标名称查询" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full border border-[#D9D9D9] rounded px-3 py-1 text-xs outline-none focus:border-[#1890FF]"/>
            </div>
            <button className="bg-[#1890FF] text-white px-4 py-1 rounded text-xs hover:bg-[#40A9FF]">查询</button>
        </div>
      </div>

      {/* Table Area */}
      <main className="flex-grow overflow-hidden bg-white">
        <table className="w-full text-left table-fixed">
          <thead className="bg-[#FAFAFA] border-b border-[#E8E8E8] text-[#888] text-xs font-medium">
            <tr>
              <th className="px-6 py-3 w-32">指标编码</th>
              <th className="px-6 py-3 w-48">指标名称</th>
              <th className="px-6 py-3 w-20">单位</th>
              <th className="px-6 py-3 w-32">车间</th>
              <th className="px-6 py-3 w-48">指标来源</th>
              <th className="px-6 py-3 w-20 text-center">操作</th>
            </tr>
          </thead>
          <tbody className="text-xs text-[#333] divide-y divide-[#F0F0F0]">
            {filteredMetrics.map((m) => (
              <tr key={m.id} className="hover:bg-[#E6F7FF]">
                <td className="px-6 py-2.5 font-mono text-[#666]">{m.id}</td>
                <td className="px-6 py-2.5 font-medium">{m.name}</td>
                <td className="px-6 py-2.5">{m.unit}</td>
                <td className="px-6 py-2.5">{m.workshop}</td>
                <td className="px-6 py-2.5">{m.source}</td>
                <td className="px-6 py-2.5 text-center text-[#1890FF] font-medium cursor-pointer hover:underline" onClick={() => setSelectedMetric(m)}>查看</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4 text-xs text-[#666]">共 {filteredMetrics.length} 条</div>
      </main>

      {selectedMetric && (
        <DetailModal metric={selectedMetric} onClose={() => setSelectedMetric(null)} />
      )}
    </div>
  );
}

