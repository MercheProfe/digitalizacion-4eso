---
sidebar_position: 7
title: "1.6. Sistemas operativos"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sistemas operativos

Hasta ahora hemos estudiado los componentes físicos de un ordenador: CPU, memoria RAM, almacenamiento, GPU, puertos y periféricos.

Pero todo ese hardware necesita un software capaz de **organizarlo, controlarlo y permitirnos utilizar el equipo**. Ese software fundamental es el **sistema operativo**.

<img src="/digitalizacion-4eso/img/ud1/sistemas-operativos.png" alt="El sistema operativo como intermediario entre el usuario, las aplicaciones y el hardware" className="img-center" />

:::tip[Objetivo]

Al terminar este apartado deberías ser capaz de explicar **qué es un sistema operativo, cuáles son sus funciones principales y qué debemos tener en cuenta al elegir uno**.

:::

## 1️⃣ ¿Qué es un sistema operativo?

Un **sistema operativo (SO)** es el software principal que gestiona los recursos de un dispositivo y permite que podamos utilizarlo.

Cuando encendemos un ordenador, el sistema operativo se pone en marcha y nos proporciona un entorno desde el que podemos abrir aplicaciones, organizar archivos, conectarnos a una red, utilizar dispositivos, configurar el equipo y gestionar usuarios.

Algunos sistemas operativos de ordenadores personales son **Windows, macOS, GNU/Linux y ChromeOS**.

:::info[Idea clave]

El sistema operativo actúa como **intermediario entre el usuario, las aplicaciones y el hardware**.

:::

## 2️⃣ Las capas de un sistema informático

Podemos imaginar el funcionamiento mediante varias capas:

```text
┌─────────────────────────────┐
│           USUARIO           │
├─────────────────────────────┤
│        APLICACIONES         │
├─────────────────────────────┤
│     SISTEMA OPERATIVO       │
├─────────────────────────────┤
│          HARDWARE           │
└─────────────────────────────┘
```

Por ejemplo, cuando guardamos un documento, la aplicación solicita el servicio al sistema operativo y este gestiona el almacenamiento.

<img src="/digitalizacion-4eso/img/ud1/capas-sistema-operativo.png" alt="Esquema por capas de usuario, aplicaciones, sistema operativo y hardware" className="img-center" />

:::tip[Ejemplo]

Cuando pulsas **Guardar**, no necesitas indicar físicamente dónde debe almacenar el SSD cada dato. El sistema operativo se encarga de gestionarlo.

:::

## 3️⃣ ¿Qué hace el sistema operativo?

### 🟩 Gestiona el hardware

Controla y coordina CPU, RAM, almacenamiento, pantalla, teclado, ratón, impresoras, dispositivos USB y conexiones de red.

Para comunicarse correctamente con determinados dispositivos puede utilizar software específico denominado **controlador o driver**.

### 🟧 Ejecuta y organiza los programas

Permite iniciar, utilizar y cerrar aplicaciones y reparte recursos entre los programas que funcionan simultáneamente.

### 🟥 Gestiona archivos y carpetas

Permite crear, guardar, copiar, mover, renombrar, buscar y eliminar archivos y carpetas.

### 🟪 Gestiona usuarios y permisos

Un mismo ordenador puede ser utilizado por varias personas. Cada usuario puede disponer de su cuenta, archivos, preferencias y determinados permisos.

<img src="/digitalizacion-4eso/img/ud1/usuarios-permisos.png" alt="Ejemplo de diferentes usuarios y permisos en un ordenador" className="img-center" />

### 🟦 Gestiona la red y la seguridad

Permite configurar Ethernet, Wi-Fi y Bluetooth, además de gestionar contraseñas, permisos y actualizaciones.

:::warning[Importante]

Mantener el sistema operativo **actualizado** forma parte del mantenimiento y de la seguridad del equipo.

:::

## 4️⃣ La interfaz de usuario

La **interfaz de usuario** es la forma en la que interactuamos con el sistema.

Habitualmente utilizamos una interfaz gráfica con ventanas, iconos, menús, botones, escritorio y un gestor de archivos.

También existen interfaces basadas en comandos, donde las instrucciones se escriben mediante texto.

:::info[Recuerda]

Aunque dos sistemas operativos tengan una apariencia diferente, todos deben permitir gestionar archivos, ejecutar aplicaciones, controlar dispositivos y administrar los recursos del equipo.

:::

## 5️⃣ Sistemas operativos de escritorio

### 🟩 Windows

**Windows**, desarrollado por Microsoft, está muy extendido en ordenadores personales y dispone de una amplia variedad de programas y periféricos compatibles.

### 🟧 macOS

**macOS**, desarrollado por Apple, es el sistema operativo de los ordenadores Mac y está diseñado específicamente para el hardware de Apple.

### 🟥 GNU/Linux

**GNU/Linux** engloba distribuciones como Ubuntu, Linux Mint, Debian o Fedora. Muchas son software libre y ofrecen un alto grado de personalización.

### 🟪 ChromeOS

**ChromeOS**, desarrollado por Google, se utiliza principalmente en los **Chromebook** y está muy orientado a servicios web y aplicaciones en la nube.

## 6️⃣ ¿Cuál es mejor?

No existe un sistema operativo que sea **el mejor para todas las personas y situaciones**.

