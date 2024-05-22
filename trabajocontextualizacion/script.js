$(document).ready(function() {
    // Función para cargar el listado de películas
    function cargarPeliculas() {
      var peliculas = [
        { titulo: "Iron Man", categoria:"marvel", sinopsis: "A billionaire industrialist and genius inventor, Tony Stark, must suit up and fight against his own technology to protect his country.", actores: ["Robert Downey Jr.", "Gwyneth Paltrow", "Jeff Bridges"], imagen: "img/ironman.jpg", detalle: "Iron Man es una película de superhéroes de 2008 basada en el personaje de Marvel Comics del mismo nombre, producida por Marvel Studios y distribuida por Paramount Pictures." },
        { titulo: "The Avengers", categoria:"marvel", sinopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.", actores: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"], imagen: "img/theavengers.jpg", detalle: "The Avengers es una película de superhéroes de 2012 basada en el equipo de superhéroes de Marvel Comics del mismo nombre." },
        { titulo: "Frozen", categoria:"disney", sinopsis: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.", actores: ["Kristen Bell", "Idina Menzel", "Jonathan Groff"], imagen: "img/frozen.jpg", detalle: "Frozen es una película de animación de 2013 producida por Walt Disney Animation Studios y lanzada por Walt Disney Pictures." },
        { titulo: "Star Wars: Episode IV - A New Hope", categoria:"", sinopsis: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.", actores: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"], imagen: "img/starwars.jpg", detalle: "Star Wars: Episode IV - A New Hope es una película de space opera de 1977 dirigida por George Lucas." },
        { titulo: "Avengers: Infinity War", categoria:"", sinopsis: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.", actores: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], imagen: "img/infinitywar.jpg", detalle: "Avengers: Infinity War es una película de superhéroes de 2018 basada en el equipo de superhéroes de Marvel Comics del mismo nombre." },
        { titulo: "The Lion King", categoria:"", sinopsis: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.", actores: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"], imagen: "img/lionking.jpg", detalle: "The Lion King es una película de animación de 1994 producida por Walt Disney Feature Animation y lanzada por Walt Disney Pictures." },
        { titulo: "Guardians of the Galaxy", categoria:"", sinopsis: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.", actores: ["Chris Pratt", "Vin Diesel", "Bradley Cooper"], imagen: "img/gog.jpg", detalle: "Guardians of the Galaxy es una película de superhéroes de 2014 basada en el equipo de superhéroes de Marvel Comics del mismo nombre." },
        { titulo: "Toy Story", categoria:"", sinopsis: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.", actores: ["Tom Hanks", "Tim Allen", "Joan Cusack"], imagen: "img/toystory.jpg", detalle: "Toy Story es una película de animación de 1995 producida por Pixar Animation Studios y lanzada por Walt Disney Pictures." },
        { titulo: "Jurassic Park", categoria:"", sinopsis: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.", actores: ["Sam Neill", "Laura Dern", "Jeff Goldblum"], imagen:"img/jurassicpark.jpg", detalle: "Jurassic Park es una película de ciencia ficción de 1993 dirigida por Steven Spielberg." },
        { titulo: "The Shining", categoria:"", sinopsis: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.", actores: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"], imagen:"img/shinning.jpg", detalle: "The Shining es una película de terror psicológico de 1980 producida y dirigida por Stanley Kubrick." },
        // Películas adicionales
        { titulo: "The Dark Knight", categoria:"", sinopsis: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.", actores: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"], imagen: "img/darkknight.jpg", detalle: "The Dark Knight es una película de superhéroes de 2008 dirigida, producida y coescrita por Christopher Nolan." },
        { titulo: "Toy Story 4", categoria:"", sinopsis: "When a new toy called 'Forky' joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.", actores: ["Tom Hanks", "Tim Allen", "Annie Potts"], imagen: "img/toystory4.jpg", detalle: "Toy Story 4 es una película de animación de 2019 producida por Pixar Animation Studios y lanzada por Walt Disney Pictures." },
        { titulo: "Black Panther", categoria:"", sinopsis: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.", actores: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"], imagen: "img/toystory4.jpg", detalle: "Black Panther es una película de superhéroes de 2018 basada en el personaje de Marvel Comics del mismo nombre." },
        { titulo: "Finding Nemo", categoria:"", sinopsis: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.", actores: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"], imagen: "img/nemo.jpg", detalle: "Finding Nemo es una película de animación de 2003 producida por Pixar Animation Studios y lanzada por Walt Disney Pictures." },
        { titulo: "The Conjuring", categoria:"", sinopsis: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.", actores: ["Patrick Wilson", "Vera Farmiga", "Ron Livingston"], imagen: "img/conjuring.jpg", detalle: "The Conjuring es una película de terror sobrenatural de 2013 dirigida por James Wan." },
        { titulo: "Captain America: The Winter Soldier", categoria:"", sinopsis: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.", actores: ["Chris Evans", "Scarlett Johansson", "Sebastian Stan"], imagen: "img/captainamerica.jpg", detalle: "Captain America: The Winter Soldier es una película de superhéroes de 2014 basada en el personaje de Marvel Comics del mismo nombre." },
        { titulo: "Coco", categoria:"", sinopsis: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.", actores: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"], imagen: "img/coco.jpg", detalle: "Coco es una película de animación de 2017 producida por Pixar Animation Studios y lanzada por Walt Disney Pictures." },
        { titulo: "The Silence of the Lambs", categoria:"", sinopsis: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.", actores: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"], imagen: "img/silenceofthelambs.jpg", detalle: "The Silence of the Lambs es una película de suspenso psicológico de 1991 dirigida por Jonathan Demme." },
        { titulo: "Thor: Ragnarok", categoria:"", sinopsis: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.", actores: ["Chris Hemsworth", "Tom Hiddleston", "Cate Blanchett"], imagen: "img/thorragnarok.jpg", detalle: "Thor: Ragnarok es una película de superhéroes de 2017 basada en el personaje de Marvel Comics del mismo nombre." },
        { titulo: "Maleficent", categoria:"", sinopsis: "A vengeful fairy is driven to curse an infant princess, only to discover that the child may be the one person who can restore peace to their troubled land.", actores: ["Angelina Jolie", "Elle Fanning", "Sharlto Copley"], imagen: "img/malefica.jpg", detalle: "Maleficent es una película de fantasía oscura de 2014 dirigida por Robert Stromberg y protagonizada por Angelina Jolie como el personaje titular." },
        { titulo: "The Exorcist", categoria:"", sinopsis: "When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter.", actores: ["Ellen Burstyn", "Max von Sydow", "Linda Blair"], imagen: "img/theexorsist.jpg", detalle: "The Exorcist es una película de terror sobrenatural de 1973 dirigida por William Friedkin y escrita por William Peter Blatty." },
        { titulo: "Spider-Man: Into the Spider-Verse", categoria:"", sinopsis: "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.", actores: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"], imagen: "img/spiderman.jpg", detalle: "Spider-Man: Into the Spider-Verse es una película de animación de superhéroes de 2018 dirigida por Bob Persichetti, Peter Ramsey y Rodney Rothman." },
        { titulo: "Beauty and the Beast", categoria:"", sinopsis: "A selfish Prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.", actores: ["Emma Watson", "Dan Stevens", "Luke Evans"], imagen: "img/beauty.png", detalle: "Beauty and the Beast es una película de fantasía musical de 2017 dirigida por Bill Condon y producida por Walt Disney Pictures." },
        { titulo: "Die Hard", categoria:"", sinopsis: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.", actores: ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"], imagen: "img/diehard.jpg", detalle: "Die Hard es una película de acción de 1988 dirigida por John McTiernan y escrita por Jeb Stuart y Steven E. de Souza." }
      ];
  
      var listaHTML = '';
      peliculas.forEach(function(pelicula) {
        listaHTML += '<div class="card mb-3">';
        listaHTML += '<div class="row no-gutters">';
        listaHTML += '<div class="col-md-4">';
        listaHTML += '<img src="' + pelicula.imagen + '" class="card-img" alt="' + pelicula.titulo + '">';
        listaHTML += '</div>';
        listaHTML += '<div class="col-md-8">';
        listaHTML += '<div class="card-body">';
        listaHTML += '<h5 class="card-title">' + pelicula.titulo + '</h5>';
        listaHTML += '<p class="card-text">' + pelicula.sinopsis + '</p>';
        listaHTML += '<p class="card-text"><small class="text-muted">' + pelicula.actores.join(', ') + '</small></p>';
        listaHTML += '<button type="button" class="btn btn-primary btn-sm ver-detalle" data-toggle="modal" data-target="#detallePeliculaModal" data-titulo="' + pelicula.titulo + '" data-detalle="' + pelicula.detalle + '">Ver Detalles</button>';
        listaHTML += '</div>';
        listaHTML += '</div>';
        listaHTML += '</div>';
        listaHTML += '</div>';
      });
  
      $('#latest-movies-list').html(listaHTML);
  
      // Agrega el evento click para mostrar los detalles de la película en el modal
      $('.ver-detalle').click(function() {
        var titulo = $(this).data('titulo');
        var detalle = $(this).data('detalle');
        $('#detallePeliculaModalLabel').text(titulo);
        $('#detallePeliculaBody').html(detalle);
      });
    }
  
    // Cargar las películas al iniciar la página
    cargarPeliculas();
  });

  // Función para filtrar películas
function filtrarPeliculas(categoria) {
    $('.card').hide(); // Oculta todas las tarjetas de películas
    if (categoria === 'all') {
      $('.card').show(); // Muestra todas las tarjetas si se selecciona la categoría "Todos"
    } else {
      $('.' + categoria).show(); // Muestra las tarjetas de la categoría seleccionada
    }
  }
  
  // Agrega el evento click para el botón de filtro
  $('.btn-group').on('click', '.btn', function() {
    var filtro = $(this).data('filtro');
    filtrarPeliculas(filtro);
  });
  