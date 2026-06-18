import MicroInteractions from './components/Effects/MicroInteractions';
import SkeletonScreens from './components/Effects/SkeletonScreens';
import Glassmorphism from './components/Effects/Glassmorphism';
import SharedElement from './components/Effects/SharedElement';
import ScrollAnimation from './components/Effects/ScrollAnimation';
import './styles/index.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="selection:bg-violet-500/30">
      <header className="relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="flex justify-center mb-8">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="glass-pill text-violet-400 border-violet-400/20"
            >
              Enterprise UI Solution 2026
            </motion.div>
          </div>
          <h1>Premium Visuals</h1>
          <p className="text-center text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed px-4">
            Transforming mundane interfaces into captivating digital experiences 
            through meticulous motion design and advanced glassmorphism techniques.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-center gap-6 mt-12"
          >
            <button className="premium-btn">Start Exploring</button>
            <button className="premium-glass px-8 py-3 font-bold border-white/5 hover:border-white/20 transition-all">
              Documentation
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />
      </header>

      <main>
        <div className="space-y-[200px]">
          <MicroInteractions />
          <SkeletonScreens />
          <Glassmorphism />
          <SharedElement />
          <ScrollAnimation />
        </div>
      </main>

      <footer className="py-32 border-t border-slate-900 bg-slate-950/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h4 className="text-2xl font-black bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">Antigravity.</h4>
            <p className="text-slate-500 mt-2 text-sm">Elevating components to extraordinary heights.</p>
          </div>
          <div className="flex gap-12 text-sm font-bold text-slate-400">
            <a href="#" className="hover:text-violet-400 transition-colors">Components</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Lab</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Storybook</a>
          </div>
          <p className="text-slate-600 text-xs mt-4 md:mt-0">&copy; 2026 Antigravity Design Lab. Built with Vision.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
