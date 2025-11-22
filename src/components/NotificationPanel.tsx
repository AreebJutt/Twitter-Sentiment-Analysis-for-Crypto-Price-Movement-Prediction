'use client';

import { X, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

interface NotificationPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

const NOTIFICATIONS = [
    {
        id: 1,
        type: 'bullish',
        title: 'Bitcoin Sentiment Spike',
        message: 'Sentiment score increased by 15 points in the last hour',
        time: '5m ago',
    },
    {
        id: 2,
        type: 'bearish',
        title: 'Ethereum Alert',
        message: 'Negative sentiment detected from major influencers',
        time: '12m ago',
    },
    {
        id: 3,
        type: 'info',
        title: 'New Analysis Available',
        message: 'Solana price prediction updated with 92% confidence',
        time: '1h ago',
    },
    {
        id: 4,
        type: 'bullish',
        title: 'Market Trend',
        message: 'Overall crypto sentiment is bullish across all major coins',
        time: '2h ago',
    },
];

export default function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={onClose}
        >
            <div
                className="glass-panel fixed right-0 top-0 h-full w-full max-w-md p-6"
                onClick={(e) => e.stopPropagation()}
                style={{ borderRadius: 0, animation: 'slideInRight 0.3s ease-out' }}
            >
                <div className="flex-between mb-6">
                    <h3 className="text-xl font-bold">Notifications</h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full transition-colors hover:bg-white/10"
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-col gap-4" style={{ maxHeight: 'calc(100vh - 120px)', overflow: 'auto' }}>
                    {NOTIFICATIONS.map((notif) => (
                        <div
                            key={notif.id}
                            className="glass-card p-4 cursor-pointer hover:bg-white/5"
                            style={{
                                borderLeft: `4px solid ${notif.type === 'bullish'
                                        ? 'var(--success)'
                                        : notif.type === 'bearish'
                                            ? 'var(--danger)'
                                            : 'var(--accent-primary)'
                                    }`,
                            }}
                        >
                            <div className="flex gap-3">
                                <div
                                    className="w-10 h-10 rounded-full flex-center flex-shrink-0"
                                    style={{
                                        background:
                                            notif.type === 'bullish'
                                                ? 'rgba(16, 185, 129, 0.2)'
                                                : notif.type === 'bearish'
                                                    ? 'rgba(239, 68, 68, 0.2)'
                                                    : 'rgba(59, 130, 246, 0.2)',
                                    }}
                                >
                                    {notif.type === 'bullish' ? (
                                        <TrendingUp size={20} className="text-success" />
                                    ) : notif.type === 'bearish' ? (
                                        <TrendingDown size={20} className="text-danger" />
                                    ) : (
                                        <AlertCircle size={20} className="text-accent-primary" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold mb-1">{notif.title}</div>
                                    <div className="text-sm text-secondary mb-2">{notif.message}</div>
                                    <div className="text-xs text-secondary">{notif.time}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
