const backendBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const fallbackDashboard = {
  stats: [
    { label: 'Interviews completed', value: '12.4k' },
    { label: 'Hiring velocity', value: '3.2x' },
    { label: 'AI score accuracy', value: '96%' },
    { label: 'Client retention', value: '89%' },
  ],
  services: [
    { name: 'AI Talent Matching', description: 'Search, screen, and shortlist top engineering talent.' },
    { name: 'Assessment Automation', description: 'Standardized interviews and AI-powered scoring workflows.' },
    { name: 'Growth Advisory', description: 'Build product teams that scale with your roadmap.' },
    { name: 'Custom Data Services', description: 'Human-feedback workflows for LLM evaluation and training.' },
  ],
  pipeline: [
    { name: 'Senior Frontend Engineer', count: 18 },
    { name: 'AI Product Manager', count: 9 },
    { name: 'ML Ops Engineer', count: 14 },
  ],
};

const fallbackLeadResponse = { message: 'Lead captured successfully. A PeopleAI expert will contact you soon.' };

const request = async (url, options = {}) => {
  try {
    const response = await fetch(`${backendBase}${url}`, {
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
      ...options,
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    return await response.json();
  } catch (error) {
    return null;
  }
};

export const api = {
  getDashboard: async () => {
    const payload = await request('/api/dashboard');
    return payload || fallbackDashboard;
  },
  submitLead: async (data) => {
    const payload = await request('/api/contact/lead', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    return payload || fallbackLeadResponse;
  },
};
