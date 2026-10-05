/* ============================================
   RAJEEV KUMAR — PORTFOLIO JAVASCRIPT
   Animations, Interactions & GitHub Integration
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // --- Particle Canvas Background ---
  initParticles();

  // --- Typing Animation ---
  initTypingAnimation();

  // --- Navbar Scroll Effect ---
  initNavbar();

  // --- Mobile Menu ---
  initMobileMenu();

  // --- Scroll Reveal ---
  initScrollReveal();

  // --- Back to Top ---
  initBackToTop();

  // --- Active Nav Link ---
  initActiveNav();

  // --- Contact Form ---
  initContactForm();

  // --- Fetch GitHub Stats (live) ---
  fetchGitHubStats();

  // --- Evidence Gallery & Lightbox ---
  initEvidenceGallery();

  // --- Certifications Gallery ---
  initCertificationsGallery();
});

/* ============================================
   CERTIFICATIONS DATA (DATA-DRIVEN STRUCTURE)
   Prepared for assets/certifications/ image uploads
   ============================================ */
const CERTIFICATIONS_DATA = [
  // --- Category 1: Vendor & Cloud Credentials ---
  {
    id: 'az-900',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Wipro Internal Assessment (Aligned with Microsoft AZ-900)',
    date: '24-Aug-2022',
    image: 'assets/certifications/Cloud-AZ-900 Microsoft Azure Fundamentals-L1.png',
    description: 'Validated technical proficiency in foundational cloud concepts, Azure architecture, security, governance, and networking.',
    type: 'INTERNAL ASSESSMENT',
    category: 'cloud'
  },
  {
    id: 'dp-900',
    title: 'Microsoft Azure Data Fundamentals (DP-900)',
    issuer: 'Wipro Internal Assessment',
    date: '24-Jan-2024',
    image: 'assets/certifications/Cloud-DP-900 Microsoft Azure Data Fundamentals-L1.png',
    description: 'Assessment validating core data concepts, relational & non-relational data in Azure, and analytics workloads.',
    type: 'INTERNAL ASSESSMENT',
    category: 'cloud'
  },
  {
    id: 'azure-infra-l1',
    title: 'Windows Azure Infrastructure (L1)',
    issuer: 'Wipro Internal Assessment',
    date: '23-Nov-2023',
    image: 'assets/certifications/HO MAS-MS Cloud-Windows Azure-L1.png',
    description: 'Assessment covering Azure VM management, Virtual Networks (VNets), Network Security Groups (NSGs), and resource governance.',
    type: 'INTERNAL ASSESSMENT',
    category: 'cloud'
  },

  // --- Category 2: Infrastructure & Endpoint Assessments ---
  {
    id: 'win-server-l1',
    title: 'Windows Server & Infrastructure Administration (L1)',
    issuer: 'Wipro Internal Assessment',
    date: '02-Sep-2022',
    image: 'assets/certifications/TCA CIS-EXT-PRP-INFRA ADMIN-L1.png',
    description: 'Validated proficiency in Windows Server role deployment, Active Directory DS, Group Policy Objects, storage management, and server troubleshooting.',
    type: 'INTERNAL ASSESSMENT',
    category: 'infrastructure'
  },
  {
    id: 'euc-l2',
    title: 'EUC Administration (L2)',
    issuer: 'Wipro Internal Assessment',
    date: '23-Feb-2024',
    image: 'assets/certifications/HO CIS EUC Admin-L2.png',
    description: 'Validated technical proficiency in End-User Computing (EUC) administration, Microsoft Intune, Zscaler, OS deployment, and endpoint security compliance.',
    type: 'INTERNAL ASSESSMENT',
    category: 'endpoint'
  },
  {
    id: 'linux-l2',
    title: 'Unix & Linux Administration (L2)',
    issuer: 'Wipro Internal Assessment',
    date: '05-Jun-2025',
    image: 'assets/certifications/TCA GIS-Unix-Lx Admn-L2.png',
    description: 'Knowledge assessment covering Linux CLI administration, user permissions, process management, network configuration, and shell scripts.',
    type: 'INTERNAL ASSESSMENT',
    category: 'systems'
  },
  {
    id: 'oracle-dba-l1',
    title: 'Oracle Database Administration (L1)',
    issuer: 'Wipro Internal Assessment',
    date: '28-Jul-2025',
    image: 'assets/certifications/TCA GIS-Database-OrAdmin-L1.png',
    description: 'Assessment covering relational database fundamentals, Oracle SQL queries, schema object management, and basic database administration.',
    type: 'INTERNAL ASSESSMENT',
    category: 'systems'
  },

  // --- Category 3: Wipro AI Academy Credentials ---
  {
    id: 'gcp-genai-l1-l2',
    title: 'Google Cloud GenAI (L1 & L2)',
    issuer: 'Wipro AI Academy',
    date: '08-Apr-2024',
    image: 'assets/certifications/AI-Google Cloud GenAI-L1.png',
    description: 'Certificate awarded for completing Google Cloud Generative AI fundamentals, LLM prompt engineering, and enterprise AI usage.',
    type: 'AI ACADEMY CERTIFICATE',
    category: 'ai'
  },
  {
    id: 'azure-openai-l1',
    title: 'Azure OpenAI for Business & Technical (L1)',
    issuer: 'Wipro AI Academy',
    date: '16-Oct-2023',
    image: 'assets/certifications/AI-Azure OpenAI for Business-L1.png',
    description: 'Enterprise certificate covering Azure OpenAI service architecture, model deployment, prompt engineering, and business integration.',
    type: 'AI ACADEMY CERTIFICATE',
    category: 'ai'
  },
  {
    id: 'copilot-l3',
    title: 'GitHub Copilot for Technical (L3)',
    issuer: 'Wipro AI Academy',
    date: '2024',
    image: 'assets/certifications/AI-GitHub Copilot for Technical-L3.png',
    description: 'Advanced certification covering AI-assisted software development, pair programming workflows, and code optimization using GitHub Copilot.',
    type: 'AI ACADEMY CERTIFICATE',
    category: 'ai'
  },
  {
    id: 'genai-fundamentals',
    title: 'Generative AI Fundamentals & Responsible AI',
    issuer: 'Wipro AI Academy',
    date: '2024',
    image: 'assets/certifications/AI-Generative AI Fundamentals and Responsible Usage at Wipro.png',
    description: 'Certificate covering ethical AI principles, data governance, safety guidelines, and responsible usage of Generative AI tools.',
    type: 'AI ACADEMY CERTIFICATE',
    category: 'ai'
  },
  {
    id: 'wega-ai-l2',
    title: 'WEGA for AI — Advanced Certification (L2)',
    issuer: 'Wipro AI Academy',
    date: '2024',
    image: 'assets/certifications/AI-WEGA for AI - Advanced Certification-L2.png',
    description: 'Advanced certification on enterprise AI framework engineering, enterprise workflow automation, and machine learning integration.',
    type: 'AI ACADEMY CERTIFICATE',
    category: 'ai'
  },
  {
    id: 'wings-basic-l1',
    title: 'AI-WINGS — Basic (L1)',
    issuer: 'Wipro AI Academy',
    date: 'April 2024',
    image: 'assets/certifications/AI-WINGS - Basic-L1.png',
    description: 'Foundational AI transformation program covering core machine learning concepts and automated enterprise workflows.',
    type: 'AI ACADEMY CERTIFICATE',
    category: 'ai'
  }
];

