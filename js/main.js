// --- Data Configuration ---
const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'platform', name: 'Platform & Web' },
    { id: 'vision', name: 'Vision AI' },
    { id: 'nlp', name: 'NLP & RAG' },
    { id: 'analytics', name: 'Data Analytics' },
    { id: 'automation', name: 'Automation' }
];

const projects = [
    {
        id: 1,
        category: 'platform',
        client: 'Sejong Tax Corp',
        title: 'Professional Tax Platform',
        tech: 'React, Node.js, Chatbot API',
        image: 'images/tax.png',
        description: '신뢰감을 주는 디자인과 자동 상담 기능을 결합한 프리미엄 세무사 법인 홈페이지 구축.',
        challenge: '기존의 딱딱하고 어려운 세무 이미지를 탈피하고, 단순 문의 전화로 인한 업무 피로도를 줄여야 했습니다.',
        solution: '전문성을 강조하는 모던한 UX/UI를 설계하고, 자주 묻는 세무 질문을 24시간 응대하는 AI 챗봇을 도입하여 초기 상담 과정을 자동화했습니다.',
        results: [
            '상담 문의 전환율 200% 증가',
            '단순 전화 문의 40% 감소',
            '브랜드 신뢰도 설문 최우수 등급'
        ]
    },
    {
        id: 2,
        category: 'vision',
        client: 'BioGen Lab',
        title: 'Auto DNA Fiber Counter',
        tech: 'Computer Vision, YOLOv8, OpenCV',
        image: 'images/fiber.png',
        description: '현미경 이미지 내 DNA Fiber의 개수와 길이를 자동으로 측정하는 비전 AI 솔루션.',
        challenge: '연구원들이 하루 평균 4시간씩 현미경 사진을 보며 수작업으로 Fiber를 세고 길이를 측정하여 오차가 발생하고 연구 효율이 저하되었습니다.',
        solution: 'DNA Fiber 특화 객체 탐지 모델을 학습시켜 이미지 업로드 즉시 수백 개의 Fiber를 검출하고, 픽셀 단위 정밀 측정 알고리즘으로 길이를 데이터화했습니다.',
        results: [
            '분석 시간 4시간 -> 5초로 단축',
            '휴먼 에러(계측 실수) 0% 달성',
            '연간 연구 비용 1억 원 절감 효과'
        ]
    },
    {
        id: 3,
        category: 'nlp',
        client: 'MediSearch Institute',
        title: 'Medical Insight Engine',
        tech: 'Scrapy, LangChain, Pinecone',
        image: 'images/medical.png',
        description: '전 세계 의료 논문 및 임상 데이터를 자동 수집하여 자연어로 검색 가능한 지능형 검색 엔진.',
        challenge: '매일 쏟아지는 수천 건의 의료 데이터 중 연구에 필요한 특정 임상 결과를 찾는 데 막대한 시간이 소요되었습니다.',
        solution: '자동화된 웹 스크래퍼로 최신 자료를 수집하고, RAG(검색 증강 생성) 기술을 적용하여 "당뇨병 환자의 최신 임상 결과 요약해줘"와 같은 자연어 질문에 정확한 답변과 출처를 제공했습니다.',
        results: [
            '자료 조사 시간 90% 단축',
            '연구 논문 인용 정확도 대폭 향상',
            '다국어 논문 자동 번역 및 요약 지원'
        ]
    },
    {
        id: 4,
        category: 'analytics',
        client: 'Viral Hunter',
        title: 'Undervalued Video Scout',
        tech: 'YouTube Data API, Python, Pandas',
        image: 'images/youtube_analysis.png',
        url: 'https://youtube-search-viewer.nomadlab.kr',
        description: '구독자 수는 적지만 폭발적인 조회수를 기록한 바이럴 영상을 찾아주는 트렌드 분석 툴.',
        challenge: '유튜버와 마케터들이 다음 콘텐츠 아이디어를 얻기 위해 이미 유명한 채널만 참고하여 차별화된 소재를 찾기 어려웠습니다.',
        solution: '조회수 대비 구독자 비율(View/Sub Ratio)이 비정상적으로 높은 영상을 필터링하는 알고리즘을 개발하여, 이제 막 뜨기 시작한 "숨겨진 떡상" 소재를 발굴했습니다.',
        results: [
            '콘텐츠 기획 성공률 3배 증가',
            '클라이언트 채널 평균 조회수 150% 성장',
            '실시간 트렌드 알림 시스템 구축'
        ]
    },
    {
        id: 5,
        category: 'automation',
        client: 'Creator Studio',
        title: 'Viral Script Generator',
        tech: 'LLM, Few-shot Prompting',
        image: 'images/viralscript.png',
        url: 'https://viral-structure-cloner.reelscode.co.kr',
        description: '벤치마킹할 영상을 입력하면 해당 스타일을 분석하여 새로운 대본을 작성해주는 AI 작가.',
        challenge: '트렌디한 영상을 찾더라도 이를 자신의 스타일로 각색하여 대본을 작성하는 과정에서 창작의 고통과 시간 소요가 컸습니다.',
        solution: '바이럴 영상의 구조(후킹-본론-결론)를 분석하고, 사용자의 말투와 주제를 반영하여 즉시 촬영 가능한 수준의 스크립트를 생성하는 프롬프트 엔지니어링 툴을 개발했습니다.',
        results: [
            '대본 작성 시간 2시간 -> 10분 단축',
            '1일 1영상 업로드 프로세스 확립',
            '카피라이팅 퀄리티 상향 평준화'
        ]
    },
    {
        id: 6,
        category: 'automation',
        client: 'AutoBiz Corp',
        title: 'Multi-Agent Orchestrator',
        tech: 'LangGraph, AutoGen',
        image: 'images/multiaent.png',
        description: '검색, 분석, 작성 등 서로 다른 역할을 가진 AI 에이전트들이 협업하여 업무를 수행하는 플랫폼.',
        challenge: '단일 AI 모델로는 "시장 조사 후 보고서 작성해줘"와 같은 복합적인 업무를 한 번에 완벽하게 수행하기 어려웠습니다.',
        solution: '리서치 에이전트(자료조사), 분석 에이전트(인사이트 도출), 라이터 에이전트(보고서 작성)를 연결하여, 사람이 관리자로서 승인만 하면 되는 완전 자동화 워크플로우를 구현했습니다.',
        results: [
            '주간 시장 동향 보고서 100% 자동화',
            '업무 처리 속도 10배 향상',
            '인건비 대비 운영 비용 90% 절감'
        ]
    },
    {
        id: 7,
        category: 'platform',
        client: 'Aura',
        title: 'Aura - AI Intelligence Studio',
        tech: 'Web',
        image: 'images/aura.svg',
        url: 'https://aura-studio-nu.vercel.app/',
        description: 'AI Intelligence Studio 소개 페이지.',
        challenge: '자세한 내용은 링크에서 확인 가능합니다.',
        solution: '자세한 내용은 링크에서 확인 가능합니다.',
        results: [
            '라이브 데모 링크 제공'
        ]
    },
    {
        id: 8,
        category: 'platform',
        client: 'Blitz',
        title: 'Blitz',
        tech: 'Phaser 3',
        image: 'images/blitz.svg',
        url: 'https://blitz-rts.netlify.app/',
        description: '브라우저에서 동작하는 RTS 데모.',
        challenge: '자세한 내용은 링크에서 확인 가능합니다.',
        solution: '자세한 내용은 링크에서 확인 가능합니다.',
        results: [
            '라이브 데모 링크 제공'
        ]
    }
];

let activeCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProjects('all');
});

function renderCategories() {
    const container = document.getElementById('category-filters');
    if (!container) return;
    
    container.innerHTML = categories.map(cat => `
        <button 
            onclick="setCategory('${cat.id}')"
            class="px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${activeCategory === cat.id ? 'category-active' : 'category-inactive'}"
        >
            ${cat.name}
        </button>
    `).join('');
}

function setCategory(id) {
    activeCategory = id;
    renderCategories();
    renderProjects(id);
}

function renderProjects(category) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    
    const filtered = category === 'all' 
        ? projects 
        : projects.filter(p => p.category === category);

    // Animate Out
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        if (filtered.length === 0) {
            grid.innerHTML = `<div class="col-span-3 text-center py-20 text-slate-500">해당 카테고리의 프로젝트가 준비 중입니다.</div>`;
        } else {
            grid.innerHTML = filtered.map(project => `
                <div onclick="openProject(${project.id})" class="group bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transform hover:-translate-y-1">
                    <div class="relative overflow-hidden aspect-[4/3]">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#1e293b] to-transparent opacity-60"></div>
                        <div class="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10">
                            ${project.tech.split(',')[0]}
                        </div>
                    </div>
                    <div class="p-4 md:p-6">
                        <div class="card-meta flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                            <span class="text-xs font-bold text-indigo-400 uppercase tracking-wider">${categories.find(c => c.id === project.category).name}</span>
                            <span class="text-xs text-slate-500">${project.client}</span>
                        </div>
                        <h3 class="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">${project.title}</h3>
                        <p class="text-slate-400 text-sm line-clamp-2 leading-relaxed">${project.description}</p>
                        
                        <div class="mt-4 flex items-center text-indigo-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                            View Case Study <span class="material-symbols-outlined text-base ml-1">arrow_forward</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Animate In
        grid.style.transition = 'all 0.4s ease-out';
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
    }, 200);
}

function openProject(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    // Set Content
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-category').innerText = categories.find(c => c.id === project.category).name;
    document.getElementById('modal-client').innerText = project.client;
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-tech').innerText = `Tech Stack: ${project.tech}`;
    document.getElementById('modal-challenge').innerText = project.challenge;
    document.getElementById('modal-solution').innerText = project.solution;

    const resultsList = document.getElementById('modal-results');
    resultsList.innerHTML = project.results.map(r => 
        `<li class="flex items-start text-slate-300 text-sm">
            <span class="material-symbols-outlined text-green-400 text-lg mr-2">check</span>
            ${r}
         </li>`
    ).join('');

    // Set Link
    const linkContainer = document.getElementById('modal-link-container');
    const modalLink = document.getElementById('modal-link');
    if (project.url) {
        linkContainer.classList.remove('hidden');
        modalLink.href = project.url;
    } else {
        linkContainer.classList.add('hidden');
    }

    // Show Modal
    const modal = document.getElementById('project-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const panel = document.getElementById('modal-panel');

    modal.classList.remove('hidden');
    setTimeout(() => {
        backdrop.classList.remove('opacity-0');
        panel.classList.remove('opacity-0', 'translate-y-4', 'scale-95');
        panel.classList.add('opacity-100', 'translate-y-0', 'scale-100');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const panel = document.getElementById('modal-panel');

    backdrop.classList.add('opacity-0');
    panel.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
    panel.classList.add('opacity-0', 'translate-y-4', 'scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (!element) return;
    
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

// Event Listeners for Modal Closing
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Improved Modal Interaction
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const panel = document.getElementById('modal-panel');
    const backdrop = document.getElementById('modal-backdrop');

    if (modal) {
        // Click on backdrop to close
        modal.addEventListener('click', (e) => {
            // Check if the click was directly on the modal wrapper (the backdrop area)
            // or the explicit backdrop element
            if (e.target === modal || e.target.id === 'modal-backdrop' || e.target.closest('.overflow-y-auto') === e.target) {
                closeModal();
            }
        });

        // Prevent closing when clicking inside the panel
        if (panel) {
            panel.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    }
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileMenu) {
        const isOpen = mobileMenu.classList.toggle('open');
        menuBtn?.setAttribute('aria-expanded', String(isOpen));
        if (menuIcon) {
            menuIcon.textContent = isOpen ? 'close' : 'menu';
        }
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileMenu) {
        mobileMenu.classList.remove('open');
        menuBtn?.setAttribute('aria-expanded', 'false');
        if (menuIcon) {
            menuIcon.textContent = 'menu';
        }
        document.body.style.overflow = '';
    }
}

// Workflow steps: add .in-view when visible (glow effect trigger)
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('#process .process-step');
    const processSection = document.getElementById('process');
    if (!steps.length) return;

    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        }
    }, { 
        threshold: 0.2,
        rootMargin: '0px 0px -20px 0px'
    });

    steps.forEach(step => observer.observe(step));
    if (processSection) observer.observe(processSection);
});


// Scroll animation for [data-animate] elements
document.addEventListener('DOMContentLoaded', () => {
    const animateEls = document.querySelectorAll('[data-animate]');
    if (!animateEls.length) return;

    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                animateObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animateEls.forEach(el => animateObserver.observe(el));
});

// Hero Typing Effect
document.addEventListener('DOMContentLoaded', () => {
    const words = ['Intelligence.', 'Workflows.', 'Automation.'];
    const typedEl = document.getElementById('typed-text');
    if (!typedEl) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typedEl.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedEl.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 300;
        }

        setTimeout(type, delay);
    }

    type();
});

// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', () => {
    const scrollEls = document.querySelectorAll('.animate-on-scroll');
    if (!scrollEls.length) return;

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    scrollEls.forEach(el => scrollObserver.observe(el));
});

// FAQ Toggle
function toggleFaq(button) {
    const item = button.closest('.faq-item');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.querySelector('.faq-content').classList.add('hidden');
            otherItem.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
        }
    });
    
    // Toggle current FAQ
    content.classList.toggle('hidden');
    icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
}

