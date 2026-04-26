import React, { useState, useMemo } from 'react';
import catalogData from '../data/catalogData';
import ItemCard from '../components/ItemCard';
import CategoryPill from '../components/CategoryPill';
import './HomePage.css';

const CATEGORY_META = {
  Cars:      { icon: '🚗', color: 'var(--cat-cars)',      desc: 'Performance & Style' },
  Bikes:     { icon: '🏍️', color: 'var(--cat-bikes)',     desc: 'Power & Freedom' },
  Phones:    { icon: '📱', color: 'var(--cat-phones)',    desc: 'Connectivity & Tech' },
  Computers: { icon: '💻', color: 'var(--cat-computers)', desc: 'Power & Productivity' },
};

export default function HomePage({ onSelectItem }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => ['All', ...Object.keys(CATEGORY_META)], []);

  const grouped = useMemo(() => {
    const q = searchQuery.toLowerCase();
    const filtered = catalogData.filter(item => {
      const matchesCat = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.itemname.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
    const groups = {};
    filtered.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [activeCategory, searchQuery]);

  const totalItems = Object.values(grouped).flat().length;

  return (
    <div className="home">
      <header className="home__header">
        <div className="home__header-inner">
          <div className="home__logo">
            <span className="home__logo-icon">◈</span>
            <span className="home__logo-text"><span>CATALOG</span></span>
          </div>
          <div className="home__search-wrap">
            <span className="home__search-icon">⌕</span>
            <input
              className="home__search"
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="home__search-clear" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>
        </div>
      </header>

      <section className="home__hero">
        <div className="home__hero-bg">
          {Object.values(CATEGORY_META).map((m, i) => (
            <div key={i} className={`home__hero-orb home__hero-orb--${i}`} style={{ background: m.color }} />
          ))}
        </div>
        <div className="home__hero-content">
          <p className="home__hero-eyebrow">Multi-Category Catalog</p>
          <h1 className="home__hero-title">Explore the<br /><em>Best</em> Products</h1>
          <p className="home__hero-sub">{catalogData.length} items across {Object.keys(CATEGORY_META).length} categories</p>
        </div>
      </section>

      <section className="home__filters">
        <div className="home__filters-inner">
          {categories.map(cat => (
            <CategoryPill
              key={cat}
              label={cat}
              icon={cat !== 'All' ? CATEGORY_META[cat]?.icon : '✦'}
              color={cat !== 'All' ? CATEGORY_META[cat]?.color : '#ffffff'}
              active={activeCategory === cat}
              count={cat === 'All' ? catalogData.length : catalogData.filter(i => i.category === cat).length}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>
      </section>

      <div className="home__results-info">
        <span>{totalItems} item{totalItems !== 1 ? 's' : ''} found</span>
        {searchQuery && <span className="home__results-query">for "{searchQuery}"</span>}
      </div>

      <main className="home__catalog">
        {Object.keys(grouped).length === 0 ? (
          <div className="home__empty">
            <span>🔍</span>
            <p>No items match your search</p>
          </div>
        ) : (
          Object.entries(grouped).map(([category, items]) => (
            <section key={category} className="home__section">
              <div className="home__section-header">
                <div className="home__section-label" style={{ '--cat-color': CATEGORY_META[category]?.color }}>
                  <span className="home__section-icon">{CATEGORY_META[category]?.icon}</span>
                  <div>
                    <h2 className="home__section-title">{category}</h2>
                    <p className="home__section-desc">{CATEGORY_META[category]?.desc}</p>
                  </div>
                </div>
                <span className="home__section-count">{items.length} items</span>
              </div>
              <div className="home__grid">
                {items.map((item, idx) => (
                  <ItemCard
                    key={item.itemname}
                    item={item}
                    categoryColor={CATEGORY_META[category]?.color}
                    index={idx}
                    onClick={() => onSelectItem(item)}
                  />
                ))}
              </div>
            </section>
          ))
        )}
      </main>

      <footer className="home__footer">
        <p>Catalog — {new Date().getFullYear()} · {catalogData.length} Products</p>
      </footer>
    </div>
  );
}