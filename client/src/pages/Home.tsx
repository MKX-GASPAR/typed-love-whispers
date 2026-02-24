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
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const currentMessage = messages[currentMessageIndex];

  // Simular carregamento por 6 segundos
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    // Se ainda está carregando, não faz nada
    if (isLoading) {
      return;
    }

    // Se já completou todas as mensagens, não faz nada
    if (isComplete) {
      return;
    }

    if (!isTyping) {
      // Se é a última mensagem, espera 2 segundos antes de marcar como completo
      if (currentMessageIndex === messages.length - 1) {
        const timer = setTimeout(() => {
          setIsComplete(true);
        }, 2000);
        return () => clearTimeout(timer);
      }

      // Caso contrário, vai para próxima mensagem
      const timer = setTimeout(() => {
        setCurrentMessageIndex((prev) => prev + 1);
        setCharIndex(0);
        setDisplayedText('');
        setIsTyping(true);
      }, 5000);
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
  }, [charIndex, isTyping, currentMessage, currentMessageIndex, isComplete, isLoading]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-red-950/10 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-2xl w-full">
        {isLoading ? (
          // Tela de carregamento com vídeo
          <div className="flex flex-col items-center justify-center gap-6">
            {/* Vídeo de carregamento */}
            <div className="w-full h-96 overflow-hidden flex items-center justify-center bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028851866/VicsmoVGMgiZLkqA.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Texto de carregamento */}
            <div className="text-center">
              <p className="font-mono text-white/60 text-sm md:text-base">
                Preparando sua jornada espiritual...
              </p>
            </div>
          </div>
        ) : !isComplete ? (
          <>
            {/* Typewriter text */}
            <div className="font-mono text-lg md:text-2xl text-white/90 leading-relaxed min-h-32 flex items-center justify-center text-center">
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
            <div className="mt-8 text-white/40 text-sm font-mono text-center">
              {currentMessageIndex + 1} / {messages.length}
            </div>
          </>
        ) : (
          <>
            {/* Homem com altar - SVG */}
            <div className="flex flex-col items-center justify-center gap-8">
              {/* Figura do homem com altar */}
              <svg
                viewBox="0 0 200 300"
                className="w-32 h-48 md:w-40 md:h-56"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {/* Cabeça */}
                <circle cx="100" cy="40" r="20" className="stroke-orange-500" />
                
                {/* Corpo */}
                <line x1="100" y1="60" x2="100" y2="120" className="stroke-orange-500" />
                
                {/* Braços */}
                <line x1="100" y1="80" x2="60" y2="100" className="stroke-orange-500" />
                <line x1="100" y1="80" x2="140" y2="100" className="stroke-orange-500" />
                
                {/* Pernas */}
                <line x1="100" y1="120" x2="80" y2="160" className="stroke-orange-500" />
                <line x1="100" y1="120" x2="120" y2="160" className="stroke-orange-500" />
                
                {/* Altar na mão direita - retângulo com cruz */}
                <g transform="translate(140, 95)">
                  {/* Base do altar */}
                  <rect x="-15" y="-10" width="30" height="25" className="stroke-red-500" fill="none" />
                  {/* Topo do altar */}
                  <rect x="-18" y="-15" width="36" height="8" className="stroke-red-500" fill="none" />
                  {/* Cruz no altar */}
                  <line x1="0" y1="-5" x2="0" y2="5" className="stroke-red-500" />
                  <line x1="-4" y1="0" x2="4" y2="0" className="stroke-red-500" />
                  {/* Urso polar na mão */}
                  <text x="0" y="20" fontSize="16" textAnchor="middle" className="fill-white">🐻‍❄️</text>
                </g>
              </svg>

              {/* Mensagem final */}
              <div className="text-center">
                <p className="font-mono text-white/80 text-sm md:text-base leading-relaxed max-w-md">
                  Sua jornada espiritual começou.
                </p>
                <p className="font-mono text-red-500/60 text-xs md:text-sm mt-4">
                  Que a paz de Jesus permaneça em seu coração.
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer with VINCENTY AI */}
      <div className="absolute bottom-4 right-4 text-white/30 text-xs font-mono hover:text-white/50 transition-colors">
        VINCENTY AI
      </div>
    </div>
  );
}
