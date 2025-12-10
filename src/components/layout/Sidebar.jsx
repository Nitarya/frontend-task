"use client";

import { useState } from "react";
import { 
  LayoutGrid, 
  Send, 
  Inbox,
  Mail,
  Book,
  Settings, 
  Sparkles, 
  X,
  Menu
} from "lucide-react";
import { NAVIGATION_ITEMS } from "@/lib/constants";

const iconMap = {
  LayoutGrid,
  Send,
  Inbox,
  Mail,
  Book,
  Settings,
};

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside 
        className={`
          fixed top-0 left-0 h-full w-64 z-50
          bg-gradient-to-b from-blue-600 to-blue-900
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-blue-600" />
            </div>
            <span className="text-white font-bold text-xl tracking-wide">TEST</span>
          </div>
          
          <button 
            onClick={onClose}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-1">
            {NAVIGATION_ITEMS.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <li key={item.id}>
                  <button
                    className={`
                      w-full flex items-center gap-3
                      px-4 py-3.5 rounded-xl
                      transition-all duration-200
                      ${item.active 
                        ? 'bg-white text-blue-600 font-semibold shadow-lg' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                      }
                    `}
                  >
                    <Icon size={22} strokeWidth={item.active ? 2.5 : 2} />
                    <span className="text-base">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="p-6 mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles size={20} className="text-blue-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">AURA</div>
              <div className="text-xs text-white/70">Analyzing your leads...</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export function MobileMenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
    >
      <Menu size={24} className="text-gray-700" />
    </button>
  );
}

