import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ArrowRight, Layers } from 'lucide-react';

const items = [
  { id: 1, title: 'Quantum Flux', color: 'from-blue-600 to-violet-700', description: 'Experience the boundary of digital matter where pixels behave like fluids.', detail: 'The Quantum Flux effect utilizes complex vertex shaders to simulate particle density in real-time. It showcases how mathematics transforms into visual poetry.' },
  { id: 2, title: 'Prism Shift', color: 'from-fuchsia-600 to-rose-700', description: 'Bending light to reveal the hidden spectrum of your interface.', detail: 'Prism Shift is more than a color transition; it is a displacement mapping technique that mimics the physical properties of light passing through glass prisms.' },
  { id: 3, title: 'Deep Neural', color: 'from-emerald-600 to-slate-900', description: 'Architecture inspired by the complexity of organic thoughts.', detail: 'Merging bio-mimicry with flat UI. Deep Neural creates a sense of living, breathing interface that reacts to every touch with organic fluidity.' },
];

const SharedElement = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section>
      <h2><Layers size={32} className="text-rose-400" /> Shared Element Transition</h2>
      <div className="premium-glass p-12 min-h-[600px] relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map(item => (
            <motion.div
              layoutId={`card-${item.id}`}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="cursor-pointer premium-glass overflow-hidden group flex flex-col"
            >
              <motion.div 
                layoutId={`bg-${item.id}`}
                className={`h-56 bg-gradient-to-br ${item.color} relative overflow-hidden`} 
              >
                 <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" 
                  />
              </motion.div>
              <div className="p-8 flex flex-col flex-1">
                <motion.h3 layoutId={`title-${item.id}`} className="text-2xl font-black">{item.title}</motion.h3>
                <motion.p layoutId={`desc-${item.id}`} className="text-slate-400 mt-3 text-sm leading-relaxed mb-6">
                  {item.description}
                </motion.p>
                <div className="mt-auto flex items-center text-violet-400 font-bold text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Module <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 flex items-center justify-center z-[100] px-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" 
              />
              
              <motion.div
                layoutId={`card-${selectedId}`}
                className="premium-glass max-w-4xl w-full overflow-hidden relative shadow-2xl border-white/20"
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-8 right-8 p-3 premium-glass rounded-full hover:bg-white/10 z-[110] text-white"
                >
                  <X size={24} />
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <motion.div 
                    layoutId={`bg-${selectedId}`}
                    className={`h-[500px] md:h-full bg-gradient-to-br ${items.find(i => i.id === selectedId).color} relative`} 
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-12 left-12">
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-pill text-white mb-4">Core Module 0{selectedId}</motion.div>
                      <motion.h3 layoutId={`title-${selectedId}`} className="text-6xl font-black text-white">
                        {items.find(i => i.id === selectedId).title.split(' ')[0]}<br />
                        {items.find(i => i.id === selectedId).title.split(' ')[1]}
                      </motion.h3>
                    </div>
                  </motion.div>

                  <div className="p-16 flex flex-col justify-center bg-slate-900/40">
                    <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-emerald-400 font-bold uppercase tracking-tighter mb-4">Documentation</motion.h4>
                    <motion.p layoutId={`desc-${selectedId}`} className="text-2xl font-medium leading-normal text-slate-200 mb-8">
                      {items.find(i => i.id === selectedId).description}
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ delay: 0.4 }}
                      className="text-slate-400 leading-relaxed"
                    >
                      {items.find(i => i.id === selectedId).detail}
                    </motion.div>
                    <motion.button
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ delay: 0.5 }}
                      className="premium-btn mt-12 w-fit"
                    >
                      Initialize Process
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SharedElement;
