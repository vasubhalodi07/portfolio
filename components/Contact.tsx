"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Check, Copy, Loader2, Phone, ExternalLink } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import personalData from "@/data/personal.json";

export default function Contact() {
  const { email, github, linkedin } = personalData;

  const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormState("sending");

    // Simulate API call
    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const contactDetails = [
    {
      label: "Email Address",
      value: email,
      href: `mailto:${email}`,
      icon: Mail,
      iconClass: "border-indigo-100 bg-indigo-50 text-indigo-600",
      isCopyable: true,
    },
    {
      label: "WhatsApp Chat",
      value: "+91 99132 60225",
      href: "https://wa.me/919913260225",
      icon: Phone,
      iconClass: "border-emerald-100 bg-emerald-50 text-emerald-600",
      isCopyable: true,
    },
    {
      label: "GitHub Profile",
      value: "vasubhalodi07",
      href: github,
      icon: Github,
      iconClass: "border-slate-200 bg-slate-100 text-slate-700",
      isLink: true,
    },
    {
      label: "LinkedIn Connection",
      value: "Vasu Bhalodi",
      href: linkedin,
      icon: Linkedin,
      iconClass: "border-blue-100 bg-blue-50 text-blue-600",
      isLink: true,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white relative z-10 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          title="Get In Touch"
          subtitle="Have an exciting project, want to collaborate, or just want to say hi? Drop me a message!"
          chip="Contact"
          className="!mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200/60 rounded-theme p-5 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border shrink-0 ${detail.iconClass}`}>
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                        {detail.label}
                      </h4>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.isLink ? "_blank" : undefined}
                          rel={detail.isLink ? "noopener noreferrer" : undefined}
                          className="text-sm font-semibold text-slate-800 hover:text-indigo-600 transition-colors break-all block"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-slate-800 break-all block">
                          {detail.value}
                        </span>
                      )}
                    </div>
                  </div>

                  {detail.isCopyable ? (
                    <button
                      onClick={() => handleCopyText(detail.value)}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer shrink-0"
                      title={`Copy ${detail.label}`}
                    >
                      {copiedText === detail.value ? (
                        <Check size={14} className="text-emerald-600" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  ) : detail.isLink ? (
                    <a
                      href={detail.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer shrink-0"
                      title={`Open ${detail.label}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  ) : null}
                </div>
              );
            })}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {formState === "success" ? (
              <div className="bg-white border border-slate-200/80 rounded-theme p-8 text-center flex flex-col items-center justify-center shadow-sm min-h-[360px]">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <Check size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-slate-500 max-w-sm leading-relaxed mb-6">
                  Thank you for reaching out! I have received your message and will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="px-6 py-2.5 bg-slate-900 text-white rounded-theme text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200/80 rounded-theme p-8 shadow-sm flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-bold text-slate-800 mb-2 block"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={formState === "sending"}
                      placeholder="John Doe"
                      className="w-full rounded-theme border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all disabled:opacity-60"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-bold text-slate-800 mb-2 block"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={formState === "sending"}
                      placeholder="john@example.com"
                      className="w-full rounded-theme border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Message TextArea */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-bold text-slate-800 mb-2 block"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={formState === "sending"}
                    placeholder="Briefly describe your project or details..."
                    className="w-full rounded-theme border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none disabled:opacity-60"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="bg-slate-900 text-white rounded-theme text-xs font-bold px-6 py-4 hover:bg-slate-800 transition-colors inline-flex items-center gap-2 justify-center cursor-pointer w-full sm:w-auto self-start disabled:opacity-60 select-none"
                >
                  {formState === "sending" ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
