import { IllustrationType } from './illustration-interface';
export declare class BdsIllustration {
    el: HTMLElement;
    private IllustrationContent?;
    /**
     * Specifies the type to use. Can be: 'default', 'screens', 'blip-solid', 'blip-outline',
     * 'logo-integration', 'empty-states', 'brand', 'segmented', 'smartphone', 'spots'.
     */
    type: IllustrationType;
    /**
     * Specifies the name of illustration. Verify the names on illustration tokens.
     */
    name: string;
    /**
     * Alternative text for the image.
     */
    alt?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     */
    dataTest?: string;
    componentWillLoad(): Promise<void> | void;
    setIllustrationContent: () => Promise<void>;
    render(): HTMLElement;
}
