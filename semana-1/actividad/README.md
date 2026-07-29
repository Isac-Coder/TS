# Inventario Riwi

Sistema de inventario hecho en TypeScript para registrar productos, proveedores y movimientos de stock.

## ¿Qué hace?

- Registra productos y proveedores.
- Controla entradas y salidas de inventario.
- Muestra alertas cuando un producto tiene bajo stock.
- Todo el modelado de datos usa el sistema de tipos de TypeScript.

## Cómo correrlo

```bash
npm install
npm run dev
```

Esto abre el proyecto en el navegador con Vite.

## Estructura básica

```
src/
├── types/      # Tipos y categorías
├── models/     # Product, Supplier, InventoryMovement
├── services/   # Lógica del inventario
├── ui/         # Renderizado en pantalla
└── main.ts     # Punto de entrada
```