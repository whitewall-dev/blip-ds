import { newE2EPage } from '@stencil/core/testing';

describe('bds-illustration', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<bds-illustration name="accessibility-1"></bds-illustration>');
    await page.waitForChanges();

    const element = await page.find('bds-illustration');
    expect(element).toHaveClass('hydrated');
  });

  it('should render with name attribute', async () => {
    const page = await newE2EPage();

    await page.setContent('<bds-illustration name="accessibility-1"></bds-illustration>');
    await page.waitForChanges();

    const element = await page.find('bds-illustration');
    expect(element).toEqualAttribute('name', 'accessibility-1');
  });

  it('should render with type attribute', async () => {
    const page = await newE2EPage();

    await page.setContent('<bds-illustration name="accessibility-1" type="default"></bds-illustration>');
    await page.waitForChanges();

    const element = await page.find('bds-illustration');
    expect(element).toEqualAttribute('type', 'default');
  });

  it('should render image when illustration content is loaded', async () => {
    const page = await newE2EPage();

    await page.setContent('<bds-illustration name="accessibility-1"></bds-illustration>');
    // the asset bucket is lazy loaded after the first render
    await page.waitForFunction(() => document.querySelector('bds-illustration')?.shadowRoot?.querySelector('img'));

    const img = await page.find('bds-illustration >>> img');
    expect(img).toBeTruthy();
    expect(img).toEqualAttribute('draggable', 'false');
    expect(img.getAttribute('src')).toMatch(/^data:image\/svg\+xml;base64,/);
  });
});
