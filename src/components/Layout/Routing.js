import {
    Routes,
    Route
  } from "react-router-dom";
import AboutPage from '../Pages/AboutPage';
import DetailPage from '../Pages/DetailPage';
import HomePage from '../Pages/HomePage';
import SearchResultPage from '../Pages/SearchResultPage';
  

const Routing = () => {

    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='for-developers' element={<AboutPage/>}/>
            <Route path='search-result'>
                <Route index element={<SearchResultPage/>}/>
                <Route path='detail-page' element={<DetailPage/>}/>
            </Route>
        </Routes>
    )
}

export default Routing;