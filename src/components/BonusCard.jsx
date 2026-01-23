import React from 'react';

const BonusCard = ({ bonus }) => {
    return (
        <div className="relative group h-full">
            {/* Glow Effect behind card (more subtle for light theme) */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-40 transition duration-500 blur-lg"></div>

            <div className="relative bg-white rounded-2xl overflow-hidden flex flex-col h-full border border-slate-100 shadow-md group-hover:shadow-xl transition-all duration-300">

                {/* Visual Header / Image Placeholder */}
                <div className="bg-slate-100 h-40 md:h-56 flex items-center justify-center relative overflow-hidden">
                    {/* Gradient Overlay for text contrast if needed */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent z-10"></div>

                    {bonus.image ? (
                        <img
                            src={bonus.image}
                            alt={bonus.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <span className="text-slate-400 font-medium">Image for {bonus.tag}</span>
                    )}

                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-blue-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-20 border border-white">
                        {bonus.tag}
                    </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                        {bonus.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line">
                        {bonus.description}
                    </p>

                    <div className="border-t border-slate-100 pt-5 mt-auto flex justify-between items-center">
                        <p className="text-slate-800 font-bold text-base md:text-lg flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"></span>
                            {bonus.value}
                        </p>
                        <span className="text-xs text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300 uppercase tracking-wide">
                            View Details →
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BonusCard;
