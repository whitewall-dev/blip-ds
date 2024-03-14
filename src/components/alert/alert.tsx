import { Component, ComponentInterface, h, Method, Prop, Watch } from '@stencil/core';

export type collapses = 'fixed' | 'contain';
@Component({
  tag: 'bds-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class BdsAlert implements ComponentInterface {
  /**
   * Used to open/close the alert
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public open?: boolean = false;

  /**
   * Data test is the prop to specifically test the component action object.
   */
  @Prop() dataTest?: string = null;

  /**
   * Define whether the component will occupy the entire screen or just the parent.
   */
  @Prop() position?: string = 'fixed';

  /**
   * Can be used outside to open/close the alert
   */
  @Method()
  async toggle() {
    this.open = !this.open;
  }

  @Watch('open')
  protected isOpenChanged(): void {
    if (this.open) {
      document.addEventListener('keydown', this.listiner, false);
    } else document.removeEventListener('keydown', this.listiner, false);
  }

  private listiner = (event) => {
    if (event.key == 'Entar' || event.key == 'Escape') {
      this.toggle();
    }
  };

  render() {
    return (
      <div
        class={{
          alert__dialog: true,
          'alert__dialog--open': this.open,
          [`alert__dialog--${this.position}`]: true,
        }}
      >
        <div class="alert" data-test={this.dataTest}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
