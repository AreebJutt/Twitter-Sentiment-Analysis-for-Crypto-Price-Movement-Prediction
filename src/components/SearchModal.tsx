'use client';

import { useState } from 'react';
import { X, Search, TrendingUp } from 'lucide-react';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectCoin: (coin: string) => void;
}

const POPULAR_COINS = [
    { symbol: 'BTC', name: 'Bitcoin', trend: '+2.4%' },
    { symbol: 'ETH', name: 'Ethereum', trend: '-0.5%' },
    { symbol: 'SOL', name: 'Solana', trend: '+5.8%' },
    { symbol: 'ADA', name: 'Cardano', trend: '+1.2%' },
    { symbol: 'DOGE', name: 'Dogecoin', trend: '+3.1%' },
    { symbol: 'XRP', name: 'Ripple', trend: '-1.8%' },
    { symbol: 'MATIC', name: 'Polygon', trend: '+4.5%' },
    { symbol: 'AVAX', name: 'Avalanche', trend: '+2.9%' },
];

export default function SearchModal({ isOpen, onClose, onSelectCoin }: SearchModalProps) {
    const [searchQuery, setSearchQuery] = useState('');

    if (!isOpen) return null;

    const filteredCoins = POPULAR_COINS.filter(
        (coin) =>
            coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelect = (symbol: string) => {
        onSelectCoin(symbol);
        setSearchQuery('');
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}
        >
            <div
                className="glass-panel p-6 w-full max-w-md mx-4"
                onClick={(e) => e.stopPropagation()}
                style={{ maxHeight: '80vh', overflow: 'auto' }}
            >
                <div className="flex-between mb-6">
                    <h3 className="text-xl font-bold">Search Cryptocurrency</h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full transition-colors hover:bg-white/10"
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="relative mb-6">
                    <Search
                        size={20}
                        className="absolute left-3 top-1/2"
                        style={{ transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}
                    />
                    <input
                        type="text"
                        placeholder="Search by name or symbol..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 pl-10 rounded-lg text-sm"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'var(--text-primary)',
                            outline: 'none',
                        }}
                        autoFocus
                    />
                </div>

                <div className="flex-col gap-2">
                    <div className="text-xs text-secondary mb-2 flex-center gap-2">
                        <TrendingUp size={14} />
                        Popular Cryptocurrencies
                    </div>
                    {filteredCoins.map((coin) => (
                        <button
                            key={coin.symbol}
                            onClick={() => handleSelect(coin.symbol)}
                            className="w-full p-3 rounded-lg text-left transition-all hover:bg-white/10"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                cursor: 'pointer',
                            }}
                        >
                            <div className="flex-between">
                                <div>
                                    <div className="font-bold">{coin.symbol}</div>
                                    <div className="text-xs text-secondary">{coin.name}</div>
                                </div>
                                <div
                                    className={`text-sm font-bold ${coin.trend.startsWith('+') ? 'text-success' : 'text-danger'
                                        }`}
                                >
                                    {coin.trend}
                                </div>
                            </div>
                        </button>
                    ))}
                    {filteredCoins.length === 0 && (
                        <div className="text-center text-secondary py-8">
                            No cryptocurrencies found
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
