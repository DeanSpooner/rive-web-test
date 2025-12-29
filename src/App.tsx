import { useState } from 'react';
import './App.css';
import { useRive } from '@rive-app/react-canvas';
import vehiclesRive from './assets/animations/vehicles.riv';

function App() {
  const { rive, RiveComponent } = useRive({
    src: vehiclesRive,
    stateMachines: 'bumpy',
    autoplay: true,
  });

  const [pause, setPause] = useState(false);

  const togglePause = () => {
    if (!rive) return;

    setPause(!pause);

    if (pause) {
      rive.play();
    } else {
      rive.pause();
    }
  };

  return (
    <>
      <button onClick={togglePause}>{pause ? 'Resume' : 'Pause'}</button>
      <RiveComponent
        onClick={togglePause}
        style={{ width: '80vw', height: '50vh' }}
      />
    </>
  );
}

export default App;
