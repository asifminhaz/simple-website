
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import WhatWeDo from './Component/WhatWeDo/WhatWeDo';
import WhatWeAre from './Component/WhatweAre/WhatWeAre';
import BeingHere from './Component/BeingHere/BeingHere';
import Career from './Component/Career/Career';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Articles from './Component/Articles';
import NotFound from './Component/NotFound';
function App() {
  return (
    <div className='full'>
      <Header></Header>

     <Routes>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/whatWeDo' element={<WhatWeDo></WhatWeDo>}></Route>
     <Route path='/whatWeAre' element={<WhatWeAre></WhatWeAre>}></Route>
     <Route path='/beingHere' element={<BeingHere></BeingHere>}></Route>
     <Route path='/careers' element={<Career></Career>}></Route>
     <Route path='/articles' element={<Articles></Articles>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
