# Gestion de Tareas por Consola 📒
*Es una aplicación de consola para gestionar tareas con el fin de introducirme en el desarrollo con Node.js*
## Pre-requisitos
- [Node.js](https://nodejs.org/es/download/)

## Dependencias
listado de dependencia npm
- [colors v1.4.0](https://www.npmjs.com/package/colors)
- [inquirer v8.2.0](https://www.npmjs.com/package/inquirer)
- [uuid](https://www.npmjs.com/package/uuid)
  
## Instalación
En la terminal dentro del directorio del proyecto ejecutar ↴
```bash
    npm install
```

## Ejecución
En la terminal dentro del directorio del proyecto ejecutar ↴
```bash
    node app
```

## Algunas vistas de la aplicación
Menu principal ↴
```
=========================
  Seleccione una opción  
=========================

? ¿Qué desea hacer? (Use arrow keys)
❯ 1. Crear tarea 
  2. Listar tareas 
  3. Listar tareas completadas 
  4. Listar tareas pendientes 
  5. Completar tarea(s) 
  6. Borrar tarea 
  0. Salir

```

Agregar tarea ↴
```
=========================
  Seleccione una opción  
=========================

? ¿Qué desea hacer? 1. Crear tarea
? Descripción:  Esto es una Tarea!!


? Precione ENTER para continuar  
```


Listar tareas ↴
```
=========================
  Seleccione una opción  
=========================

? ¿Qué desea hacer? 2. Listar tareas

1. Esto es una Tarea!! :: Pendiente
2. Otra Tarea :: Pendiente
3. Subir proyecto a GitHub :: Completado


? Precione ENTER para continuar  
```









Completar tareas ↴
```
=========================
  Seleccione una opción  
=========================

? ¿Qué desea hacer? 5. Completar tarea(s)
? Selecciones (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
 ◉ 1 Esto es una Tarea!!
❯◯ 2 Otra Tarea
 ◉ 3 Subir proyecto a GitHub

```
Borrar tareas ↴
```
=========================
  Seleccione una opción  
=========================

? ¿Qué desea hacer? 6. Borrar tarea
? Borrar 
  X Cancelar 
  1 Esto es una Tarea!! 
❯ 2 Otra Tarea 
  3 Subir proyecto a GitHub 

```

*⚠️  La aplicación cuenta con texto en color gracias al paquete npm colors que no pueden verse reflejado en las vistas
*