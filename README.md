# Calculadora

### Requerimiento:

- Una empresa de contaduría lleva varios años en el negocio, pero
nunca han actualizado su manera de hacer las cosas, y por esto
el más reciente CEO busca desarrollar un programa simple o una
aplicación que haga cálculos sencillos para dejar de utilizar las
molestas calculadoras manuales y pasar a una versión digital.


Por parte de nuestro HTML lo desglosamos de la siguiente manera:


Aqui vamos a encontrar la sección donde apareceran todos nuestros valores que el usuario ingrese:

![image](https://user-images.githubusercontent.com/70729836/200159456-b1322823-91f0-4666-adfe-d20cad1a67ed.png)


En la siguiente sección estan todos los botones de la calculadora para que el usuario vea donde ingresar numeros y tipos de operaciones:

![image](https://user-images.githubusercontent.com/70729836/200159637-58fa1fc4-3398-44b0-a87e-0ae7f24b2cdb.png)


Para el diseño responsivo generamos 3 tamaños, para celular, tablet y computador, en codigo se ve de la siguiente manera:

![image](https://user-images.githubusercontent.com/70729836/200159674-b006287f-0a4a-4750-9337-a3688be16612.png)

![image](https://user-images.githubusercontent.com/70729836/200159690-9831fa08-6e04-46f5-a800-43f6db5c6b9d.png)

![image](https://user-images.githubusercontent.com/70729836/200159706-49ead829-bb9a-4df1-b603-938f5631729d.png)


Ya pasando a la funcionalidad, manejamos el Javascript de la siguiente manera, primero generamos las siguientes variables sin inicializar:

![image](https://user-images.githubusercontent.com/70729836/200159882-0b1d184e-21f7-4353-907a-6e63e206fe01.png)


Luego vamos a llamar cada boton con querySelector y lo guardamos en variables:

![image](https://user-images.githubusercontent.com/70729836/200159925-6ba6bd49-ab87-443b-9e53-f8e793ddd61b.png)


Ya teniendo estos botones alojados en variables, vamos a escuchar los eventos de click para generar una acción:

![image](https://user-images.githubusercontent.com/70729836/200159957-2df5053a-808f-4b09-9d3d-23839c427f7b.png)



Por ultimo generamos la acción de cada boton que son funciones normales:

![image](https://user-images.githubusercontent.com/70729836/200160012-862d268f-f236-4e8d-86df-ade149ca97e7.png)

![image](https://user-images.githubusercontent.com/70729836/200160035-c2013dd9-5ed4-4e01-a6a8-daaa8ffbfe84.png)

![image](https://user-images.githubusercontent.com/70729836/200160042-20899fe7-8cea-4b32-89ae-a82afe26c2b8.png)

![image](https://user-images.githubusercontent.com/70729836/200160051-2d34183b-a57b-4d5d-b6ec-7659821b9660.png)

Por cada sección que se codifico, se dejo documentado para proximos desarrolladores o para la escalabilidad de la aplicación tanto en el codigo como en este README.md.
