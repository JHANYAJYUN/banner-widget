import { createBanners } from './util/banners';
import BannerCarousel from './components/BannerCarousel';
import 'styles/index.scss';

function App() {
  const banners = createBanners(5);
  return (
    <div className="app">
      <BannerCarousel banners={banners} />
    </div>
  );
}

export default App;
