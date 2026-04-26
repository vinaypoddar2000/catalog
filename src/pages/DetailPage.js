import React, { useState } from 'react';
import './DetailPage.css';

const CATEGORY_META = {
  Cars:      { icon: '🚗', color: 'var(--cat-cars)' },
  Bikes:     { icon: '🏍️', color: 'var(--cat-bikes)' },
  Phones:    { icon: '📱', color: 'var(--cat-phones)' },
  Computers: { icon: '💻', color: 'var(--cat-computers)' },
};

export default function DetailPage({ item, onBack }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const meta = CATEGORY_META[item.category] || { icon: '◈', color: '#ffffff' };

  return (
    <div className="detail" style={{ '--item-color': meta.color }}>
      <nav className="detail__nav">
        <div className="detail__nav-inner">
          <button className="detail__back" onClick={onBack}>
            <span className="detail__back-arrow">←</span>
            <span>Back to Catalog</span>
          </button>
          <div className="detail__breadcrumb">
            <span>Catalog</span>
            <span className="detail__breadcrumb-sep">›</span>
            <span style={{ color: meta.color }}>{item.category}</span>
            <span className="detail__breadcrumb-sep">›</span>
            <span className="detail__breadcrumb-current">{item.itemname}</span>
          </div>
        </div>
      </nav>

      <div className="detail__body">
        <div className="detail__image-panel">
          <div className="detail__image-wrap">
            <div className="detail__image-glow" />
            {!imgLoaded && !imgError && (
              <div className="detail__image-skeleton">
                <div className="detail__skeleton-shimmer" />
              </div>
            )}
            {!imgError ? (
              <img
                src={item.image}
                alt={item.itemname}
                className={`detail__image ${imgLoaded ? 'detail__image--loaded' : ''}`}
                onLoad={() => setImgLoaded(true)}
                onError={() => { setImgError(true); setImgLoaded(true); }}
              />
            ) : (
              <div className="detail__image-fallback">
                <span>{meta.icon}</span>
                <p>Image unavailable</p>
              </div>
            )}
          </div>
          <div className="detail__category-badge">
            <span>{meta.icon}</span>
            <span>{item.category}</span>
          </div>
        </div>

        <div className="detail__info-panel">
          <div className="detail__info-top">
            <p className="detail__cat-label">
              <span className="detail__cat-dot" />
              {item.category}
            </p>
            <h1 className="detail__name">{item.itemname}</h1>
          </div>
          <div className="detail__divider" />
          <div className="detail__specs">
            <h2 className="detail__specs-title">Specifications</h2>
            <div className="detail__props">
              {item.itemprops.map((prop, idx) => (
                <div key={prop.label} className="detail__prop" style={{ animationDelay: `${idx * 60}ms` }}>
                  <span className="detail__prop-label">{prop.label}</span>
                  <span className="detail__prop-value">{prop.value}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="detail__cta" onClick={onBack}>
            <span>← Explore More</span>
          </button>
        </div>
      </div>
    </div>
  );
}