/* ============================================
   EVIDENCE GALLERY & LIGHTBOX MODAL
   ============================================ */
function initEvidenceGallery() {
  const modal = document.getElementById('evidence-gallery-modal');
  const openBtns = document.querySelectorAll('.open-gallery-trigger');
  const closeBtn = document.getElementById('close-gallery-btn');
  const overlay = document.getElementById('gallery-modal-overlay');

  if (!modal) return;

  function openModal() {
    modal.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  // Category Filtering
  const tabs = modal.querySelectorAll('.gallery-tab');
  const cards = modal.querySelectorAll('.gallery-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const cat = tab.getAttribute('data-category');
      cards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Initialize Lightbox Controls
  initLightbox();
}

/* ============================================
   CERTIFICATIONS GALLERY MODAL (DATA-DRIVEN)
   ============================================ */
/* ============================================
   CERTIFICATIONS GALLERY MODAL (DATA-DRIVEN)
   ============================================ */
function initCertificationsGallery() {
  const modal = document.getElementById('certs-gallery-modal');
  const openBtns = document.querySelectorAll('.open-certs-trigger');
  const closeBtn = document.getElementById('close-certs-btn');
  const overlay = document.getElementById('certs-modal-overlay');
  const grid = document.getElementById('certs-gallery-grid');

  if (!modal) return;

  // Render Data-Driven Certification Cards
  if (grid) {
    grid.innerHTML = CERTIFICATIONS_DATA.map(cert => {
      return `
        <div class="evidence-screenshot-card cert-card" data-cert-id="${cert.id}">
          <div class="evidence-img-container" style="height: 185px; background: rgba(10,10,15,0.95); padding: 12px; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid var(--border-subtle); overflow: hidden;">
            <img src="${cert.image}" alt="${cert.title}" class="zoomable-img" data-title="${cert.title}" data-desc="Issued by ${cert.issuer} (${cert.date}) — ${cert.description}" loading="lazy" style="max-height: 100%; max-width: 100%; width: auto; height: auto; object-fit: contain; border-radius: 6px; box-shadow: 0 4px 14px rgba(0,0,0,0.6);">
          </div>
          <div class="evidence-caption-box" style="padding:18px; display:flex; flex-direction:column; justify-content:space-between; flex-grow:1;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-wrap:wrap; gap:6px;">
                <span style="font-size:0.72rem; color:${cert.type === 'AI ACADEMY CERTIFICATE' ? 'var(--accent-purple)' : 'var(--accent-cyan)'}; font-family:var(--font-mono); text-transform:uppercase; letter-spacing:1px; font-weight:600;">
                  <i data-lucide="${cert.type === 'AI ACADEMY CERTIFICATE' ? 'sparkles' : 'shield-check'}" aria-hidden="true" style="width:12px;height:12px;vertical-align:middle;margin-right:4px;"></i> ${cert.issuer.toUpperCase()}
                </span>
                <span style="font-size:0.72rem; color:var(--text-muted); font-family:var(--font-mono);">${cert.date}</span>
              </div>
              <div class="evidence-caption-title" style="font-size:1.05rem; color:var(--text-primary); margin-bottom:6px; font-weight:700;">${cert.title}</div>
              <div class="evidence-caption-desc" style="font-size:0.82rem; color:var(--text-secondary); line-height:1.5;">${cert.description}</div>
            </div>
            
            <div style="margin-top:16px; padding-top:14px; border-top:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
              <span class="evidence-status-badge" style="${cert.category === 'cloud' ? 'background:rgba(0,120,212,0.15); color:#0078D4; border-color:rgba(0,120,212,0.3);' : ''}">
                <i data-lucide="award" aria-hidden="true" style="width:12px;height:12px;vertical-align:middle;margin-right:4px;"></i> ${cert.type}
              </span>
              <button class="btn-secondary view-cert-btn" data-image="${cert.image}" data-title="${cert.title}" data-desc="Issued by ${cert.issuer} (${cert.date}) — ${cert.description}" style="padding:6px 14px; font-size:0.78rem; display:inline-flex; align-items:center; gap:6px;">
                <i data-lucide="zoom-in" aria-hidden="true" style="width:13px;height:13px;"></i> View Certificate
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function openModal() {
    modal.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);
}

/* ============================================
   LIGHTBOX MODAL & KEYBOARD CONTROLS (HIGH-RES DOCUMENT VIEWER)
   ============================================ */
let currentGalleryItems = [];
let currentLightboxIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('close-lightbox-btn');
  const prevBtn = document.getElementById('prev-lightbox-btn');
  const nextBtn = document.getElementById('next-lightbox-btn');
  const overlay = document.getElementById('lightbox-overlay');

  if (!lightbox) return;

  function updateLightboxContent() {
    if (!currentGalleryItems.length) return;
    const item = currentGalleryItems[currentLightboxIndex];
    if (!item) return;

    const file = item.file;
    const title = item.title || 'Document Preview';
    const desc = item.desc || '';

    const wrapper = lightbox.querySelector('.lightbox-img-wrapper');

    if (wrapper) {
      wrapper.innerHTML = `
        <img id="lightbox-img" src="${file}" alt="${title}" class="cert-lightbox-image" loading="eager">
      `;
    }

    if (lightboxCaption) {
      lightboxCaption.innerHTML = `
        <strong style="font-size:1.05rem; font-family:var(--font-heading); color:var(--text-primary); display:block; margin-bottom:4px;">${title}</strong>
        <span style="color:var(--text-secondary); font-size:0.85rem; line-height:1.5;">${desc}</span>
      `;
    }

    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentLightboxIndex + 1} of ${currentGalleryItems.length}`;
    }
  }

  function openLightboxForItem(targetEl) {
    let file = '';
    let title = '';
    let desc = '';

    if (targetEl.tagName === 'IMG') {
      file = targetEl.getAttribute('src');
      title = targetEl.getAttribute('data-title') || targetEl.getAttribute('alt') || 'Evidence Screenshot';
      desc = targetEl.getAttribute('data-desc') || '';
    } else {
      file = targetEl.getAttribute('data-image') || targetEl.getAttribute('data-file');
      title = targetEl.getAttribute('data-title') || 'Certificate Document';
      desc = targetEl.getAttribute('data-desc') || '';
    }

    const allTriggers = Array.from(document.querySelectorAll('.zoomable-img, .view-cert-btn'));
    currentGalleryItems = allTriggers.filter(el => {
      const card = el.closest('.evidence-screenshot-card, .gallery-item, .cert-card');
      if (card && window.getComputedStyle(card).display === 'none') return false;
      return true;
    }).map(el => {
      if (el.tagName === 'IMG') {
        return {
          element: el,
          file: el.getAttribute('src'),
          title: el.getAttribute('data-title') || el.getAttribute('alt') || 'Evidence Screenshot',
          desc: el.getAttribute('data-desc') || ''
        };
      } else {
        return {
          element: el,
          file: el.getAttribute('data-image') || el.getAttribute('data-file'),
          title: el.getAttribute('data-title') || 'Certificate Document',
          desc: el.getAttribute('data-desc') || ''
        };
      }
    });

    currentLightboxIndex = currentGalleryItems.findIndex(i => i.file === file);
    if (currentLightboxIndex === -1) {
      currentGalleryItems.push({ element: targetEl, file: file, title: title, desc: desc });
      currentLightboxIndex = currentGalleryItems.length - 1;
    }

    updateLightboxContent();
    lightbox.classList.add('active');
    if (overlay) overlay.classList.add('active');
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }

  function prevImage() {
    if (!currentGalleryItems.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
    updateLightboxContent();
  }

  function nextImage() {
    if (!currentGalleryItems.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentGalleryItems.length;
    updateLightboxContent();
  }

  // Global Click Event Listener for zoomable images & view-cert buttons
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.zoomable-img, .view-cert-btn');
    if (trigger) {
      e.preventDefault();
      openLightboxForItem(trigger);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', prevImage);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);
  if (overlay) overlay.addEventListener('click', closeLightbox);

  // Keyboard Navigation & Escape Key Support
  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    } else if (e.key === 'Escape') {
      const evModal = document.getElementById('evidence-gallery-modal');
      if (evModal && evModal.classList.contains('active')) {
        const closeMod = document.getElementById('close-gallery-btn');
        if (closeMod) closeMod.click();
      }

      const certModal = document.getElementById('certs-gallery-modal');
      if (certModal && certModal.classList.contains('active')) {
        const closeCertMod = document.getElementById('close-certs-btn');
        if (closeCertMod) closeCertMod.click();
      }
    }
  });
}

/* ============================================
   PARTICLE CANVAS BACKGROUND
   ============================================ */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= dx * force * 0.02;
          this.y -= dy * force * 0.02;
        }
      }

      // Wrap around
      if (this.x > canvas.width + 10) this.x = -10;
      if (this.x < -10) this.x = canvas.width + 10;
      if (this.y > canvas.height + 10) this.y = -10;
      if (this.y < -10) this.y = canvas.height + 10;
    }

    draw() {
      ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticleArray() {
    particles = [];
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const opacity = (1 - dist / 140) * 0.12;
          ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    connectParticles();
    animationId = requestAnimationFrame(animate);
  }

  initParticleArray();
  animate();

  // Reinitialize on resize
  window.addEventListener('resize', () => {
    initParticleArray();
  });
}

