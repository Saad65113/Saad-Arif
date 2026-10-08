import React, { useState } from 'react';
import { Copy, Check, Send, ArrowUpRight, Youtube, Instagram, Film, Twitter, Linkedin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Narrative Short',
    message: ''
  });

  const email = 'saadarifak@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto w-full border-t border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 font-semibold">
          Get in Touch
        </span>

        {/* Prompt copy in English: "Want to talk? → hello@saadarif.film" */}
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Want to talk?
        </h2>

        <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
          Whether you have a new film in mind, a documentary inquiry, or simply want to connect.
        </p>

        {/* Big Clickable / Copyable Email Anchor */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`mailto:${email}?subject=Collaboration%20Inquiry%20with%20Saad%20Arif`}
            className="group inline-flex items-center gap-2.5 text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white hover:text-[#2B4BFF] dark:hover:text-[#4d69ff] transition-colors"
          >
            <span>{email}</span>
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <button
            onClick={copyEmail}
            aria-label="Copy email address"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-neutral-200/70 dark:bg-neutral-800/80 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Direct Message Drawer / Form */}
        <div className="pt-10 max-w-xl mx-auto text-left">
          {formSent ? (
            <div className="p-6 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-emerald-500/30 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                Message Sent Successfully
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Thank you! I will get back to you shortly at {formData.email}.
              </p>
              <button
                onClick={() => setFormSent(false)}
                className="mt-3 text-xs text-[#2B4BFF] hover:underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-neutral-100/60 dark:bg-neutral-900/60 border border-black/[0.06] dark:border-white/[0.08] space-y-4">
              <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Send a Direct Note
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Lin"
                    className="w-full px-3 py-2 text-xs rounded-md bg-white dark:bg-neutral-800 border border-black/[0.08] dark:border-white/[0.1] text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#2B4BFF]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 text-xs rounded-md bg-white dark:bg-neutral-800 border border-black/[0.08] dark:border-white/[0.1] text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#2B4BFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                  Project / Service Needed
                </label>
                <select
                  value={formData.projectType}
                  onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-md bg-white dark:bg-neutral-800 border border-black/[0.08] dark:border-white/[0.1] text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#2B4BFF]"
                >
                  <option value="UGC Video Ads">UGC Video Ads (TikTok & Reels)</option>
                  <option value="High-ROAS Meta Ads">High-ROAS Meta Ads (Facebook & Instagram)</option>
                  <option value="Generative AI Video Production">Generative AI Video Production & VFX</option>
                  <option value="Monthly Creative Retainer">Monthly Video Editing Retainer</option>
                  <option value="General Conversation">Direct Inquiry / Chat</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me a bit about your project or idea..."
                  className="w-full px-3 py-2 text-xs rounded-md bg-white dark:bg-neutral-800 border border-black/[0.08] dark:border-white/[0.1] text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#2B4BFF]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-md bg-[#2B4BFF] hover:bg-[#203ecc] text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Note</span>
              </button>
            </form>
          )}
        </div>

        {/* Clean Social Presence */}
        <div className="pt-10 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 dark:text-neutral-400">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <Youtube className="w-4 h-4 text-red-500" />
            <span>YouTube</span>
          </a>

          <a
            href="https://vimeo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <Film className="w-4 h-4 text-sky-400" />
            <span>Vimeo</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4 text-pink-500" />
            <span>Instagram</span>
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <Twitter className="w-4 h-4 text-neutral-400" />
            <span>X (Twitter)</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4 text-blue-600" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
