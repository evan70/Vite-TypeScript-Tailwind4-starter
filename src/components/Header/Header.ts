export class Header {
    private element: HTMLElement;

    constructor() {
        // Nájdeme existujúci header namiesto vytvárania nového
        const existingHeader = document.querySelector('header');
        if (!existingHeader) {
            throw new Error('Header element not found');
        }
        this.element = existingHeader;
        
        // Pridáme interaktívne prvky
        this.enhanceHeader();
    }

    private enhanceHeader(): void {
        // Pridáme dynamické prvky ako dark mode toggle
        const navSection = this.element.querySelector('nav');
        if (navSection) {
            navSection.innerHTML += `
                <button type="button" class="text-gray-700 dark:text-gray-300 hover:text-primary-600" id="darkModeToggle">
                    <!-- Dark mode ikony -->
                </button>
            `;
        }

        this.initializeEventListeners();
    }

    private initializeEventListeners(): void {
        // Event listeners zostávajú rovnaké
    }
}