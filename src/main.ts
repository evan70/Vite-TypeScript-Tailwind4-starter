import './style.css'

class Preloader {
    private element: HTMLDivElement;
    
    constructor() {
        // Hlavný kontajner
        this.element = document.createElement('div');
        this.element.className = 'fixed inset-0 bg-black z-50 transition-opacity duration-500 flex flex-col items-center justify-center';
        
        // Logo kontajner
        const logoContainer = document.createElement('div');
        logoContainer.className = 'w-32 h-32 mb-8 animate-spin-slow';
        // Použijeme logo-dark.svg (biele logo pre tmavé pozadie)
        logoContainer.innerHTML = `
            <img src="/src/assets/logo-dark.svg" class="w-full h-full" alt="Logo" />
        `;
        
        // Text "Loading..."
        const loadingText = document.createElement('div');
        loadingText.className = 'text-white text-2xl font-bold animate-pulse';
        loadingText.textContent = 'Loading...';
        
        // Pridáme elementy do preloadera
        this.element.appendChild(logoContainer);
        this.element.appendChild(loadingText);
        document.body.appendChild(this.element);
    }

    public hide(): void {
        this.element.classList.add('opacity-0');
        setTimeout(() => {
            this.element.remove();
        }, 500);
    }
}

// Počkáme na načítanie stránky
window.addEventListener('load', () => {
    const preloader = new Preloader();
    
    // Simulujeme načítanie (môžeme neskôr nahradiť reálnym načítaním assets)
    setTimeout(() => {
        preloader.hide();
    }, 2000);
});
