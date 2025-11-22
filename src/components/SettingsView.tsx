'use client';

import { useState } from 'react';
import { Bell, Moon, Globe, Shield, Zap, Mail } from 'lucide-react';

export default function SettingsView() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(true);
    const [autoRefresh, setAutoRefresh] = useState(true);

    return (
        <div className="flex-col gap-6">
            <div className="mb-4">
                <h2 className="text-4xl font-bold mb-2">Settings</h2>
                <p className="text-secondary">Customize your CryptoSentiment experience</p>
            </div>

            {/* Account Settings */}
            <div className="glass-panel p-6">
                <h3 className="text-xl font-bold mb-4">Account Settings</h3>
                <div className="flex-col gap-4">
                    <div className="flex-between p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full flex-center" style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}>
                                <span className="font-bold">JD</span>
                            </div>
                            <div>
                                <div className="font-bold">John Doe</div>
                                <div className="text-sm text-secondary">john@example.com</div>
                            </div>
                        </div>
                        <button className="btn-primary text-sm px-4 py-2">Edit Profile</button>
                    </div>

                    <div className="flex-between p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                        <div className="flex items-center gap-3">
                            <Mail className="text-accent-primary" size={20} />
                            <div>
                                <div className="font-bold">Email Preferences</div>
                                <div className="text-sm text-secondary">Manage email notifications</div>
                            </div>
                        </div>
                        <button className="text-sm text-accent-primary" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                            Configure
                        </button>
                    </div>

                    <div className="flex-between p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                        <div className="flex items-center gap-3">
                            <Shield className="text-success" size={20} />
                            <div>
                                <div className="font-bold">Security</div>
                                <div className="text-sm text-secondary">Password and 2FA settings</div>
                            </div>
                        </div>
                        <button className="text-sm text-accent-primary" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                            Manage
                        </button>
                    </div>
                </div>
            </div>

            {/* Preferences */}
            <div className="glass-panel p-6">
                <h3 className="text-xl font-bold mb-4">Preferences</h3>
                <div className="flex-col gap-4">
                    <div className="flex-between p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                        <div className="flex items-center gap-3">
                            <Bell className="text-accent-primary" size={20} />
                            <div>
                                <div className="font-bold">Push Notifications</div>
                                <div className="text-sm text-secondary">Receive alerts for sentiment changes</div>
                            </div>
                        </div>
                        <button
                            onClick={() => setNotifications(!notifications)}
                            className="relative w-12 h-6 rounded-full transition-colors"
                            style={{
                                background: notifications ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.2)',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <div
                                className="absolute w-5 h-5 rounded-full bg-white transition-transform"
                                style={{
                                    top: '2px',
                                    transform: notifications ? 'translateX(26px)' : 'translateX(2px)'
                                }}
                            />
                        </button>
                    </div>

                    <div className="flex-between p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                        <div className="flex items-center gap-3">
                            <Moon className="text-accent-secondary" size={20} />
                            <div>
                                <div className="font-bold">Dark Mode</div>
                                <div className="text-sm text-secondary">Use dark theme</div>
                            </div>
                        </div>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="relative w-12 h-6 rounded-full transition-colors"
                            style={{
                                background: darkMode ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.2)',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <div
                                className="absolute w-5 h-5 rounded-full bg-white transition-transform"
                                style={{
                                    top: '2px',
                                    transform: darkMode ? 'translateX(26px)' : 'translateX(2px)'
                                }}
                            />
                        </button>
                    </div>

                    <div className="flex-between p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                        <div className="flex items-center gap-3">
                            <Zap className="text-success" size={20} />
                            <div>
                                <div className="font-bold">Auto-Refresh Data</div>
                                <div className="text-sm text-secondary">Automatically update sentiment data</div>
                            </div>
                        </div>
                        <button
                            onClick={() => setAutoRefresh(!autoRefresh)}
                            className="relative w-12 h-6 rounded-full transition-colors"
                            style={{
                                background: autoRefresh ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.2)',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <div
                                className="absolute w-5 h-5 rounded-full bg-white transition-transform"
                                style={{
                                    top: '2px',
                                    transform: autoRefresh ? 'translateX(26px)' : 'translateX(2px)'
                                }}
                            />
                        </button>
                    </div>

                    <div className="flex-between p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                        <div className="flex items-center gap-3">
                            <Globe className="text-accent-primary" size={20} />
                            <div>
                                <div className="font-bold">Language</div>
                                <div className="text-sm text-secondary">English (US)</div>
                            </div>
                        </div>
                        <button className="text-sm text-accent-primary" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                            Change
                        </button>
                    </div>
                </div>
            </div>

            {/* Alert Settings */}
            <div className="glass-panel p-6">
                <h3 className="text-xl font-bold mb-4">Alert Thresholds</h3>
                <p className="text-sm text-secondary mb-4">Set custom thresholds for sentiment alerts</p>
                <div className="flex-col gap-4">
                    <div>
                        <div className="flex-between mb-2">
                            <span className="text-sm">Bullish Alert Threshold</span>
                            <span className="text-sm font-bold text-success">80%</span>
                        </div>
                        <input
                            type="range"
                            min="50"
                            max="100"
                            defaultValue="80"
                            className="w-full"
                            style={{ accentColor: 'var(--success)' }}
                        />
                    </div>

                    <div>
                        <div className="flex-between mb-2">
                            <span className="text-sm">Bearish Alert Threshold</span>
                            <span className="text-sm font-bold text-danger">30%</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="50"
                            defaultValue="30"
                            className="w-full"
                            style={{ accentColor: 'var(--danger)' }}
                        />
                    </div>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="glass-panel p-6" style={{ borderColor: 'var(--danger)' }}>
                <h3 className="text-xl font-bold mb-4 text-danger">Danger Zone</h3>
                <div className="flex-col gap-3">
                    <button
                        className="w-full p-3 rounded-lg text-left transition-colors hover:bg-red-500/10"
                        style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--danger)', cursor: 'pointer' }}
                    >
                        <div className="font-bold text-danger">Clear All Data</div>
                        <div className="text-xs text-secondary">Remove all saved preferences and history</div>
                    </button>

                    <button
                        className="w-full p-3 rounded-lg text-left transition-colors hover:bg-red-500/10"
                        style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--danger)', cursor: 'pointer' }}
                    >
                        <div className="font-bold text-danger">Delete Account</div>
                        <div className="text-xs text-secondary">Permanently delete your account and all data</div>
                    </button>
                </div>
            </div>
        </div>
    );
}