/* ============================================
   TYPING ANIMATION
   ============================================ */
function initTypingAnimation() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const roles = [
    'Project Engineer',
    'Endpoint Management Specialist',
    'Windows Infrastructure Engineer',
    'Microsoft Azure Fundamentals (AZ-900)',
    'PowerShell & Infrastructure Automation'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      el.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      el.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 400; // Pause before new word
    }

    setTimeout(type, typeSpeed);
  }

  setTimeout(type, 1000);
}

/* ============================================
   NAVBAR
   ============================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

/* ============================================
   MOBILE MENU
   ============================================ */
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  const overlay = document.getElementById('nav-overlay');

  if (!toggle || !links) return;

  function closeMenu() {
    toggle.classList.remove('active');
    links.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.contains('active');
    if (isOpen) {
      closeMenu();
    } else {
      toggle.classList.add('active');
      links.classList.add('active');
      if (overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Close on nav link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ============================================
   SCROLL REVEAL
   ============================================ */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ============================================
   BACK TO TOP
   ============================================ */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================
   ACTIVE NAV LINK — SECTION AWARE
   ============================================ */
function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sectionsMap = [];

  // Map each navbar link to its corresponding target section element
  navLinks.forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      sectionsMap.push({ id: targetId, link: link, section: section });
    }
  });

  if (!sectionsMap.length) return;

  function updateActiveState() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 1. Top of page (Hero section) -> Activate "About"
    if (scrollPosition < 200) {
      setActive('about');
      return;
    }

    // 2. Bottom of page -> Activate "Contact"
    if (windowHeight + scrollPosition >= documentHeight - 80) {
      setActive('contact');
      return;
    }

    // 3. Focal point calculation for active section visibility
    const focalPoint = scrollPosition + 120 + (windowHeight * 0.25);

    let activeSectionId = sectionsMap[0].id;

    for (let i = 0; i < sectionsMap.length; i++) {
      const item = sectionsMap[i];
      const top = item.section.offsetTop;
      const height = item.section.offsetHeight;

      if (focalPoint >= top && focalPoint < top + height) {
        activeSectionId = item.id;
        break;
      }
    }

    setActive(activeSectionId);
  }

  function setActive(id) {
    sectionsMap.forEach(item => {
      if (item.id === id) {
        item.link.classList.add('active');
      } else {
        item.link.classList.remove('active');
      }
    });
  }

  // Throttle scroll events with requestAnimationFrame for 60fps performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveState();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', updateActiveState);

  // Execute immediate check on load
  updateActiveState();
}


