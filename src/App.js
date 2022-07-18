import logo from './logo.svg';
import './App.css';

//importamos los componentes
import ComShowBlogs from './blog/ShowBlog';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';
import LoginBlog from './blog/LoginBlog';
import FacebookLogin from 'react-facebook-login';
import LoginFacebook from './blog/LoginFacebook';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginFacebook />} />
          <Route path='/create' element={<LoginBlog />} />
          {/* <Route path='/' element={<ComShowBlogs />} /> */}
          <Route path='/create' element={<CompCreateBlog />} />
          <Route path='/edit/:id' element={<CompEditBlog />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
