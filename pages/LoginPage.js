export class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.flashMessage = page.locator('#flash');
        this.secureMessage = page.locator('#content');
    }

    async navigate() {
        await this.page.goto('/login');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getSecureMessage() {
        return this.secureMessage.textContent();
    }

    async getFlashMessage() {
        await this.flashMessage.waitFor({ state: 'visible' });
        const text = await this.flashMessage.textContent();
        return text?.trim();
    }
}