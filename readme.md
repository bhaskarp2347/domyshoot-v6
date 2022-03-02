# DO MY SHOOT

### Requirements
- Install `mysql`, [Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)

- Install `nodejs`, [Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)

### Installment
- Install node modules inside `frontend` and `backend` folder.

### Deployment Database
- Create database `project_domyshoot`
- Import `database/database.sql` file in created database. [Tutorial](https://www.youtube.com/watch?v=hKyX0tnLGug)
- 

### Deployment Backend
- Make `.env` inside `backend` folder.
- Add this content to `.env` file
```apache
JWT_SECRET=1eec0c86-5814-42a9-a06d-7381768eafc4
API_TOKEN_SALT=f5d70320cd139e9a1796f18e6b84d190
HOST=0.0.0.0
PORT=5050
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_NAME=project_domyshoot
DATABASE_USERNAME=root
DATABASE_PASSWORD=""
DATABASE_SSL=false
```
- Run `npm run develop` inside `backend` folder.


### Deployment Frontend
- Make `.env` inside `backend` folder.
- Add this content to `.env` file
```apache
NEXT_PUBLIC_STRAPI_API_URL=http://(domain):5050
NEXT_FREE_CURRENCY_API_KEY=93f56a50-8423-11ec-918a-xxxxxxxxxxx
```
- Run `npm run deploy` inside `frontend` folder. 
- Run `node node_modules/next/dist/bin/next start -p 80 -H (127.0.0.1 or your host)` inside `frontend` folder.
