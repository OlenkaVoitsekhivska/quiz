import { Injectable } from '@angular/core';
import { catchError, from, of, tap } from 'rxjs';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithRedirect,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public async signIn(email: string, password: string): Promise<any> {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed in
      const user = userCredential.user;
      return user;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }

  public signUp(email: string, password: string) {
    const auth = getAuth();
    return from(createUserWithEmailAndPassword(auth, email, password)).pipe(
      tap((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      }),
      catchError((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return of({ errorCode, errorMessage });
      })
    );
  }

  public async signInGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      // const result = await signInWithPopup(auth, provider);
      const result = await signInWithRedirect(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential_1 = GoogleAuthProvider.credentialFromError(error);
    }

    //prefferred method for mobile devices would be redirect signInWithRedirect(auth, provider);
  }

  public signOut() {
    const auth = getAuth();
    return signOut(auth);
  }
}
