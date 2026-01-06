# README — Hito 4: Pipeline completo CI/CD con Render

## Descripción general
Este proyecto implementa una aplicación full stack (React + Express) y un pipeline completo de integración y despliegue continuo (CI/CD) utilizando Git y Render.
El objetivo es demostrar un flujo profesional en el que:

* El código se versiona en Git.
* Los tests se ejecutan automáticamente.
* El despliegue solo ocurre si los tests pasan.
* Existe un mecanismo de rollback.
* Todo el proceso está documentado y es reproducible.

## Requisitos previos
Antes de comenzar, asegúrate de tener instalado:

* Git
* Node.js (versión LTS)
* Una cuenta en Render
* Acceso a GitHub (u otro proveedor Git compatible con Render)

## Pasos para completar la práctica

### 1. Clonar el repositorio
Clona el repositorio del proyecto y accede a su directorio raíz:

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```

### 2. Comprobar que la aplicación funciona en local

#### 2.1. Instalar dependencias
Desde la raíz del proyecto, instala las dependencias del frontend y backend:

```bash
npm run install-all
```

#### 2.2. Ejecutar los tests del backend
Antes de desplegar, se comprueba que los tests pasan correctamente:

```bash
npm test --prefix backend
```

#### 2.3. Construir el frontend
Genera la versión de producción del frontend:

```bash
npm run build --prefix frontend
```

#### 2.4. Arrancar la aplicación en local
Levanta el servidor Express, que sirve tanto el backend como el frontend:

```bash
npm start
```

Abre el navegador en: http://localhost:3000

**Comprueba que:**
* La aplicación React se carga correctamente.
* Se muestra el mensaje enviado por el backend.

#### 2.5. Crear un repositorio propio y cambiar el remoto
Para poder trabajar de forma independiente y realizar tus propios commits, crea un repositorio nuevo y vacío en GitHub. Una vez creado, elimina el remoto original y añade tu propio repositorio como nuevo origen:

```bash
git remote remove origin
git remote add origin <URL_DE_TU_REPOSITORIO>
git branch -M main
git push -u origin main
```

### 3. Crear el servicio en Render

#### 3.1. Crear un Web Service
1.  Accede al panel de Render.
2.  Crea un nuevo Web Service.
3.  Conecta el repositorio del proyecto.

#### 3.2. Configurar el servicio
Configura el servicio con los siguientes valores:

* **Environment:** Node
* **Root Directory:** (vacío)
* **Build Command:**
```bash
npm run install-all && npm test --prefix backend && npm run build --prefix frontend
```
* **Start Command:** npm start

Esta configuración asegura que los tests se ejecutan antes del despliegue y que el proceso se cancela si fallan.

### 4. Comprobar la ejecución del pipeline en Render

#### 4.1. Lanzar un despliegue
Realiza un commit y súbelo al repositorio:

```bash
git add .
git commit -m "Deploy inicial con pipeline completo"
git push origin main
```

#### 4.2. Verificar el despliegue
En el panel de Render:
1.  Comprueba los logs de Build, Deploy y Runtime.
2.  Verifica que los tests pasan.
3.  Confirma que el despliegue se completa correctamente.
4.  Accede a la URL pública y comprueba el funcionamiento.

### 5. Introducir un fallo y realizar el rollback

#### 5.1. Introducir un error intencionado
Modifica el código para provocar un fallo y súbelo:

```bash
git add .
git commit -m "Introducir fallo para probar el rollback"
git push origin main
```

#### 5.2. Comprobar el comportamiento de Render ante el fallo
* El build falla debido al error.
* Render no despliega la nueva versión.
* La aplicación en producción sigue siendo la última versión funcional (Blue-Green Deployment).

#### 5.3. Ejecutar el rollback
Desde el panel de Render:
1.  Accede al historial de despliegues.
2.  Selecciona una versión anterior estable.
3.  Ejecuta la opción Rollback.

### 6. Comprobar que el rollback se ha realizado correctamente
Tras el rollback, verifica que la app funciona y que los logs confirman la restauración de la versión previa.

### 7. Evidencias y documentación
Se deben recoger logs de build, deploy, runtime y capturas del proceso de rollback para verificar el flujo.

## Conclusión
Este proyecto demuestra un flujo de trabajo CI/CD robusto donde los tests actúan como barrera de seguridad, garantizando la estabilidad en entornos productivos mediante automatización.
