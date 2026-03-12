export class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.locator('button[type="submit"]');
        this.flashMessage = page.locator('#flash');
        this.secureMessage = page.locator('#content h2');
    }

    async navigate() {
        await this.page.goto('/login');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async isSecureMessage() {
        return (await this.secureMessage.textContent())?.trim() || '';
    }
    
    async getFlashMessage() {
        await this.flashMessage.waitFor({ state: 'visible' });
        return (await this.flashMessage.textContent())?.trim() || '';
    }
}