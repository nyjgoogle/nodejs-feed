import React, { type ReactNode } from 'react';
import { BottomNavBar } from './BottomNavBar';

interface AppLayoutProps {
    children: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="container">
            <main style={{ padding: '1rem', paddingBottom: 'calc(var(--bottom-nav-height) + 1rem)' }}>
                {children}
            </main>
            <BottomNavBar />
        </div>
    );
};
