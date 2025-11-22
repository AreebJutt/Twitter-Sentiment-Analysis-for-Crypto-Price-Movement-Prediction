'use client';

import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

interface MarketData {
    symbol: string;
    name: string;
    price: string;
    change24h: number;
    volume: string;
    marketCap: string;
    sentiment: number;
}

const MARKET_DATA: MarketData[] = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$42,400', change24h: 2.4, volume: '$28.5B', marketCap: '$828B', sentiment: 82 },
    { symbol: 'ETH', name: 'Ethereum', price: '$2,250', change24h: -0.5, volume: '$12.3B', marketCap: '$270B', sentiment: 65 },
    { symbol: 'SOL', name: 'Solana', price: '$98.50', change24h: 5.8, volume: '$2.1B', marketCap: '$42B', sentiment: 91 },
    { symbol: 'ADA', name: 'Cardano', price: '$0.52', change24h: 1.2, volume: '$450M', marketCap: '$18B', sentiment: 58 },
    { symbol: 'DOGE', name: 'Dogecoin', price: '$0.08', change24h: 3.1, volume: '$890M', marketCap: '$11B', sentiment: 75 },
    { symbol: 'XRP', name: 'Ripple', price: '$0.61', change24h: -1.8, volume: '$1.2B', marketCap: '$33B', sentiment: 45 },
    { symbol: 'MATIC', name: 'Polygon', price: '$0.89', change24h: 4.5, volume: '$520M', marketCap: '$8.2B', sentiment: 88 },
    { symbol: 'AVAX', name: 'Avalanche', price: '$36.50', change24h: 2.9, volume: '$680M', marketCap: '$13.5B', sentiment: 79 },
];

interface MarketsViewProps {
    onSelectCoin: (coin: string) => void;
}

export default function MarketsView({ onSelectCoin }: MarketsViewProps) {
    return (
        <div className="flex-col gap-6">
            <div className="mb-4">
                <h2 className="text-4xl font-bold mb-2">All Markets</h2>
                <p className="text-secondary">Real-time cryptocurrency market data with sentiment analysis</p>
            </div>

            {/* Market Stats */}
            <div className="grid-cols-3 mb-6">
                <div className="glass-card">
                    <div className="flex-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full flex-center" style={{ background: 'rgba(59, 130, 246, 0.2)' }}>
                            <DollarSign size={20} className="text-accent-primary" />
                        </div>
                        <div>
                            <div className="text-xs text-secondary">Total Market Cap</div>
                            <div className="text-xl font-bold">$1.2T</div>
                        </div>
                    </div>
                </div>

                <div className="glass-card">
                    <div className="flex-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full flex-center" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
                            <Activity size={20} className="text-success" />
                        </div>
                        <div>
                            <div className="text-xs text-secondary">24h Volume</div>
                            <div className="text-xl font-bold">$48.2B</div>
                        </div>
                    </div>
                </div>

                <div className="glass-card">
                    <div className="flex-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full flex-center" style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
                            <TrendingUp size={20} className="text-accent-secondary" />
                        </div>
                        <div>
                            <div className="text-xs text-secondary">Avg Sentiment</div>
                            <div className="text-xl font-bold">73%</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Markets Table */}
            <div className="glass-panel p-6">
                <h3 className="text-xl mb-4">Cryptocurrency Markets</h3>

                <div className="overflow-x-auto">
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <th className="text-left p-3 text-sm text-secondary font-medium">Asset</th>
                                <th className="text-right p-3 text-sm text-secondary font-medium">Price</th>
                                <th className="text-right p-3 text-sm text-secondary font-medium">24h Change</th>
                                <th className="text-right p-3 text-sm text-secondary font-medium">Volume</th>
                                <th className="text-right p-3 text-sm text-secondary font-medium">Market Cap</th>
                                <th className="text-right p-3 text-sm text-secondary font-medium">Sentiment</th>
                                <th className="text-right p-3 text-sm text-secondary font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MARKET_DATA.map((coin, index) => (
                                <tr
                                    key={coin.symbol}
                                    style={{
                                        borderBottom: index < MARKET_DATA.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                                        transition: 'background 0.2s'
                                    }}
                                    className="hover:bg-white/5"
                                >
                                    <td className="p-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full flex-center font-bold text-xs" style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}>
                                                {coin.symbol.substring(0, 2)}
                                            </div>
                                            <div>
                                                <div className="font-bold">{coin.symbol}</div>
                                                <div className="text-xs text-secondary">{coin.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right p-3 font-bold">{coin.price}</td>
                                    <td className="text-right p-3">
                                        <span className={`flex items-center justify-end gap-1 ${coin.change24h >= 0 ? 'text-success' : 'text-danger'}`}>
                                            {coin.change24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                                            {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
                                        </span>
                                    </td>
                                    <td className="text-right p-3 text-secondary">{coin.volume}</td>
                                    <td className="text-right p-3 text-secondary">{coin.marketCap}</td>
                                    <td className="text-right p-3">
                                        <div className="flex items-center justify-end gap-2">
                                            <div className="w-16 h-2 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                                                <div
                                                    className="h-full rounded-full"
                                                    style={{
                                                        width: `${coin.sentiment}%`,
                                                        background: coin.sentiment >= 70 ? 'var(--success)' : coin.sentiment >= 50 ? 'var(--accent-primary)' : 'var(--danger)'
                                                    }}
                                                />
                                            </div>
                                            <span className="text-sm font-bold">{coin.sentiment}</span>
                                        </div>
                                    </td>
                                    <td className="text-right p-3">
                                        <button
                                            onClick={() => onSelectCoin(coin.symbol)}
                                            className="btn-primary text-xs px-3 py-1"
                                            style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}
                                        >
                                            Analyze
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
