import { blogs, navPages, serviceCategories, servicePages, site, workCategories } from "../data/site-data.mjs";

const esc = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const href = (slug = "") => slug === "" ? "/" : `/${slug}/`;

const buttonIcon = (label = "arrow") =>
  `<span class="btn-icon ${label === "play" ? "is-play" : "is-arrow"}" aria-hidden="true"></span>`;

function motionStage(label = "vermiq motion asset") {
  return `
    <div class="motion-stage" data-depth-scene aria-label="${esc(label)}">
      <div class="stage-grid"></div>
      <div class="stage-card stage-card-a" data-depth="10">
        <img src="${esc(site.assets.wireframe)}" alt="Wireframe 3D studio asset">
      </div>
      <div class="stage-card stage-card-b" data-depth="18">
        <img src="${esc(site.assets.motionBoard)}" alt="3D animation timeline asset">
      </div>
      <div class="stage-card stage-card-c" data-depth="26">
        <img src="${esc(site.assets.materialLab)}" alt="3D material lab asset">
      </div>
      <div class="stage-rail stage-rail-one"></div>
      <div class="stage-rail stage-rail-two"></div>
    </div>
  `;
}

function navMega() {
  return `
    <div class="nav-item nav-services">
      <button class="nav-button" type="button" data-mega-toggle aria-expanded="false">Services</button>
      <div class="mega-panel" data-mega-panel>
        <div class="mega-intro">
          <p class="eyebrow">Services</p>
          <h3>3D production under one roof</h3>
          <p>Rendering, modeling, visualization, animation, image editing, and XR pages are generated from reusable data.</p>
          <a class="text-link" href="${href("3d-rendering-service")}">Explore services</a>
        </div>
        <div class="mega-grid">
          ${serviceCategories.map((group) => `
            <div>
              <a class="mega-heading" href="${href(group.slug)}">${esc(group.title)}</a>
              ${group.links.map(([title, slug]) => `<a href="${href(slug)}">${esc(title)}</a>`).join("")}
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function header() {
  return `
    <header class="site-header" data-header>
      <a class="brand" href="${href("")}" aria-label="${esc(site.brand.name)} home">
        <span class="brand-mark">V</span>
        <span>
          <strong>${esc(site.brand.name)}</strong>
          <small>Motion Atelier</small>
        </span>
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        ${navMega()}
        ${navPages.map((item) => `<a href="${href(item.slug)}">${esc(item.title)}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <button class="btn btn-primary" type="button" data-open-quote>Get a Free Demo</button>
        <button class="menu-toggle" type="button" data-menu-toggle aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="mobile-nav" data-mobile-nav aria-label="Mobile navigation">
        <a href="${href("3d-rendering-service")}">3D Rendering</a>
        <a href="${href("3d-visualization-service")}">3D Visualization</a>
        <a href="${href("3d-modeling-service")}">3D Modeling</a>
        <a href="${href("3d-animation-service")}">3D Animation</a>
        <a href="${href("image-editing-service")}">Image Editing</a>
        ${navPages.map((item) => `<a href="${href(item.slug)}">${esc(item.title)}</a>`).join("")}
      </nav>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          <a class="brand brand-footer" href="${href("")}">
            <span class="brand-mark">V</span>
            <span>
              <strong>${esc(site.brand.name)}</strong>
              <small>Motion Atelier</small>
            </span>
          </a>
          <p>${esc(site.brand.tagline)}</p>
          <div class="footer-badges">
            <span>Amazon-ready partner workflow</span>
            <span>24/7 global production</span>
          </div>
        </div>
        <div>
          <h3>Our Services</h3>
          ${serviceCategories.slice(0, 5).map((item) => `<a href="${href(item.slug)}">${esc(item.shortTitle)}</a>`).join("")}
        </div>
        <div>
          <h3>Company</h3>
          <a href="${href("who-are-we")}">About</a>
          <a href="${href("employee-gallery")}">Employee Gallery</a>
          <a href="${href("contact-us")}">Contact</a>
          <a href="${href("privacy-policy")}">Privacy Policy</a>
        </div>
        <div>
          <h3>Resources</h3>
          <a href="${href("our-3d-works")}">Our 3D Works</a>
          <a href="${href("blogs")}">Blog</a>
          <p class="hours">We operate 24/7 to serve you anytime.</p>
          <div class="social-row">${site.social.map((name) => `<a href="#" aria-label="${esc(name)}">${esc(name.slice(0, 2))}</a>`).join("")}</div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 ${esc(site.brand.legalName)} All rights reserved.</span>
        <span>Custom editable static project with replaceable 3D animation assets.</span>
      </div>
    </footer>
  `;
}

function logoStrip() {
  return `
    <section class="logo-strip" aria-label="Client logos">
      ${site.clientLogos.map((logo) => `<span>${esc(logo)}</span>`).join("")}
    </section>
  `;
}

function hero(page, options = {}) {
  const image = page.image || site.assets.hero;
  const tall = options.tall ? " hero-tall" : "";
  return `
    <section class="hero${tall}" style="--hero-image: url('${esc(image)}')">
      <div class="hero-overlay"></div>
      <div class="hero-shell">
        <div class="hero-content">
          <p class="eyebrow">${esc(page.eyebrow || "Vermiq Motion Studio")}</p>
          <h1>${esc(page.title)}</h1>
          ${page.summary ? `<p class="hero-copy">${esc(page.summary)}</p>` : ""}
          <div class="hero-actions">
            <button class="btn btn-primary" type="button" data-open-quote>${buttonIcon()}Get a Custom Quote</button>
            <button class="btn btn-ghost" type="button" data-open-showreel>${buttonIcon("play")}Watch Showreel</button>
          </div>
          <div class="hero-metrics">
            <span>3D animation</span>
            <span>SketchUp-ready</span>
            <span>Classy CGI</span>
          </div>
        </div>
        ${motionStage(`${page.title} animated 3D asset`)}
      </div>
    </section>
  `;
}

function statGrid() {
  return `
    <div class="stat-grid">
      ${site.stats.map(([number, label]) => `
        <div class="stat-card">
          <strong>${esc(number)}</strong>
          <span>${esc(label)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function proofGrid(title = "Reliable offshore 3D rendering services under one roof") {
  return `
    <section class="section section-muted">
      <div class="section-heading">
        <p class="eyebrow">Why teams choose us</p>
        <h2>${esc(title)}</h2>
        <p>Affordable production from concept to delivery across leading industries.</p>
      </div>
      <div class="feature-grid">
        ${site.proof.map((item, index) => `
          <article class="feature-card">
            <span class="feature-index">${String(index + 1).padStart(2, "0")}</span>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.text)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function motionLabSection() {
  return `
    <section class="section motion-lab">
      <div>
        <p class="eyebrow">3D animation assets</p>
        <h2>SketchUp-style motion language, rebuilt for a sharper Vermiq identity</h2>
        <p>The site now uses custom local 3D-style SVG assets, animated viewport layers, timeline panels, and material boards. Replace them later with your real SketchUp exports, rendered clips, or product animations.</p>
        <div class="motion-feature-grid">
          ${site.motionFeatures.map((item) => `
            <article>
              <h3>${esc(item.title)}</h3>
              <p>${esc(item.text)}</p>
            </article>
          `).join("")}
        </div>
      </div>
      ${motionStage("SketchUp-style animated production board")}
    </section>
  `;
}

function architectureSuiteSection() {
  return `
    <section class="section architecture-suite">
      <div class="section-heading">
        <p class="eyebrow">Architecture CGI suite</p>
        <h2>Interior, exterior, structural design, and walkthrough rendering built into the same studio system</h2>
        <p>Vermiq now has a stronger architectural production layer for real estate, builders, designers, developers, and visualization teams.</p>
      </div>
      <div class="architecture-grid">
        ${site.architectureFeatures.map((item) => `
          <a class="architecture-card" href="${href(item.slug)}" data-tilt>
            <img src="${esc(item.image)}" alt="${esc(item.title)}">
            <div>
              <span>CGI module</span>
              <h3>${esc(item.title)}</h3>
              <p>${esc(item.text)}</p>
            </div>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function servicesShowcase() {
  return `
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Services</p>
        <h2>The one-stop 3D rendering company for all your 3D needs</h2>
        <p>Each service group includes its own landing page plus generated detail pages for specific industries and workflows.</p>
      </div>
      <div class="service-band">
        ${serviceCategories.slice(0, 6).map((group) => `
          <article class="service-panel" data-tilt>
            <div>
              <p class="eyebrow">${esc(group.shortTitle)}</p>
              <h3>${esc(group.title)}</h3>
              <p>${esc(group.summary)}</p>
              <a class="btn btn-secondary" href="${href(group.slug)}">${buttonIcon()}Learn More</a>
            </div>
            <div class="mini-service-list">
              ${group.links.slice(0, 6).map(([title, slug]) => `<a href="${href(slug)}">${esc(title)}</a>`).join("")}
            </div>
            <img src="${esc(group.image)}" alt="${esc(group.title)} visual" loading="lazy">
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function worksGrid(limit = workCategories.length) {
  return `
    <div class="filter-tabs" role="tablist" aria-label="Choose a category">
      <button class="is-active" type="button" data-filter-button="all">All</button>
      ${workCategories.map((item) => `<button type="button" data-filter-button="${esc(item.title)}">${esc(item.title)}</button>`).join("")}
    </div>
    <div class="work-grid" data-filter-grid>
      ${workCategories.slice(0, limit).map((item) => `
        <article class="work-card" data-filter-card="${esc(item.title)}" data-tilt>
          <img src="${esc(item.image)}" alt="${esc(item.title)} 3D work" loading="lazy">
          <div>
            <p class="eyebrow">${esc(item.title)}</p>
            <h3>${esc(item.items[0])}</h3>
            <ul>${item.items.map((entry) => `<li>${esc(entry)}</li>`).join("")}</ul>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function worksSection() {
  return `
    <section class="section section-dark">
      <div class="section-heading">
        <p class="eyebrow">Our 3D Works</p>
        <h2>Experience the impact of polished 3D rendering work</h2>
        <p>Browse representative categories with the same filter interaction used on the portfolio page.</p>
      </div>
      ${worksGrid()}
      <div class="center-actions"><a class="btn btn-primary" href="${href("our-3d-works")}">${buttonIcon()}Explore Our 3D Works</a></div>
    </section>
  `;
}

function blogCards(limit = blogs.length) {
  return `
    <div class="blog-grid" data-blog-grid>
      ${blogs.slice(0, limit).map((blog) => `
        <article class="blog-card" data-blog-card data-category="${esc(blog.category)}" data-title="${esc(blog.title.toLowerCase())}" data-tilt>
          <img src="${esc(blog.image)}" alt="${esc(blog.title)}" loading="lazy">
          <div>
            <span>${esc(blog.category)}</span>
            <h3>${esc(blog.title)}</h3>
            <p>${esc(blog.excerpt)}</p>
            <a class="text-link" href="${href(blog.slug)}">Read article</a>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function blogSection() {
  return `
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Blogs</p>
        <h2>Recent blogs crafted by 3D rendering experts</h2>
      </div>
      ${blogCards(3)}
      <div class="center-actions"><a class="btn btn-secondary" href="${href("blogs")}">${buttonIcon()}Read More About Our Blog</a></div>
    </section>
  `;
}

function testimonials() {
  return `
    <section class="section testimonials">
      <div class="section-heading">
        <p class="eyebrow">Testimonials</p>
        <h2>What clients have to say</h2>
      </div>
      <div class="testimonial-shell" data-carousel>
        <button class="carousel-btn" type="button" data-carousel-prev aria-label="Previous testimonial">Prev</button>
        <div class="testimonial-track">
          ${site.testimonials.map((item, index) => `
            <figure class="testimonial ${index === 0 ? "is-active" : ""}" data-carousel-slide>
              <figcaption>${esc(item.service)}</figcaption>
              <blockquote>${esc(item.quote)}</blockquote>
              <p>${esc(item.person)}<span>${esc(item.company)}</span></p>
            </figure>
          `).join("")}
        </div>
        <button class="carousel-btn" type="button" data-carousel-next aria-label="Next testimonial">Next</button>
      </div>
    </section>
  `;
}

function techStrip() {
  return `
    <section class="section tech-section">
      <div class="section-heading">
        <p class="eyebrow">Technology</p>
        <h2>Technology expertise in 3D designing</h2>
      </div>
      <div class="tech-grid">
        ${site.tech.map((tool) => `<span>${esc(tool)}</span>`).join("")}
      </div>
    </section>
  `;
}

function contactForm(context = "general") {
  return `
    <form class="contact-form" data-contact-form data-context="${esc(context)}">
      <label>Name<input name="name" type="text" placeholder="Enter your name" required></label>
      <label>Business Email<input name="email" type="email" placeholder="Enter your business email" required></label>
      <label>Company<input name="company" type="text" placeholder="Enter your company name" required></label>
      <label>Contact Number<input name="phone" type="tel" placeholder="Enter your contact number"></label>
      <label class="full">Enquiry<textarea name="message" placeholder="Tell us what you want to build" required></textarea></label>
      <button class="btn btn-primary" type="submit">${buttonIcon()}Submit</button>
      <p class="form-status" role="status" aria-live="polite"></p>
    </form>
  `;
}

function contactSection() {
  return `
    <section class="section contact-band" id="contact">
      <div>
        <p class="eyebrow">Get a free quote</p>
        <h2>Let us build stunning visuals together</h2>
        <p>Use this form for demo requests, quote capture, and service enquiries. It validates locally and can be wired to your CRM later.</p>
      </div>
      ${contactForm("section")}
    </section>
  `;
}

function processSection() {
  return `
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Process</p>
        <h2>Every project starts with a clear process</h2>
      </div>
      <div class="timeline">
        ${site.process.map(([step, text], index) => `
          <article>
            <span>${index + 1}</span>
            <h3>${esc(step)}</h3>
            <p>${esc(text)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function faqList(faqs = []) {
  return `
    <section class="section section-muted">
      <div class="section-heading">
        <p class="eyebrow">FAQ</p>
        <h2>Frequently asked questions</h2>
      </div>
      <div class="faq-list">
        ${faqs.map(([question, answer]) => `
          <details>
            <summary>${esc(question)}</summary>
            <p>${esc(answer)}</p>
          </details>
        `).join("")}
      </div>
    </section>
  `;
}

function renderHome(page) {
  return `
    ${hero({
      ...page,
      title: "vermiq crafts cinematic 3D animation for products, spaces, and digital launches",
      summary: "A sleek, classy, fully generated studio website with animated 3D-style assets, service depth, conversion paths, and replaceable visual content."
    }, { tall: true })}
    ${logoStrip()}
    ${motionLabSection()}
    ${architectureSuiteSection()}
    <section class="section intro-split">
      <div>
        <p class="eyebrow">Scale and craft</p>
        <h2>A refined 3D studio for motion-led brands, spatial campaigns, and product launches</h2>
        <p>Vermiq blends animation direction, cinematic rendering, modeling, and interactive-ready production for teams that need every visual to feel intentional.</p>
      </div>
      ${statGrid()}
    </section>
    ${proofGrid()}
    <section class="section agency-band">
      <img src="${esc(site.assets.materialLab)}" alt="Vermiq material and animation lab visual" loading="lazy">
      <div>
        <p class="eyebrow">Motion-first production</p>
        <h2>Full-service creative production with a more distinctive visual signature</h2>
        <p>Use this band for brand credentials, animation reels, marketplace approvals, or any proof point that deserves a premium editorial treatment.</p>
        <a class="btn btn-secondary" href="${href("who-are-we")}">${buttonIcon()}Read More</a>
      </div>
    </section>
    ${servicesShowcase()}
    ${worksSection()}
    ${blogSection()}
    ${testimonials()}
    ${techStrip()}
    ${contactSection()}
  `;
}

function renderCategory(page) {
  const group = page.category;
  return `
    ${hero(page)}
    ${logoStrip()}
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">${esc(group.shortTitle)}</p>
        <h2>Specialized ${esc(group.shortTitle.toLowerCase())} pages ready to customize</h2>
        <p>${esc(group.summary)}</p>
      </div>
      <div class="specialty-grid">
        ${group.links.map(([title, slug, image]) => `
          <a class="specialty-card" href="${href(slug)}" data-tilt>
            <img src="${esc(image)}" alt="${esc(title)}" loading="lazy">
            <span>${esc(title)}</span>
            <small>View service page</small>
          </a>
        `).join("")}
      </div>
    </section>
    ${group.slug === "3d-rendering-service" || group.slug === "3d-visualization-service" || group.slug === "3d-animation-service" ? architectureSuiteSection() : ""}
    ${group.slug === "3d-animation-service" || group.slug === "3d-modeling-service" ? motionLabSection() : ""}
    ${proofGrid(`Why choose ${site.brand.name} for ${group.shortTitle.toLowerCase()}?`)}
    ${processSection()}
    ${contactSection()}
  `;
}

function relatedServices(page) {
  const category = serviceCategories.find((group) => group.links.some(([, slug]) => slug === page.slug));
  if (!category) return "";
  return `
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Related services</p>
        <h2>Explore more ${esc(category.shortTitle.toLowerCase())} options</h2>
      </div>
      <div class="related-row">
        ${category.links.filter(([, slug]) => slug !== page.slug).slice(0, 4).map(([title, slug, image]) => `
          <a href="${href(slug)}">
            <img src="${esc(image)}" alt="${esc(title)}" loading="lazy">
            <span>${esc(title)}</span>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function renderService(page) {
  return `
    ${hero(page)}
    <section class="section service-detail">
      <div>
        <p class="eyebrow">Overview</p>
        <h2>${esc(page.sections[0].title)}</h2>
        <p>${esc(page.sections[0].text)}</p>
        <p>${esc(page.sections[1].text)}</p>
      </div>
      <img src="${esc(page.image)}" alt="${esc(page.title)} detail" loading="lazy">
    </section>
    ${page.eyebrow === "3D Animation" ? motionLabSection() : ""}
    ${/(Architectural|Architecture|Interior|Exterior|Structural|Walkthrough|Construction|Real Estate|House|Floor Plan)/i.test(page.title) ? architectureSuiteSection() : ""}
    <section class="section section-muted split-lists">
      <div>
        <p class="eyebrow">Benefits</p>
        <h2>Why this service works</h2>
        <ul class="check-list">${page.benefits.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
      </div>
      <div>
        <p class="eyebrow">Deliverables</p>
        <h2>What you can request</h2>
        <ul class="check-list">${page.deliverables.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
      </div>
    </section>
    ${processSection()}
    ${relatedServices(page)}
    ${faqList(page.faqs)}
    ${contactSection()}
  `;
}

function renderWorks(page) {
  return `
    ${hero(page)}
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Portfolio</p>
        <h2>Choose a category</h2>
        <p>Replace these remote placeholders with your final work images when ready.</p>
      </div>
      ${worksGrid()}
    </section>
    ${contactSection()}
  `;
}

function renderBlogs(page) {
  const categories = [...new Set(blogs.map((blog) => blog.category))];
  return `
    ${hero(page)}
    <section class="section">
      <div class="blog-toolbar">
        <label>Search<input type="search" data-blog-search placeholder="Search blog titles"></label>
        <div class="filter-tabs compact" role="tablist">
          <button class="is-active" type="button" data-blog-filter="all">All</button>
          ${categories.map((category) => `<button type="button" data-blog-filter="${esc(category)}">${esc(category)}</button>`).join("")}
        </div>
      </div>
      ${blogCards()}
    </section>
  `;
}

function renderBlogDetail(page) {
  return `
    ${hero(page)}
    <article class="section article-body">
      <p class="eyebrow">${esc(page.category)}</p>
      <h2>${esc(page.title)}</h2>
      <p>${esc(page.content)}</p>
      <p>Use this article page template for long-form SEO content, internal links, downloadable lead magnets, and call-to-action blocks.</p>
      <a class="btn btn-secondary" href="${href("blogs")}">${buttonIcon()}Back to Blogs</a>
    </article>
    ${blogSection()}
  `;
}

function renderContact(page) {
  return `
    ${hero(page)}
    <section class="section contact-page">
      <div class="contact-info">
        <p class="eyebrow">Contact</p>
        <h2>Tell us about your project</h2>
        <p>Email: <a href="mailto:${esc(site.brand.email)}">${esc(site.brand.email)}</a></p>
        <p>Phone: <a href="tel:+15550183020">${esc(site.brand.phone)}</a></p>
        <p>Business hours: 24/7 global production coverage.</p>
      </div>
      ${contactForm("contact-page")}
    </section>
  `;
}

function renderCompany(page) {
  const gallery = page.type === "gallery";
  const privacy = page.type === "privacy";
  return `
    ${hero(page)}
    <section class="section ${gallery ? "gallery-page" : "content-page"}">
      <div class="section-heading">
        <p class="eyebrow">${privacy ? "Policy" : "Company"}</p>
        <h2>${esc(page.title)}</h2>
        <p>${esc(page.body)}</p>
      </div>
      ${gallery ? `
        <div class="gallery-grid">
          ${[site.assets.studio, site.assets.render, site.assets.product, site.assets.animation, site.assets.xr, site.assets.interior].map((image, index) => `
            <figure>
              <img src="${esc(image)}" alt="Studio gallery ${index + 1}" loading="lazy">
              <figcaption>Studio moment ${index + 1}</figcaption>
            </figure>
          `).join("")}
        </div>
      ` : privacy ? `
        <div class="policy-copy">
          <h3>Information we collect</h3>
          <p>Contact forms may collect name, email, company, phone number, and project notes.</p>
          <h3>How we use it</h3>
          <p>Submitted information is used to respond to enquiries, prepare estimates, and coordinate project discussions.</p>
          <h3>Your requests</h3>
          <p>Visitors can request access, corrections, or deletion by contacting the business email listed on this site.</p>
        </div>
      ` : `
        ${statGrid()}
        ${proofGrid(page.title === "Why Us" ? "What makes the production model dependable" : "Built for creative and operational clarity")}
      `}
    </section>
    ${contactSection()}
  `;
}

function renderNotFound(page) {
  return `
    ${hero(page)}
    <section class="section center-copy">
      <h2>Try one of the main pages</h2>
      <a class="btn btn-primary" href="${href("")}">${buttonIcon()}Go Home</a>
    </section>
  `;
}

function modalMarkup() {
  return `
    <dialog class="modal" data-quote-dialog>
      <button class="modal-close" type="button" data-close-modal aria-label="Close quote form">Close</button>
      <div class="modal-grid">
        <div>
          <p class="eyebrow">Get a FREE Quote</p>
          <h2>Start with a simple brief</h2>
          <p>This modal mirrors the conversion path on the reference site and can be connected to your backend later.</p>
        </div>
        ${contactForm("modal")}
      </div>
    </dialog>
    <dialog class="modal showreel-modal" data-showreel-dialog>
      <button class="modal-close" type="button" data-close-modal aria-label="Close showreel">Close</button>
      <div class="showreel-frame">
        <div class="play-disc">Play</div>
        <h2>Showreel Preview</h2>
        <p>Drop your final MP4 into this frame or replace it with an embedded hosted video.</p>
      </div>
    </dialog>
  `;
}

function renderBody(page) {
  switch (page.type) {
    case "home": return renderHome(page);
    case "category": return renderCategory(page);
    case "service": return renderService(page);
    case "works": return renderWorks(page);
    case "blogs": return renderBlogs(page);
    case "blog-detail": return renderBlogDetail(page);
    case "contact": return renderContact(page);
    case "about":
    case "why":
    case "gallery":
    case "privacy": return renderCompany(page);
    default: return renderNotFound(page);
  }
}

export function renderPage(_, page) {
  const title = page.type === "home" ? page.title : `${page.title} | ${site.brand.name}`;
  const description = page.summary || site.brand.tagline;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <link rel="preconnect" href="https://images.unsplash.com">
    <link rel="stylesheet" href="/assets/styles.css">
    <script type="module" src="/assets/client.js" defer></script>
  </head>
  <body>
    ${header()}
    <main>
      ${renderBody(page)}
    </main>
    ${footer()}
    ${modalMarkup()}
  </body>
</html>`;
}
