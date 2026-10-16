// Dados equivalentes ao array 'guideSections' do React
const guideSections = [
    {
        name: 'Carreira em QA',
        badge: 'FUNDAMENTOS',
        description: 'Entenda os conceitos e a importância da Qualidade de Software, conheça o papel de QA e encontre recomendações de livros para continuar aprendendo.',
        href: '/aboutqa',
        linkLabel: 'Conhecer a carreira em QA',
    },
    {
        name: 'Cursos & Formações',
        badge: 'APRENDIZADO',
        description: 'Explore uma curadoria de cursos gratuitos, bootcamps, academias e iniciativas de formação para dar os próximos passos na área.',
        href: '/cursos',
        linkLabel: 'Explorar cursos e formações',
    },
    {
        name: 'Comunidades & Redes',
        badge: 'CONEXÕES',
        description: 'Encontre redes de apoio, oportunidades, vagas e programas de mentoria para aprender e crescer junto com a comunidade de QA.',
        href: '/comunidades',
        linkLabel: 'Conhecer comunidades',
    },
];

// Função para renderizar os cards dinamicamente
function renderGuideSections() {
    const gridContainer = document.getElementById('community-grid');
    
    if (!gridContainer) return;

    // Mapeia os dados gerando o HTML de cada card
    const cardsHTML = guideSections.map(section => `
        <article class="community-card" key="${section.href}">
            <div class="community-card-meta">
                <span class="community-badge">${section.badge}</span>
            </div>
            <h3>${section.name}</h3>
            <p>${section.description}</p>
            <ul class="community-links" aria-label="Navegação: ${section.name}">
                <li>
                    <a href="${section.href}">
                        ${section.linkLabel}
                        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10m-4-4 4 4-4 4" />
                        </svg>
                    </a>
                </li>
            </ul>
        </article>
    `).join('');

    gridContainer.innerHTML = cardsHTML;
}

// Executa a renderização ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderGuideSections();
});

document.addEventListener('DOMContentLoaded', () => {
    // Comportamentos adicionais para a página de Carreira em QA podem vir aqui se necessário.
    console.log("Página Carreira em QA carregada com sucesso!");
});