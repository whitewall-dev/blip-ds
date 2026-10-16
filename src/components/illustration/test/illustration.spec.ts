import { newSpecPage } from '@stencil/core/testing';
import { BdsIllustration } from '../illustration';
import defaultAssets from '../../../assets/blip-tokens/assets_illustrations_default.json';
import screensAssets from '../../../assets/blip-tokens/assets_illustrations_screens.json';

// the asset buckets are loaded with a dynamic import, which resolves after the first render
const flushAssetLoad = () => new Promise((resolve) => setTimeout(resolve));

describe('bds-illustration', () => {
  it('should create component', () => {
    const component = new BdsIllustration();
    expect(component).toBeTruthy();
    expect(component).toBeInstanceOf(BdsIllustration);
  });

  it('should have correct default properties', async () => {
    const page = await newSpecPage({
      components: [BdsIllustration],
      html: `<bds-illustration></bds-illustration>`,
    });

    expect(page.rootInstance.type).toBe('default');
    expect(page.rootInstance.name).toBeUndefined();
    expect(page.rootInstance.alt).toBeUndefined();
    expect(page.rootInstance.dataTest).toBe(null);
  });

  it('should render method should return JSX element', () => {
    const component = new BdsIllustration();
    const result = component.render();
    expect(result).toBeTruthy();
    expect(typeof result).toBe('object');
  });

  describe('Rendering', () => {
    it('should render basic illustration component', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test"></bds-illustration>`,
      });

      expect(page.root).toBeTruthy();
      expect(page.root.tagName).toBe('BDS-ILLUSTRATION');
      expect(page.root.getAttribute('role')).toBe('img');
      expect(page.root).toHaveClass('bds-illustration');
    });

    it('should render default placeholder when no illustration content', async () => {

      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test"></bds-illustration>`,
      });

      const defaultDiv = page.root.shadowRoot.querySelector('.default');
      expect(defaultDiv).toBeTruthy();
    });

    it('should render img element when illustration content is loaded', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test"></bds-illustration>`,
      });

      // Simulate loading illustration content
      page.rootInstance.IllustrationContent = 'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvc3ZnPg==';
      await page.waitForChanges();

      const img = page.root.shadowRoot.querySelector('img');
      expect(img).toBeTruthy();
      expect(img.getAttribute('src')).toBe(
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvc3ZnPg=='
      );
      expect(img.getAttribute('draggable')).toBe('false');
    });

    it('should render with data-test attribute on img', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test" data-test="illustration-test"></bds-illustration>`,
      });

      page.rootInstance.IllustrationContent = 'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvc3ZnPg==';
      await page.waitForChanges();

      const img = page.root.shadowRoot.querySelector('img');
      expect(img.getAttribute('data-test')).toBe('illustration-test');
    });

    it('should render with data-test attribute on default div', async () => {

      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test" data-test="illustration-test"></bds-illustration>`,
      });

      const defaultDiv = page.root.shadowRoot.querySelector('.default');
      expect(defaultDiv.getAttribute('data-test')).toBe('illustration-test');
    });

    it('should render with alt attribute', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test" alt="Test illustration"></bds-illustration>`,
      });

      page.rootInstance.IllustrationContent = 'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvc3ZnPg==';
      await page.waitForChanges();

      const img = page.root.shadowRoot.querySelector('img');
      expect(img.getAttribute('alt')).toBe('Test illustration');
    });
  });

  describe('Illustration Types', () => {
    const types = [
      'default',
      'screens',
      'blip-solid',
      'blip-outline',
      'logo-integration',
      'empty-states',
      'brand',
      'segmented',
      'smartphone',
    ];

    types.forEach((type) => {
      it(`should accept ${type} type`, async () => {
        const page = await newSpecPage({
          components: [BdsIllustration],
          html: `<bds-illustration type="${type}" name="test"></bds-illustration>`,
        });

        expect(page.rootInstance.type).toBe(type);
      });
    });

    it('should default to "default" type', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test"></bds-illustration>`,
      });

      expect(page.rootInstance.type).toBe('default');
    });
  });

  describe('Illustration Loading', () => {
    it('should set illustration content from the type bucket', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration type="default" name="accessibility-1"></bds-illustration>`,
      });

      await flushAssetLoad();
      await page.waitForChanges();

      expect(page.rootInstance.IllustrationContent).toBe(defaultAssets['asset-default-accessibility-1-svg']);
      const img = page.root.shadowRoot.querySelector('img');
      expect(img.getAttribute('src')).toBe(
        `data:image/svg+xml;base64,${defaultAssets['asset-default-accessibility-1-svg']}`,
      );
    });

    it('should load the bucket that matches the type', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration type="screens" name="dashboard"></bds-illustration>`,
      });

      await flushAssetLoad();
      await page.waitForChanges();

      expect(page.rootInstance.IllustrationContent).toBe(screensAssets['asset-screens-dashboard-svg']);
    });
  });

  describe('Component Props', () => {
    it('should accept and render name property', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="custom-illustration"></bds-illustration>`,
      });

      await flushAssetLoad();
      await page.waitForChanges();

      expect(page.rootInstance.name).toBe('custom-illustration');
      // unknown illustrations keep the placeholder
      expect(page.rootInstance.IllustrationContent).toBeUndefined();
      expect(page.root.shadowRoot.querySelector('.default')).toBeTruthy();
    });

    it('should accept alt property', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test" alt="Alternative text"></bds-illustration>`,
      });

      expect(page.rootInstance.alt).toBe('Alternative text');
    });

    it('should accept dataTest property', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test" data-test="custom-test"></bds-illustration>`,
      });

      expect(page.rootInstance.dataTest).toBe('custom-test');
    });

    it('should handle null dataTest gracefully', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test"></bds-illustration>`,
      });

      expect(page.rootInstance.dataTest).toBe(null);

      const defaultDiv = page.root.shadowRoot.querySelector('.default');
      // When dataTest is null, it should not set the attribute or sets it to null
      expect(defaultDiv.getAttribute('data-test')).toBe(null);
    });
  });

  describe('Accessibility', () => {
    it('should have role="img"', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test"></bds-illustration>`,
      });

      expect(page.root.getAttribute('role')).toBe('img');
    });

    it('should support alternative text for accessibility', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test" alt="Descriptive text for screen readers"></bds-illustration>`,
      });

      page.rootInstance.IllustrationContent = 'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvc3ZnPg==';
      await page.waitForChanges();

      const img = page.root.shadowRoot.querySelector('img');
      expect(img.getAttribute('alt')).toBe('Descriptive text for screen readers');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty name gracefully', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name=""></bds-illustration>`,
      });

      await flushAssetLoad();
      await page.waitForChanges();

      expect(page.rootInstance.name).toBe('');
      expect(page.root.shadowRoot.querySelector('.default')).toBeTruthy();
    });

    it('should not crash when no name is provided', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration></bds-illustration>`,
      });

      await flushAssetLoad();
      await page.waitForChanges();

      expect(page.root).toBeTruthy();
      expect(page.root.shadowRoot.querySelector('.default')).toBeTruthy();
    });

    it('should handle special characters in name', async () => {
      const page = await newSpecPage({
        components: [BdsIllustration],
        html: `<bds-illustration name="test-with-dashes_and_underscores"></bds-illustration>`,
      });

      expect(page.rootInstance.name).toBe('test-with-dashes_and_underscores');
    });
  });
});
