import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminLoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === '1234') {
      setIsOpen(false);
      navigate('/admin');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2500);
    }
  };

  return (
    <>
      {/* Floating Trigger - Discreet and Sleek */}
      <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 rounded-full border border-brand-gold/30 bg-[#0e0f14]/90 px-3.5 py-2.5 sm:px-4 sm:py-2.5 text-xs font-semibold text-brand-gold backdrop-blur-xl shadow-2xl transition hover:border-brand-gold hover:bg-brand-gold hover:text-black hover:scale-105"
          title="Staff / Admin Portal"
          aria-label="Staff Portal"
        >
          <Lock className="h-3.5 w-3.5" />
          <span className="hidden sm:inline uppercase tracking-widest text-[0.65rem]">Admin Portal</span>
        </button>
      </div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-3xl border border-brand-gold/30 bg-[#121319] p-6 sm:p-8 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/5 text-white/70 hover:bg-white/10 flex items-center justify-center transition"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex flex-col items-center text-center mb-6">
                <div className="h-12 w-12 rounded-2xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-3">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white">Staff Admin Login</h3>
                <p className="text-xs text-white/60 mt-1">
                  Enter authorized passcode to manage quotations.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter Passcode"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(false);
                    }}
                    autoFocus
                    required
                    className={`w-full rounded-2xl border px-4 py-3.5 text-sm bg-white/5 text-white placeholder-white/40 outline-none transition pr-10 ${
                      error
                        ? 'border-red-500 bg-red-500/10'
                        : 'border-white/15 focus:border-brand-gold'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>

                {error && (
                  <p className="text-xs text-red-400 text-center font-medium">
                    Incorrect Passcode. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full rounded-2xl bg-gradient-to-r from-[#ECC876] to-[#C4A664] py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-gold transition hover:scale-[1.02] active:scale-98"
                >
                  <span>Authorize & Access</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <p className="mt-4 text-center text-[0.65rem] text-white/40">
                Default demo PIN: <span className="font-mono text-brand-gold">1234</span>
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
