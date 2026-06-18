"use client";

interface TestimonialCardProps {
  quote: string;
  clientName: string;
  eventType: string;
}

export default function TestimonialCard({ quote, clientName, eventType }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[400px] p-8 rounded-2xl bg-dark-800/70 border border-white/5">
      <svg className="w-8 h-8 text-gold-500/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="text-white font-semibold text-sm">{clientName}</p>
        <p className="text-gold-500/70 text-xs mt-1">{eventType}</p>
      </div>
    </div>
  );
}
