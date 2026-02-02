/**
 * @file ContactSection.tsx
 * @description Lead generation and consultation entry point.
 * Features a high-fidelity validation engine for Australian business data.
 */

"use client";

import React, { useState } from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

interface ValidationRule {
    required: boolean;
    min?: number;
    pattern?: RegExp;
    message: string;
}

const VALIDATION_RULES: Record<string, ValidationRule> = {
    firstName: { required: true, min: 2, pattern: /^[A-Za-z\s'-]+$/, message: "Min 2 chars, no numbers" },
    lastName: { required: true, min: 2, pattern: /^[A-Za-z\s'-]+$/, message: "Min 2 chars, no numbers" },
    email: { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Enter a valid email" },
    phone: { required: true, pattern: /^\d{8,10}$/, message: "8-10 digits required" },
    businessName: { required: true, min: 2, message: "Min 2 chars" },
    postalCode: { required: true, pattern: /^\d{4}$/, message: "Exactly 4 digits" },
    businessType: { required: true, message: "Select a type" },
    annualRevenue: { required: true, message: "Select revenue" }
};

interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    touched: boolean;
    error: string;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
    value,
    onChange,
    onBlur,
    touched,
    error
}) => {
    const isFieldRequired = VALIDATION_RULES[name]?.required || required;
    const hasError = touched && (error || (isFieldRequired && !value?.trim()));

    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
                <label className={`block text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${hasError ? 'text-rose-500' : 'text-poble-charcoal'}`}>
                    {label}{isFieldRequired && '*'}
                </label>
                {touched && error && error !== "Required" && (
                    <span className="text-[9px] font-black text-rose-500 uppercase tracking-wider animate-in fade-in duration-300">
                        {error}
                    </span>
                )}
            </div>
            <input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                className={`w-full bg-slate-50 border rounded-2xl px-5 py-4 text-poble-charcoal placeholder:text-slate-300 focus:outline-none focus:ring-2 transition-all font-bold text-sm ${hasError ? 'border-rose-200 focus:ring-rose-100 focus:border-rose-400' : 'border-slate-200 focus:ring-poble-gold/20 focus:border-poble-gold'}`}
            />
        </div>
    );
};

import { useAdmin } from '@/context/AdminContext';

export const ContactSection: React.FC = () => {
    const { siteContent } = useAdmin();
    const config = siteContent.sections.find(s => s.id === 'contact')?.content || {};

    const title = config.title || "Talk to a POS Specialist";
    const description = config.description || "Find the perfect setup and pricing for your venue. Our experts will guide you through the transition.";
    const email = config.email || "hello@poble.com.au";
    const phone = config.phone || "1300 966 963";
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        businessName: '',
        postalCode: '',
        businessType: '',
        annualRevenue: '',
        message: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const formatPhoneNumber = (value: string) => {
        const digits = value.replace(/\D/g, '');
        const limited = digits.slice(0, 10);
        if (limited.length <= 4) return limited;
        if (limited.length <= 7) return `${limited.slice(0, 4)} ${limited.slice(4)}`;
        return `${limited.slice(0, 4)} ${limited.slice(4, 7)} ${limited.slice(7)}`;
    };

    const validateField = (name: string, value: string) => {
        const rule = VALIDATION_RULES[name as keyof typeof VALIDATION_RULES];
        if (!rule) return '';
        if (rule.required && !value.trim()) return "";
        if (rule.min && value.trim().length < rule.min) return rule.message;
        if (rule.pattern && !rule.pattern.test(name === 'phone' ? value.replace(/\D/g, '') : value)) return rule.message;
        return '';
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let formattedValue = value;

        if (name === 'phone') {
            formattedValue = formatPhoneNumber(value);
        } else if (name === 'postalCode') {
            formattedValue = value.replace(/\D/g, '').slice(0, 4);
        } else if (name === 'firstName' || name === 'lastName') {
            formattedValue = value.replace(/[^A-Za-z\s'-]/g, '');
        }

        setFormData(prev => ({ ...prev, [name]: formattedValue }));

        if (touched[name]) {
            setErrors(prev => ({ ...prev, [name]: validateField(name, formattedValue) }));
        }
    };

    const handleBlur = (name: string) => {
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, formData[name as keyof typeof formData]) }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
        setTouched(allTouched);

        const newErrors: Record<string, string> = {};
        let hasErrors = false;

        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key as keyof typeof formData]);
            if (error || (VALIDATION_RULES[key]?.required && !formData[key as keyof typeof formData].trim())) {
                newErrors[key] = error || "Required";
                hasErrors = true;
            }
        });

        setErrors(newErrors);
        if (!hasErrors) {
            // Production: Connect to your CRM or email service API endpoint
            // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
            alert('Thank you! We will contact you soon.');
        }
    };

    return (
        <section id="contact" className="scroll-mt-28 py-24 bg-white border-y border-slate-100 relative overflow-hidden">
            {/* Background design tokens */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24 items-start">
                    <div className="animate-in fade-in slide-in-from-left-4 duration-700 lg:sticky lg:top-40">
                        <span className="text-poble-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">Expert Consultation</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 leading-[1.1] text-poble-charcoal font-heading">
                            {title.includes("Expert") ? (
                                <>
                                    {title.split("Expert")[0]}
                                    <span className="text-slate-400">Expert</span>
                                    {title.split("Expert")[1]}
                                </>
                            ) : title}
                        </h2>
                        <div className="w-12 h-1 bg-poble-gold/60 mb-10"></div>
                        <p className="text-xl text-poble-charcoal font-bold mb-12 max-w-md leading-relaxed tracking-tight">
                            {description}
                        </p>

                        <div className="space-y-8">
                            <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-5 group cursor-pointer w-fit">
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-poble-gold transition-all duration-300">
                                    <Phone className="w-4 h-4 text-poble-gold" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Contact Sales</span>
                                    <span className="text-xl font-black text-poble-charcoal group-hover:text-poble-gold transition-colors">{phone}</span>
                                </div>
                            </a>
                            <a href={`mailto:${email}`} className="flex items-center gap-5 group cursor-pointer w-fit">
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-poble-gold transition-all duration-300">
                                    <Mail className="w-4 h-4 text-poble-gold" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Email Enquiry</span>
                                    <span className="text-xl font-black text-poble-charcoal group-hover:text-poble-gold transition-colors lowercase">{email}</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="relative animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
                        <div className="bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] p-8 md:p-12 relative transition-all duration-500 hover:border-poble-gold/40 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)]">
                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField
                                        label="First Name"
                                        name="firstName"
                                        placeholder="Given name"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur('firstName')}
                                        touched={touched.firstName || false}
                                        error={errors.firstName || ''}
                                    />
                                    <InputField
                                        label="Last Name"
                                        name="lastName"
                                        placeholder="Surname"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur('lastName')}
                                        touched={touched.lastName || false}
                                        error={errors.lastName || ''}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        placeholder="name@venue.com.au"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur('email')}
                                        touched={touched.email || false}
                                        error={errors.email || ''}
                                    />
                                    <InputField
                                        label="Phone Number"
                                        name="phone"
                                        type="tel"
                                        placeholder="0400 000 000"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur('phone')}
                                        touched={touched.phone || false}
                                        error={errors.phone || ''}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField
                                        label="Business Name"
                                        name="businessName"
                                        placeholder="Venue Name"
                                        required
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur('businessName')}
                                        touched={touched.businessName || false}
                                        error={errors.businessName || ''}
                                    />
                                    <InputField
                                        label="Postal Code"
                                        name="postalCode"
                                        placeholder="2000"
                                        required
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur('postalCode')}
                                        touched={touched.postalCode || false}
                                        error={errors.postalCode || ''}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center ml-1">
                                            <label className={`block text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${touched.businessType && (errors.businessType || !formData.businessType.trim()) ? 'text-rose-500' : 'text-poble-charcoal'}`}>
                                                Business Type*
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <select
                                                name="businessType"
                                                title="Business Type"
                                                value={formData.businessType}
                                                onChange={handleChange}
                                                onBlur={() => handleBlur('businessType')}
                                                className={`w-full bg-slate-50 border rounded-2xl px-5 py-4 text-poble-charcoal focus:outline-none focus:ring-2 transition-all font-bold text-sm appearance-none ${touched.businessType && errors.businessType ? 'border-rose-200 focus:ring-rose-100 focus:border-rose-400' : 'border-slate-200 focus:ring-poble-gold/20 focus:border-poble-gold'}`}
                                            >
                                                <option value="">Select Type</option>
                                                <option value="cafe_bakery">Cafe / Bakery</option>
                                                <option value="takeaway_fastfood">Takeaway / Fast Food</option>
                                                <option value="restaurant">Restaurant</option>
                                                <option value="retail_other">Retail / Other</option>
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                <ArrowRight className="w-4 h-4 rotate-90" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center ml-1">
                                            <label className={`block text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${touched.annualRevenue && (errors.annualRevenue || !formData.annualRevenue.trim()) ? 'text-rose-500' : 'text-poble-charcoal'}`}>
                                                Annual Revenue*
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <select
                                                name="annualRevenue"
                                                title="Annual Revenue"
                                                value={formData.annualRevenue}
                                                onChange={handleChange}
                                                onBlur={() => handleBlur('annualRevenue')}
                                                className={`w-full bg-slate-50 border rounded-2xl px-5 py-4 text-poble-charcoal focus:outline-none focus:ring-2 transition-all font-bold text-sm appearance-none ${touched.annualRevenue && errors.annualRevenue ? 'border-rose-200 focus:ring-rose-100 focus:border-rose-400' : 'border-slate-200 focus:ring-poble-gold/20 focus:border-poble-gold'}`}
                                            >
                                                <option value="">Select Revenue</option>
                                                <option value="new_business">New Business (Pre-revenue)</option>
                                                <option value="lt_200k">Less than $200k</option>
                                                <option value="200k_500k">$200k - $500k</option>
                                                <option value="500k_1m">$500k - $1M</option>
                                                <option value="gt_1m">$1M+</option>
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                <ArrowRight className="w-4 h-4 rotate-90" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-4">
                                    <p className="text-xs font-bold text-slate-400 leading-relaxed text-center px-4">
                                        By submitting, you agree to receive helpful updates, promotional offers, and marketing materials from <span className="font-logo">poble</span>. You can unsubscribe anytime.
                                    </p>
                                    <button
                                        type="submit"
                                        className="bg-teal-600 text-white w-full py-4 rounded-full font-extrabold text-lg tracking-tight hover:bg-poble-charcoal hover:text-white transition-all shadow-xl active:scale-[0.98] shadow-slate-200 cursor-pointer flex items-center justify-center gap-4 group"
                                    >
                                        Send Enquiry
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
