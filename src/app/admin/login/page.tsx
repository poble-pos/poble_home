"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdmin } from '@/context/AdminContext';
import { Logo } from '@/components/Logo';
import { Lock, User, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function AdminLoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const { setIsLoggedIn } = useAdmin();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Tactical delay for "security feel"
        await new Promise(resolve => setTimeout(resolve, 800));

        // Simple hardcoded check for demo/reference
        // In production, this would be an API call to Supabase/Auth service
        if (username === 'admin' && password === 'poble123') {
            setIsLoggedIn(true);
            router.push('/admin');
        } else {
            setError('Invalid credentials. Please contact IT for access.');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F9F8F3] flex items-center justify-center p-6 font-sans" suppressHydrationWarning>
            <div className="w-full max-w-md" suppressHydrationWarning>
                {/* Brand Header */}
                <div className="text-center mb-10 flex flex-col items-center" suppressHydrationWarning>
                    <div className="mb-6" suppressHydrationWarning>
                        <Logo />
                    </div>
                    <h1 className="text-2xl font-black text-poble-charcoal tracking-tight">Admin Portal</h1>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mt-2">Secure Merchant Gateway</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 p-8 md:p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-poble-gold/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                    <form onSubmit={handleLogin} className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Authorized User</label>
                            <div className="relative">
                                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Username"
                                    className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-poble-gold/30 focus:bg-white outline-none transition-all font-bold text-poble-charcoal"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Access Key</label>
                            <div className="relative">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-poble-gold/30 focus:bg-white outline-none transition-all font-bold text-poble-charcoal font-mono"
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-[13px] font-bold text-center">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 rounded-full bg-teal-600 text-white font-black text-lg transition-all flex items-center justify-center gap-3 hover:bg-poble-charcoal hover:scale-[1.02] shadow-xl shadow-teal-600/10 active:scale-95 disabled:opacity-70"
                        >
                            {isLoading ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <>
                                    Log In
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer Links */}
                <div className="text-center mt-8 space-y-4">
                    <Link href="/" className="text-xs font-black text-slate-400 hover:text-poble-gold transition-colors uppercase tracking-widest">
                        Return to Public Homepage
                    </Link>
                    <div className="pt-4 flex items-center justify-center gap-6 opacity-40">
                        <span className="text-[9px] font-black uppercase tracking-widest">Local Server Status: <span className="text-emerald-500">Normal</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
