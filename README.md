# training-express
Training code to run Express REST API server with Babel running on Docker

## Requirements
 - NodeJS
 - Docker
 - Docker compose

## Steps
### 1. Clone the repository
```shell
git clone https://github.com/sebastianaf/training-express
cd training-express
```
### 2. Set environment variables
Create a `.env` from `.env.example` file in the root folder with all environment variables, this variables will be used by the containers, it need to be reached by `docker-compose.yml` file.

### 3. Change `training` and `express` names [Optional]
It's recommend to change all the names (in `docker-compose.yml`, `Dockerfile`, `package.json` and in this `README.md` file) named with `training` and `express` with your own organization name and project name.

### 4. Expose the `-ports`
Uncomment the ports flag in `docker-compose.yml` to be able for access the services.

### 5. Run
```shell
docker compose -p training-express up -d
```
After type and run the command go to `localhost:${API_PORT}`