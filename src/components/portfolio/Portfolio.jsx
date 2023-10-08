import "./portfolio.css";

const images = require.context("../../assets", true);

const Portfolio = () => {
  const projectItems = [
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

  const blogs = [
    {
      link: "https://bharat619.medium.com/understanding-dependency-injection-in-nestjs-ead0fb8a8131",
      title: "Understanding Dependency Injection in NestJS",
      imgName: "di-nestjs.jpg",
    },
    {
      link: "https://bharat619.medium.com/complete-dive-into-typescript-part-2-4daa6a6d19fa",
      title: "Complete Dive into TypeScript - Part 2",
      imgName: "ts-part1.jpg",
    },
    {
      link: "https://bharat619.medium.com/complete-dive-into-typescript-part-1-6014e130c95b",
      title: "Complete Dive into TypeScript - Part 1",
      imgName: "ts-part1.jpg",
    },
    {
      link: "https://blog.kiprosh.com/use-case-comparison-between-css-grid-and-flexbox/",
      title: "Use case comparison between CSS Grid and Flexbox",
      imgName: "css-flexbox.jpg",
    },
    {
      link: "https://blog.kiprosh.com/exploratory-data-analysis-a-vital-approach/",
      title: "Exploratory Data Analysis - Vital approach in Data Science",
      imgName: "eda.jpg",
    },
  ];
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {projectItems.map((item, idx) => {
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

      <section>
        <h5>My Blogs</h5>
        <h2>Blogs</h2>

        <div className="container portfolio__container">
          {blogs.map((item, idx) => {
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
                    Read More
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
