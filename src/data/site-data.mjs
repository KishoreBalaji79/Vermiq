const img = (id, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const assets = {
  hero: img("photo-1518005020951-eccb494ad742", 1800),
  studio: img("photo-1524758631624-e2822e304c36", 1500),
  render: img("photo-1486406146926-c627a92ad1ab", 1500),
  interior: img("photo-1511818966892-d7d671e672a2", 1500),
  furniture: img("photo-1555041469-a586c61ea9bc", 1500),
  product: img("photo-1523275335684-37898b6baf30", 1500),
  fashion: img("photo-1529139574466-a303027c1d8b", 1500),
  jewelry: img("photo-1515562141207-7a88fb7ce338", 1500),
  retail: img("photo-1441986300917-64674bd600d8", 1500),
  industrial: img("photo-1581092335878-2d9ff86ca2bf", 1500),
  hospitality: img("photo-1566073771259-6a8506099945", 1500),
  home: img("photo-1600607687939-ce8a6c25118c", 1500),
  xr: img("photo-1593508512255-86ab42a8e620", 1500),
  animation: img("photo-1618005182384-a83a8bd57fbe", 1500),
  editing: img("photo-1497366754035-f200968a6e72", 1500),
  architecture: img("photo-1494526585095-c41746248156", 1500),
  blog: img("photo-1535223289827-42f1e9919769", 1500),
  wireframe: "/assets/visuals/vermiq-wireframe-studio.svg",
  motionBoard: "/assets/visuals/vermiq-motion-board.svg",
  materialLab: "/assets/visuals/vermiq-material-lab.svg"
};

export const site = {
  sourceUrl: "https://www.vermiq.example",
  brand: {
    name: "vermiq",
    legalName: "Vermiq Studio Inc.",
    tagline: "Classy 3D animation, rendering, visualization, and spatial content production",
    email: "hello@vermiq.example",
    phone: "+1 (555) 018-3020"
  },
  assets,
  stats: [
    ["225,000+", "3D models created"],
    ["25+", "Enterprise clients"],
    ["700+", "Artists and technologists"],
    ["3+", "Studio locations"]
  ],
  clientLogos: ["Atelier", "Forma", "Northline", "Vanta", "Monolith"],
  proof: [
    {
      title: "Premium Service",
      text: "A dedicated delivery dashboard gives every client visibility into milestones, reviews, files, and production status."
    },
    {
      title: "Relevant Expertise",
      text: "Specialized artists support animation, architecture, furniture, fashion, product, retail, industrial, and XR programs."
    },
    {
      title: "Quality Assurance",
      text: "Every render moves through technical checks for scale, material accuracy, lighting consistency, and output readiness."
    },
    {
      title: "Quick Turnaround",
      text: "Parallel production pods help large catalogs and urgent launch visuals move from brief to delivery fast."
    },
    {
      title: "Competitive Costing",
      text: "Offshore production capacity keeps complex visual programs efficient without flattening quality."
    },
    {
      title: "Dedicated Project Team",
      text: "Account leads, art directors, QA reviewers, and production artists stay aligned from discovery to final handoff."
    }
  ],
  process: [
    ["Discovery", "Share CAD, SketchUp exports, sketches, references, floor plans, product shots, or mood boards."],
    ["Direction", "We define camera angles, material targets, output sizes, and approval checkpoints."],
    ["Production", "Specialist artists build, texture, light, render, and review each asset."],
    ["Refinement", "Your team comments directly on drafts so revisions stay fast and precise."],
    ["Delivery", "Final files are exported for web, print, marketplace, campaign, AR, or internal use."]
  ],
  motionFeatures: [
    {
      title: "SketchUp-style viewport motion",
      text: "Animated wireframes, camera paths, timeline panels, and material previews give the site a 3D production feel before final assets arrive."
    },
    {
      title: "Classy cinematic pacing",
      text: "Sections reveal with controlled motion, cards lift subtly, and hero objects drift in layered perspective instead of feeling loud or gimmicky."
    },
    {
      title: "Ready for real exports",
      text: "The SVG placeholders can be replaced later with SketchUp, Blender, Cinema 4D, or rendered MP4/WebM assets without changing the page structure."
    }
  ],
  architectureFeatures: [
    {
      title: "Structural 3D Visualization",
      text: "Clear framing, foundation, beam, column, and envelope visuals for engineers, builders, and approval teams.",
      image: assets.wireframe,
      slug: "3d-structural-rendering-services"
    },
    {
      title: "Interior CGI Rendering",
      text: "Residential, hospitality, retail, and workplace interiors with material, lighting, furniture, and mood accuracy.",
      image: assets.interior,
      slug: "3d-interior-rendering-services"
    },
    {
      title: "Exterior Architectural Rendering",
      text: "Facade, landscape, streetscape, dusk, aerial, and photomontage views for premium property communication.",
      image: assets.architecture,
      slug: "3d-exterior-rendering-services"
    },
    {
      title: "3D Walkthrough Production",
      text: "Camera paths, room-to-room transitions, flythroughs, and cinematic walkthroughs for interiors and exteriors.",
      image: assets.motionBoard,
      slug: "architectural-walkthrough-animation-services"
    }
  ],
  testimonials: [
    {
      service: "3D Modeling Service",
      quote: "The team understood our product language quickly and turned a mixed brief into a consistent catalog of production-ready assets.",
      person: "Director of Digital Experience",
      company: "Leading eCommerce Company"
    },
    {
      service: "3D Animation Service",
      quote: "Their animation work helped our stakeholders understand the motion and assembly sequence without a long technical explanation.",
      person: "Creative Director",
      company: "Gaming and Entertainment"
    },
    {
      service: "3D Architectural Visualization",
      quote: "The visual package made approvals easier because every lighting, material, and spatial decision was visible from the first review.",
      person: "VP of Digital Engineering",
      company: "Furniture and Interior Design"
    }
  ],
  tech: ["Photoshop", "Blender", "Maya", "3ds Max", "V-Ray", "KeyShot", "Substance", "CLO3D", "Marvelous Designer", "Unity", "Unreal Engine"],
  social: ["LinkedIn", "Instagram", "Facebook", "Pinterest", "X", "YouTube"]
};

const renderingLinks = [
  ["3D Architectural Rendering", "3d-architectural-rendering-services", assets.architecture],
  ["3D Construction Rendering", "outsource-3d-construction-rendering", assets.render],
  ["3D Structural Rendering", "3d-structural-rendering-services", assets.wireframe],
  ["3D Clothing Rendering", "3d-clothing-rendering-services", assets.fashion],
  ["3D Exterior Rendering", "3d-exterior-rendering-services", assets.home],
  ["3D Exterior Walkthrough Rendering", "3d-exterior-walkthrough-rendering-services", assets.architecture],
  ["3D Floor Plan Rendering", "3d-floor-plan-rendering-services", assets.interior],
  ["3D Furniture Rendering", "3d-furniture-rendering-services", assets.furniture],
  ["3D House Rendering", "3d-house-rendering-services", assets.home],
  ["3D Hospitality Rendering", "3d-rendering-for-hospitality", assets.hospitality],
  ["3D Industrial Rendering", "3d-industrial-rendering-services", assets.industrial],
  ["3D Interior Rendering", "3d-interior-rendering-services", assets.interior],
  ["3D Interior Design Rendering", "3d-rendering-services-for-interior-design", assets.interior],
  ["3D Interior Walkthrough Rendering", "3d-interior-walkthrough-rendering-services", assets.materialLab],
  ["3D Jewelry Rendering", "3d-jewelry-rendering", assets.jewelry],
  ["3D Landscape Rendering", "3d-landscape-rendering-services", assets.home],
  ["3D Real Estate Rendering", "3d-rendering-for-real-estate", assets.architecture],
  ["3D Walkthrough Rendering", "3d-walkthrough-rendering-services", assets.xr],
  ["3D Retail Rendering", "3d-retail-rendering-services", assets.retail]
];

const visualizationLinks = [
  ["3D Architectural Visualization", "3d-visualization-services/3d-architectural-visualization-service", assets.architecture],
  ["3D Structural Visualization", "3d-structural-visualization-services", assets.wireframe],
  ["3D Interior Visualization", "3d-interior-visualization-services", assets.interior],
  ["3D Furniture Visualization", "3d-furniture-visualization-services", assets.furniture],
  ["3D Real Estate Visualization", "3d-real-estate-visualization-services", assets.home],
  ["3D Product Visualization", "3d-product-visualization-services", assets.product]
];

const modelingLinks = [
  ["3D Architectural Modeling", "3d-architectural-modeling-services", assets.architecture],
  ["3D Structural Modeling", "3d-structural-modeling-services", assets.wireframe],
  ["3D Clothing Mockup", "3d-clothing-mockup-services", assets.fashion],
  ["3D Furniture Modeling", "3d-furniture-modeling-services", assets.furniture],
  ["3D Fashion Design", "3d-modelling-for-fashion-design", assets.fashion],
  ["3D Modeling Construction", "3d-modeling-construction-services", assets.render],
  ["3D Modeling Interior Design", "3d-modeling-interior-design", assets.interior],
  ["3D Modeling Ecommerce", "3d-modeling-ecommerce", assets.product],
  ["3D Product Modeling", "3d-product-modeling-services", assets.product]
];

const animationLinks = [
  ["3D Fashion Animation", "3d-fashion-animation-services", assets.motionBoard],
  ["Architectural Walkthrough Animation", "architectural-walkthrough-animation-services", assets.motionBoard],
  ["3D Walkthrough Animation", "3d-walkthrough-animation-services", assets.wireframe],
  ["3D Interior Walkthrough Animation", "3d-interior-walkthrough-animation-services", assets.materialLab],
  ["3D Exterior Walkthrough Animation", "3d-exterior-walkthrough-animation-services", assets.architecture],
  ["3D Furniture Animation", "3d-furniture-animation-services", assets.materialLab],
  ["3D Architecture Animation", "3d-architecture-animation-services", assets.wireframe],
  ["3D Manufacturing Animation", "3d-manufacturing-animation-services", assets.motionBoard]
];

const editingLinks = [
  ["Ecommerce Image Editing", "ecommerce-image-editing-services", assets.editing],
  ["Furniture Photo Editing", "furniture-photo-editing-services", assets.furniture]
];

export const serviceCategories = [
  {
    title: "3D Rendering Service",
    shortTitle: "3D Rendering",
    slug: "3d-rendering-service",
    image: assets.render,
    summary: "Photoreal visuals for products, properties, interiors, retail spaces, and marketing launches.",
    links: renderingLinks
  },
  {
    title: "3D Visualization Service",
    shortTitle: "3D Visualization",
    slug: "3d-visualization-service",
    image: assets.xr,
    summary: "Clear, immersive visual communication for ideas that need to be understood before they are built.",
    links: visualizationLinks
  },
  {
    title: "3D Modeling Service",
    shortTitle: "3D Modeling",
    slug: "3d-modeling-service",
    image: assets.wireframe,
    summary: "Production-ready models for catalogs, render pipelines, games, AR, VR, and digital twins.",
    links: modelingLinks
  },
  {
    title: "3D Animation Service",
    shortTitle: "3D Animation",
    slug: "3d-animation-service",
    image: assets.motionBoard,
    summary: "Cinematic product, architectural, fashion, furniture, and manufacturing animation.",
    links: animationLinks
  },
  {
    title: "Image Editing Service",
    shortTitle: "Image Editing",
    slug: "image-editing-service",
    image: assets.editing,
    summary: "Retouching, clipping, color correction, masking, and catalog image finishing at scale.",
    links: editingLinks
  },
  {
    title: "Extended Reality",
    shortTitle: "XR Learning",
    slug: "xr-learning",
    image: assets.materialLab,
    summary: "Interactive learning and XR content for teams that need hands-on spatial experiences.",
    links: [["XR Learning", "xr-learning", assets.xr]]
  }
];

const serviceHighlights = [
  "Brief-to-delivery workflow",
  "Dedicated account ownership",
  "Realistic lighting and material QA",
  "High-volume production capacity",
  "Web, print, marketplace, and XR-ready exports",
  "Revision-friendly approval loops"
];

function makeServicePage([title, slug, image], category) {
  const industry = title.replace(/^3D\s+/i, "");
  return {
    type: "service",
    title,
    slug,
    eyebrow: category.shortTitle,
    image,
    summary: `${title} built for teams that need visual clarity, faster approvals, and production-ready assets without slowing the core business.`,
    sections: [
      {
        title: `What Is ${title}?`,
        text: `${title} transforms plans, sketches, CAD references, product information, or spatial concepts into polished digital visuals. It helps teams make better decisions before committing to photography, construction, sampling, or production.`
      },
      {
        title: `Why Teams Choose Our ${industry}`,
        text: "We combine specialist artists, controlled review checkpoints, and scalable production so every output feels consistent, accurate, and commercially useful."
      }
    ],
    benefits: serviceHighlights,
    deliverables: [
      `${industry} hero visuals`,
      "Multi-angle image sets",
      "Material and lighting variations",
      "Marketplace-ready exports",
      "Campaign and presentation assets",
      "Optional animation or 360-degree views"
    ],
    faqs: [
      ["What do I need to provide?", "Reference files are enough to start: sketches, CAD, photos, floor plans, dimensions, mood boards, or brand guidelines."],
      ["Can the page content be customized?", "Yes. All page text, images, page slugs, FAQ copy, and call-to-action labels live in src/data/site-data.mjs."],
      ["Can this support large catalogs?", "Yes. The structure is built around repeatable services, approval stages, and scalable production batches."]
    ]
  };
}

export const servicePages = serviceCategories.flatMap((category) =>
  category.links
    .filter(([, slug]) => slug !== category.slug)
    .map((link) => makeServicePage(link, category))
);

export const companyPages = [
  {
    type: "about",
    title: "Who Are We",
    slug: "who-are-we",
    image: assets.studio,
    summary: "A multidisciplinary 3D production studio for brands, retailers, architects, manufacturers, and digital teams.",
    body: "We help teams turn complex visual requirements into clear, persuasive assets. The studio model brings together art direction, modeling, rendering, animation, retouching, and delivery management in one workflow."
  },
  {
    type: "why",
    title: "Why Us",
    slug: "why-us",
    image: assets.render,
    summary: "Built for companies that need quality, scale, speed, and a team that knows how production really moves.",
    body: "The strongest visual programs are both creative and operational. This site includes reusable proof points, process steps, metrics, testimonials, and conversion forms across every page."
  },
  {
    type: "gallery",
    title: "Employee Gallery",
    slug: "employee-gallery",
    image: assets.studio,
    summary: "A simple team-culture page for studio photos, awards, events, and behind-the-scenes updates.",
    body: "Use this page to add local team photography once your production assets are ready."
  },
  {
    type: "privacy",
    title: "Privacy Policy",
    slug: "privacy-policy",
    image: assets.blog,
    summary: "A starter privacy page for form submissions, analytics, communication preferences, and data requests.",
    body: "Replace this placeholder policy with legal copy approved for your business before launch."
  }
];

export const workCategories = [
  {
    title: "Architecture",
    image: assets.architecture,
    items: ["Luxury villa CGI", "Urban facade study", "Aerial property view"]
  },
  {
    title: "Interior",
    image: assets.interior,
    items: ["Living room material scene", "Hospitality suite rendering", "Retail interior concept"]
  },
  {
    title: "Exterior",
    image: assets.home,
    items: ["Residential exterior dusk view", "Landscape integration", "Street-level entrance render"]
  },
  {
    title: "Structural",
    image: assets.wireframe,
    items: ["Beam and column visual", "Foundation cutaway", "Construction sequence frame"]
  },
  {
    title: "Walkthrough",
    image: assets.motionBoard,
    items: ["Interior camera path", "Exterior flythrough", "Room-to-room animation board"]
  },
  {
    title: "Furniture",
    image: assets.furniture,
    items: ["Sofa catalog renders", "Material variation set", "Lifestyle room scene"]
  },
  {
    title: "Sports/Fitness",
    image: assets.product,
    items: ["Equipment visualization", "Exploded product detail", "Campaign stills"]
  },
  {
    title: "Home Appliances",
    image: assets.interior,
    items: ["Kitchen appliance render", "Finish comparison", "Marketplace pack"]
  },
  {
    title: "Electronics",
    image: assets.product,
    items: ["Device launch visuals", "Internal feature cutaway", "360-degree spin"]
  },
  {
    title: "Fashion",
    image: assets.fashion,
    items: ["Digital garment mockup", "Fabric simulation", "Campaign animation"]
  },
  {
    title: "Kids",
    image: assets.home,
    items: ["Playroom furniture set", "Safety detail view", "Retail scene"]
  }
];

export const blogs = [
  {
    title: "How Architectural Walkthroughs Sell a Space Before It Exists",
    slug: "blog/architectural-walkthroughs-sell-space",
    category: "Architecture",
    image: assets.motionBoard,
    excerpt: "Why cinematic camera paths, pacing, and material accuracy make walkthroughs more persuasive than static views alone.",
    content: "A strong walkthrough is not just a moving camera. It guides the viewer through sequence, scale, lighting, and emotional pacing so interiors, exteriors, and structural decisions can be understood before construction or staging begins."
  },
  {
    title: "Interior Rendering Checklist for Premium Residential Projects",
    slug: "blog/interior-rendering-checklist",
    category: "Interior",
    image: assets.interior,
    excerpt: "The must-check details for furniture, lighting, material finish, camera height, and room atmosphere.",
    content: "Interior rendering quality depends on proportion, light temperature, fabric and wood finish, reflection control, furniture scale, and the relationship between camera height and human experience."
  },
  {
    title: "Structural 3D Visualization for Builders and Engineers",
    slug: "blog/structural-3d-visualization-builders-engineers",
    category: "Structural",
    image: assets.wireframe,
    excerpt: "How structural visuals can clarify sequencing, framing, foundations, and technical decisions.",
    content: "Structural visualization helps technical teams explain framing systems, beam-column relationships, slab details, foundations, and construction stages in a format that non-technical stakeholders can inspect quickly."
  },
  {
    title: "ZBrush vs Blender: Which 3D Sculpting Tool Should You Choose?",
    slug: "blog/zbrush-vs-blender",
    category: "Tools",
    image: assets.studio,
    excerpt: "A practical comparison for artists choosing a sculpting workflow for characters, products, and high-detail assets.",
    content: "ZBrush remains a specialist powerhouse for high-density sculpting, while Blender keeps gaining ground as a flexible, all-in-one production tool. The right choice depends on asset complexity, team workflow, licensing, and downstream rendering needs."
  },
  {
    title: "CLO3D vs Marvelous Designer for Fashion Teams",
    slug: "blog/clo3d-vs-marvelous-designer",
    category: "Fashion",
    image: assets.fashion,
    excerpt: "How digital garment teams can choose the best virtual apparel tool for design, sampling, and marketing.",
    content: "Fashion teams should compare pattern workflow, simulation quality, library support, collaboration requirements, and export formats. The best tool is the one that moves cleanly from design intent to approved visual."
  },
  {
    title: "Using 3D Renders on Shopify and Amazon",
    slug: "blog/using-3d-renders-shopify-amazon",
    category: "eCommerce",
    image: assets.product,
    excerpt: "Ways to use rendered imagery to improve PDP clarity, reduce photo costs, and keep catalog visuals consistent.",
    content: "Consistent camera angles, honest material representation, zoom-ready resolution, and fast-loading exports make 3D renders valuable on marketplaces. Use them for launch assets, variant images, lifestyle scenes, and comparison graphics."
  },
  {
    title: "How Much Does 3D Product Rendering Cost?",
    slug: "blog/3d-product-rendering-cost",
    category: "Pricing",
    image: assets.render,
    excerpt: "The production factors that influence rendering cost, from model readiness to output volume.",
    content: "Rendering cost depends on source file quality, required realism, material complexity, number of views, revision depth, and final delivery formats. Batch production usually lowers the per-asset cost when direction is consistent."
  },
  {
    title: "3D Floor Plans for Home Renovations",
    slug: "blog/3d-floor-plans-home-renovations",
    category: "Architecture",
    image: assets.home,
    excerpt: "How realistic floor visuals help homeowners, designers, and contractors align before renovation work begins.",
    content: "A 3D floor plan makes layout, circulation, furnishing, and lighting decisions easier to understand. It can reduce rework by helping everyone see the renovation before money is spent on materials and labor."
  }
];

export const navPages = [
  { title: "Our 3D Works", slug: "our-3d-works" },
  { title: "Why Us", slug: "why-us" },
  { title: "Who Are We", slug: "who-are-we" },
  { title: "Blogs", slug: "blogs" },
  { title: "Contact Us", slug: "contact-us" }
];

export function getAllPages() {
  const categoryPages = serviceCategories.map((category) => ({
    type: "category",
    title: category.title,
    slug: category.slug,
    eyebrow: "Services",
    image: category.image,
    summary: category.summary,
    category
  }));

  return [
    { type: "home", title: `${site.brand.name} | 3D Rendering and Visualization Studio`, slug: "", image: assets.hero },
    ...categoryPages,
    ...servicePages,
    { type: "works", title: "Our 3D Works", slug: "our-3d-works", image: assets.render, summary: "Portfolio-style galleries organized by product and industry category." },
    { type: "blogs", title: "Blogs", slug: "blogs", image: assets.blog, summary: "Insights for 3D rendering, modeling, visualization, ecommerce, and digital content teams." },
    ...blogs.map((blog) => ({ ...blog, type: "blog-detail", summary: blog.excerpt })),
    { type: "contact", title: "Contact Us", slug: "contact-us", image: assets.studio, summary: "Tell us what you want to build and we will respond with a clear next step." },
    ...companyPages,
    { type: "not-found", title: "Page Not Found", slug: "404", image: assets.hero, summary: "The page you are looking for moved or does not exist." }
  ];
}
