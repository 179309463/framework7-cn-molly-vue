import { EMAIL_REGEX } from '../const/index.js';

const validateEmail = email => {
  return EMAIL_REGEX.test(String(email).toLowerCase());
};

export default validateEmail;