/* ============================================
   CONTACT FORM
   ============================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showFormNotification('Please fill in all required fields.', 'error');
      return;
    }

    // Construct mailto link as fallback
    const mailtoSubject = encodeURIComponent(subject || 'Portfolio Contact');
    const mailtoBody = encodeURIComponent(
      `Hi Rajeev,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:itsrjwork@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.location.href = mailtoLink;
    showFormNotification('Opening your email client...', 'success');
    form.reset();
  });
}

function showFormNotification(msg, type) {
  // Remove existing notification
  const existing = document.querySelector('.form-notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = `form-notification ${type}`;
  notification.textContent = msg;
  notification.style.cssText = `
    margin-top: 16px;
    padding: 12px 20px;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
    animation: fadeIn 0.3s ease;
    ${type === 'success'
      ? 'background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);'
      : 'background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3);'
    }
  `;

  const form = document.getElementById('contact-form');
  if (form) form.appendChild(notification);

  setTimeout(() => notification.remove(), 4000);
}

/* ============================================
   GITHUB STATS (LIVE FETCH)
   ============================================ */
async function fetchGitHubStats() {
  try {
    const response = await fetch('https://api.github.com/users/ItsRjpatel');
    if (!response.ok) return;

    const data = await response.json();

    const repoCount = document.getElementById('repo-count');
    const ghRepos = document.getElementById('gh-repos');
    const ghFollowers = document.getElementById('gh-followers');
    const ghFollowing = document.getElementById('gh-following');

    if (repoCount) animateCounter(repoCount, data.public_repos);
    if (ghRepos) animateCounter(ghRepos, data.public_repos);
    if (ghFollowers) animateCounter(ghFollowers, data.followers);
    if (ghFollowing) animateCounter(ghFollowing, data.following);

  } catch (err) {
    console.log('GitHub API fetch skipped:', err.message);
  }
}

function animateCounter(el, target) {
  const duration = 1500;
  const start = parseInt(el.textContent) || 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

    const current = Math.floor(start + (target - start) * eased);
    el.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }

  requestAnimationFrame(update);
}

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
