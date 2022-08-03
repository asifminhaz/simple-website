import React from 'react';

import Instrument from '../../asset/Instrument.mp4'
const Video = () => {
          return (
                    <div>
                               <video className=' mx-auto '  width="1150" height="700" controls autoPlay>
      <source src={Instrument} type="video/mp4"/>
     </video>
                    </div>
          );
};

export default Video;