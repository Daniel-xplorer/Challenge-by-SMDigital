# Challenge-by-SMDigital
En esta web implementamos un sitema de manejo de inventario basico sobre un articulo (libros), mantenemos un registro seguro gracias al uso de una base de datos con cada dato correspondiente a usuarios y libros disponibles para cada uno, así como el registro de libros prestados a cada usuario

# App:

Uso de la aplicación para fines comerciales:


para iniciar la web, debe realizar un npm i en cada paquete (api, app) dentro de la linea de comandos para instalar las dependecias, seguido de inicializar el servidor con npm run (api) e igualmente en app, (tener creado la base de datos dentro de postgres llamada msdb).

## Uso General

## Rutas:

* / : Formularios
* /users : Lista de Usuarios
* /books : Lista de libros


### Formularios:

Se agregan los usuarios desde el formulario en la ruta '/' del browser para guardar usuarios de la misma manera se guardan lo libros, con cada dato pertinente en los diferentes espacios, luego en '/users' y '/books'.

### Usuarios:

Cada usuario tiene un fullname, username e id; para su respectiva identidicación, al ingresar a la ruta /users veremos cada usuario en una card con su información, los libros que este tiene en el momento, y los botones llevar libro y retornar libro; que despliega un pequeño formulario que recibirá el id del libro que tomará de la lista de libros que tengan disponibilidad, así como el id del libro que pretende entregar para el caso de retornar libro.

### Libros: 

Dentro de el catalogo de libros en la ruta /libros, podremos obsevar el detalle de cada libro al igual que la cantidad disponible.
Podremos agregar libros, con el botos agregar libros; para aumentar la cantidad de libros en general.


# Api:

Uso de api en implementación API REST:

La api rest está construida en una base de datos postgres, llamada "smdb", con una estructura de dos tablas una de libros y otra de usuarios con una asociación de muchos a muchos, ver cada modulo para leer la estructura de la base de datos y sus componentes; para las rutas tenemos una serie de rutas con utilidades practicas tando para recolección de datos del cliente y de los libros.

## Rutas:

### /user:

* get /user: obtiene los datos de todos los usuarios incluyendo las los libros que tengan en su propiedad en ese momento

* post /user/:id: Obtiene los datos de un solo usuario con los libros que tenga en su propiedad en ese momento

* post /user/add_user: Agrega un usuario, se deben pasar por body id, fullname, username

* delete /user/:id: Borra el usuario, pasando por parametro

* put /user/borrow_book: Genera la acción de prestar un libro, restando el libro al numero de libros, y agregando el libro al registro de el usuario, se debe pasar por body userId, bookId

* put /user/return_book: Genera la acción contraria a borrow_book, retrosediedo ese paso para restablecer los valores predeterminados en las tablas

### /book:

* get /book: obtiene los datos de todos los libros incluyendo las personas que poseen sus ejemplares

* post /book/add_book: agrega un nuevo libro, debe pasar por body: id, name, description, number (cantidad disponible)

* delete /delete_book/:id: Borra el registro de un libro, id del libro pasado por parametro

* put /user/add_numbers_book: Aumenta la cantidad de libros disponibles, debe pasar el id del libro por body