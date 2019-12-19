This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Javascript ES6

1. Crea un proyecto con create-react-app.
2. Haz que el componente de App.js sea de tipo funcional.
3. Crea una estructura de componentes en fractal, de manera que en la estructura de componentes cada uno esté en la carpeta de quien lo contiene. Para ello crearemos un componente HeaderApp, otro MainApp y otro FooterApp. Todos los componentes deberán ser funcionales. Que los componentes solo tengan un div que diga "Soy el X de la App". Importa y exporta los componentes por nombre y no por defecto.
4. Añade como propiedades al componente Header el nombre de la app y una url del logo. Elegir el logo que querais. Destructura las props al recibirlas en el HeaderApp. Añade al Header una imagen de logo y un nombre dentro de un elemento header. En el nombre de la app deberá poner Esta es la app + la prop del nombre.
5. Añade un array de links de esta manera:

```
const links = [
    { link: 'https://www.ajedreztomelloso.com/', text: 'Blog' },
    { link: 'https://www.ajedreztomelloso.com/', text: 'Prensa' },
    { link: 'https://www.ajedreztomelloso.com/', text: 'Contacta' },
    { link: 'https://www.ajedreztomelloso.com/', text: 'Términos' }
]
```

Deberá ser una prop que reciba el footer. Además añade una prop que sea copyright. Ambas las deberás destructurar en las props del footer.

6. Haz que el componente de MainApp sea una fat arrow function que devuelva un div que ponga "Esto es el Main".

# Emotion

1. Instalar Emotion en el proyecto.
2. Añadir emotion-reset al proyecto como estilo global.
3. Añadir un style-component al MainComponent que sea un elemento main con el fondo azul.
4. Añadir un componente ul como style componente que tenga fondo rojo en el Footer. Añadir otro componente que sea un <a> dentro de un <li> para los links con el fondo blanco. Tener otro a por fuera que engloble al Copyright. El <a> del Copyright no tiene que tener el fondo blanco.
5. Crear un tema para la aplicacion en el que se añada el color de la aplicacion. Este tema deberá estar en una carpeta styles dentro de la carpeta src.
6. Crear una carpeta de componentes generics donde hagamos un botón.