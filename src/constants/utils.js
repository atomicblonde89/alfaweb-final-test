export const errorCodeToStringLabelFirebase = (errorCode) => {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Correo Invalido";
        case "auth/user-not-found":
            return "Cuenta con este correo no encontrada";
        case "auth/wrong-password":
            return "Contraseña Incorrecta";
        default:
            return "Correo y Contraseña Incorrecto";
    }
}