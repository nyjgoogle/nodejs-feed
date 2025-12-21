import React, { useState } from 'react';
import { reports } from '../data/mock';
import { Clock } from 'lucide-react';

export const Report: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'completed' | 'pending'>('all');

    const filteredReports = activeTab === 'all'
        ? reports
        : reports.filter(r => r.status === activeTab);

    return (
        <div className="flex-col" style={{ gap: '1rem' }}>
            <h1 style={{ fontSize: '1.25rem', padding: '0.5rem 0' }}>分析报告</h1>

            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--accent)' }}>
                <TabItem label="全部" active={activeTab === 'all'} onClick={() => setActiveTab('all')} />
                <TabItem label="已完成" active={activeTab === 'completed'} onClick={() => setActiveTab('completed')} />
                <TabItem label="待处理" active={activeTab === 'pending'} onClick={() => setActiveTab('pending')} />
            </div>

            {/* List */}
            <div className="flex-col" style={{ gap: '0.75rem', marginTop: '0.5rem' }}>
                {filteredReports.map(report => (
                    <div key={report.id} className="card">
                        <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span className="text-xs" style={{
                                padding: '2px 8px',
                                borderRadius: '4px',
                                background: 'var(--accent)',
                                color: 'var(--primary)'
                            }}>
                                {report.type}
                            </span>
                            <StatusBadge status={report.status} />
                        </div>
                        <h3 className="text-sm font-bold" style={{ marginBottom: '0.5rem' }}>{report.title}</h3>
                        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem', color: 'var(--text-muted)' }}>
                            <Clock size={14} />
                            <span className="text-xs">{report.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TabItem: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        style={{
            flex: 1,
            padding: '0.75rem',
            borderBottom: active ? '2px solid var(--primary)' : 'none',
            color: active ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: active ? 600 : 400,
        }}
    >
        {label}
    </button>
);

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
    let color = 'var(--text-muted)';
    let bg = 'var(--accent)';
    let text = '未知';

    switch (status) {
        case 'completed':
            color = 'var(--success)';
            bg = '#dcfce7';
            text = '已生成';
            break;
        case 'pending':
            color = 'var(--warning)';
            bg = '#fef3c7';
            text = '生成中';
            break;
        case 'overdue':
            color = 'var(--danger)';
            bg = '#fee2e2';
            text = '已超时';
            break;
    }

    return (
        <span className="text-xs" style={{ color, background: bg, padding: '2px 8px', borderRadius: '10px' }}>
            {text}
        </span>
    );
};
