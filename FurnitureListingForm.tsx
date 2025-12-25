
import React, { useState } from 'react';

interface FurnitureListingFormProps {
  onBack: () => void;
}

const FurnitureListingForm: React.FC<FurnitureListingFormProps> = ({ onBack }) => {
  const [condition, setCondition] = useState('Like New');
  const conditions = ['New', 'Like New', 'Excellent', 'Good', 'Fair'];

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-emerald-600 p-6 flex items-start space-x-4">
        <button onClick={onBack} className="bg-white/20 p-2 rounded-full text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <div>
          <h1 className="text-white text-xl font-semibold">List Furniture</h1>
          <p className="text-white/80 text-sm">Desks, chairs, or dorm storage?</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 pb-20">
        <div className="space-y-2">
          <label className="text-sm font-semibold flex items-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            </svg>
            Furniture Photos *
          </label>
          <div className="w-32 h-32 border-2 border-dashed border-emerald-500 rounded-2xl flex flex-col items-center justify-center space-y-2 text-emerald-600 cursor-pointer bg-emerald-50/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <span className="text-xs font-medium text-center px-2">Show all angles & any wear</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">Item Category *</label>
            <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 appearance-none">
              <option>Desk</option>
              <option>Office Chair</option>
              <option>Bed Frame</option>
              <option>Bookshelf</option>
              <option>Lamp / Lighting</option>
              <option>Other Furniture</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Brand</label>
              <input type="text" placeholder="IKEA, Wayfair" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Color *</label>
              <input type="text" placeholder="Oak, Black" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">Dimensions *</label>
            <input type="text" placeholder={`e.g., 40" W x 20" D x 30" H`} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">Material</label>
            <input type="text" placeholder="Wood, Metal, Plastic" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">Listing Title *</label>
            <input type="text" placeholder="e.g., Spacious IKEA Desk" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Condition *</label>
            <div className="flex flex-wrap gap-2">
              {conditions.map((c) => (
                <button
                  key={c}
                  onClick={() => setCondition(c)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${condition === c ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button className="w-full bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-200 active:scale-[0.98] transition-all">
          Post Furniture Item
        </button>
      </div>
    </div>
  );
};

export default FurnitureListingForm;
