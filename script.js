const revealButton = document.getElementById('revealButton');
const headline = document.getElementById('headline');
const eyebrow = document.getElementById('eyebrow');
const description = document.getElementById('description');
const notice = document.getElementById('notice');
const smallNote = document.getElementById('smallNote');
const toast = document.getElementById('toast');

let stage = 0;

const messages = [
  {
    eyebrow: 'resultado da investigação',
    title: 'Você foi<br><span>escolhido(a)!</span>',
    description: 'Depois de uma análise extremamente séria (que durou uns 4 segundos), concluímos que você merece um mimo em forma de site.',
    notice: '🎁 Seu prêmio: um motivo extra pra sorrir hoje. Não precisa agradecer, sua carinha feliz já serve.',
    button: 'Tem mais? 👀',
    note: 'a pesquisa foi feita por especialistas em absolutamente nada'
  },
  {
    eyebrow: 'um pequeno detalhe',
    title: 'Alguém pensou<br><span>em você hoje.</span>',
    description: 'E essa pessoa teve a ideia questionavelmente fofa de montar uma página inteira só pra tentar arrancar um sorrisinho seu.',
    notice: '🕵️ Identidade da pessoa: confidencial. Nível de fofura da atitude: sob investigação.',
    button: 'E agora, faço o quê?',
    note: 'dica: sorrir conta como resposta'
  },
  {
    eyebrow: 'instruções importantes',
    title: 'Missão: <span>sorrir.</span>',
    description: 'Pronto. Sua missão é dar um sorrisinho, fingir que não achou fofo e seguir o dia como se nada tivesse acontecido.',
    notice: '💌 P.S.: se você sorriu, alguém por trás dessa tela provavelmente acabou de ganhar o dia também.',
    button: 'Missão cumprida ☺',
    note: 'você pode voltar aqui sempre que precisar de um mini sorriso'
  }
];

revealButton.addEventListener('click', () => {
  if (stage < messages.length) {
    const message = messages[stage];
    eyebrow.textContent = message.eyebrow;
    headline.innerHTML = message.title;
    description.textContent = message.description;
    notice.innerHTML = `<span class="notice-icon">${message.notice.slice(0, 2)}</span><span>${message.notice.slice(2).trim()}</span>`;
    revealButton.innerHTML = `${message.button} <span aria-hidden="true">→</span>`;
    smallNote.textContent = message.note;
    stage++;
    makeConfetti();
  } else {
    toast.textContent = '✨ Sorriso detectado. Relatório enviado ao universo.';
    toast.classList.add('show');
    makeConfetti();
    window.setTimeout(() => toast.classList.remove('show'), 2600);
  }
});

function makeConfetti() {
  const symbols = ['♡', '✦', '✧', '♥', '⋆'];
  for (let i = 0; i < 14; i++) {
    const bit = document.createElement('span');
    bit.className = 'confetti';
    bit.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    bit.style.left = `${40 + Math.random() * 20}%`;
    bit.style.top = `${43 + Math.random() * 15}%`;
    bit.style.setProperty('--x', `${(Math.random() - 0.5) * 260}px`);
    bit.style.setProperty('--y', `${(Math.random() - 0.5) * 230 - 35}px`);
    document.body.appendChild(bit);
    window.setTimeout(() => bit.remove(), 1500);
  }
}
