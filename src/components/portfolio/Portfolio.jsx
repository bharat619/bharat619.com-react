import "./portfolio.css";

const images = require.context("../../assets", true);

const Portfolio = () => {
  const items = [
    {
      link: "https://github.com/bharat619/master-gatsby",
      title: "Slick Slices",
      imgName: "slick-slices.png",
      description:
        "A super sleeky online pizza store built with Gatsby, Sanity, MongoDB, GraphQL.",
    },
    {
      link: "https://github.com/bharat619/sick-fits-2.0",
      title: "Sick Fits",
      imgName: "sick-fits.png",
      description:
        "A stylish online store to buy shoes and appearals built with NextJS, KeystoneJS, GraphQL.",
    },
    {
      link: "https://github.com/bharat619/linkedin-clone",
      title: "LinkedIn Clone",
      // Photo by <a href="https://unsplash.com/@austindistel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Austin Distel</a> on <a href="https://unsplash.com/photos/uLnmmE8Y0E4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

      imgName: "linkedin-clone.jpg",
      description: "An effort to clone LinkedIn with React and Firebase.",
    },
    {
      link: "https://github.com/bharat619/ChatApplicationBackend",
      title: "Chat Masters",
      // Photo by <a href="https://unsplash.com/@austindistel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Austin Distel</a> on <a href="https://unsplash.com/photos/uLnmmE8Y0E4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      imgName: "chat-masters.jpg",
      description:
        "Chat room for friends to hangout. This is WIP currently. Watch out more in this space.",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {items.map((item, idx) => {
          const img = images(`./${item.imgName}`);

          return (
            <article className="portfolio__item" key={idx}>
              <div className="portfolio__item-image">
                <img src={img} alt="" />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={item.link}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
              <h4>{item.description}</h4>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
