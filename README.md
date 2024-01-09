# Users-Card
This is a React simple Users-Card page. Im using NextJs to model some users' card info collected from an api. 

## Table of contents 

- [Welcome](#welcome)
  - [Link](#Link)
  - [Page View](#Page-View)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Welcome

Hi there🙋🏽‍♀️, just passing by to post some a User-Card-View.

### Link
- Live Site URL: [https://jaykler.github.io/Cards-View/](https://jaykler.github.io/Cards-View/)

### Page View

![image](https://github.com/Jaykler/Cards-View/assets/113323895/435bf731-e661-4b2a-a562-e0cb59a2a3b3)


## My process

### Built with
- Next.js
- CSS custom properties
- Flexbox

### What I learned

Things I kinda learned about Nextjs/React:
1. React uses components (Functions/Methods to me) which returns basically what is going to be displayed as frontend. 
2. For stilization libraries such as **Boostrap** or **Tailwind** to have css added. 
3. The manipulation of **useState** and **eseEffect** are very important to provide good calls to your web app. -(I'm still trying to understand it 😒)
4. When using Nextjs you need to have **"use client"** at the top of your page to avoid certain errors. 

Below: part of the code that still gives me headaches:

```js
  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      console.table(users);
    }
    getUser();
  }, []);
```

### Useful resources
1. For basic info about Next.js [https://nextjs.org/docs](https://nextjs.org/docs).
2. For Api [jsonplaceholder](https://jsonplaceholder.typicode.com/)

## Author

[@jaykler](https://www.frontendmentor.io/profile/Jaykler)


## Acknowledgments

Thanks to my great friend for his dedication and patience [zeniff81](https://github.com/zeniff81). Dealiing with me isn't easy🤣
