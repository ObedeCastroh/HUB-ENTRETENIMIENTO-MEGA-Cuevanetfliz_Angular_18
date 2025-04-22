# Cuevanetfliz - Plataforma de Streaming

![Logo o Captura](captura.png)

Aplicación de streaming desarrollada con Angular 18 como parte del Sprint 2 de [Nombre del Programa].

## Características principales
- Catálogo de películas y series
- Sistema de favoritos
- Filtrado por géneros
- Autenticación de usuarios

## Tecnologías utilizadas
- Angular 18
- TypeScript 5.4
- RxJS 7.8
- SCSS

## Instalación
obtener archivos de:
https://github.com/ObedeCastroh/HUB-ENTRETENIMIENTO-MEGA-Cuevanetfliz_Angular_18/tree/main


Reporte Técnico: Implementación de Cuevanetfliz en Angular
1. Proceso de Desarrollo
1.1 Migración de JavaScript Vanilla a Angular
Estructura modular: Dividí la aplicación en componentes (header, login, content-list, etc.)

Servicios centralizados: Implementé ContentService y AuthService para manejar estado

TypeScript: Convertí todo el código JavaScript a TypeScript con tipado fuerte

1.2 Implementación de Componentes
typescript

1.3 Gestión de Estado
private usuarioLogueado = false;
private loginModalState = new BehaviorSubject<boolean>(false);

login(username: string, password: string): boolean {
  // Lógica de autenticación
}

2. Arquitectura Implementada
src/
├── app/
│   ├── components/
│   │   ├── header/             # Componente de navegación
│   │   ├── login-modal/        # Formulario de autenticación  
│   │   ├── content-list/       # Catálogo principal
│   │   ├── genre-filter/       # Filtros por categoría
│   │   └── favorites/          # Gestión de favoritos
│   ├── services/
│   │   ├── auth.service.ts     # Autenticación
│   │   └── content.service.ts  # Datos de contenido
│   └── models/                 # Interfaces TypeScript
└── assets/                     # Recursos estáticos



3. Dificultades y Soluciones
3.1 Problema: Componentes no reconocidos
Causa: Configuración incorrecta en app.module.ts


Solución:
3.2 Problema: Dependencias conflictivas
Solución:

npm install --legacy-peer-deps
npm install @fortawesome/angular-fontawesome@latest

3.3 Problema: Estilos no aplicados
Solución: Convertí CSS a SCSS y verifiqué:

// styles.scss
:root {
  --azul-oscuro: #0d1b2a;
  // Resto de variables
}


4. Metodología de Trabajo
   
Planificación:

Diagrama de componentes

Definición de servicios

Mockup de interfaces

Implementación:

Desarrollo por componentes

Integración progresiva

Commits atómicos

Pruebas:

Validación manual de funcionalidades

Pruebas de responsive design


La Autenticación real	✖no se pudo completar.


Retrospectiva Técnica: Cuevanetfliz en Angular
Lo que salió bien
1. Arquitectura del proyecto
Estructura modular limpia (components, services, models)

Separación de responsabilidades efectiva

Uso de TypeScript para tipado fuerte y mejor mantenibilidad

2. Componentes implementados
Sistema de autenticación básico funcional

Catálogo de contenido con grid responsive

Gestión de favoritos en memoria

Filtrado por géneros completamente operativo

3. Estilos y UI
Migración exitosa de CSS a SCSS

Diseño responsive que funciona en móviles y desktop

Consistencia visual mantenida durante la migración

Lo que no salió bien
1. Problemas técnicos
Conflictos de dependencias con FontAwesome

Componentes no reconocidos por errores en app.module.ts

Problemas con observables en servicios inicialmente

2. Funcionalidades pendientes
Persistencia real de favoritos (solo en memoria)

Integración con backend (actualmente mockeado)

Sistema de reproducción no implementado

3. Optimización
Carga inicial lenta por falta de lazy loading

Duplicación de código en algunos servicios

Falta de tests automatizados

Lo que puedo hacer diferente
1. Planificación inicial
Diagrama más detallado de componentes y servicios

Checklist de dependencias con versiones compatibles

Prototipo funcional antes de implementación completa

2. Desarrollo técnico
Implementar NgRx para mejor manejo de estado

Usar interceptors para manejo centralizado de errores

Lazy loading para optimización de rutas

3. Pruebas y calidad
Tests unitarios desde el inicio (Jasmine/Karma)

E2E testing con Cypress

Integración continua (GitHub Actions)

4. Documentación
Comentar código durante el desarrollo.

CHANGELOG.md para tracking de cambios.

Diagramas de arquitectura actualizados.
