import { test, expect } from '@playwright/test';
import { GithubProfilePage } from './ProfilePage';

test('can get pinned repositories and their languages', async ({ page }) => {
  const profilePage = new GithubProfilePage(page, 'rickynyairo');
  await profilePage.goto();
  const pinnedRepositories = await profilePage.getPinnedRepositories();

  // get repo names and languages
  const repoAndLanguage = await Promise.all(pinnedRepositories.map(async (repo) => {
    const title = await profilePage.getRepoName(repo);
    const description = await profilePage.getRepoDescription(repo);
    const language = await profilePage.getRepoLanguage(repo);
    return { title, description, language };
  }));
  
  // log the language and title as a table
  console.table(repoAndLanguage, ['title', 'description', 'language']);
  
  expect(pinnedRepositories.length).toBeGreaterThan(0);
});
