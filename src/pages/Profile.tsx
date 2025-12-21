import React from 'react';
import { Settings, ChevronRight, LogOut, MessageSquare, Bell } from 'lucide-react';

export const Profile: React.FC = () => {
    return (
        <div className="flex-col" style={{ gap: '1.5rem' }}>
            {/* Header / Profile Card */}
            <div className="card flex-center" style={{ justifyContent: 'flex-start', gap: '1rem', padding: '1.5rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#e2e8f0' }} />
                <div className="flex-col">
                    <span className="font-bold" style={{ fontSize: '1.125rem' }}>用户 8848</span>
                    <span className="text-xs text-muted">管理员</span>
                </div>
            </div>

            {/* Menu List */}
            <div className="card" style={{ padding: '0.5rem' }}>
                <MenuItem icon={<Bell size={20} />} label="消息通知" />
                <MenuItem icon={<MessageSquare size={20} />} label="意见反馈" />
                <MenuItem icon={<Settings size={20} />} label="系统设置" />
            </div>

            <div className="card" style={{ padding: '0.5rem' }}>
                <MenuItem icon={<LogOut size={20} />} label="退出登录" danger />
            </div>
        </div>
    );
};

const MenuItem: React.FC<{ icon: React.ReactNode; label: string; danger?: boolean }> = ({ icon, label, danger }) => (
    <button
        className="flex-center"
        style={{
            width: '100%',
            justifyContent: 'space-between',
            padding: '1rem',
            borderBottom: '1px solid var(--accent)'
        }}
    >
        <div className="flex-center" style={{ gap: '1rem', color: danger ? 'var(--danger)' : 'var(--text-primary)' }}>
            {icon}
            <span>{label}</span>
        </div>
        <ChevronRight size={16} className="text-muted" />
    </button>
);
