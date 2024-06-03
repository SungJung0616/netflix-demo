
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './layout/AppLayout';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import Homepage from './pages/Homepage/Homepage'



//홈페이지 // '/'
//영화전체를 보여주는 (서치) '/movies'
//영화 디테일을 보여주는 'movies/:id'
function App() {
  return (
    <Routes>      
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Homepage/>} />
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetailPage/>} />
        </Route>
      </Route>
      
    </Routes>
  );
}

export default App;
