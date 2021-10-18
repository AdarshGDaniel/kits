import './App.css';
import Header from './Components/Header/Header';
import KLogo from './Assets/Karunya Colour.png'
import Footer from './Components/Footer/Footer';
import { Container } from 'react-bootstrap';
import Question from './Components/Question/Question';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="main-box">
        <img src={KLogo} height='80px'/>
        <h1>Welcome to Karunya's Screening App</h1>
        <h4>Kindly answer the questions in the following</h4>
        <Question Title="Are you facing any COVID-19 Symptoms?" Subtitle="Basic" text="Symptoms may include - fever, cough, body pain, difficulties in breathing, etc..." op1="Yes" op2="No"/>
        <Question Title="Are you facing any COVID-19 Symptoms?" Subtitle="Basic" text="Symptoms may include - fever, cough, body pain, difficulties in breathing, etc..." op1="Yes" op2="No"/>
        <Question Title="Are you facing any COVID-19 Symptoms?" Subtitle="Basic" text="Symptoms may include - fever, cough, body pain, difficulties in breathing, etc..." op1="Yes" op2="No"/>
      </Container>
      <Footer />
    </div>
  );
}

export default App;