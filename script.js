
document.querySelectorAll('.hamb').forEach(btn=>btn.addEventListener('click',()=>{const p=document.querySelector('.mobile-panel');const open=p.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false')}));
const phone='12033756260';
function sendWA(part,title){ const msg=encodeURIComponent(`Hello CT Automotive Specialties, I am interested in: ${part} - ${title}. Is it available?`); window.open(`https://wa.me/${phone}?text=${msg}`,'_blank'); }
document.addEventListener('click',e=>{ const b=e.target.closest('[data-wa]'); if(b){ e.preventDefault(); sendWA(b.dataset.part||'', b.dataset.title||'parts request'); } });
const search=document.getElementById('productSearch'); const chips=[...document.querySelectorAll('.chip')]; const cards=[...document.querySelectorAll('.product-card')]; let active='All';
function filterCards(){ const q=(search?.value||'').toLowerCase().trim(); cards.forEach(c=>{const cat=c.dataset.cat; const txt=c.dataset.search||c.textContent.toLowerCase(); c.classList.toggle('hidden', !((active==='All'||cat===active)&&(!q||txt.includes(q))));}); }
chips.forEach(ch=>ch.addEventListener('click',()=>{chips.forEach(x=>x.classList.remove('active')); ch.classList.add('active'); active=ch.dataset.filter; filterCards();})); if(search) search.addEventListener('input',filterCards);
document.querySelectorAll('.zoom-box').forEach(box=>{ const img=box.querySelector('img'); box.addEventListener('mousemove',e=>{const r=box.getBoundingClientRect(); const x=((e.clientX-r.left)/r.width)*100; const y=((e.clientY-r.top)/r.height)*100; img.style.transformOrigin=`${x}% ${y}%`; img.style.transform='scale(1.85)';}); box.addEventListener('mouseleave',()=>{img.style.transformOrigin='center'; img.style.transform='scale(1)';}); });
const form=document.getElementById('partsForm'); if(form) form.addEventListener('submit',e=>{e.preventDefault(); const d=new FormData(form); const msg=encodeURIComponent(`Hello CT Automotive Specialties,%0AName: ${d.get('name')}%0APhone: ${d.get('phone')}%0AEmail: ${d.get('email')}%0AVehicle/Part: ${d.get('vehicle')}%0ARequest: ${d.get('need')}`); window.open(`https://wa.me/${phone}?text=${msg}`,'_blank'); });

const heroImages = ['assets/brand/hero.png', 'assets/brand/car.jpeg'];
const heroImg = document.querySelector('.hero-main-img');
if (heroImg) {
    heroImages.forEach(src => { const img = new Image(); img.src = src; });
    let heroIndex = 0;
    setInterval(() => {
        heroImg.style.opacity = '0';
        setTimeout(() => {
            heroIndex = (heroIndex + 1) % heroImages.length;
            heroImg.src = heroImages[heroIndex];
            heroImg.style.opacity = '1';
        }, 400);
    }, 2000);
}
