import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import Team from './components/shared/Team';
import Workers from './components/workers/Workers';
import Services from './components/services/Services';
import Comments from './components/comments/Comments';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/Home';

const App = () => (
  <>
  
  <Navbar />
  <Routes>
    <Route path= '/' element={<Home />} />
    <Route path= '/team' element={<Team />} />
    <Route path= '/workers' element={<Workers />} />
    <Route path= '/workers/:workerId/services' element={<Services />} /> 
    {/* <Route path= '/comments' element={<Comments />} />  */}
    <Route path= '*' element={<NoMatch />} />
  </Routes>
</>
)

export default App;