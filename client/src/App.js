import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import Team from './components/shared/Team';
import Workers from './components/workers/Workers';
import Services from './components/services/Services';
import Comments from './components/comments/Comments';
import MainNavbar from './components/shared/MainNavbar';
import NoMatch from './components/shared/Home';
import Footer from './components/shared/Footer';

const App = () => (
  <>
  
  <MainNavbar />
  <Routes>
    <Route path= '/' element={<Home />} />
    <Route path= '/team' element={<Team />} />
    <Route path= '/workers' element={<Workers />} />
    <Route path= '/workers/:workerId/services' element={<Services />} /> 
    <Route path= '/services/:serviceId/comments' element={<Comments />} /> 
    <Route path= '*' element={<NoMatch />} />
  </Routes>
  <Footer/>
</>
)

export default App;