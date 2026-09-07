# Pr-ctica-4---De-la-Capa-de-Dominio-a-una-API-HTTP

1. Express manda los rechazos de un handler async directo al middleware de errores, sin try/catch en cada ruta. ¿Qué tendrían que agregar en cada ruta si esto no fuera así?
   R- Tendríamos que poner un try/catch en cada ruta para poder atrapar los errores y mandarlos al middleware de errores.
   
2. ¿Por qué el servicio no lanza directamente un 409 en vez de EjemplarPrestadoError?
   R- Porque el servicio solo se encarga de decir qué error pasó. El middleware es el que decide qué código HTTP mandar, en este caso el 409
   
3. Si mañana agregaran una app móvil que también consume esta API, ¿qué archivos de esta práctica tendrían que tocar?
   R- No tendríamos que cambiar mucho de la API. La app móvil usaría las mismas rutas y servicios. Solo habría que hacer la parte de la app móvil para conectarse a la API.
   
Pruebas POST
<img width="921" height="518" alt="image" src="https://github.com/user-attachments/assets/16d46d04-53aa-4314-bccf-93a104c94ae8" />
<img width="921" height="518" alt="image" src="https://github.com/user-attachments/assets/95c15205-1f81-4862-898d-673b704b0408" />
<img width="921" height="520" alt="image" src="https://github.com/user-attachments/assets/2124793a-cedc-4774-b32a-a7e2599286ef" />
<img width="921" height="520" alt="image" src="https://github.com/user-attachments/assets/198f0626-5ddc-4cbc-93e6-0ec23d4ee52b" />



Pruebas GET
<img width="921" height="518" alt="image" src="https://github.com/user-attachments/assets/76f9d5ad-951e-4aa4-910c-8c3e537cc4d6" />
<img width="921" height="518" alt="image" src="https://github.com/user-attachments/assets/aaebbcf9-e485-47ef-b0a6-dffc39673cbd" />
<img width="921" height="517" alt="image" src="https://github.com/user-attachments/assets/6acb6377-708d-423f-b3db-50fd1ac3abbc" />

















