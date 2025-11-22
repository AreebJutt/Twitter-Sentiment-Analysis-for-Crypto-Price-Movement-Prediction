import { Twitter } from 'lucide-react';

interface Tweet {
    id: string;
    user: string;
    handle: string;
    content: string;
    sentiment: 'Positive' | 'Negative' | 'Neutral';
    time: string;
}

const MOCK_TWEETS: Record<string, Tweet[]> = {
    BTC: [
        { id: '1', user: 'CryptoKing', handle: '@cryptoking', content: 'Bitcoin looking extremely bullish on the 4h chart! #BTC', sentiment: 'Positive', time: '2m ago' },
        { id: '2', user: 'BearWhale', handle: '@bearwhale', content: 'Selling pressure increasing. Be careful out there.', sentiment: 'Negative', time: '5m ago' },
        { id: '3', user: 'SatoshiFan', handle: '@satoshibtc', content: 'Just bought the dip! LFG 🚀', sentiment: 'Positive', time: '12m ago' },
        { id: '4', user: 'MarketWatcher', handle: '@mktwatch', content: 'Consolidation phase continues for BTC.', sentiment: 'Neutral', time: '15m ago' },
    ],
    ETH: [
        { id: '1', user: 'EthMaxi', handle: '@ethmaxi', content: 'Ethereum merge anniversary! Still bullish on ETH', sentiment: 'Positive', time: '3m ago' },
        { id: '2', user: 'DeFiGuru', handle: '@defiguru', content: 'Gas fees are getting high again...', sentiment: 'Negative', time: '8m ago' },
        { id: '3', user: 'VitalikFan', handle: '@vitalikfan', content: 'ETH 2.0 staking rewards looking good', sentiment: 'Positive', time: '14m ago' },
        { id: '4', user: 'CryptoNews', handle: '@cryptonews', content: 'ETH holding support levels well', sentiment: 'Neutral', time: '20m ago' },
    ],
    SOL: [
        { id: '1', user: 'SolanaDaily', handle: '@solanadaily', content: 'Solana network performing flawlessly! 🚀', sentiment: 'Positive', time: '1m ago' },
        { id: '2', user: 'NFTCollector', handle: '@nftcollector', content: 'SOL NFTs are on fire right now!', sentiment: 'Positive', time: '6m ago' },
        { id: '3', user: 'TechAnalyst', handle: '@techanalyst', content: 'Solana breaking resistance levels', sentiment: 'Positive', time: '11m ago' },
        { id: '4', user: 'CryptoTrader', handle: '@cryptotrader', content: 'Taking profits on SOL here', sentiment: 'Neutral', time: '18m ago' },
    ],
};

interface TweetFeedProps {
    coin: string;
}

export default function TweetFeed({ coin }: TweetFeedProps) {
    const tweets = MOCK_TWEETS[coin] || MOCK_TWEETS.BTC;

    return (
        <div className="glass-panel p-6">
            <div className="flex-between mb-6">
                <h3 className="text-xl flex-center" style={{ gap: '0.5rem' }}>
                    <Twitter className="text-accent-primary" size={24} /> Live Feed
                </h3>
                <span className="text-xs text-secondary animate-pulse">● Live</span>
            </div>

            <div className="flex-col gap-4">
                {tweets.map((tweet) => (
                    <div key={tweet.id} className="glass-card p-4" style={{ borderLeft: `4px solid ${tweet.sentiment === 'Positive' ? 'var(--success)' : tweet.sentiment === 'Negative' ? 'var(--danger)' : 'var(--text-secondary)'}` }}>
                        <div className="flex-between mb-2">
                            <div className="flex-center" style={{ gap: '0.5rem' }}>
                                <span className="font-bold text-sm">{tweet.user}</span>
                                <span className="text-xs text-secondary">{tweet.handle}</span>
                            </div>
                            <span className="text-xs text-secondary">{tweet.time}</span>
                        </div>
                        <p className="text-sm mb-2">{tweet.content}</p>
                        <span className="text-xs px-2 py-1 rounded-full" style={{
                            backgroundColor: tweet.sentiment === 'Positive' ? 'rgba(16, 185, 129, 0.2)' : tweet.sentiment === 'Negative' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(148, 163, 184, 0.2)',
                            color: tweet.sentiment === 'Positive' ? 'var(--success)' : tweet.sentiment === 'Negative' ? 'var(--danger)' : 'var(--text-secondary)'
                        }}>
                            {tweet.sentiment}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
