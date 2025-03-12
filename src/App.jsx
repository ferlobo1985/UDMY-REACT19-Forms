import { BrowserRouter, Route, Routes } from 'react-router';
import FormOne from './components/formOne';
import FormThree from './components/formThree';
import FormTwo from './components/formTwo';

import Header from './components/header';

const App = () => {
    return(
      <BrowserRouter>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" element={<FormOne/>}></Route>
            <Route path="/formtwo" element={<FormTwo/>}></Route>
            <Route path="/formThree" element={<FormThree/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
  
  export default App;