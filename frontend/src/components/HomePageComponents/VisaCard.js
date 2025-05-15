import { useState } from 'react';
import { FiClock } from 'react-icons/fi'; // FiClock will be replaced by the new SVG

// Truck Icon SVG component (can be moved to a separate file if preferred)
const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"></path>
  </svg>
);

export default function VisaCard({ 
  image, 
  country, 
  price, 
  visaCount, 
  date, 
  category, 
  statusText, 
  includesTruckIcon, 
  stickerVisa 
}) {
  

  if (category === 'instant') {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all h-full flex flex-col">
        <img 
          src={image} 
          alt={country} 
          className="h-[300px] w-full object-cover rounded-t-lg md:h-[280px] 2xl:h-[270px]"
          loading="eager"
          decoding="async"
        />
        <div className="p-4 flex-grow">
          <h3 className="font-basier text-lg font-semibold text-black mb-1">{country}</h3>
          {statusText && <p className="text-sm text-gray-600">{statusText}</p>}
        </div>
      </div>
    );
  }

  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all h-full flex flex-col relative"
    >
      <div className="relative w-full overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={country} 
          className="h-[300px] w-full object-cover rounded-t-lg md:h-[280px] md:transition-all md:ease-in-out 2xl:h-[270px]"
          loading="eager"
          decoding="async"
        />
        {stickerVisa && (
          <span className="absolute -bottom-1 left-4 inline-flex w-auto items-center gap-2 rounded-t-2xl bg-white px-3 py-1.5">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.7874 12.8405L11.5953 14.7812L15.2126 10.8982" stroke="#697586" strokeLinecap="round" strokeWidth="1.4"></path>
              <path d="M12.5 0.78125L12.949 2.16322H14.4021L13.2265 3.01732L13.6756 4.39928L12.5 3.54518L11.3244 4.39928L11.7735 3.01732L10.5979 2.16322H12.051L12.5 0.78125Z" fill="#697586"></path>
              <path d="M12.5 20.7812L12.949 22.1632H14.4021L13.2265 23.0173L13.6756 24.3993L12.5 23.5452L11.3244 24.3993L11.7735 23.0173L10.5979 22.1632H12.051L12.5 20.7812Z" fill="#697586"></path>
              <path d="M22.8923 6.78125L21.92 7.8611L22.6466 9.11951L21.3191 8.52848L20.3468 9.60834L20.4987 8.16321L19.1712 7.57219L20.5926 7.27007L20.7445 5.82495L21.471 7.08336L22.8923 6.78125Z" fill="#697586"></path>
              <path d="M5.57202 16.7812L4.59972 17.8611L5.32626 19.1195L3.9988 18.5285L3.0265 19.6083L3.17839 18.1632L1.85093 17.5722L3.27226 17.2701L3.42415 15.8249L4.15069 17.0834L5.57202 16.7812Z" fill="#697586"></path>
              <path d="M18.5001 2.38904L18.198 3.81037L19.4564 4.53691L18.0113 4.6888L17.7092 6.11013L17.1182 4.78267L15.673 4.93456L16.7529 3.96226L16.1619 2.6348L17.4203 3.36134L18.5001 2.38904Z" fill="#697586"></path>
              <path d="M8.50012 19.7094L8.198 21.1307L9.45641 21.8572L8.01129 22.0091L7.70917 23.4304L7.11815 22.103L5.67303 22.2549L6.75288 21.2826L6.16186 19.9551L7.42026 20.6817L8.50012 19.7094Z" fill="#697586"></path>
              <path d="M4.5 12.7812L3.11803 13.2303L3.11803 14.6834L2.26393 13.5078L0.881966 13.9568L1.73607 12.7812L0.881966 11.6057L2.26393 12.0547L3.11803 10.8791L3.11803 12.3322L4.5 12.7812Z" fill="#697586"></path>
              <path d="M5.57178 8.78125L4.15045 8.47913L3.4239 9.73754L3.27201 8.29242L1.85068 7.9903L3.17814 7.39928L3.02625 5.95415L3.99856 7.03401L5.32602 6.44298L4.59947 7.70139L5.57178 8.78125Z" fill="#697586"></path>
              <path d="M8.49988 5.85303L7.42003 4.88072L6.16162 5.60727L6.75264 4.27981L5.67279 3.3075L7.11792 3.45939L7.70894 2.13193L8.01105 3.55326L9.45618 3.70515L8.19777 4.4317L8.49988 5.85303Z" fill="#697586"></path>
            </svg>
            <span className="font-medium text-gray-800">Sticker Visa</span>
            <svg className="absolute" fill="none" height="18" viewBox="0 0 13 18" width="13" xmlns="http://www.w3.org/2000/svg" style={{ right: '-30px', width: '49px', height: '22px', bottom: '4px' }}>
              <path d="M1.97444 0.296448C1.97444 11.8428 6.32221 17.9913 12.2495 17.9913L0.7395 18.2182L1.97444 0.296448Z" fill="white"></path>
            </svg>
            <svg className="absolute" fill="none" height="18" viewBox="0 0 13 18" width="13" xmlns="http://www.w3.org/2000/svg" style={{ left: '-30px', width: '49px', height: '22px', bottom: '4px', transform: 'scaleX(-1)' }}>
              <path d="M1.97444 0.296448C1.97444 11.8428 6.32221 17.9913 12.2495 17.9913L0.7395 18.2182L1.97444 0.296448Z" fill="white"></path>
            </svg>
          </span>
        )}
        {visaCount && (
          <div className={`absolute left-0 rounded-r-md bg-primary px-2.5 py-2 text-sm ${stickerVisa ? 'bottom-11' : 'bottom-4'}`}>
            <div className="mr-2 flex w-fit items-center gap-2 font-medium text-white">
              <span className="text-white">{visaCount}+ Visas on Time</span>
            </div>
          </div>
        )}
      </div>
      <div className="mt-2 flex w-full flex-col px-2.5 pb-4 pt-2 flex-grow">
        <div className="flex flex-row items-start justify-between gap-2">
          <h3 className="font-basier text-lg font-semibold text-black">{country}</h3>
          {price && <span test-id="home-visa-card-price" className="text-center text-base font-medium text-black">₹{price}</span>}
        </div>
        <div className="flex items-center justify-between mt-1">
          <div className="flex flex-1 flex-col">
            <div className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
              {date && <p>Get by&nbsp;<span className="font-bold text-primary">{date}</span></p>}
              {includesTruckIcon && (
                <div className="relative group flex items-center">
                  <span className="ml-1">includes</span> <TruckIcon />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 bg-gray-800 text-white text-xs rounded-md shadow-lg whitespace-nowrap">
                    Includes passport pick-up and delivery time
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 