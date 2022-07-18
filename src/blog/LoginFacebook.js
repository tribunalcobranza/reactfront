import React from 'react';

import FacebookLogin from 'react-facebook-login';


const respuestaFacebook = (respuesta) => {
    console.log(respuesta);


    // const componentClicked = () => {
    //     alert("Evento onclick");
    // }

    return (
        <FacebookLogin
            appId="440029057495553"
            autoLoad={false}
            fields="name,email,picture"
            //onClick={componentClicked}
            callback={respuestaFacebook} />

    );
}

export default respuestaFacebook