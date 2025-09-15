import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Partner from '@/components/Partner';
import Services from '@/components/Services';
import Thumbnail from '@/components/Thumbnail';
import Whysochoose from '@/components/Whysochoose';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Thumbnail />
      <About />
      <Whysochoose />
      <Services />
      <Partner />
      <Gallery />
    </div>
  );
}
