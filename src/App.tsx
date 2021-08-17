import Home from "./screens/Home/Home";
import AppProvider from "./context/context";

function App() {
  return (
    <div className="App" style={styles.container}>
      <AppProvider>
        <Home />
      </AppProvider>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "var(--black-1)",
  },
};

export default App;
