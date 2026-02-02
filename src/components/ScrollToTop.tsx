"use client";

import { useEffect, useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

export const ScrollToTop = () => {
    const [scrollPosition, setScrollPosition] = useState<'top' | 'middle' | 'bottom'>('top');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            if (scrollY < 200) {
                setScrollPosition('top');
            } else if (scrollY + windowHeight > fullHeight - 200) {
                setScrollPosition('bottom');
            } else {
                setScrollPosition('middle');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (target: 'top' | 'bottom') => {
        window.scrollTo({
            top: target === 'top' ? 0 : document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    if (!isMounted) return null;

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center">
            <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col overflow-hidden shadow-xl backdrop-blur-md border 
                    ${scrollPosition === 'middle'
                        ? 'h-[84px] w-10 md:w-11 rounded-full bg-white/80 border-slate-200/60 gap-0'
                        : 'h-10 w-10 md:h-11 md:w-11 rounded-full gap-0'
                    }
                    ${scrollPosition === 'top' ? 'bg-poble-gold/5 border-poble-gold/60 text-poble-gold' : ''}
                    ${scrollPosition === 'bottom' ? 'bg-white/80 border-slate-200/60 text-slate-400' : ''}
                `}
            >
                {/* UP Button */}
                {(scrollPosition === 'middle' || scrollPosition === 'bottom') && (
                    <button
                        onClick={() => scrollTo('top')}
                        className={`flex-1 flex items-center justify-center transition-all hover:text-poble-gold active:scale-90
                            ${scrollPosition === 'middle' ? 'border-b border-slate-100/30' : 'w-full h-full'}
                        `}
                        title="Scroll to Top"
                    >
                        <ArrowUp className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                    </button>
                )}

                {/* DOWN Button */}
                {(scrollPosition === 'middle' || scrollPosition === 'top') && (
                    <button
                        onClick={() => scrollTo('bottom')}
                        className={`flex-1 flex items-center justify-center transition-all hover:text-poble-gold active:scale-90
                            ${scrollPosition === 'top' ? 'w-full h-full animate-bounce-small' : ''}
                        `}
                        title="Scroll to Bottom"
                    >
                        <ArrowDown className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                    </button>
                )}
            </div>
        </div>
    );
};
