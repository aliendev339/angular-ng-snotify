import {SnotifyButton} from './SnotifyButton.interface';
import {SnotifyAnimate} from './SnotifyAnimate.interface';
import {SnotifyType} from '../types/snotify.type';
import {SafeHtml} from '@angular/platform-browser';
import {SnotifyPosition} from '../enums/SnotifyPosition.enum';

export interface SnotifyConfig {

  /**
   * Toast timeout in milliseconds.
   * Disable timeout = 0
   * @type {number}
   * @default: 2000
   */
  timeout?: number;
  /**
   * Enable/Disable progress bar.
   * Disabled if timeout is 0.
   * @type {boolean}
   * @default true
   */
  showProgressBar?: boolean;
  /**
   * Type of toast, affects toast style.
   * It's not recommended to change it.
   * Depends on toast type.
   * @type {SnotifyType}
   * @default SnotifyStyle.SIMPLE | SnotifyStyle.SUCCESS | SnotifyStyle. ERROR | SnotifyStyle.WARNING etc..
   */
  type?: SnotifyType;
  /**
   * Should toast close on click?
   * @type {boolean}
   * @default true
   */
  closeOnClick?: boolean;
  /**
   * Should timeout pause on hover?
   * @type {boolean}
   * @default true
   */
  pauseOnHover?: boolean;
  /**
   * Buttons config.
   * @type {SnotifyButton[]}
   * @default Look snotify button description
   */
  buttons?: SnotifyButton[];
  /**
   * Placeholder for Prompt toast
   * @type {string}
   * @default 'Enter answer here...'
   */
  placeholder?: string;
  /**
   * Toast title maximum length
   * @type {number}
   * @default 16
   */
  titleMaxLength?: number;
  /**
   * Toast body maximum length
   * @type {number}
   * @default 150
   */
  bodyMaxLength?: number;
  /**
   * Activate custom icon.
   * You should provide full tag, e.g.
   * ```html
   * <img src="assets/custom-icon.png"/>
   * ```
   * ```html
   * <svg x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 48 48;" xml:space="preserve" width="48px" height="48px">
   *     <g><path....../></g>
   * </svg>
   * ```
   * @type {string}
   * @default Depends on toast type. Look more in icon.component.html
   */
  icon?: string;
  /**
   * Backdrop opacity.
   * * **Range:** `0.0 - 1.0`.
   * * **Disabled:** `-1`
   * @type {number}
   * @default -1
   */
  backdrop?: number;
  /**
   * Animation config
   * @type {SnotifyAnimate}
   * @default -1
   */
  animation?: SnotifyAnimate,
  /**
   * Html string witch overrides toast content
   * @type {string | SafeHtml}
   * @default null
   */
  html?: string | SafeHtml,
  /**
   * Toasts position on screen
   * @type {SnotifyPosition}
   * @default SnotifyPosition.right_bottom
   */
  position?: SnotifyPosition;

  /**
   * Max toast items on screen.
   *
   * > For example you want to display 3 toasts max at the time. But for some purposes your system calls it 10 times.
   * >
   * > With this option, 3 toast will be shown. And after each of it will disappear, new toast from the queue will be shown.
   * @type {number}
   * @default 8
   */
  maxOnScreen?: number;
  /**
   * Max toast items at position.
   *
   * Same as maxOnScreen, but affects only current toast position (like rightBottom)
   * @type {number}
   * @default 8
   */
  maxAtPosition?: number;
  /**
   * Should new items come from top or bottom side.
   *
   * > This option created for styling purposes.
   * >
   * > For example, if your toast position is TOP-RIGHT. Its not very nice, when items comes from top and pulls down all other toasts
   * @type {number}
   * @default true
   */
  newOnTop?: boolean;
  /**
   * Toasts position on screen
   * @type {SnotifyPosition}
   * @default SnotifyPosition.right_bottom
   */
  // position?: SnotifyPosition;
  /**
   * Toast maximum height in pixels
   * @type {number}
   * @default: 300
   */
  maxHeight?: number;
}
