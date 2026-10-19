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
const techCommunities = [
    {
        name: "Cantinho das QA's",
        description:
            'Comunidade dedicada ao fortalecimento, apoio e desenvolvimento de mulheres na área de Testes e Qualidade de Software. Um espaço acolhedor para networking, mentoria e troca de conhecimento prático.',
        links: [
            { label: 'Site oficial', href: 'https://www.cantinhodasqas.com.br/quem-somos' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cantinhodasqas/home/' },
        ],
    },
    {
        name: 'Mulheres e Tecnologia',
        description:
            'Iniciativa voltada ao incentivo e destaque da presença feminina no mercado de tecnologia, promovendo conteúdos, eventos e conexões para fortalecer a carreira de profissionais tech.',
        links: [
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/mulheres-e-tecnologia/posts/' },
        ],
    },
    {
        name: 'Cafeína Vagas',
        description:
            'Comunidade ativa no Telegram ideal para quem busca recolocação ou a primeira oportunidade. Além do compartilhamento diário de vagas, o grupo reúne dicas para processos seletivos, indicações de cursos e espaço para troca direta entre estudantes e profissionais da área.',
        links: [{ label: 'Telegram', href: 'https://t.me/s/CafeinaVagas' }],
    },
    {
        name: 'Java Girls BR',
        description:
            'Comunidade focada em desenvolvimento e na linguagem Java. É uma referência indispensável para quem atua ou deseja atuar com automação de testes em Java, oferecendo suporte para aprender lógica de programação, tirar dúvidas e construir projetos.',
        links: [{ label: 'Site oficial', href: 'https://javagirlsjug.org/' }],
    },
];

const mentorshipPrograms = [
    {
        name: 'Alumna',
        description:
            'Programa focado no desenvolvimento de lideranças e aceleração de carreira feminina por meio de mentorias práticas.',
        links: [
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/somosalumna/posts/' },
        ],
    },
    {
        name: 'Instituto Joule',
        description:
            'Organização voltada ao impacto social que oferece mentorias gratuitas para jovens em situação de vulnerabilidade, ajudando a estruturar metas de carreira e inserção no mercado de trabalho.',
        links: [{ label: 'Site oficial', href: 'https://institutojoule.org/' }],
    },
];

// Função utilitária para montar o HTML de um card individual
function createCommunityCard(community, category, womenOnly = false) {
    const linksHTML = community.links.map(link => `
        <li>
            <a href="${link.href}" target="_blank" rel="noopener noreferrer">
                ${link.label}
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 3h7v7M13 3 6.5 9.5" />
                    <path d="M11 9v4H3V5h4" />
                </svg>
                <span class="community-sr-only"> (abre em nova aba)</span>
            </a>
        </li>
    `).join('');

    const womenOnlyBadgeHTML = womenOnly 
        ? `<span class="community-badge community-badge-soft">Exclusivo para mulheres</span>` 
        : '';

    return `
        <article class="community-card">
            <div class="community-card-meta">
                <span class="community-badge">${category}</span>
                ${womenOnlyBadgeHTML}
            </div>
            <h3>${community.name}</h3>
            <p>${community.description}</p>
            <ul class="community-links" aria-label="Links de ${community.name}">
                ${linksHTML}
            </ul>
        </article>
    `;
}

// Renderização dos dois grupos
function renderAllCommunities() {
    const techGrid = document.getElementById('tech-communities-grid');
    const mentorshipGrid = document.getElementById('mentorship-grid');

    if (techGrid) {
        techGrid.innerHTML = techCommunities
            .map(c => createCommunityCard(c, 'Comunidade tech'))
            .join('');
    }

    if (mentorshipGrid) {
        mentorshipGrid.innerHTML = mentorshipPrograms
            .map(c => createCommunityCard(c, 'Mentoria & desenvolvimento', c.name === 'Alumna'))
            .join('');
    }
}

document.addEventListener('DOMContentLoaded', renderAllCommunities);
const courseCategories = [
    {
        id: 'gratuitos',
        label: 'APRENDIZADO GRATUITO',
        title: 'Cursos Gratuitos e Playlists',
        courses: [
            {
                name: 'Júlio de Lima (Playlist no YouTube)',
                description: 'Conteúdo prático, didático e de altíssima qualidade. É uma das maiores referências da comunidade de QA no Brasil, ideal para aprender testes de software direto com quem vive a área no dia a dia.',
                href: 'https://www.youtube.com/playlist?list=PLf8x7B3nFTl0DuuWDC11GPvm95Gddxuln',
                format: 'Playlist gratuita',
            },
            {
                name: 'Introdução aos Testes de Software - USP (via Coursera)',
                description: 'Excelente ponto de partida para compreender os fundamentos teóricos essenciais da qualidade de software, oferecido por uma das principais universidades do país.',
                href: 'https://www.coursera.org/learn/intro-teste-de-software',
                format: 'Curso gratuito',
            },
        ],
    },
    {
        id: 'bootcamps',
        label: 'FORMAÇÃO INTENSIVA',
        title: 'Bootcamps e Academias',
        courses: [
            {
                name: 'QACoders Academy',
                description: 'Iniciativa fantástica que oferece turmas e formações gratuitas na área de Qualidade. As vagas são limitadas e abrem por período de inscrição — vale a pena acompanhar de perto e ficar atenta às redes sociais deles.',
                href: 'https://www.linkedin.com/company/qa-coders-academy/posts/',
                format: 'Vagas abertas por período',
            },
            {
                name: 'DIO (Digital Innovation One)',
                description: 'Plataforma excelente para quem quer focar na carreira de QA Engineer. Fique de olho: com frequência surgem bootcamps gratuitos focados em qualidade e testes. Vale muito a pena criar o seu cadastro e manter o perfil ativo.',
                href: 'https://www.dio.me/',
                format: 'Bootcamps e trilhas',
            },
        ],
    },
    {
        id: 'pagos',
        label: 'INVESTIMENTO ACESSÍVEL',
        title: 'Cursos Pagos (Custo Acessível)',
        courses: [
            {
                name: 'Cursos de Automação com Fernando Papito (Udemy)',
                description: 'Treinamentos práticos e diretos ao ponto focados em automação de testes. Possui excelente custo-benefício na plataforma da Udemy para quem quer dar os primeiros passos codificando testes.',
                href: 'https://www.udemy.com/user/fernando-papito/',
                format: 'Investimento acessível',
            },
        ],
    },
    {
        id: 'mulheres',
        label: 'INCENTIVO E OPORTUNIDADE',
        title: 'Incentivo a Mulheres na Tecnologia',
        courses: [
            {
                name: 'Start QA - MCIO',
                description: 'Curso gratuito de altíssima qualidade ministrado por profissionais atuantes no mercado. É uma oportunidade imperdível, por isso fique bem atenta às redes sociais para não perder os prazos de inscrição.',
                href: 'https://www.linkedin.com/company/mciobrasil/posts/',
                format: 'Iniciativa gratuita',
            },
        ],
    },
];

function createCourseCard(course) {
    return `
        <article class="course-card">
            <div class="course-card-meta">
                <span class="course-badge">${course.format}</span>
            </div>
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <ul class="course-links" aria-label="Links de ${course.name}">
                <li>
                    <a href="${course.href}" target="_blank" rel="noopener noreferrer">
                        Acessar iniciativa / curso
                        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 3h7v7M13 3 6.5 9.5" />
                            <path d="M11 9v4H3V5h4" />
                        </svg>
                        <span class="course-sr-only"> (abre em nova aba)</span>
                    </a>
                </li>
            </ul>
        </article>
    `;
}

function renderCoursesPage() {
    const container = document.getElementById('courses-article-container');
    if (!container) return;

    const categoriesHTML = courseCategories.map(category => {
        const cardsHTML = category.courses.map(course => createCourseCard(course)).join('');

        return `
            <section class="course-section" aria-labelledby="courses-${category.id}-title">
                <div class="course-section-heading">
                    <p class="section-category">
                        <span aria-hidden="true"></span>
                        ${category.label}
                    </p>
                    <h2 id="courses-${category.id}-title">${category.title}</h2>
                </div>
                <div class="course-grid">
                    ${cardsHTML}
                </div>
            </section>
        `;
    }).join('');

    container.innerHTML = categoriesHTML;
}

document.addEventListener('DOMContentLoaded', renderCoursesPage);