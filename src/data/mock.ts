export interface HotItem {
    id: string;
    rank: number;
    title: string;
    hotness: string;
    trend: 'up' | 'down' | 'stable';
}

export const hotList: HotItem[] = [
    { id: '1', rank: 1, title: '某地发布最新政策解读，引发广泛关注', hotness: '523.4w', trend: 'up' },
    { id: '2', rank: 2, title: '行业峰会在京召开，多项成果发布', hotness: '412.1w', trend: 'up' },
    { id: '3', rank: 3, title: '居民消费指数CPI发布，同比上涨0.2%', hotness: '389.5w', trend: 'stable' },
    { id: '4', rank: 4, title: '科技巨头发布新款AI模型', hotness: '356.2w', trend: 'up' },
    { id: '5', rank: 5, title: '高校毕业生就业指导服务周启动', hotness: '298.8w', trend: 'down' },
    { id: '6', rank: 6, title: '新一轮降雨将影响南方多个省份', hotness: '245.3w', trend: 'stable' },
];

export interface ReportItem {
    id: string;
    title: string;
    date: string;
    status: 'completed' | 'pending' | 'overdue';
    type: string;
}

export const reports: ReportItem[] = [
    { id: '1', title: '关于某突发事件的舆情分析报告', date: '2025-10-24 10:00', status: 'completed', type: '专项报告' },
    { id: '2', title: '10月份行业舆情月度总结', date: '2025-10-23 15:30', status: 'completed', type: '月度报告' },
    { id: '3', title: '某品牌营销活动舆情监测', date: '2025-10-25 09:00', status: 'pending', type: '监测报告' },
    { id: '4', title: '周末热点事件快报', date: '2025-10-21 08:00', status: 'overdue', type: '日报' },
];
