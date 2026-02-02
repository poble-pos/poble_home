"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_SITE_CONTENT, SiteConfig, SiteSection } from '@/config/site-content';

interface AdminContextType {
    siteContent: SiteConfig;
    updateSection: (id: string, updates: Partial<SiteSection>) => void;
    updateContent: (sectionId: string, field: string, value: any) => void;
    updateSectionContent: (sectionId: string, newContent: any) => void;
    addSection: (type: string) => string;
    deleteSection: (id: string) => void;
    reorderSections: (id: string, direction: 'up' | 'down') => void;
    setSections: (sections: SiteSection[]) => void;
    saveToStorage: (data?: SiteConfig) => Promise<void>;
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
    const [siteContent, setSiteContent] = useState<SiteConfig>(INITIAL_SITE_CONTENT);
    const contentRef = React.useRef(siteContent);

    // Keep ref in sync with state
    useEffect(() => {
        contentRef.current = siteContent;
    }, [siteContent]);

    // Initial load from API (File System)
    useEffect(() => {
        const loadContent = async () => {
            try {
                const res = await fetch('/api/admin/content');
                if (!res.ok) throw new Error('Failed to load content');

                const parsed = await res.json() as SiteConfig;

                // Auto-migration for Pricing Section (image -> images)
                parsed.sections = parsed.sections.map(section => {
                    if (section.type === 'Pricing' && Array.isArray(section.content.carousel_items)) {
                        const migratedItems = section.content.carousel_items.map((item: any) => {
                            if (item.image && !item.images) {
                                const newItem = { ...item, images: [item.image] };
                                delete newItem.image;
                                return newItem;
                            }
                            return item;
                        });
                        return { ...section, content: { ...section.content, carousel_items: migratedItems } };
                    }
                    return section;
                });

                setSiteContent(parsed);
                contentRef.current = parsed;
            } catch (e) {
                console.error("Failed to load saved content", e);
            }
        };
        loadContent();
    }, []);



    const updateSection = (id: string, updates: Partial<SiteSection>) => {
        setSiteContent(prev => ({
            ...prev,
            sections: prev.sections.map(s => s.id === id ? { ...s, ...updates } : s)
        }));
    };

    const updateContent = (sectionId: string, field: string, value: any) => {
        setSiteContent(prev => ({
            ...prev,
            sections: prev.sections.map(s =>
                s.id === sectionId
                    ? { ...s, content: { ...s.content, [field]: value } }
                    : s
            )
        }));
    };

    const updateSectionContent = (sectionId: string, newContent: any) => {
        setSiteContent(prev => ({
            ...prev,
            sections: prev.sections.map(s =>
                s.id === sectionId
                    ? { ...s, content: newContent }
                    : s
            )
        }));
    };

    const addSection = (type: string) => {
        const newId = `${type.toLowerCase()}-${Date.now()}`;
        const newSection: SiteSection = {
            id: newId,
            type: type as any,
            name: `${type} Section`,
            visible: true,
            order: siteContent.sections.length,
            content: {
                title: `New ${type} Component`,
                subtitle: "Update this description in the inspector.",
                ctaText: "Learn More",
                ctaLink: "#"
            }
        };
        setSiteContent(prev => ({
            ...prev,
            sections: [...prev.sections, newSection]
        }));
        return newId;
    };

    const reorderSections = (id: string, direction: 'up' | 'down') => {
        setSiteContent(prev => {
            const sorted = [...prev.sections].sort((a, b) => a.order - b.order);
            const index = sorted.findIndex(s => s.id === id);

            if (index === -1) return prev;

            const targetIndex = direction === 'up' ? index - 1 : index + 1;
            if (targetIndex < 0 || targetIndex >= sorted.length) return prev;

            const currentItem = sorted[index];
            const targetItem = sorted[targetIndex];

            // Swap orders immutably
            const newSections = prev.sections.map(s => {
                if (s.id === currentItem.id) {
                    return { ...s, order: targetItem.order };
                }
                if (s.id === targetItem.id) {
                    return { ...s, order: currentItem.order };
                }
                return s;
            });

            return { ...prev, sections: newSections };
        });
    };

    const deleteSection = (id: string) => {
        setSiteContent(prev => ({
            ...prev,
            sections: prev.sections.filter(s => s.id !== id)
        }));
    };

    const setSections = (sections: SiteSection[]) => {
        setSiteContent(prev => ({ ...prev, sections }));
    };

    const saveToStorage = async (dataOverride?: SiteConfig) => {
        const dataToSave = dataOverride || contentRef.current;
        try {
            const res = await fetch('/api/admin/content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSave)
            });
            if (!res.ok) throw new Error('Failed to save to disk');
        } catch (e) {
            console.error("Failed to save content", e);
            alert("Failed to save changes. Check console for details.");
        }
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AdminContext.Provider value={{ siteContent, updateSection, updateContent, updateSectionContent, addSection, deleteSection, reorderSections, setSections, saveToStorage, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AdminContext.Provider>
    );
}

export function useAdmin() {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
}
