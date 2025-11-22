'use client';

import { BarChart3, TrendingUp, MessageSquare, Clock } from 'lucide-react';

export default function AnalysisView() {
    return (
        <div className="flex-col gap-6">
            <div className="mb-4">
                <h2 className="text-4xl font-bold mb-2">Advanced Analysis</h2>
                <p className="text-secondary">Deep dive into sentiment analysis methodology and insights</p>
            </div>

            {/* Analysis Overview */}
            <div className="grid-cols-2 mb-6">
                <div className="glass-panel p-6">
                    <div className="flex-between mb-4">
                        <h3 className="text-xl font-bold">Sentiment Analysis Model</h3>
                        <BarChart3 className="text-accent-primary" size={24} />
                    </div>
                    <p className="text-sm text-secondary mb-4">
                        Our AI model uses advanced natural language processing to analyze Twitter sentiment in real-time.
                    </p>
                    <div className="flex-col gap-3">
                        <div className="flex-between p-3 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                            <span className="text-sm">Tweets Analyzed (24h)</span>
                            <span className="font-bold text-accent-primary">1.2M+</span>
                        </div>
                        <div className="flex-between p-3 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                            <span className="text-sm">Model Accuracy</span>
                            <span className="font-bold text-success">94.2%</span>
                        </div>
                        <div className="flex-between p-3 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                            <span className="text-sm">Update Frequency</span>
                            <span className="font-bold">Real-time</span>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-6">
                    <div className="flex-between mb-4">
                        <h3 className="text-xl font-bold">Key Metrics</h3>
                        <TrendingUp className="text-success" size={24} />
                    </div>
                    <p className="text-sm text-secondary mb-4">
                        Performance metrics of our sentiment-based prediction model.
                    </p>
                    <div className="flex-col gap-3">
                        <div className="flex-between p-3 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                            <span className="text-sm">Prediction Success Rate</span>
                            <span className="font-bold text-success">87.5%</span>
                        </div>
                        <div className="flex-between p-3 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                            <span className="text-sm">Avg Response Time</span>
                            <span className="font-bold text-accent-primary">0.3s</span>
                        </div>
                        <div className="flex-between p-3 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                            <span className="text-sm">Data Sources</span>
                            <span className="font-bold">Twitter, Reddit</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Methodology */}
            <div className="glass-panel p-6">
                <h3 className="text-xl font-bold mb-4">Analysis Methodology</h3>
                <div className="grid-cols-3 gap-4">
                    <div className="glass-card p-4">
                        <div className="w-12 h-12 rounded-full flex-center mb-3" style={{ background: 'rgba(59, 130, 246, 0.2)' }}>
                            <MessageSquare className="text-accent-primary" size={24} />
                        </div>
                        <h4 className="font-bold mb-2">1. Data Collection</h4>
                        <p className="text-sm text-secondary">
                            We collect tweets, posts, and comments from major crypto influencers and communities in real-time.
                        </p>
                    </div>

                    <div className="glass-card p-4">
                        <div className="w-12 h-12 rounded-full flex-center mb-3" style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
                            <BarChart3 className="text-accent-secondary" size={24} />
                        </div>
                        <h4 className="font-bold mb-2">2. Sentiment Scoring</h4>
                        <p className="text-sm text-secondary">
                            Advanced NLP algorithms analyze text to determine bullish, bearish, or neutral sentiment with confidence scores.
                        </p>
                    </div>

                    <div className="glass-card p-4">
                        <div className="w-12 h-12 rounded-full flex-center mb-3" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
                            <TrendingUp className="text-success" size={24} />
                        </div>
                        <h4 className="font-bold mb-2">3. Price Prediction</h4>
                        <p className="text-sm text-secondary">
                            Sentiment data is correlated with historical price movements to predict short-term price direction.
                        </p>
                    </div>
                </div>
            </div>

            {/* Recent Insights */}
            <div className="glass-panel p-6">
                <h3 className="text-xl font-bold mb-4">Recent Insights</h3>
                <div className="flex-col gap-3">
                    {[
                        { time: '2h ago', title: 'Bitcoin Sentiment Surge', desc: 'Detected 45% increase in positive sentiment following ETF news', sentiment: 'positive' },
                        { time: '5h ago', title: 'Ethereum Network Update', desc: 'Community reaction to upcoming protocol upgrade is overwhelmingly positive', sentiment: 'positive' },
                        { time: '8h ago', title: 'Market Correction Alert', desc: 'Sentiment indicators suggest potential short-term pullback across major assets', sentiment: 'negative' },
                        { time: '12h ago', title: 'Solana Ecosystem Growth', desc: 'Strong positive sentiment around new DeFi projects launching on Solana', sentiment: 'positive' },
                    ].map((insight, index) => (
                        <div
                            key={index}
                            className="glass-card p-4"
                            style={{ borderLeft: `4px solid ${insight.sentiment === 'positive' ? 'var(--success)' : 'var(--danger)'}` }}
                        >
                            <div className="flex-between mb-2">
                                <h4 className="font-bold">{insight.title}</h4>
                                <div className="flex items-center gap-2 text-xs text-secondary">
                                    <Clock size={14} />
                                    {insight.time}
                                </div>
                            </div>
                            <p className="text-sm text-secondary">{insight.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
