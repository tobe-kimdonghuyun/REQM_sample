import { motion } from 'framer-motion';
import { Box } from 'lucide-react';

const Glassmorphism = () => {
  return (
    <section className="relative min-h-[700px] w-full overflow-hidden rounded-[40px] bg-[#020617] flex items-center justify-center p-12 border border-slate-800">
      {/* Dynamic Animated Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-600/20 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
          x: [0, -100, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-600/15 rounded-full blur-[120px]" 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 z-10 w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="premium-glass p-16 flex flex-col justify-center gap-6 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-white/10 transition-colors duration-500" />
          <div className="glass-pill w-fit mb-2">Technical Showcase</div>
          <h2 className="text-5xl font-black mb-2 leading-tight">Advanced<br /><span className="text-violet-400">Glassmorphism</span></h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Going beyond simple blur. Our implementation features multi-layered transparency, adaptive borders, and internal light refraction for a truly premium feel.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 5}`} className="w-12 h-12 rounded-full border-4 border-[#030712] bg-slate-800" alt="avatar" />
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold">Trusted by Designers</p>
              <p className="text-xs text-slate-500">1.2k+ reviews</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {[
            { title: "Dynamic Refraction", desc: "Real-time light bending simulations.", icon: <Box className="text-violet-400" /> },
            { title: "Contextual Borders", desc: "Borders that react to the luminance of the content behind.", icon: <Box className="text-pink-400" /> },
            { title: "Performance First", desc: "Hardware-accelerated rendering at 60fps.", icon: <Box className="text-emerald-400" /> }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="premium-glass p-8 flex items-center gap-8 cursor-pointer border-l-8 border-violet-500"
            >
              <div className="p-4 rounded-2xl bg-slate-900/50">{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glassmorphism;
