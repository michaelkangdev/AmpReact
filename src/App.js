import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';

function App() {
    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://54.153.139.15/jobs').then(
      response => response.json().then(data => {
        setJobs(data);
      })
    );


  }, []);
  
  
  
  return (
    <div className="App">
	<h1>Job listing test</h1>
	
		{jobs}
    </div>
  );
}

export default App;
