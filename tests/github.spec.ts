import { test, expect } from '@playwright/test';
import { GithubProfilePage } from './ProfilePage';

test('can get pinned repositories', async ({ page }) => {
  const profilePage = new GithubProfilePage(page, 'rickynyairo');
  await profilePage.goto();
  const pinnedRepositories = await profilePage.getPinnedRepositories();
  // print repo names
  for (const repo of pinnedRepositories) {
    const title  = repo.locator('.text-bold').first();
    console.log(await title.innerText())
  }
  // assertion
  expect(pinnedRepositories.length).toBeGreaterThan(0);
});
