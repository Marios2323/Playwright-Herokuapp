export class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.flashMessage = page.locator('#flash');
        this.secureMessage = page.locator('//*[@id = "content"]//h2');
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
        const text = await this.secureMessage.textContent();
        return text?.trim() === 'Secure Area';
    }

    async wrongUsername() {
        await this.flashMessage.waitFor({ state: 'visible' });
        const text = await this.flashMessage.textContent();
        return text?.includes('Your username is invalid!') || false;
    }

    async wrongPassword() {
        await this.flashMessage.waitFor({ state: 'visible' });
        const text = await this.flashMessage.textContent();
        return text?.includes('Your password is invalid!') || false;
    }
}