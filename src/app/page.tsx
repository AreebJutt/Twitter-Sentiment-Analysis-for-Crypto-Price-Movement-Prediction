'use client';

import { useState, useEffect } from 'react';
import { Search, Bell, Menu, User } from 'lucide-react';
import SentimentCard from '@/components/SentimentCard';
import TweetFeed from '@/components/TweetFeed';
import PriceChart from '@/components/PriceChart';
import SearchModal from '@/components/SearchModal';
import NotificationPanel from '@/components/NotificationPanel';
import UserMenu from '@/components/UserMenu';
import MarketsView from '@/components/MarketsView';
import AnalysisView from '@/components/AnalysisView';
import SettingsView from '@/components/SettingsView';

// Mock data for different cryptocurrencies
const CRYPTO_DATA: Record<string, any> = {
  BTC: { name: 'Bitcoin (BTC)', score: 82, sentiment: 'Bullish', change: 2.4, price: 42400 },
  ETH: { name: 'Ethereum (ETH)', score: 65, sentiment: 'Neutral', change: -0.5, price: 2250 },
  SOL: { name: 'Solana (SOL)', score: 91, sentiment: 'Bullish', change: 5.8, price: 98 },
  ADA: { name: 'Cardano (ADA)', score: 58, sentiment: 'Neutral', change: 1.2, price: 0.52 },
  DOGE: { name: 'Dogecoin (DOGE)', score: 75, sentiment: 'Bullish', change: 3.1, price: 0.08 },
  XRP: { name: 'Ripple (XRP)', score: 45, sentiment: 'Bearish', change: -1.8, price: 0.61 },
  MATIC: { name: 'Polygon (MATIC)', score: 88, sentiment: 'Bullish', change: 4.5, price: 0.89 },
  AVAX: { name: 'Avalanche (AVAX)', score: 79, sentiment: 'Bullish', change: 2.9, price: 36.5 },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [selectedCoins, setSelectedCoins] = useState(['BTC', 'ETH', 'SOL']);
  const [primaryCoin, setPrimaryCoin] = useState('BTC');

  // Close menus when clicking outside
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsNotificationOpen(false);
        setIsUserMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleSelectCoin = (coin: string) => {
    if (!selectedCoins.includes(coin)) {
      const newCoins = [...selectedCoins];
      newCoins[2] = coin; // Replace the third coin
      setSelectedCoins(newCoins);
    }
    setPrimaryCoin(coin);
    setActiveTab('Dashboard'); // Switch to dashboard when selecting a coin
  };

  const handleCoinClick = (coin: string) => {
    setPrimaryCoin(coin);
  };

  const primaryData = CRYPTO_DATA[primaryCoin];

  return (
    <main className="min-h-screen pb-8">
      {/* Header */}
      <header className="glass-panel sticky top-0 z-50 mb-8 rounded-none border-x-0 border-t-0">
        <div className="container flex-between py-4">
          <div className="flex-center gap-4">
            <div className="w-10 h-10 rounded-full flex-center font-bold text-xl" style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}>
              CS
            </div>
            <h1 className="text-2xl font-bold tracking-tight">CryptoSentiment</h1>
          </div>

          <div className="flex-center gap-6 hidden md:flex" style={{ display: 'flex' }}>
            {['Dashboard', 'Markets', 'Analysis', 'Settings'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`text-sm font-medium transition-colors ${activeTab === item ? 'text-accent-primary' : 'text-secondary'}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full transition-colors hover:bg-white/10"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              <Search size={20} className="text-secondary" />
            </button>
            <button
              onClick={() => setIsNotificationOpen(true)}
              className="p-2 rounded-full transition-colors hover:bg-white/10 relative"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              <Bell size={20} className="text-secondary" />
              <span className="absolute w-2 h-2 bg-red-500 rounded-full" style={{ top: '4px', right: '4px', background: 'var(--danger)' }}></span>
            </button>
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="p-2 rounded-full transition-colors hover:bg-white/10"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <User size={20} className="text-secondary" />
              </button>
              <UserMenu isOpen={isUserMenuOpen} onClose={() => setIsUserMenuOpen(false)} />
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        {/* Dashboard View */}
        {activeTab === 'Dashboard' && (
          <>
            {/* Hero Section */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">Market Overview</h2>
              <p className="text-secondary">Real-time sentiment analysis powered by AI. Click on any coin to view detailed analysis.</p>
            </div>

            {/* Key Metrics */}
            <div className="grid-cols-3 mb-8">
              {selectedCoins.map((coinSymbol) => {
                const data = CRYPTO_DATA[coinSymbol];
                return (
                  <div key={coinSymbol} onClick={() => handleCoinClick(coinSymbol)} style={{ cursor: 'pointer' }}>
                    <SentimentCard
                      coin={data.name}
                      score={data.score}
                      sentiment={data.sentiment as any}
                      change={data.change}
                      isActive={primaryCoin === coinSymbol}
                    />
                  </div>
                );
              })}
            </div>

            {/* Main Content Grid */}
            <div className="grid-main">
              <div className="flex-col gap-6">
                <PriceChart coin={primaryCoin} />

                <div className="glass-panel p-6">
                  <h3 className="text-xl mb-4">AI Prediction Model</h3>
                  <div className="flex-between p-4 glass-card mb-4" style={{ background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
                    <div>
                      <span className="text-sm text-secondary">Target Asset</span>
                      <div className="text-xl font-bold">{primaryData.name}</div>
                    </div>
                    <div>
                      <span className="text-sm text-secondary">Predicted Move</span>
                      <div className={`text-xl font-bold ${primaryData.sentiment === 'Bullish' ? 'text-success' : primaryData.sentiment === 'Bearish' ? 'text-danger' : 'text-secondary'}`}>
                        {primaryData.sentiment === 'Bullish' ? 'Upward' : primaryData.sentiment === 'Bearish' ? 'Downward' : 'Sideways'}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-secondary">Confidence</span>
                      <div className="text-xl font-bold text-accent-primary">{primaryData.score}%</div>
                    </div>
                    <div>
                      <span className="text-sm text-secondary">Timeframe</span>
                      <div className="text-xl font-bold">4H</div>
                    </div>
                  </div>
                  <p className="text-sm text-secondary">
                    Our AI model analyzes over 50,000 tweets per hour to predict short-term price movements.
                    Current sentiment for {primaryData.name} indicates {primaryData.sentiment.toLowerCase()} market conditions based on social media activity.
                  </p>
                </div>
              </div>

              <div className="flex-col">
                <TweetFeed coin={primaryCoin} />
              </div>
            </div>
          </>
        )}

        {/* Markets View */}
        {activeTab === 'Markets' && (
          <MarketsView onSelectCoin={handleSelectCoin} />
        )}

        {/* Analysis View */}
        {activeTab === 'Analysis' && (
          <AnalysisView />
        )}

        {/* Settings View */}
        {activeTab === 'Settings' && (
          <SettingsView />
        )}
      </div>

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCoin={handleSelectCoin}
      />
      <NotificationPanel
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      />
    </main>
  );
}
