export type MetricType = "数采" | "填报";

export interface Metric {
  id: string;
  name: string;
  unit: string;
  category: string;
  type: MetricType;
  frequency: string;
  workshop: string;
  source: string;
}

export const WORKSHOPS = [
  "熔炼车间",
  "电解车间",
  "制酸车间",
  "渣选车间",
  "动力车间",
  "制氧站",
  "能源",
  "其他"
];

export const REPORTS = [
  "全部报表",
  "圆盘浇筑生产报表",
  "熔炼车间阳极炉生产报表",
  "电解车间电解生产报表",
  "制酸车间生产报表",
  "公辅生产报表"
];

export const METRICS: Metric[] = [
  { id: "RL-0001", name: "炉体温度", unit: "℃", category: "炉况参数", type: "数采", frequency: "小时", workshop: "熔炼", source: "熔炼车间阳极炉生产报表" },
  { id: "RL-0002", name: "熔炼炉渣温度", unit: "℃", category: "炉况参数", type: "数采", frequency: "小时", workshop: "熔炼", source: "熔炼车间阳极炉生产报表" },
  { id: "RL-0003", name: "烟气SO2浓度", unit: "%", category: "烟气参数", type: "数采", frequency: "小时", workshop: "熔炼", source: "熔炼车间阳极炉生产报表" },
  { id: "RL-0004", name: "烟气流量", unit: "Nm³/h", category: "烟气参数", type: "数采", frequency: "小时", workshop: "熔炼", source: "熔炼车间阳极炉生产报表" },
  { id: "RL-0005", name: "铜精矿投料量", unit: "吨", category: "投料数据", type: "填报", frequency: "班", workshop: "熔炼", source: "圆盘浇筑生产报表" },
  { id: "RL-0006", name: "熔剂投料量", unit: "吨", category: "投料数据", type: "填报", frequency: "班", workshop: "熔炼", source: "圆盘浇筑生产报表" },
  { id: "RL-0007", name: "冰铜产量", unit: "吨", category: "产出数据", type: "填报", frequency: "日", workshop: "熔炼", source: "熔炼车间阳极炉生产报表" },
  { id: "RL-0008", name: "冰铜品位", unit: "%", category: "产出数据", type: "填报", frequency: "日", workshop: "熔炼", source: "熔炼车间阳极炉生产报表" },
  { id: "RL-0009", name: "炉渣产量", unit: "吨", category: "产出数据", type: "填报", frequency: "日", workshop: "熔炼", source: "熔炼车间阳极炉生产报表" },
  { id: "RL-0010", name: "渣含铜", unit: "%", category: "质量数据", type: "填报", frequency: "日", workshop: "熔炼", source: "熔炼车间阳极炉生产报表" },
  { id: "RL-0011", name: "工业氧消耗", unit: "Nm³", category: "能耗数据", type: "数采", frequency: "小时", workshop: "熔炼", source: "公辅生产报表" },
  { id: "RL-0012", name: "天然气消耗", unit: "Nm³", category: "能耗数据", type: "数采", frequency: "小时", workshop: "熔炼", source: "公辅生产报表" },
  { id: "RL-0013", name: "炉况压力", unit: "kPa", category: "炉况参数", type: "数采", frequency: "小时", workshop: "熔炼", source: "熔炼车间阳极炉生产报表" },
  { id: "RL-0014", name: "鼓风量", unit: "Nm³/h", category: "炉况参数", type: "数采", frequency: "小时", workshop: "熔炼", source: "熔炼车间阳极炉生产报表" },
  { id: "RL-0015", name: "返料量", unit: "吨", category: "投料数据", type: "填报", frequency: "班", workshop: "熔炼", source: "圆盘浇筑生产报表" },
];

