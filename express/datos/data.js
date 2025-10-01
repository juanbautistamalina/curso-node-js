let data = {
  "autores": [
    { id: 1, name: "Gabriel García Márquez", country: "Colombia", birthYear: 1927 },
    { id: 2, name: "Gabriel García", country: "España", birthYear: 1950 },
    { id: 3, name: "Gabriel Allende", country: "Chile", birthYear: 1942 },
    { id: 4, name: "J.K. Rowling", country: "Reino Unido", birthYear: 1965 },
    { id: 5, name: "Joanne Rowling", country: "Reino Unido", birthYear: 1965 },
    { id: 6, name: "Haruki Murakami", country: "Japón", birthYear: 1949 },
    { id: 7, name: "George Orwell", country: "Reino Unido", birthYear: 1903 },
    { id: 8, name: "Arthur Conan Doyle", country: "Reino Unido", birthYear: 1859 },
    { id: 9, name: "Conan Smith", country: "EE.UU.", birthYear: 1970 }
  ],

  "libros": [
    { id: 1, title: "Cien años de soledad", year: 1967, authorId: 1 },
    { id: 2, title: "El amor en los tiempos del cólera", year: 1985, authorId: 1 },
    { id: 3, title: "Harry Potter y la piedra filosofal", year: 1997, authorId: 4 },
    { id: 4, title: "Harry Potter y la cámara secreta", year: 1998, authorId: 4 },
    { id: 5, title: "Kafka en la orilla", year: 2002, authorId: 6 },
    { id: 6, title: "Norwegian Wood", year: 1987, authorId: 6 },
    { id: 7, title: "1984", year: 1949, authorId: 7 },
    { id: 8, title: "Estudio en escarlata", year: 1887, authorId: 8 },
    { id: 9, title: "El signo de los cuatro", year: 1890, authorId: 8 },
    { id: 10, title: "The Conan Chronicles", year: 2001, authorId: 9 }
  ]
};

module.exports = data;
