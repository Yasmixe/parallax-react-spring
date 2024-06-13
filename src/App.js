import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import TextBlock from './TextBlock';
import './App.css'
function App() {
  return (
    <Parallax pages={2} style={{ top: '0', left: '0' }} className='animation'>
      <ParallaxLayer offset={0} speed={0.25}>
        <div className='animation_layer parallax' id='artback'>

        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <div className='animation_layer parallax' id='mountain        '>

        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.1}>
        <div className='animation_layer parallax' id='logoland'>

        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.3}>
        <div className='animation_layer parallax' id='jungle1'>

        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.35}>
        <div className='animation_layer' id='jungle2'>

        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.5}>
        <div className='animation_layer parallax' id='jungle3'>

        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.45}>
        <div className='animation_layer parallax' id='jungle4'>

        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.4}>
        <div className='animation_layer parallax' id='manonmountain'>

        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <div className='animation_layer parallax' id='jungle5'>

        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
      
    </Parallax>
  );
}

export default App;
