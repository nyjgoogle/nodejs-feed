import React from 'react';
import { Home, FileText, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const BottomNavBar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: 'var(--bottom-nav-height)',
            backgroundColor: 'var(--card)',
            borderTop: '1px solid var(--accent)',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: 50,
            maxWidth: '600px', // Match container max-width
            margin: '0 auto', // Center it if on desktop
        }}>
            <NavItem
                icon={<Home size={24} />}
                label="首页"
                active={isActive('/')}
                onClick={() => navigate('/')}
            />
            <NavItem
                icon={<FileText size={24} />}
                label="报告"
                active={isActive('/report')}
                onClick={() => navigate('/report')}
            />
            <NavItem
                icon={<User size={24} />}
                label="我的"
                active={isActive('/profile')}
                onClick={() => navigate('/profile')}
            />
        </nav>
    );
};

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active: boolean;
    onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: active ? 'var(--primary)' : 'var(--text-muted)',
                gap: '4px',
                width: '100%',
                height: '100%',
                transition: 'color 0.2s',
            }}
        >
            {icon}
            <span className="text-xs">{label}</span>
        </button>
    );
};
