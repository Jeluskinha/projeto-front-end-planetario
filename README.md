# EndPoints Api

base_url: [https://planeteryproject.herokuapp.com](https://planeteryproject.herokuapp.com/)

* All routes need AUTHENTICATION (TOKEN) , except for login and registration

## PLANETS 

### GET - ALL PLANETS

base_url/planets

```json
#response
[
	{
		"id": "0",
		"name": "Sol",
		"link": "https://solarsystem.nasa.gov/solar-system/sun/overview/",
		"image": "./planets/sol.gif",
		"resume": "O sol é a estrela central do Sistema Solar, ou seja, todos os outros corpos do nosso sistema giram ao seu redor. Sua temperatura é variada, podendo atingir até 5.505 graus Celsius na superfície e extraordinários 16 milhões de graus Celsius no núcleo. Uma viagem da Terra com destino ao Sol, em uma espaçonave, levaria cerca de 124 dias."
	},
	{
		"id": "1",
		"name": "Mercúrio",
		"link": "https://solarsystem.nasa.gov/planets/mercury/overview/",
		"image": "./planets/mercurio-unscreen.gif",
		"resume": "Mercúrio é o mais interno planeta do Sistema Solar. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os outros planetas. A sua distância do sol é de 58.000.000 km e seu período de rotação é de aproximadamente 58 dias, sendo que o período orbital dura 88 dias. Além disso, sua gravidade é de 3,7m/s² e possui uma temperatura média de 166,85 ºC."
	},
]
```
### GET - SPECIFIC PLANET

base_url/planets

```json
#response
{
		"id": "0",
		"name": "Sol",
		"link": "https://solarsystem.nasa.gov/solar-system/sun/overview/",
		"image": "./planets/sol.gif",
		"resume": "O sol é a estrela central do Sistema Solar, ou seja, todos os outros corpos do nosso sistema giram ao seu redor. Sua temperatura é variada, podendo atingir até 5.505 graus Celsius na superfície e extraordinários 16 milhões de graus Celsius no núcleo. Uma viagem da Terra com destino ao Sol, em uma espaçonave, levaria cerca de 124 dias."
}
```

## USERS

### POST - REGISTER

base_url/USERS

```json
#body
{
	"nickname": "Jonas",
	"email": "jonas@hotmail.com",
	"password": "123456",
	"type": "aluno"
}
```

```json 

#response{

	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFuYUBob3RtYWlsLmNvbSIsImlhdCI6MTY2MjEzOTMwNCwiZXhwIjoxNjYyMTQyOTA0LCJzdWIiOiJpV3NiaUE5In0.2RPR67m06gKUu8FnRsjuIDRPIeNKulROPXtwJa7ukq4",
	"user": {
		"email": "jonas@hotmail.com",
		"nickname": "Jonas",
		"type": "aluno",
		"id": "iWsbiA9"	
}
```

### POST - LOGIN 

base_url/login

```json
#body
{
	"email": "jonas@hotmail.com",
	"password": "123456"
}
```

```json

#response
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvbmFzQGhvdG1haWwuY29tIiwiaWF0IjoxNjYyMTM5MjczLCJleHAiOjE2NjIxNDI4NzMsInN1YiI6IlZkX05UMDUifQ.Fv_4pXC-I69bwS9CBfkfFEOIPQa53jE_nggaa3qVLmY",
	"user": {
		"email": "jonas@hotmail.com",
		"nickname": "Jonas",
		"type": "aluno",
		"id": "iWsbiA9"
	}
}
```

### GET - ALL USERS

base_url/users

```json
#response
[
	{
		"email": "jonas@hotmail.com",
		"password": "$2a$10$8iYzcwlOlFVl.vwdBkhUb.bA5Ic7RGq9fa0hnXdMWWJpUQLLvp61W",
		"nickname": "Jonas",
		"type": "professor",
		"id": "Vd_NT05"
	},
	{
		"email": "fernando@hotmail.com",
		"password": "$2a$10$WEpD6M12Lns2lgT8C8S9JuvIuZb7eTZeLDAOzA6j4a2Qi0v4XtZtC",
		"nickname": "Fernando",
		"type": "aluno",
		"id": "Yzkf3LI"
	}
]
```

### GET - SPECIFIC USER

base_url/users/{user_id}

```json
#response
{
	"email": "messi@hotmail.com",
	"password": "$2a$10$TeGesTsKNeKAqugJKuUlyOe16y6XUfdu145RqL4gxnudQ1nhyQKo2",
	"nickname": "Messi",
	"type": "professor",
	"id": "och1FwG"
}
```

### PATCH - EDIT USER 

base_url/users/{user_id}

```json
#body
{
	"nickname": "new nickname",
	"type": "professor"
}
```

```json
#response
{
	"email": "messi@hotmail.com",
	"password": "$2a$10$TeGesTsKNeKAqugJKuUlyOe16y6XUfdu145RqL4gxnudQ1nhyQKo2",
	"nickname": "new nickname",
	"type": "professor",
	"id": "och1FwG"
}
```

## POSTS

### GET - USER POSTS

base_url/users/{user_id}/posts

```json
#response
[
	{
		"title": "New Post",
		"Resume": "Testando",
		"userId": "och1FwG",
		"id": "GJX_-CE"
	}
]
```

### GET - ALL POSTS

base_url/posts

```json
#response
[

	{
		"id": "GJX_-CE",
		"user": {
			"user_id": "och1FwG",
			"user_nickName": "new nickname",
			"user_image": "https://pbs.twimg.com/media/EXNwfE_WoAMarG5.jpg",
			"user_type": "professor"
		},
		"tittle": "title",
		"resume": "resume"
	},
    {
		"id": "efwfe-E",
		"user": {
			"user_id": "45jywG",
			"user_nickName": "nickname",
			"user_image": "https://pbs.twimg.com/media/EXNwfE_WoAMarG5.jpg",
			"user_type": "aluno"
		},
		"tittle": "title 2",
		"resume": "resume 2"
	}
]
```

### GET - ESPECIFIC POST

base_url/posts/{post_id}

```json
#response
{
	"id": "GJX_-CE",
	"user": {
		"user_id": "och1FwG",
		"user_nickName": "Nickname",
		"user_image": "https://pbs.twimg.com/media/EXNwfE_WoAMarG5.jpg",
		"user_type": "aluno"
	},
	"tittle": "Title",
	"resume": "Resume"
}
```
### POST - CREATE POST

base_url/users/{user_id}/posts

```json
#body
{
	"title": "New Post",
	"Resume": "Resume"
}
```

```json
#response
{
	"title": "New Post",
	"Resume": "Resume",
	"userId": "och1FwG",
	"id": "GJX_-CE"
}
```
### PATCH - EDIT POST

base_url/posts/{post_id}

```json
#body
{
	"title": "changed",
	"Resume": "changed"
}
```
```json
#response
{
	"title": "changed",
	"Resume": "changed",
	"userId": "och1FwG",
	"id": "zTqxB07"
}
```

### DELTE - DELETE POST

base_url/posts/{post_id}

```json
#response
{}
```
