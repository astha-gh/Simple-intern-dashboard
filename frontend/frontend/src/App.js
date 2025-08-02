import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import  DashBoard  from './pages/DashBoard'
import LeaderBoard from './pages/LeaderBoard'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element= {<LoginPage/>}/>
                <Route path='/dashboard' element={<DashBoard/>} />
                <Route path='/leaderboard' element={<LeaderBoard />} />
            </Routes>
        </Router>
    )
}

export default App;
