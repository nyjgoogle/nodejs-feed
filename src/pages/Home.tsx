import React from 'react';
import logo from '../assets/logo.png';
import { hotList } from '../data/mock';
import { BarChart3, FileText, Flame, Search } from 'lucide-react';

export const Home: React.FC = () => {
    return (
        <div className="flex-col" style={{ gap: '1.5rem' }}>
            {/* Header */}
            <header className="flex-center" style={{ justifyContent: 'space-between', padding: '0.5rem 0' }}>
                <div className="flex-center" style={{ gap: '0.75rem' }}>
                    <img src={logo} alt="Logo" style={{ height: '32px', width: '32px', borderRadius: '8px', objectFit: 'cover' }} />
                    <h1 style={{ fontSize: '1.25rem' }}>融小查</h1>
                </div>
                <Search size={20} className="text-muted" />
            </header>

            {/* Stats Card */}
            <section
                className="card"
                style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                    color: 'white',
                    padding: '1.5rem',
                }}
            >
                <div style={{ marginBottom: '1rem', opacity: 0.9 }}>舆情监测中</div>
                <div className="flex-center" style={{ justifyContent: 'space-around' }}>
                    <div className="flex-col flex-center">
                        <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>128</span>
                        <span className="text-xs" style={{ opacity: 0.8 }}>今日新增</span>
                    </div>
                    <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.2)' }} />
                    <div className="flex-col flex-center">
                        <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>12</span>
                        <span className="text-xs" style={{ opacity: 0.8 }}>高风险</span>
                    </div>
                    <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.2)' }} />
                    <div className="flex-col flex-center">
                        <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>98%</span>
                        <span className="text-xs" style={{ opacity: 0.8 }}>处理率</span>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                <ActionIcon icon={<FileText color="#3b82f6" />} label="分析报告" />
                <ActionIcon icon={<BarChart3 color="#8b5cf6" />} label="AI 生文" />
                <ActionIcon icon={<Flame color="#f59e0b" />} label="24h 热点" />
                <ActionIcon icon={<Search color="#10b981" />} label="事件追踪" />
            </section>

            {/* Hot List */}
            <section>
                <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1rem' }}>24小时热点榜</h2>
                    <span className="text-xs text-muted">更多 &gt;</span>
                </div>
                <div className="flex-col" style={{ gap: '0.75rem' }}>
                    {hotList.map((item) => (
                        <div key={item.id} className="card flex-center" style={{ justifyContent: 'flex-start', padding: '0.75rem', gap: '1rem' }}>
                            <span
                                style={{
                                    fontWeight: 700,
                                    color: item.rank <= 3 ? 'var(--danger)' : 'var(--text-muted)',
                                    width: '20px',
                                    textAlign: 'center'
                                }}
                            >
                                {item.rank}
                            </span>
                            <div className="flex-col" style={{ flex: 1 }}>
                                <span className="text-sm font-bold" style={{ marginBottom: '0.25rem' }}>{item.title}</span>
                                <span className="text-xs text-muted">热度 {item.hotness}</span>
                            </div>
                            <span className="text-xs" style={{ color: item.trend === 'up' ? 'var(--danger)' : 'var(--text-muted)' }}>
                                {item.trend === 'up' ? '↑' : '-'}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

const ActionIcon: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
    <div className="flex-col flex-center" style={{ gap: '0.5rem' }}>
        <div
            className="flex-center"
            style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--card)',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}
        >
            {icon}
        </div>
        <span className="text-xs text-muted">{label}</span>
    </div>
);
