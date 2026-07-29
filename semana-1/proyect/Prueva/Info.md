# Requerimiento: Catálogo de películas con React

Crea una aplicación en React que muestre un catálogo de 20 películas.

Se entregará un array llamado `movies` con la información de las películas. Debes recorrer este array y renderizar una tarjeta por cada película.

## Componente de película

Crea un archivo llamado `MovieCard.tsx` dentro de la carpeta:

```text
src/components/
```

El componente debe recibir una película mediante `props` y mostrar dinámicamente sus datos.

Utiliza la siguiente estructura como base:

```tsx
function MovieCard({ movie }) {
  return (
    <article className="">
      <div className="">
        <img
          className=""
          src={IMAGEN}
          alt={``}
        />

        <span className="">
          ⭐ {PUNTUACION}
        </span>
      </div>

      <div className="">
        <header className="">
          <h2 className="">
            {TITULO}
          </h2>

          <span className="">
            {AÑO}
          </span>
        </header>

        <div className="">
          <p>
            <strong>Género:</strong> {GENERO}
          </p>

          <p>
            <strong>Director:</strong> {DIRECTOR}
          </p>

          <p>
            <strong>Duración:</strong> {DURACION} minutos
          </p>
        </div>

        <p className="">
          {DESCRIPCION}
        </p>

        <button
          className=""
          type="button"
        >
          Ver detalles
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
```

Los valores escritos en mayúsculas deben reemplazarse por las propiedades correspondientes del objeto `movie`.

También debes completar el atributo `alt` de la imagen utilizando información de la película.

## Renderizado en App

Importa el componente `MovieCard` dentro de `App.tsx`.

Recorre el array de películas utilizando `.map()` y renderiza un componente `MovieCard` por cada película.

Cada componente debe:

* Recibir la película mediante una prop llamada `movie`.
* Tener una propiedad `key` única.
* Mostrar todos los datos de la película.
* Renderizarse de forma dinámica, sin escribir manualmente una tarjeta por cada película.

## Estilos

Los estilos son libres.

Puedes elegir:

* Colores.
* Tipografías.
* Tamaños.
* Espaciados.
* Distribución de las tarjetas.
* Bordes.
* Sombras.
* Animaciones.
* Efectos `hover`.
* Diseño responsive.

Debes agregar los nombres de las clases CSS en los atributos `className` que se encuentran vacíos.

Puedes utilizar CSS tradicional, CSS Modules, Sass, Tailwind CSS u otra herramienta compatible con React.

## Estructura esperada

```text
src/
├── components/
│   └── MovieCard.tsx
├── data/
│   └── movies.tsxx
├── App.tsx
├── App.css
└── main.tsx
```

## Criterios de evaluación

* Creación correcta del componente `MovieCard`.
* Uso correcto de `props`.
* Uso correcto del método `.map()`.
* Importación del componente en `App.tsx`.
* Uso de una `key` única.
* Renderizado dinámico de los datos.
* Organización del proyecto.
* Creatividad en los estilos.
* Diseño adaptable a diferentes tamaños de pantalla.
* Código limpio y legible.
