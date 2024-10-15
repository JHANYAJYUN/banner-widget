export function createBanners(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    image: `/banners/banner_${index + 1}.png`,
    url: '#',
  }));
}
