// API configuration and helper functions
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetches all campaigns from the backend
 * @returns {Promise<Array>} Array of campaign objects
 */
export async function getCampaigns() {
  try {
    const response = await apiClient.get('/campaigns');
    return response.data;
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    throw error;
  }
}

/**
 * Creates a new campaign
 * @param {Object} campaignData - Campaign data to be created
 * @returns {Promise<Object>} Created campaign object
 */
export async function createCampaign(campaignData) {
  try {
    const response = await apiClient.post('/campaigns', campaignData);
    return response.data;
  } catch (error) {
    console.error('Error creating campaign:', error);
    throw error;
  }
}

/**
 * Validates campaign data before submission
 * @param {Object} campaignData - Campaign data to validate
 * @returns {Object} Validation result with errors if any
 */
export function validateCampaignData(campaignData) {
  const errors = {};

  if (!campaignData.name || campaignData.name.trim() === '') {
    errors.name = 'Campaign name is required';
  }

  if (!campaignData.budget) {
    errors.budget = 'Budget is required';
  } else if (isNaN(campaignData.budget) || Number(campaignData.budget) <= 0) {
    errors.budget = 'Budget must be a positive number';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

