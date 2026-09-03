// ============================================================================
// Dental Line — site behaviour: i18n, nav, icons, services rendering, forms
// ============================================================================

const ICONS = {
  shield: '<path d="M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
  badge: '<circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M4 20c0-3 2.5-5 5-5s5 2 5 5"/><circle cx="17" cy="9" r="2.3"/><path d="M15.2 20c0-2.2 1.6-4 3.8-4"/>',
  sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  phone: '<path d="M5 4h4l1 4-2.5 1.6a11 11 0 005 5L14 12l4 1v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  chat: '<path d="M4 12a8 8 0 1114.6 4.6L20 20l-3.6-1.4A8 8 0 014 12z"/><path d="M8.7 11c.3 1.7 2.3 3.6 4 3.9"/>',
  viber: '<path d="M4 12a8 8 0 1114.6 4.6L20 20l-3.6-1.4A8 8 0 014 12z"/><path d="M9 9.5c0-.8.6-1.5 1.5-1.5h3c.9 0 1.5.7 1.5 1.5v3c0 .8-.6 1.5-1.5 1.5H12l-1.5 1.5V14h-.1c-.8 0-1.4-.7-1.4-1.5v-3z"/>',
  camera: '<path d="M4 8h3l1.5-2h7L17 8h3v11H4z"/><circle cx="12" cy="13.3" r="3.1"/>',
  person: '<circle cx="12" cy="8" r="3.3"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/>',
  tooth: '<path d="M12 3c-2 0-3.2 1-4.3 1-1.4 0-2.4-1-3.4.2-1 1.2-.5 3 .1 4.8.6 2 .7 3.9 1.4 6.4.4 1.5.9 3.3 2.1 3.3 1.3 0 1.2-2.5 1.6-4.1.3-1.1.6-1.6 1.4-1.6s1.1.5 1.4 1.6c.4 1.6.3 4.1 1.6 4.1 1.2 0 1.7-1.8 2.1-3.3.7-2.5.8-4.4 1.4-6.4.6-1.8 1.1-3.6.1-4.8-1-1.2-2 0-3.4 0-1.1 0-2.3-1-4.1-1z"/>',
  drop: '<path d="M12 3c3 4 6 7.5 6 11a6 6 0 01-12 0c0-3.5 3-7 6-11z"/>',
  crown: '<path d="M4 9l4 3 4-6 4 6 4-3-1.4 9H5.4L4 9z"/>',
  bolt: '<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/>',
  grid: '<rect x="4" y="4" width="6" height="6" rx="1.2"/><rect x="14" y="4" width="6" height="6" rx="1.2"/><rect x="4" y="14" width="6" height="6" rx="1.2"/><rect x="14" y="14" width="6" height="6" rx="1.2"/>',
  cross: '<path d="M12 5v14M5 12h14"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/>',
  clipboard: '<rect x="6" y="4" width="12" height="16" rx="2"/><path d="M9 4V3.5A1.5 1.5 0 0110.5 2h3A1.5 1.5 0 0115 3.5V4"/><path d="M9 12l2 2 4-4"/>',
  star: '<path d="M12 3l2.5 5.5L20 9l-4.5 4 1 6-4.5-3-4.5 3 1-6L4 9l5.5-.5L12 3z"/>'
};

function iconSvg(key){
  const body = ICONS[key] || ICONS.tooth;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
}

const CATEGORY_ICON = {
  basic: 'clipboard',
  hygiene: 'drop',
  caries: 'tooth',
  endo: 'target',
  prosthodontics: 'crown',
  surgery: 'cross',
  implantology: 'bolt',
  'implant-prosthetics': 'crown',
  orthodontics: 'grid',
  pediatric: 'star'
};

// Curated picks shown on the homepage services preview
const HIGHLIGHT_SERVICES = [
  { slug: 'basic', i: 0 },
  { slug: 'hygiene', i: 0 },
  { slug: 'caries', i: 3 },
  { slug: 'prosthodontics', i: 0 },
  { slug: 'surgery', i: 0 },
  { slug: 'orthodontics', i: 8 }
];

const CONTACT = {
  phoneDisplay: '+373 68 623 030',
  phoneTel: '+37368623030',
  phoneWa: '37368623030',
  phoneViber: '+37368623030',
  email: 'dentalline20@gmail.com',
  addressLine: 'str. Testemițanu 3/10, Chișinău'
};

let currentLang = localStorage.getItem('dl_lang') || 'ru';

function t(key){
  const dict = I18N[currentLang] || I18N.ru;
  return dict[key] || I18N.ru[key] || key;
}

function applyTranslations(){
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setLanguage(lang){
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem('dl_lang', lang);
  applyTranslations();
  renderDynamicContent();
}

function initLangSwitch(){
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

function initMobileNav(){
  const toggle = document.querySelector('.nav-toggle');
  const overlay = document.getElementById('mobile-overlay');
  if (!toggle || !overlay) return;
  toggle.innerHTML = iconSvg('menu');

  function closeMenu(){
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    toggle.innerHTML = iconSvg('menu');
  }
  function openMenu(){
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggle.innerHTML = iconSvg('close');
  }

  toggle.addEventListener('click', () => {
    overlay.classList.contains('open') ? closeMenu() : openMenu();
  });
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) closeMenu();
  });
}

