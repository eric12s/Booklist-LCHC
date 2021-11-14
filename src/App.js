import './App.css';
import Books from './components/Books';
import Readers from './components/Readers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Booklist
      </header>
      <section className="readers">
        <header className="major">
            <h2>Readers</h2>
        </header>
        <Readers />
      </section>
      <section className="books">
        <header className="major">
            <h2>Books</h2>
        </header>
        <Books />
      </section>
    </div>
  );
}

export default App;
