import { useEffect } from 'react';
import { useRouter } from 'next/router';

function requireNude() {
  return new Promise((resolve) => {
    if (window.Nude) {
      return resolve(Nude);
    }

    window.addEventListener('nudeReady', () => resolve(window.Nude));
  });
}

export default function initNuml() {
  const router = useRouter();

  // `useEffect` guaranties that code will be executed
  // only in the client environment
  useEffect(() => {
    console.log('! effect');
    requireNude()
      .then(Nude => {
        // all stuff we need to do before init

        console.log('!', Nude, Nude.routing);

        // connect Next.js router to Numl links
        Nude.routing.setRouter((url, openNewTab) => {
          // skip outside links and links that open in new tabs
          if (
            openNewTab ||
            url.startsWith('https://') ||
            url.includes('//') ||
            url.startsWith('mailto:')
          ) {
            return true; // tell Numl to apply default behavior
          }

          router.push(url); // delegate routing to next/router

          return false; // tell Numl to do nothing with the link
        });

        // OPTIONAL: define custom units
        Nude.units.define('gp', 'var(--nu-grid-gap)');

        // OPTIONAL: define new elements
        Nude.define('nu-meme', {
          styles: {
            display: 'block',
            padding: '1x',
            bg: '#mark',
          },
        });

        // OPTIONAL: assign new options to the existing elements
        Nude.define('nu-card', {
          styles: {
            padding: '.5x 1x',
          },
        });

        // manually trigger Nude initialization
        Nude.init();
      }).catch(console.error);
  }, []);
}
