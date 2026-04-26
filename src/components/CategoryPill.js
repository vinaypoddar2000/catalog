import React from 'react';
import './CategoryPill.css';

export default function CategoryPill({ label, icon, color, active, count, onClick }) {
  return (
    <button
      className={`cat-pill ${active ? 'cat-pill--active' : ''}`}
      style={{ '--pill-color': color }}
      onClick={onClick}
      aria-pressed={active}
    >
      <span className="cat-pill__icon">{icon}</span>
      <span className="cat-pill__label">{label}</span>
      <span className="cat-pill__count">{count}</span>
    </button>
  );
}