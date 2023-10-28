import { GoogleLogin } from 'react-google-login';

const Logout = () => {

    const clientId = "564029075525-okibkfj0rch1cql74vh9pnnhcu96sphv.apps.googleusercontent.com"

    const responseGoogle = (response: any) => {
        const access_token = response.tokenId;
        
        // Now you have the access_token to send to Django.
        // You can send it using an HTTP request to your Django backend.
      };
      
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Logout with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  )
}

export default Logout