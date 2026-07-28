# Inventario Riwi

## Descripción

Construir un sistema de inventario en TypeScript para administrar productos, proveedores y movimientos de stock.

El sistema se desarrollará progresivamente. Comenzará con el modelado básico de la información y evolucionará hasta permitir la validación de datos, la reutilización de estructuras y la administración del inventario mediante clases.

## Objetivo

Aplicar el sistema de tipos de TypeScript para representar y controlar correctamente la información de un inventario.

Durante la actividad se trabajará con:

Productos y categorías.
Precios y cantidades disponibles.
Proveedores.
Entradas y salidas de stock.
Estados de los productos.
Alertas por bajo inventario.
Requerimientos generales

El sistema debe permitir:

- Registrar productos.
- Clasificar los productos por categorías.
- Asignar precios y cantidades disponibles.
- Relacionar cada producto con un proveedor.
- Registrar entradas y salidas de inventario.
- Consultar y actualizar la información de los productos.
- Controlar el estado de cada producto.
- Detectar productos con bajo nivel de inventario.
- Evitar el uso de valores inválidos mediante el sistema de tipos de TypeScript.

## Etapas de la actividad

1. Modelado inicial

Definir los tipos y las estructuras necesarias para representar la información básica del inventario.

2. Reutilización de estructuras

Crear soluciones que permitan reutilizar y transformar los tipos definidos previamente.

3. Validación de operaciones

Modelar las operaciones del inventario y validar los diferentes tipos de movimientos y estados.

4. Administración del inventario

Centralizar el registro de productos, la actualización del stock y la generación de alertas.

## Primera etapa: modelado inicial

### Requerimiento

El sistema debe contar con tipos específicos para representar los identificadores, nombres, precios y cantidades utilizados en el inventario.

Crea los siguientes alias de tipos:

```js
type ProductId = number;
type SupplierId = number;
type InventoryId = number;

type ProductName = string;
type SKU = string;

type Quantity = number;
type Price = number;
```

También se deben definir las categorías permitidas para los productos:

```js
type ProductCategory =
  | "technology"
  | "clothing"
  | "food"
  | "home";
```

### Preguntas de análisis

1. ¿Qué diferencia existe entre utilizar string y utilizar ProductCategory?

2. ¿Qué sucede al intentar asignar la categoría "vehicles" a una variable de tipo ProductCategory?

3. ¿Por qué puede ser útil crear tipos como ProductId y SupplierId si ambos están basados en number?

4. ¿Qué ventaja aporta utilizar nombres como Quantity y Price en lugar de escribir directamente number?

## Segunda Etapa: Categorías de productos

### Requerimiento

Los productos solamente podrán pertenecer a una de las categorías permitidas por el sistema.

Define un tipo que represente las categorías disponibles:

```js
type ProductCategory =
  | "technology"
  | "clothing"
  | "food"
  | "home";
```
### Preguntas de análisis

1. ¿Qué diferencia existe entre utilizar string y utilizar ProductCategory?

2. ¿Qué sucede al intentar asignar la categoría "vehicles" a una variable de tipo ProductCategory?

3. ¿Por qué puede ser útil crear tipos como ProductId y SupplierId si ambos están basados en number?

4. ¿Qué ventaja aporta utilizar nombres como Quantity y Price en lugar de escribir directamente number?

Próximos pasos de la etapa

Después de definir los tipos básicos y las categorías, se continuará con:

La estructura de un producto.
La estructura de un proveedor.
Propiedades obligatorias y opcionales.
Propiedades que no deben modificarse.
Listas de productos y proveedores.
Representación de datos mediante tuplas.