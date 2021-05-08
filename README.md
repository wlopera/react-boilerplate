# react-boilerplate
React con Webpack Base

## Librerias
- $ npm i --save-dev webpack                                      ==> Empaquetador
- $ npm i --save-dev webpack-cli                                  ==> Empaquetador comandos
- $ npm i --save-dev html-webpack-plugin                          ==> Plugin: Requerido para agregar html al proyecto empaquetado
- $ npm i --save-dev webpack-dev-server                           ==> Empaquetador que permite subir un servidor

- $ npm i --save-dev @babel/core                                  ==> Biblioteca transpilador babel
- $ npm i --save-dev @babel/cli                                   ==> Bibliote transpilador babel comandos 
- $ npm i --save-dev babel-loader                                 ==> Integrar babel con webpack
- $ npm i --save-dev @babel/preset-env                            ==> Transpilador (Compilador de JS)
- $ npm i --save-dev @babel/preset-react                          ==> Transpilador codigo de React

- $ npm i react                                                   ==> Biblioteca de React
- $ npm i react-dom                                               ==> Biblioteca de React para el navegador (dom)

## Empaquetar en desarrollo
- $ npx webpack   // opcional: --mode=development
 
## Subir servidor webpach-dev-server y decompilar
- $ npx webpack server     // opcional: --mode=development

## Empaquetar para produccion
- $ npx webpack --mode=production

## Rama fuente para hacer los cambios: 
 - task_dev_prueba_webpack_github_pages

## Crear rama solo para publicar a través de GitHub Pages
- task_dev_prueba_webpack_github_pages_1
### REQUIERE:
  - Una rama solo con (bundle,js y index.html : empaquetados) 
  - Deben estar en la raíz del proyecto
   
![Captura-1](https://user-images.githubusercontent.com/7141537/117551140-cf0f1b00-b009-11eb-9cb2-8c4de04f450b.PNG)

## Crear GitHub pages de esta rama
  - [Rama: task_dev_prueba_webpack_github_pages_1]
  - Sitio publicado: https://wlopera.github.io/react-boilerplate/

![Captura](https://user-images.githubusercontent.com/7141537/117551139-cdddee00-b009-11eb-821b-b6dd5f40c31a.PNG)


## Salida

![Captura2](https://user-images.githubusercontent.com/7141537/117551189-15fd1080-b00a-11eb-93f0-c285725dbee2.PNG)

 ## Agradecimiento aporte 
 - https://www.faztweb.com/
