---
sidebar_position: 5
title: "1.4. Almacenamiento y tarjeta gráfica"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Almacenamiento y tarjeta gráfica

Después de estudiar la CPU y la memoria RAM, vamos a analizar otros dos elementos que aparecen constantemente en las especificaciones de un ordenador: el **almacenamiento** y la **tarjeta gráfica o GPU**.

El almacenamiento determina **cuánto podemos guardar y con qué rapidez se accede a los datos**. La GPU se ocupa principalmente del **procesamiento gráfico**.

<img
  src="/digitalizacion-4eso/img/ud1/almacenamiento-gpu.png"
  alt="Esquema visual sobre almacenamiento y tarjeta gráfica"
  className="img-center"
/>

:::tip[Objetivo]

Al terminar este apartado deberías ser capaz de distinguir **HDD, SSD SATA y SSD NVMe**, interpretar capacidades de almacenamiento y decidir cuándo puede ser importante disponer de una **GPU dedicada**.

:::

## 1️⃣ ¿Qué es el almacenamiento?

El **almacenamiento** es el lugar donde guardamos de forma permanente el sistema operativo, los programas y nuestros archivos: documentos, fotografías, vídeos, música, aplicaciones o videojuegos.

A diferencia de la memoria RAM, la información almacenada **permanece cuando apagamos el ordenador**.

### 🟩 Capacidad de almacenamiento

La capacidad indica **cuánta información podemos guardar**.

En una ficha técnica podemos encontrar:

```text
256 GB SSD
512 GB SSD
1 TB SSD
2 TB HDD
```

Las unidades que veremos con más frecuencia son **GB (gigabyte)** y **TB (terabyte)**.

De forma aproximada:

```text
1 TB ≈ 1000 GB
```

Por tanto, una unidad de 1 TB permite almacenar aproximadamente el doble de información que una de 512 GB.

:::info[Recuerda]

**Capacidad y velocidad no significan lo mismo.**

Un dispositivo puede ofrecer mucha capacidad y, sin embargo, ser más lento que otro de menor capacidad.

:::

## 2️⃣ HDD y SSD

No todos los sistemas de almacenamiento utilizan la misma tecnología. Para comparar ordenadores debemos distinguir principalmente entre **HDD** y **SSD**.

### 🟧 HDD: el disco duro tradicional

Un **HDD** (*Hard Disk Drive*) almacena la información mediante discos magnéticos que giran en su interior.

Sus características principales son:

- mucha capacidad por un precio relativamente bajo;
- contiene partes mecánicas;
- suele ser más lento que un SSD;
- puede producir ruido y vibraciones;
- es más sensible a golpes mientras está funcionando.

Sigue siendo útil cuando necesitamos **guardar grandes cantidades de información** a un coste reducido.

### 🟥 SSD: almacenamiento de estado sólido

Un **SSD** (*Solid State Drive*) almacena la información utilizando memoria electrónica y no necesita discos giratorios.

En general, permite que:

- el sistema arranque más rápido;
- los programas se abran antes;
- los archivos se carguen con mayor rapidez;
- el equipo funcione silenciosamente;
- soporte mejor los movimientos que un HDD.

<img
  src="/digitalizacion-4eso/img/ud1/hdd-ssd.png"
  alt="Comparativa visual entre un disco HDD y una unidad SSD"
  className="img-center"
/>

### 🟪 SSD SATA y SSD NVMe

No todos los SSD son iguales. Dos términos habituales son **SSD SATA** y **SSD NVMe**.

Un SSD SATA utiliza la interfaz SATA. Un SSD NVMe utiliza el protocolo NVMe sobre PCI Express y normalmente ofrece velocidades superiores.

| Tecnología | Velocidad relativa | Uso habitual |
|---|---|---|
| **HDD** | Menor | Gran capacidad, almacenamiento secundario |
| **SSD SATA** | Alta | Equipos o actualizaciones que utilizan SATA |
| **SSD NVMe** | Muy alta | Habitual como almacenamiento principal en equipos actuales |

:::warning[No confundas los conceptos]

**M.2** describe principalmente un **formato físico**.

**NVMe** es un protocolo diseñado para unidades de almacenamiento de alta velocidad sobre PCI Express.

Por eso, ver únicamente «M.2» en una ficha no nos dice por sí solo todo lo que necesitamos saber sobre la unidad.

:::

## 3️⃣ ¿Cuánto almacenamiento necesito?

No todos los usuarios necesitan la misma capacidad.

