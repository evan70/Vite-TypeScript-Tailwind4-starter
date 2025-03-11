export class Header {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('header');
        this.element.className = 'w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800';
        
        this.element.innerHTML = `
            <div class="container mx-auto px-4">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <a href="/" class="flex items-center space-x-3">
                                <img src="/src/assets/logo.svg" class="h-8 w-8" alt="Logo">
                                <img src="/src/assets/logo-text.svg" class="h-6" alt="Logo text">
                            </a>
                        </div>
                    </div>

                    <nav class="hidden md:flex space-x-8">
                        <a href="/docs" class="text-gray-700 dark:text-gray-300 hover:text-primary-600">Documentation</a>
                        <a href="/plugins" class="text-gray-700 dark:text-gray-300 hover:text-primary-600">Plugins</a>
                        <a href="/demo" class="text-gray-700 dark:text-gray-300 hover:text-primary-600">Demo</a>
                        <a href="/video" class="text-gray-700 dark:text-gray-300 hover:text-primary-600">Video guide</a>
                    </nav>

                    <div class="flex items-center space-x-4">
                        <button type="button" class="text-gray-700 dark:text-gray-300 hover:text-primary-600" id="searchButton">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </button>

                        <a href="https://github.com/your-repo" class="text-gray-700 dark:text-gray-300 hover:text-primary-600" target="_blank" rel="noopener">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5Z"/>
                            </svg>
                        </a>

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

        this.initializeEventListeners();
    }

    private initializeEventListeners(): void {
        const darkModeToggle = this.element.querySelector('#darkModeToggle');
        darkModeToggle?.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });
    }

    public mount(container: HTMLElement): void {
        container.prepend(this.element);
    }
}