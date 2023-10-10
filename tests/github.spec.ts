import { test, expect } from '@playwright/test';
import { GithubProfilePage } from './ProfilePage';

test('can get pinned repositories', async ({ page }) => {
  const profilePage = new GithubProfilePage(page, 'rickynyairo');
  await profilePage.goto();
  const pinnedRepositories = await profilePage.getPinnedRepositories();
  expect(pinnedRepositories.length).toBeGreaterThan(1);
});
