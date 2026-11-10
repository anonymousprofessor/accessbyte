/* AccessByteSolutions — Experience layer (frontend-only).
   Adds richer editorial pages, accessible interactive demonstrations and motion.
   Built on top of the supplied Technova Midnight Violet source. */
(()=>{
const icon=(name)=>({document:'▤',web:'⌘',data:'▦',media:'◉',check:'✓',global:'◎',arrow:'↗',layers:'▧',shield:'◈',play:'▶',scan:'⌗',grid:'▦',voice:'≋',type:'A',link:'↗'}[name]||'✳');
const featureSets={
  documents:[['PDF accessibility','Rebuild tags, reading order, tables and navigation for assistive technology.','document','/services/pdf-remediation'],['Word & Office files','Accessible Word, Excel and PowerPoint deliverables with proper structure.','layers','/services/microsoft-word'],['OCR & complex forms','Transform scans into searchable content and improve form navigation.','scan','/services/ocr-scanned-documents'],['Multilingual remediation','Language-aware structure, tagging and document review.','global','/services/multilingual-pdfs']],
  websites:[['Website audits','Identify accessibility barriers across interfaces, templates and journeys.','web','/services/website-accessibility'],['Keyboard navigation','Review focus order, tab sequence, overlays and interactive controls.','grid','/services/website-accessibility'],['Screen-reader testing','Understand real usability with assistive technology checks.','voice','/services/website-accessibility'],['Compliance mapping','Scope projects against WCAG, Section 508, PDF/UA and regional needs.','shield','/standards']],
  operations:[['Data processing','Extract, structure, normalize and quality-check document data.','data','/services/data-operations'],['Data annotation','Content annotation to support organized training datasets.','layers','/services/data-annotation'],['Accessible video','Captions, transcripts and inclusive media deliverables.','media','/services/accessible-media'],['White-label production','Structured production workflows for agencies and teams.','global','/partnerships']]
};
const portfolios=[
 ['Document accessibility','Tags. Reading order. Meaning.','From annual reports to interactive forms, prepare content that works beyond the printed page.','01','/services/document-accessibility'],
 ['Website accessibility','Experiences without barriers.','Improve navigation, semantics, contrast, forms and critical interactions across your website.','02','/services/website-accessibility'],
 ['Data & digital operations','Structure brings clarity.','Data annotation, spreadsheet processing, form handling and digital content operations.','03','/services/data-operations'],
 ['Multilingual & media','Make every language count.','Localization-ready documents, transcripts, captions and support across global content.','04','/services/localization-partnerships']
];
const industryHighlights=[
 ['Healthcare & pharma','Patient materials · medical forms','✚'],['Banking & finance','Reports · statements · disclosures','◈'],['Government','Public portals · forms · notices','⌂'],['Education','Learning content · publications','✦'],['Publishing','Digital books · journals · reports','▤'],['Legal & insurance','Contracts · policies · claims','§'],['Technology','Product interfaces · web apps','⌘'],['Agencies & partners','White-label document production','◎']
];
const detailExtras={
  '/about':[['How we think','Usability first','Every technical change should make content easier to navigate, understand or operate.'],['How we work','A clear, reviewable process','Review, remediation, validation and delivery create a transparent project lifecycle.'],['How we collaborate','Built for different teams','Support for brands, agencies, publishers, product teams and document operations.']],
  '/industries':[['High-volume documents','Repeatable workflows','Address document families, recurring reports and template-based publishing.'],['High-stakes content','Meaningful review','Pay attention to critical information, complex tables and form functionality.'],['Global audiences','Language-aware delivery','Consider regional standards, multilingual documents and assistive technology use.']],
  '/standards':[['WCAG','Digital experience requirements','Understand perceivable, operable, understandable and robust content.'],['PDF/UA','Document structure','Assess tags, semantics, reading order and machine-readable PDF features.'],['Regulatory context','Requirements by region','Map the standards relevant to your organization and location.']],
  '/resources':[['Start with a checklist','Understand the basics','Use structured headings, labels and text alternatives.'],['Plan a project','Know the content','Inventory file types, complexity, languages and target audience.'],['Review the result','Test beyond automation','Include reading-order and keyboard/screen-reader checks.']],
  '/tools':[['Prepare & inspect','Desktop document tools','Document editors, PDF inspection tools and structural review.'],['Validate','Automated and manual checks','Combine automatic reports with human judgment.'],['Test the experience','Assistive technology','Use keyboard, screen-reader and practical usability scenarios.']],
  '/process':[['Scope','Establish requirements','File type, complexity, standards, timeline and deliverables.'],['Build','Remediate thoughtfully','Meaningful tags, structure, reading order, labels and descriptions.'],['Verify','Make quality visible','Document findings, review checks and necessary refinements.']],
  '/pricing':[['Volume','Documents vary','Page count alone does not capture complexity or remediation effort.'],['Complexity','Content matters','Scans, tables, forms, language needs and charts affect work.'],['Validation','Review depth','The requested acceptance process shapes final deliverables.']],
  '/partnerships':[['White-label support','Your brand, our workflow','Collaborate with structured production and review handoffs.'],['Flexible content types','Across documents','Plan PDFs, Office files, multilingual content and complex assets.'],['Delivery clarity','Shared expectations','Agree on review checkpoints, scope and reporting.']],
  '/contact':[['Plan the scope','What is the format?','Tell us about documents, pages, languages and any complex tables or forms.'],['Describe the goal','What must work?','Share accessibility expectations, standards or audit outcomes.'],['Review in WhatsApp','You stay in control','Your browser prepares an enquiry message; you choose whether to send it.']]
};
const toCard = ([name,desc,ic,url],i)=>`<a class="exp-service-card reveal" href="${url}"><div class="exp-card-head"><span class="exp-service-glyph" aria-hidden="true">${icon(ic)}</span><span class="exp-card-index">0${i+1} / EXPERTISE</span></div><h3>${name}</h3><p>${desc}</p><span class="exp-explore">Explore capability <span aria-hidden="true">↗</span></span></a>`;
const homeNew = ()=>`
<section class="exp-hero" aria-labelledby="exp-hero-title">
 <div class="exp-ambient exp-ambient-one" aria-hidden="true"></div><div class="exp-ambient exp-ambient-two" aria-hidden="true"></div><div class="exp-hero-grid" aria-hidden="true"></div>
 <div class="exp-hero-inner">
  <div class="exp-hero-copy">
   <div class="exp-kicker"><span class="exp-signal"></span> DOCUMENT ACCESSIBILITY <span class="exp-kicker-slash">/</span> DIGITAL INCLUSION</div>
   <h1 id="exp-hero-title">Digital experiences<br>built for <span class="exp-gradient-type">everyone<span class="exp-period">.</span></span></h1>
   <p class="exp-hero-lead">Accessible documents. Inclusive websites. Intelligent content operations. One creative technology partner helping make every interaction count.</p>
   <div class="exp-hero-cta"><a class="exp-button exp-button-primary" href="/contact">Start your project <span aria-hidden="true">↗</span></a><a class="exp-button exp-button-ghost" href="/services">Explore capabilities <span aria-hidden="true">↗</span></a></div>
   <div class="exp-hero-proof"><span><b>01</b> Human-led review</span><span><b>02</b> Standards-informed</span><span><b>03</b> End-to-end support</span></div>
  </div>
  <div class="exp-hero-visual" aria-label="Illustration of an accessible document review workspace">
   <div class="exp-aura"></div><div class="exp-ring exp-ring-one"></div><div class="exp-ring exp-ring-two"></div>
   <div class="exp-workspace">
     <div class="exp-window-top"><span class="exp-window-controls"><i></i><i></i><i></i></span><span>AccessByte / Document Studio</span><span class="exp-window-chip">● LIVE PREVIEW</span></div>
     <div class="exp-workspace-body">
       <div class="exp-workspace-rail"><span>▦</span><span>≡</span><span>◎</span><span>⌘</span><span>◈</span></div>
       <div class="exp-document-area"><div class="exp-doc-meta"><span>ANNUAL_REPORT.PDF</span><span>PAGE 01 / 12</span></div><div class="exp-preview-sheet"><div class="exp-sheet-eyebrow">DOCUMENT STRUCTURE / 2026</div><strong>Information<br><em>without barriers.</em></strong><div class="exp-sheet-lines"><i></i><i></i><i></i></div><div class="exp-sheet-chart"><b style="height:42%"></b><b style="height:69%"></b><b style="height:52%"></b><b style="height:90%"></b><b style="height:73%"></b></div><div class="exp-sheet-footer"><span>H1</span><span>ALT</span><span>TABLE</span><span>LINK</span></div></div></div>
       <div class="exp-workspace-inspector"><div class="exp-inspector-title">ACCESSIBILITY CHECK</div><div class="exp-inspector-state"><span class="exp-state-icon">✓</span><div><b>Structure review</b><small>Illustrative interface</small></div></div><div class="exp-review-row"><span>Heading hierarchy</span><b>✓</b></div><div class="exp-review-row"><span>Reading order</span><b>✓</b></div><div class="exp-review-row"><span>Text alternatives</span><b>✓</b></div><div class="exp-review-row"><span>Table semantics</span><b>✓</b></div><div class="exp-inspector-wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><small>Preview of a structured review workflow</small></div>
     </div>
   </div>
   <div class="exp-float exp-float-left"><span>✳</span><div><b>Reading order</b><small>Logical navigation</small></div><i>↗</i></div>
   <div class="exp-float exp-float-bottom"><span class="exp-green-check">✓</span><div><b>Inclusive by design</b><small>Beyond automated checks</small></div></div>
  </div>
 </div>
 <div class="exp-bottom-fade" aria-hidden="true"></div>
</section>
<div class="exp-trustbar"><span class="exp-trust-title">STANDARDS WE WORK WITH</span><div class="exp-marquee" aria-label="WCAG 2.2, PDF/UA, Section 508, ADA, EN 301 549, AODA"><div class="exp-marquee-track">${Array(2).fill(['WCAG 2.2','PDF/UA','SECTION 508','ADA','EN 301 549','AODA','RGAA','BITV 2.0'].map(s=>`<span>${s}<i>✳</i></span>`).join('')).join('')}</div></div></div>
<section class="exp-section exp-intro" aria-labelledby="exp-intro-heading"><div class="exp-section-heading reveal"><div class="exp-overline">01 — WHAT WE DO <span></span> EXPLORE OUR WORLD</div><h2 id="exp-intro-heading">One partner. <span>Every layer</span><br>of digital accessibility.</h2><p>From the smallest PDF detail to comprehensive digital experiences, we bring a structured, human-centered approach to accessibility and technology services.</p></div><div class="exp-portfolio-grid">${portfolios.map((v,i)=>`<a href="${v[4]}" class="exp-portfolio-card exp-portfolio-${i+1} reveal"><span class="exp-portfolio-top"><b>${v[3]} / 04</b><span>↗</span></span><div class="exp-portfolio-art" aria-hidden="true">${i===0?'<div class="exp-mini-doc"><span></span><b>H1</b><i></i><i></i><i></i><small>✓ PDF/UA</small></div>':i===1?'<div class="exp-mini-browser"><div>● ● ● <span>accessibility.css</span></div><p>&lt;main role="main"&gt;</p><p>&lt;button aria-label="..."&gt;</p><p>&lt;/main&gt;</p></div>':i===2?'<div class="exp-mini-chart"><b></b><b></b><b></b><b></b><b></b><b></b></div>':'<div class="exp-mini-globe">✳<span>EN · FR · DE · HI</span></div>'}</div><div class="exp-portfolio-text"><h3>${v[0]}</h3><strong>${v[1]}</strong><p>${v[2]}</p></div></a>`).join('')}</div></section>
<section class="exp-section exp-explorer-shell" id="explore"><div class="exp-explorer-heading reveal"><div><div class="exp-overline">02 — THE CAPABILITIES <span></span> FIND YOUR SOLUTION</div><h2>Explore the work<br><span>behind better access.</span></h2></div><p>Choose a discipline to see the detailed services and workflows that support your content.</p></div><div class="exp-explorer-tabs" role="tablist" aria-label="Service categories"><button type="button" class="exp-tab active" data-experience-tab="documents" aria-selected="true" role="tab" id="tab-documents" aria-controls="exp-tab-panel">01 <span>Documents</span></button><button type="button" class="exp-tab" data-experience-tab="websites" aria-selected="false" role="tab" id="tab-websites" aria-controls="exp-tab-panel" tabindex="-1">02 <span>Web & compliance</span></button><button type="button" class="exp-tab" data-experience-tab="operations" aria-selected="false" role="tab" id="tab-operations" aria-controls="exp-tab-panel" tabindex="-1">03 <span>Data & media</span></button></div><div class="exp-service-panel" id="exp-tab-panel" role="tabpanel" aria-labelledby="tab-documents"><div class="exp-service-grid">${featureSets.documents.map(toCard).join('')}</div></div><div class="exp-service-footer">A comprehensive portfolio for a range of digital content challenges. <a href="/services">View all services <span aria-hidden="true">↗</span></a></div></section>
<section class="exp-workflow-band"><div class="exp-section exp-workflow-inner"><div class="exp-workflow-lead reveal"><div class="exp-overline">03 — OUR APPROACH</div><h2>Crafted with care.<br><span>Checked with purpose.</span></h2><p>Accessibility is a process, not a switch. Each stage helps connect meaningful structure with practical user experience.</p><a class="exp-text-arrow" href="/process">See our detailed process ↗</a></div><div class="exp-workflow-steps">${[['01','Discover','Understand your content, audience and goals.'],['02','Remediate','Improve structure, semantics and navigation.'],['03','Validate','Use manual review and assistive technology checks.'],['04','Deliver','Share refined files, findings and next steps.']].map((s,i)=>`<a class="exp-workflow-step reveal" href="/process"><span class="exp-step-number">${s[0]} <i>${i===3?'✓':'↗'}</i></span><h3>${s[1]}</h3><p>${s[2]}</p></a>`).join('')}</div></div></section>
<section class="exp-section exp-industry-section"><div class="exp-section-heading reveal"><div class="exp-overline">04 — INDUSTRIES & PARTNERS</div><h2>Every sector.<br><span>A more inclusive future.</span></h2><p>Considered solutions for organizations working with diverse content, regulations and audiences.</p></div><div class="exp-industry-grid">${industryHighlights.map(([n,d,g],i)=>`<a class="exp-industry-tile reveal" href="/industries/${slug(n==='Government'?'Government & public sector':n==='Education'?'Education':n==='Agencies & partners'?'Translation agencies':n==='Technology'?'Technology & SaaS':n==='Publishing'?'Publishing':n==='Legal & insurance'?'Legal & insurance':n==='Healthcare & pharma'?'Healthcare & pharma':'Banking & finance')}"><span class="exp-industry-symbol">${g}</span><span class="exp-industry-copy"><strong>${n}</strong><small>${d}</small></span><span class="exp-industry-arrow">↗</span></a>`).join('')}</div></section>
<section class="exp-showreel"><div class="exp-section exp-showreel-inner"><div class="exp-showreel-story reveal"><div class="exp-overline">05 — AN ACCESSIBLE DOCUMENT, EXPLAINED</div><h2>Small changes.<br><span>Meaningful impact.</span></h2><p>See how headings, logical reading order, alternative text and tables can be represented in the structure of an accessible file.</p><ul><li><span>✓</span> Meaningful document semantics</li><li><span>✓</span> Predictable navigation and reading flow</li><li><span>✓</span> Descriptions for essential visuals</li></ul><a class="exp-button exp-button-primary" href="/case-studies">Explore the before & after <span>↗</span></a></div><div class="exp-example-board reveal"><div class="exp-example-toolbar"><span>BEFORE / AFTER WORKSPACE</span><span>DEMONSTRATION</span></div><div class="exp-example-columns"><div><div class="exp-example-label bad">BEFORE <span>×</span></div><div class="exp-example-doc"><span class="exp-dummy"></span><span class="exp-dummy short"></span><span class="exp-dummy"></span><div class="exp-example-table">1 &nbsp; 2 &nbsp; 3<br>4 &nbsp; 5 &nbsp; 6</div><div class="exp-warning">! Missing structure</div></div></div><div><div class="exp-example-label good">AFTER <span>✓</span></div><div class="exp-example-doc improved"><b>H1 — Content summary</b><span class="exp-dummy"></span><b>H2 — Results</b><span class="exp-dummy short"></span><div class="exp-example-table">COLUMN HEADERS ✓<br>ROWS &amp; DATA ✓</div><div class="exp-success">✓ Described &amp; organized</div></div></div></div><div class="exp-board-foot">ILLUSTRATIVE EXAMPLE · NOT AN AUTOMATED COMPLIANCE RESULT</div></div></div></section>
<section class="exp-section exp-resources-section"><div class="exp-section-heading reveal"><div class="exp-overline">06 — INSIGHTS & RESOURCES</div><h2>Ideas, guides &amp;<br><span>useful perspectives.</span></h2><p>Explore practical accessibility guidance, illustrative cases and downloadable service materials.</p></div><div class="exp-resource-grid">${[['A practical PDF accessibility checklist','Review headings, tables, reading order, metadata and meaningful visuals.','CHECKLIST','/downloads'],['Understanding accessibility standards','Find out how WCAG, PDF/UA and other requirements can apply.','STANDARDS','/standards'],['A closer look at remediation','Explore the workflow from intake and audit to validation and delivery.','WORKFLOW','/process']].map((r,i)=>`<a class="exp-resource-tile exp-resource-${i+1} reveal" href="${r[3]}"><div class="exp-resource-visual"><span>${r[2]}</span><b>${i===0?'▤':i===1?'◎':'↗'}</b></div><div class="exp-resource-info"><span>READING ROOM / 0${i+1}</span><h3>${r[0]}</h3><p>${r[1]}</p><strong>Explore resource ↗</strong></div></a>`).join('')}</div></section>
<section class="exp-section exp-faq-section"><div class="exp-faq-header reveal"><div><div class="exp-overline">07 — FAQ</div><h2>Questions worth<br><span>asking.</span></h2></div><p>Clear answers help you plan the right work.</p></div>${faqBlock()}</section>
${cta()}`;

// Save the original rendering and only replace the homepage presentation.
const previousRender=render;
home=homeNew;
render=function(){previousRender();enhancePage();};
window.onpopstate=render;

function enhancePage(){
 const path=routePath().replace(/\/$/,'')||'/';const main=document.getElementById('main');
 if(path!=='/'){
   const head=main.querySelector('.page-hero');
   if(head && !head.querySelector('.exp-page-art')){
     head.classList.add('exp-page-hero');
     head.insertAdjacentHTML('beforeend',`<div class="exp-page-art" aria-hidden="true"><div class="exp-page-orbit"></div><div class="exp-page-square"><span>✳ ACCESSBYTE</span><div class="exp-page-art-line"></div><div class="exp-page-art-line short"></div><div class="exp-page-art-dotgrid">▦ <em>↗</em></div></div><div class="exp-page-floating">INCLUSIVE BY DESIGN <span>✓</span></div></div>`);
   }
   const details=detailExtras[path]|| (path.startsWith('/services/')?[
       ['Accessibility that works','Structure + usability','Focus on semantic content, readable hierarchy and practical navigation.'],
       ['A clear production approach','Review + remediation','Start with requirements, improve content, then validate the experience.'],
       ['Thoughtful delivery','Guidance + verification','Clarify acceptance criteria, quality checks and final deliverables.']
   ]:path.startsWith('/industries/')?[
       ['Industry-specific needs','Content types','Address recurring document templates, complex content and diverse audiences.'],
       ['Standards alignment','Relevant guidelines','Identify practical requirements before remediation starts.'],
       ['Human review','User experience','Combine structured techniques with meaningful usability checks.']
   ]:null);
   if(details && !main.querySelector('.exp-detail-section')){
     const sec=document.createElement('section');sec.className='exp-section exp-detail-section';
     sec.innerHTML=`<div class="exp-section-heading reveal"><div class="exp-overline">THE DETAILS / BEYOND THE BASICS</div><h2>Built around <span>what matters.</span></h2><p>Clear priorities and thoughtful execution make complex accessibility challenges easier to navigate.</p></div><div class="exp-detail-grid">${details.map((d,i)=>`<article class="exp-detail-card reveal"><div class="exp-detail-top"><span>${String(i+1).padStart(2,'0')}</span><span>↗</span></div><small>${d[0]}</small><h3>${d[1]}</h3><p>${d[2]}</p></article>`).join('')}</div></section>`;
     const position=main.querySelector('.section');if(position){position.after(sec)}else{main.appendChild(sec)}
   }
 }
 main.querySelectorAll('.section,.exp-section,.page-hero,.dark,.cta').forEach(el=>el.classList.add('exp-content-wrap'));
 main.querySelectorAll('.card').forEach((el,i)=>{el.classList.add('exp-elevated-card');el.style.setProperty('--card-seq',i%6);});
 document.querySelectorAll('.exp-tab').forEach(tab=>{
   tab.addEventListener('click',()=>selectExpTab(tab.dataset.experienceTab));
   tab.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();let tabs=Array.from(document.querySelectorAll('.exp-tab'));let i=tabs.indexOf(tab);let nxt=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[nxt].focus();selectExpTab(tabs[nxt].dataset.experienceTab)});
 });
 startReveals();
}
function selectExpTab(name){
 const valid=featureSets[name];if(!valid)return;
 document.querySelectorAll('.exp-tab').forEach(t=>{const is=t.dataset.experienceTab===name;t.classList.toggle('active',is);t.setAttribute('aria-selected',String(is));t.tabIndex=is?0:-1});
 const panel=document.getElementById('exp-tab-panel');panel.setAttribute('aria-labelledby','tab-'+name);panel.querySelector('.exp-service-grid').innerHTML=valid.map(toCard).join('');startReveals();
}
let revealObserver;
function startReveals(){
 if(revealObserver)revealObserver.disconnect();
 if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view'));return;}
 revealObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');revealObserver.unobserve(e.target)}})},{rootMargin:'0px 0px -35px 0px',threshold:.08});
 document.querySelectorAll('.reveal').forEach(e=>revealObserver.observe(e));
}
// Close desktop dropdown when clicking outside; allow keyboard focus.
document.addEventListener('click',e=>{const dropdown=document.querySelector('.dropdown');if(dropdown&&!dropdown.contains(e.target)){dropdown.classList.remove('open');const trigger=dropdown.querySelector('button');if(trigger)trigger.setAttribute('aria-expanded','false')}});
// Make a single URL parameter opt-in only when visitor explicitly clicks a contact link.
render();
})();
