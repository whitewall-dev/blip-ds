# Blip DS Component API (Web Components)

This reference is generated from `src/components.d.ts`. Defaults are not listed because they are not present in that file.

## Table of Contents
- [bds-accordion](#bds-accordion)
- [bds-accordion-body](#bds-accordion-body)
- [bds-accordion-group](#bds-accordion-group)
- [bds-accordion-header](#bds-accordion-header)
- [bds-alert](#bds-alert)
- [bds-alert-actions](#bds-alert-actions)
- [bds-alert-body](#bds-alert-body)
- [bds-alert-header](#bds-alert-header)
- [bds-autocomplete](#bds-autocomplete)
- [bds-avatar](#bds-avatar)
- [bds-avatar-group](#bds-avatar-group)
- [bds-badge](#bds-badge)
- [bds-banner](#bds-banner)
- [bds-banner-link](#bds-banner-link)
- [bds-breadcrumb](#bds-breadcrumb)
- [bds-button](#bds-button)
- [bds-button-group](#bds-button-group)
- [bds-button-icon](#bds-button-icon)
- [bds-card](#bds-card)
- [bds-card-body](#bds-card-body)
- [bds-card-color](#bds-card-color)
- [bds-card-footer](#bds-card-footer)
- [bds-card-header](#bds-card-header)
- [bds-card-subtitle](#bds-card-subtitle)
- [bds-card-title](#bds-card-title)
- [bds-carousel](#bds-carousel)
- [bds-carousel-item](#bds-carousel-item)
- [bds-checkbox](#bds-checkbox)
- [bds-chip](#bds-chip)
- [bds-chip-clickable](#bds-chip-clickable)
- [bds-chip-selected](#bds-chip-selected)
- [bds-chip-tag](#bds-chip-tag)
- [bds-counter-text](#bds-counter-text)
- [bds-data-table](#bds-data-table)
- [bds-datepicker](#bds-datepicker)
- [bds-datepicker-period](#bds-datepicker-period)
- [bds-datepicker-single](#bds-datepicker-single)
- [bds-divider](#bds-divider)
- [bds-dropdown](#bds-dropdown)
- [bds-expansion-panel](#bds-expansion-panel)
- [bds-expansion-panel-body](#bds-expansion-panel-body)
- [bds-expansion-panel-header](#bds-expansion-panel-header)
- [bds-grid](#bds-grid)
- [bds-icon](#bds-icon)
- [bds-illustration](#bds-illustration)
- [bds-image](#bds-image)
- [bds-input](#bds-input)
- [bds-input-chips](#bds-input-chips)
- [bds-input-editable](#bds-input-editable)
- [bds-input-password](#bds-input-password)
- [bds-input-phone-number](#bds-input-phone-number)
- [bds-list](#bds-list)
- [bds-list-item](#bds-list-item)
- [bds-list-item-content](#bds-list-item-content)
- [bds-loading-bar](#bds-loading-bar)
- [bds-loading-page](#bds-loading-page)
- [bds-loading-spinner](#bds-loading-spinner)
- [bds-menu](#bds-menu)
- [bds-menu-action](#bds-menu-action)
- [bds-menu-exibition](#bds-menu-exibition)
- [bds-menu-list](#bds-menu-list)
- [bds-menu-list-item](#bds-menu-list-item)
- [bds-menu-separation](#bds-menu-separation)
- [bds-modal](#bds-modal)
- [bds-modal-action](#bds-modal-action)
- [bds-modal-close-button](#bds-modal-close-button)
- [bds-nav-tree](#bds-nav-tree)
- [bds-nav-tree-group](#bds-nav-tree-group)
- [bds-nav-tree-item](#bds-nav-tree-item)
- [bds-navbar](#bds-navbar)
- [bds-navbar-content](#bds-navbar-content)
- [bds-pagination](#bds-pagination)
- [bds-paper](#bds-paper)
- [bds-progress-bar](#bds-progress-bar)
- [bds-radio](#bds-radio)
- [bds-radio-group](#bds-radio-group)
- [bds-rich-text](#bds-rich-text)
- [bds-select](#bds-select)
- [bds-select-chips](#bds-select-chips)
- [bds-select-option](#bds-select-option)
- [bds-sidebar](#bds-sidebar)
- [bds-skeleton](#bds-skeleton)
- [bds-slider](#bds-slider)
- [bds-step](#bds-step)
- [bds-stepper](#bds-stepper)
- [bds-switch](#bds-switch)
- [bds-tab](#bds-tab)
- [bds-tab-group](#bds-tab-group)
- [bds-tab-item](#bds-tab-item)
- [bds-tab-panel](#bds-tab-panel)
- [bds-table](#bds-table)
- [bds-table-body](#bds-table-body)
- [bds-table-cell](#bds-table-cell)
- [bds-table-header](#bds-table-header)
- [bds-table-row](#bds-table-row)
- [bds-table-th](#bds-table-th)
- [bds-tabs](#bds-tabs)
- [bds-test-component](#bds-test-component)
- [bds-theme-provider](#bds-theme-provider)
- [bds-toast](#bds-toast)
- [bds-toast-container](#bds-toast-container)
- [bds-tooltip](#bds-tooltip)
- [bds-typo](#bds-typo)
- [bds-upload](#bds-upload)
- [bds-warning](#bds-warning)

## bds-accordion

### Props
| Name | Type | Description |
| --- | --- | --- |
| `divisor` | `boolean` | @default true |
| `startOpen` | `boolean` | @default false |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `close` | `() => Promise<void>` |  |
| `notStart` | `() => Promise<void>` |  |
| `open` | `() => Promise<void>` |  |
| `reciveNumber` | `(number: any) => Promise<void>` |  |
| `toggle` | `() => Promise<void>` |  |

## bds-accordion-body

### Props
| Name | Type | Description |
| --- | --- | --- |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `close` | `() => Promise<void>` |  |
| `divisor` | `(valor: any) => Promise<void>` |  |
| `open` | `() => Promise<void>` |  |
| `toggle` | `() => Promise<void>` |  |

## bds-accordion-group

### Props
| Name | Type | Description |
| --- | --- | --- |
| `collapse` | `collapses` | @default 'single' |
| `divisor` | `boolean` | @default true |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `closeAll` | `(actNumber?: any) => Promise<void>` |  |
| `openAll` | `(actNumber?: any) => Promise<void>` |  |

## bds-accordion-header

### Props
| Name | Type | Description |
| --- | --- | --- |
| `accordionTitle` | `string` | Accordion Title. Used to add title in header accordion. @default null |
| `avatarName` | `string` | Avatar Name. Used to add avatar in header accordion. @default null |
| `avatarThumb` | `string` | Avatar Thumb. Used to add avatar in header accordion. @default null |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `icon` | `string` | Icon. Used to add icon in header accordion. @default null |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `close` | `() => Promise<void>` |  |
| `open` | `() => Promise<void>` |  |
| `toggle` | `() => Promise<void>` |  |

## bds-alert

### Props
| Name | Type | Description |
| --- | --- | --- |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `open` | `boolean` | Used to open/close the alert @default false |
| `position` | `string` | Define whether the component will occupy the entire screen or just the parent. @default 'fixed' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `toggle` | `() => Promise<void>` | Can be used outside to open/close the alert |

## bds-alert-actions

### Props
None.

### Events
None.

### Methods
None.

## bds-alert-body

### Props
None.

### Events
None.

### Methods
None.

## bds-alert-header

### Props
| Name | Type | Description |
| --- | --- | --- |
| `icon` | `string` | used for add icon the header. Uses the bds-icon component. @default null |
| `variant` | `AlertHeaderVariannt` | Variant. Entered as one of the variant. Can be one of: 'system', 'error', 'warning', 'delete'; @default 'system' |

### Events
None.

### Methods
None.

## bds-autocomplete

### Props
| Name | Type | Description |
| --- | --- | --- |
| `clearIconOnFocus` | `boolean` | If true, the X icon will appear only when component is focused. @default false |
| `danger` | `boolean` | Add state danger on input, use for use feedback. @default false |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disabled` | `boolean` | Disabled input. @default false |
| `errorMessage` | `string` | Indicated to pass an feeback to user. @default '' |
| `helperMessage` | `string` | Indicated to pass a help the user in complex filling. @default '' |
| `icon` | `string` | used for add icon in input left. Uses the bds-icon component. @default '' |
| `label` | `string` | label in input, with he the input size increases. @default '' |
| `loading` | `boolean` | Is Loading, is the prop to enable that the component is loading. @default false |
| `options` | `string | AutocompleteOption[]` | The options of the select Should be passed this way: options='[{"value": "Cat", "label": "Meow"}, {"value": "Dog", "label": "Woof"}]' Options can also be passed as child by using bds-select-option component, but passing as a child you may have some compatibility problems with Angular. |
| `optionsPosition` | `AutocompleteOptionsPositionType` | Set the placement of the options menu. Can be 'bottom' or 'top'. @default 'auto' |
| `placeholder` | `string` | Placeholder for native input element. @default '' |
| `searchOnlyTitle` | `boolean` | Search only the title property @default true |
| `selected` | `HTMLBdsSelectOptionElement | null` | the item selected. |
| `selectedAll` | `boolean` | Selection Title, Prop to enable title to select. @default true |
| `selectionTitle` | `string` | Selection Title, Prop to enable title to select. @default '' |
| `selectionType` | `SelectionType` | Multiselect, Prop to enable multi selections. @default 'single' |
| `success` | `boolean` | Add state success on input, use for use feedback. @default false |
| `successMessage` | `string` | Indicated to pass an feeback to user. @default '' |
| `value` | `string | null` | the value of the select. |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `cleanMultipleSelection` | `() => Promise<void>` |  |

## bds-avatar

### Props
| Name | Type | Description |
| --- | --- | --- |
| `color` | `colors` | Color, Entered as one of the color. Can be one of: 'system', 'success', 'warning', 'error', 'info'. @default 'colorLetter' |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `ellipsis` | `number` | Ellipses, serves to indicate the user number in the listing. @default null |
| `name` | `string` | Name, Inserted for highlighted osuary name. Enter the full name. @default null |
| `openUpload` | `boolean` | When set to true, allows the avatar to be clicked to select and upload an image. @default false |
| `size` | `avatarSize` | Size, Entered as one of the size. Can be one of: 'extra-small', 'small', 'standard', 'large', 'extra-large'. @default 'standard' |
| `thumbnail` | `string` | Thumbnail, Inserted to highlight user image. Url field. @default null |
| `upload` | `boolean` | Upload, Serve to enable upload function on avatar. @default false |

### Events
None.

### Methods
None.

## bds-avatar-group

### Props
| Name | Type | Description |
| --- | --- | --- |
| `canClick` | `boolean` |  |
| `size` | `avatarSize1` | Size. Entered as one of the size. Can be one of: 'extra-small', 'small', 'standard', 'large', 'extra-large'. @default 'standard' |
| `users` | `string | AvatarDataList[]` | The users of the select Should be passed this way: users='[   {"id": "1", "name": "Michael Scott", "thumbnail": "https://gcdn.pbrd.co/images/9Kt8iMvR10Lf.jpg?o=1"},   {"id": "2", "name": "Dwight Schrute", "thumbnail": "https://gcdn.pbrd.co/images/XAlbTPDwjZ2d.jpg?o=1"},   {"id": "3", "name": "Jim Halpert", "thumbnail": "https://gcdn.pbrd.co/images/tK0Ygb0KAHUm.jpg?o=1"},   {"id": "4", "name": "Pam Beesly", "thumbnail": "https://gcdn.pbrd.co/images/8NZSnCGfB9BD.jpg?o=1"},   {"id": "5", "name": "Ryan Howard", "thumbnail": "https://gcdn.pbrd.co/images/6wwIWI1EzzVq.jpg?o=1"},   {"id": "6", "name": "Andy Bernard", "thumbnail": "https://gcdn.pbrd.co/images/5dPYFWixftY4.jpg?o=1"} ]' users can also be passed as child by using bds-avatar-group component, but passing as a child you may have some compatibility problems with Angular. |

### Events
None.

### Methods
None.

## bds-badge

### Props
| Name | Type | Description |
| --- | --- | --- |
| `animation` | `boolean` | If true, actived the pulse animation. @default false |
| `color` | `string` | Set the color of the component. @default 'system' |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `icon` | `string` | Set witch icon will be render inside the component. @default null |
| `number` | `number` | Set the text in shape circle. Is just alow numbers, but if the number pass 999 a symbol '+' will be render. |
| `shape` | `Shape` | Set the shape of the component. @default 'circle' |

### Events
None.

### Methods
None.

## bds-banner

### Props
| Name | Type | Description |
| --- | --- | --- |
| `bannerAlign` | `BannerAlign` | Set the banner aligment, it can be one of: 'center', 'right' or 'left'. @default 'center' |
| `buttonClose` | `ButtonClose` | Set if show up the close button. @default 'false' |
| `context` | `Context` | Set if the banner is external or internal. @default 'outside' |
| `dtButtonClose` | `string` | Data test is the prop to specifically test the component action object. dtButtonClose is the data-test to button close. @default null |
| `variant` | `BannerVariant` | Set the banner varient, it can be 'system' or 'warning'. @default 'system' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `toggle` | `() => Promise<void>` |  |

## bds-banner-link

### Props
| Name | Type | Description |
| --- | --- | --- |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `link` | `string` | Set the link pass. |
| `target` | `targets` | Set the link pass. @default 'blank' |

### Events
None.

### Methods
None.

## bds-breadcrumb

### Props
| Name | Type | Description |
| --- | --- | --- |
| `items` | `string | Array<{ label: string` | @default [] |

### Events
None.

### Methods
None.

## bds-button

### Props
| Name | Type | Description |
| --- | --- | --- |
| `arrow` | `boolean` | The arrow button @default false |
| `bdsLoading` | `boolean` | If true, shows the loading spinner @default false |
| `bdsLoadingColor` | `colorsVariants` | If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost' @default 'main' |
| `bdsLoadingVariant` | `LoadingSpinnerVariant` | If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost' @default 'primary' |
| `block` | `boolean` | If true, the base button will be disabled. @default false |
| `color` | `string` | @default 'primary' |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disabled` | `boolean` | If true, the base button will be disabled. @default false |
| `fullWidth` | `boolean` | If true, the button will occupy 100% width with centered content. @default false |
| `groupIcon` | `boolean` | If true, groups the left icon with the label when justifyContent is 'space-between'. This keeps the left icon and text together as a single visual unit on the left side. @default false |
| `icon` | `string` | used for add icon in input left. Uses the bds-icon component. @default null |
| `iconLeft` | `string` | used for add icon in input left. Uses the bds-icon component. @default null |
| `iconRight` | `string` | used for add icon in input left. Uses the bds-icon component. @default null |
| `iconTheme` | `IconTheme` | The theme of the icon. Can be one of: 'outline', 'solid'; @default 'outline' |
| `justifyContent` | `ButtonJustifyContent` | Controls the horizontal alignment of button content. 'center' - content is centered (default) 'space-between' - left content aligned left, right content aligned right @default 'center' |
| `size` | `ButtonSize` | Size. Entered as one of the size. Can be one of: 'tall', 'standard', 'short'; @default 'medium' |
| `type` | `ButtonType` | The type of the button. Can be one of: 'button', 'submit', 'reset'; @default 'button' |
| `typeIcon` | `IconType` | The type of the icon. Can be one of: 'icon', 'logo', 'emoji'; @default 'icon' |
| `variant` | `ButtonVariant` | Variant. Entered as one of the variant. Can be one of: 'primary', 'secondary', 'ghost', 'dashed'; @default 'solid' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `isActive` | `(value: any) => Promise<void>` |  |
| `setColor` | `(color: "primary" | "content" | "negative" | "positive") => Promise<void>` |  |
| `setDirection` | `(direction: "row" | "column") => Promise<void>` |  |
| `setPosition` | `(position: "first" | "last" | "middle") => Promise<void>` |  |
| `setSize` | `(size: ButtonSize) => Promise<void>` |  |
| `setVariant` | `(variant: ButtonVariant) => Promise<void>` |  |

## bds-button-group

### Props
| Name | Type | Description |
| --- | --- | --- |
| `color` | `string` | Color scheme for the buttons. Default is 'primary'. @default 'primary' |
| `direction` | `direction` | Direction of the button group layout. Can be one of: 'row', 'column'. @default 'row' |
| `multiple` | `boolean` | Allows multiple buttons to be selected simultaneously if true. @default false |
| `size` | `ButtonSize1` | Size of the buttons. Can be one of: 'medium', 'large'. @default 'medium' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `activateButton` | `(index: number) => Promise<void>` |  |

## bds-button-icon

### Props
| Name | Type | Description |
| --- | --- | --- |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disabled` | `boolean` | If true, the base button will be disabled. @default false |
| `icon` | `string` | used for add icon in input left. Uses the bds-icon component. @default null |
| `iconTheme` | `ButtonIconTheme` | The theme of the icon. Can be one of: 'outline', 'solid'; @default 'outline' |
| `size` | `IconButtonSize` | Size. Entered as one of the size. Can be one of: 'tall', 'standard', 'short'; @default 'standard' |
| `variant` | `IconButtonVariant` | Variant. Entered as one of the variant. Can be one of: 'primary', 'secondary', 'ghost', 'dashed'; @default 'primary' |

### Events
None.

### Methods
None.

## bds-card

### Props
| Name | Type | Description |
| --- | --- | --- |
| `bgColor` | `PaperBackground` | Prop for set the background color. @default 'surface-1' |
| `borderColor` | `BorderColor` | Prop for set the border color. @default null |
| `clickable` | `boolean` | If the prop is true, the component will be clickable. @default false |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `height` | `string` | Prop for set the height of the component. @default null |
| `selectable` | `boolean` | Prop for set the background color. @default false |
| `width` | `string` | Prop for set the width of the component. @default 'fit-content' |

### Events
None.

### Methods
None.

## bds-card-body

### Props
None.

### Events
None.

### Methods
None.

## bds-card-color

### Props
| Name | Type | Description |
| --- | --- | --- |
| `gradient` | `boolean` | Specifies if the hex is a linear gradient @default false |
| `hex` | `string` | Specifies HEX color, use Figma docs in Blip DS. |
| `lightText` | `boolean` | If true, the text will be white @default false |
| `name` | `string` | Specifies name color, use Figma docs in Blip DS. |
| `variable` | `string` | Specifies variabel sass color, _variables.scss. |

### Events
None.

### Methods
None.

## bds-card-footer

### Props
| Name | Type | Description |
| --- | --- | --- |
| `align` | `justifyContent` | Prop for internal elements alignment. Will follow the same values of css. @default 'flex-end' |

### Events
None.

### Methods
None.

## bds-card-header

### Props
| Name | Type | Description |
| --- | --- | --- |
| `align` | `justifyContent1` | Prop for internal elements alignment. Will follow the same values of css. @default 'space-between' |

### Events
None.

### Methods
None.

## bds-card-subtitle

### Props
| Name | Type | Description |
| --- | --- | --- |
| `text` | `string` | Set the card subtitle. |

### Events
None.

### Methods
None.

## bds-card-title

### Props
| Name | Type | Description |
| --- | --- | --- |
| `text` | `string` | Set the card title. |

### Events
None.

### Methods
None.

## bds-carousel

### Props
| Name | Type | Description |
| --- | --- | --- |
| `arrows` | `arrows` | arrows. Prop to select type of arrows in component. Are available "outside" | "inside" | "none". @default 'outside' |
| `autoHeight` | `boolean` | autoHeight. Prop to Enable it if you want the component to adjust its height relative to the active items.. @default false |
| `autoplay` | `boolean` | Autoplay. Prop to Enable component autoplay. @default false |
| `autoplayHoverPause` | `boolean` | AutoplayHoverPause. Prop to Enable it if you will have the function to pause autoplay when on hover. @default false |
| `autoplayTimeout` | `number` | AutoplayTimeout. Prop to Choose the Autoplay time in milliseconds, ex: 5000. @default 5000 |
| `bullets` | `boolean | bullets` | Bullet. Prop to Enable component bullets navigation. @default 'outside' |
| `bulletsPosition` | `bulletsPositions` | Bullet. Prop to Enable component bullets navigation. @default 'center' |
| `dtButtonNext` | `string` | Data test is the prop to specifically test the component action object. dtButtonNext is the data-test to button next. @default null |
| `dtButtonPrev` | `string` | Data test is the prop to specifically test the component action object. dtButtonPrev is the data-test to button prev. @default null |
| `dtSlideContent` | `string` | Data test is the prop to specifically test the component action object. dtSlideContent is the data-test to slide action. @default null |
| `gap` | `gap` | Gap. Prop to Select the gap distance between items. @default 'none' |
| `grab` | `boolean` | Grab. Prop to enable function of grab in carousel. @default true |
| `infiniteLoop` | `boolean` | InfiniteLoop. Prop to Enable if the component will have infinite loop. @default false |
| `loading` | `boolean` | Loading state. Indicates if the component is in a loading state. @default false |
| `slidePerPage` | `number` | SlidePerPage. Prop to Choose the number of slide per page you will have available in the carousel. @default 1 |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `buildCarousel` | `() => Promise<void>` |  |
| `nextSlide` | `() => Promise<void>` |  |
| `pauseAutoplay` | `() => Promise<void>` |  |
| `prevSlide` | `() => Promise<void>` |  |
| `runAutoplay` | `() => Promise<void>` |  |
| `setActivated` | `(item: number) => Promise<void>` |  |

## bds-carousel-item

### Props
| Name | Type | Description |
| --- | --- | --- |
| `bgColor` | `string` |  |
| `bgImage` | `string` |  |
| `bgImageBrightness` | `number` | @default 1 |
| `theme` | `Themes` | Set what theme will be aplyed inside the component. 'light', 'dark'; @default 'light' |

### Events
None.

### Methods
None.

## bds-checkbox

### Props
| Name | Type | Description |
| --- | --- | --- |
| `checked` | `boolean` | If `true`, the checkbox is selected. @default false |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disabled` | `boolean` | If `true`, the user cannot interact with the checkbox. @default false |
| `label` | `string` |  |
| `name` | `string` | The name of the control, which is submitted with the form data. |
| `refer` | `string` |  |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `getInputElement` | `() => Promise<HTMLInputElement>` |  |
| `getValue` | `() => Promise<boolean>` |  |
| `toggle` | `() => Promise<void>` |  |

## bds-chip

### Props
| Name | Type | Description |
| --- | --- | --- |
| `clickable` | `boolean` | When 'true' and the component is using the primary variant, a hover is added @default false |
| `danger` | `boolean` | Add state danger on chip, use for use feedback. @default false |
| `deletable` | `boolean` | When 'true', the component recive remove button and dispach event onBdsDelete @default false |
| `disabled` | `boolean` | When 'true', no events will be dispatched @default false |
| `filter` | `boolean` | Add state filter on chip whith specific color. @default false |
| `icon` | `string` | used for add icon in left container. Uses the bds-icon component. |
| `size` | `ChipSize` | Chip size. Entered as one of the size design tokens. Can be one of: "standard" and "tall" @default 'standard' |
| `variant` | `ChipVariant` | Variant. Entered as one of the variant. Can be one of: 'primary', 'default'; @default 'default' |

### Events
None.

### Methods
None.

## bds-chip-clickable

### Props
| Name | Type | Description |
| --- | --- | --- |
| `avatar` | `string` | used for add avatar left container. Uses the bds-avatar component. |
| `clickable` | `boolean` | it makes the chip clickable. @default false |
| `close` | `boolean` | used for delete the chip. @default false |
| `color` | `ColorChipClickable` | used for change the color. Uses one of them. @default 'default' |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disabled` | `boolean` | the chip gone stay disabled while this prop be true. @default false |
| `dtButtonClose` | `string` | Data test is the prop to specifically test the component action object. dtButtonClose is the data-test to button close. @default null |
| `icon` | `string` | used for add icon in left container. Uses the bds-icon component. |
| `size` | `Size` | used for change the size chip. Uses one of them. @default 'standard' |

### Events
None.

### Methods
None.

## bds-chip-selected

### Props
| Name | Type | Description |
| --- | --- | --- |
| `color` | `ColorChipSelected` | used for change the color. Uses one of them. @default 'default' |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disabled` | `boolean` | When 'true', no events will be dispatched @default false |
| `icon` | `string` | used for add icon in left container. Uses the bds-icon component. |
| `selected` | `boolean` | used for set the initial setup for true; @default false |
| `size` | `Size1` | used for change the chip size. Use one of them; @default 'standard' |

### Events
None.

### Methods
None.

## bds-chip-tag

### Props
| Name | Type | Description |
| --- | --- | --- |
| `color` | `ColorChipTag` | used for change the color. Uses one of them. @default 'default' |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `icon` | `string` | used for add icon in left container. Uses the bds-icon component. |

### Events
None.

### Methods
None.

## bds-counter-text

### Props
| Name | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | @default false |
| `delete` | `CounterTextRule` | @default { max: 1, min: 0 } |
| `length` | `number` |  |
| `max` | `number` |  |
| `warning` | `CounterTextRule` | @default { max: 20, min: 2 } |

### Events
None.

### Methods
None.

## bds-data-table

### Props
| Name | Type | Description |
| --- | --- | --- |
| `actionArea` | `boolean` | Prop to activate the possibility of use chip in any column. |
| `avatar` | `boolean` | Prop to activate the possibility of use avatar in any column. @default false |
| `chips` | `boolean` | Prop to activate the possibility of use chip in any column. @default false |
| `column` | `string` | Prop to recive the header and configuration of table. |
| `options` | `string` | Prop to recive the content of the table. |
| `sorting` | `boolean` | Prop to activate the sorting. @default false |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `deleteItem` | `(index: number) => Promise<void>` |  |

## bds-datepicker

### Props
| Name | Type | Description |
| --- | --- | --- |
| `disabled` | `boolean` | Disabled input. @default false |
| `dtButtonClear` | `string` | Data test is the prop to specifically test the component action object. dtButtonClear is the data-test to button clear. @default null |
| `dtButtonConfirm` | `string` | Data test is the prop to specifically test the component action object. dtButtonConfirm is the data-test to button confirm. @default null |
| `dtButtonNext` | `string` | Data test is the prop to specifically test the component action object. dtButtonNext is the data-test to button next. @default null |
| `dtButtonPrev` | `string` | Data test is the prop to specifically test the component action object. dtButtonPrev is the data-test to button prev. @default null |
| `dtInputEnd` | `string` | Data test is the prop to specifically test the component action object. dtInputEnd is the data-test to input end. @default null |
| `dtInputStart` | `string` | Data test is the prop to specifically test the component action object. dtInputStart is the data-test to input start. @default null |
| `dtOutzone` | `string` | Data test is the prop to specifically test the component action object. dtOutzone is the data-test to outzone. @default null |
| `dtSelectMonth` | `string` | Data test is the prop to specifically test the component action object. dtSelectMonth is the data-test to select month. @default null |
| `dtSelectYear` | `string` | Data test is the prop to specifically test the component action object. dtSelectYear is the data-test to select year. @default null |
| `endDateLimit` | `string` | EndDateLimit. Insert a limiter to select the date period. @default defaultEndDate |
| `label` | `string` | label in input, with he the input size increases. @default '' |
| `language` | `languages` | Language, Entered as one of the languages. Can be one of: 'pt_BR', 'es_ES', 'en_US'. @default 'pt_BR' |
| `message` | `string` | Message. Select type of date. @default null |
| `positionOptions` | `DropdownPostionType` | Used to set drop position @default 'auto' |
| `startDateLimit` | `string` | StartDateLimit. Insert a limiter to select the date period. @default defaultStartDate |
| `typeOfDate` | `typeDate` | TypeOfDate. Select type of date. @default 'single' |
| `valueDateSelected` | `string` | Default value input. @default null |
| `valueEndDateSelected` | `string` | Default value input. @default null |
| `variantBanner` | `BannerVariant1` | Message. Select type of date. @default 'warning' |

### Events
None.

### Methods
None.

## bds-datepicker-period

### Props
| Name | Type | Description |
| --- | --- | --- |
| `dtButtonNext` | `string` | Data test is the prop to specifically test the component action object. dtButtonNext is the data-test to button next. @default null |
| `dtButtonPrev` | `string` | Data test is the prop to specifically test the component action object. dtButtonPrev is the data-test to button prev. @default null |
| `dtSelectMonth` | `string` | Data test is the prop to specifically test the component action object. dtSelectMonth is the data-test to select month. @default null |
| `dtSelectYear` | `string` | Data test is the prop to specifically test the component action object. dtSelectYear is the data-test to select year. @default null |
| `endDate` | `DaysList` | EndDate. Insert a limiter to select the date period. @default dateToDayList(defaultEndDate) |
| `endDateSelect` | `Date` | EndDateSelect. Insert a limiter to select the date period. @default null |
| `language` | `languages` | Language, Entered as one of the languages. Can be one of: 'pt_BR', 'es_ES', 'en_US'. @default 'pt_BR' |
| `startDate` | `DaysList` | StartDate. Insert a limiter to select the date period. @default dateToDayList(defaultStartDate) |
| `startDateSelect` | `Date` | StartDateSelect. Insert a limiter to select the date period. @default null |
| `stateSelect` | `stateSelect` | EndDateSelect. Insert a limiter to select the date period. @default 'start' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `clear` | `() => Promise<void>` | Return the validity of the input. |

## bds-datepicker-single

### Props
| Name | Type | Description |
| --- | --- | --- |
| `dateSelect` | `Date` | dateSelect. Insert a limiter to select the date period. @default null |
| `dtButtonNext` | `string` | Data test is the prop to specifically test the component action object. dtButtonNext is the data-test to button next. @default null |
| `dtButtonPrev` | `string` | Data test is the prop to specifically test the component action object. dtButtonPrev is the data-test to button prev. @default null |
| `dtSelectMonth` | `string` | Data test is the prop to specifically test the component action object. dtSelectMonth is the data-test to select month. @default null |
| `dtSelectYear` | `string` | Data test is the prop to specifically test the component action object. dtSelectYear is the data-test to select year. @default null |
| `endDate` | `DaysList` | EndDate. Insert a limiter to select the date period. @default dateToDayList(defaultEndDate) |
| `language` | `languages` | Language, Entered as one of the languages. Can be one of: 'pt_BR', 'es_ES', 'en_US'. @default 'pt_BR' |
| `startDate` | `DaysList` | StartDate. Insert a limiter to select the date period. @default dateToDayList(defaultStartDate) |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `clear` | `() => Promise<void>` | Return the validity of the input. |

## bds-divider

### Props
| Name | Type | Description |
| --- | --- | --- |
| `color` | `'divider-1' | 'divider-2' | 'divider-3'` | Cor da linha, aceitando qualquer valor válido em CSS (hex, rgb, nome da cor) @default 'divider-1' |
| `orientation` | `'horizontal' | 'vertical'` | Define se o divider deve ser exibido horizontalmente ou verticalmente @default 'horizontal' |
| `styleType` | `'solid' | 'dotted' | 'dashed'` | O tipo de estilo da linha: sólida, pontilhada, tracejada @default 'solid' |

### Events
None.

### Methods
None.

## bds-dropdown

### Props
| Name | Type | Description |
| --- | --- | --- |
| `activeMode` | `activeMode` | Open. Used to open/close the dropdown. @default 'click' |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `open` | `boolean` | Open. Used to open/close the dropdown. @default false |
| `position` | `DropdownPostionType1` | Used to set drop position @default 'auto' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `setClose` | `() => Promise<void>` |  |
| `setOpen` | `() => Promise<void>` |  |
| `toggle` | `() => Promise<void>` |  |

## bds-expansion-panel

### Props
None.

### Events
None.

### Methods
None.

## bds-expansion-panel-body

### Props
| Name | Type | Description |
| --- | --- | --- |
| `open` | `boolean` | @default false |
| `text` | `string` | @default null |

### Events
None.

### Methods
None.

## bds-expansion-panel-header

### Props
| Name | Type | Description |
| --- | --- | --- |
| `text` | `string` |  |

### Events
None.

### Methods
None.

## bds-grid

### Props
| Name | Type | Description |
| --- | --- | --- |
| `alignItems` | `alignItems` |  |
| `bgColor` | `Color` |  |
| `container` | `boolean` |  |
| `containerFluid` | `boolean` |  |
| `direction` | `direction` |  |
| `flexWrap` | `flexWrap` |  |
| `gap` | `gap1` |  |
| `height` | `string` |  |
| `justifyContent` | `justifyContent2` |  |
| `lg` | `breakpoint` |  |
| `lgOffset` | `breakpoint` |  |
| `margin` | `margin` |  |
| `md` | `breakpoint` |  |
| `mdOffset` | `breakpoint` |  |
| `padding` | `padding` |  |
| `sm` | `breakpoint` |  |
| `smOffset` | `breakpoint` |  |
| `xg` | `breakpoint` |  |
| `xgOffset` | `breakpoint` |  |
| `xs` | `breakpoint` |  |
| `xsOffset` | `breakpoint` |  |
| `xxs` | `breakpoint` |  |
| `xxsOffset` | `breakpoint` |  |

### Events
None.

### Methods
None.

## bds-icon

### Props
| Name | Type | Description |
| --- | --- | --- |
| `ariaLabel` | `string` | Specifies the label to use for accessibility. Defaults to the icon name. |
| `color` | `string` | Specifies the color to use.Specifies a color to use. The default is svg. |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `flipRtl` | `boolean` | Specifies whether the icon should horizontally flip when `dir` is `"rtl"`. |
| `icon` | `any` | A combination of both `name` and `src`. If a `src` url is detected it will set the `src` property. Otherwise it assumes it's a built-in named SVG and set the `name` property. |
| `lazy` | `boolean` | If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`. @default false |
| `name` | `string` | Specifies which icon to use from the built-in set of icons. |
| `size` | `IconSize` | Icon size. Entered as one of the icon size design tokens. Can be one of: "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "brand". @default 'medium' |
| `src` | `string` | Specifies the exact `src` of an SVG file to use. |
| `theme` | `IconTheme1` | Specifies the theme to use outline or solid icons. Defaults to outline. @default 'outline' |
| `type` | `IconType1` | Specifies the type of icon. If type is set to emoji, it will be able to set only emoji names on the name property. @default 'icon' |

### Events
None.

### Methods
None.

## bds-illustration

### Props
| Name | Type | Description |
| --- | --- | --- |
| `alt` | `string` | Alternative text for the image. |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `name` | `string` | Specifies the name of illustration. Verify the names on illustration tokens. |
| `type` | `IllustrationType` | Specifies the type to use. Can be: 'default', 'screens', 'blip-solid', 'blip-outline', 'logo-integration', 'empty-states', 'brand', 'segmented', 'smartphone', 'spots'. @default 'default' |

### Events
None.

### Methods
None.

## bds-image

### Props
| Name | Type | Description |
| --- | --- | --- |
| `alt` | `string` | Alternative text for the image. |
| `brightness` | `number` | Brightness of the image. |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `height` | `string` | Height of the image. |
| `objectFit` | `ObjectFitValue` | Specifies the object-fit style for the image. Can be: 'fill', 'contain', 'cover', 'none', 'scale-down'. @default 'cover' |
| `src` | `string` | URL of the main image. |
| `width` | `string` | Width of the image. |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `loadImage` | `() => Promise<void>` |  |

## bds-input

### Props
| Name | Type | Description |
| --- | --- | --- |
| `autoCapitalize` | `InputAutocapitalize` | Defines automatic text capitalization (possible values: `on`, `off`). @default 'off' |
| `autoComplete` | `InputAutoComplete` | Defines browser autocomplete behavior (possible values: `on`, `off`). @default 'off' |
| `autoResize` | `boolean` | Defines whether the textarea should automatically resize based on content. @default true |
| `chips` | `boolean` | Defines if the input will be displayed as chips (a type of input with multiple values). |
| `cols` | `number` | Defines the number of columns for the textarea (if `textarea`). @default 0 |
| `counterLength` | `boolean` | Defines whether a character length counter will be displayed. @default false |
| `counterLengthRule` | `InputCounterLengthRules` | Defines the character length counter rule (min, max, etc). @default null |
| `danger` | `boolean` | Defines if the input is in error state. @default false |
| `dataTest` | `string` | Data test is the prop to specifically test the component action. @default null |
| `debounceDelay` | `number` | Defines the debounce delay in milliseconds for textarea auto-resize. @default 100 |
| `disabled` | `boolean` | Defines if the input is disabled. @default false |
| `emailErrorMessage` | `string` | Error message displayed when the input value is not a valid email. |
| `encode` | `boolean` | @default false |
| `errorMessage` | `string` | Error message displayed when the input value is invalid. @default '' |
| `helperMessage` | `string` | Help message displayed below the input. @default '' |
| `icon` | `string` | Name of the icon to be displayed inside the input. @default '' |
| `iconSize` | `'small' | 'medium'` | Defines the icon size (small or medium). @default 'small' |
| `inputName` | `string` | Input name, used for form identification. @default '' |
| `isSubmit` | `boolean` | Defines whether the input will be submitted when pressing Enter. @default false |
| `isTextarea` | `boolean` | Defines whether the input is a textarea. @default false |
| `label` | `string` | Label to be displayed above the input. @default '' |
| `max` | `string` | Defines the maximum allowed value for the input. |
| `maxErrorMessage` | `string` | Error message displayed when the input value doesn't meet the maximum allowed value. |
| `maxHeight` | `number` | Defines the maximum height of the textarea in pixels. @default 200 |
| `maxlength` | `number` | Defines the maximum number of characters allowed in the input. |
| `min` | `string` | Defines the minimum allowed value for the input. |
| `minErrorMessage` | `string` | Error message displayed when the input value doesn't meet the minimum allowed value. |
| `minHeight` | `number` | Defines the minimum height of the textarea in pixels. @default 60 |
| `minlength` | `number` | Defines the minimum number of characters allowed in the input. |
| `minlengthErrorMessage` | `string` | Error message displayed when the input value doesn't meet the minimum length requirement. |
| `numberErrorMessage` | `string` | Error message displayed when the input value is not a valid number. |
| `pattern` | `string` | Defines a regex pattern that the input value must follow. |
| `placeholder` | `string` | Text to be displayed as a hint or placeholder in the input. @default '' |
| `readonly` | `boolean` | Makes the input read-only. @default false |
| `required` | `boolean` | Defines if the input is required. |
| `requiredErrorMessage` | `string` | Error message displayed when the input is not filled and is required. |
| `resizable` | `boolean` | Defines whether the textarea can be manually resized by the user. @default false |
| `rows` | `number` | Defines the number of lines for the textarea (if `textarea`). @default 3 |
| `success` | `boolean` | Defines if the input is in success state. @default false |
| `successMessage` | `string` | Message displayed when the input value is valid. @default '' |
| `type` | `InputType` | Defines the input type (e.g., `text`, `password`, etc). @default 'text' |
| `value` | `string | null` | The current value of the input. @default '' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `clear` | `() => Promise<void>` | Clears the input field value. |
| `getInputElement` | `() => Promise<HTMLInputElement | HTMLTextAreaElement>` | Returns the input element of the component. |
| `isValid` | `() => Promise<boolean>` | Checks if the input field is valid. |
| `removeFocus` | `() => Promise<void>` | Removes focus from the input field. |
| `setFocus` | `() => Promise<void>` | Sets focus to the input field. |

## bds-input-chips

### Props
| Name | Type | Description |
| --- | --- | --- |
| `blurCreation` | `boolean` | When true, the press enter will be simulated on blur event. @default false |
| `chips` | `string[] | string` | The chips on the component Should be passed this way: chips='["chip1", "chip2"]' @default [] |
| `counterLength` | `boolean` | Passing true to display a counter of available size, it is necessary to pass another maxlength property. @default false |
| `danger` | `boolean` | Add state danger on input, use for use feedback. @default false |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `delimiters` | `RegExp` | The delimiter is used to add multiple chips in the same string. @default /,|;/ |
| `disableSubmit` | `boolean` | If `true`, the user cannot modify the value. @default false |
| `disabled` | `boolean` | Disabled input @default false |
| `dtButtonClose` | `string` | Data test is the prop to specifically test the component action object. dtButtonClose is the data-test to button close. @default null |
| `duplicated` | `boolean` | Do not accept duplicate chip elements. @default false |
| `errorMessage` | `string` | Indicated to pass an feedback to user. @default '' |
| `height` | `string` | Prop for set the height of the component. |
| `helperMessage` | `string` | Indicated to pass a help the user in complex filling. @default '' |
| `icon` | `string` | used for add icon in input left. Uses the bds-icon component. @default '' |
| `inputName` | `string` | Prop to insert the name of the input @default '' |
| `label` | `string` | label in input, with he the input size increases. @default '' |
| `maxChipsLength` | `number` | Set maximum length value for chips |
| `maxHeight` | `string` | Prop for set the max height of the component. |
| `maxlength` | `number` | Set maximum length value for the chip content |
| `placeholder` | `string` | A tip for the user who can enter no controls. @default '' |
| `success` | `boolean` | Add state success on input, use for use feedback. @default false |
| `successMessage` | `string` | Indicated to pass an feeback to user. @default '' |
| `type` | `InputChipsTypes` | Defining the type is important so that it is possible to carry out validations. Can be one of: 'text' and 'email; @default 'text' |
| `value` | `string | null` | The value of the input. @default '' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `add` | `(value: string) => Promise<void>` |  |
| `clear` | `() => Promise<void>` | Clear all chips |
| `get` | `() => Promise<string[]>` | Return the chips |
| `isValid` | `() => Promise<boolean>` | Return the validity of the input chips. |
| `removeFocus` | `() => Promise<void>` |  |
| `setFocus` | `() => Promise<void>` |  |

## bds-input-editable

### Props
| Name | Type | Description |
| --- | --- | --- |
| `danger` | `boolean` | Add state danger on input, use for use feedback. If true avoid save confirmation. @default false |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `dtButtonClose` | `string` | Data test is the prop to specifically test the component action object. dtButtonClose is the data-test to button close. @default null |
| `dtButtonConfirm` | `string` | Data test is the prop to specifically test the component action object. dtButtonConfirm is the data-test to button confirm. @default null |
| `dtButtonEdit` | `string` | Data test is the prop to specifically test the component action object. dtButtonEdit is the data-test to button edit. @default null |
| `errorMessage` | `string` | Indicated to pass an feeback to user. @default '' |
| `expand` | `boolean` | Defines whether the component will be expandable @default false |
| `helperMessage` | `string` | Indicated to pass a help to the user in complex filling. @default '' |
| `inputName` | `string` | Input Name @default '' |
| `maxlength` | `number` | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter. |
| `minlength` | `number` | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter. @default 0 |
| `minlengthErrorMessage` | `string` | Error message when the value is lower than the minlength |
| `placeholder` | `string` | Placeholder for native input element. @default '' |
| `requiredErrorMessage` | `string` | Error message when input is required |
| `size` | `SizeInputEditable` | Set the component size. Can be one of: 'short' | 'standard' | 'tall'; @default 'standard' |
| `success` | `boolean` | Add state success on input, use for use feedback. @default false |
| `successMessage` | `string` | Indicated to pass an feeback to user. @default '' |
| `value` | `string | null` | The value of the input. @default '' |

### Events
None.

### Methods
None.

## bds-input-password

### Props
| Name | Type | Description |
| --- | --- | --- |
| `autoCapitalize` | `InputAutocapitalize` | Capitalizes every word's second character. @default 'off' |
| `autoComplete` | `InputAutoComplete` | Hint for form autofill feature @default 'off' |
| `danger` | `boolean` | Add state danger on input, use for use feedback. @default false |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disabled` | `boolean` | Disabled input. @default false |
| `errorMessage` | `string` | Indicated to pass an feeback to user. @default '' |
| `helperMessage` | `string` | Indicated to pass a help the user in complex filling. @default '' |
| `icon` | `string` | used for add icon in input left. Uses the bds-icon component. @default '' |
| `inputName` | `string` | Input Name @default '' |
| `label` | `string` | label in input, with he the input size increases. @default '' |
| `max` | `string` | The maximum value, which must not be less than its minimum (min attribute) value. |
| `maxlength` | `number` | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter. |
| `min` | `string` | The minimum value, which must not be greater than its maximum (max attribute) value. |
| `minlength` | `number` | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter. |
| `openEyes` | `boolean` | @default false |
| `placeholder` | `string` | A tip for the user who can enter no controls. @default '' |
| `readonly` | `boolean` | If `true`, the user cannot modify the value. @default false |
| `success` | `boolean` | Add state success on input, use for use feedback. @default false |
| `successMessage` | `string` | Indicated to pass an feeback to user. @default '' |
| `value` | `string | null` | The value of the input. @default '' |

### Events
None.

### Methods
None.

## bds-input-phone-number

### Props
| Name | Type | Description |
| --- | --- | --- |
| `danger` | `boolean` | Habilita o estado "danger" no input. @default false |
| `dataTest` | `string` | Data-test para identificar o componente. @default null |
| `disabled` | `boolean` | Desabilita o input. @default false |
| `dtSelectFlag` | `string` | Data-test para o botão de seleção de bandeira. @default null |
| `errorMessage` | `string` | Mensagem de erro a ser exibida. @default '' |
| `helperMessage` | `string` | Mensagem de ajuda para o usuário. @default '' |
| `icon` | `string` | Ícone à esquerda do input. @default '' |
| `label` | `string` | Label do input. @default 'Phone number' |
| `language` | `languages1` | Valores possíveis: "pt_BR", "en_US", "es_ES". Se nenhum for informado, utiliza o arquivo padrão (countries.json). @default 'pt_BR' |
| `numberErrorMessage` | `string` | Mensagem de erro para validação numérica. |
| `required` | `boolean` | Se `true`, o valor do input será obrigatório. |
| `requiredErrorMessage` | `string` | Mensagem de erro para campo obrigatório. |
| `success` | `boolean` | Habilita o estado "success" no input. @default false |
| `successMessage` | `string` | Mensagem de sucesso a ser exibida. @default '' |
| `text` | `string` | Valor do input de telefone. @default '' |
| `value` | `string | null` | Valor do select. @default '+55' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `changeCountry` | `(code: any, isoCode: any, flag: any) => Promise<void>` |  |
| `removeFocus` | `() => Promise<void>` |  |

## bds-list

### Props
| Name | Type | Description |
| --- | --- | --- |
| `data` | `string | Data[]` | The Data of the list Should be passed this way: data='[{"value": "01","text": "Text","secondaryText": "Secondary Text","avatarName": "","avatarThumbnail": "","checked"="true","icon": "settings-builder"}, {"value": "02","text": "Text","secondaryText": "Secondary Text","avatarName": "","avatarThumbnail": "","checked"="false","icon": "settings-builder",}]' Data can also be passed as child by using bds-list-item component, but passing as a child you may have some compatibility problems with Angular. |
| `typeList` | `TypeList` | Typelist. Used to . @default null |
| `value` | `string` | The value of the selected radio |

### Events
None.

### Methods
None.

## bds-list-item

### Props
| Name | Type | Description |
| --- | --- | --- |
| `actionsButtons` | `string | string[]` | The actions buttons on the component Should be passed this way: actions-buttons='["copy", "settings-general", "more-options-horizontal"]' @default [] |
| `active` | `boolean` | Active. Used to define when the item is highlighted. @default false |
| `avatarName` | `string` | AvatarName. Used to enter the avatar name. @default null |
| `avatarThumbnail` | `string` | AvatarThumbnail. Used to insert the avatar photo. @default null |
| `borderRadius` | `boolean` | Enable rounded border on item @default false |
| `checked` | `boolean` | @default false |
| `chips` | `string | string[]` | The chips on the component Should be passed this way: chips='["chip1", "chip2"]' @default [] |
| `clickable` | `boolean` | Clickable. Used to define if the item is clickable or not. @default false |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `icon` | `string` | Icon. Used to add icon in list item. @default null |
| `secondaryText` | `string` | SecondaryText. Used to insert a secondaryText in the display item. @default null |
| `size` | `ItemSize` | Size. Entered as one of the size. Can be one of: 'tall', 'standard', 'short'; @default 'standard' |
| `text` | `string` | Text. Used to insert a text in the display item. @default null |
| `typeList` | `TypeList1` | Typelis. Used toselect type of item list. @default null |
| `value` | `string` | Value. Used to insert a value in list item. @default null |

### Events
None.

### Methods
None.

## bds-list-item-content

### Props
| Name | Type | Description |
| --- | --- | --- |
| `alignItems` | `alignItems` | @default 'flex-start' |
| `direction` | `direction` | @default 'column' |
| `flexWrap` | `flexWrap` | @default 'wrap' |
| `gap` | `gap1` |  |
| `justifyContent` | `justifyContent2` | @default 'flex-start' |

### Events
None.

### Methods
None.

## bds-loading-bar

### Props
| Name | Type | Description |
| --- | --- | --- |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `percent` | `number` | Percent, property to enter the loading bar status percentage value. @default 0 |
| `size` | `loadingBarSize` | Size, property to define size of component. @default 'default' |
| `text` | `string` | Text, property to enable the bar info text. @default '' |

### Events
None.

### Methods
None.

## bds-loading-page

### Props
| Name | Type | Description |
| --- | --- | --- |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |

### Events
None.

### Methods
None.

## bds-loading-spinner

### Props
| Name | Type | Description |
| --- | --- | --- |
| `color` | `colorsVariants1` | Color, Entered as one of the color. Can be one of: 'default', 'white'. @default 'main' |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `size` | `loadingSize` | Size, Entered as one of the size. Can be one of: 'small', 'standard', 'large'. @default 'standard' |
| `variant` | `LoadingSpinnerVariant1` | Sets the color of the spinner, can be 'primary', 'secondary' or 'ghost' @default 'primary' |

### Events
None.

### Methods
None.

## bds-menu

### Props
| Name | Type | Description |
| --- | --- | --- |
| `menu` | `string` | Menu. Used to link the minus with the action button. @default null |
| `open` | `boolean` | Open. Used to open/close the menu. @default false |
| `position` | `menuPosition` | Position. Used to position the Menu. Either on the left or on the bottom. @default 'right' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `toggle` | `() => Promise<void>` |  |

## bds-menu-action

### Props
| Name | Type | Description |
| --- | --- | --- |
| `buttonText` | `string` | ButtonText. Used to enter the display text for the item. @default '' |
| `description` | `string` | Description. Used to insert a subtitle in the display item. @default null |
| `disabled` | `boolean` | Disabled. Used to declare that the item will be disabled. @default false |
| `iconLeft` | `string` | Iconleft. Used to insert the string icon and make the icon available to the left of the item. @default null |
| `lipstick` | `boolean` | Lipstick. Used to declare that the item will be a negative/error action. @default false |
| `subMenu` | `boolean` | SubMenu. Used to declare that the button will have a submenu. @default false |
| `subtitle` | `string` | Subtitle. Used to insert a subtitle in the display item. @default null |

### Events
None.

### Methods
None.

## bds-menu-exibition

### Props
| Name | Type | Description |
| --- | --- | --- |
| `avatarName` | `string` | AvatarName. Used to enter the avatar name. @default null |
| `avatarSize` | `avatarSize2` | AvatarSize. Used to set avatar size. @default 'standard' |
| `avatarThumbnail` | `string` | AvatarThumbnail. Used to insert the avatar photo. @default null |
| `description` | `string` | Description. Used to insert a subtitle in the display item. @default null |
| `disabled` | `boolean` | Disabled. Used to declare that the item will be disabled. @default false |
| `subtitle` | `string` | Subtitle. Used to insert a subtitle in the display item. @default null |
| `value` | `string` | Value. Used to insert a title in the display item. @default null |

### Events
None.

### Methods
None.

## bds-menu-list

### Props
None.

### Events
None.

### Methods
None.

## bds-menu-list-item

### Props
| Name | Type | Description |
| --- | --- | --- |
| `color` | `string` |  |
| `icon` | `string` | used for add icon in input left. Uses the bds-icon component. |

### Events
None.

### Methods
None.

## bds-menu-separation

### Props
| Name | Type | Description |
| --- | --- | --- |
| `size` | `string` | Size. Used to set the size of the divider. @default null |
| `value` | `string` | Value. Used to insert a title to the divider. @default null |

### Events
None.

### Methods
None.

## bds-modal

### Props
| Name | Type | Description |
| --- | --- | --- |
| `closeButton` | `boolean` | Used to hide or show the close button @default true |
| `dtButtonClose` | `string` | Data test is the prop to specifically test the component action object. dtButtonClose is the data-test to button close. @default null |
| `dtOutzone` | `string` | Data test is the prop to specifically test the component action object. dtOutzone is the data-test to button close. @default null |
| `enterClose` | `boolean` | If true, the modal will close keydown Enter. @default true |
| `open` | `boolean` | Used to open/close the modal @default false |
| `outzoneClose` | `boolean` | If true, the modal will close clicking outside the component. @default true |
| `size` | `sizes` | Used to change the modal heights. @default 'fixed' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `toggle` | `() => Promise<void>` | Can be used outside to open/close the modal |

## bds-modal-action

### Props
None.

### Events
None.

### Methods
None.

## bds-modal-close-button

### Props
| Name | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Used to hide or show the close button @default true |

### Events
None.

### Methods
None.

## bds-nav-tree

### Props
| Name | Type | Description |
| --- | --- | --- |
| `collapse` | `collapses1` | Focus Selected. Used to add title in header accordion. @default 'single' |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disable` | `boolean` | Disable state. Indicates if the component is disabled. @default false |
| `icon` | `string` | Icon. Used to add icon in list item. @default null |
| `isOpen` | `boolean` | A prop for make the nav open. @default false |
| `loading` | `boolean` | Loading state. Indicates if the component is in a loading state. @default false |
| `secondaryText` | `string` | SecondaryText. Used to insert a secondaryText in the display item. @default null |
| `text` | `string` | Text. Used to insert a text in the display item. |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `close` | `() => Promise<void>` |  |
| `open` | `() => Promise<void>` |  |
| `reciveNumber` | `(number: any) => Promise<void>` |  |
| `toggle` | `() => Promise<void>` |  |

## bds-nav-tree-group

### Props
| Name | Type | Description |
| --- | --- | --- |
| `collapse` | `collapses2` | Collapse. Used to set mode of iteraction of componente when navigate with menu. You can choose a option single or multiple. @default 'single' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `closeAll` | `(actNumber?: any) => Promise<void>` |  |
| `openAll` | `(actNumber?: any) => Promise<void>` |  |

## bds-nav-tree-item

### Props
| Name | Type | Description |
| --- | --- | --- |
| `collapse` | `collapses3` | Focus Selected. Used to add title in header accordion. @default 'single' |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disable` | `boolean` | Disable state. Indicates if the component is disabled. @default false |
| `icon` | `string` | Icon. Used to add icon in list item. @default null |
| `isOpen` | `boolean` | Active. Used to define when the item is highlighted. @default false |
| `loading` | `boolean` | Loading state. Indicates if the component is in a loading state. @default false |
| `secondaryText` | `string` | SecondaryText. Used to insert a secondaryText in the display item. @default null |
| `text` | `string` | Text. Used to insert a text in the display item. |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `toggle` | `() => Promise<void>` |  |

## bds-navbar

### Props
| Name | Type | Description |
| --- | --- | --- |
| `backgroundColor` | `navbarBackground` | Width, number to define navbar width. @default 'surface-1' |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `justifyContent` | `justifyContent3` | Justify Content. Used to align itens in navbar. @default 'space-between' |
| `orientation` | `orientation` | Navbar orientation. Used to orientation the navbar. Either on the left or on the right. @default 'vertical' |

### Events
None.

### Methods
None.

## bds-navbar-content

### Props
None.

### Events
None.

### Methods
None.

## bds-pagination

### Props
| Name | Type | Description |
| --- | --- | --- |
| `dtButtonEnd` | `string` | Propriedade de teste para especificamente testar a ação do botão final. dtButtonEnd é o data-test para o botão final. @default null |
| `dtButtonInitial` | `string` | Propriedade de teste para especificamente testar a ação do botão inicial. dtButtonInitial é o data-test para o botão inicial. @default null |
| `dtButtonNext` | `string` | Propriedade de teste para especificamente testar a ação do botão de próxima página. dtButtonNext é o data-test para o botão próximo. @default null |
| `dtButtonPrev` | `string` | Propriedade de teste para especificamente testar a ação do botão de página anterior. dtButtonPrev é o data-test para o botão anterior. @default null |
| `dtSelectNumber` | `string` | Propriedade de teste para especificamente testar o seletor de número de páginas. dtSelectNumber é o data-test para o seletor de número de páginas. @default null |
| `itemsPage` | `any` |  |
| `language` | `string` | @default 'pt_BR' |
| `numberItems` | `number` |  |
| `optionsPosition` | `PaginationOptionsPositionType` | Define a posição do menu de opções. Pode ser 'bottom' ou 'top'. Padrão é 'auto', que ajusta automaticamente a posição. @default 'auto' |
| `pageCounter` | `boolean` | @default false |
| `pages` | `number` | Propriedade para receber o número total de páginas, baseado no total de itens e itens por página. |
| `startedPage` | `number` | Propriedade que define a página inicial ao renderizar o componente. |

### Events
None.

### Methods
None.

## bds-paper

### Props
| Name | Type | Description |
| --- | --- | --- |
| `bgColor` | `PaperBackground` | Prop for set the background color. @default 'surface-1' |
| `border` | `boolean` | Prop for set the border of the component. @default false |
| `borderColor` | `BorderColor` | Prop for set the border color. @default null |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `elevation` | `PaperElevation` | Size. Entered as one of the size. Can be one of: 'static', 'primary', 'secondary'; @default 'static' |
| `height` | `string` | Prop for set the height of the component. @default null |
| `width` | `string` | Prop for set the width of the component. @default null |

### Events
None.

### Methods
None.

## bds-progress-bar

### Props
| Name | Type | Description |
| --- | --- | --- |
| `color` | `progressBarColor` | Text, property to define status of component. @default 'default' |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `percent` | `number` | Percent, property to enter the progress bar status percentage value. @default 0 |
| `size` | `progressBarSize` | Size, property to define size of component. @default 'default' |
| `text` | `string` | Text, property to enable the bar info text. @default '' |

### Events
None.

### Methods
None.

## bds-radio

### Props
| Name | Type | Description |
| --- | --- | --- |
| `checked` | `boolean` | If `true`, the checkbox is selected. @default false |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disabled` | `boolean` | If `true`, the user cannot interact with the checkbox. @default false |
| `label` | `string` | label in radio, with he the input size increases. |
| `name` | `string` | The name of the control, which is submitted with the form data. |
| `refer` | `string` | Refer. Field to add refer in radio buttom. |
| `value` | `string` | The value of the input. |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `getInputElement` | `() => Promise<HTMLInputElement>` |  |
| `getValue` | `() => Promise<boolean>` |  |

## bds-radio-group

### Props
| Name | Type | Description |
| --- | --- | --- |
| `value` | `string` | The value of the selected radio |

### Events
None.

### Methods
None.

## bds-rich-text

### Props
| Name | Type | Description |
| --- | --- | --- |
| `alignmentButtons` | `boolean` | alignmentButtons to define if component has TextAlign Control. @default true |
| `codeButton` | `boolean` | codeButton to define if component has Code Control. @default true |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `headingButtons` | `boolean` | headingButtons to define if component has Heading Control. @default true |
| `height` | `string` | height is the prop to define height of component. @default null |
| `italicButton` | `boolean` | italicButton to define if component has Italic Control. @default true |
| `language` | `languages2` | Set the language for fixed texts. @default 'pt_BR' |
| `linkButton` | `boolean` | linkButton to define if component has Link Control. @default true |
| `listButtons` | `boolean` | listButtons to define if component has List Control. @default true |
| `maxHeight` | `string` | maxHeight is the prop to define max height of component. @default null |
| `positionBar` | `positionBar` | positionBar is the prop to define max height of component. @default 'top' |
| `quoteButton` | `boolean` | quoteButton to define if component has Quote Control. @default true |
| `strikeThroughButton` | `boolean` | strikeThroughbutton to define if component has Strike Control. @default true |
| `underlineButton` | `boolean` | underlineButton to define if component has Underline Control. @default true |
| `unstyledButton` | `boolean` | unstyledButton to define if component has Unstyled Control. @default true |
| `weightButton` | `boolean` | weightButton to define if component has Bold Control. @default true |

### Events
None.

### Methods
None.

## bds-select

### Props
| Name | Type | Description |
| --- | --- | --- |
| `danger` | `boolean` | Add state danger on input, use for use feedback. @default false |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disabled` | `boolean` | Disabled input. @default false |
| `errorMessage` | `string` | Indicated to pass an feeback to user. @default '' |
| `helperMessage` | `string` | Indicated to pass a help the user in complex filling. @default '' |
| `icon` | `string` | used for add icon in input left. Uses the bds-icon component. @default '' |
| `label` | `string` | label in input, with he the input size increases. @default '' |
| `options` | `string | Option[]` | The options of the select Should be passed this way: options='[{"value": "Cat", "label": "Meow"}, {"value": "Dog", "label": "Woof"}]' Options can also be passed as child by using bds-select-option component, but passing as a child you may have some compatibility problems with Angular. |
| `optionsPosition` | `SelectOptionsPositionType` | Set the placement of the options menu. Can be 'bottom' or 'top'. @default 'auto' |
| `placeholder` | `string` | Placeholder for native input element. @default '' |
| `success` | `boolean` | Add state success on input, use for use feedback. @default false |
| `successMessage` | `string` | Indicated to pass an feeback to user. @default '' |
| `value` | `any | null` | the value of the select. |

### Events
None.

### Methods
None.

## bds-select-chips

### Props
| Name | Type | Description |
| --- | --- | --- |
| `canAddNew` | `boolean` | Specify if is possible to create a new tag that is not on the options. @default true |
| `chips` | `string | string[]` | The chips on the component Should be passed this way: chips='["chip1", "chip2"]' @default [] |
| `danger` | `boolean` | Add state danger on input, use for use feedback. @default false |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `delimiters` | `RegExp` | The delimiter is used to add multiple chips in the same string. @default /,|;/ |
| `disableSubmit` | `boolean` | If `true`, the user cannot modify the value. @default false |
| `disabled` | `boolean` | Disabled input. @default false |
| `duplicated` | `boolean` | Do not accept duplicate chip elements. @default false |
| `errorMessage` | `string` | Indicated to pass an feedback to user. @default '' |
| `height` | `string` | Prop for set the height of the component. |
| `helperMessage` | `string` | Indicated to pass a help the user in complex filling. @default '' |
| `icon` | `string` | used for add icon in input left. Uses the bds-icon component. @default '' |
| `inputName` | `string` | Prop to insert the name of the input @default '' |
| `label` | `string` | label in input, with he the input size increases. @default '' |
| `maxHeight` | `string` | Prop for set the max height of the component. |
| `maxlength` | `number` | Set maximum length value for the chip content |
| `newPrefix` | `string` | Used for add prefix on new option select. @default '' |
| `notFoundMessage` | `string` | Specify if is possible to create a new tag that is not on the options. @default 'No results found' |
| `options` | `string | Option[]` | The options of the select Should be passed this way: options='[{"value": "Cat", "label": "Meow"}, {"value": "Dog", "label": "Woof"}]' Options can also be passed as child by using bds-select-option component, but passing as a child you may have some compatibility problems with Angular. |
| `optionsPosition` | `SelectOptionsPositionType` | Set the placement of the options menu. Can be 'bottom' or 'top'. @default 'auto' |
| `placeholder` | `string` | A tip for the user who can enter no controls. @default '' |
| `success` | `boolean` | Add state success on input, use for use feedback. @default false |
| `successMessage` | `string` | Indicated to pass an feeback to user. @default '' |
| `type` | `InputChipsTypes` | Defining the type is important so that it is possible to carry out validations. Can be one of: 'text' and 'email; @default 'text' |
| `value` | `string | null` | the value of the select. @default '' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `add` | `(value: string) => Promise<void>` |  |
| `clear` | `() => Promise<void>` | Clear all chips |
| `getChips` | `() => Promise<string[]>` | Return the chips |
| `isValid` | `() => Promise<boolean>` | Return the validity of the input chips. |
| `removeFocus` | `() => Promise<void>` |  |
| `setFocus` | `() => Promise<void>` |  |

## bds-select-option

### Props
| Name | Type | Description |
| --- | --- | --- |
| `bulkOption` | `string` | Quantity Description on option value, this item is locate to rigth in component. @default '' |
| `checked` | `boolean` | If `true`, the checkbox is selected. @default false |
| `danger` | `boolean` | Add state danger on input, use for use feedback. @default false |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disabled` | `boolean` | If `true`, the user cannot interact with the select option. @default false |
| `invisible` | `boolean` | Add state danger on input, use for use feedback. @default false |
| `selected` | `boolean` | The text value of the option. @default false |
| `slotAlign` | `string` | Alignment of input-left slot. The value need to be one of the values used on flexbox align-self property. @default 'center' |
| `status` | `string` | If set, a text will be displayed on the right side of the option label |
| `titleText` | `string` | If set, a title will be shown under the text |
| `typeOption` | `TypeOption` | Type Option. Used toselect type of item list. @default 'default' |
| `value` | `any` |  |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `markOff` | `() => Promise<void>` |  |
| `toMark` | `() => Promise<void>` |  |
| `toggle` | `() => Promise<void>` |  |

## bds-sidebar

### Props
| Name | Type | Description |
| --- | --- | --- |
| `background` | `sidebarBackground` | Width, number to define sidebar width. @default 'surface-2' |
| `dtButtonClose` | `string` | Data test is the prop to specifically test the component action object. dtButtonClose is the data-test to button close. @default null |
| `dtOutzone` | `string` | Data test is the prop to specifically test the component action object. dtOutzone is the data-test to button close. @default null |
| `isOpen` | `boolean` | ; isOpen. Used to open sidebar. @default this.type === 'fixed' ? true : false |
| `margin` | `boolean` | If true, a lateral margin will apear in the content. @default true |
| `sidebarPosition` | `sidebarPosition` | sidebar position. Used to position the sidebar. Either on the left or on the right. @default 'left' |
| `type` | `sidebarType` | sidebar type. Used to define how open. @default 'over' |
| `width` | `number` | Width, number to define sidebar width. @default 360 |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `toggle` | `() => Promise<void>` |  |

## bds-skeleton

### Props
| Name | Type | Description |
| --- | --- | --- |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `height` | `string` | @default '50px' |
| `shape` | `Shape1` | @default 'square' |
| `width` | `string` | @default '100%' |

### Events
None.

### Methods
None.

## bds-slider

### Props
| Name | Type | Description |
| --- | --- | --- |
| `dataMarkers` | `string | StepOption[]` | Data Markers, prop to select ype of markers. |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `label` | `boolean` | Label, Prop to enable Label. @default false |
| `markers` | `boolean` | Markers, Prop to enable markers. @default false |
| `max` | `number` | Max, property to set the maximum value of the range. |
| `min` | `number` | Min, property to set the minimum value of the range. |
| `step` | `number` | Step, property to insert steps into the input range. |
| `type` | `typeRange` | Type, prop to select type of slider. @default 'fill' |
| `value` | `number` | Value, prop to define value of input. @default this.min ? this.min : 0 |

### Events
None.

### Methods
None.

## bds-step

### Props
| Name | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Used to set the step as active @default false |
| `completed` | `boolean` | Used to complete the step @default false |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disabled` | `boolean` | Used to set the step as disabled @default false |
| `index` | `number` | Used to set the index of the steps @default 0 |
| `last` | `boolean` | Used to define the last step component on the list @default false |
| `pointer` | `boolean` | Used to set cursor pointer on the step (useful to allow clicks on the steps) @default false |

### Events
None.

### Methods
None.

## bds-stepper

### Props
None.

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `getActiveStep` | `() => Promise<number>` | Returns the active step @returns HTMLBdsStepElement |
| `resetActiveSteps` | `() => Promise<void>` | Reset all active steps @returns void |
| `resetCompletedSteps` | `() => Promise<void>` | Reset all completed steps @returns void |
| `setActiveStep` | `(index: number) => Promise<void>` | Set the active step @param index The index of the step to be set as active @returns void |
| `setCompletedStep` | `(index: number) => Promise<void>` | Set the completed step @param index The index of the step to be set as completed @returns void |

## bds-switch

### Props
| Name | Type | Description |
| --- | --- | --- |
| `checked` | `boolean` | If `true`, the switch is selected. @default false |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disabled` | `boolean` | If `true`, the user cannot interact with the switch. @default false |
| `name` | `string` | The name of the control, which is submitted with the form data. |
| `refer` | `string` | The refer of the control. |
| `size` | `SwitchSize` | Size. Entered as one of the size. Can be one of: 'tall', 'standard', 'short'; @default 'standard' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `getInputElement` | `() => Promise<HTMLInputElement>` |  |
| `getValue` | `() => Promise<boolean>` |  |

## bds-tab

### Props
| Name | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Prop to control externally if a tab will be active by default @default false |
| `group` | `string` | Specifies the Tab group. Used to link it to the TabPanel. |
| `label` | `string` | The text to be shown at the Tab |

### Events
None.

### Methods
None.

## bds-tab-group

### Props
| Name | Type | Description |
| --- | --- | --- |
| `align` | `'left' | 'center' | 'right'` | @default 'center' |
| `contentScrollable` | `boolean` | @default true |
| `dtButtonNext` | `string` | Data test is the prop to specifically test the component action object. dtButtonNext is the data-test to button next. @default null |
| `dtButtonPrev` | `string` | Data test is the prop to specifically test the component action object. dtButtonPrev is the data-test to button prev. @default null |

### Events
None.

### Methods
None.

## bds-tab-item

### Props
| Name | Type | Description |
| --- | --- | --- |
| `badge` | `boolean` | The shape of the badge to be shown at the Tab item ('circle', 'square', 'triangle', 'triangle-reverse', 'polygon'). @default false |
| `badgeAnimation` | `boolean` | The animation of the badge to be shown at the Tab item. @default false |
| `badgeColor` | `string` | The color of the badge to be shown at the Tab item. @default 'system' |
| `badgeIcon` | `string` | The icon to be shown inside the badge at the Tab item ('system', 'danger', 'warning', 'success', 'neutral') @default null |
| `badgeNumber` | `number` | The number to be shown inside the badge at the Tab item. @default null |
| `badgePosition` | `string` | The animation of the badge to be shown at the Tab item. @default 'left' |
| `badgeShape` | `string` | The shape of the badge to be shown at the Tab item ('circle', 'square', 'triangle', 'triangle-reverse', 'polygon'). @default 'circle' |
| `contentStyle` | `string` | Inline styles to be applied to the tab group content element. @default null |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disable` | `boolean` | Prop for disable the especific tab. @default false |
| `error` | `boolean` | Prop to indicate an error state for the tab. @default false |
| `headerStyle` | `string` | Inline styles to be applied to the tab group header element. @default null |
| `icon` | `string` | The icon to be shown at the Tab item. @default null |
| `iconPosition` | `string` | The position of the icon at the Tab item ('left', 'right'). @default 'left' |
| `iconTheme` | `string` | The theme of the icon at the Tab item ('solid', 'outline', 'emoji', 'logos'). @default 'outline' |
| `label` | `string` | The text to be shown at the Tab item. @default null |
| `numberElement` | `number` | Use to set number of tabItem. @default null |
| `open` | `boolean` | Used to open/close the Tab item. @default false |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `reciveNumber` | `(number: any) => Promise<void>` |  |

## bds-tab-panel

### Props
| Name | Type | Description |
| --- | --- | --- |
| `group` | `string` | Specifies the TabPanel group. Used to link it to the Tab. |

### Events
None.

### Methods
None.

## bds-table

### Props
| Name | Type | Description |
| --- | --- | --- |
| `collapse` | `boolean` | Specifies whether the table is scrollable or not. |
| `denseTable` | `boolean` | Determines if the table has a higher content density, typically resulting in more compact rows and cells. |
| `scrollable` | `boolean` | Specifies whether the table is scrollable or not. |

### Events
None.

### Methods
None.

## bds-table-body

### Props
None.

### Events
None.

### Methods
None.

## bds-table-cell

### Props
| Name | Type | Description |
| --- | --- | --- |
| `justifyContent` | `JustifyContent` | @default 'left' |
| `sortable` | `boolean` | @default false |
| `type` | `string` | @default 'text' |

### Events
None.

### Methods
None.

## bds-table-header

### Props
None.

### Events
None.

### Methods
None.

## bds-table-row

### Props
| Name | Type | Description |
| --- | --- | --- |
| `bodyCollapse` | `string` |  |
| `clickable` | `boolean` | Prop to make hover animation. @default false |
| `dataTarget` | `string` |  |
| `selected` | `boolean` | Prop to highlight the row selected. @default false |

### Events
None.

### Methods
None.

## bds-table-th

### Props
| Name | Type | Description |
| --- | --- | --- |
| `arrow` | `string` | @default '' |
| `justifyContent` | `JustifyContent1` | @default 'left' |
| `sortable` | `boolean` | @default false |

### Events
None.

### Methods
None.

## bds-tabs

### Props
| Name | Type | Description |
| --- | --- | --- |
| `align` | `'left' | 'center' | 'right'` | @default 'center' |

### Events
None.

### Methods
None.

## bds-test-component

### Props
None.

### Events
None.

### Methods
None.

## bds-theme-provider

### Props
| Name | Type | Description |
| --- | --- | --- |
| `theme` | `Themes1` | Set what theme will be aplyed inside the component. 'light', 'dark'; @default 'light' |

### Events
None.

### Methods
None.

## bds-toast

### Props
| Name | Type | Description |
| --- | --- | --- |
| `actionType` | `ActionType` | ActionType. Defines if the button should have a button or an icon. Can be one of: 'icon', 'button'; @default 'button' |
| `buttonAction` | `ButtonActionType` | Define an action to the button toast. Can be one of: 'close', 'custom'; if the action type is set to close, the button will close automatically. if the action type is set to custom, a function need to be passed when the toastButtonClick is emitted. @default 'close' |
| `buttonText` | `string` | If the action type is button, this will be the text of the button: |
| `dtButtonAction` | `string` | Data test is the prop to specifically test the component action object. dtButtonAction is the data-test to button action. @default null |
| `dtButtonClose` | `string` | Data test is the prop to specifically test the component action object. dtButtonClose is the data-test to button close. @default null |
| `duration` | `number` | Time to close the toast in seconds 0 = never close automatically (default value) @default 0 |
| `hide` | `boolean` | Controls the hide event of the component: @default false |
| `icon` | `string` | used for add the icon. Uses the bds-icon component. @default null |
| `position` | `PositionType` | The toast position on the screen. Can be one of: 'top-right', 'top-left', 'bottom-right', 'bottom-left' (default value); @default 'bottom-left' |
| `show` | `boolean` | Controls the open event of the component: @default false |
| `toastText` | `string` | The text content of the component: |
| `toastTitle` | `string` | The title of the component: |
| `variant` | `VariantType` | Variant. Defines the color of the toast. Can be one of: 'system', 'error', 'success', 'warning', 'undo', 'redo'; @default 'system' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `close` | `() => Promise<void>` | Can be used outside the component to close the toast |
| `create` | `({ actionType, buttonAction, buttonText, icon, toastText, toastTitle, variant, duration, }: CreateToastType) => Promise<void>` | Can be used outside to open the toast |

## bds-toast-container

### Props
None.

### Events
None.

### Methods
None.

## bds-tooltip

### Props
| Name | Type | Description |
| --- | --- | --- |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `disabled` | `boolean` | Used to disable tooltip when the button are avalible @default false |
| `maxWidth` | `string` | Used to set tooltip max width @default '320px' |
| `position` | `TooltipPostionType` | Used to set tooltip position @default 'left-center' |
| `tooltipText` | `string` | Used to set tooltip text @default 'Tooltip' |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `invisible` | `() => Promise<void>` | Method for change the visibility of tooltip. |
| `visible` | `() => Promise<void>` | Method for change the visibility of tooltip. |

## bds-typo

### Props
| Name | Type | Description |
| --- | --- | --- |
| `bold` | `Bold` | Bold. Entered as one of the bold. Can be one of: 'regular', 'semi-bold', 'bold', 'extra-bold'; @default null |
| `dataTest` | `string` | Data test is the prop to specifically test the component action object. @default null |
| `italic` | `boolean` | Added font style italic @default false |
| `lineHeight` | `FontLineHeight` | Line Height. Entered as one of the line hieght. Can be one of: 'none', 'small', 'simple', 'plus', 'double' @default null |
| `margin` | `boolean` | If true, adds default margin values @default true |
| `noWrap` | `boolean` | Added style no wrap @default false |
| `paragraph` | `boolean` | Tranform text in paragraph @default false |
| `tag` | `Tag` | Define element tag, must be used for acessibilty @default 'p' |
| `variant` | `FontSize` | Variant. Entered as one of the font size variant. Can be one of: 'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40'; @default 'fs-16' |

### Events
None.

### Methods
None.

## bds-upload

### Props
| Name | Type | Description |
| --- | --- | --- |
| `accept` | `string` | Used to accept a especific type of file. |
| `dataAccept` | `string[] | string` | Used to accept a especific type of file. @default [] |
| `dtButtonDelete` | `string` | Data test is the prop to specifically test the component action object. dtButtonDelete is the data-test to button clear. @default null |
| `dtInputFiles` | `string` | Data test is the prop to specifically test the component action object. dtInputFiles is the data-test to button clear. @default null |
| `dtLabelAddFile` | `string` | Data test is the prop to specifically test the component action object. dtLabelAddFile is the data-test to button clear. @default null |
| `error` | `string` | Used for add a error message. In case a verify. |
| `language` | `languages3` | Set the language for fixed texts. @default 'pt_BR' |
| `multiple` | `boolean` | Used to allow upload multiple files. |
| `subtitle` | `string` | Used for add a text on subtitle. |
| `titleName` | `string` | Used for add a text on title. |

### Events
None.

### Methods
| Name | Signature | Description |
| --- | --- | --- |
| `deleteAllFiles` | `() => Promise<void>` | Used for delete a item from the list. |
| `deleteFile` | `(index: any) => Promise<void>` | Used for delete a item from the list. |

## bds-warning

### Props
None.

### Events
None.

### Methods
None.
