// Année du pied de page
document.getElementById('year').textContent = new Date().getFullYear();

// Garde l'onglet actif après rechargement
const tabButtons = document.querySelectorAll('#tabs [data-bs-toggle="pill"]');
const saved = location.hash;
if (saved) {
  const btn = document.querySelector(`#tabs [data-bs-target="${saved}"]`);
  if (btn) bootstrap.Tab.getOrCreateInstance(btn).show();
}
tabButtons.forEach(btn =>
  btn.addEventListener('shown.bs.tab', e =>
    history.replaceState(null, '', e.target.dataset.bsTarget)));

// Formulaire : validation puis ouverture du client mail
const EMAIL = 'votre.email@exemple.com'; // remplace par ton adresse
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', e => {
  e.preventDefault();
  form.classList.add('was-validated');
  if (!form.checkValidity()) return;

  const nom = form.nom.value.trim();
  const body = `${form.message.value.trim()}\n\n${nom}\n${form.email.value.trim()}`;
  window.location.href =
    `mailto:${EMAIL}?subject=${encodeURIComponent('Message de ' + nom)}&body=${encodeURIComponent(body)}`;

  status.textContent = 'Ton application mail va s\'ouvrir pour envoyer le message.';
  form.reset();
  form.classList.remove('was-validated');
});

//Effet typing pour le texte de bienvenue

const welcomeText = "BIENVENUE SUR MON PORTFOLIO";
const welcomeElement = document.getElementById("welcome-typing");

let welcomeIndex = 0;

function typeWelcome() {
  if (welcomeIndex < welcomeText.length) {
    welcomeElement.textContent += welcomeText.charAt(welcomeIndex);
    welcomeIndex++;
    setTimeout(typeWelcome, 100);
  }
}

typeWelcome();

