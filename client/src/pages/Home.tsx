import { useEffect, useState } from 'react';

/**
 * Design Philosophy: Intimate Typewriter Romance
 * - Monospace font for authentic typewriter feel
 * - Dark background with light text for focus and elegance
 * - Cursor animation mimics vintage typewriter
 * - Minimal UI, maximum emotional impact
 * 
 * Content: Jesus speaking from the heart with profound love and redemption
 */

const messages = [
  "Eu não fiquei no céu observando de longe. Desci. Entrei na sua dor. E na hora mais escura, gritei para o Pai — exatamente como você já gritou.",
  "Não porque havia perdido a fé. Mas porque amava de verdade. E amor de verdade às vezes é silencioso.",
  "Olha os furos nas Minhas mãos. Eles mostram que você tem todo o Meu amor. Por que viver como se não valesse a pena que Eu tivesse dado Minha vida por você?",
  "Talvez você não entenda ainda o tamanho do que foi feito por você na cruz. Mas um dia vai entender.",
  "E nesse dia, vai querer viver como alguém que foi amado assim.",
];

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  const currentMessage = messages[currentMessageIndex];

  useEffect(() => {
    if (!isTyping) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setCharIndex(0);
        setDisplayedText('');
        setIsTyping(true);
      }, 3000);
      return () => clearTimeout(timer);
    }

    if (charIndex < currentMessage.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + currentMessage[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [charIndex, isTyping, currentMessage]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-red-950/10 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Typewriter text */}
        <div className="font-mono text-lg md:text-2xl text-white/90 leading-relaxed min-h-32 flex items-center justify-center">
          <span className="inline-block">
            {displayedText}
            {isTyping && (
              <span className="inline-block w-0.5 h-6 md:h-8 bg-red-500 ml-1 animate-pulse" />
            )}
          </span>
        </div>

        {/* Decorative line */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-red-500/30" />
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-12 h-px bg-red-500/30" />
        </div>

        {/* Message counter */}
        <div className="mt-8 text-white/40 text-sm font-mono">
          {currentMessageIndex + 1} / {messages.length}
        </div>
      </div>

      {/* Footer with VINCENTY AI */}
      <div className="absolute bottom-4 right-4 text-white/30 text-xs font-mono hover:text-white/50 transition-colors">
        VINCENTY AI
      </div>
    </div>
  );
}
