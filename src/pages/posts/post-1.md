---
title: "Cómo uso Supabase en mis proyectos"
pubDate: 2025-07-02
description: "En esta publicación explico cómo integro Supabase en mis proyectos como alternativa moderna a Firebase."
author: "Cesar Leos"
image:
  url: "https://supabase.com/_next/image?url=%2Fimages%2Fmarketing%2Fsupabase-og-image.png&w=1200&q=75"
  alt: "Logo de Supabase sobre fondo oscuro"
tags: ["supabase", "backend", "javascript", "typescript", "api", "auth"]
---

# Cómo uso Supabase en mis proyectos

Publicado el: 2025-07-02

Bienvenido a mi primer post del blog, donde quiero contarte cómo utilizo [Supabase](https://supabase.com) como backend en varios de mis proyectos personales y profesionales. Supabase es una alternativa de código abierto a Firebase, y me ha facilitado mucho el desarrollo de APIs, autenticación, y manejo de bases de datos.

## ¿Por qué Supabase?

Estas son algunas razones por las que lo elegí:

- 🔓 **Código abierto**: Puedes auto-hospedarlo si quieres control total.
- 🧠 **Basado en PostgreSQL**: Una base sólida y flexible.
- 🔐 **Autenticación integrada**: Soporte para email, OAuth, magic links, etc.
- ⚡ **API RESTful y en tiempo real** automáticamente generadas.
- 📦 **Almacenamiento de archivos** fácil de usar.

## Cómo lo integro

1. **Registro e instalación**: Me registro en [supabase.com](https://supabase.com) y creo un nuevo proyecto. Uso sus credenciales públicas para conectarme desde el frontend.

2. **Configuración en el cliente**: En mis proyectos de TypeScript/JavaScript, instalo el paquete oficial:
   ```bash
   npm install @supabase/supabase-js

3. **Inicializo el cliente**: 
    import { createClient } from '@supabase/supabase-js'
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

4. **Uso de Auth: Por ejemplo, para registrar un usuario**:
    const { user, error } = await supabase.auth.signUp({
  email: 'usuario@example.com',
  password: 'secreto123'
})

5. **Manejo de datos: Para insertar datos**:
    const { data, error } = await supabase
  .from('usuarios')
  .insert([{ nombre: 'Juan', edad: 25 }])

## Casos de uso

- Backend para apps móviles
- Autenticación en dashboards administrativos
- Almacenamiento de imágenes de usuario
- Consultas en tiempo real con supabase.realtime

## Lo que viene