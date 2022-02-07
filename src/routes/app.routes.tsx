import { Home, Car } from '@pages/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car/:carId' element={<Car />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;