import {test, expect} from '@playwright/test'

test('has title "Zod Playground', async ({page}) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Zod Playground/)
})

test('has header with title, share, theme toggler and github repo link', async ({
  page,
}) => {
  await page.goto('/')

  await expect(page.getByText('Zod Playground')).toBeVisible()
  await expect(page.getByRole('button', {name: 'Share'})).toBeVisible()
  await expect(page.getByLabel('Toggle color scheme')).toBeVisible()
  await expect(page.getByRole('banner').getByRole('link')).toHaveAttribute(
    'href',
    'https://github.com/marilari88/zod-playground',
  )
})

test('zod version switch', async ({page}) => {
  await page.goto('/')

  await page.getByRole('button', {name: 'v3.23.8'}).click()
  await page.getByRole('option', {name: '3.23.7'}).click()

  await expect(page.getByRole('button', {name: 'v3.23.8'})).not.toBeVisible()
  await expect(page.getByRole('button', {name: 'v3.23.7'})).toBeVisible()
})

test('has default schema', async ({page}) => {
  await page.goto('/')

  await expect(page.getByText('z.object({ name: z.string(),')).toBeVisible()
})