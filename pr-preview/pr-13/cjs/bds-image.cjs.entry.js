'use strict';

var index = require('./index-qGbe2oR8.js');

const imageCss = () => `:host{display:inline-flex;align-items:center;justify-content:center}:host .img-feedback{height:76%}:host(.empty_img){background-color:var(--color-surface-3, rgb(227, 227, 227))}`;

const Image = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.imageHasLoading = false;
        /**
         * Specifies the object-fit style for the image. Can be: 'fill', 'contain', 'cover', 'none', 'scale-down'.
         */
        this.objectFit = 'cover';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Indicates whether the main image has been successfully loaded.
         */
        this.imageLoaded = false;
        /**
         * Indicates whether there was an error during image loading.
         */
        this.loadError = false;
    }
    componentDidLoad() {
        this.element.style.width = this.width ? this.width : 'auto';
        this.element.style.height = this.height?.length > 0 ? this.height : 'auto';
    }
    async loadImage() {
        if (this.src) {
            this.imageHasLoading = true;
            try {
                const response = await fetch(this.src);
                if (response.ok) {
                    const blob = await response.blob();
                    const objectURL = URL.createObjectURL(blob);
                    this.currentSrc = objectURL;
                    this.imageLoaded = true;
                    this.imageHasLoading = false;
                }
                else {
                    this.loadError = true;
                }
            }
            catch {
                this.imageHasLoading = false;
                this.loadError = true;
            }
        }
    }
    render() {
        if (!this.imageLoaded && !this.loadError) {
            // Se a imagem ainda não foi carregada, chame o método loadImage
            this.loadImage();
        }
        return (index.h(index.Host, { key: 'b7798d3abcb3fe0da3938b890b1abc6479aeccb0', class: { empty_img: !this.imageLoaded } }, this.imageLoaded ? (index.h("img", { src: this.currentSrc, alt: this.alt, style: {
                objectFit: this.objectFit,
                width: '100%',
                height: '100%',
                filter: `brightness(${this.brightness})`,
            }, "data-test": this.dataTest, draggable: false })) : this.imageHasLoading ? (index.h("bds-skeleton", { shape: "square", width: "100%", height: "100%" })) : (index.h("bds-illustration", { class: "img-feedback", type: "empty-states", name: this.loadError ? 'broken-image' : 'image-not-found', alt: this.alt, "data-test": this.dataTest }))));
    }
    get element() { return index.getElement(this); }
};
Image.style = imageCss();

exports.bds_image = Image;
