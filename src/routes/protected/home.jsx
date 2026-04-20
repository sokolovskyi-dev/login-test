import heroImage from '@/assets/images/home/hero.avif';
import { PixelImage } from '@/components/ui/pixel-image';

export function Component() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <PixelImage
        src={heroImage}
        alt="Contacts app hero"
        customGrid={{ rows: 4, cols: 6 }}
        grayscaleAnimation
      />
    </div>
  );
}
Component.displayName = 'HomePage';
