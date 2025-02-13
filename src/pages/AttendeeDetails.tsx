import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AttendeeData {
  fullName: string;
  email: string;
  avatarUrl: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  avatarUrl?: string;
}

export function AttendeeDetails() {
  const [formData, setFormData] = useState<AttendeeData>(() => {
    const saved = localStorage.getItem('attendeeData');
    return saved ? JSON.parse(saved) : {
      fullName: '',
      email: '',
      avatarUrl: ''
    };
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('attendeeData', JSON.stringify(formData));
  }, [formData]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.avatarUrl.trim()) {
      newErrors.avatarUrl = 'Avatar URL is required';
    } else if (!/^https?:\/\/.+/.test(formData.avatarUrl)) {
      newErrors.avatarUrl = 'Please enter a valid image URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const ticketData = JSON.parse(localStorage.getItem('ticketData') || '{}');
      const ticketId = Math.random().toString(36).substr(2, 9);
      
      const ticket = {
        id: ticketId,
        ...formData,
        ...ticketData,
        purchaseDate: new Date().toISOString()
      };

      const existingTickets = JSON.parse(localStorage.getItem('tickets') || '[]');
      localStorage.setItem('tickets', JSON.stringify([...existingTickets, ticket]));
      
      navigate('/ticket-ready');
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Attendee Details</h1>
            <span className="text-sm text-primary">Step 2/3</span>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="glass-card w-full p-4 bg-transparent text-white"
                aria-describedby="fullName-error"
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-2 text-red-400 text-sm">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="glass-card w-full p-4 bg-transparent text-white"
                aria-describedby="email-error"
              />
              {errors.email && (
                <p id="email-error" className="mt-2 text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="avatarUrl" className="block text-sm font-medium text-gray-400 mb-2">
                Avatar URL
              </label>
              <input
                type="url"
                id="avatarUrl"
                value={formData.avatarUrl}
                onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                className="glass-card w-full p-4 bg-transparent text-white"
                placeholder="https://example.com/avatar.jpg"
                aria-describedby="avatarUrl-error"
              />
              {errors.avatarUrl && (
                <p id="avatarUrl-error" className="mt-2 text-red-400 text-sm">{errors.avatarUrl}</p>
              )}
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button type="button" onClick={() => navigate(-1)} className="btn-secondary">
                Previous
              </button>
              <button type="submit" className="btn-primary">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}