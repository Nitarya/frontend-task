import { NextResponse } from 'next/server';
import { getAllCampaigns, createCampaign } from '@/lib/campaignsModel';

/**
 * GET /api/campaigns
 * Returns all campaigns
 */
export async function GET() {
  try {
    const campaigns = getAllCampaigns();
    return NextResponse.json({
      success: true,
      data: campaigns
    });
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    return NextResponse.json(
      {
        success: false,
        statusCode: 500,
        message: 'Failed to fetch campaigns'
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/campaigns
 * Creates a new campaign
 */
export async function POST(request) {
  try {
    const campaignData = await request.json();
    
    // Validation
    const errors = {};
    
    if (!campaignData.name || campaignData.name.trim() === '') {
      errors.name = 'Campaign name is required';
    }
    
    if (!campaignData.budget) {
      errors.budget = 'Budget is required';
    } else if (typeof campaignData.budget === 'number' && campaignData.budget <= 0) {
      errors.budget = 'Budget must be a positive number';
    } else if (typeof campaignData.budget === 'string') {
      const budgetNum = parseFloat(campaignData.budget);
      if (isNaN(budgetNum) || budgetNum <= 0) {
        errors.budget = 'Budget must be a valid positive number';
      }
    }
    
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          statusCode: 400,
          message: 'Validation failed',
          errors: errors
        },
        { status: 400 }
      );
    }
    
    // Create campaign
    const newCampaign = createCampaign(campaignData);
    
    return NextResponse.json(
      {
        success: true,
        statusCode: 201,
        message: 'Campaign created successfully',
        data: newCampaign
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating campaign:', error);
    return NextResponse.json(
      {
        success: false,
        statusCode: 500,
        message: 'Failed to create campaign'
      },
      { status: 500 }
    );
  }
}

