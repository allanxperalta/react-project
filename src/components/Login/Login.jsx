import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { setToken, setUser } from '../../features/Login/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export const Login = () => {
  const dispatch =  useDispatch();
  const user = useSelector(state => state.user.user);
  const token = useSelector(state => state.user.token)
  const navigate = useNavigate();
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const loginUri = process.env.REACT_APP_URI;
  
  function handleCallbackResponse(response) {
    const userObject = jwtDecode(response.credential);
    dispatch(setToken(response.credential));
    dispatch(setUser(userObject));
  }
  
  useEffect(() => {
    /* global google */
    if(google) {
        google.accounts.id.initialize({
            client_id,
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )
    } else {
        window.location.href = loginUri;
    }
  }, []);

  useEffect(() => {
    if(Object.hasOwn(user, 'email_verified') && token) {
      user.email_verified && navigate("/");
    }
  }, [user, token]);

  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}
