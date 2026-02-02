/**
 * @file ManualPage.tsx
 * @description Comprehensive operational guide for Poble POS.
 * Features multi-language support (KO/EN) and technical documentation patterns.
 */

"use client";

import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Search, Book, CreditCard, Monitor, Printer, Settings, HelpCircle, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import Link from 'next/link';

type Language = 'ko' | 'en';

const MANUAL_DATA = {
    ko: [
        {
            id: 'getting-started',
            title: '시작하기',
            icon: <Book className="w-5 h-5" />,
            items: [
                {
                    id: 'intro',
                    title: 'poble POS 소개',
                    content: (
                        <div className="space-y-4">
                            <p>Welcome to <span className="font-logo">poble</span> POS. <span className="font-logo">poble</span> is the most intuitive POS system designed for modern hospitality businesses.</p>
                            <p>This manual guides you through every step from installation to daily operations and troubleshooting.</p>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600">
                                <li><strong>직관적인 디자인:</strong> 교육 없이 누구나 바로 사용할 수 있습니다.</li>
                                <li><strong>강력한 통합:</strong> Uber Eats, Stripe, Tyro 등 주요 서비스와 연동됩니다.</li>
                                <li><strong>실시간 관리:</strong> 언제 어디서나 매장 현황을 확인할 수 있습니다.</li>
                            </ul>
                        </div>
                    )
                },
                {
                    id: 'account-setup',
                    title: '계정 설정 및 로그인',
                    content: (
                        <div className="space-y-4">
                            <p>poble POS를 사용하기 위해서는 관리자 계정이 필요합니다. 계정 생성은 영업팀을 통해 진행되거나 온라인 가입 페이지에서 가능합니다.</p>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <h4 className="font-bold mb-2">로그인 단계:</h4>
                                <ol className="list-decimal pl-5 space-y-1 text-slate-600">
                                    <li>poble 앱을 실행하거나 웹 대시보드에 접속하세요.</li>
                                    <li>등록된 이메일과 비밀번호를 입력하세요.</li>
                                    <li><strong>직원 PIN:</strong> 매장 내 POS 단말기에서는 4자리 핀 번호로 빠르게 로그인할 수 있습니다.</li>
                                </ol>
                            </div>
                        </div>
                    )
                }
            ]
        },
        {
            id: 'features',
            title: '주요 기능',
            icon: <Monitor className="w-5 h-5" />,
            items: [
                {
                    id: 'taking-orders',
                    title: '주문 접수 및 테이블 관리',
                    content: (
                        <div className="space-y-4">
                            <p>테이블 맵을 통해 매장의 전체 상황을 한눈에 파악하고 주문을 관리할 수 있습니다.</p>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600">
                                <li><strong>테이블 선택:</strong> 원하는 테이블을 탭하여 주문을 시작하세요.</li>
                                <li><strong>메뉴 선택:</strong> 카테고리별로 정리된 메뉴를 터치하여 추가합니다. 옵션(Modifier) 창이 자동으로 팝업됩니다.</li>
                                <li><strong>주문 전송:</strong> &apos;Send&apos; 버튼을 누르면 주방 프린터로 주문서가 전송됩니다.</li>
                            </ul>
                        </div>
                    )
                },
                {
                    id: 'payments',
                    title: '결제 처리',
                    content: (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {[
                                { title: '카드 결제', desc: '연동된 Tyro 또는 Stripe 단말기로 금액이 자동 전송됩니다.' },
                                { title: '현금 결제', desc: '받은 금액을 입력하면 거스름돈이 자동으로 계산됩니다.' },
                                { title: '더치 페이', desc: '인원수별 또는 메뉴별로 간편하게 분할 결제할 수 있습니다.' }
                            ].map((subItem, idx) => (
                                <div key={idx} className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-poble-charcoal mb-1">{subItem.title}</h5>
                                    <p className="text-sm text-slate-500">{subItem.desc}</p>
                                </div>
                            ))}
                        </div>
                    )
                }
            ]
        },
        {
            id: 'hardware',
            title: '하드웨어 설정',
            icon: <Printer className="w-5 h-5" />,
            items: [
                {
                    id: 'printers',
                    title: '프린터 연결',
                    content: (
                        <div className="space-y-4">
                            <p>영수증 및 주방 프린터를 설정하는 방법입니다. poble은 Epson 및 Star Micronics 프린터를 지원합니다.</p>
                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-orange-800 text-sm">
                                <strong>주의:</strong> 프린터와 iPad가 동일한 Wi-Fi 네트워크에 연결되어 있어야 합니다.
                            </div>
                            <ol className="list-decimal pl-5 space-y-2 text-slate-600">
                                <li>설정 &gt; 프린터 메뉴로 이동합니다.</li>
                                <li>&apos;프린터 검색&apos;을 눌러 사용 가능한 프린터를 찾습니다.</li>
                                <li>프린터를 선택하고 역할을 지정합니다 (예: 계산대, 주방, 바).</li>
                            </ol>
                        </div>
                    )
                },
                {
                    id: 'ipad-stand',
                    title: 'iPad 스탠드 설치',
                    content: (
                        <p>
                            안정적인 사용을 위해 전용 스탠드 사용을 권장합니다.
                            자세한 제품 정보는 <Link href="/hardware" className="text-blue-600 hover:underline">하드웨어 스토어</Link>를 확인하세요.
                        </p>
                    )
                }
            ]
        },
        {
            id: 'integrations',
            title: '외부 연동',
            icon: <Settings className="w-5 h-5" />,
            items: [
                {
                    id: 'delivery',
                    title: '배달 앱 연동 (Uber Eats)',
                    content: (
                        <div className="space-y-4">
                            <p>배달 주문을 POS에서 직접 확인하고 주방으로 보낼 수 있습니다.</p>
                            <p>연동 설정은 대시보드의 &apos;Integrations&apos; 메뉴에서 Uber Eats 로그인을 통해 활성화할 수 있습니다.</p>
                        </div>
                    )
                }
            ]
        }
    ],
    en: [
        {
            id: 'getting-started',
            title: 'Getting Started',
            icon: <Book className="w-5 h-5" />,
            items: [
                {
                    id: 'intro',
                    title: 'Introduction to poble POS',
                    content: (
                        <div className="space-y-4">
                            <p>Welcome to <span className="font-logo">poble</span> POS. <span className="font-logo">poble</span> is the most intuitive POS system designed for modern hospitality businesses.</p>
                            <p>This manual guides you through every step from installation to daily operations and troubleshooting.</p>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600">
                                <li><strong>Intuitive Design:</strong> Anyone can use it immediately without training.</li>
                                <li><strong>Powerful Integrations:</strong> Connect with major services like Uber Eats, Stripe, and Tyro.</li>
                                <li><strong>Real-time Management:</strong> Check your store status anytime, anywhere.</li>
                            </ul>
                        </div>
                    )
                },
                {
                    id: 'account-setup',
                    title: 'Account Setup & Login',
                    content: (
                        <div className="space-y-4">
                            <p>To use poble POS, you need an administrator account. Account creation is done through our sales team or via the online sign-up page.</p>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <h4 className="font-bold mb-2">Login Steps:</h4>
                                <ol className="list-decimal pl-5 space-y-1 text-slate-600">
                                    <li>Open the poble app or access the web dashboard.</li>
                                    <li>Enter your registered email and password.</li>
                                    <li><strong>Staff PIN:</strong> Log in quickly on POS terminals in-store using a 4-digit PIN.</li>
                                </ol>
                            </div>
                        </div>
                    )
                }
            ]
        },
        {
            id: 'features',
            title: 'Key Features',
            icon: <Monitor className="w-5 h-5" />,
            items: [
                {
                    id: 'taking-orders',
                    title: 'Order Taking & Table Management',
                    content: (
                        <div className="space-y-4">
                            <p>Grasp the entire store situation at a glance through the table map and manage orders.</p>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600">
                                <li><strong>Table Selection:</strong> Tap a table to start an order.</li>
                                <li><strong>Menu Selection:</strong> Tap menus organized by category to add them. A modifier window pops up automatically.</li>
                                <li><strong>Send Order:</strong> Press the &apos;Send&apos; button to transmit the order ticket to the kitchen printer.</li>
                            </ul>
                        </div>
                    )
                },
                {
                    id: 'payments',
                    title: 'Payment Processing',
                    content: (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {[
                                { title: 'Card Payment', desc: 'Amount is automatically sent to the connected Tyro or Stripe terminal.' },
                                { title: 'Cash Payment', desc: 'Enter the received amount and change is calculated automatically.' },
                                { title: 'Split Pay', desc: 'Easily split payments by number of people or by menu items.' }
                            ].map((subItem, idx) => (
                                <div key={idx} className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-poble-charcoal mb-1">{subItem.title}</h5>
                                    <p className="text-sm text-slate-500">{subItem.desc}</p>
                                </div>
                            ))}
                        </div>
                    )
                }
            ]
        },
        {
            id: 'hardware',
            title: 'Hardware Setup',
            icon: <Printer className="w-5 h-5" />,
            items: [
                {
                    id: 'printers',
                    title: 'Printer Connection',
                    content: (
                        <div className="space-y-4">
                            <p>How to configure receipt and kitchen printers. poble supports Epson and Star Micronics printers.</p>
                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-orange-800 text-sm">
                                <strong>Note:</strong> The printer and iPad must be connected to the same Wi-Fi network.
                            </div>
                            <ol className="list-decimal pl-5 space-y-2 text-slate-600">
                                <li>Go to Settings &gt; Printer menu.</li>
                                <li>Tap &apos;Search Printers&apos; to find available printers.</li>
                                <li>Select a printer and assign a role (e.g., Cashier, Kitchen, Bar).</li>
                            </ol>
                        </div>
                    )
                },
                {
                    id: 'ipad-stand',
                    title: 'iPad Stand Installation',
                    content: (
                        <p>
                            We recommend using a dedicated stand for stable use.
                            Check the <Link href="/hardware" className="text-blue-600 hover:underline">Hardware Store</Link> for detailed product information.
                        </p>
                    )
                }
            ]
        },
        {
            id: 'integrations',
            title: 'Integrations',
            icon: <Settings className="w-5 h-5" />,
            items: [
                {
                    id: 'delivery',
                    title: 'Delivery App Integration (Uber Eats)',
                    content: (
                        <div className="space-y-4">
                            <p>Check delivery orders directly on the POS and send them to the kitchen.</p>
                            <p>Integration settings can be enabled via Uber Eats login in the &apos;Integrations&apos; menu of the dashboard.</p>
                        </div>
                    )
                }
            ]
        }
    ]
};

