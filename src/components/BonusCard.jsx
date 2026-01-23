import React from 'react';

const BonusCard = ({ bonus }) => {
    return (
        <div className="bg-[#111] rounded-2xl shadow-xl border border-gray-800 overflow-hidden hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col h-full group">
            {/* Visual Header / Image Placeholder */}
            <div className="bg-gray-900 h-56 flex items-center justify-center relative overflow-hidden">
                {bonus.image ? (
                    <img
                        src={bonus.image}
                        alt={bonus.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <span className="text-gray-600 font-medium">Image for {bonus.tag}</span>
                )}

                <div className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider shadow-lg z-10 border border-white/20">
                    {bonus.tag}
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-purple-400 transition-colors">
                    {bonus.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line">
                    {bonus.description}
                </p>

                <div className="border-t border-gray-800 pt-5 mt-auto">
                    <p className="text-green-400 font-bold text-lg flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        {bonus.value}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BonusCard;
