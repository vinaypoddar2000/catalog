import React, { useState } from 'react';
import './ItemCard.css';

export default function ItemCard({ item, categoryColor, index, onClick }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const previewProps = item.itemprops.slice(0, 2);

  return (
    <div
      className="item-card"
      style={{ '--card-color': categoryColor, animationDelay: `${index * 40}ms` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
      aria-label={`View details for ${item.itemname}`}
    >
      <div className="item-card__img-wrap">
        {!imgLoaded && !imgError && (
          <div className="item-card__skeleton"><div className="item-card__shimmer" /></div>
        )}
        {!imgError ? (
          <img
            src={item.image}
            alt={item.itemname}
            className={`item-card__img ${imgLoaded ? 'item-card__img--loaded' : ''}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => { setImgError(true); setImgLoaded(true); }}
          />
        ) : (
          <div className="item-card__img-fallback"><span>📷</span></div>
        )}
        <div className="item-card__overlay" />
      </div>
      <div className="item-card__body">
        <h3 className="item-card__name">{item.itemname}</h3>
        {previewProps.length > 0 && (
          <div className="item-card__props">
            {previewProps.map(prop => (
              <div key={prop.label} className="item-card__prop">
                <span className="item-card__prop-label">{prop.label}</span>
                <span className="item-card__prop-val">{prop.value}</span>
              </div>
            ))}
          </div>
        )}
        <div className="item-card__footer">
          <span className="item-card__more">View Details →</span>
          {item.itemprops.length > 2 && (
            <span className="item-card__spec-count">+{item.itemprops.length - 2} specs</span>
          )}
        </div>
      </div>
    </div>
  );
}