import React from 'react';

const BonusCard = ({ bonus }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            {/* Visual Header / Image Placeholder */}
            <div className="bg-gray-200 h-48 flex items-center justify-center relative">
                {/* Placeholder for actual image based on bonus.cardType */}
                <span className="text-gray-500 font-medium">Image for {bonus.tag} ({bonus.cardType})</span>

                <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {bonus.tag}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {bonus.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow whitespace-pre-line">
                    {bonus.description}
                </p>

                <div className="border-t border-gray-100 pt-4 mt-auto">
                    <p className="text-green-600 font-bold text-lg">
                        {bonus.value}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BonusCard;
