
import React from 'react';
import { ViralVideo, ScriptLine, ViralHubVideo } from './types';

export const COLORS = {
  carbon: '#121212',
  blue: '#3B82F6',
  green: '#10B981',
  gray: '#9CA3AF',
};

export const MOCK_VIDEOS: ViralVideo[] = [
  {
    id: '1',
    thumbnail: 'https://picsum.photos/seed/v1/400/225',
    title: 'Top 5 AI Hacks for 2026',
    creator: 'TechGuru',
    views: '2.4M',
    tags: ['High Hook Score', 'Viral in US']
  },
  {
    id: '2',
    thumbnail: 'https://picsum.photos/seed/v2/400/225',
    title: 'Minimalist Studio Tour',
    creator: 'DesignInspo',
    views: '1.1M',
    tags: ['Aesthetic', 'High Retention']
  },
  {
    id: '3',
    thumbnail: 'https://picsum.photos/seed/v3/400/225',
    title: 'How I Built a SaaS in 24 Hours',
    creator: 'SaaSFounder',
    views: '800K',
    tags: ['Click-worthy', 'Trending US']
  },
  {
    id: '4',
    thumbnail: 'https://picsum.photos/seed/v4/400/225',
    title: 'React 19 Deep Dive',
    creator: 'DevMaster',
    views: '450K',
    tags: ['Educational', 'Niche High']
  }
];

export const HUB_VIDEOS: ViralHubVideo[] = [
  {
    id: 'h1',
    category: 'Tech',
    thumbnail: 'https://picsum.photos/seed/h1/400/225',
    title: 'Why 2026 is the year of local LLMs',
    creator: 'SiliconInsights',
    views: '1.2M',
    growthRate: '+450%',
    tags: ['Explainer', 'Tech'],
    summary: 'A deep dive into the shift from cloud AI to local processing with high-paced editing.',
    dna: {
      hook: 'Immediate problem-solution statement in first 2 seconds.',
      visualStyle: 'Dark mode UI mockups with neon overlays.',
      audioStrategy: 'Low-fi ambient beat with sharp SFX transitions.'
    }
  },
  {
    id: 'h2',
    category: 'Finance',
    thumbnail: 'https://picsum.photos/seed/h2/400/225',
    title: 'The Hidden Cost of Inflation',
    creator: 'MoneyWise',
    views: '890K',
    growthRate: '+120%',
    tags: ['Education', 'Finance'],
    summary: 'Simple metaphors using grocery prices to explain complex economic shifts.',
    dna: {
      hook: 'Showing a receipt from 2020 vs 2026.',
      visualStyle: 'Hand-drawn animation style on paper texture.',
      audioStrategy: 'Clear, crisp narrative voice with zero background music.'
    }
  },
  {
    id: 'h3',
    category: 'ASMR',
    thumbnail: 'https://picsum.photos/seed/h3/400/225',
    title: 'Restoring a 1920s Leica Camera',
    creator: 'PureCraft',
    views: '5.6M',
    growthRate: '+30%',
    tags: ['Satisfying', 'Craft'],
    summary: 'Long-form cuts with macro lens focus on mechanical parts.',
    dna: {
      hook: 'The click sound of a shutter within 0.5s.',
      visualStyle: 'Cinematic lighting, 4K resolution, 60fps.',
      audioStrategy: 'Binaural recording, no talking, enhanced mechanical sounds.'
    }
  },
  {
    id: 'h4',
    category: 'Lifestyle',
    thumbnail: 'https://picsum.photos/seed/h4/400/225',
    title: 'Morning Routine in Tokyo 2026',
    creator: 'NeoVlog',
    views: '2.1M',
    growthRate: '+210%',
    tags: ['Vlog', 'Travel'],
    summary: 'Fast-cut "Day in the Life" focusing on futuristic urban automation.',
    dna: {
      hook: 'Waking up to a robotic sun-simulator.',
      visualStyle: 'Cool color grade, wide-angle lens shots.',
      audioStrategy: 'Upbeat J-Pop inspired synthetic melody.'
    }
  }
];

export const MOCK_SCRIPT: ScriptLine[] = [
  { id: 1, time: '0:00', text: "Stop scrolling! Here's the secret to going viral.", score: 98, suggestion: "Perfect hook. Keep the fast cut here." },
  { id: 2, time: '0:05', text: "Most creators focus on the wrong metrics.", score: 75, suggestion: "A bit slow. Consider using a visually engaging chart." },
  { id: 3, time: '0:12', text: "I analyzed 1,000 videos to find the pattern.", score: 88, suggestion: "Social proof is strong. Add an overlay count." },
  { id: 4, time: '0:20', text: "First, you need to understand the 'Retention Hook'.", score: 60, suggestion: "Simplify the terminology for broader appeal." },
];
