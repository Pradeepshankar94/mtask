import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Task1 from './component/Task1';
import Task3 from './component/Task3';
import Task4 from './component/Task4';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Task1 />} />
      <Route path='/Task1' element={<Task1 />} />
      <Route path='/Task3' element={<Task3 />} />
      <Route path='/Task4' element={<Task4 />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
