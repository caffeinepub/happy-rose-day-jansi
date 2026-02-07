import { useEffect } from 'react';
import { GlobalAudioProvider } from './audio/GlobalAudioProvider';
import { GlobalAudioToggle } from './components/GlobalAudioToggle';
import { GlobalMoodToggle } from './components/GlobalMoodToggle';
import { FloatingHeartsBackground } from './components/FloatingHeartsBackground';
import { useMicrositeFlowStore } from './state/micrositeFlowStore';
import { useMoodStore } from './state/moodStore';
import Page1Welcome from './pages/Page1Welcome';
import Page2MeaningOfRoses from './pages/Page2MeaningOfRoses';
import Page3BouquetBuilder from './pages/Page3BouquetBuilder';
import Page4AcceptMyFlower from './pages/Page4AcceptMyFlower';
import Page5Music from './pages/Page5Music';
import Page6FinalMessage from './pages/Page6FinalMessage';
import Page7Replay from './pages/Page7Replay';

function App() {
  const currentPage = useMicrositeFlowStore((state) => state.currentPage);
  const mode = useMoodStore((state) => state.mode);

  useEffect(() => {
    if (mode === 'night') {
      document.documentElement.classList.add('night-mode');
    } else {
      document.documentElement.classList.remove('night-mode');
    }
  }, [mode]);

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1Welcome />;
      case 2:
        return <Page2MeaningOfRoses />;
      case 3:
        return <Page3BouquetBuilder />;
      case 4:
        return <Page4AcceptMyFlower />;
      case 5:
        return <Page5Music />;
      case 6:
        return <Page6FinalMessage />;
      case 7:
        return <Page7Replay />;
      default:
        return <Page1Welcome />;
    }
  };

  return (
    <GlobalAudioProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <FloatingHeartsBackground />
        <GlobalMoodToggle />
        <GlobalAudioToggle />
        <div className="relative z-10">{renderPage()}</div>
      </div>
    </GlobalAudioProvider>
  );
}

export default App;
