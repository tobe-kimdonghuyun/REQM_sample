import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MousePointer2 } from 'lucide-react';

const ScrollAnimation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative py-24 px-12 premium-glass overflow-hidden">
      <div className="sticky top-24 z-20 flex justify-between items-end mb-32">
        <div>
          <h2 className="text-4xl font-black mb-4"><MousePointer2 size={40} className="text-indigo-400 inline mr-4" /> Scroll Narrative</h2>
          <p className="text-slate-400 max-w-lg text-lg">
            Experience story-driven interactions where content reveals itself based on your journey down the page.
          </p>
        </div>
        <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-violet-500 to-emerald-500" 
            style={{ scaleX, transformOrigin: '0%' }} 
          />
        </div>
      </div>

      <div className="relative space-y-[40vh] pb-[20vh]">
        {/* Background Guide Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-800 via-violet-500/20 to-slate-800 -translate-x-1/2" />

        {[1, 2, 3, 4].map((item) => (
          <ScrollItem key={item} index={item} />
        ))}
      </div>
    </section>
  );
};

const ScrollItem = ({ index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 0.5"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 100 : -100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 10 : -10, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity, rotate, scale }}
      className={`relative w-full flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
    >
      <div className="premium-glass p-16 max-w-2xl w-full group relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full" />
        <span className="text-8xl font-black absolute -top-4 -right-2 text-slate-800/10 group-hover:text-indigo-500/10 transition-colors duration-500">
          0{index}
        </span>
        
        <div className="relative z-10">
          <h3 className="text-4xl font-extrabold mb-6 group-hover:text-violet-400 transition-colors">
            Interactive Phase 0{index}
          </h3>
          <p className="text-slate-400 text-xl leading-relaxed">
            Content blocks that react with precise spring physics. This scroll-driven pattern is perfect for landing pages that need a premium, narrative feel without sacrificing performance.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="h-1 w-20 bg-violet-500 rounded-full" />
            <div className="h-1 w-4 bg-slate-700 rounded-full" />
            <div className="h-1 w-4 bg-slate-700 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollAnimation;
