'use client';

import { User, Settings, BarChart3, LogOut } from 'lucide-react';

interface UserMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function UserMenu({ isOpen, onClose }: UserMenuProps) {
    if (!isOpen) return null;

    const menuItems = [
        { icon: User, label: 'Profile', action: () => console.log('Profile') },
        { icon: BarChart3, label: 'My Analytics', action: () => console.log('Analytics') },
        { icon: Settings, label: 'Settings', action: () => console.log('Settings') },
        { icon: LogOut, label: 'Logout', action: () => console.log('Logout') },
    ];

    return (
        <>
            <div
                className="fixed inset-0 z-40"
                onClick={onClose}
                style={{ background: 'transparent' }}
            />
            <div
                className="glass-panel absolute right-0 top-full mt-2 w-56 p-2 z-50"
                style={{ animation: 'fadeIn 0.2s ease-out' }}
            >
                <div className="p-3 mb-2 border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <div className="font-bold">John Doe</div>
                    <div className="text-xs text-secondary">john@example.com</div>
                </div>
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            item.action();
                            onClose();
                        }}
                        className="w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors hover:bg-white/10"
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                    >
                        <item.icon size={18} className="text-secondary" />
                        <span className="text-sm">{item.label}</span>
                    </button>
                ))}
            </div>
        </>
    );
}