| Capacidad | Uso orientativo |
|---|---|
| **256 GB** | Uso básico y pocos archivos locales |
| **512 GB** | Estudio, ofimática, programación y uso general |
| **1 TB** | Muchos programas, juegos, fotografías o vídeos |
| **2 TB o más** | Grandes colecciones de archivos y usos con mucho almacenamiento |

Estas cantidades son orientativas. Una persona que guarda casi todo en la nube puede necesitar menos espacio local que otra que almacena videojuegos o vídeos de gran tamaño.

:::tip[Para elegir]

No preguntes únicamente:

**«¿Cuál tiene más GB?»**

Pregunta también:

**«¿Cuánto espacio necesita este usuario y qué tipo de almacenamiento ofrece el equipo?»**

:::

## 4️⃣ ¿Qué es la GPU?

La **GPU** (*Graphics Processing Unit*, unidad de procesamiento gráfico) es un procesador especializado en realizar gran cantidad de operaciones relacionadas con gráficos, imágenes y otros cálculos en paralelo.

Interviene, por ejemplo, al mostrar la interfaz gráfica, reproducir vídeo, ejecutar videojuegos, editar imágenes y vídeo o trabajar con gráficos 3D.

### 🟦 Gráfica integrada

Una **GPU integrada** forma parte del procesador o del propio sistema y normalmente comparte la memoria principal del equipo.

Puede ser suficiente para:

- navegar por Internet;
- trabajar con documentos;
- utilizar Classroom;
- reproducir contenido multimedia;
- programar;
- realizar edición básica;
- ejecutar juegos poco exigentes.

Tiene ventajas en equipos donde buscamos **menor consumo, menos calor y buena autonomía**.

### 🟩 Gráfica dedicada

Una **GPU dedicada** es un componente específico destinado al procesamiento gráfico.

Suele disponer de su propia memoria, denominada **VRAM** (*Video Random Access Memory*).

Puede resultar importante para:

- videojuegos exigentes;
- edición de vídeo avanzada;
- modelado y diseño 3D;
- renderizado;
- determinadas aplicaciones profesionales.

<img
  src="/digitalizacion-4eso/img/ud1/gpu-integrada-dedicada.png"
  alt="Comparación entre una GPU integrada y una tarjeta gráfica dedicada"
  className="img-center"
/>

:::info[Recuerda]

Una GPU dedicada no hace que un ordenador sea automáticamente mejor para todo.

También puede aumentar el **precio, el consumo eléctrico, el calor y, en un portátil, reducir la autonomía**.

:::

## 5️⃣ La memoria gráfica o VRAM

Las tarjetas gráficas dedicadas suelen disponer de memoria propia denominada **VRAM**.

En una ficha técnica podemos encontrar, por ejemplo:

```text
GPU dedicada
6 GB de VRAM
```

La VRAM almacena temporalmente información que necesita la GPU, como texturas, imágenes y otros datos gráficos.

:::warning[Error frecuente]

No compares dos tarjetas gráficas utilizando únicamente la cantidad de VRAM.

Una GPU de 8 GB no tiene por qué ser más rápida que otra de 6 GB si pertenecen a modelos y generaciones diferentes.

:::

## 6️⃣ ¿Necesito una gráfica dedicada?

Depende del uso.

| Uso | ¿GPU dedicada? |
|---|---|
| Navegar, correo y ofimática | Normalmente no |
| Vídeo y multimedia | Normalmente no |
| Programación general | Normalmente no |
| Edición sencilla de imágenes | Normalmente no |
| Videojuegos exigentes | Puede ser importante |
| Edición de vídeo avanzada | Puede ser recomendable |
| Diseño y modelado 3D | Frecuentemente sí |

Esta tabla es orientativa. Las necesidades concretas dependen de los programas que vayamos a utilizar.

:::tip[Idea clave]

No debemos pagar por un componente que **nuestro perfil de usuario no necesita**.

Una gráfica dedicada puede ser muy importante para un usuario y prácticamente innecesaria para otro.

:::

## 7️⃣ Interpretamos una ficha técnica

Observa estas especificaciones:

```text
Portátil 15,6"

CPU: Intel Core 5
RAM: 16 GB
Almacenamiento: SSD NVMe 512 GB
Gráficos: integrados
```

Ya podemos interpretar que dispone de **512 GB**, utiliza un **SSD NVMe** y emplea **gráficos integrados**.

