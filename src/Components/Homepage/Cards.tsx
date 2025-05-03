"use client";
import { useEffect } from 'react';

const cards = [
  {
    title: 'Easy Access',
    icon: 'globe-outline',
    description: 'Simple and secure cloud-based platform with quick access to all features.',
  },
  {
    title: 'Smart Management',
    icon: 'bar-chart-outline',
    description: 'Effortless Billing, Efficiently manage your entire fleet through our intuitive platform.',
  },
  {
    title: 'Revenue Tracking',
    icon: 'wallet-outline',
    description: 'Real-time revenue tracking and financial analytics.',
  },
  {
    title: 'Customer Manage',
    icon: 'person-add-outline',
    description: 'Enhance customer experience with streamlined booking for effortless management.',
  },
  {
    title: 'Reduce Cost',
    icon: 'speedometer-outline',
    description: 'Optimize operations and reduce overhead costs with smart automation.',
  },
  {
    title: 'Technical Support',
    icon: 'laptop-outline',
    description: '10AM to 7PM technical support for your business.',
  },
];

export default function Cards() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
    script.type = 'module';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
    <h1 className="text-3xl md:text-6xl py-4 font-extrabold bg-gradient-to-r from-gray-500 via-white to-gray-100 text-transparent bg-clip-text font-serif m-8">Why Choose Novprayan</h1>

    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gradient-to-r from-black via-[#111827] to-[#1f2937] p-10 font-serif">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative w-80 h-[450px] m-6 rounded-[20px] rounded-b-[160px] shadow-lg overflow-hidden bg-gradient-to-b from-[#173E50] to-[#6A4C8C] transform transition-transform duration-500 hover:scale-105 hover:shadow-xl`}
        >
       
          <div className="absolute top-[-120px] left-[-20%] w-full h-[120%] transform rotate-[45deg] pointer-events-none blur-[5px] bg-gradient-to-r from-transparent to-[#D3A8FF]/20"></div>

          <div className="relative w-36 h-30 bg-[#3c2846] rounded-b-[100px] shadow-[0_15px_0_rgba(0,0,0,0.1),inset_0_-8px_0_white] flex justify-center items-start z-10 mx-auto">
            <div className="absolute top-0 left-[-50px] w-[50px] h-[50px] rounded-tr-[50px] shadow-[15px_-15px_0_15px_#3c2846]"></div>
            <div className="absolute top-0 right-[-50px] w-[50px] h-[50px] rounded-tl-[50px] shadow-[-15px_-15px_0_15px_#3c2846]"></div>
            <div
              className="text-white text-[6em] z-20"
              dangerouslySetInnerHTML={{
                __html: `<ion-icon name="${card.icon}" style="stroke-width: 24px;"></ion-icon>`,
              }}
            />
          </div>

          <div className="absolute bottom-32 w-full px-8 text-center flex flex-col justify-center items-center">
            <h2 className="text-white text-2xl mb-2">{card.title}</h2>
            <p className="text-white text-sm leading-[1.5em]">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
