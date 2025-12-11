"use client";

import { useRouter } from "next/navigation";
import { Upload, Plus, Bell } from "lucide-react";
import Button from "@/components/ui/Button";
import { MobileMenuButton } from "./Sidebar";

export default function Header({ onMenuClick }) {
  const router = useRouter();

  const handleNewCampaign = () => {
    router.push("/dashboard/campaigns?showForm=true");
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <MobileMenuButton onClick={onMenuClick} />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Good morning, Admin 👋
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Here's how your AI SDR performed in the last 7 days.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} className="text-gray-600" />
            </button>
            
            <div className="hidden md:flex items-center gap-3">
              <Button variant="secondary" icon={Upload}>
                Upload Leads
              </Button>
              <Button variant="primary" icon={Plus} onClick={handleNewCampaign}>
                New Campaign
              </Button>
            </div>
            
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={handleNewCampaign}
            >
              <Plus size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

