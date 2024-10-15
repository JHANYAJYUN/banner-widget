import { Meta, StoryFn } from '@storybook/react';
import BannerCarousel, { BannerCarouselProps } from './index';

export default {
  title: 'Components/BannerCarousel',
  component: BannerCarousel,
} as Meta;

const banners1 = [{ id: 1, image: '/banners/banner_1.png', url: '#' }];

const banners2 = [
  { id: 1, image: '/banners/banner_1.png', url: '#' },
  { id: 2, image: '/banners/banner_2.png', url: '#' },
];

const banners3 = [
  { id: 1, image: '/banners/banner_1.png', url: '#' },
  { id: 2, image: '/banners/banner_2.png', url: '#' },
  { id: 3, image: '/banners/banner_3.png', url: '#' },
];

const banners5 = [
  { id: 1, image: '/banners/banner_1.png', url: '#' },
  { id: 2, image: '/banners/banner_2.png', url: '#' },
  { id: 3, image: '/banners/banner_3.png', url: '#' },
  { id: 4, image: '/banners/banner_4.png', url: '#' },
  { id: 5, image: '/banners/banner_5.png', url: '#' },
];

const banners8 = [
  { id: 1, image: '/banners/banner_1.png', url: '#' },
  { id: 2, image: '/banners/banner_2.png', url: '#' },
  { id: 3, image: '/banners/banner_3.png', url: '#' },
  { id: 4, image: '/banners/banner_4.png', url: '#' },
  { id: 5, image: '/banners/banner_5.png', url: '#' },
];

const Template: StoryFn<BannerCarouselProps> = (args) => (
  <BannerCarousel {...args} />
);

export const OneBanner = Template.bind({});
OneBanner.args = {
  banners: banners1,
};

export const TwoBanners = Template.bind({});
TwoBanners.args = {
  banners: banners2,
};

export const ThreeBanners = Template.bind({});
ThreeBanners.args = {
  banners: banners3,
};

export const FiveBanners = Template.bind({});
FiveBanners.args = {
  banners: banners5,
};
