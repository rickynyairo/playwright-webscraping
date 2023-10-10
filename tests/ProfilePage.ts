import { type Locator, type Page } from "@playwright/test";

export class GithubProfilePage {
  readonly page: Page;
  readonly pinnedRepositories: Locator;
  readonly username: string;

  constructor(page: Page, username: string) {
    this.username = username;
    this.page = page;
    this.pinnedRepositories = page.locator(".pinned-item-list-item-content");
  }

  async goto() {
    await this.page.goto(`https://github.com/${this.username}`);
  }

  async getPinnedRepositories() {
    return await this.pinnedRepositories.all();
  }

  async getRepoName(repo: Locator) {
    return await repo.locator(".text-bold").first().innerText();
  }

  async getRepoDescription(repo: Locator) {
    return await repo.locator(".pinned-item-desc").first().innerText();
  }

  async getRepoLanguage(repo: Locator) {
    return await repo
      .locator("[itemprop='programmingLanguage']")
      .first()
      .innerText();
  }
}
