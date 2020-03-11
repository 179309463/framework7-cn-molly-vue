const firebaseErrorToHumanError = (errorCode, cb) => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      cb('Адрес электронной почты уже используется другой учетной записью.');
      break;
  }
};

export default firebaseErrorToHumanError;
