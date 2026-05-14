import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import type { ProfileData } from '../types';

interface WhatsAppButtonProps {
  data: ProfileData;
}

export function WhatsAppButton({ data }: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-surface-700 border border-white/10 rounded-2xl p-4 shadow-card max-w-xs animate-fade-up">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <MessageCircle size={16} className="text-green-400" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  {data.name.split(' ')[0]}
                </p>
                <p className="text-green-400 text-xs font-mono">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-white/40 hover:text-white transition-colors"
            >
              <X size={14} />
            </button>
          </div>
          <p className="text-white/65 text-sm mb-3">
            ¡Hola! 👋 ¿En qué puedo ayudarte hoy?
          </p>
          <a
            href={`https://wa.me/${data.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-500 hover:bg-green-400 text-white text-sm font-medium py-2.5 rounded-xl transition-colors"
          >
            Iniciar chat
          </a>
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex items-center justify-center relative"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={26} />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400/30 animate-ping" />
      </button>
    </div>
  );
}