const UI_TEXTS = {
    ko: {
        title: '사용자 매뉴얼',
        subtitle: 'poble POS의 모든 기능을 마스터하세요. 설치부터 고급 기능까지 상세한 가이드를 제공합니다',
        searchPlaceholder: '궁금한 기능을 검색하세요 (예: 프린터)',
        categories: 'Categories',
        needHelp: 'Need Help?',
        contactSupport: '고객지원 문의'
    },
    en: {
        title: 'User Manual',
        subtitle: 'Master every feature of poble POS. Detailed guides from installation to advanced functions',
        searchPlaceholder: 'Search for help (e.g. Printer)',
        categories: 'Categories',
        needHelp: 'Need Help?',
        contactSupport: 'Contact Support'
    }
};

export default function ManualPage() {
    const [activeSection, setActiveSection] = useState('getting-started');
    const [language, setLanguage] = useState<Language>('en');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const currentSections = MANUAL_DATA[language];
    const t = UI_TEXTS[language];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Header: User Manual */}
            <div className="bg-poble-charcoal text-white pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-28 right-6 md:right-12 z-10 hidden md:block">
                    <button
                        onClick={() => setLanguage(l => l === 'ko' ? 'en' : 'ko')}
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-base font-bold transition-all cursor-pointer"
                    >
                        {language === 'ko' ? '🇦🇺 English' : '🇰🇷 한국어'}
                    </button>
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-0">
                    <h1 className="text-5xl md:text-[4rem] lg:text-[4.5rem] font-black tracking-tighter leading-[0.95] font-heading">
                        {language === 'ko' ? (
                            <>사용자 <span className="text-slate-400">매뉴얼</span></>
                        ) : (
                            <>User <span className="text-slate-400">Manual</span></>
                        )}
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>

                    <div className="max-w-xl mx-auto flex items-center gap-3">
                        <div className="relative flex-grow group">
                            <input
                                type="text"
                                placeholder={t.searchPlaceholder}
                                className="w-full h-12 md:h-14 pl-10 md:pl-14 pr-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white placeholder-slate-400 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all font-medium text-sm md:text-base mb-0"
                            />
                            <Search className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400 group-focus-within:text-white transition-colors" />
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 relative">
                <aside
                    className={`flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden ${isSidebarOpen ? 'md:w-64 opacity-100' : 'md:w-0 opacity-0 md:opacity-100'
                        }`}
                >
                    <div className="sticky top-32 space-y-2 w-full md:w-64">
                        <div className="flex justify-between items-center px-4 mb-4">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.categories}</p>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="text-slate-400 hover:text-poble-charcoal p-1 rounded-md transition-all hidden md:block cursor-pointer"
                            >
                                <PanelLeftClose className="w-4 h-4" />
                            </button>
                        </div>

                        {currentSections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-bold text-sm cursor-pointer ${activeSection === section.id
                                    ? 'bg-poble-charcoal text-white shadow-lg'
                                    : 'text-slate-600 hover:bg-white hover:shadow-md hover:text-poble-charcoal'
                                    }`}
                            >
                                {section.icon}
                                <span className="whitespace-nowrap">{section.title}</span>
                            </button>
                        ))}

                        <div className="pt-8 mt-8 border-t border-slate-200">
                            <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t.needHelp}</p>
                            <Link href="/#contact" className="flex items-center gap-3 px-4 py-2 text-sm font-bold text-slate-600 hover:text-poble-gold transition-colors">
                                <HelpCircle className="w-5 h-5" />
                                <span className="whitespace-nowrap">{t.contactSupport}</span>
                            </Link>
                        </div>
                    </div>
                </aside>

                <div className="flex-1 min-w-0 transition-all duration-500">
                    {!isSidebarOpen && (
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="hidden md:flex items-center gap-2 mb-6 text-slate-400 hover:text-poble-charcoal transition-colors group cursor-pointer"
                        >
                            <PanelLeftOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-bold">Show Categories</span>
                        </button>
                    )}

                    {currentSections.map((section) => (
                        <div
                            key={section.id}
                            className={`space-y-8 ${activeSection === section.id ? 'block animate-in fade-in slide-in-from-bottom-4 duration-500' : 'hidden'}`}
                        >
                            <div className="mb-8 border-b border-slate-200 pb-6">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-poble-charcoal flex items-center gap-3 tracking-tight font-heading">
                                    {section.title}
                                </h2>
                            </div>

                            <div className="space-y-12">
                                {section.items.map((item, index) => (
                                    <article key={index} id={item.id} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] -z-0"></div>
                                        <h3 className="text-xl font-bold text-poble-charcoal mb-6 relative z-10 flex items-center gap-2 font-heading">
                                            <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center text-sm font-black">
                                                {index + 1}
                                            </span>
                                            {item.title}
                                        </h3>
                                        <div className="prose prose-slate prose-headings:font-bold prose-a:text-blue-600 space-y-4 relative z-10 text-slate-600 leading-relaxed">
                                            {item.content}
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
