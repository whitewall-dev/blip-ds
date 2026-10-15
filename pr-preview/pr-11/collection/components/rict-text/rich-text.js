import { h, Host } from "@stencil/core";
import { getParentsUntil } from "../../utils/position-element";
import { termTranslate } from "./languages";
export class RichText {
    constructor() {
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
        this.treeElementsEditor = getParentsUntil(parentElement, '.editor-uai-design-system');
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
        const tagList = getParentsUntil(parentElement, '.line');
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
        return (h(Host, { key: 'c3cabc9492d008e390d2ab800cdcb9eef7bd1fe3', class: {
                [`rich-text`]: true,
                [`rich-text-${this.positionBar}`]: true,
            }, style: { height: this.height, maxHeight: this.maxHeight }, tabindex: "0", onMouseEnter: () => (this.insideComponent = true), onMouseLeave: () => (this.insideComponent = false) }, h("div", { key: '2eb650b515c5e0b8efb4be6898358a59dbc00d00', class: "preview" }, h("div", { key: 'd72381210511620065867435c98beff694ab5d84', "data-test": this.dataTest, ref: (el) => this.refeditorElement(el), contentEditable: "true", class: "editor-uai-design-system", tabindex: "0", onBlur: this.onBlur, onFocus: this.onFocus, onMouseUp: () => this.updateToolbarState(), onKeyUp: () => this.updateToolbarState(), onKeyDown: (ev) => this.onKeydown(ev), onInput: (ev) => this.onInput(ev), onPaste: this.handlePaste.bind(this) })), h("bds-grid", { key: '7e09633bb97e85d38b553efe27e8295f83a5e7c2', class: {
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
            } }, h("div", { key: '50147355a955c04289d1b84bb10d720a879db376', class: "accordion-header" }, h("bds-grid", { key: '84aa1fb286778ca117db83ad5a5e31301ebbdba0', ref: (el) => this.refButtonsListElement(el), class: "buttons-list", "flex-wrap": "wrap" }, h("div", { key: 'a5b029309b0045a81be0972383f736a150375507', onFocus: (ev) => this.onFocusEditorBar(ev), tabindex: "1", class: "editor-bar" }), this.weightButton && (h("bds-tooltip", { key: 'c282af347913eb420e646445f0babacfbc3a5fb7', "tooltip-text": `${termTranslate(this.language, 'bold')}`, position: "top-center" }, h("bds-button", { key: 'a3d4ffa79631b19f355d686e865f05cbf75795bf', variant: this.buttomBoldActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'b'), "icon-left": "text-style-bold", "aria-label": `${termTranslate(this.language, 'bold')}` }))), this.italicButton && (h("bds-tooltip", { key: '0c80890fc2b161853502f52b330f0e76efb6b30e', "tooltip-text": `${termTranslate(this.language, 'italic')}`, position: "top-center" }, h("bds-button", { key: 'd3dd5d22589de0e039089f3627f33e01c8e010b0', variant: this.buttomItalicActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'i'), "icon-left": "text-style-italic", "aria-label": `${termTranslate(this.language, 'italic')}` }))), this.strikeThroughButton && (h("bds-tooltip", { key: '1df001f21ac7f08209a7f548e3f59196d41c0635', "tooltip-text": `${termTranslate(this.language, 'strike')}`, position: "top-center" }, h("bds-button", { key: 'e2ecc1812c473f944dd2762b141427b8cfa44d35', variant: this.buttomStrikeActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'strike'), "icon-left": "text-style-strikethrough", "aria-label": `${termTranslate(this.language, 'strike')}` }))), this.underlineButton && (h("bds-tooltip", { key: '4f1f0d099849c3ad77439c088ba1b5ef3c183a57', "tooltip-text": `${termTranslate(this.language, 'underline')}`, position: "top-center" }, h("bds-button", { key: 'b6cbcb82ada8a3af64423b64e5ca66dfd0b9d231', variant: this.buttomUnderlineActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'u'), "icon-left": "text-style-underline", "aria-label": `${termTranslate(this.language, 'underline')}` }))), this.linkButton && (h("bds-tooltip", { key: '64ba077f7a912a4b2fdc474dbaa75b830a744995', "tooltip-text": `${termTranslate(this.language, 'link')}`, position: "top-center" }, this.buttomLinkActive ? (h("bds-button", { variant: "solid", color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'a'), "icon-left": "link", "aria-label": `${termTranslate(this.language, 'link')}` })) : (h("bds-dropdown", { ref: (el) => this.refDropDownLinkElement(el), activeMode: "click", position: "bottom-left" }, h("div", { slot: "dropdown-activator" }, h("bds-button", { slot: "dropdown-activator", variant: "text", color: "content", size: "short", onBdsClick: (ev) => this.addSelectionLink(ev), "icon-left": "link", "aria-label": `${termTranslate(this.language, 'link')}` })), h("bds-grid", { padding: "half", alignItems: "center", gap: "half", slot: "dropdown-content" }, h("bds-input", { ref: this.refInputSetLink, onBdsInput: (ev) => this.addLinkInput(ev), style: { flexShrink: '99999' }, placeholder: "adcione o link aqui", onKeyDown: (ev) => this.createLinkKeyDown(ev), tabindex: this.dropDownLink?.open ? '1' : '-1' }), h("bds-button", { disabled: this.buttomLinkValidDisabled, "icon-left": "check", onBdsClick: (ev) => this.createLink(ev), tabindex: this.dropDownLink?.open ? '1' : '-1', "aria-label": `${termTranslate(this.language, 'link')}` })))))), this.codeButton && (h("bds-tooltip", { key: '59f13f555b4cfd71c8624db2a6139da8943b7daf', "tooltip-text": `${termTranslate(this.language, 'code')}`, position: "top-center" }, h("bds-button", { key: 'd22e1cccd9b1007e7f1d89da8a0522cd7e1ef3d1', variant: this.buttomCodeActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.wrapSelection(ev, 'code'), "icon-left": "code", "aria-label": `${termTranslate(this.language, 'code')}` }))), this.alignmentButtons && (h("bds-tooltip", { key: 'da07f870e3e111575001944aa6384a9e5bce3f7f', "tooltip-text": `${termTranslate(this.language, 'align_left')}`, position: "top-center" }, h("bds-button", { key: '722a3f2949e4b1e3f0a61e326b5d01df5e850c70', variant: this.buttomAlignLeftActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'left'), "icon-left": "align-left", "aria-label": `${termTranslate(this.language, 'align_left')}` }))), this.alignmentButtons && (h("bds-tooltip", { key: '3751bad304b68f966c18858fd680b893454e14f3', "tooltip-text": `${termTranslate(this.language, 'align_center')}`, position: "top-center" }, h("bds-button", { key: '92f1c487ac99763f1f3b5464b507fcf05cf9177a', variant: this.buttomAlignCenterActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'center'), "icon-left": "align-center", "aria-label": `${termTranslate(this.language, 'align_center')}` }))), this.alignmentButtons && (h("bds-tooltip", { key: 'f5d12c5c512ed2e112152b05c445e42c284b3c68', "tooltip-text": `${termTranslate(this.language, 'align_right')}`, position: "top-center" }, h("bds-button", { key: 'e42ed53f0140cbb1230fe63b9cdbc6c4b7ca11f2', variant: this.buttomAlignRightActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.alignText(ev, 'right'), "icon-left": "align-right", "aria-label": `${termTranslate(this.language, 'align_right')}` }))), this.listButtons && (h("bds-tooltip", { key: '056783ef7a514cf49727efa57a5f1d9ce0326907', "tooltip-text": `${termTranslate(this.language, 'unordered_list')}`, position: "top-center" }, h("bds-button", { key: '403de2b8ad0864b620ea829370a3e55c4f9c95eb', variant: this.buttomUnorderedListActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createList(ev, 'ul'), "icon-left": "unordered-list", "aria-label": `${termTranslate(this.language, 'unordered_list')}` }))), this.listButtons && (h("bds-tooltip", { key: '8320cca7735177951fb71bd5e0de1db6ed1b9022', "tooltip-text": `${termTranslate(this.language, 'ordered_list')}`, position: "top-center" }, h("bds-button", { key: '99149a0a2704edce5c12d196dabea37828eff69e', variant: this.buttomOrderedListActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createList(ev, 'ol'), "icon-left": "ordered-list", "aria-label": `${termTranslate(this.language, 'ordered_list')}` }))), this.quoteButton && (h("bds-tooltip", { key: 'c22866d3c81e346783b54f22e4385bbbf73830ff', "tooltip-text": `${termTranslate(this.language, 'quote')}`, position: "top-center" }, h("bds-button", { key: 'f98e3c12de8441f2aa3bb14fc3af4dab7098ee46', variant: this.buttomQuoteActive ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'blockquote'), "icon-left": "quote", "aria-label": `${termTranslate(this.language, 'quote')}` }))), this.headingButtons && (h("bds-tooltip", { key: 'a3bb6929ce7ee420c37b0dc218817e7b2ea557de', "tooltip-text": `${termTranslate(this.language, 'h1')}`, position: "top-center" }, h("bds-button", { key: 'f4829ef9a2d8753ddafa6b6b10362fc70bea2b9e', variant: this.buttomH1Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h1'), "icon-left": "h-1", "aria-label": `${termTranslate(this.language, 'h1')}` }))), this.headingButtons && (h("bds-tooltip", { key: 'd1758b6da64a5dd6bafcd84f447c006f500fbf46', "tooltip-text": `${termTranslate(this.language, 'h2')}`, position: "top-center" }, h("bds-button", { key: 'a0ed52eac79794002bdc4470f7c8ccd4e849cc7a', variant: this.buttomH2Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h2'), "icon-left": "h-2", "aria-label": `${termTranslate(this.language, 'h2')}` }))), this.headingButtons && (h("bds-tooltip", { key: 'a87fc52f17cad174f014f9bacf49fb29810d8c37', "tooltip-text": `${termTranslate(this.language, 'h3')}`, position: "top-center" }, h("bds-button", { key: 'e8b1f60675fd853c7343484fcc969dfe009fe67d', variant: this.buttomH3Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h3'), "icon-left": "h-3", "aria-label": `${termTranslate(this.language, 'h3')}` }))), this.headingButtons && (h("bds-tooltip", { key: '34b7415968272928f9eed5dd89db0d71e2e2f737', "tooltip-text": `${termTranslate(this.language, 'h4')}`, position: "top-center" }, h("bds-button", { key: 'fb60e9a1498418d00eeaa42fd8b4506db58755a0', variant: this.buttomH4Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h4'), "icon-left": "h-4", "aria-label": `${termTranslate(this.language, 'h4')}` }))), this.headingButtons && (h("bds-tooltip", { key: 'b70a6ecfae1e8f4143d3b2066254697d8dd749b0', "tooltip-text": `${termTranslate(this.language, 'h5')}`, position: "top-center" }, h("bds-button", { key: '04fe72f00fd0cc0769bc94715e0fd3fefbc198a8', variant: this.buttomH5Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h5'), "icon-left": "h-5", "aria-label": `${termTranslate(this.language, 'h5')}` }))), this.headingButtons && (h("bds-tooltip", { key: 'bcab9fa136d22effd226a857246faf5f6f80e5f4', "tooltip-text": `${termTranslate(this.language, 'h6')}`, position: "top-center" }, h("bds-button", { key: '9fed8c5cc01a76acc1143e86f2429cf0e2e07bdb', variant: this.buttomH6Active ? 'solid' : 'text', color: "content", size: "short", onBdsClick: (ev) => this.createHeading(ev, 'h6'), "icon-left": "h-6", "aria-label": `${termTranslate(this.language, 'h6')}` }))), this.unstyledButton && (h("bds-tooltip", { key: '1dc8dc56e16cdcc4c45096130e751ae32ae9d9c9', "tooltip-text": `${termTranslate(this.language, 'clear_formatting')}`, position: "top-center" }, h("bds-button", { key: '01d1153a45977a62dde20fb2d2cc6e679a60f17b', variant: "text", color: "content", size: "short", onBdsClick: (ev) => this.clearFormatting(ev), "icon-left": "unstyled", "aria-label": `${termTranslate(this.language, 'clear_formatting')}` })))), h("bds-button", { key: '233a450506f89df5ac1ec556bc9afbd0d237d04f', id: "buttonAccordion", variant: this.buttomAccordionActive ? 'solid' : 'text', class: "arrow-down", color: "content", size: "short", onBdsClick: () => this.setheaderHeight(), "icon-left": this.positionBar == 'top'
                ? this.buttomAccordionActive
                    ? 'arrow-up'
                    : 'arrow-down'
                : this.buttomAccordionActive
                    ? 'arrow-down'
                    : 'arrow-up' })))));
    }
    static get is() { return "bds-rich-text"; }
    static get originalStyleUrls() {
        return {
            "$": ["rich-text.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["rich-text.css"]
        };
    }
    static get properties() {
        return {
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "languages",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "languages": {
                            "location": "import",
                            "path": "./rich-text-interface",
                            "id": "src/components/rict-text/rich-text-interface.ts::languages",
                            "referenceLocation": "languages"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the language for fixed texts."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'pt_BR'"
            },
            "weightButton": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "weightButton to define if component has Bold Control."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "weight-button",
                "defaultValue": "true"
            },
            "italicButton": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "italicButton to define if component has Italic Control."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "italic-button",
                "defaultValue": "true"
            },
            "strikeThroughButton": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "strikeThroughbutton to define if component has Strike Control."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "strike-through-button",
                "defaultValue": "true"
            },
            "underlineButton": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "underlineButton to define if component has Underline Control."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "underline-button",
                "defaultValue": "true"
            },
            "linkButton": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "linkButton to define if component has Link Control."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "link-button",
                "defaultValue": "true"
            },
            "codeButton": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "codeButton to define if component has Code Control."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "code-button",
                "defaultValue": "true"
            },
            "alignmentButtons": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "alignmentButtons to define if component has TextAlign Control."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "alignment-buttons",
                "defaultValue": "true"
            },
            "listButtons": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "listButtons to define if component has List Control."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "list-buttons",
                "defaultValue": "true"
            },
            "quoteButton": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "quoteButton to define if component has Quote Control."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "quote-button",
                "defaultValue": "true"
            },
            "headingButtons": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "headingButtons to define if component has Heading Control."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "heading-buttons",
                "defaultValue": "true"
            },
            "unstyledButton": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "unstyledButton to define if component has Unstyled Control."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "unstyled-button",
                "defaultValue": "true"
            },
            "height": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "height is the prop to define height of component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height",
                "defaultValue": "null"
            },
            "maxHeight": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "maxHeight is the prop to define max height of component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-height",
                "defaultValue": "null"
            },
            "positionBar": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "positionBar",
                    "resolved": "\"bottom\" | \"top\"",
                    "references": {
                        "positionBar": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/rict-text/rich-text.tsx",
                            "id": "src/components/rict-text/rich-text.tsx::positionBar"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "positionBar is the prop to define max height of component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "position-bar",
                "defaultValue": "'top'"
            },
            "dataTest": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Data test is the prop to specifically test the component action object."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "buttomBoldActive": {},
            "buttomItalicActive": {},
            "buttomStrikeActive": {},
            "buttomUnderlineActive": {},
            "buttomCodeActive": {},
            "buttomLinkActive": {},
            "buttomLinkValidDisabled": {},
            "buttomAlignLeftActive": {},
            "buttomAlignCenterActive": {},
            "buttomAlignRightActive": {},
            "buttomUnorderedListActive": {},
            "buttomOrderedListActive": {},
            "buttomQuoteActive": {},
            "buttomH1Active": {},
            "buttomH2Active": {},
            "buttomH3Active": {},
            "buttomH4Active": {},
            "buttomH5Active": {},
            "buttomH6Active": {},
            "buttomAccordionActive": {},
            "headerHeight": {},
            "hasSelectionRange": {},
            "selectedLinesList": {},
            "treeElementsEditor": {},
            "styleSectorActive": {},
            "styleOnHover": {},
            "whenSelectionLink": {},
            "linkButtonInput": {},
            "insideComponent": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsRichTextChange",
                "name": "bdsRichTextChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the value has changed."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bdsRichTextInput",
                "name": "bdsRichTextInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the input has changed."
                },
                "complexType": {
                    "original": "KeyboardEvent",
                    "resolved": "KeyboardEvent",
                    "references": {
                        "KeyboardEvent": {
                            "location": "global",
                            "id": "global::KeyboardEvent"
                        }
                    }
                }
            }, {
                "method": "bdsBlur",
                "name": "bdsBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event input onblur."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bdsFocus",
                "name": "bdsFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event input focus."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "weightButton",
                "methodName": "buttomsHeaderChanged"
            }, {
                "propName": "italicButton",
                "methodName": "buttomsHeaderChanged"
            }, {
                "propName": "strikeThroughButton",
                "methodName": "buttomsHeaderChanged"
            }, {
                "propName": "underlineButton",
                "methodName": "buttomsHeaderChanged"
            }, {
                "propName": "linkButton",
                "methodName": "buttomsHeaderChanged"
            }, {
                "propName": "codeButton",
                "methodName": "buttomsHeaderChanged"
            }, {
                "propName": "alignmentButtons",
                "methodName": "buttomsHeaderChanged"
            }, {
                "propName": "listButtons",
                "methodName": "buttomsHeaderChanged"
            }, {
                "propName": "quoteButton",
                "methodName": "buttomsHeaderChanged"
            }, {
                "propName": "headingButtons",
                "methodName": "buttomsHeaderChanged"
            }, {
                "propName": "unstyledButton",
                "methodName": "buttomsHeaderChanged"
            }, {
                "propName": "buttomAccordionActive",
                "methodName": "buttomAccordionActiveChanged"
            }, {
                "propName": "treeElementsEditor",
                "methodName": "treeElementsEditorChanged"
            }];
    }
}
