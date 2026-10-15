import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-Cawn__Z9.js';

const tabGroupCss = () => `:host{display:block;width:100%}.tab_group{width:100%;height:100%;display:flex;flex-direction:column;position:relative}.tab_group__header{padding:4px 16px}.tab_group__header__itens{display:flex;flex-direction:row;width:max-content;gap:32px;margin:auto}.tab_group__header__itens__center{justify-content:center;margin:auto}.tab_group__header__itens__right{justify-content:right;margin:0 0 0 auto}.tab_group__header__itens__left{justify-content:left;margin:0 auto 0 0}.tab_group__header__itens__item{cursor:pointer;height:46px;gap:4px;width:auto;display:flex;align-items:center;border-bottom:2px solid transparent;position:relative}.tab_group__header__itens__item__typo{color:var(--color-content-disable, rgb(89, 89, 89))}.tab_group__header__itens__item__typo__disable{color:var(--color-content-ghost, rgb(140, 140, 140))}.tab_group__header__itens__item__typo__error{color:var(--color-surface-negative, rgb(138, 0, 0))}.tab_group__header__itens__item::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.tab_group__header__itens__item:focus-visible{outline:none}.tab_group__header__itens__item:focus-visible::before{border-color:var(--color-focus, rgb(194, 38, 251))}.tab_group__header__itens__item__open{color:var(--color-content-default, rgb(40, 40, 40));border-color:var(--color-primary, rgb(30, 107, 241))}.tab_group__header__itens__item__disable{cursor:no-drop}.tab_group__slide{position:relative;overflow:hidden;padding:0 16px;height:54px;margin-left:56px;margin-right:56px}.tab_group__slide-button{position:absolute;z-index:1;background-color:var(--color-surface-1, rgb(246, 246, 246))}.tab_group__slide-button[icon=arrow-left]{left:0}.tab_group__slide-button[icon=arrow-right]{right:0}.tab_group__slide__itens{position:absolute;left:56px;width:max-content;height:48px;display:flex;flex-direction:row;justify-content:center;padding:4px;gap:32px;-webkit-transition:left 0.5s;-moz-transition:left 0.5s;transition:left 0.5s}.tab_group__content{height:100%}.tab_group__scrolled{flex-shrink:999;overflow:auto}.tab_group__scrolled::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.tab_group__scrolled::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const BdsTabGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsTabChange = createEvent(this, "bdsTabChange");
        this.bdsTabDisabled = createEvent(this, "bdsTabDisabled");
        this.tabItensElement = null;
        this.tabItensSlideElement = null;
        this.isSlideTabs = false;
        this.alignTab = 'left';
        this.tabRefSlide = 0;
        this.positionLeft = 0;
        this.contentScrollable = true;
        this.align = 'center';
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonPrev is the data-test to button prev.
         */
        this.dtButtonPrev = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonNext is the data-test to button next.
         */
        this.dtButtonNext = null;
        // The tabs overflow when the header shrinks or the tab strip grows (tabs added,
        // labels/badges changed, fonts loaded), so watch both instead of polling layout.
        this.observeHeaderSize = () => {
            if (typeof ResizeObserver === 'undefined')
                return;
            if (!this.headerElement || !this.headerSlideElement)
                return;
            this.resizeObserver?.disconnect();
            this.resizeObserver = new ResizeObserver(() => {
                this.isSlideTabs = this.checkSlideTabs();
            });
            this.resizeObserver.observe(this.headerElement, { box: 'border-box' });
            this.resizeObserver.observe(this.headerSlideElement, { box: 'border-box' });
        };
        this.checkSlideTabs = () => {
            if (this.headerElement || this.headerSlideElement) {
                if (this.headerSlideElement?.offsetWidth > this.headerElement?.offsetWidth) {
                    return true;
                }
            }
            return false;
        };
        this.setFirstActive = () => {
            const hasOpenDefined = Array.from(this.tabItensElement).filter((obj) => obj.open);
            if (!hasOpenDefined.length) {
                this.tabItensElement[0].open = true;
            }
        };
        this.setnumberElement = () => {
            for (let i = 0; i < this.tabItensElement.length; i++) {
                this.tabItensElement[i].numberElement = i;
            }
        };
        this.setInternalItens = (ItensElement) => {
            const arrayItens = ItensElement.map((item, index) => {
                return {
                    label: item.label,
                    open: item.open,
                    numberElement: index,
                    badge: item.badge,
                    ...(item.disable !== undefined && { disable: item.disable }),
                    ...(item.error !== undefined && { error: item.error }),
                    ...(item.headerStyle !== undefined && { headerStyle: item.headerStyle }),
                    ...(item.contentStyle !== undefined && { contentStyle: item.contentStyle }),
                    ...(item.icon !== undefined && { icon: item.icon }),
                    ...(item.iconPosition !== undefined && { iconPosition: item.iconPosition }),
                    ...(item.iconTheme !== undefined && { iconTheme: item.iconTheme }),
                    ...(item.typeIcon !== undefined && { typeIcon: item.typeIcon }),
                    ...(item.badgeShape !== undefined && { badgeShape: item.badgeShape }),
                    ...(item.badgeColor !== undefined && { badgeColor: item.badgeColor }),
                    ...(item.badgeIcon !== undefined && { badgeIcon: item.badgeIcon }),
                    ...(item.badgeAnimation !== undefined && { badgeAnimation: item.badgeAnimation }),
                    ...(item.badgeNumber !== undefined && { badgeNumber: item.badgeNumber }),
                    ...(item.badgePosition !== undefined && { badgePosition: item.badgePosition }),
                    ...(item.dataTest !== undefined && { dataTest: item.dataTest }),
                };
            });
            return (this.internalItens = arrayItens);
        };
        this.handleClick = (numberItem) => {
            const updateInternalItens = this.internalItens.map((item) => {
                return {
                    label: item.label,
                    open: false,
                    numberElement: item.numberElement,
                };
            });
            this.internalItens = updateInternalItens;
            for (let i = 0; i < this.tabItensElement.length; i++) {
                if (this.tabItensElement[i].numberElement != numberItem) {
                    this.tabItensElement[i].open = false;
                }
                else {
                    this.tabItensElement[i].open = true;
                    this.bdsTabChange.emit(this.tabItensElement[i]);
                }
            }
        };
        this.refHeaderElement = (el) => {
            this.headerElement = el;
        };
        this.refHeaderSlideElement = (el) => {
            this.headerSlideElement = el;
        };
        this.handleDisabled = (id) => {
            this.bdsTabDisabled.emit(this.tabItensElement[id]);
        };
        this.nextSlide = () => {
            const minLeft = this.headerElement?.offsetWidth - this.headerSlideElement?.offsetWidth;
            const calcNumber = this.headerSlideElement?.offsetWidth / this.headerElement?.offsetWidth;
            const numberClicks = parseInt(calcNumber.toString());
            const newPosition = this.positionLeft - this.headerElement?.offsetWidth;
            this.positionLeft = newPosition < minLeft ? minLeft : newPosition;
            this.alignTab = newPosition < minLeft ? 'right' : 'scrolling';
            this.tabRefSlide = numberClicks <= this.tabRefSlide ? this.tabRefSlide + 1 : numberClicks;
        };
        this.prevSlide = () => {
            const calcNumber = this.headerSlideElement?.offsetWidth / this.headerElement?.offsetWidth;
            const numberClicks = parseInt(calcNumber.toString());
            const newPosition = this.positionLeft + this.headerElement?.offsetWidth;
            this.positionLeft = newPosition > 0 ? 0 : newPosition;
            this.alignTab = newPosition > 0 ? 'left' : 'scrolling';
            this.tabRefSlide = numberClicks <= this.tabRefSlide ? this.tabRefSlide - 1 : numberClicks;
        };
        this.renderIcon = (Icon, Theme, Type, disable, error) => {
            return (h("bds-icon", { class: {
                    tab_group__header__itens__item__typo__disable: disable,
                    tab_group__header__itens__item__typo__error: error
                }, size: "x-small", name: Icon, theme: Theme, type: Type }));
        };
        this.renderBadge = (Shape, Color, Icon, Animation, Number) => {
            return (h("bds-grid", { "justify-content": "center" }, h("bds-badge", { color: Color, icon: Icon, number: Number, shape: Shape, animation: Animation })));
        };
    }
    componentWillRender() {
        this.tabItensElement = this.element.getElementsByTagName('bds-tab-item');
        this.setnumberElement();
        this.setFirstActive();
        this.setInternalItens(Array.from(this.tabItensElement));
    }
    componentDidLoad() {
        this.tabItensSlideElement = this.element.shadowRoot.querySelectorAll('.tab_group__header__itens__item');
        this.observeHeaderSize();
    }
    connectedCallback() {
        // refs only exist after the first render, so the first observe happens in
        // componentDidLoad; this re-attaches when the element is moved in the DOM
        this.observeHeaderSize();
    }
    disconnectedCallback() {
        this.resizeObserver?.disconnect();
        this.resizeObserver = undefined;
    }
    onTabDisabled() {
        this.setInternalItens(Array.from(this.tabItensElement));
    }
    handleKeyDown(event, item) {
        if (event.key == 'Enter') {
            item.disable ? this.handleDisabled(item.numberElement) : this.handleClick(item.numberElement);
        }
        if (event.key == 'ArrowRight') {
            this.tabItensSlideElement[item.numberElement + 1].focus();
        }
        if (event.key == 'ArrowLeft') {
            this.tabItensSlideElement[item.numberElement - 1].focus();
        }
    }
    parseInlineStyle(styleString) {
        if (!styleString)
            return {};
        return styleString
            .split(';')
            .filter(style => style.trim())
            .reduce((acc, style) => {
            const [property, value] = style.split(':').map(s => s.trim());
            if (property && value) {
                // Convert kebab-case to camelCase for CSS properties
                const camelProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                acc[camelProperty] = value;
            }
            return acc;
        }, {});
    }
    render() {
        const slidePosition = { left: `${this.positionLeft}px` };
        // Find the currently open tab to get its headerStyle and contentStyle
        const openTab = this.internalItens?.find(item => item.open);
        const headerStyle = openTab?.headerStyle ? this.parseInlineStyle(openTab.headerStyle) : {};
        const contentStyle = openTab?.contentStyle ? this.parseInlineStyle(openTab.contentStyle) : {};
        return (h(Host, { key: 'e597d814fd8ec0495778adfbf72de4cf297cb227' }, h("div", { key: '882e0520bbc8d8d593787dee0715ad38095f2aa9', class: { tab_group: true } }, this.isSlideTabs && this.alignTab != 'left' && (h("bds-button-icon", { key: '99ad945dcbd4b2aa0dd820f9f1eef3357fd74f2a', class: "tab_group__slide-button", icon: "arrow-left", size: "short", id: "bds-tabs-button-left", onClick: () => this.prevSlide(), dataTest: this.dtButtonPrev, variant: "secondary" })), h("div", { key: '939712b7146be5c2bb456cfc3acd83207470e7ad', class: { tab_group__header: true, tab_group__slide: this.isSlideTabs }, ref: this.refHeaderElement, style: headerStyle }, h("div", { key: '2786001be413416124a290e20288b32643146398', class: {
                tab_group__header__itens: true,
                tab_group__slide__itens: this.isSlideTabs,
                [`tab_group__header__itens__${this.align}`]: !this.isSlideTabs,
            }, ref: this.refHeaderSlideElement, style: slidePosition }, this.internalItens &&
            this.internalItens.map((item, index) => {
                const bold = item.open == true ? 'bold' : 'regular';
                return (h("div", { class: {
                        tab_group__header__itens__item: true,
                        tab_group__header__itens__item__open: item.open,
                        tab_group__header__itens__item__disable: item.disable,
                    }, key: index, tabindex: "0", onClick: () => item.disable ? this.handleDisabled(item.numberElement) : this.handleClick(item.numberElement), onKeyDown: (ev) => this.handleKeyDown(ev, item) }, item.iconPosition === 'left' && item.icon
                    ? this.renderIcon(item.icon, item.iconTheme, item.typeIcon, item.disable, item.error)
                    : '', item.badgePosition === 'left' && item.badge
                    ? this.renderBadge(item.badgeShape, item.badgeColor, item.badgeIcon, item.badgeAnimation, item.badgeNumber)
                    : '', h("bds-typo", { class: {
                        tab_group__header__itens__item__typo__disable: item.disable,
                        tab_group__header__itens__item__typo__error: item.error
                    }, variant: "fs-16", bold: bold }, item.label), item.iconPosition === 'right' && item.icon
                    ? this.renderIcon(item.icon, item.iconTheme, item.typeIcon, item.disable, item.error)
                    : '', item.badgePosition === 'right' && item.badge
                    ? this.renderBadge(item.badgeShape, item.badgeColor, item.badgeIcon, item.badgeAnimation, item.badgeNumber)
                    : ''));
            }))), this.isSlideTabs && this.alignTab != 'right' && (h("bds-button-icon", { key: 'f26507e2b8b94121e7bdbd8265d66dfe2816de74', class: "tab_group__slide-button", icon: "arrow-right", size: "short", id: "bds-tabs-button-right", onClick: () => this.nextSlide(), dataTest: this.dtButtonNext, variant: "secondary" })), h("div", { key: '4291a8bbb2fd85fc5a228993be114674c56bd52a', class: { tab_group__content: true, tab_group__scrolled: this.contentScrollable }, style: contentStyle }, h("slot", { key: '3fe092e8e7f38585c23d124f665e2b6a2d02372c' })))));
    }
    get element() { return getElement(this); }
};
BdsTabGroup.style = tabGroupCss();

export { BdsTabGroup as bds_tab_group };
