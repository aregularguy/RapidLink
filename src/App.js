import React from 'react';
import './App.css';
import {Header} from './components/header'
import {AddTransaction}  from './components/add.transaction'
import { IncomeList } from './components/income.list'
import {ExpenseList} from './components/expense.list'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import Url from './components/Url';
import {GlobalProvider} from './context/global.context'
function App() {

	
  return (
//    <GlobalProvider>
		 <>
		<Router>
      <Routes>
        <Route exact path="/mywallet" element={Url} />
        <Route path="/error" element={Error} />
        {/* Other routes if you have */}
      </Routes>
    </Router>
	Hello
				</>

	//  </GlobalProvider>
  );
}

export default App;
