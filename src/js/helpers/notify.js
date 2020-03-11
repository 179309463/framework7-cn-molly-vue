import app from '@/js/app.js';
import { NOTIFICATION_DURATION } from '../const/index.js';

const notify = (
  text = '',
  position = 'top',
  closeButton = true,
  closeButtonText = 'Ок',
  duration = NOTIFICATION_DURATION
) => {
  app.$f7.toast
    .create({
      text: text,
      position: position,
      closeButton: closeButton,
      closeButtonText: closeButtonText,
      closeButtonColor: 'red',
      closeTimeout: duration,
      destroyOnClose: true
    })
    .open();
};

export default notify;
