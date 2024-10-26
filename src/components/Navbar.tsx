import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Dropdown from './Dropdown';

const navItems = {
  'О нас': ['Пункт 1', 'Пункт 2', 'Пункт 3'],
  'Услуги': ['Пункт 1', 'Пункт 2', 'Пункт 3'],
  'Цены': ['Пункт 1', 'Пункт 2', 'Пункт 3'],
  'Кейсы': ['Пункт 1', 'Пункт 2', 'Пункт 3'],
  'Блог': ['Пункт 1', 'Пункт 2', 'Пункт 3'],
};

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-800">РИТЕЙЛ ПЕРСОНАЛ</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {Object.entries(navItems).map(([label, items]) => (
            <Dropdown key={label} label={label} items={items} />
          ))}
          <button className="bg-[#F8976C] text-white px-6 py-2 rounded-md hover:bg-[#f7855c] transition-colors">
            Связаться
          </button>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="px-4 py-2">
            {Object.entries(navItems).map(([label, items]) => (
              <div key={label} className="py-2">
                <div className="font-medium text-gray-800 py-2">{label}</div>
                <div className="pl-4">
                  {items.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block py-2 text-gray-600 hover:text-gray-800"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <button className="w-full bg-[#F8976C] text-white px-6 py-2 rounded-md hover:bg-[#f7855c] transition-colors mt-2">
              Связаться
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;