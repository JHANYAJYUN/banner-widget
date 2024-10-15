import React, { useState, useEffect, useRef } from 'react';
import 'styles/BannerCarousel/index.scss';

export type BannerCarouselProps = {
  banners: { id: number; image: string; url: string }[];
  interval?: number;
};

const BannerCarousel: React.FC<BannerCarouselProps> = ({
  banners,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (banners.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, interval);

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [banners.length, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="banner-carousel">
      <div className="carousel-wrapper">
        {banners.map((banner, index) => (
          <a
            key={banner.id}
            href={banner.url}
            className={`banner ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={banner.image} alt={`banner-${banner.id}`} />
          </a>
        ))}
      </div>

      {banners.length > 1 && (
        <div className="arrow-group">
          <button className="prev" onClick={handlePrev}>
            <img src="/common/arrow/prev_arrow.png" alt="prev-btn" />
          </button>

          <div className="pagination">
            {banners.map((_, index) => (
              <button
                key={index}
                className="pagination-number"
                onClick={() => goToSlide(index)}
              >
                <img
                  src={
                    index === currentIndex
                      ? `/common/pagination/${index + 1}_active.png`
                      : `/common/pagination/${index + 1}.png`
                  }
                  alt={`pagination-${index + 1}`}
                />
              </button>
            ))}
          </div>

          <button className="next" onClick={handleNext}>
            <img src="/common/arrow/next_arrow.png" alt="next-btn" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BannerCarousel;
