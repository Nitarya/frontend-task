import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'campaigns.json');
const IS_PRODUCTION = process.env.NODE_ENV === 'production' || process.env.NETLIFY === 'true';

// Initial dummy data
const INITIAL_DATA = [
  {
    id: '1',
    name: 'Summer Sale 2025',
    budget: 50000,
    status: 'active',
    startDate: '2025-06-01',
    endDate: '2025-08-31',
    targetAudience: 'Young Adults',
    platform: 'Social Media',
    createdAt: new Date('2025-05-15').toISOString()
  },
  {
    id: '2',
    name: 'Holiday Special',
    budget: 75000,
    status: 'active',
    startDate: '2025-12-01',
    endDate: '2025-12-31',
    targetAudience: 'Families',
    platform: 'TV & Digital',
    createdAt: new Date('2025-11-01').toISOString()
  },
  {
    id: '3',
    name: 'Product Launch Campaign',
    budget: 100000,
    status: 'planned',
    startDate: '2026-01-15',
    endDate: '2026-03-15',
    targetAudience: 'Tech Enthusiasts',
    platform: 'Digital',
    createdAt: new Date('2025-12-01').toISOString()
  }
];

// In-memory store for production/serverless environments
let inMemoryStore = [...INITIAL_DATA];

/**
 * Ensures the campaigns.json file exists with initial dummy data
 * Only used in development environment
 */
function ensureDataFile() {
  if (IS_PRODUCTION) return;
  
  try {
    const dataDir = path.join(process.cwd(), 'data');
    
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(INITIAL_DATA, null, 2));
    }
  } catch (error) {
    console.warn('Unable to create data file, using in-memory store:', error.message);
  }
}

/**
 * Retrieves all campaigns
 * Uses file system in development, in-memory store in production
 * @returns {Array} Array of campaign objects
 */
export function getAllCampaigns() {
  if (IS_PRODUCTION) {
    return [...inMemoryStore];
  }
  
  try {
    ensureDataFile();
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.warn('Unable to read from file system, using in-memory store:', error.message);
    return [...inMemoryStore];
  }
}

/**
 * Creates a new campaign and saves it
 * Uses file system in development, in-memory store in production
 * @param {Object} campaignData - Campaign data to create
 * @returns {Object} The newly created campaign
 */
export function createCampaign(campaignData) {
  const campaigns = getAllCampaigns();
  
  const newCampaign = {
    id: Date.now().toString(),
    ...campaignData,
    budget: typeof campaignData.budget === 'string' 
      ? parseFloat(campaignData.budget) 
      : campaignData.budget,
    status: campaignData.status || 'planned',
    createdAt: new Date().toISOString()
  };

  campaigns.push(newCampaign);
  
  if (IS_PRODUCTION) {
    // Update in-memory store in production
    inMemoryStore = campaigns;
  } else {
    // Save to file in development
    try {
      fs.writeFileSync(DATA_FILE, JSON.stringify(campaigns, null, 2));
    } catch (error) {
      console.warn('Unable to write to file system, using in-memory store:', error.message);
      inMemoryStore = campaigns;
    }
  }
  
  return newCampaign;
}

