import { useState, useEffect } from 'react';
import { Layout } from 'lucide-react';

const SkeletonScreens = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <h2><Layout size={32} className="text-emerald-400" /> Skeleton Screens</h2>
      <div className="premium-glass p-12">
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest">Async Content</p>
            <h3 className="text-3xl font-black mt-1">Smart Loading</h3>
          </div>
          <button 
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 2000);
            }}
            className="premium-btn text-sm"
          >
            Refetch Data
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col gap-6">
              {loading ? (
                <div className="space-y-5">
                  <div className="skeleton h-64 w-full" />
                  <div className="skeleton h-8 w-5/6" />
                  <div className="space-y-2">
                    <div className="skeleton h-4 w-full opacity-60" />
                    <div className="skeleton h-4 w-2/3 opacity-60" />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="skeleton h-10 w-10 rounded-full" />
                    <div className="skeleton h-6 w-24" />
                  </div>
                </div>
              ) : (
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-[20px] premium-glass mb-6">
                    <div className={`h-64 w-full bg-gradient-to-br transition-transform duration-700 group-hover:scale-110 flex items-center justify-center ${
                      i === 1 ? 'from-violet-600/20 to-indigo-600/20' : 
                      i === 2 ? 'from-emerald-600/20 to-teal-600/20' : 
                      'from-rose-600/20 to-orange-600/20'
                    }`}>
                      <span className="text-white/10 font-black text-6xl italic select-none">0{i}</span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold group-hover:text-violet-400 transition-colors">Architectural Concept {i}</h4>
                  <p className="text-slate-400 mt-3 leading-relaxed">
                    Seamless loading transitions for a modern, fluid user experience that reduces perceived wait time.
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i + 10}`} className="h-12 w-12 rounded-full border-2 border-slate-800 bg-slate-900" alt="avatar" />
                    <div>
                      <p className="font-bold text-sm">Alexander Wright</p>
                      <p className="text-xs text-slate-500">Lead Designer</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkeletonScreens;
