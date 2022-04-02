import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Issuepage from './Issuepage';
import Pagination from './Pagination';

function App() {
  const [issues, updateIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(issues?.data?.articles);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");
      updateIssues(response);
    }
    fetchData();
  }, [])

  const issuePerPage = 10;
  const pageVisited = currentPage * issuePerPage;
  const displayissues = issues?.data?.articles?.slice(pageVisited, pageVisited + issuePerPage);


  return (
    <>
      <div className="App">
        <Issuepage issues={displayissues} />
      </div>
      <Pagination issues={issues} setCurrentPage={setCurrentPage} issuePerPage={issuePerPage} />
    </>
  );
}

export default App;
