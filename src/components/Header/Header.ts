export class Header {
    private element: HTMLElement;
    private themeManager: typeof ThemeManager;

    constructor(themeManager: typeof ThemeManager) {
        this.themeManager = themeManager;
        this.element = document.createElement('header');
        this.element.className = 'w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800';
        
        this.render();
        this.mount();
        this.initializeEventListeners();
    }

    private render(): void {
        this.element.innerHTML = `
            <div class="container mx-auto px-4">
                <div class="flex items-center justify-between h-16">
                    <a href="/" class="flex items-center space-x-3">
                        <img src="/src/assets/logo.svg" class="h-8 w-8 dark:hidden" alt="Logo">
                        <img src="/src/assets/logo-dark.svg" class="h-8 w-8 hidden dark:block" alt="Logo">
                        <img src="/src/assets/logo-text.svg" class="h-6 dark:hidden" alt="Logo text">
                        <img src="/src/assets/logo-text-dark.svg" class="h-6 hidden dark:block" alt="Logo text">
                    </a>
                    
                    <div class="flex items-center space-x-4">
                        <button type="button" class="text-gray-700 dark:text-gray-300 hover:text-primary-600" id="darkModeToggle">
                            <svg class="w-5 h-5 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                            </svg>
                            <svg class="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    private initializeEventListeners(): void {
        const darkModeToggle = this.element.querySelector('#darkModeToggle');
        darkModeToggle?.addEventListener('click', () => {
            this.themeManager.toggle();
        });
    }

    private mount(): void {
        const existingHeader = document.querySelector('header');
        if (existingHeader) {
            existingHeader.remove();
        }
        document.body.prepend(this.element);
    }
}
