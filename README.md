# wizChiper
**Nombre:** Luis Sanchez
**Email:** wizanchez@gmail.com

Se explicara de la estructura del aplicativo:


Se crea el proyecto con el siguiente orden:
![](https://wizanchez.com/static/chiper/cap1.png)
* **src/ :** Aca se contiene todo el proyecto, la funcionalidad
* **src/assets/ :** Todo el material publico que se interactua con la app
* **src/assets/fonts/ :** Folder para fuentes
* **src/assets/images/ :** Folder para Imagenes
* **src/assets/styles/ :** Folder para los estilos generales de la app
* **src/vendor/ :** todos los helpers de la app
* **src/vendor/hooks/ :** helpers hooks generales de la app
* **src/vendor/services/ :** folder para tener los diferentes servicios, de conecxion que se pueda trabajar (ejemplo: * reddit)
* **src/vendor/wizFrameWork/ :** helpers para la app, aca podremos encontrar el archivo que controla las peticiones http. * o para ayudas con fechas o numeros
* **src/vendor/wizFrameworkComponent/ :** helper para la app, enfocado en componenetes, aca podremos encontrar * funcionalidades para presentar mensajes, o mostrar imagenes, controlar la salida de los text
* **src/screens/ :** Aca se trabaja todo los folder de como ventana
----

## Creando una pantalla
Como se decia antes las funcionalidades de las pantallas estan en la ruta ```./src/screens/__NOMBRE_MODULO__```
Analizaremos el modulo de ```redditList```.

![](https://wizanchez.com/static/chiper/cap2.png)
* **src/screens/RedditList/RedditStack.tsx :** Todo los nombres que terminen con la palabra ```....Stack``` controla las rutas dentro de su propio modulo,
![images](https://wizanchez.com/static/chiper/cap3.png)
_Aca se inscribe todas  las pantallas que corresponde a ese modulo_
* **src/screens/RedditList/RedditListIndex.tsx :** archivo inicial para la entrada de la app, por lo general se nombre terminando con el nombre ```....Index.tsx```
![images](https://wizanchez.com/static/chiper/cap4.png)
_Aca podremos ver la estrucutra que se lleva para cadapantalla, cada pantalla tiene sus propios componentes_

----

## Explicando un componente general
Los componentes generales estan en ```./src/vendor/wizFramewokComponent/``` con el nombre del archivo de lo que se quiere agrupar
Para este ejemplo se explicara el de ```wizTemplate.tsx```, para tener templates , un esqueleto basico para la app
![images](https://wizanchez.com/static/chiper/cap5.png)
* **funcion ```wizTemplateGradient``` :** Esta funcion realiza un esqueleto basico con un fondo gradient,
* para utilizarlo en alguna pantalla unicamente se realiza el siguiente ejemplo:
```javascript
import React ,{ useState, useLayoutEffect } from 'react';
import { Text, View} from 'react-native';
import { wizTemplateGradient } from '../../vendor/wizFrameworkComponent/index';

const App = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  return (
    <wizTemplateGradient>
      <Text>{'Hola Mundo'}</Text>
    </wizTemplateGradient>
  )
}

export default App;
```

## Algunos pantallazos

Se muestra algunas pantallazos de la app
|![images](https://wizanchez.com/static/chiper/img1.PNG)|![images](https://wizanchez.com/static/chiper/img2.PNG)
| ------------- | ------------- |
|![images](https://wizanchez.com/static/chiper/img3.PNG)|![images](https://wizanchez.com/static/chiper/img4.PNG)
| ------------- | ------------- |
|![images](https://wizanchez.com/static/chiper/img5.PNG)|![images](https://wizanchez.com/static/chiper/img6.jpeg)
