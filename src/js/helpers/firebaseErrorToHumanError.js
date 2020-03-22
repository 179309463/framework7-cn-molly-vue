const firebaseErrorToHumanError = (errorCode, cb) => {
  switch (errorCode) {
    // Auth Errors
    case 'auth/email-already-in-use':
      cb('Адрес электронной почты уже используется другой учетной записью.');
      break;
    case 'auth/user-not-found':
      cb(
        'Нет учетной записи пользователя, соответствующей этим данным. Возможно, пользователь был удален.'
      );
      break;
    case 'auth/wrong-password':
      cb('Неверный пароль.');
      break;
  }
};

export default firebaseErrorToHumanError;
