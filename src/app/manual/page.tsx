/**
 * @file ManualPage.tsx
 * @description Comprehensive operational guide for Poble POS.
 * Features multi-language support (KO/EN) and technical documentation patterns.
 */

"use client";

import {
    Book,
    HelpCircle,
    Monitor,
    PanelLeftClose,
    PanelLeftOpen,
    Printer,
    Search,
    Settings,
} from "lucide-react";
import Link from "next/link";
import React, { useMemo, useState } from "react";

import { Container } from "@/components/site/Container";
import { Eyebrow } from "@/components/site/Eyebrow";
import { PageShell } from "@/components/site/PageShell";
import { useInquiry } from "@/context/InquiryContext";

type Language = "ko" | "en";

const MANUAL_DATA = {
    ko: [
        {
            id: "getting-started",
            title: "시작하기",
            icon: <Book className="w-5 h-5" />,
            items: [
                {
                    id: "intro",
                    title: "poble POS 소개",
                    content: (
                        <div className="space-y-4">
                            <p>Welcome to <span className="font-logo">poble</span> POS. <span className="font-logo">poble</span> is the most intuitive POS system designed for modern hospitality businesses.</p>
                            <p>This manual guides you through every step from installation to daily operations and troubleshooting.</p>
                            <ul className="list-disc pl-5 space-y-2 text-black/55">
                                <li><strong>직관적인 디자인:</strong> 교육 없이 누구나 바로 사용할 수 있습니다.</li>
                                <li><strong>강력한 통합:</strong> Uber Eats, Stripe, Tyro 등 주요 서비스와 연동됩니다.</li>
                                <li><strong>실시간 관리:</strong> 언제 어디서나 매장 현황을 확인할 수 있습니다.</li>
                            </ul>
                        </div>
                    )
                },
                {
                    id: "account-setup",
                    title: "계정 설정 및 로그인",
                    content: (
                        <div className="space-y-4">
                            <p>poble POS를 사용하기 위해서는 관리자 계정이 필요합니다. 계정 생성은 영업팀을 통해 진행되거나 온라인 가입 페이지에서 가능합니다.</p>
                            <div className="bg-[#F9F8F3] p-5 rounded-2xl border border-black/10">
                                <h4 className="font-medium tracking-tight mb-2">로그인 단계:</h4>
                                <ol className="list-decimal pl-5 space-y-1 text-black/55">
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
            id: "features",
            title: "주요 기능",
            icon: <Monitor className="w-5 h-5" />,
            items: [
                {
                    id: "taking-orders",
                    title: "주문 접수 및 테이블 관리",
                    content: (
                        <div className="space-y-4">
                            <p>테이블 맵을 통해 매장의 전체 상황을 한눈에 파악하고 주문을 관리할 수 있습니다.</p>
                            <ul className="list-disc pl-5 space-y-2 text-black/55">
                                <li><strong>테이블 선택:</strong> 원하는 테이블을 탭하여 주문을 시작하세요.</li>
                                <li><strong>메뉴 선택:</strong> 카테고리별로 정리된 메뉴를 터치하여 추가합니다. 옵션(Modifier) 창이 자동으로 팝업됩니다.</li>
                                <li><strong>주문 전송:</strong> &apos;Send&apos; 버튼을 누르면 주방 프린터로 주문서가 전송됩니다.</li>
                            </ul>
                        </div>
                    )
                },
                {
                    id: "payments",
                    title: "결제 처리",
                    content: (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {[
                                { title: "카드 결제", desc: "연동된 Tyro 또는 Stripe 단말기로 금액이 자동 전송됩니다." },
                                { title: "현금 결제", desc: "받은 금액을 입력하면 거스름돈이 자동으로 계산됩니다." },
                                { title: "더치 페이", desc: "인원수별 또는 메뉴별로 간편하게 분할 결제할 수 있습니다." }
                            ].map((subItem, idx) => (
                                <div key={idx} className="p-5 bg-[#F9F8F3] border border-black/10 rounded-2xl">
                                    <h5 className="font-medium tracking-tight mb-1">{subItem.title}</h5>
                                    <p className="text-sm text-black/55">{subItem.desc}</p>
                                </div>
                            ))}
                        </div>
                    )
                }
            ]
        },
        {
            id: "hardware",
            title: "하드웨어 설정",
            icon: <Printer className="w-5 h-5" />,
            items: [
                {
                    id: "printers",
                    title: "프린터 연결",
                    content: (
                        <div className="space-y-4">
                            <p>영수증 및 주방 프린터를 설정하는 방법입니다. poble은 Epson 및 Star Micronics 프린터를 지원합니다.</p>
                            <div className="bg-[#F1EDE5] p-5 rounded-2xl border border-black/10 text-sm text-black/70">
                                <strong className="text-[#8B735C]">주의:</strong> 프린터와 iPad가 동일한 Wi-Fi 네트워크에 연결되어 있어야 합니다.
                            </div>
                            <ol className="list-decimal pl-5 space-y-2 text-black/55">
                                <li>설정 &gt; 프린터 메뉴로 이동합니다.</li>
                                <li>&apos;프린터 검색&apos;을 눌러 사용 가능한 프린터를 찾습니다.</li>
                                <li>프린터를 선택하고 역할을 지정합니다 (예: 계산대, 주방, 바).</li>
                            </ol>
                        </div>
                    )
                },
                {
                    id: "ipad-stand",
                    title: "iPad 스탠드 설치",
                    content: (
                        <p>
                            안정적인 사용을 위해 전용 스탠드 사용을 권장합니다.
                            자세한 제품 정보는 <Link href="/hardware" className="text-[#8B735C] underline underline-offset-2 hover:text-black">하드웨어 스토어</Link>를 확인하세요.
                        </p>
                    )
                }
            ]
        },
        {
            id: "integrations",
            title: "외부 연동",
            icon: <Settings className="w-5 h-5" />,
            items: [
                {
                    id: "delivery",
                    title: "배달 앱 연동 (Uber Eats)",
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
            id: "getting-started",
            title: "Getting Started",
            icon: <Book className="w-5 h-5" />,
            items: [
                {
                    id: "intro",
                    title: "Introduction to poble POS",
                    content: (
                        <div className="space-y-4">
                            <p>Welcome to <span className="font-logo">poble</span> POS. <span className="font-logo">poble</span> is the most intuitive POS system designed for modern hospitality businesses.</p>
                            <p>This manual guides you through every step from installation to daily operations and troubleshooting.</p>
                            <ul className="list-disc pl-5 space-y-2 text-black/55">
                                <li><strong>Intuitive Design:</strong> Anyone can use it immediately without training.</li>
                                <li><strong>Powerful Integrations:</strong> Connect with major services like Uber Eats, Stripe, and Tyro.</li>
                                <li><strong>Real-time Management:</strong> Check your store status anytime, anywhere.</li>
                            </ul>
                        </div>
                    )
                },
                {
                    id: "account-setup",
                    title: "Account Setup & Login",
                    content: (
                        <div className="space-y-4">
                            <p>To use poble POS, you need an administrator account. Account creation is done through our sales team or via the online sign-up page.</p>
                            <div className="bg-[#F9F8F3] p-5 rounded-2xl border border-black/10">
                                <h4 className="font-medium tracking-tight mb-2">Login Steps:</h4>
                                <ol className="list-decimal pl-5 space-y-1 text-black/55">
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
            id: "features",
            title: "Key Features",
            icon: <Monitor className="w-5 h-5" />,
            items: [
                {
                    id: "taking-orders",
                    title: "Order Taking & Table Management",
                    content: (
                        <div className="space-y-4">
                            <p>Grasp the entire store situation at a glance through the table map and manage orders.</p>
                            <ul className="list-disc pl-5 space-y-2 text-black/55">
                                <li><strong>Table Selection:</strong> Tap a table to start an order.</li>
                                <li><strong>Menu Selection:</strong> Tap menus organized by category to add them. A modifier window pops up automatically.</li>
                                <li><strong>Send Order:</strong> Press the &apos;Send&apos; button to transmit the order ticket to the kitchen printer.</li>
                            </ul>
                        </div>
                    )
                },
                {
                    id: "payments",
                    title: "Payment Processing",
                    content: (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {[
                                { title: "Card Payment", desc: "Amount is automatically sent to the connected Tyro or Stripe terminal." },
                                { title: "Cash Payment", desc: "Enter the received amount and change is calculated automatically." },
                                { title: "Split Pay", desc: "Easily split payments by number of people or by menu items." }
                            ].map((subItem, idx) => (
                                <div key={idx} className="p-5 bg-[#F9F8F3] border border-black/10 rounded-2xl">
                                    <h5 className="font-medium tracking-tight mb-1">{subItem.title}</h5>
                                    <p className="text-sm text-black/55">{subItem.desc}</p>
                                </div>
                            ))}
                        </div>
                    )
                }
            ]
        },
        {
            id: "hardware",
            title: "Hardware Setup",
            icon: <Printer className="w-5 h-5" />,
            items: [
                {
                    id: "printers",
                    title: "Printer Connection",
                    content: (
                        <div className="space-y-4">
                            <p>How to configure receipt and kitchen printers. poble supports Epson and Star Micronics printers.</p>
                            <div className="bg-[#F1EDE5] p-5 rounded-2xl border border-black/10 text-sm text-black/70">
                                <strong className="text-[#8B735C]">Note:</strong> The printer and iPad must be connected to the same Wi-Fi network.
                            </div>
                            <ol className="list-decimal pl-5 space-y-2 text-black/55">
                                <li>Go to Settings &gt; Printer menu.</li>
                                <li>Tap &apos;Search Printers&apos; to find available printers.</li>
                                <li>Select a printer and assign a role (e.g., Cashier, Kitchen, Bar).</li>
                            </ol>
                        </div>
                    )
                },
                {
                    id: "ipad-stand",
                    title: "iPad Stand Installation",
                    content: (
                        <p>
                            We recommend using a dedicated stand for stable use.
                            Check the <Link href="/hardware" className="text-[#8B735C] underline underline-offset-2 hover:text-black">Hardware Store</Link> for detailed product information.
                        </p>
                    )
                }
            ]
        },
        {
            id: "integrations",
            title: "Integrations",
            icon: <Settings className="w-5 h-5" />,
            items: [
                {
                    id: "delivery",
                    title: "Delivery App Integration (Uber Eats)",
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
        eyebrow: "도움말",
        subtitle: "poble POS의 모든 기능을 마스터하세요. 설치부터 고급 기능까지 상세한 가이드를 제공합니다",
        searchPlaceholder: "궁금한 기능을 검색하세요 (예: 프린터)",
        categories: "Categories",
        needHelp: "Need Help?",
        contactSupport: "고객지원 문의",
        noResults: "검색 결과가 없습니다.",
        searchResults: "검색 결과"
    },
    en: {
        eyebrow: "Support",
        subtitle: "Master every feature of poble POS. Detailed guides from installation to advanced functions",
        searchPlaceholder: "Search for help (e.g. Printer)",
        categories: "Categories",
        needHelp: "Need Help?",
        contactSupport: "Contact Support",
        noResults: "No results found.",
        searchResults: "Search results"
    }
};

function ManualArticle({
    item,
    index,
    sectionTitle,
}: {
    item: { id: string; title: string; content: React.ReactNode };
    index: number;
    sectionTitle?: string;
}) {
    return (
        <article
            id={item.id}
            className="rounded-3xl border border-black/10 bg-white p-8 shadow-xl shadow-black/5 md:p-10"
        >
            {sectionTitle && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B735C]">
                    {sectionTitle}
                </p>
            )}
            <h3 className="mb-6 flex items-center gap-3 text-xl font-medium tracking-tight">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F1EDE5] text-sm tabular-nums text-black/45">
                    {index + 1}
                </span>
                {item.title}
            </h3>
            <div className="space-y-4 leading-relaxed text-black/70">
                {item.content}
            </div>
        </article>
    );
}

export default function ManualPage() {
    const [activeSection, setActiveSection] = useState("getting-started");
    const [language, setLanguage] = useState<Language>("en");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [query, setQuery] = useState("");
    const { openInquiry } = useInquiry();

    const currentSections = MANUAL_DATA[language];
    const t = UI_TEXTS[language];

    const searchResults = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return null;

        return currentSections.flatMap((section) =>
            section.items
                .filter(
                    (item) =>
                        item.title.toLowerCase().includes(q) ||
                        section.title.toLowerCase().includes(q),
                )
                .map((item) => ({ item, sectionTitle: section.title })),
        );
    }, [currentSections, query]);

    return (
        <PageShell>
            {/* Hero */}
            <section className="relative overflow-hidden pb-14 pt-32 md:pb-20 md:pt-40">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#E8D7C3_0%,transparent_55%)]" />

                <Container className="text-center">
                    <Eyebrow>{t.eyebrow}</Eyebrow>
                    <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.04em] md:text-7xl">
                        {language === "ko" ? (
                            <>사용자 <span className="text-black/45">매뉴얼</span></>
                        ) : (
                            <>User <span className="text-black/45">Manual.</span></>
                        )}
                    </h1>
                    <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-black/55 md:text-lg">
                        {t.subtitle}
                    </p>

                    <div className="mx-auto mt-9 flex max-w-xl flex-col items-center gap-3 sm:flex-row">
                        <div className="group relative w-full flex-grow">
                            <input
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={t.searchPlaceholder}
                                aria-label={t.searchPlaceholder}
                                className="h-12 w-full rounded-full border border-black/10 bg-white/60 pl-12 pr-5 text-sm text-black placeholder-black/40 backdrop-blur transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/10 md:h-14 md:text-base"
                            />
                            <Search className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40 transition-colors group-focus-within:text-black md:h-5 md:w-5" />
                        </div>

                        <button
                            onClick={() => setLanguage((l) => (l === "ko" ? "en" : "ko"))}
                            className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white/60 px-5 text-sm font-medium text-black transition hover:bg-white md:h-14"
                        >
                            {language === "ko" ? "🇦🇺 English" : "🇰🇷 한국어"}
                        </button>
                    </div>
                </Container>
            </section>

            {/* Body */}
            <section className="pb-24 md:pb-32">
                <Container className="relative flex flex-col gap-8 md:flex-row">
                    <aside
                        className={`flex-shrink-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                            isSidebarOpen
                                ? "md:w-64 opacity-100"
                                : "md:w-0 opacity-0 md:opacity-100"
                        }`}
                    >
                        <div className="sticky top-24 w-full space-y-1.5 md:w-64">
                            <div className="mb-4 flex items-center justify-between px-4">
                                <p className="text-xs uppercase tracking-[0.18em] text-black/45">
                                    {t.categories}
                                </p>
                                <button
                                    onClick={() => setIsSidebarOpen(false)}
                                    aria-label="Hide categories"
                                    className="hidden rounded-md p-1 text-black/40 transition-colors hover:text-black md:block"
                                >
                                    <PanelLeftClose className="h-4 w-4" />
                                </button>
                            </div>

                            {currentSections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => {
                                        setActiveSection(section.id);
                                        setQuery("");
                                    }}
                                    aria-current={
                                        activeSection === section.id && !searchResults
                                            ? "true"
                                            : undefined
                                    }
                                    className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                                        activeSection === section.id && !searchResults
                                            ? "bg-[#111111] text-white"
                                            : "text-black/55 hover:bg-white hover:text-black hover:shadow-sm"
                                    }`}
                                >
                                    {section.icon}
                                    <span className="whitespace-nowrap">{section.title}</span>
                                </button>
                            ))}

                            <div className="mt-8 border-t border-black/10 pt-8">
                                <p className="mb-4 px-4 text-xs uppercase tracking-[0.18em] text-black/45">
                                    {t.needHelp}
                                </p>
                                <button
                                    type="button"
                                    onClick={openInquiry}
                                    className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-black/55 transition-colors hover:text-[#8B735C]"
                                >
                                    <HelpCircle className="h-5 w-5" />
                                    <span className="whitespace-nowrap">{t.contactSupport}</span>
                                </button>
                            </div>
                        </div>
                    </aside>

                    <div className="min-w-0 flex-1 transition-all duration-500">
                        {!isSidebarOpen && (
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="group mb-6 hidden items-center gap-2 text-black/40 transition-colors hover:text-black md:flex"
                            >
                                <PanelLeftOpen className="h-5 w-5 transition-transform group-hover:scale-110" />
                                <span className="text-sm font-medium">Show Categories</span>
                            </button>
                        )}

                        {searchResults ? (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="border-b border-black/10 pb-6">
                                    <h2 className="text-3xl font-medium tracking-[-0.02em] md:text-4xl">
                                        {t.searchResults}
                                        <span className="ml-3 text-black/35">
                                            &ldquo;{query.trim()}&rdquo;
                                        </span>
                                    </h2>
                                </div>

                                {searchResults.length === 0 ? (
                                    <p className="rounded-3xl border border-black/10 bg-white p-10 text-black/55">
                                        {t.noResults}
                                    </p>
                                ) : (
                                    <div className="space-y-8">
                                        {searchResults.map(({ item, sectionTitle }, index) => (
                                            <ManualArticle
                                                key={item.id}
                                                item={item}
                                                index={index}
                                                sectionTitle={sectionTitle}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            currentSections.map((section) => (
                                <div
                                    key={section.id}
                                    className={
                                        activeSection === section.id
                                            ? "block space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
                                            : "hidden"
                                    }
                                >
                                    <div className="border-b border-black/10 pb-6">
                                        <h2 className="text-3xl font-medium tracking-[-0.02em] md:text-4xl">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="space-y-8">
                                        {section.items.map((item, index) => (
                                            <ManualArticle
                                                key={item.id}
                                                item={item}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </Container>
            </section>
        </PageShell>
    );
}
