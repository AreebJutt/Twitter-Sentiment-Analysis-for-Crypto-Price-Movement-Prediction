'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PriceChartProps {
    coin: string;
}

const generateChartData = (coin: string) => {
    const basePrice = coin === 'BTC' ? 42000 : coin === 'ETH' ? 2200 : coin === 'SOL' ? 95 : 1;
    const baseSentiment = coin === 'BTC' ? 65 : coin === 'ETH' ? 60 : coin === 'SOL' ? 85 : 50;

    return [
        { time: '10:00', price: basePrice, sentiment: baseSentiment },
        { time: '10:30', price: basePrice + (basePrice * 0.002), sentiment: baseSentiment + 5 },
        { time: '11:00', price: basePrice + (basePrice * 0.001), sentiment: baseSentiment + 3 },
        { time: '11:30', price: basePrice + (basePrice * 0.005), sentiment: baseSentiment + 10 },
        { time: '12:00', price: basePrice + (basePrice * 0.008), sentiment: baseSentiment + 15 },
        { time: '12:30', price: basePrice + (basePrice * 0.007), sentiment: baseSentiment + 13 },
        { time: '13:00', price: basePrice + (basePrice * 0.010), sentiment: baseSentiment + 17 },
    ];
};

export default function PriceChart({ coin }: PriceChartProps) {
    const data = generateChartData(coin);
    return (
        <div className="glass-panel p-6" style={{ height: '400px' }}>
            <div className="flex-between mb-6">
                <h3 className="text-xl">Price vs Sentiment Correlation</h3>
                <div className="flex-center gap-4">
                    <div className="flex-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ width: '12px', height: '12px', background: 'var(--accent-primary)' }}></span>
                        <span className="text-xs text-secondary">Price</span>
                    </div>
                    <div className="flex-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ width: '12px', height: '12px', background: 'var(--success)' }}></span>
                        <span className="text-xs text-secondary">Sentiment</span>
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorSentiment" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                    <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis yAxisId="left" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={['auto', 'auto']} />
                    <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
                    <Tooltip
                        contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        itemStyle={{ color: '#f8fafc' }}
                    />
                    <Area yAxisId="left" type="monotone" dataKey="price" stroke="#3b82f6" fillOpacity={1} fill="url(#colorPrice)" strokeWidth={2} />
                    <Area yAxisId="right" type="monotone" dataKey="sentiment" stroke="#10b981" fillOpacity={1} fill="url(#colorSentiment)" strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
