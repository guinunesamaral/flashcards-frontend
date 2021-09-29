import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div style={styles.header}>
      <h3 style={styles.title}>Flashcards</h3>
      <Navbar />
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: "var(--pink-1)",
    margin: "0",
  },
};

export default Header;
