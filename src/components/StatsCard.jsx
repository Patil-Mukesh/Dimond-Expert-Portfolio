import React from 'react';

export default function StatsCard({ label, value }) {
  return (
    <div className="card stats-card">
      <p className="label">{label}</p>
      <p className="value">{value}</p>
    </div>
  );
}
