'use strict';

var index = require('./index-qGbe2oR8.js');
var positionElement = require('./position-element-lqEepMJc.js');

const ptTerms = [
    {
        bold: 'Negrito',
        italic: 'Itálico',
        strike: 'Tachado',
        underline: 'Sublinhado',
        link: 'Link',
        code: 'Código',
        align_left: 'Alinhar à esquerda',
        align_center: 'Alinhar ao centro',
        align_right: 'Alinhar à direita',
        unordered_list: 'Lista não ordenada',
        ordered_list: 'Lista ordenada',
        quote: 'Citação',
        h1: 'Título 1',
        h2: 'Título 2',
        h3: 'Título 3',
        h4: 'Título 4',
        h5: 'Título 5',
        h6: 'Título 6',
        clear_formatting: 'Limpar formatação',
        expand: 'Expandir',
    },
];

const esTerms = [
    {
        bold: 'Negrita',
        italic: 'Cursiva',
        strike: 'Tachado',
        underline: 'Subrayado',
        link: 'Link',
        code: 'Código',
        align_left: 'Alinear a la izquierda',
        align_center: 'Alinear al centro',
        align_right: 'Alinear a la derecha',
        unordered_list: 'Lista desordenada',
        ordered_list: 'Lista ordenada',
        quote: 'Cita',
        h1: 'Título 1',
        h2: 'Título 2',
        h3: 'Título 3',
        h4: 'Título 4',
        h5: 'Título 5',
        h6: 'Título 6',
        clear_formatting: 'Limpiar formato',
        expand: 'Expandir',
    },
];

const enTerms = [
    {
        bold: 'Bold',
        italic: 'Italic',
        strike: 'Strikethrough',
        underline: 'Underline',
        link: 'Link',
        code: 'Code',
        align_left: 'Align left',
        align_center: 'Align center',
        align_right: 'Align right',
        unordered_list: 'Unordered list',
        ordered_list: 'Ordered list',
        quote: 'Quote',
        h1: 'Heading 1',
        h2: 'Heading 2',
        h3: 'Heading 3',
        h4: 'Heading 4',
        h5: 'Heading 5',
        h6: 'Heading 6',
        clear_formatting: 'Clear formatting',
        expand: 'Expand',
    },
];

const termTranslate = (lang, string) => {
    let translate;
    switch (lang) {
        case 'pt_BR':
            translate = ptTerms.map((term) => term[string]);
            break;
        case 'es_ES':
            translate = esTerms.map((term) => term[string]);
            break;
        case 'en_US':
            translate = enTerms.map((term) => term[string]);
            break;
        default:
            translate = ptTerms.map((term) => term[string]);
    }
    return translate;
};

const richTextCss = () => `.rich-text{box-sizing:border-box;width:100%;display:flex;flex-direction:column;padding:8px;gap:8px;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-radius:16px;background-color:var(--color-surface-1, rgb(246, 246, 246))}.rich-text-top .format-buttons{order:1}.rich-text-top .preview{order:2}.rich-text-bottom .format-buttons{order:2}.rich-text-bottom .preview{order:1}.rich-text.active{border-color:var(--color-primary, rgb(30, 107, 241));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.rich-text .format-buttons{display:none !important}.rich-text .format-buttons-active{display:flex !important;position:relative;background-color:var(--color-surface-0, rgb(255, 255, 255));border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-radius:16px;padding:8px}.rich-text .format-buttons .style-onhover{position:absolute;background-color:var(--color-surface-1, rgb(246, 246, 246));border-radius:32px;bottom:-32px;right:0;opacity:0;-webkit-transition:opacity ease-in-out 0.5s;-moz-transition:opacity ease-in-out 0.5s;transition:opacity ease-in-out 0.5s;pointer-events:none}.rich-text .format-buttons .style-onhover.active{opacity:1}.rich-text .format-buttons .accordion-header{width:100%;position:relative;padding-right:40px}.rich-text .format-buttons .accordion-header .buttons-list{column-gap:8px}.rich-text .format-buttons .accordion-header .buttons-list .editor-bar{width:0;margin-right:-8px}.rich-text .format-buttons .accordion-header .buttons-list bds-tooltip{-webkit-transition:height ease-in-out 0.25s;-moz-transition:height ease-in-out 0.25s;transition:height ease-in-out 0.25s;height:0px}.rich-text .format-buttons .accordion-header .buttons-list bds-tooltip>bds-button,.rich-text .format-buttons .accordion-header .buttons-list bds-tooltip>bds-dropdown>div[slot=dropdown-activator]>bds-button{height:0;opacity:0;display:block;overflow:hidden;-webkit-transition:height ease-in-out 0.25s, opacity 0.5s ease-in-out 0.25s;-moz-transition:height ease-in-out 0.25s, opacity 0.5s ease-in-out 0.25s;transition:height ease-in-out 0.25s, opacity 0.5s ease-in-out 0.25s}.rich-text .format-buttons .accordion-header .buttons-list bds-tooltip.active{height:32px}.rich-text .format-buttons .accordion-header .buttons-list bds-tooltip.active>bds-button,.rich-text .format-buttons .accordion-header .buttons-list bds-tooltip.active>bds-dropdown>div[slot=dropdown-activator]>bds-button{overflow:inherit;height:32px;opacity:1}.rich-text .format-buttons .accordion-header .arrow-down{position:absolute;right:0;top:0;display:none}.rich-text .format-buttons .accordion-header .arrow-down.active{display:block}.rich-text .preview{box-sizing:border-box;width:100%;display:flex;flex-direction:column;padding:8px;-webkit-transition:height ease-in-out 0.25s;-moz-transition:height ease-in-out 0.25s;transition:height ease-in-out 0.25s}.rich-text .preview .editor-uai-design-system{min-height:48px;height:100%;background-color:transparent;font-size:1rem;line-height:1.5;overflow-y:auto;outline:none;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-style:normal;font-weight:normal;color:var(--color-content-default, rgb(40, 40, 40))}.rich-text .preview .editor-uai-design-system::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.rich-text .preview .editor-uai-design-system::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.rich-text .preview .editor-uai-design-system p,.rich-text .preview .editor-uai-design-system h1,.rich-text .preview .editor-uai-design-system h2,.rich-text .preview .editor-uai-design-system h3,.rich-text .preview .editor-uai-design-system h4,.rich-text .preview .editor-uai-design-system h5,.rich-text .preview .editor-uai-design-system h6,.rich-text .preview .editor-uai-design-system ul,.rich-text .preview .editor-uai-design-system ol,.rich-text .preview .editor-uai-design-system blockquote{margin:0 0 8px 0}.rich-text .preview .editor-uai-design-system h1{font-size:32px;font-weight:600}.rich-text .preview .editor-uai-design-system h2{font-size:28px;font-weight:600}.rich-text .preview .editor-uai-design-system h3{font-size:24px;font-weight:600}.rich-text .preview .editor-uai-design-system h4{font-size:20px;font-weight:600}.rich-text .preview .editor-uai-design-system h5{font-size:16px;font-weight:600}.rich-text .preview .editor-uai-design-system h6{font-size:12px;font-weight:600}.rich-text .preview .editor-uai-design-system a{text-decoration:none;color:var(--color-primary, rgb(30, 107, 241))}.rich-text .preview .editor-uai-design-system blockquote{padding:4px 16px 4px 32px;font-size:14px;position:relative;display:inline-block}.rich-text .preview .editor-uai-design-system blockquote::before,.rich-text .preview .editor-uai-design-system blockquote::after{content:'"';position:absolute;font-size:24px;color:var(--color-content-ghost, rgb(140, 140, 140))}.rich-text .preview .editor-uai-design-system blockquote::before{left:8px;top:-6px}.rich-text .preview .editor-uai-design-system blockquote::after{right:0px;bottom:0px}.rich-text .preview .editor-uai-design-system code{font-family:monospace;font-size:12px;background-color:var(--color-surface-2, rgb(237, 237, 237));padding:4px;border-radius:4px}`;

