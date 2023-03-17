// import { useState, useRef, useContext } from "react";
// import { useHistory } from "react-router-dom";

// import AuthContext from "../store/auth-context";
// import classes from './SignIn.module.css'

// const SignIn = () => {
//   const history = useHistory();
//   const emailItnputRef = useRef();
//   const passwordInputRef = useRef();

//   const authCtx = useContext(AuthContext);
//   const [isLogin, setIsLogin] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//   };
//   const submitHandler = (event) => {
//     event.preventDefault();

//     const enteredEmail = emailItnputRef.current.value;
//     const enteredPassword = passwordInputRef.current.value;

//     setIsLoading(true);
//     let url;
//     if (isLogin) {
//       url =
//         "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1pnAN8dbfRuDVSE-eePzrWgh_J6PzlXM";
//     } else {
//       url =
//         "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB1pnAN8dbfRuDVSE-eePzrWgh_J6PzlXM";
//     }
//     fetch(url, {
//       method: "POST",
//       body: JSON.stringify({
//         email: enteredEmail,
//         password: enteredPassword,
//         returnSecureToken: true,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         setIsLoading(false);
//         if (res.ok) {
//           return res.json();
//         } else {
//           return res.json().then((data) => {
//             let errorMessage = "Authentication failed!";
//             if (data && data.error && data.error.message) {
//               errorMessage = data.error.message;
//             }
//             throw new Error(errorMessage);
//           });
//         }
//       })
//       .then((data) => {
//         authCtx.login(data.idToken);
//         history.replace('/');
//       })
//       .catch((err) => {
//         alert(err.message);
//       });
//   };

//   return (
//     <section className={classes.auth}>
//       <h1>{isLogin ? "Login" : "Sign Up"}</h1>
//       <form onSubmit={submitHandler}>
//         <div className={classes.control}>
//           <label htmlFor="email">Your Email</label>
//           <input type="email" id="email" required ref={emailItnputRef} />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="password">Your Password</label>
//           <input
//             type="password"
//             id="password"
//             required
//             ref={passwordInputRef}
//           />
//         </div>
//         <div className={classes.actions}>
//           {!isLoading && (
//             <button>{isLogin ? "Login" : ""}</button>
//           )}
//           {isLoading && <p>Sending request🏃...</p>}
//           <button
//             type="button"
//             className={classes.toggle}
//             onClick={switchAuthModeHandler}
//           >
//             {isLogin ? "Create new account" : "Login with existing account"}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default SignIn;

// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// const Login = ({ setToken }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const history = useHistory();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1pnAN8dbfRuDVSE-eePzrWgh_J6PzlXM/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();
//     if (data.error) {
//       setError(data.error);
//     } else {
//       localStorage.setItem("token", data.token);
//       setToken(data.token);
//       history.push("/");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <div className="error">{error}</div>}
//       <form onSubmit={handleLogin}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import LoginContext from "../store/LoginContext";


import classes from "./Login.module.css";

const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history=useHistory()

  const authCtx=useContext(LoginContext)

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPswd = passwordInputRef.current.value;

    setLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1pnAN8dbfRuDVSE-eePzrWgh_J6PzlXM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB1pnAN8dbfRuDVSE-eePzrWgh_J6PzlXM";
    }
    fetch(
      url,

      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPswd,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            //if (data && data.error && data.error.message) {
            //errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
       authCtx.login(data.idToken)
       history.replace('/Store')
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Loading..</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;

