import React, { useEffect } from 'react';
import { IconCheckCircle, IconX } from './Icons';

export const Toast = ({ message, type = 'success', onClose, duration = 3500 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 bg-slate-900/95 border border-indigo-500/40 text-white rounded-xl shadow-2xl backdrop-blur-md animate-fade-in transition-all">
      <div className="flex-shrink-0 text-emerald-400">
        <IconCheckCircle className="w-5 h-5" />
      </div>
      <p className="text-sm font-medium text-slate-200">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-white transition-colors p-1"
        aria-label="Close notification"
      >
        <IconX className="w-4 h-4" />
      </button>
    </div>
  );
};
