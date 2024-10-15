import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BannerCarousel, { BannerCarouselProps } from './index';

jest.useFakeTimers();

const banners: BannerCarouselProps['banners'] = [
  { id: 1, image: '/banners/banner_1.png', url: '#' },
  { id: 2, image: '/banners/banner_2.png', url: '#' },
  { id: 3, image: '/banners/banner_3.png', url: '#' },
];

describe('BannerCarousel component', () => {
  it('should automatically change banners after the interval', () => {
    render(<BannerCarousel banners={banners} interval={3000} />);

    expect(screen.getByAltText('banner-1')).toBeInTheDocument();

    jest.advanceTimersByTime(3000);
    expect(screen.getByAltText('banner-2')).toBeInTheDocument();

    jest.advanceTimersByTime(3000);
    expect(screen.getByAltText('banner-3')).toBeInTheDocument();

    jest.advanceTimersByTime(3000);
    expect(screen.getByAltText('banner-1')).toBeInTheDocument();
  });

  it('should switch banners when next and prev buttons are clicked', () => {
    render(<BannerCarousel banners={banners} interval={3000} />);

    expect(screen.getByAltText('banner-1')).toBeInTheDocument();

    const nextButton = screen.getByAltText('next-btn');
    fireEvent.click(nextButton);
    expect(screen.getByAltText('banner-2')).toBeInTheDocument();

    fireEvent.click(nextButton);
    expect(screen.getByAltText('banner-3')).toBeInTheDocument();

    const prevButton = screen.getByAltText('prev-btn');
    fireEvent.click(prevButton);
    expect(screen.getByAltText('banner-2')).toBeInTheDocument();

    fireEvent.click(prevButton);
    expect(screen.getByAltText('banner-1')).toBeInTheDocument();
  });

  it('should change to the correct banner when a pagination button is clicked', () => {
    render(<BannerCarousel banners={banners} interval={3000} />);

    expect(screen.getByAltText('banner-1')).toBeInTheDocument();

    
    const paginationButton2 = screen.getByAltText('pagination-2');
    fireEvent.click(paginationButton2);
    expect(screen.getByAltText('banner-2')).toBeInTheDocument();

    const paginationButton3 = screen.getByAltText('pagination-3');
    fireEvent.click(paginationButton3);
    expect(screen.getByAltText('banner-3')).toBeInTheDocument();
  });
});
