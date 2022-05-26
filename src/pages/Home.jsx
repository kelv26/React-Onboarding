import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from './Mainpage'
import InnerPage from "./InnerPage"

function Home() {

  return (
    <Router>
      <div className="bg-Bg py-14 w-screen">
        <div className="max-w-screen-lg mx-auto">
        <Routes>
          <Route path='/posts/:id' 
            element={
              <>
                <InnerPage/>
              </>
          }
          />
          <Route path='/'
            element={
              <>
                <MainPage />
              </>
            }
          />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Home;
