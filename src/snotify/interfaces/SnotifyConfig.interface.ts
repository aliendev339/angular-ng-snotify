import {SnotifyButton} from './SnotifyButton.interface';
import {SnotifyAnimate} from './SnotifyAnimate.interface';
import {SnotifyType} from '../types/Snotify.type';

export interface SnotifyConfig {
  /**
   * Toast timeout in milliseconds. 0 - Disable timeout
   * Default: 2000
   */
  timeout?: number;
  /**
   * Enable/Disable progress bar. Disabled if timeout is 0.
   * Default: true
   *
   * @type {boolean}
   */
  showProgressBar?: boolean;
  /**
   * Type of toast, affects toast style.
   * It's not recommended to change it.
   * Default: Depends on toast type - success | async | error | etc...
   */
  type?: SnotifyType;
  /**
   * Enable/Disable toast close by clicking on it
   * Default: true
   * @type {boolean}
   */
  closeOnClick?: boolean;
  /**
   * Enable/Disable pause on mouse enter
   * Default: true
   */
  pauseOnHover?: boolean;
  /**
   * Buttons config.
   * Default: Confirm, Prompt `[ {text: 'Ok', action: null, bold: true}, {text: 'Cancel', action: null, bold: false} ]`
   * Default for other types: null
   * @type {SnotifyButton[]}
   */
  buttons?: SnotifyButton[];
  /**
   * Placeholder for Prompt toast
   * Default: 'Enter answer here...'
   * @type {string}
   */
  placeholder?: string;
  /**
   * Toast title maximum length
   * Default: 16
   * @type {number}
   */
  titleMaxLength?: number;
  /**
   * Toast body maximum length
   * Default: 150
   * @type {number}
   */
  bodyMaxLength?: number;
  /**
   * Activate custom icon.
   * You should provide full tag, e.g.
   * Default: Depends on toast type
   * ```
   * <img src="assets/custom-icon.png"/>
   * // or
   * <svg x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 48 48;" xml:space="preserve" width="48px" height="48px">
   * <g><path....../></g></svg>
   * ```
   * @type {string}
   */
  icon?: string;
  /**
   * Backdrop opacity. 0.0 - 1.0 | -1 = Disabled
   * Default: -1
   * @type {number}
   */
  backdrop?: number;
  /**
   * @type {SnotifyAnimate}
   */
  animation?: SnotifyAnimate
}
