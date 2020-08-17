import * as functions from 'firebase-functions';
import { sendEmail } from './sendEmail';

export const sendVerificationEmail = functions.firestore
  .document('/temporaryUsers/{id}')
  .onCreate((snapshot, context) => {
    const tempUserInfo = snapshot.data();
    const { emailAddress, confirmationHash } = tempUserInfo;

    return sendEmail({
      to: emailAddress,
      from: 'robdlawsqatar@yahoo.com',
      subject: 'My Todo App - Email Verification',
      message: `Click this link to verify your email: https://us-central1-practice-aug-2020-todo-app.cloudfunctions.net/confirmEmail?conf=${confirmationHash} `,
    });
  });
