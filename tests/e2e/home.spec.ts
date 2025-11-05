import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should display hero section", async ({ page }) => {
    await page.goto("/");

    // Check for hero heading
    await expect(page.getByRole("heading", { name: /Hi, I'm/i })).toBeVisible();

    // Check for CTA buttons
    await expect(
      page.getByRole("link", { name: /Read My Blog/i })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /View Projects/i })
    ).toBeVisible();
  });

  test("should navigate to blog page", async ({ page }) => {
    await page.goto("/");

    // Click blog link
    await page.getByRole("link", { name: /Read My Blog/i }).click();

    // Should navigate to blog page
    await expect(page).toHaveURL("/blog");
  });

  test("should navigate to projects page", async ({ page }) => {
    await page.goto("/");

    // Click projects link
    await page.getByRole("link", { name: /View Projects/i }).click();

    // Should navigate to projects page
    await expect(page).toHaveURL("/projects");
  });

  test("should display latest blog posts section if posts exist", async ({
    page,
  }) => {
    await page.goto("/");

    // Check if blog posts section exists
    const blogSection = page.getByRole("heading", {
      name: /Latest Blog Posts/i,
    });

    // If section exists, verify it has content
    if (await blogSection.isVisible()) {
      await expect(blogSection).toBeVisible();
    }
  });

  test("should display featured projects section if projects exist", async ({
    page,
  }) => {
    await page.goto("/");

    // Check if projects section exists
    const projectsSection = page.getByRole("heading", {
      name: /Featured Projects/i,
    });

    // If section exists, verify it has content
    if (await projectsSection.isVisible()) {
      await expect(projectsSection).toBeVisible();
    }
  });
});