¿Es un buen ordenador? Todavía no podemos responder sin conocer el **modelo exacto de CPU, precio y necesidades del usuario**.

Ahora observa este otro:

```text
Portátil 15,6"

CPU: AMD Ryzen 7
RAM: 16 GB
Almacenamiento: SSD NVMe 1 TB
GPU dedicada: 8 GB VRAM
```

Tiene más almacenamiento y una GPU dedicada, pero eso tampoco significa automáticamente que sea nuestra mejor elección.

Si únicamente queremos navegar, estudiar y utilizar aplicaciones ofimáticas, podríamos estar pagando por prestaciones que no necesitamos.

## 8️⃣ Comprueba que lo has entendido

<Tabs>
  <TabItem value="actividad" label="Actividad" default>

| Situación | Elige |
|---|---|
| Queremos que el sistema y los programas carguen con rapidez | HDD / SSD |
| Necesitamos guardar muchos archivos con el menor coste posible | HDD / SSD |
| Queremos almacenamiento principal rápido en un equipo actual | HDD / SSD NVMe |
| Usaremos principalmente navegador y ofimática | Integrada / Dedicada |
| Queremos videojuegos gráficos exigentes | Integrada / Dedicada |
| Una GPU tiene 8 GB y otra 6 GB de VRAM. ¿Sabemos ya cuál es más potente? | Sí / No |

  </TabItem>

  <TabItem value="solucion" label="Solución">

| Situación | Respuesta |
|---|---|
| Queremos que el sistema y los programas carguen con rapidez | SSD |
| Necesitamos guardar muchos archivos con el menor coste posible | Habitualmente HDD |
| Queremos almacenamiento principal rápido en un equipo actual | SSD NVMe |
| Usaremos principalmente navegador y ofimática | Normalmente integrada |
| Queremos videojuegos gráficos exigentes | Normalmente dedicada |
| Una GPU tiene 8 GB y otra 6 GB de VRAM. ¿Sabemos ya cuál es más potente? | No |

  </TabItem>
</Tabs>

## 9️⃣ Compara y razona

Imagina estos dos portátiles con un precio parecido:

### 🟪 Equipo A

```text
RAM: 16 GB
SSD NVMe: 1 TB
Gráficos integrados
```

### 🟦 Equipo B

```text
RAM: 16 GB
SSD NVMe: 512 GB
GPU dedicada
```

¿Cuál elegirías?

La respuesta depende del usuario.

Un estudiante que utiliza navegador, ofimática y programación puede valorar más el **mayor almacenamiento** del Equipo A.

Una persona que quiere ejecutar determinados videojuegos o trabajar con aplicaciones gráficas exigentes puede valorar más la **GPU dedicada** del Equipo B.

:::tip[Lo que buscamos]

No queremos respuestas del tipo:

**«Elijo B porque tiene gráfica».**

Queremos argumentos como:

**«Elijo B para este usuario porque va a utilizar aplicaciones que pueden aprovechar una GPU dedicada, aunque dispone de menos capacidad de almacenamiento».**

:::

## 🔟 Qué debes recordar

- El almacenamiento conserva los datos aunque apaguemos el ordenador.
- **GB y TB** indican capacidad.
- HDD y SSD utilizan tecnologías diferentes.
- Un **SSD** ofrece generalmente mayor velocidad que un HDD.
- Podemos encontrar **SSD SATA** y **SSD NVMe**.
- Capacidad y velocidad son características diferentes.
- La **GPU** se especializa en procesamiento gráfico y otros cálculos paralelos.
- Puede ser **integrada o dedicada**.
- Las GPU dedicadas suelen disponer de su propia **VRAM**.
- Más VRAM no significa automáticamente mayor rendimiento.
- No todos los usuarios necesitan una GPU dedicada.

## 1️⃣1️⃣ Mapa mental

Este mapa resume las ideas principales sobre **almacenamiento y tarjeta gráfica**.

<img
  src="/digitalizacion-4eso/img/ud1/mapa-almacenamiento-gpu.png"
  alt="Mapa mental resumen sobre almacenamiento y tarjeta gráfica"
  className="img-center"
/>

:::tip[Utilízalo para repasar]

Intenta explicar sin consultar los apuntes:

- la diferencia entre **RAM y almacenamiento**;
- la diferencia entre **HDD y SSD**;
- qué significa **NVMe**;
- la diferencia entre **GPU integrada y dedicada**;
- por qué no todos los usuarios necesitan la misma GPU.

:::

➡️ **Siguiente: conectividad y periféricos**
