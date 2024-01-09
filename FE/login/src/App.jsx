// Your component file (e.g., App.js)
import { useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from './config/firebase-config';
import axios from 'axios'
function App() {
  const auth = getAuth(app);

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;
      const Token = user.accessToken
      const nama = user.displayName
      const email = user.email
      if (result.user.accessToken) {
        const resBe = await axios.get('http://localhost:3000/loginwithgoogle', {
          headers: {
            Authorization: 'Bearer ' + Token
          }
        })

        console.log({ resBe })


        console.log('Google Sign-In Success:', email);
      }


    } catch (error) {
      console.error('Google Sign-In Error:', error.message);
    }
  };

  useEffect(() => {
    // You can add any additional initialization code or authentication state listeners here
  }, []);

  return (
    <div>
      <p>Test</p>
      <button onClick={handleClick}>Sign in with Google</button>
    </div>
  );
}

export default App;
