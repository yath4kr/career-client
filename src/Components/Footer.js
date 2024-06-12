const Footer = () => {
  const footerData =
    "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni";
  const footerLinks = [
    { link: "#", label: "Blogs" },
    { link: "#", label: "About" },
    { link: "#", label: "Contact" },
    { link: "#", label: "Instagram" },
    { link: "#", label: "Facebook" },
    { link: "#", label: "X" },
  ];
  const footerLinks1 = footerLinks.slice(0, 3);
  const footerLinks2 = footerLinks.slice(3, 6);
  return (
    <div className="footer">
      <div className="footer-text">{footerData}</div>
      <div className="footer-links-container">
        <ul className="footer-link">
          {footerLinks1.map((footerLink, index) => {
            return (
              <li key={index} className="footer-link-li">
                <a href={footerLink.link} className="footer-link-li-a">
                  {footerLink.label}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-link">
          {footerLinks2.map((footerLink, index) => {
            return (
              <li key={index} className="footer-link-li">
                <a href={footerLink.link} className="footer-link-li-a">
                  {footerLink.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
