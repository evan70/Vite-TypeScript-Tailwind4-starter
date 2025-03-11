import './style.css'
import { Header } from './components/Header';

class Preloader {
    private element: HTMLDivElement;
    
    constructor() {
        // Skontrolujeme či už užívateľ stránku navštívil
        if (localStorage.getItem('hasVisited')) {
            return;
        }

        // Zistíme aktuálny theme
        const isDarkMode = localStorage.getItem('theme') === 'dark';
        
        this.element = document.createElement('div');
        this.element.className = `fixed inset-0 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} z-50 transition-opacity duration-500 flex flex-col items-center justify-center`;
        
        // Logo kontajner s animáciou
        const logoContainer = document.createElement('div');
        logoContainer.className = 'w-32 h-32 mb-8 animate-spin-slow';
        logoContainer.innerHTML = `
            <img src="/src/assets/${isDarkMode ? 'logo-dark.svg' : 'logo.svg'}" class="w-full h-full" alt="Logo" />
        `;
        
        // Text "Loading..."
        const loadingText = document.createElement('div');
        loadingText.className = `text-2xl font-bold animate-pulse ${isDarkMode ? 'text-white' : 'text-gray-900'}`;
        loadingText.textContent = 'Loading...';
        
        this.element.appendChild(logoContainer);
        this.element.appendChild(loadingText);
        document.body.appendChild(this.element);
    }

    public hide(): void {
        if (!this.element) return;
        
        this.element.classList.add('opacity-0');
        setTimeout(() => {
            this.element.remove();
            // Označíme že užívateľ už stránku navštívil
            localStorage.setItem('hasVisited', 'true');
        }, 500);
    }
}

// Theme management utility
const ThemeManager = {
    init() {
        // Načítame tému z localStorage
        const theme = localStorage.getItem('theme') || 'light';
        this.setTheme(theme);
    },

    setTheme(theme: 'light' | 'dark') {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    },

    toggle() {
        const isDark = document.documentElement.classList.contains('dark');
        this.setTheme(isDark ? 'light' : 'dark');
    }
};

// Počkáme na načítanie stránky
window.addEventListener('load', () => {
    // Inicializujeme theme
    ThemeManager.init();
    
    // Inicializácia preloadera
    const preloader = new Preloader();
    
    // Inicializácia headera
    new Header(ThemeManager);
    
    // Skryjeme preloader po 2 sekundách
    setTimeout(() => {
        preloader.hide();
    }, 2000);
});