function renderStaticIcons(){
  document.querySelectorAll('[data-icon]').forEach(el => {
    el.innerHTML = iconSvg(el.getAttribute('data-icon'));
  });
}

function fmtPrice(n){
  return new Intl.NumberFormat('ru-RU').format(n);
}

function renderHomeServicesPreview(){
  const grid = document.getElementById('services-preview-grid');
  if (!grid) return;
  grid.innerHTML = HIGHLIGHT_SERVICES.map(pick => {
    const cat = SERVICES_DATA.find(c => c.slug === pick.slug);
    if (!cat) return '';
    const item = cat.items[pick.i];
    return `<a class="service-card" href="services.html?cat=${cat.slug}">
      <span class="tag">${cat.title[currentLang]}</span>
      <h3>${item.name[currentLang]}</h3>
      <p class="price">${fmtPrice(item.price)}<span>${t('services.currency')}</span></p>
    </a>`;
  }).join('');
}

function renderServicesPage(){
  const pillsWrap = document.getElementById('filter-pills');
  const list = document.getElementById('price-list');
  if (!pillsWrap || !list) return;

  const params = new URLSearchParams(window.location.search);
  const preselect = params.get('cat');
  if (!renderServicesPage._active){
    renderServicesPage._active = (preselect && SERVICES_DATA.some(c => c.slug === preselect)) ? preselect : 'all';
  }
  const active = renderServicesPage._active;

  pillsWrap.innerHTML = `<button class="filter-pill ${active === 'all' ? 'active' : ''}" data-cat="all">${t('filter.all')}</button>` +
    SERVICES_DATA.map(cat => `<button class="filter-pill ${active === cat.slug ? 'active' : ''}" data-cat="${cat.slug}">${iconSvg(CATEGORY_ICON[cat.slug])}${cat.title[currentLang]}</button>`).join('');

  pillsWrap.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      renderServicesPage._active = btn.dataset.cat;
      renderServicesPage();
      window.scrollTo({ top: list.offsetTop - 130, behavior: 'smooth' });
    });
  });

  list.innerHTML = SERVICES_DATA
    .filter(cat => active === 'all' || active === cat.slug)
    .map(cat => `
      <div class="price-category" id="cat-${cat.slug}">
        <div class="price-category-head">
          <span class="cat-icon">${iconSvg(CATEGORY_ICON[cat.slug])}</span>
          <h2>${cat.title[currentLang]}</h2>
        </div>
        <div class="price-rows">
          ${cat.items.map(item => `
            <div class="price-row">
              <span class="price-row-name">${item.name[currentLang]}</span>
              <span class="price-row-price">${fmtPrice(item.price)} ${t('services.currency')}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
}

function initContactForm(){
  const form = document.getElementById('contact-form');
  if (!form) return;

  function buildMessage(){
    const name = form.querySelector('#f-name').value.trim();
    const phone = form.querySelector('#f-phone').value.trim();
    const msg = form.querySelector('#f-message').value.trim();
    let text = '';
    if (name) text += `${t('contacts.form.name')}: ${name}\n`;
    if (phone) text += `${t('contacts.form.phone')}: ${phone}\n`;
    if (msg) text += `${msg}`;
    return text || t('contacts.form.messagePh');
  }

  const waBtn = document.getElementById('send-whatsapp');
  const viberBtn = document.getElementById('send-viber');
  const callBtn = document.getElementById('send-call');
  const emailBtn = document.getElementById('send-email');

  if (waBtn) waBtn.addEventListener('click', () => {
    window.open(`https://wa.me/${CONTACT.phoneWa}?text=${encodeURIComponent(buildMessage())}`, '_blank');
  });
  if (viberBtn) viberBtn.addEventListener('click', () => {
    // Viber doesn't support pre-filled text via a public deep link, so we just open the chat.
    window.location.href = `viber://chat?number=%2B${CONTACT.phoneViber.replace('+', '')}`;
  });
  if (callBtn) callBtn.addEventListener('click', () => {
    window.location.href = `tel:${CONTACT.phoneTel}`;
  });
  if (emailBtn) emailBtn.addEventListener('click', () => {
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Dental Line')}&body=${encodeURIComponent(buildMessage())}`;
  });
}

function fillContactValues(){
  document.querySelectorAll('[data-contact="phoneDisplay"]').forEach(el => el.textContent = CONTACT.phoneDisplay);
  document.querySelectorAll('[data-contact="phoneTel"]').forEach(el => el.setAttribute('href', `tel:${CONTACT.phoneTel}`));
  document.querySelectorAll('[data-contact="email"]').forEach(el => { el.textContent = CONTACT.email; el.setAttribute('href', `mailto:${CONTACT.email}`); });
  document.querySelectorAll('[data-contact="address"]').forEach(el => el.textContent = CONTACT.addressLine);
  document.querySelectorAll('[data-contact="year"]').forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll('[data-contact="viberHref"]').forEach(el => el.setAttribute('href', `viber://chat?number=%2B${CONTACT.phoneViber.replace('+', '')}`));
}

function renderDynamicContent(){
  renderHomeServicesPreview();
  renderServicesPage();
}

function init(){
  renderStaticIcons();
  initLangSwitch();
  initMobileNav();
  initContactForm();
  fillContactValues();
  applyTranslations();
  renderDynamicContent();
}

document.addEventListener('DOMContentLoaded', init);
