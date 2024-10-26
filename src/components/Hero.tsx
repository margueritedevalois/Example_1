import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { useImageRotation } from '../hooks/useImageRotation';

function Hero() {
  const specializations = ['в области', 'IT', 'DevOps', 'Junior', 'Senior'];
  const { text } = useTypewriter(specializations, {
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 1500
  });

  const images = [
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80'
  ];

  const { currentImage, isTransitioning } = useImageRotation(images);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[#1A1F3D] clip-diagonal overflow-hidden">
        <div 
          className={`absolute right-0 top-0 w-1/2 h-full bg-cover bg-center bg-image-fade ${
            isTransitioning ? 'opacity-0' : 'opacity-90'
          }`}
          style={{
            backgroundImage: `url('${currentImage}')`,
            clipPath: 'polygon(100px 0, 100% 0, 100% 100%, 0 100%)'
          }}
        />
        
        {/* Decorative Elements */}
        <img 
          src="https://i.ibb.co/nQXKkbh/Triangle3-2.png" 
          alt="" 
          className="absolute right-[45%] top-[20%] w-16 h-16 opacity-50 animate-pulse"
        />
        <img 
          src="https://i.ibb.co/5xkZfhQ/Top-Ton-Coin4-3.png" 
          alt="" 
          className="absolute right-[30%] bottom-[30%] w-20 h-20 opacity-40 animate-bounce"
          style={{ animationDuration: '3s' }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 pt-32">
        <div className="max-w-2xl text-white space-y-8">
          <p className="text-[#F8976C] font-medium">
            Кадровое агентство, которому доверяют.
          </p>
          
          <h1 className="text-5xl font-bold leading-tight">
            Находим таланты<br />
            <span className="text-[#F8976C] inline-block min-w-[200px] typewriter-cursor">
              {text}
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg">
            Более 10 лет мы находим для вас самых подходящих<br />
            и квалифицированных кандидатов.
          </p>
          
          <button className="bg-[#F8976C] text-white px-8 py-3 rounded-md hover:bg-[#f7855c] transition-colors text-lg">
            Найти таланты
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;