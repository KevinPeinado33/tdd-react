import { Navbar } from './components';

const App: React.FC = () => {
  return (
    <div>
      <Navbar counter={0} />
      <h1>¡Hola Mundo con React y TypeScript!</h1>
    </div>
  );
};

export default App;
