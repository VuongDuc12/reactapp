import './App.scss'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import TableUsers from './components/TableUsers';
function App() {
  return (
    <div className="app-container">
   
      <Header/>
      <Container>
        <TableUsers/> 
      </Container>
      
    </div>
  );
}

export default App;
