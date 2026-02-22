export class LoginPage {
    constructor(page) {
        this.page = page;

        //locators
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
    
    async getFlashMessage() {
        return await this.flashMessage.textContent();
    }

    async isSecureAreaVisible() {
        return await this.secureMessage.isVisible();
    }
}