const RichText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsRichTextChange = index.createEvent(this, "bdsRichTextChange");
        this.bdsRichTextInput = index.createEvent(this, "bdsRichTextInput");
        this.bdsBlur = index.createEvent(this, "bdsBlur");
        this.bdsFocus = index.createEvent(this, "bdsFocus");
        this.buttonsListElement = null;
        this.buttonsEditElements = null;
        this.editor = null;
        this.dropDownLink = null;
        this.buttomBoldActive = false;
        this.buttomItalicActive = false;
        this.buttomStrikeActive = false;
        this.buttomUnderlineActive = false;
        this.buttomCodeActive = false;
        this.buttomLinkActive = false;
        this.buttomLinkValidDisabled = true;
        this.buttomAlignLeftActive = false;
        this.buttomAlignCenterActive = false;
        this.buttomAlignRightActive = false;
        this.buttomUnorderedListActive = false;
        this.buttomOrderedListActive = false;
        this.buttomQuoteActive = false;
        this.buttomH1Active = false;
        this.buttomH2Active = false;
        this.buttomH3Active = false;
        this.buttomH4Active = false;
        this.buttomH5Active = false;
        this.buttomH6Active = false;
        this.buttomAccordionActive = false;
        this.headerHeight = '32px';
        this.hasSelectionRange = false;
        this.selectedLinesList = null;
        this.treeElementsEditor = null;
        this.styleSectorActive = null;
        this.styleOnHover = 'teste';
        this.whenSelectionLink = null;
        this.linkButtonInput = null;
        this.insideComponent = false;
        /**
         * Set the language for fixed texts.
         */
        this.language = 'pt_BR';
        /**
         * weightButton to define if component has Bold Control.
         */
        this.weightButton = true;
        /**
         * italicButton to define if component has Italic Control.
         */
        this.italicButton = true;
        /**
         * strikeThroughbutton to define if component has Strike Control.
         */
        this.strikeThroughButton = true;
        /**
         * underlineButton to define if component has Underline Control.
         */
        this.underlineButton = true;
        /**
         * linkButton to define if component has Link Control.
         */
        this.linkButton = true;
        /**
         * codeButton to define if component has Code Control.
         */
        this.codeButton = true;
        /**
         * alignmentButtons to define if component has TextAlign Control.
         */
        this.alignmentButtons = true;
        /**
         * listButtons to define if component has List Control.
         */
        this.listButtons = true;
        /**
         * quoteButton to define if component has Quote Control.
         */
        this.quoteButton = true;
        /**
         * headingButtons to define if component has Heading Control.
         */
        this.headingButtons = true;
        /**
         * unstyledButton to define if component has Unstyled Control.
         */
        this.unstyledButton = true;
        /**
         * height is the prop to define height of component.
         */
        this.height = null;
        /**
         * maxHeight is the prop to define max height of component.
         */
        this.maxHeight = null;
        /**
         * positionBar is the prop to define max height of component.
         */
        this.positionBar = 'top';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.refButtonsListElement = (el) => {
            this.buttonsListElement = el;
        };
        this.refeditorElement = (el) => {
            this.editor = el;
        };
        this.refDropDownLinkElement = (el) => {
            this.dropDownLink = el;
        };
        this.refInputSetLink = (el) => {
            this.inputSetLink = el;
        };
        this.clearToolbar = () => {
            this.buttomBoldActive = false;
            this.buttomItalicActive = false;
            this.buttomStrikeActive = false;
            this.buttomUnderlineActive = false;
            this.buttomLinkActive = false;
            this.buttomCodeActive = false;
            this.buttomAlignLeftActive = false;
            this.buttomAlignCenterActive = false;
            this.buttomAlignRightActive = false;
            this.buttomUnorderedListActive = false;
            this.buttomOrderedListActive = false;
            this.buttomQuoteActive = false;
            this.buttomH1Active = false;
            this.buttomH2Active = false;
            this.buttomH3Active = false;
            this.buttomH4Active = false;
            this.buttomH5Active = false;
            this.buttomH6Active = false;
        };
        this.setheaderHeight = () => {
            this.buttomAccordionActive = !this.buttomAccordionActive;
            const selection = window.getSelection();
            if (!selection || selection.rangeCount === 0)
                return;
            const range = selection.getRangeAt(0);
            // Limpa a seleção para evitar comportamento inesperado
            selection.removeAllRanges();
            selection.addRange(range);
        };
        this.onBlur = () => {
            this.el.classList.remove('active');
            if (this.insideComponent === false) {
                this.clearToolbar();
            }
            this.bdsBlur.emit();
        };
        this.onFocus = () => {
            this.el.classList.add('active');
            this.bdsFocus.emit();
        };
        this.onKeydown = (event) => {
            if (event.key === 'Backspace') {
                const selection = window.getSelection();
                if (!selection || selection.rangeCount === 0)
                    return;
                const range = selection.getRangeAt(0);
                const startNode = range.startContainer;
                // Encontra o elemento de bloco que contém o cursor
                let blockElement = startNode.nodeType === Node.TEXT_NODE ? startNode.parentElement : startNode;
                while (blockElement && !blockElement.classList.contains('line') && blockElement !== this.editor) {
                    blockElement = blockElement.parentElement;
                }
                // Se o elemento atual for um <blockquote> e estiver vazio, removê-lo
                if (blockElement &&
                    blockElement.tagName === 'BLOCKQUOTE' &&
                    blockElement.classList.contains('line') &&
                    blockElement.innerText.length <= 1) {
                    event.preventDefault(); // Impede a exclusão padrão
                    blockElement.remove(); // Remove apenas o blockquote vazio
                }
            }
            if (this.editor.textContent.length === 0 && event.key === 'Backspace') {
                event.preventDefault();
                this.editor.innerHTML = `<p class="line"><br></p>`;
                this.setCursorToEnd();
            }
            if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
                event.preventDefault(); // Impede o Ctrl+Z
                event.stopPropagation(); // Evita que afete outros elementos
            }
        };
    }
    componentDidLoad() {
        if (this.editor.innerHTML.trim() === '') {
            this.editor.innerHTML = '<p class="line"><br></p>';
        }
        if (this.weightButton ||
            this.italicButton ||
            this.strikeThroughButton ||
            this.underlineButton ||
            this.linkButton ||
            this.codeButton ||
            this.alignmentButtons ||
            this.listButtons ||
            this.quoteButton ||
            this.headingButtons ||
            this.unstyledButton) {
            this.buttonsEditElements = this.buttonsListElement.getElementsByTagName('bds-tooltip');
            this.accordionHeader(false);
            this.editor.parentElement.style.height = `calc(100% - 56px)`;
        }
        else {
            this.editor.parentElement.style.height = `100%`;
        }
    }
    buttomsHeaderChanged() {
        setTimeout(() => this.accordionHeader(this.buttomAccordionActive), 500);
    }
    buttomAccordionActiveChanged() {
        this.accordionHeader(this.buttomAccordionActive);
    }
    updateToolbarState() {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const commonAncestor = range.commonAncestorContainer;
        const parentElement = commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentElement : commonAncestor;
        this.treeElementsEditor = positionElement.getParentsUntil(parentElement, '.editor-uai-design-system');
    }
    // Coloca o cursor no final do editor
    accordionHeader(value) {
        const allbuttonsEditElementsWidth = this.buttonsEditElements.length * 40;
        const buttonsListWidth = this.buttonsListElement.offsetWidth;
        const buttonAccordion = this.el.querySelector('#buttonAccordion');
        if (buttonsListWidth < allbuttonsEditElementsWidth) {
            buttonAccordion.classList.add('active');
        }
        else {
            buttonAccordion.classList.remove('active');
        }
        const diferrence = (buttonsListWidth * this.buttonsEditElements.length) / allbuttonsEditElementsWidth;
        const numberOfColumns = Math.ceil(allbuttonsEditElementsWidth / buttonsListWidth);
        const allbuttonsEditElements = Array.from(this.buttonsEditElements);
        allbuttonsEditElements.slice(0, Math.floor(diferrence)).forEach((element) => {
            element.classList.add('active');
        });
        if (value) {
            allbuttonsEditElements.forEach((element) => {
                element.classList.add('active');
                this.editor.parentElement.style.height = `calc(100% - ${numberOfColumns * 32 + 24}px)`;
            });
        }
        else {
            allbuttonsEditElements.slice(Math.floor(diferrence)).forEach((element) => {
                element.classList.remove('active');
                this.editor.parentElement.style.height = `calc(100% - 56px)`;
            });
        }
    }
    treeElementsEditorChanged(value) {
        const tagList = value.map((element) => element?.tagName.toLowerCase());
        const tagVerifyName = (tag) => tagList.includes(tag);
        const getLine = value.find((el) => el?.classList.contains('line'));
        this.buttomBoldActive = tagVerifyName('b');
        this.buttomItalicActive = tagVerifyName('i');
        this.buttomStrikeActive = tagVerifyName('strike');
        this.buttomUnderlineActive = tagVerifyName('u');
        this.buttomLinkActive = tagVerifyName('a');
        this.buttomCodeActive = tagVerifyName('code');
        this.buttomAlignLeftActive = getLine?.style.textAlign === 'left';
        this.buttomAlignCenterActive = getLine?.style.textAlign === 'center';
        this.buttomAlignRightActive = getLine?.style.textAlign === 'right';
        this.buttomUnorderedListActive = tagList[0] === 'ul';
        this.buttomOrderedListActive = tagList[0] === 'ol';
        this.buttomQuoteActive = tagVerifyName('blockquote');
        this.buttomH1Active = tagVerifyName('h1');
        this.buttomH2Active = tagVerifyName('h2');
        this.buttomH3Active = tagVerifyName('h3');
        this.buttomH4Active = tagVerifyName('h4');
        this.buttomH5Active = tagVerifyName('h5');
        this.buttomH6Active = tagVerifyName('h6');
    }
    // Função para ajustar parágrafos durante a edição
    onInput(ev) {
        ev.preventDefault();
        this.bdsRichTextInput.emit(ev);
        this.bdsRichTextChange.emit({ value: this.editor.innerHTML });
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0)
            return;
        const range = selection.getRangeAt(0);
        const currentNode = range.startContainer;
        // Se o nó atual é uma `div`, converta-o em um `p`
        if (currentNode.nodeType === Node.ELEMENT_NODE && currentNode.tagName === 'DIV') {
            const divElement = currentNode;
            const pElement = document.createElement('p');
            pElement.classList.add('line');
            pElement.innerHTML = divElement.innerHTML;
            divElement.parentNode.replaceChild(pElement, divElement);
        }
        // Garante que novas linhas (Enter) criem <p> ao invés de <div>
        this.editor.querySelectorAll('div').forEach((div) => {
            const p = document.createElement('p');
            p.classList.add('line');
            p.innerHTML = div.innerHTML;
            div.replaceWith(p);
        });
    }
    // Controle a navegação do componente
    onFocusEditorBar(ev) {
        const editorBar = ev.target;
        const NextButton = editorBar.nextElementSibling.querySelector('bds-button');
        const ElementToFocus = NextButton.shadowRoot.querySelector('.focus');
        ElementToFocus.focus();
        this.buttomAccordionActive = true;
    }
    // Coloca o cursor no final do editor
    setCursorToEnd() {
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(this.editor);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    }
    tagName(tag, tagList) {
        const value = tagList.map((element) => element?.tagName.toLowerCase());
        return value.includes(tag);
    }
    wrapSelection(ev, tag, link) {
        const detail = ev.detail;
        if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
            detail.preventDefault();
            detail.stopPropagation();
        }
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0)
            return;
        if (!this.editor.contains(selection.anchorNode))
            return;
        const range = selection.getRangeAt(0);
        const commonAncestor = range.commonAncestorContainer;
        const parentElement = commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentElement : commonAncestor;
        const tagList = positionElement.getParentsUntil(parentElement, '.line');
        const isTagApplied = this.tagName(tag, tagList);
        // Se a seleção estiver vazia, cria um espaço invisível para edição
        let content;
        let collapsedCursor = false;
        // Se a tag já está aplicada e o usuário quer remover
        if (isTagApplied) {
            const appliedTag = tagList.find((el) => el.tagName.toLowerCase() === tag);
            if (appliedTag) {
                const parent = appliedTag.parentElement;
                const isFullSelection = range.toString().trim() === appliedTag.textContent.trim();
                const isAtEndOfTag = range.endOffset === appliedTag.textContent.length;
                if (isFullSelection && parent) {
                    // Remove a tag se toda a seleção corresponde ao conteúdo da tag
                    while (appliedTag.firstChild) {
                        parent.insertBefore(appliedTag.firstChild, appliedTag);
                    }
                    parent.removeChild(appliedTag);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    this.updateToolbarState();
                }
                else if (isAtEndOfTag) {
                    // Se o cursor está no final da tag, move para fora dela
                    content = document.createDocumentFragment();
                    const placeholder = document.createTextNode('\u200B'); // Zero-width space
                    content.appendChild(placeholder);
                    collapsedCursor = true;
                    const newRange = document.createRange();
                    newRange.setStartAfter(appliedTag); // Define o início depois do elemento
                    newRange.setEndAfter(appliedTag);
                    newRange.insertNode(content);
                    selection.removeAllRanges();
                    selection.addRange(newRange);
                    this.updateToolbarState();
                }
                else {
                    // Se o cursor está no final da tag, move para fora dela
                    selection.removeAllRanges();
                    selection.addRange(range);
                    this.updateToolbarState();
                }
            }
            return;
        }
        if (range.collapsed) {
            content = document.createDocumentFragment();
            const placeholder = document.createTextNode('\u200B'); // Zero-width space
            content.appendChild(placeholder);
            collapsedCursor = true;
        }
        else {
            content = range.extractContents();
        }
        // Remove tags desnecessárias dentro da seleção
        content.querySelectorAll('*').forEach((element) => {
            while (element.firstChild) {
                element.parentNode.insertBefore(element.firstChild, element);
            }
            element.remove();
        });
        // Cria a nova tag e aplica o conteúdo extraído
        const wrapper = document.createElement(tag);
        if (tag === 'a' && link) {
            wrapper.setAttribute('href', link);
        }
        wrapper.appendChild(content);
        range.insertNode(wrapper);
        // Remove tags vazias no editor
        this.editor.querySelectorAll('*').forEach((el) => {
            if (!el.textContent.trim() && el.children.length === 0) {
                el.remove();
            }
        });
        // Se o cursor estava no meio da edição, mantém a seleção original
        const newRange = document.createRange();
        if (collapsedCursor) {
            newRange.setStart(wrapper, 0);
            newRange.setEnd(wrapper, 1);
        }
        else {
            newRange.setStartBefore(wrapper.firstChild || wrapper);
            newRange.setEndAfter(wrapper.lastChild || wrapper);
        }
        selection.removeAllRanges();
        selection.addRange(newRange);
        this.updateToolbarState();
        // Emite o evento para atualizar o estado
        this.bdsRichTextChange.emit({ value: this.editor.innerHTML });
    }
    wrapSelectionLine(tag, enableLinesReturn = false) {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0)
            return;
        if (!this.editor.contains(selection.anchorNode))
            return;
        const range = selection.getRangeAt(0);
        const startNode = range.startContainer;
        const endNode = range.endContainer;
        // Obtém todas as linhas afetadas pela seleção
        const selectedLines = new Set();
        let currentNode = startNode.parentElement;
        while (currentNode && currentNode !== endNode.parentElement) {
            let element = currentNode.nodeType === Node.TEXT_NODE ? currentNode.parentElement : currentNode;
            if (element && element.classList.contains('line')) {
                selectedLines.add(element);
            }
            currentNode = currentNode.nextSibling || currentNode.parentElement?.nextSibling;
        }
        // Adiciona a última linha caso tenha sido ignorada
        let endElement = endNode.nodeType === Node.TEXT_NODE ? endNode.parentElement : endNode;
        while (endElement && !endElement.classList.contains('line') && endElement !== this.editor) {
            endElement = endElement.parentElement;
        }
        if (endElement && endElement.classList.contains('line')) {
            selectedLines.add(endElement);
        }
        // Verifica se todas as linhas já possuem a tag escolhida
        const allAreSameTag = [...selectedLines].every((line) => tag === 'li' ? false : line.tagName.toLowerCase() === tag);
        const returnSelected = [...selectedLines].map((el) => {
            const newElement = document.createElement(allAreSameTag ? 'p' : tag);
            newElement.classList.add('line');
            newElement.innerHTML = el.innerHTML;
            el.replaceWith(newElement);
            return newElement;
        });
        if (enableLinesReturn) {
            this.selectedLinesList = returnSelected.map((element) => ({ element }));
        }
        // Limpa a seleção para evitar comportamento inesperado
        const newRange = document.createRange();
        let lastNode = returnSelected[0].lastChild;
        // Se não houver filhos, cria um nó de texto para evitar erro
        if (!lastNode) {
            lastNode = document.createTextNode('');
            returnSelected[0].appendChild(lastNode);
        }
        // Se o último nó for outro elemento, busca um nó de texto dentro dele
        while (lastNode && lastNode.nodeType !== Node.TEXT_NODE) {
            lastNode = lastNode.lastChild || lastNode;
        }
        // Define o range no final do último nó de texto
        newRange.setStart(lastNode, lastNode.textContent?.length || 0);
        newRange.setEnd(lastNode, lastNode.textContent?.length || 0);
        selection.removeAllRanges();
        selection.addRange(newRange);
        this.updateToolbarState();
        this.bdsRichTextChange.emit({ value: this.editor.innerHTML });
    }
    // Função para aplicar alinhamento ao texto selecionado
    alignText(ev, alignment) {
        const detail = ev.detail;
        if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
            detail.preventDefault();
            detail.stopPropagation();
        }
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0)
            return;
        const range = selection.getRangeAt(0);
        let blockElement = range.startContainer;
        // Percorre os elementos até encontrar um bloco válido que tenha a classe "line"
        while (blockElement && blockElement !== this.editor) {
            if (blockElement.nodeType === Node.ELEMENT_NODE && blockElement.classList.contains('line')) {
                break;
            }
            blockElement = blockElement.parentElement;
        }
        // Se encontrou um elemento de bloco com a classe "line"
        if (blockElement && blockElement !== this.editor) {
            // Verifica se o alinhamento já está aplicado
            const currentAlignment = blockElement.style.textAlign;
            if (currentAlignment === alignment) {
                // Se já estiver alinhado, remove o alinhamento
                blockElement.style.textAlign = '';
            }
            else {
                // Caso contrário, aplica o alinhamento
                blockElement.style.textAlign = alignment;
            }
        }
        // Limpa a seleção para evitar comportamento inesperado
        selection.removeAllRanges();
        selection.addRange(range);
        this.updateToolbarState();
        this.bdsRichTextChange.emit({ value: this.editor.innerHTML });
    }
    // Função para criar/remover lista (ordenada ou não ordenada)
    createHeading(ev, type) {
        const detail = ev.detail;
        if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
            detail.preventDefault();
            detail.stopPropagation();
        }
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0)
            return;
        if (!this.editor.contains(selection.anchorNode))
            return;
        this.wrapSelectionLine(type, true);
        const firstItemList = this.selectedLinesList[0]?.element;
        const firstParent = firstItemList.parentElement.previousElementSibling;
        const lastParent = firstItemList.parentElement.nextElementSibling;
        const parent = firstItemList.parentElement;
        if (parent.tagName.toLowerCase() === 'ul') {
            this.selectedLinesList.forEach((item) => {
                if (firstParent) {
                    firstParent.insertAdjacentElement('afterend', item.element);
                }
                else if (lastParent) {
                    lastParent.insertAdjacentElement('beforebegin', item.element);
                }
                else {
                    this.editor.insertAdjacentElement('afterbegin', item.element);
                }
            });
            if (Array.from(parent.getElementsByTagName('li')).length == 0) {
                parent.remove();
            }
        }
    }
    // Função para criar/remover lista (ordenada ou não ordenada)
    createList(ev, type) {
        const detail = ev.detail;
        if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
            detail.preventDefault();
            detail.stopPropagation();
        }
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0)
            return;
        if (!this.editor.contains(selection.anchorNode))
            return;
        this.wrapSelectionLine('li', true);
        const firstItemList = this.selectedLinesList[0].element;
        const lastItemList = this.selectedLinesList[this.selectedLinesList.length - 1]?.element;
        const wrapper = document.createElement(type);
        const parent = firstItemList.parentElement;
        if (!this.verifyList(firstItemList, lastItemList)) {
            parent.insertBefore(wrapper, firstItemList);
            this.selectedLinesList.forEach((item) => {
                wrapper.appendChild(item.element);
            });
        }
        else {
            const parentListElements = parent.getElementsByTagName('li');
            const parentList = Array.from(parentListElements).map((element) => ({ element }));
            if (parentList.length == this.selectedLinesList.length) {
                if (type !== parent.tagName.toLowerCase()) {
                    wrapper.innerHTML = parent.innerHTML;
                    parent.parentNode.replaceChild(wrapper, parent);
                }
                else {
                    this.selectedLinesList.forEach((item) => {
                        const tagList = parent.parentElement.tagName.toLowerCase() === 'li' ? 'li' : 'p';
                        const newElement = document.createElement(tagList);
                        newElement.classList.add('line');
                        newElement.innerHTML = item.element.innerHTML;
                        if (parent.parentElement.tagName.toLowerCase() === 'li') {
                            parent.parentElement.insertAdjacentElement('afterend', newElement);
                        }
                        else {
                            parent.previousElementSibling.insertAdjacentElement('afterend', newElement);
                        }
                        parent.removeChild(item.element);
                    });
                    parent.remove();
                }
            }
            else {
                // parent.insertBefore(wrapper, firstItemList);
                firstItemList.previousElementSibling.insertAdjacentElement('beforeend', wrapper);
                this.selectedLinesList.forEach((item) => {
                    wrapper.appendChild(item.element);
                });
            }
        }
    }
    addSelectionLink(ev) {
        const detail = ev.detail;
        if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
            this.dropDownLink.setOpen();
        }
        this.editor.focus();
        const selection = window.getSelection();
        this.whenSelectionLink = selection.getRangeAt(0);
        const ElementToFocus = this.inputSetLink.shadowRoot.querySelector('.input__container__text');
        ElementToFocus.focus();
    }
    addLinkInput(ev) {
        ev.preventDefault();
        const input = ev.target;
        this.linkButtonInput = input.value;
        if (this.linkButtonInput.length > 0) {
            this.buttomLinkValidDisabled = false;
        }
        else {
            this.buttomLinkValidDisabled = true;
        }
    }
    createLinkKeyDown(ev) {
        if (ev.key == 'Enter') {
            this.createLink(ev);
        }
    }
    createLink(ev) {
        ev.preventDefault();
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(this.whenSelectionLink);
        this.wrapSelection(ev, 'a', this.linkButtonInput);
        if (this.dropDownLink) {
            this.dropDownLink.setClose();
        }
    }
    verifyList(firstItem, lastItem) {
        const firstItemValue = firstItem.parentElement.tagName.toLowerCase() === 'ul' || firstItem.parentElement.tagName.toLowerCase() === 'ol';
        const lastItemValue = lastItem.parentElement.tagName.toLowerCase() === 'ul' || lastItem.parentElement.tagName.toLowerCase() === 'ol';
        return firstItemValue && lastItemValue;
    }
    // Função para limpar o HTML ao colar conteúdo
    handlePaste(event) {
        event.preventDefault(); // Bloqueia a colagem padrão
        event.stopPropagation(); // Evita que afete outros elementos
        const clipboardData = event.clipboardData || window.clipboardData;
        const plainText = clipboardData.getData('text/plain'); // Obtém apenas texto puro
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0)
            return;
        const range = selection.getRangeAt(0);
        const commonAncestor = range.commonAncestorContainer;
        const parentElement = commonAncestor.nodeType === Node.TEXT_NODE ? commonAncestor.parentElement : commonAncestor;
        if (parentElement.classList.contains('line')) {
            parentElement.remove();
        }
        range.deleteContents(); // Remove qualquer seleção existente
        // Converte cada linha do texto colado em <p class="line">
        const fragment = document.createDocumentFragment();
        plainText.split('\n').forEach((line) => {
            if (line.trim()) {
                const p = document.createElement('p');
                p.classList.add('line');
                p.textContent = line.trim();
                fragment.appendChild(p);
            }
        });
        // Insere o conteúdo processado no local do cursor
        range.insertNode(fragment);
        // Ajusta o cursor para o final do texto inserido
        selection.removeAllRanges();
        selection.addRange(range);
    }
    // Função para restaurar a formatação do texto selecionado
    clearFormatting(ev) {
        const detail = ev.detail;
        if (detail instanceof KeyboardEvent && detail.key === 'Enter') {
            detail.preventDefault();
            detail.stopPropagation();
        }
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0)
            return;
        const range = selection.getRangeAt(0);
        const startNode = range.startContainer;
        const endNode = range.endContainer;
        // Obtém todas as linhas afetadas pela seleção
        const selectedLines = new Set();
        let currentNode = startNode.parentElement;
        while (currentNode && currentNode !== endNode.parentElement) {
            let element = currentNode.nodeType === Node.TEXT_NODE ? currentNode.parentElement : currentNode;
            if (element && element.classList.contains('line')) {
                selectedLines.add(element);
            }
            currentNode = currentNode.nextSibling || currentNode.parentElement?.nextSibling;
        }
        // Adiciona a última linha caso tenha sido ignorada
        let endElement = endNode.nodeType === Node.TEXT_NODE ? endNode.parentElement : endNode;
        while (endElement && !endElement.classList.contains('line') && endElement !== this.editor) {
            endElement = endElement.parentElement;
        }
        if (endElement && endElement.classList.contains('line')) {
            selectedLines.add(endElement);
        }
        // Remove a formatação de cada linha
        selectedLines.forEach((line) => {
            line.innerHTML = line.textContent; // Remove todas as tags HTML
            line.style.textAlign = ''; // Remove o alinhamento
        });
        this.wrapSelectionLine('p', true);
        // Limpa a seleção para evitar comportamento inesperado
        selection.removeAllRanges();
        selection.addRange(range);
    }
    render() {
        return (index.h(index.Host, { key: 'c3cabc9492d008e390d2ab800cdcb9eef7bd1fe3', class: {
                [`rich-text`]: true,
                [`rich-text-${this.positionBar}`]: true,
            }, style: { height: this.height, maxHeight: this.maxHeight }, tabindex: "0", onMouseEnter: () => (this.insideComponent = true), onMouseLeave: () => (this.insideComponent = false) }, index.h("div", { key: '2eb650b515c5e0b8efb4be6898358a59dbc00d00', class: "preview" }, index.h("div", { key: 'd72381210511620065867435c98beff694ab5d84', "data-test": this.dataTest, ref: (el) => this.refeditorElement(el), contentEditable: "true", class: "editor-uai-design-system", tabindex: "0", onBlur: this.onBlur, onFocus: this.onFocus, onMouseUp: () => this.updateToolbarState(), onKeyUp: () => this.updateToolbarState(), onKeyDown: (ev) => this.onKeydown(ev), onInput: (ev) => this.onInput(ev), onPaste: this.handlePaste.bind(this) })), index.h("bds-grid", { key: '7e09633bb97e85d38b553efe27e8295f83a5e7c2', class: {
                [`format-buttons`]: true,
                [`format-buttons-active`]: this.weightButton ||
                    this.italicButton ||
                    this.strikeThroughButton ||
                    this.underlineButton ||
                    this.linkButton ||
                    this.codeButton ||
                    this.alignmentButtons ||
                    this.listButtons ||
                    this.quoteButton ||
                    this.headingButtons ||
                    this.unstyledButton,
            } }, index.h("div", { key: '50147355a955c04289d1b84bb10d720a879db376', class: "accordion-header" }, index.h("bds-grid", { key: '84aa1fb286778ca117db83ad5a5e31301ebbdba0', ref: (el) => this.refButtonsListElement(el), class: "buttons-list", "flex-wrap": "wrap" }, index.h("div", { key: 'a5b029309b0045a81be0972383f736a150375507', onFocus: (ev) => this.onFocusEditorBar(ev), tabindex: "1", class: "editor-bar" }), this.weightButton && (index.h("bds-tooltip", { key: 'c282af347913eb420e646445f0babacfbc3a5fb7', "tooltip-text": `${termTranslate(this.language, 'bold')}`, position: "top-center" }, index.h("bds-button", { key: 'a3d4ffa79631b19f355d686e865f05cbf75795bf', variant: this.buttomBoldActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'b'), "icon-left": "text-style-bold", "aria-label": `${termTranslate(this.language, 'bold')}` }))), this.italicButton && (index.h("bds-tooltip", { key: '0c80890fc2b161853502f52b330f0e76efb6b30e', "tooltip-text": `${termTranslate(this.language, 'italic')}`, position: "top-center" }, index.h("bds-button", { key: 'd3dd5d22589de0e039089f3627f33e01c8e010b0', variant: this.buttomItalicActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'i'), "icon-left": "text-style-italic", "aria-label": `${termTranslate(this.language, 'italic')}` }))), this.strikeThroughButton && (index.h("bds-tooltip", { key: '1df001f21ac7f08209a7f548e3f59196d41c0635', "tooltip-text": `${termTranslate(this.language, 'strike')}`, position: "top-center" }, index.h("bds-button", { key: 'e2ecc1812c473f944dd2762b141427b8cfa44d35', variant: this.buttomStrikeActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'strike'), "icon-left": "text-style-strikethrough", "aria-label": `${termTranslate(this.language, 'strike')}` }))), this.underlineButton && (index.h("bds-tooltip", { key: '4f1f0d099849c3ad77439c088ba1b5ef3c183a57', "tooltip-text": `${termTranslate(this.language, 'underline')}`, position: "top-center" }, index.h("bds-button", { key: 'b6cbcb82ada8a3af64423b64e5ca66dfd0b9d231', variant: this.buttomUnderlineActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'u'), "icon-left": "text-style-underline", "aria-label": `${termTranslate(this.language, 'underline')}` }))), this.linkButton && (index.h("bds-tooltip", { key: '64ba077f7a912a4b2fdc474dbaa75b830a744995', "tooltip-text": `${termTranslate(this.language, 'link')}`, position: "top-center" }, this.buttomLinkActive ? (index.h("bds-button", { variant: "solid", color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'a'), "icon-left": "link", "aria-label": `${termTranslate(this.language, 'link')}` })) : (index.h("bds-dropdown", { ref: (el) => this.refDropDownLinkElement(el), activeMode: "click", position: "bottom-left" }, index.h("div", { slot: "dropdown-activator" }, index.h("bds-button", { slot: "dropdown-activator", variant: "text", color: "content", size: "short", onBdsClick: (ev) => this.addSelectionLink(ev), "icon-left": "link", "aria-label": `${termTranslate(this.language, 'link')}` })), index.h("bds-grid", { padding: "half", alignItems: "center", gap: "half", slot: "dropdown-content" }, index.h("bds-input", { ref: this.refInputSetLink, onBdsInput: (ev) => this.addLinkInput(ev), style: { flexShrink: '99999' }, placeholder: "adcione o link aqui", onKeyDown: (ev) => this.createLinkKeyDown(ev), tabindex: this.dropDownLink?.open ? '1' : '-1' }), index.h("bds-button", { disabled: this.buttomLinkValidDisabled, "icon-left": "check", onBdsClick: (ev) => this.createLink(ev), tabindex: this.dropDownLink?.open ? '1' : '-1', "aria-label": `${termTranslate(this.language, 'link')}` })))))), this.codeButton && (index.h("bds-tooltip", { key: '59f13f555b4cfd71c8624db2a6139da8943b7daf', "tooltip-text": `${termTranslate(this.language, 'code')}`, position: "top-center" }, index.h("bds-button", { key: 'd22e1cccd9b1007e7f1d89da8a0522cd7e1ef3d1', variant: this.buttomCodeActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'code'), "icon-left": "code", "aria-label": `${termTranslate(this.language, 'code')}` }))), this.alignmentButtons && (index.h("bds-tooltip", { key: 'da07f870e3e111575001944aa6384a9e5bce3f7f', "tooltip-text": `${termTranslate(this.language, 'align_left')}`, position: "top-center" }, index.h("bds-button", { key: '722a3f2949e4b1e3f0a61e326b5d01df5e850c70', variant: this.buttomAlignLeftActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'left'), "icon-left": "align-left", "aria-label": `${termTranslate(this.language, 'align_left')}` }))), this.alignmentButtons && (index.h("bds-tooltip", { key: '3751bad304b68f966c18858fd680b893454e14f3', "tooltip-text": `${termTranslate(this.language, 'align_center')}`, position: "top-center" }, index.h("bds-button", { key: '92f1c487ac99763f1f3b5464b507fcf05cf9177a', variant: this.buttomAlignCenterActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'center'), "icon-left": "align-center", "aria-label": `${termTranslate(this.language, 'align_center')}` }))), this.alignmentButtons && (index.h("bds-tooltip", { key: 'f5d12c5c512ed2e112152b05c445e42c284b3c68', "tooltip-text": `${termTranslate(this.language, 'align_right')}`, position: "top-center" }, index.h("bds-button", { key: 'e42ed53f0140cbb1230fe63b9cdbc6c4b7ca11f2', variant: this.buttomAlignRightActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'right'), "icon-left": "align-right", "aria-label": `${termTranslate(this.language, 'align_right')}` }))), this.listButtons && (index.h("bds-tooltip", { key: '056783ef7a514cf49727efa57a5f1d9ce0326907', "tooltip-text": `${termTranslate(this.language, 'unordered_list')}`, position: "top-center" }, index.h("bds-button", { key: '403de2b8ad0864b620ea829370a3e55c4f9c95eb', variant: this.buttomUnorderedListActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createList(ev, 'ul'), "icon-left": "unordered-list", "aria-label": `${termTranslate(this.language, 'unordered_list')}` }))), this.listButtons && (index.h("bds-tooltip", { key: '8320cca7735177951fb71bd5e0de1db6ed1b9022', "tooltip-text": `${termTranslate(this.language, 'ordered_list')}`, position: "top-center" }, index.h("bds-button", { key: '99149a0a2704edce5c12d196dabea37828eff69e', variant: this.buttomOrderedListActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createList(ev, 'ol'), "icon-left": "ordered-list", "aria-label": `${termTranslate(this.language, 'ordered_list')}` }))), this.quoteButton && (index.h("bds-tooltip", { key: 'c22866d3c81e346783b54f22e4385bbbf73830ff', "tooltip-text": `${termTranslate(this.language, 'quote')}`, position: "top-center" }, index.h("bds-button", { key: 'f98e3c12de8441f2aa3bb14fc3af4dab7098ee46', variant: this.buttomQuoteActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'blockquote'), "icon-left": "quote", "aria-label": `${termTranslate(this.language, 'quote')}` }))), this.headingButtons && (index.h("bds-tooltip", { key: 'a3bb6929ce7ee420c37b0dc218817e7b2ea557de', "tooltip-text": `${termTranslate(this.language, 'h1')}`, position: "top-center" }, index.h("bds-button", { key: 'f4829ef9a2d8753ddafa6b6b10362fc70bea2b9e', variant: this.buttomH1Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h1'), "icon-left": "h-1", "aria-label": `${termTranslate(this.language, 'h1')}` }))), this.headingButtons && (index.h("bds-tooltip", { key: 'd1758b6da64a5dd6bafcd84f447c006f500fbf46', "tooltip-text": `${termTranslate(this.language, 'h2')}`, position: "top-center" }, index.h("bds-button", { key: 'a0ed52eac79794002bdc4470f7c8ccd4e849cc7a', variant: this.buttomH2Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h2'), "icon-left": "h-2", "aria-label": `${termTranslate(this.language, 'h2')}` }))), this.headingButtons && (index.h("bds-tooltip", { key: 'a87fc52f17cad174f014f9bacf49fb29810d8c37', "tooltip-text": `${termTranslate(this.language, 'h3')}`, position: "top-center" }, index.h("bds-button", { key: 'e8b1f60675fd853c7343484fcc969dfe009fe67d', variant: this.buttomH3Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h3'), "icon-left": "h-3", "aria-label": `${termTranslate(this.language, 'h3')}` }))), this.headingButtons && (index.h("bds-tooltip", { key: '34b7415968272928f9eed5dd89db0d71e2e2f737', "tooltip-text": `${termTranslate(this.language, 'h4')}`, position: "top-center" }, index.h("bds-button", { key: 'fb60e9a1498418d00eeaa42fd8b4506db58755a0', variant: this.buttomH4Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h4'), "icon-left": "h-4", "aria-label": `${termTranslate(this.language, 'h4')}` }))), this.headingButtons && (index.h("bds-tooltip", { key: 'b70a6ecfae1e8f4143d3b2066254697d8dd749b0', "tooltip-text": `${termTranslate(this.language, 'h5')}`, position: "top-center" }, index.h("bds-button", { key: '04fe72f00fd0cc0769bc94715e0fd3fefbc198a8', variant: this.buttomH5Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h5'), "icon-left": "h-5", "aria-label": `${termTranslate(this.language, 'h5')}` }))), this.headingButtons && (index.h("bds-tooltip", { key: 'bcab9fa136d22effd226a857246faf5f6f80e5f4', "tooltip-text": `${termTranslate(this.language, 'h6')}`, position: "top-center" }, index.h("bds-button", { key: '9fed8c5cc01a76acc1143e86f2429cf0e2e07bdb', variant: this.buttomH6Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h6'), "icon-left": "h-6", "aria-label": `${termTranslate(this.language, 'h6')}` }))), this.unstyledButton && (index.h("bds-tooltip", { key: '1dc8dc56e16cdcc4c45096130e751ae32ae9d9c9', "tooltip-text": `${termTranslate(this.language, 'clear_formatting')}`, position: "top-center" }, index.h("bds-button", { key: '01d1153a45977a62dde20fb2d2cc6e679a60f17b', variant: "text", color: "content", size: "short", onBdsClick: (ev) => this.clearFormatting(ev), "icon-left": "unstyled", "aria-label": `${termTranslate(this.language, 'clear_formatting')}` })))), index.h("bds-button", { key: '233a450506f89df5ac1ec556bc9afbd0d237d04f', id: "buttonAccordion", variant: this.buttomAccordionActive ? 'solid' : 'text', class: "arrow-down", color: "content", size: "short", onBdsClick: () => this.setheaderHeight(), "icon-left": this.positionBar == 'top'
                ? this.buttomAccordionActive
                    ? 'arrow-up'
                    : 'arrow-down'
                : this.buttomAccordionActive
                    ? 'arrow-down'
                    : 'arrow-up' })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "weightButton": [{
                "buttomsHeaderChanged": 0
            }],
        "italicButton": [{
                "buttomsHeaderChanged": 0
            }],
        "strikeThroughButton": [{
                "buttomsHeaderChanged": 0
            }],
        "underlineButton": [{
                "buttomsHeaderChanged": 0
            }],
        "linkButton": [{
                "buttomsHeaderChanged": 0
            }],
        "codeButton": [{
                "buttomsHeaderChanged": 0
            }],
        "alignmentButtons": [{
                "buttomsHeaderChanged": 0
            }],
        "listButtons": [{
                "buttomsHeaderChanged": 0
            }],
        "quoteButton": [{
                "buttomsHeaderChanged": 0
            }],
        "headingButtons": [{
                "buttomsHeaderChanged": 0
            }],
        "unstyledButton": [{
                "buttomsHeaderChanged": 0
            }],
        "buttomAccordionActive": [{
                "buttomAccordionActiveChanged": 0
            }],
        "treeElementsEditor": [{
                "treeElementsEditorChanged": 0
            }]
    }; }
};
RichText.style = richTextCss();

exports.bds_rich_text = RichText;
