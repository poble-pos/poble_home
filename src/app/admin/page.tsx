"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdmin } from '@/context/AdminContext';
import { Logo } from '@/components/Logo';
import {
    LayoutDashboard,
    Settings,
    Plus,
    Save,
    LogOut,
    ChevronRight,
    Eye,
    FileText,
    CheckCircle2,
    PanelLeftClose,
    PanelLeftOpen,
    Monitor,
    AlertCircle,
    PlayCircle,
    MessageSquare,
    Tablet,
    Layers,
    CreditCard,
    HelpCircle,
    Mail,
    Zap,
    ImageIcon,
    Upload,
    Trash2,
    Loader2,
    RefreshCw,
    Check,
    EyeOff,
    ChevronUp,
    ChevronDown,
    Info,
    ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
    const { isLoggedIn, setIsLoggedIn, siteContent, updateSection, updateContent, updateSectionContent, reorderSections, setSections, saveToStorage } = useAdmin();
    const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);
    const [selectedSectionId, setSelectedSectionId] = useState(siteContent.sections[0]?.id || null);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [localContent, setLocalContent] = useState<any>(null);
    const [isUpdatingSection, setIsUpdatingSection] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [localSections, setLocalSections] = useState(siteContent.sections);
    const [isUpdatingLayout, setIsUpdatingLayout] = useState(false);
    const [showLayoutSuccess, setShowLayoutSuccess] = useState(false);
    const [toast, setToast] = useState<{ message: string, type: 'success' | 'info' | 'error' } | null>(null);

    const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const selectedSection = siteContent.sections.find(s => s.id === selectedSectionId);

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/admin/login');
        }
    }, [isLoggedIn, router]);

    // 2. Sync local content when section changes
    useEffect(() => {
        if (selectedSection) {
            let content = JSON.parse(JSON.stringify(selectedSection.content)); // Deep copy to avoid mutating ref



            setLocalContent(content);
            setShowSuccess(false);
        }
    }, [selectedSectionId, siteContent, selectedSection]);

    // 3. Sync local sections when site content changes (e.g. after publish or initial load)
    useEffect(() => {
        setLocalSections(siteContent.sections);
        setShowLayoutSuccess(false);
    }, [siteContent.sections]);

    if (!isLoggedIn) return null;

    const handleSave = async () => {
        setIsSaving(true);
        await saveToStorage();
        setIsSaving(false);
        showToast("All changes published to live site!", "success");
    };

    const isModified = JSON.stringify(localContent) !== JSON.stringify(selectedSection?.content);
    const isLayoutModified = JSON.stringify(localSections) !== JSON.stringify(siteContent.sections);

    const handleUpdateLayout = async () => {
        setIsUpdatingLayout(true);
        setSections(localSections);
        setIsUpdatingLayout(false);
        setShowLayoutSuccess(true);
        showToast("Layout order updated in memory. Click Publish to save live.", "info");
        setTimeout(() => setShowLayoutSuccess(false), 3000);
    };

    const handleUpdateSection = async () => {
        if (!selectedSectionId || !localContent) return;
        setIsUpdatingSection(true);
        updateSectionContent(selectedSectionId, localContent);
        setIsUpdatingSection(false);
        setShowSuccess(true);
        showToast(`Section "${selectedSection?.name}" updated. Click Publish to save live.`, "info");
        setTimeout(() => setShowSuccess(false), 3000);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        router.push('/admin/login');
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLocalContent((prev: any) => ({ ...prev, [field]: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const getSectionIcon = (type: string) => {
        switch (type) {
            case 'Hero': return Monitor;
            case 'PainPoints': return AlertCircle;
            case 'InteractiveFeatures': return PlayCircle;
            case 'Testimonials': return MessageSquare;
            case 'Showcase': return Tablet;
            case 'Integrations': return Layers;
            case 'Pricing': return CreditCard;
            case 'FAQ': return HelpCircle;
            case 'ContactSection': return Mail;
            case 'CTASection': return Zap;
            default: return LayoutDashboard;
        }
    };

    const isImageField = (key: string, value: any) => {
        if (typeof value !== 'string') return false;
        const imageKeys = ['image', 'src', 'url', 'photo', 'logo', 'background'];
        const isUrlPattern = value.startsWith('data:image') || value.match(/\.(jpeg|jpg|gif|png|svg|webp)$/i) || value.includes('images.unsplash.com');
        return imageKeys.some(k => key.toLowerCase().includes(k)) || isUrlPattern;
    };

    return (
        <div className="min-h-screen bg-[#FDFCF9] flex font-sans text-poble-charcoal">
            {/* Sidebar */}
            <aside className={`bg-white border-r border-slate-100 flex flex-col h-screen sticky top-0 shrink-0 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-20' : 'w-72'}`}>
                <div className={`p-6 border-b border-slate-50 flex items-center ${isSidebarCollapsed ? 'justify-center' : 'justify-between'}`}>
                    {!isSidebarCollapsed && (
                        <div className="flex items-center gap-3 animate-in fade-in duration-300">
                            <Logo className="h-8" />
                            <span className="bg-poble-gold/10 text-poble-gold text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-widest shrink-0">Admin</span>
                        </div>
                    )}
                    {isSidebarCollapsed && (
                        <div className="w-10 h-10 bg-poble-gold/10 rounded-xl flex items-center justify-center animate-in zoom-in duration-300">
                            <img src="/logo-transparent.svg" alt="P" className="w-6 h-6" />
                        </div>
                    )}

                    <button
                        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                        className={`p-2 rounded-lg hover:bg-slate-50 text-slate-400 transition-all ${isSidebarCollapsed ? 'mt-2' : ''}`}
                        title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                    >
                        {isSidebarCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
                    </button>
                </div>

                <nav className={`flex-1 space-y-1 overflow-y-auto px-4 py-6 ${isSidebarCollapsed ? 'flex flex-col items-center' : ''}`}>
                    {!isSidebarCollapsed && (
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 ml-4 animate-in fade-in flex items-center justify-between pr-4">
                            <div className="flex items-center gap-2">
                                <span>Website Sections</span>
                                {isLayoutModified && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" title="Layout changed" />
                                )}
                            </div>
                            <span className="text-[8px] opacity-70">Sort & Visibility</span>
                        </div>
                    )}

                    {(!isSidebarCollapsed && (isLayoutModified || showLayoutSuccess)) && (
                        <div className="px-4 mb-4 animate-in slide-in-from-top-2 duration-300">
                            <button
                                onClick={handleUpdateLayout}
                                disabled={isUpdatingLayout}
                                className={`w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm
                                    ${showLayoutSuccess
                                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                                        : 'bg-poble-gold text-poble-charcoal hover:bg-poble-charcoal hover:text-white shadow-poble-gold/20'
                                    }`}
                            >
                                {isUpdatingLayout ? (
                                    <Loader2 className="w-3 h-3 animate-spin" />
                                ) : showLayoutSuccess ? (
                                    <>
                                        <Check className="w-3 h-3" />
                                        Layout Updated
                                    </>
                                ) : (
                                    <>
                                        <RefreshCw className="w-3 h-3" />
                                        Update Layout order
                                    </>
                                )}
                            </button>
                        </div>
                    )}

                    {[...localSections].sort((a, b) => a.order - b.order).map((section, idx, arr) => {
                        const Icon = getSectionIcon(section.type);
                        const isActive = selectedSectionId === section.id;
                        return (
                            <div key={section.id} className="relative group/nav mb-1">
                                <button
                                    onClick={() => setSelectedSectionId(section.id)}
                                    className={`flex items-center rounded-xl text-sm font-bold transition-all relative
                                        ${isSidebarCollapsed ? 'w-12 h-12 justify-center mx-auto' : 'w-full pl-4 pr-12 py-3 gap-3'}
                                        ${isActive
                                            ? 'bg-poble-gold/10 text-poble-gold shadow-sm shadow-poble-gold/5'
                                            : 'text-slate-700 hover:bg-slate-50 hover:text-poble-charcoal'
                                        }
                                        ${!section.visible ? 'opacity-50 grayscale' : ''}`}
                                    title={isSidebarCollapsed ? `${section.name} ${!section.visible ? '(Hidden)' : ''}` : ""}
                                >
                                    <Icon className={`shrink-0 transition-all ${isSidebarCollapsed ? 'w-6 h-6' : 'w-4 h-4 opacity-70'}`} />
                                    {!isSidebarCollapsed && <span className="truncate">{section.name}</span>}

                                    {!isSidebarCollapsed && isActive && (
                                        <div className="absolute right-10 w-1 h-1 rounded-full bg-poble-gold animate-pulse" />
                                    )}
                                </button>

                                {!isSidebarCollapsed && (
                                    <div className={`absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover/nav:opacity-100'}`}>
                                        <div className="flex flex-col">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Local Reorder Logic
                                                    const sorted = [...localSections].sort((a, b) => a.order - b.order);
                                                    if (idx > 0) {
                                                        const currentItem = sorted[idx];
                                                        const targetItem = sorted[idx - 1];
                                                        const newSections = localSections.map(s => {
                                                            if (s.id === currentItem.id) return { ...s, order: targetItem.order };
                                                            if (s.id === targetItem.id) return { ...s, order: currentItem.order };
                                                            return s;
                                                        });
                                                        setLocalSections(newSections);
                                                    }
                                                }}
                                                disabled={idx === 0}
                                                className={`p-0.5 rounded hover:bg-slate-100 text-slate-400 hover:text-poble-charcoal transition-colors disabled:opacity-0`}
                                                title="Move Up"
                                            >
                                                <ChevronUp className="w-3 h-3" />
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Local Reorder Logic
                                                    const sorted = [...localSections].sort((a, b) => a.order - b.order);
                                                    if (idx < arr.length - 1) {
                                                        const currentItem = sorted[idx];
                                                        const targetItem = sorted[idx + 1];
                                                        const newSections = localSections.map(s => {
                                                            if (s.id === currentItem.id) return { ...s, order: targetItem.order };
                                                            if (s.id === targetItem.id) return { ...s, order: currentItem.order };
                                                            return s;
                                                        });
                                                        setLocalSections(newSections);
                                                    }
                                                }}
                                                disabled={idx === arr.length - 1}
                                                className={`p-0.5 rounded hover:bg-slate-100 text-slate-400 hover:text-poble-charcoal transition-colors disabled:opacity-0`}
                                                title="Move Down"
                                            >
                                                <ChevronDown className="w-3 h-3" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setLocalSections(prev => prev.map(s => s.id === section.id ? { ...s, visible: !s.visible } : s));
                                            }}
                                            className={`p-1.5 rounded-lg transition-colors ${section.visible ? 'text-slate-400 hover:text-poble-gold hover:bg-poble-gold/5' : 'text-poble-gold bg-poble-gold/10'}`}
                                            title={section.visible ? "Hide Section" : "Show Section"}
                                        >
                                            {section.visible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    <div className={`mt-8 ${isSidebarCollapsed ? 'w-full h-px bg-slate-50 mb-6' : ''}`}>
                        {!isSidebarCollapsed && (
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 ml-4 animate-in fade-in">Settings</div>
                        )}
                        <button
                            className={`flex items-center rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all group
                                ${isSidebarCollapsed ? 'w-12 h-12 justify-center mx-auto' : 'w-full px-4 py-3 gap-3'}`}
                            title={isSidebarCollapsed ? "Platform Settings" : ""}
                        >
                            <Settings className={`shrink-0 ${isSidebarCollapsed ? 'w-6 h-6' : 'w-4 h-4 text-slate-400'}`} />
                            {!isSidebarCollapsed && <span>Settings</span>}
                        </button>
                    </div>
                </nav>

                <div className={`p-4 border-t border-slate-50 mt-auto ${isSidebarCollapsed ? 'flex justify-center' : ''}`}>
                    {isLayoutModified && !isSidebarCollapsed && (
                        <div className="mb-4 p-3 bg-amber-50 rounded-xl border border-amber-100 animate-in fade-in slide-in-from-bottom-2">
                            <p className="text-[10px] font-bold text-amber-700 mb-2 leading-tight">
                                Layout has unstaged changes.
                            </p>
                            <button
                                onClick={handleUpdateLayout}
                                className="w-full py-1.5 bg-amber-500 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-amber-600 transition-colors"
                            >
                                Stage Layout Changes
                            </button>
                        </div>
                    )}
                    <button
                        onClick={handleLogout}
                        className={`flex items-center rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all
                            ${isSidebarCollapsed ? 'w-12 h-12 justify-center' : 'w-full px-4 py-3 gap-3 justify-center'}`}
                        title={isSidebarCollapsed ? "Log Out" : ""}
                    >
                        <LogOut className={`shrink-0 ${isSidebarCollapsed ? 'w-6 h-6' : 'w-4 h-4'}`} />
                        {!isSidebarCollapsed && <span>Log Out</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-10 overflow-y-auto h-screen bg-slate-50/30">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight mb-2">Editor Panel</h1>
                        <p className="text-slate-600 font-bold text-sm tracking-tight">Modify live content without code deployments.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            target="_blank"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-all text-sm font-bold"
                        >
                            <Eye className="w-4 h-4" />
                            Live Preview
                        </Link>
                    </div>
                </header>

                <div className="w-full max-w-7xl mx-auto">
                    {/* Content Editor */}
                    <div className="w-full space-y-8">
                        {selectedSection ? (
                            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 shadow-sm">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-poble-gold/10 flex items-center justify-center text-poble-gold">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-black tracking-tight">{selectedSection.name}</h2>
                                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Type: {selectedSection.type}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all duration-500 ${isModified || showSuccess ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'}`}>
                                            {showSuccess ? (
                                                <>
                                                    <Check className="w-3 h-3" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest">Section Updated</span>
                                                </>
                                            ) : isModified ? (
                                                <>
                                                    <RefreshCw className="w-3 h-3 animate-spin-slow" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest">Unsaved Changes</span>
                                                </>
                                            ) : (
                                                <>
                                                    <CheckCircle2 className="w-3 h-3" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest">Sync Active</span>
                                                </>
                                            )}
                                        </div>
                                        {isModified && (
                                            <button
                                                onClick={handleUpdateSection}
                                                disabled={isUpdatingSection}
                                                className="flex items-center gap-2 px-6 py-2 rounded-full bg-poble-gold text-poble-charcoal hover:bg-poble-charcoal hover:text-white transition-all text-[11px] font-black shadow-lg shadow-poble-gold/10 active:scale-95 disabled:opacity-70 animate-in fade-in zoom-in duration-300"
                                            >
                                                {isUpdatingSection ? (
                                                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                                ) : (
                                                    <RefreshCw className="w-3.5 h-3.5" />
                                                )}
                                                Update Section
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    {/* Dynamic Field Rendering */}
                                    {Object.entries(localContent || {}).map(([key, value]) => (
                                        (typeof value === 'string' || Array.isArray(value)) && (
                                            <div key={key} className="space-y-2 group/field">
                                                <div className="flex items-center justify-between mb-1">
                                                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-700 ml-4 group-hover/field:text-poble-gold transition-colors">
                                                        {key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim()}
                                                    </label>
                                                    {isImageField(key, value) && (
                                                        <span className="text-[9px] font-bold text-slate-500 mr-2">Click image to preview</span>
                                                    )}
                                                </div>

                                                {isImageField(key, value) && typeof value === 'string' ? (
                                                    <div className="flex flex-col gap-4 p-6 rounded-[2rem] bg-slate-50 border-2 border-transparent hover:border-poble-gold/10 transition-all">
                                                        <div className="flex items-start gap-6">
                                                            <div
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    setPreviewImage(value as string);
                                                                }}
                                                                className="w-40 h-40 rounded-3xl overflow-hidden bg-white border border-slate-100 shrink-0 shadow-sm relative group cursor-pointer"
                                                            >
                                                                <img src={value as string} alt="Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                    <Eye className="w-8 h-8 text-white" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-1 space-y-4">
                                                                <p className="text-[11px] font-bold text-slate-600 leading-tight">Recommended: PNG, WEBP or JPEG.<br />Max size: 2MB for display performance.</p>
                                                                <div className="flex gap-2">
                                                                    <label className="cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-poble-charcoal text-xs font-black hover:bg-slate-50 transition-all shadow-sm">
                                                                        <Upload className="w-3.5 h-3.5" />
                                                                        Upload New
                                                                        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageChange(e, key)} />
                                                                    </label>
                                                                    <button
                                                                        title="Remove Image"
                                                                        onClick={() => setLocalContent((prev: any) => ({ ...prev, [key]: '' }))}
                                                                        className="p-2.5 rounded-full border border-slate-100 text-slate-500 hover:text-red-500 hover:bg-red-50 transition-all"
                                                                    >
                                                                        <Trash2 className="w-4 h-4" />
                                                                    </button>
                                                                </div>
                                                                <div className="relative">
                                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">
                                                                        <Layers className="w-3.5 h-3.5" />
                                                                    </div>
                                                                    <input
                                                                        type="text"
                                                                        value={value as string}
                                                                        placeholder="Or paste image URL here..."
                                                                        onChange={(e) => setLocalContent((prev: any) => ({ ...prev, [key]: e.target.value }))}
                                                                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-100 outline-none text-[11px] font-bold text-slate-700 placeholder:text-slate-300 focus:border-poble-gold/30 transition-all shadow-sm"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : Array.isArray(value) && value.every(v => typeof v === 'string') ? (
                                                    <div className="space-y-4">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                            {(value as string[]).map((imgUrl, idx) => (
                                                                <div key={idx} className="p-4 rounded-[1.8rem] bg-slate-50 border border-slate-100 space-y-3 group/img">
                                                                    <div className="flex items-center justify-between px-1">
                                                                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Image {idx + 1}</span>
                                                                        <button
                                                                            title="Remove Image"
                                                                            onClick={() => {
                                                                                const newArray = [...value];
                                                                                newArray.splice(idx, 1);
                                                                                setLocalContent((prev: any) => ({ ...prev, [key]: newArray }));
                                                                            }}
                                                                            className="p-1.5 rounded-lg hover:bg-red-50 text-slate-500 hover:text-red-500 transition-all"
                                                                        >
                                                                            <Trash2 className="w-3.5 h-3.5" />
                                                                        </button>
                                                                    </div>
                                                                    <div
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            e.stopPropagation();
                                                                            setPreviewImage(imgUrl);
                                                                        }}
                                                                        className="w-full aspect-square rounded-2xl overflow-hidden bg-white border border-slate-100 relative group cursor-pointer"
                                                                    >
                                                                        <img src={imgUrl} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={`Preview ${idx + 1}`} />
                                                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                            <Eye className="w-6 h-6 text-white" />
                                                                        </div>
                                                                    </div>
                                                                    <label className="cursor-pointer flex items-center justify-center gap-2 py-2 rounded-xl bg-white border border-slate-200 text-poble-charcoal text-[10px] font-black hover:bg-slate-50 transition-all shadow-sm">
                                                                        <Upload className="w-3 h-3" />
                                                                        Replace
                                                                        <input
                                                                            type="file"
                                                                            accept="image/*"
                                                                            className="hidden"
                                                                            onChange={(e) => {
                                                                                const file = e.target.files?.[0];
                                                                                if (file) {
                                                                                    const reader = new FileReader();
                                                                                    reader.onloadend = () => {
                                                                                        const newArray = [...value];
                                                                                        newArray[idx] = reader.result as string;
                                                                                        setLocalContent((prev: any) => ({ ...prev, [key]: newArray }));
                                                                                    };
                                                                                    reader.readAsDataURL(file);
                                                                                }
                                                                            }}
                                                                        />
                                                                    </label>
                                                                </div>
                                                            ))}
                                                            <button
                                                                onClick={() => setLocalContent((prev: any) => ({ ...prev, [key]: [...value, "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"] }))}
                                                                className="aspect-square flex flex-col items-center justify-center gap-3 rounded-[1.8rem] border-2 border-dashed border-slate-200 text-slate-600 hover:border-poble-gold/30 hover:text-poble-gold hover:bg-poble-gold/5 transition-all"
                                                            >
                                                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-poble-gold/10">
                                                                    <Plus className="w-5 h-5" />
                                                                </div>
                                                                <span className="text-[10px] font-black uppercase tracking-widest">Add To Gallery</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) : key.toLowerCase().includes('description') || key.toLowerCase().includes('subtitle') || (value as string).length > 60 ? (
                                                    <textarea
                                                        title={`Edit ${key}`}
                                                        placeholder={`Enter ${key}...`}
                                                        value={value as string}
                                                        onChange={(e) => setLocalContent((prev: any) => ({ ...prev, [key]: e.target.value }))}
                                                        className="w-full p-6 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-poble-gold/30 focus:bg-white outline-none transition-all font-bold text-poble-charcoal min-h-[120px] leading-relaxed shadow-inner"
                                                    />
                                                ) : Array.isArray(value) && value.length > 0 && typeof value[0] === 'object' ? (
                                                    <div className="space-y-4">
                                                        {(value as any[]).map((item, idx) => (
                                                            <details key={idx} className="group/accordion bg-white border border-slate-200 rounded-2xl overflow-hidden [&[open]]:ring-2 [&[open]]:ring-poble-gold/10 [&[open]]:bg-slate-50/50 transition-all">
                                                                <summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none hover:bg-slate-50 transition-colors">
                                                                    <div className="flex items-center gap-4">
                                                                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open/accordion:bg-poble-gold group-open/accordion:text-poble-charcoal text-slate-400 transition-colors">
                                                                            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-open/accordion:rotate-90" />
                                                                        </div>
                                                                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-600">
                                                                            {key.replace(/s$/, '').replace(/_/g, ' ')} <span className="text-slate-300">#{idx + 1}</span>
                                                                        </span>
                                                                    </div>
                                                                    <div
                                                                        role="button"
                                                                        tabIndex={0}
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            e.stopPropagation();
                                                                            if (confirm('Are you sure you want to delete this item?')) {
                                                                                const newArray = [...value];
                                                                                newArray.splice(idx, 1);
                                                                                setLocalContent((prev: any) => ({ ...prev, [key]: newArray }));
                                                                            }
                                                                        }}
                                                                        onKeyDown={(e) => {
                                                                            if (e.key === 'Enter' || e.key === ' ') {
                                                                                e.preventDefault();
                                                                                e.stopPropagation();
                                                                                if (confirm('Are you sure you want to delete this item?')) {
                                                                                    const newArray = [...value];
                                                                                    newArray.splice(idx, 1);
                                                                                    setLocalContent((prev: any) => ({ ...prev, [key]: newArray }));
                                                                                }
                                                                            }
                                                                        }}
                                                                        className="p-2 rounded-xl text-slate-300 hover:bg-red-50 hover:text-red-500 transition-all cursor-pointer"
                                                                        title="Delete Item"
                                                                    >
                                                                        <Trash2 className="w-4 h-4" />
                                                                    </div>
                                                                </summary>

                                                                <div className="p-6 border-t border-slate-100 grid grid-cols-1 gap-6 animate-in slide-in-from-top-2 duration-300">
                                                                    {Object.entries(item).map(([fieldKey, fieldValue]) => (
                                                                        <div key={fieldKey} className="space-y-2">
                                                                            <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 ml-2">
                                                                                {fieldKey.replace(/_/g, ' ')}
                                                                            </label>
                                                                            {isImageField(fieldKey, fieldValue) ? (
                                                                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                                                                    <div
                                                                                        onClick={(e) => {
                                                                                            e.preventDefault();
                                                                                            e.stopPropagation();
                                                                                            setPreviewImage(fieldValue as string);
                                                                                        }}
                                                                                        className="w-20 h-20 rounded-xl overflow-hidden bg-slate-50 shrink-0 cursor-pointer group/subimg"
                                                                                    >
                                                                                        <img src={fieldValue as string} alt="" className="w-full h-full object-cover group-hover/subimg:scale-110 transition-transform" />
                                                                                    </div>
                                                                                    <div className="flex-1 space-y-2">
                                                                                        <label className="cursor-pointer flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-50 border border-slate-100 text-poble-charcoal text-[10px] font-black hover:bg-poble-gold/10 transition-all">
                                                                                            <Upload className="w-3 h-3" />
                                                                                            Upload New
                                                                                            <input
                                                                                                type="file"
                                                                                                accept="image/*"
                                                                                                className="hidden"
                                                                                                onChange={(e) => {
                                                                                                    const file = e.target.files?.[0];
                                                                                                    if (file) {
                                                                                                        const reader = new FileReader();
                                                                                                        reader.onloadend = () => {
                                                                                                            const newArray = [...value];
                                                                                                            newArray[idx] = { ...item, [fieldKey]: reader.result as string };
                                                                                                            setLocalContent((prev: any) => ({ ...prev, [key]: newArray }));
                                                                                                        };
                                                                                                        reader.readAsDataURL(file);
                                                                                                    }
                                                                                                }}
                                                                                            />
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            title={`Edit ${fieldKey}`}
                                                                                            value={fieldValue as string}
                                                                                            placeholder="Image URL..."
                                                                                            onChange={(e) => {
                                                                                                const newArray = [...value];
                                                                                                newArray[idx] = { ...item, [fieldKey]: e.target.value };
                                                                                                setLocalContent((prev: any) => ({ ...prev, [key]: newArray }));
                                                                                            }}
                                                                                            className="w-full px-3 py-1.5 rounded-lg border border-slate-100 text-[9px] font-bold outline-none focus:border-poble-gold/30"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            ) : (typeof fieldValue === 'string' && (fieldValue.length > 60 || fieldKey.toLowerCase().includes('desc') || fieldKey.toLowerCase().includes('ans'))) ? (
                                                                                <textarea
                                                                                    title={`Edit ${fieldKey}`}
                                                                                    placeholder={`Enter ${fieldKey}...`}
                                                                                    value={fieldValue as string}
                                                                                    onChange={(e) => {
                                                                                        const newArray = [...value];
                                                                                        newArray[idx] = { ...item, [fieldKey]: e.target.value };
                                                                                        setLocalContent((prev: any) => ({ ...prev, [key]: newArray }));
                                                                                    }}
                                                                                    className="w-full px-5 py-3 rounded-2xl bg-white border border-slate-100 outline-none text-xs font-bold text-poble-charcoal focus:border-poble-gold/30 transition-all min-h-[100px] shadow-sm"
                                                                                />
                                                                            ) : Array.isArray(fieldValue) ? ( // Enhanced Array Editor
                                                                                <div className="space-y-4 p-5 bg-slate-50/50 rounded-3xl border border-slate-100">
                                                                                    <div className="flex items-center justify-between mb-2">
                                                                                        <label className="text-xs font-black uppercase tracking-widest text-slate-500">
                                                                                            {fieldKey.replace(/_/g, ' ')} <span className="text-slate-300 ml-1">({fieldValue.length}/3)</span>
                                                                                        </label>
                                                                                        {fieldValue.length < 3 && (
                                                                                            <button
                                                                                                onClick={() => {
                                                                                                    const newArray = [...value];
                                                                                                    const currentSubArray = [...(newArray[idx][fieldKey] || [])];
                                                                                                    currentSubArray.push("https://images.unsplash.com/photo-1554118811-1e0d58224f24"); // Default placeholder
                                                                                                    newArray[idx] = { ...item, [fieldKey]: currentSubArray };
                                                                                                    setLocalContent((prev: any) => ({ ...prev, [key]: newArray }));
                                                                                                }}
                                                                                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-poble-charcoal hover:border-poble-gold hover:text-poble-gold transition-all shadow-sm active:scale-95"
                                                                                            >
                                                                                                <Plus className="w-3.5 h-3.5" />
                                                                                                Add Image
                                                                                            </button>
                                                                                        )}
                                                                                    </div>

                                                                                    <div className="grid grid-cols-1 gap-4">
                                                                                        {fieldValue.map((subItem, subIdx) => (
                                                                                            <div key={subIdx} className="group relative flex gap-5 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-poble-gold/20 transition-all">
                                                                                                <div
                                                                                                    className="w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 shrink-0 cursor-pointer relative"
                                                                                                    onClick={(e) => {
                                                                                                        e.preventDefault();
                                                                                                        e.stopPropagation();
                                                                                                        setPreviewImage(subItem as string);
                                                                                                    }}
                                                                                                    title="Click to Expand"
                                                                                                >
                                                                                                    <img src={subItem as string} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                                                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                                                                                        <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div className="flex-1 flex flex-col justify-center space-y-3">
                                                                                                    <div className="flex items-center gap-3">
                                                                                                        <label className="cursor-pointer flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 text-[11px] font-bold hover:bg-poble-gold hover:text-poble-charcoal hover:border-poble-gold transition-all group/upload">
                                                                                                            <Upload className="w-3.5 h-3.5 group-hover/upload:scale-110 transition-transform" />
                                                                                                            Upload Image
                                                                                                            <input
                                                                                                                type="file"
                                                                                                                accept="image/*"
                                                                                                                className="hidden"
                                                                                                                onChange={(e) => {
                                                                                                                    const file = e.target.files?.[0];
                                                                                                                    if (file) {
                                                                                                                        const reader = new FileReader();
                                                                                                                        reader.onloadend = () => {
                                                                                                                            const newArray = [...value];
                                                                                                                            const currentSubArray = [...(newArray[idx][fieldKey])];
                                                                                                                            currentSubArray[subIdx] = reader.result as string;
                                                                                                                            newArray[idx] = { ...item, [fieldKey]: currentSubArray };
                                                                                                                            setLocalContent((prev: any) => ({ ...prev, [key]: newArray }));
                                                                                                                        };
                                                                                                                        reader.readAsDataURL(file);
                                                                                                                    }
                                                                                                                }}
                                                                                                            />
                                                                                                        </label>

                                                                                                        <button
                                                                                                            onClick={() => {
                                                                                                                const newArray = [...value];
                                                                                                                const currentSubArray = [...(newArray[idx][fieldKey])];
                                                                                                                currentSubArray.splice(subIdx, 1);
                                                                                                                newArray[idx] = { ...item, [fieldKey]: currentSubArray };
                                                                                                                setLocalContent((prev: any) => ({ ...prev, [key]: newArray }));
                                                                                                            }}
                                                                                                            className="p-2.5 rounded-xl bg-white border border-slate-100 text-slate-400 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all"
                                                                                                            title="Remove Image"
                                                                                                        >
                                                                                                            <Trash2 className="w-4 h-4" />
                                                                                                        </button>
                                                                                                    </div>

                                                                                                    <div className="relative group/link">
                                                                                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/link:text-poble-gold transition-colors">
                                                                                                            <ImageIcon className="w-3.5 h-3.5" />
                                                                                                        </div>
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="Or paste image URL..."
                                                                                                            value={subItem as string}
                                                                                                            onChange={(e) => {
                                                                                                                const newArray = [...value];
                                                                                                                const currentSubArray = [...(newArray[idx][fieldKey])];
                                                                                                                currentSubArray[subIdx] = e.target.value;
                                                                                                                newArray[idx] = { ...item, [fieldKey]: currentSubArray };
                                                                                                                setLocalContent((prev: any) => ({ ...prev, [key]: newArray }));
                                                                                                            }}
                                                                                                            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-transparent text-[10px] font-medium text-slate-600 focus:bg-white focus:border-poble-gold/30 focus:text-poble-charcoal outline-none transition-all"
                                                                                                        />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            ) : (
                                                                                <input
                                                                                    type="text"
                                                                                    title={`Edit ${fieldKey}`}
                                                                                    placeholder={`Enter ${fieldKey}...`}
                                                                                    value={fieldValue as any}
                                                                                    onChange={(e) => {
                                                                                        const newArray = [...value];
                                                                                        newArray[idx] = { ...item, [fieldKey]: e.target.value };
                                                                                        setLocalContent((prev: any) => ({ ...prev, [key]: newArray }));
                                                                                    }}
                                                                                    className="w-full px-5 py-3 rounded-xl bg-white border border-slate-100 outline-none text-xs font-bold text-poble-charcoal focus:border-poble-gold/30 transition-all shadow-sm"
                                                                                />
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </details>
                                                        ))}
                                                        <button
                                                            onClick={() => {
                                                                const template = { ...value[0] };
                                                                // Clear values in template
                                                                Object.keys(template).forEach(k => {
                                                                    if (typeof template[k] === 'string') template[k] = '';
                                                                    if (typeof template[k] === 'boolean') template[k] = true;
                                                                });
                                                                setLocalContent((prev: any) => ({ ...prev, [key]: [...value, template] }));
                                                            }}
                                                            className="w-full py-4 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 text-xs font-black hover:border-poble-gold/30 hover:text-poble-gold hover:bg-poble-gold/5 transition-all flex items-center justify-center gap-2"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                            Add New {key.replace(/s$/, '').replace(/_/g, ' ')}
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="relative group/input">
                                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/input:text-poble-gold transition-colors">
                                                            <FileText className="w-4 h-4" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            title={`Edit ${key}`}
                                                            placeholder={`Enter ${key.replace(/_/g, ' ')}...`}
                                                            value={value as string}
                                                            onChange={(e) => setLocalContent((prev: any) => ({ ...prev, [key]: e.target.value }))}
                                                            className="w-full pl-14 pr-6 py-5 rounded-[1.5rem] bg-slate-50 border-2 border-transparent focus:border-poble-gold/10 focus:bg-white outline-none transition-all font-black text-poble-charcoal shadow-inner"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>

                        ) : (
                            <div className="h-[400px] bg-slate-100/50 rounded-[2.5rem] border border-dashed border-slate-200 flex items-center justify-center flex-col gap-4 text-slate-400">
                                <LayoutDashboard className="w-12 h-12 opacity-20" />
                                <p className="font-bold">Select a section to begin editing</p>
                            </div>
                        )}
                    </div>

                </div>
            </main>

            {/* Preview Image Modal */}
            {
                previewImage && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-black/80 animate-in fade-in duration-300 backdrop-blur-sm"
                        onClick={() => setPreviewImage(null)}
                    >
                        <button
                            title="Close Preview"
                            className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
                            onClick={() => setPreviewImage(null)}
                        >
                            <Plus className="w-10 h-10 rotate-45" />
                        </button>
                        <div
                            className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={previewImage}
                                alt="Large Preview"
                                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-500"
                            />
                        </div>
                    </div>
                )
            }

            {/* Global Unsaved Changes Bar */}
            {
                (isModified || isLayoutModified) && (
                    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 animate-in slide-in-from-bottom-8 duration-500 flex flex-col items-center w-full max-w-xl px-4">
                        <div className="bg-poble-charcoal text-white px-8 py-5 rounded-[2.5rem] shadow-2xl flex items-center gap-8 border border-white/10 backdrop-blur-xl w-full justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                                    <AlertCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-black tracking-tight">Stage: Unsaved Changes</p>
                                    <p className="text-[10px] text-white/50 font-black uppercase tracking-widest">
                                        {isModified && "Content"}
                                        {isModified && isLayoutModified && " & "}
                                        {isLayoutModified && "Layout"} modified
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => {
                                        if (isModified) setLocalContent(selectedSection?.content);
                                        if (isLayoutModified) setLocalSections(siteContent.sections);
                                        showToast("Changes discarded.", "info");
                                    }}
                                    className="px-5 py-2 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all text-[10px] font-black uppercase tracking-widest"
                                >
                                    Discard
                                </button>
                                <button
                                    onClick={async () => {
                                        setIsSaving(true);

                                        // 1. Calculate the target state snapshot directly
                                        const nextSections = isLayoutModified ? localSections : siteContent.sections;
                                        const finalSections = nextSections.map(s =>
                                            (isModified && s.id === selectedSectionId)
                                                ? { ...s, content: localContent }
                                                : s
                                        );
                                        const finalState = { ...siteContent, sections: finalSections };

                                        // 2. Update global context (for UI consistency / preview)
                                        if (isLayoutModified) setSections(localSections);
                                        if (isModified && selectedSectionId) updateSectionContent(selectedSectionId, localContent);

                                        // 3. Persist specific snapshot immediately
                                        await saveToStorage(finalState);
                                        setIsSaving(false);
                                        showToast("All changes published to live site!", "success");
                                    }}
                                    disabled={isSaving}
                                    className="px-6 py-2.5 rounded-full bg-poble-gold text-poble-charcoal hover:bg-white transition-all text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group disabled:opacity-50"
                                >
                                    {isSaving ? (
                                        <>
                                            <div className="w-3 h-3 border-2 border-poble-charcoal/30 border-t-poble-charcoal rounded-full animate-spin"></div>
                                            <span>Publishing...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Publish All</span>
                                            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Toast System */}
            {
                toast && (
                    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top-8 duration-300">
                        <div className={`px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 border ${toast.type === 'success'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                            : toast.type === 'info'
                                ? 'bg-blue-50 text-blue-700 border-blue-100'
                                : 'bg-red-50 text-red-700 border-red-100'
                            }`}>
                            {toast.type === 'success' ? (
                                <Check className="w-4 h-4" />
                            ) : (
                                <Info className="w-4 h-4" />
                            )}
                            <span className="text-sm font-bold tracking-tight">{toast.message}</span>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
