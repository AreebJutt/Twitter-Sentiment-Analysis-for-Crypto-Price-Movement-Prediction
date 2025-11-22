import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface SentimentCardProps {
    coin: string;
    score: number; // 0 to 100
    sentiment: 'Bullish' | 'Bearish' | 'Neutral';
    change: number; // 24h change
    isActive?: boolean;
}

export default function SentimentCard({ coin, score, sentiment, change, isActive = false }: SentimentCardProps) {
    const isBullish = sentiment === 'Bullish';
    const isBearish = sentiment === 'Bearish';

    return (
        <div
            className="glass-card"
            style={{
                borderColor: isActive ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                borderWidth: isActive ? '2px' : '1px',
                boxShadow: isActive ? '0 0 20px rgba(59, 130, 246, 0.3)' : undefined
            }}
        >
            <div className="flex-between mb-4">
                <h3 className="text-xl">{coin}</h3>
                <span className={`text-sm ${change >= 0 ? 'text-success' : 'text-danger'}`}>
                    {change >= 0 ? '+' : ''}{change}%
                </span>
            </div>

            <div className="flex-center flex-col gap-2 mb-4">
                <div className="text-4xl font-bold text-gradient">
                    {score}
                </div>
                <div className="text-secondary text-sm">Sentiment Score</div>
            </div>

            <div className={`flex-center gap-2 ${isBullish ? 'text-success' : isBearish ? 'text-danger' : 'text-secondary'}`}>
                {isBullish ? <TrendingUp size={20} /> : isBearish ? <TrendingDown size={20} /> : <Minus size={20} />}
                <span className="font-bold">{sentiment}</span>
            </div>
        </div>
    );
}
