
import React from 'react';

interface ItemDetailProps {
  item: any;
  onBack: () => void;
  onMessage: () => void;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item, onBack, onMessage }) => {
  return (
    <div className="h-full bg-white overflow-y-auto no-scrollbar animate-in slide-in-from-bottom duration-300">
      {/* Top Media Section - Now scrolls with the content */}
      <div className="relative w-full aspect-[4/3] bg-gray-50 flex items-center justify-center p-12">
        <button 
          onClick={onBack}
          className="absolute top-12 left-6 z-20 bg-white/90 backdrop-blur p-2.5 rounded-2xl shadow-xl border border-gray-100 active:scale-90 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-contain mix-blend-multiply transition-transform hover:scale-105 duration-500"
        />

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center space-y-1.5">
          <div className="flex space-x-1.5">
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
          </div>
          <span className="text-[9px] font-black text-gray-400 tracking-widest uppercase">1/7</span>
        </div>
      </div>

      {/* Main Content Area - Padding adjusted since it's now in the same scroll container */}
      <div className="px-6 pb-24 pt-6">
        {/* Title and Price Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1 pr-4">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1">{item.title}</h1>
            <div className="flex items-center space-x-1.5">
              <span className="text-sm font-medium text-gray-500">{item.brand}</span>
              <div className="bg-emerald-100 p-0.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="border-2 border-orange-100 rounded-[1.25rem] px-4 py-2 flex items-center justify-center bg-white shadow-sm">
            <span className="text-xl font-black text-orange-600">${item.price}</span>
          </div>
        </div>

        {/* Attributes Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-orange-50/50 border border-orange-100/50 p-4 rounded-[1.5rem]">
            <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">Condition</p>
            <p className="text-sm font-bold text-orange-600">{item.condition}</p>
          </div>
          <div className="bg-emerald-50/50 border border-emerald-100/50 p-4 rounded-[1.5rem]">
            <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">
              {item.category === 'Clothing' ? 'Size' : 'Material'}
            </p>
            <p className="text-sm font-bold text-emerald-600">
              {item.category === 'Clothing' ? 'US M / 10' : 'Composite'}
            </p>
          </div>
          <div className="bg-orange-50/50 border border-orange-100/50 p-4 rounded-[1.5rem]">
            <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">Category</p>
            <p className="text-sm font-bold text-orange-600">{item.categoryIcon} {item.category}</p>
          </div>
          <div className="bg-emerald-50/50 border border-emerald-100/50 p-4 rounded-[1.5rem]">
            <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">Posted</p>
            <p className="text-sm font-bold text-emerald-600">2 days ago</p>
          </div>
        </div>

        {/* Pickup Location Card */}
        <div className="bg-emerald-50/30 border border-emerald-100 rounded-[1.5rem] p-4 mb-8 flex items-center space-x-3">
          <div className="bg-orange-100 p-2.5 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Pickup Location</p>
            <p className="text-sm font-bold text-orange-600">Comet Cab Pickup (UTD)</p>
          </div>
        </div>

        {/* Seller Info Section */}
        <div className="bg-gray-50/50 border border-gray-100 rounded-[2rem] p-5 space-y-5">
          <p className="text-[11px] uppercase tracking-widest font-bold text-gray-400">Seller Information</p>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/seller23/100/100" 
                alt="Seller" 
                className="w-14 h-14 rounded-2xl object-cover shadow-sm"
              />
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 p-1 rounded-full border-2 border-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">SneakerHead23</h4>
              <div className="flex items-center space-x-1 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs font-bold text-gray-700">4.8</span>
                <span className="text-xs text-gray-400">(128 reviews)</span>
              </div>
            </div>
          </div>

          <button 
            onClick={onMessage}
            className="w-full bg-white border border-gray-100 py-4 rounded-2xl flex items-center justify-center space-x-2 shadow-sm active:scale-95 transition-all group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="text-sm font-bold text-gray-800 tracking-tight">Message Seller</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