La elección depende de los programas que necesitamos, la compatibilidad con el hardware, facilidad de uso, videojuegos, integración con otros dispositivos, coste y necesidades concretas.

| Situación | Debemos comprobar |
|---|---|
| Necesitamos un programa concreto | Si existe una versión compatible |
| Utilizamos periféricos especializados | Si existen controladores compatibles |
| Queremos determinados videojuegos | Compatibilidad y requisitos |
| Trabajamos principalmente en la nube | Compatibilidad con los servicios web |
| Queremos reutilizar un equipo | Requisitos del sistema operativo |

:::tip[Para elegir un ordenador]

El sistema operativo también forma parte de la compra. Un equipo puede tener buen hardware y no ser adecuado si **no permite utilizar el software que necesita el usuario**.

:::

## 7️⃣ Software compatible y requisitos

No todos los programas funcionan en todos los sistemas operativos.

Antes de instalar una aplicación debemos comprobar el sistema operativo y versiones compatibles, además del hardware, RAM y almacenamiento necesarios.

Estos datos aparecen en los **requisitos del sistema**.

```text
Requisitos mínimos

Sistema operativo: Windows 11
RAM: 8 GB
Almacenamiento libre: 20 GB
```

:::warning[Mínimo no significa recomendado]

Los **requisitos mínimos** indican normalmente lo necesario para poder ejecutar un programa.

Los **requisitos recomendados** describen una configuración más adecuada para utilizarlo con mayor comodidad.

:::

## 8️⃣ El sistema operativo también ocupa recursos

El propio sistema operativo utiliza **CPU, memoria RAM y almacenamiento**.

Por eso, si un ordenador tiene un SSD de 512 GB, no tendremos toda esa capacidad libre para nuestros archivos. Una parte estará ocupada por el sistema, aplicaciones y otros datos.

Lo mismo ocurre con la RAM: el sistema operativo utiliza una parte mientras el ordenador está encendido.

:::info[Conecta ideas]

Ahora podemos relacionar varios conceptos:

**Hardware + sistema operativo + aplicaciones + necesidades del usuario**

Todos ellos influyen en la experiencia final.

:::

## 9️⃣ Comprueba que lo has entendido

<Tabs>
  <TabItem value="actividad" label="Actividad" default>

Indica si estas afirmaciones son **verdaderas o falsas**.

| Afirmación | V / F |
|---|---|
| El sistema operativo es un componente físico | ❓ |
| Permite gestionar archivos y carpetas | ❓ |
| Todos los programas funcionan en cualquier sistema operativo | ❓ |
| Un ordenador puede tener diferentes cuentas de usuario | ❓ |
| El sistema operativo utiliza RAM y almacenamiento | ❓ |
| Requisitos mínimos y recomendados significan lo mismo | ❓ |
| Mantener actualizado el sistema ayuda a mejorar su seguridad | ❓ |

  </TabItem>

  <TabItem value="solucion" label="Solución">

| Afirmación | Respuesta |
|---|---|
| El sistema operativo es un componente físico | Falso |
| Permite gestionar archivos y carpetas | Verdadero |
| Todos los programas funcionan en cualquier sistema operativo | Falso |
| Un ordenador puede tener diferentes cuentas de usuario | Verdadero |
| El sistema operativo utiliza RAM y almacenamiento | Verdadero |
| Requisitos mínimos y recomendados significan lo mismo | Falso |
| Mantener actualizado el sistema ayuda a mejorar su seguridad | Verdadero |

  </TabItem>
</Tabs>

## 🔟 Analiza una situación

Una estudiante necesita un portátil para utilizar Classroom, realizar trabajos, editar imágenes de forma sencilla y ejecutar una aplicación concreta para una asignatura.

Encuentra un ordenador con buenas características y un precio adecuado.

¿Debería comprarlo directamente?

**No todavía.** Antes debería comprobar si la aplicación es **compatible con el sistema operativo** y si el equipo cumple sus requisitos.

:::tip[Para la práctica final]

Cuando compares equipos, añade el **sistema operativo** a la ficha y comprueba si permite ejecutar las aplicaciones necesarias.

:::

## 1️⃣1️⃣ Qué debes recordar

- El **sistema operativo** es el software principal que gestiona el ordenador.
- Actúa como intermediario entre **usuario, aplicaciones y hardware**.
- Gestiona hardware, archivos, usuarios, programas, red y seguridad.
- Los **drivers o controladores** permiten gestionar determinados dispositivos.
- Windows, macOS, GNU/Linux y ChromeOS son ejemplos de sistemas operativos.
- No todos los programas funcionan en todos los sistemas.
- Debemos comprobar los **requisitos mínimos y recomendados**.
- El sistema operativo también utiliza RAM y almacenamiento.
- Mantenerlo actualizado es importante.
- La elección depende de las **necesidades del usuario**.

## 1️⃣2️⃣ Mapa mental

Este mapa resume las principales funciones y características de un **sistema operativo**.

<img src="/digitalizacion-4eso/img/ud1/mapa-sistema-operativo.png" alt="Mapa mental resumen sobre los sistemas operativos" className="img-center" />

:::tip[Utilízalo para repasar]

Sin consultar los apuntes, intenta explicar qué hay entre las aplicaciones y el hardware, qué recursos gestiona el sistema operativo, para qué sirven los usuarios y permisos y por qué debemos comprobar la compatibilidad de los programas.

:::

➡️ **Siguiente: portátil o sobremesa**
