import "../styles/Features.scss";
import { useState } from "react";
function ChartItem({ name, value, glow }) {
  return (
    <>
      <div className="graph-item">
        <div className="graph">
          <div className="graph-text">{name}</div>
          <progress
            className="graph-chart"
            max="100"
            value={value}
            data-glow={glow}
          ></progress>
        </div>
      </div>
    </>
  );
}
function SpeedSection() {
  return (
    <>
      <section className="speed">
        <div>
          <h2 className="section-title">Full speed</h2>
          <p className="section-description">
            Astro optimizes your website like no other framework can. Leverage
            Astro&#39;s unique zero-JS frontend architecture to unlock higher
            conversion rates with better SEO.
          </p>
        </div>
        <div className="speed-graph">
          <ChartItem name="Astro" value="78" glow="true" />
          <ChartItem name="Gatsby" value="30" glow="false" />
          <ChartItem name="Next.js" value="25" glow="false" />
          <ChartItem name="Worpress" value="22" glow="false" />
          <ChartItem name="Nuxt" value="20" glow="false" />
        </div>
      </section>
    </>
  );
}
function AccordionItem({ title, content, index, active, setActive }) {
  return (
    <>
      <div className="accordion-item">
        <div className="accordion-header">
          <h4>
            <button
              onClick={() => {
                if (active != index) {
                  setActive(index);
                }
              }}
              className="accordion-button"
            >
              {active == index ? (
                <span className="icon">-</span>
              ) : (
                <span className="icon">+</span>
              )}

              <span>{title}</span>
            </button>
          </h4>
        </div>
        <div
          className={
            active == index ? "accordion-content show" : "accordion-content"
          }
        >
          {content}
        </div>
      </div>
    </>
  );
}
function ContentSection() {
  var sources = [
    null,
    "https://images.unsplash.com/photo-1660799950423-15baac67ddf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    "https://images.unsplash.com/photo-1679768116177-809cf732bd6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1644677656410-c6ffa3f8fa6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1640904422940-f3070d65ae29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
    "https://images.unsplash.com/photo-1648213649718-ddaba6e6b9a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
  ];
  const [active, setActive] = useState(1);
  return (
    <>
      <section className="content">
        <div>
          <h2 className="section-title">Content-focused</h2>
          <p className="section-description">
            Astro was designed for your content. Fetch data from any CMS or work
            locally with type-safe Markdown and MDX APIs.
          </p>
        </div>
        <div className="examples">
          <figure>
            <img
              src={sources[1]}
              className={active == 1 ? "content-image top" : "content-image"}
            />
            <img
              src={sources[2]}
              className={active == 2 ? "content-image top" : "content-image"}
            />
            <img
              src={sources[3]}
              className={active == 3 ? "content-image top" : "content-image"}
            />
            <img
              src={sources[4]}
              className={active == 4 ? "content-image top" : "content-image"}
            />
            <img
              src={sources[5]}
              className={active == 5 ? "content-image top" : "content-image"}
            />
          </figure>
          <div className="accordion">
            <AccordionItem
              title="poop"
              index={1}
              active={active}
              setActive={setActive}
              content="poop"
            />
            <AccordionItem
              title="poop"
              index={2}
              active={active}
              setActive={setActive}
              content="poop"
            />
            <AccordionItem
              title="poop"
              index={3}
              active={active}
              setActive={setActive}
              content="poop"
            />
            <AccordionItem
              title="poop"
              index={4}
              active={active}
              setActive={setActive}
              content="poop"
            />
            <AccordionItem
              title="poop"
              index={5}
              active={active}
              setActive={setActive}
              content="poop"
            />
          </div>
        </div>
      </section>
    </>
  );
}
function DevelopmentSection() {
  return (
    <>
      <section className="development">
        <div className="grid">
          <div className="grid-item">a</div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"> </div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </section>
    </>
  );
}
function Features() {
  return (
    <>
      <section className="features">
        <SpeedSection />
        <ContentSection />
        <DevelopmentSection />
      </section>
    </>
  );
}
export default Features;
