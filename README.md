# Instructions

1. clone repository "p4-backend-2024" branch "main":

```bash
git clone -b main git@github.com:eduardogenari/p4-backend-2024.git
```

2. after cloning, navigate into the p4-backend-2024 directory, which contains the cloned repository:

```bash
cd p4-backend-2024
```

3. create a .env file in the root directory of the project and set environment variables PORT and DATABASE_URL within the .env file:

```bash
PORT=8888
DATABASE_URL="file:../db/dev.db"
```

4. build docker container according to the configurations specified in the compose.yml file:

```bash
sudo docker compose build 
```

5. starts docker containers in detached mode:

```bash
sudo docker compose up -d
```

6. in visual studio code, in thunder client, import collection .src/resources/thunder-collection_p4-backend-2024.json and play with the api

7. optional, check active docker image "p4-backend-2024-api":

```bash
sudo docker image list
```

8. optional, check active docker container "p4-backend-2024-api":

```bash
sudo docker ps
```

9. stop docker containers:

```bash
sudo docker compose down
```

10. alternatively, run prisma studio, a GUI tool for database management:

```bash
bunx prisma studio
```

# Backend en Typescript, Express y Prisma

Se trata de hacer un _backend_ usando Typescript, Express y Prisma. El _backend_ implementado en clase es el modelo a seguir. Para alumnos que lo hacen por primera vez y sienten algo de incomodidad, lo ideal es usar el modelo de guía y hacer un _backend_ cercano al original de tal manera que la práctica sea un repaso a fondo. Para los que estén más cómodos, lo ideal es innovar en algun aspecto y salirse parcialmente del modelo en ciertos momentos o explorar algún interés personal. El modelo de datos es directamente la práctica anterior.

Al usar Prisma, es quizás buena idea explorar proveedores de Prisma que no sean precisamente Postgres, ya que el coste de hacerlo es mínimo (aunque esto no es obligatorio para nada). Aparte de los proveedores locales alternativos a Postgres, existen también opciones en la nube equivalentes a Postgres como [PlanetScale](https://www.prisma.io/docs/guides/database/planetscale), [CockroachDB](https://www.prisma.io/docs/guides/database/cockroachdb) o [Supabase](https://www.prisma.io/docs/guides/database/supabase), bien explicadas en la documentación de Prisma.

## Entregable

Como anteriormente, para hacer esta práctica hay que:
- Hacer un _fork_ de este repositorio.
- Trabajar en el _fork_ haciendo commits regularmente (una práctica que aparece entera en un solo commit tendrá una nota muy baja o cero, hay que mostrar todo el proceso intermedio).
- Al finalizar, se debe crear un `ZIP` del repositorio (que incluya el fichero `.env`!) y entregarlo en el [Campus Online de UPC School](https://talent.upc.edu) (habrá una tarea preparada para ello).

El entregable es el código del proyecto, incluyendo:
- `docker-compose.yml` si la base de datos corre bajo Docker.
- El código completo del servidor.
- Un fichero exportado de [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) con la lista de _endpoints_ que se han probado. (Esto es **extremadamente** relevante porque la corrección del backend, de no tener este fichero, es un trabajo muchísimo más tedioso!).
- Si se necesitan credenciales para acceder a servicios de cloud (o incluso localmente), es importante incluir en el ZIP del campus el fichero `.env` con éstas. Es muy importante no subir ese fichero en GitHub (es decir, incluirlo en `.gitignore`).
