import "../styles/footer.css";

const Footer = () => {
    return (
      <footer style={{ textAlign: "center", padding: "10px", background: "#222", color: "white" }}>
        <p>&copy; {new Date().getFullYear()} MyApp</p>
      </footer>
    );
  };
  
  export default Footer;