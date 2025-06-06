import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Made in Malmö</p>
    </footer>
  );
};
