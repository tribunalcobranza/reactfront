import GoogleLogin from 'react-google-login';




const respuestaGoogle = (respuesta) => {
    console.log(respuesta);

    return (
        <GoogleLogin
            clientId="217863919970-rgvepe6r1hfeu40371isc5n1ih18pgpp.apps.googleusercontent.com"
            buttonText="Inicia Sesión"
            onSuccess={respuestaGoogle}
            onFailure={respuestaGoogle}
            cookiePolicy={'single_host_origin'}
        />

    );
}


export default respuestaGoogle