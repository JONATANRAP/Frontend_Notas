# 📘 Evidencia de Funcionamiento - API de Notas Estudiantiles


## ✅ Registro de Notas (POST)

Desde el formulario del frontend, el usuario puede registrar las notas de un estudiante, enviando una solicitud POST al endpoint:


### 📸 Evidencia visual del registro desde el frontend:

![Registro desde Frontend](./img/registro.jpeg)

### 🛢️ Registro guardado en la base de datos (MySQL):

> Tabla: `estudiante` 

![Datos guardados en BD](./img/bd.jpeg)

---

## 🔍 Consulta de Notas (GET)

Desde el frontend, también se puede realizar la consulta de notas por cédula del estudiante:


### 📸 Evidencia visual de la consulta:

![Consulta desde Frontend](./evidencias/consulta.jpeg)



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
