"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CampaignForm from "@/components/campaigns/CampaignForm";
import CampaignsList from "@/components/campaigns/CampaignsList";
import { getCampaigns, createCampaign } from "@/lib/api";

export default function CampaignsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Check URL params to auto-open form
  useEffect(() => {
    if (searchParams.get("showForm") === "true") {
      setShowForm(true);
      // Clean up URL without the query param
      router.replace("/dashboard/campaigns", { scroll: false });
    }
  }, [searchParams, router]);

  // Fetch campaigns on component mount
  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCampaigns();
      setCampaigns(data);
    } catch (err) {
      setError("Failed to fetch campaigns. Make sure the backend is running on http://localhost:4000");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCampaign = async (campaignData) => {
    try {
      const result = await createCampaign(campaignData);
      
      // Refresh the campaigns list
      await fetchCampaigns();
      
      // Hide the form
      setShowForm(false);
      
      return { success: true, data: result };
    } catch (err) {
      console.error(err);
      return { success: false, error: err.message };
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Campaigns</h1>
            <p className="text-gray-600 mt-1">Manage your marketing campaigns</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {showForm ? "Cancel" : "+ New Campaign"}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            <p className="font-medium">Error</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Campaign Form */}
        {showForm && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Create New Campaign</h2>
            <CampaignForm onSubmit={handleCreateCampaign} />
          </div>
        )}

        {/* Campaigns List */}
        <CampaignsList campaigns={campaigns} loading={loading} onRefresh={fetchCampaigns} />
      </div>
    </DashboardLayout>
  );
}

