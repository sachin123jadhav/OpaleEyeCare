const social_links = [
  {
    link: "https://www.instagram.com/opaleyecare/",
    target: "_blank",
    icon: "fab fa-instagram",
    color: "tp-f-instagram",
  },
  {
    link: "https://twitter.com/OpalEyeCare",
    target: "_blank",
    icon: "fab fa-twitter",
    color: "tp-f-twitter",
  },
  {
    link: "https://www.facebook.com/opaleyecare",
    target: "_blank",
    icon: "fab fa-facebook-f",
    color: "tp-f-fb",
  },
  {
    link: "https://in.pinterest.com/opal_e/",
    target: "_blank",
    icon: "fab fa-pinterest",
    color: "tp-f-pinterest",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a
          key={i}
          href={l.link}
          className={l.color}
          target={l.target ? l.target : ""}
        >
          <i className={l.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
