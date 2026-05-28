export type Plato = {
  id: string;
  nombre: string;
  descripcion?: string;
  descripcionEn?: string;
  precio: string;
  nota?: string;
};

export type Seccion = {
  slug: "entrantes" | "pescados" | "carnes" | "guarniciones";
  titulo: string;
  acompanamientos?: string[];
  platos: Plato[];
};

export const carta: Seccion[] = [
  {
    slug: "entrantes",
    titulo: "Entrantes",
    platos: [
      { id: "e1", nombre: "Jamón de Paleta 100% Bellota", descripcion: "Seleccionada por su veteado único de intenso sabor", descripcionEn: "100% acorn-fed Iberian ham, intense flavor", precio: "24,8" },
      { id: "e2", nombre: "Alcachofas a la Parrilla", descripcion: "Con puré de patata trufado y pizcas de jamón", descripcionEn: "Grilled artichokes with truffled potato purée & crispy ham", precio: "17,9" },
      { id: "e3", nombre: "Tomate Cateto", descripcion: "Junto a otros tomates, aguacate, melva y vinagreta de soja", descripcionEn: "Sliced local tomatoes variety with avocado, tuna & soya vinaigrette", precio: "16,2" },
      { id: "e4", nombre: "Ensaladilla Rusa de Gambas", descripcion: "Con huevo roto, jamón crujiente y su regañá", descripcionEn: "Prawn russian salad with a soft-cooked egg, crispy ham & toast", precio: "16,2" },
      { id: "e5", nombre: "Porra Antequerana", descripcion: "Con melva, huevo y jamón", descripcionEn: "Cold tomato cream served with ham bits, tuna & egg", precio: "14,8" },
      { id: "e6", nombre: "Surtido de Croquetas Artesanas", descripcion: "Puchero, Carrillera y Bacalao (9 uds)", descripcionEn: "House croquettes variety; chicken, pork cheeks & cod", precio: "14,2" },
      { id: "e7", nombre: "Berenjenas Crujientes", descripcion: "Con miel de caña y ralladura de queso de cabra", descripcionEn: "Aubergine fried sticks with honey & sliced goat cheese", precio: "14,2" },
      { id: "e8", nombre: "Revuelto de Bacalao y Langostinos", descripcion: "Con cebolla, ajo y pasas", descripcionEn: "Cod & prawn scrambled eggs with sautéed onion, garlic & raisins", precio: "17,8" },
      { id: "e9", nombre: "Queso Viejo", descripcion: "Con daditos de dulce de membrillo", descripcionEn: "Extra-aged cheese with quince: intense & creamy", precio: "15,2" }
    ]
  },
  {
    slug: "pescados",
    titulo: "Pescados",
    acompanamientos: ["Tomate Laminado con Cebolla", "Espárragos a la Parrilla", "Cesta de Pan y Picos (2,4€)"],
    platos: [
      { id: "p1", nombre: "Tarántelo de Atún Rojo de Almadraba", descripcion: "A la parrilla con patata roja", descripcionEn: "Grilled wild blue fin almadraba tuna with potatoes", precio: "26,4" },
      { id: "p2", nombre: "Bacalao Gratinado", descripcion: "Con ali oli de miel sobre patata panadera, pimiento y cebolla dulce", descripcionEn: "Oven cod with grated honey ali oli, potatoes, sweet onion and pepper", precio: "26,6" },
      { id: "p3", nombre: "Cazuela de Langostinos al Ajillo", descripcion: "Con pizcas de jamón crujiente", descripcionEn: "Pil pil prawns with crispy ham", precio: "19,6" },
      { id: "p4", nombre: "Albóndigas de Choco", descripcion: "En salsa de gambas sobre un cremoso puré de patata trufado", descripcionEn: "Cuttlefish balls with prawns sauce and truffle parmentier", precio: "7,5", nota: "por unidad" },
      { id: "p5", nombre: "Calamaritos Fritos", descripcion: "Con ali oli suave", descripcionEn: "Fried calamari with ali oli", precio: "16,8" }
    ]
  },
  {
    slug: "carnes",
    titulo: "Carnes",
    acompanamientos: ["Patatas fritas", "Espárragos a la Parrilla", "Verduras Frescas", "Cesta de Pan y Picos (2,4€)"],
    platos: [
      { id: "c1", nombre: "Solomillo de Ternera a la Parrilla", descripcionEn: "Grilled beef sirloin", precio: "28,5" },
      { id: "c2", nombre: "Abanico Ibérico de Bellota", descripcionEn: "Grilled acorn-fed meat \"abanico\"", precio: "22,5" },
      { id: "c3", nombre: "Medallones de Solomillo", descripcion: "A la crema gorgonzola", descripcionEn: "Pork sirloin with gorgonzola creamy sauce", precio: "18,9" },
      { id: "c4", nombre: "Solomillo al Ajillo", descripcion: "Con setas y jamón", descripcionEn: "Pork sirloin with garlic sauce, mushrooms and crispy ham", precio: "18,9" },
      { id: "c5", nombre: "Secreto al Vino Málaga", descripcionEn: "Ibérico meat \"secreto\" with Málaga sweet wine sauce", precio: "18,2" },
      { id: "c6", nombre: "Suprema de Pollo Gratinado", descripcion: "Con queso fundente, patata y ligera salsa de su jugo", descripcionEn: "Grated chicken medallions with melted cheese and oven potatoes", precio: "19" }
    ]
  },
  {
    slug: "guarniciones",
    titulo: "Guarniciones",
    platos: [
      { id: "g1", nombre: "Lasaña de Solomillo de Ternera al Oloroso", descripcion: "Con bechamel cremosa de foie y queso fundido", descripcionEn: "Beef lasagna with creamy foie gras béchamel and grated cheese", precio: "19,2" },
      { id: "g2", nombre: "Canelones de Chivo Malagueño", descripcion: "Con suave salsa de foie", descripcionEn: "Málaga goat cannelloni with foie gras sauce", precio: "18,4" },
      { id: "g3", nombre: "Tortelli Ricotta y Espinacas", descripcion: "Con salsa cremosa de mantequilla de ajo tostado y queso", descripcionEn: "Ricotta and spinach tortelli with creamy roast garlic and cheese sauce", precio: "18,4" },
      { id: "g4", nombre: "Verduras Frescas y Alcachofa", descripcionEn: "Grilled fresh vegetables", precio: "8" },
      { id: "g5", nombre: "Espárragos a la Parrilla", descripcionEn: "Grilled asparagus", precio: "8" },
      { id: "g6", nombre: "Tomate Laminado con Cebolla", descripcionEn: "Sliced tomato with onion", precio: "8" },
      { id: "g7", nombre: "Patatas Fritas", descripcionEn: "Fried potatoes", precio: "8" }
    ]
  }
];
