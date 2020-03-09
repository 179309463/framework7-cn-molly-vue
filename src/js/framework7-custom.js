
import Framework7, { Device, Request, Utils } from 'framework7/framework7-lite.esm.js';
import Dialog from 'framework7/components/dialog/dialog.js';
import Popup from 'framework7/components/popup/popup.js';
import LoginScreen from 'framework7/components/login-screen/login-screen.js';
import Popover from 'framework7/components/popover/popover.js';
import Actions from 'framework7/components/actions/actions.js';
import Sheet from 'framework7/components/sheet/sheet.js';
import Toast from 'framework7/components/toast/toast.js';
import Preloader from 'framework7/components/preloader/preloader.js';
import Sortable from 'framework7/components/sortable/sortable.js';
import Swipeout from 'framework7/components/swipeout/swipeout.js';
import Accordion from 'framework7/components/accordion/accordion.js';
import VirtualList from 'framework7/components/virtual-list/virtual-list.js';
import Timeline from 'framework7/components/timeline/timeline.js';
import Tabs from 'framework7/components/tabs/tabs.js';
import Panel from 'framework7/components/panel/panel.js';
import Card from 'framework7/components/card/card.js';
import Chip from 'framework7/components/chip/chip.js';
import Form from 'framework7/components/form/form.js';
import Input from 'framework7/components/input/input.js';
import Checkbox from 'framework7/components/checkbox/checkbox.js';
import Radio from 'framework7/components/radio/radio.js';
import Toggle from 'framework7/components/toggle/toggle.js';
import Range from 'framework7/components/range/range.js';
import Stepper from 'framework7/components/stepper/stepper.js';
import SmartSelect from 'framework7/components/smart-select/smart-select.js';
import Calendar from 'framework7/components/calendar/calendar.js';
import Picker from 'framework7/components/picker/picker.js';
import InfiniteScroll from 'framework7/components/infinite-scroll/infinite-scroll.js';
import PullToRefresh from 'framework7/components/pull-to-refresh/pull-to-refresh.js';
import Lazy from 'framework7/components/lazy/lazy.js';
import DataTable from 'framework7/components/data-table/data-table.js';
import Searchbar from 'framework7/components/searchbar/searchbar.js';
import PhotoBrowser from 'framework7/components/photo-browser/photo-browser.js';
import Tooltip from 'framework7/components/tooltip/tooltip.js';
import Gauge from 'framework7/components/gauge/gauge.js';

Framework7.use([
  Dialog,
  Popup,
  LoginScreen,
  Popover,
  Actions,
  Sheet,
  Toast,
  Preloader,
  Sortable,
  Swipeout,
  Accordion,
  VirtualList,
  Timeline,
  Tabs,
  Panel,
  Card,
  Chip,
  Form,
  Input,
  Checkbox,
  Radio,
  Toggle,
  Range,
  Stepper,
  SmartSelect,
  Calendar,
  Picker,
  InfiniteScroll,
  PullToRefresh,
  Lazy,
  DataTable,
  Searchbar,
  PhotoBrowser,
  Tooltip,
  Gauge
]);

export default Framework7;
export { Device, Request, Utils };
