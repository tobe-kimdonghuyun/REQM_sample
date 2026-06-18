import { motion } from 'framer-motion';
import { Heart, Search, Send, Bell, Zap } from 'lucide-react';
import { useState } from 'react';

const MicroInteractions = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <section>
      <h2><Zap size={32} className="text-violet-400" /> Micro-interactions</h2>
      <div className="premium-glass p-12 flex flex-wrap gap-12 items-center justify-center md:justify-start">
        {/* Like Button */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85 }}
          onClick={() => setIsLiked(!isLiked)}
          className={`group p-6 rounded-[20px] premium-glass ${isLiked ? 'text-rose-500 border-rose-500/30' : 'text-slate-400'}`}
        >
          <Heart fill={isLiked ? 'currentColor' : 'none'} size={36} className="transition-colors duration-300" />
          <motion.div
            initial={false}
            animate={isLiked ? { scale: [1, 1.5, 1], opacity: [0, 1, 0] } : { scale: 0 }}
            className="absolute inset-0 bg-rose-500/20 rounded-full blur-xl pointer-events-none"
          />
        </motion.button>

        {/* Search Bar Interaction */}
        <motion.div 
          animate={{ width: isSearching ? 400 : 72 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="premium-glass h-18 overflow-hidden flex items-center px-6 relative"
        >
          <Search className="text-slate-400 shrink-0 cursor-pointer" onClick={() => setIsSearching(!isSearching)} />
          <input 
            type="text" 
            placeholder="Search premium components..." 
            className="bg-transparent border-none outline-none ml-6 text-white w-full text-lg placeholder:text-slate-600 font-medium"
            onFocus={() => setIsSearching(true)}
            onBlur={() => setIsSearching(false)}
          />
        </motion.div>

        {/* Send Button */}
        <motion.button
          whileHover={{ y: -4, boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="premium-btn flex items-center gap-3 text-lg"
        >
          <span>Submit Request</span>
          <motion.div 
            animate={{ x: [0, 4, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Send size={20} />
          </motion.div>
        </motion.button>

        {/* Notification Bell */}
        <div className="relative group">
          <motion.button
            whileHover={{ rotate: [0, -15, 15, -15, 0] }}
            transition={{ duration: 0.4 }}
            className="p-5 premium-glass text-amber-400"
          >
            <Bell size={36} />
          </motion.button>
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-[3px] border-slate-950" 
          />
        </div>
      </div>
    </section>
  );
};

export default MicroInteractions;
