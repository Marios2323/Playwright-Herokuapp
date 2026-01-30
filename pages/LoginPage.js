export class LoginPage {
    constructor(page) {
        this.page = page;
        this.flashMessage = page.locator('#flash');
    }
    async navigate() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username, password) {
        await this.page.getByRole('textbox', { name: 'Username' }).click();
        await this.page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' })
            .fill('SuperSecretPassword!');
    }

    async clickLogin() {
        await this.page.getByRole('button', { name: ' Login' }).click();
    }

    async wrongUsernameLogin() {
        await this.page.getByRole('textbox', { name: 'Username' }).click();
        await this.page.getByRole('textbox', { name: 'Username' }).fill('wrong username');
        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' })
            .fill('SuperSecretPassword!');
        // await expect(this.page.locator(id="flash")).toContainText('Your username is invalid!');
    }

    async wrongPasswordLogin() {
        await this.page.getByRole('textbox', { name: 'Username' }).click();
        await this.page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' })
            .fill('wrong password');
    }
}