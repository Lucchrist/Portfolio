
import "../Styles/Components/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Luc Christian. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
