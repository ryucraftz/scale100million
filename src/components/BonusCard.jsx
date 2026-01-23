import React from 'react';

const BonusCard = ({ bonus }) => {
    return (
        <div className="relative group h-full">
            {/* Glow Effect behind card */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-30 group-hover:opacity-100 transition duration-500 blur-lg group-hover:blur-xl"></div>

            <div className="relative bg-[#0a0a0a] rounded-2xl overflow-hidden flex flex-col h-full border border-gray-800 group-hover:border-transparent transition-all duration-300">

                {/* Visual Header / Image Placeholder */}
                <div className="bg-gray-900 h-60 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 opacity-60"></div>

                    {bonus.image ? (
                        <img
                            src={bonus.image}
                            alt={bonus.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                        />
                    ) : (
                        <span className="text-gray-600 font-medium">Image for {bonus.tag}</span>
                    )}

                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider shadow-lg z-20 border border-white/20 group-hover:bg-purple-600 group-hover:border-purple-400 transition-colors duration-300">
                        {bonus.tag}
                    </div>
                </div>

                <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-[#0a0a0a] to-[#111]">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3 leading-tight group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                        {bonus.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line group-hover:text-gray-300 transition-colors">
                        {bonus.description}
                    </p>

                    <div className="border-t border-gray-800/50 pt-5 mt-auto flex justify-between items-center">
                        <p className="text-green-400 font-bold text-lg flex items-center gap-2 drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></span>
                            {bonus.value}
                        </p>
                        <span className="text-xs text-purple-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
                            CLAIMED
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BonusCard;
