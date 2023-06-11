import "../styles/Hero.scss";
function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-main">
          <h2 className="hero-title">Build the web you want</h2>
          <p className="hero-subtext">
            Astro is the all-in-one web framework designed for speed. Pull your
            content from anywhere and deploy everywhere, all powered by your
            favorite UI components and libraries.
          </p>
          <button className="hero-button">Get Started</button>
        </div>
        <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80" />
      </section>
    </>
  );
}
export default Hero;
