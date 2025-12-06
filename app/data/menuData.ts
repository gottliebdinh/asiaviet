// Menu data shared across desktop and mobile

export const menuData = {
  popular: [
    { name: 'Pad Thai', category: 'Spezielles', price: '17.0' },
    { name: 'Gebratene Nudeln', category: 'Spezielles', price: '15.0' },
    { name: 'Massaman Curry', category: 'Hauptspeisen', price: '14.4' },
    { name: 'Mango Curry', category: 'Hauptspeisen', price: '14.4' },
    { name: 'Gebackenes mit Gemüse', category: 'Hauptspeisen', price: '15.4' },
  ],
  
  // SUPPEN & VORSPEISEN
  soups: [
    { name: 'Gemüsesuppe', price: '5.90', description: 'Gemüse in Brühe', number: '01' },
    { name: 'Tom-Kha', price: '6.50', description: 'Huhn oder Tofu', number: '02' },
    { name: 'Tom-Yam', price: '6.90', description: 'Garnelen, Zitronengras', number: '03' },
    { name: 'Peking Suppe', price: '6.50', description: 'Huhn, Ei, Morcheln, Pilze', number: '04' },
  ],
  appetizers: [
    { name: 'Mini-Frühlingsrollen (6 Stk)', price: '3.90', description: 'Gemüse', number: '11' },
    { name: 'Cha Gio', price: '6.90', description: '2 vietnamesische Rollen', number: '12' },
    { name: 'Hähnchen Sate-Spieße', price: '6.50', description: '2 Stück', number: '13' },
    { name: 'Gebratene Hähnchen-Gyoza', price: '6.50', description: '6 Stück', number: '14' },
    { name: 'Tempura Garnelen', price: '6.50', description: '5 Stück', number: '15' },
    { name: 'Goma Seetang', price: '4.90', description: 'Seetang mit Sesam', number: '16' },
    { name: 'Goi Xoai Tom', price: '7.90', description: 'Mango, Gemüse, Garnelen', number: '17' },
    { name: 'Goi Xoai Rau', price: '6.90', description: 'Mango, Gemüse', number: '18' },
  ],

  // HAUPTSPEISEN
  mainDishes: [
    { 
      name: 'Veggie Nudeln', 
      price: '7.50', 
      description: '', 
      number: '21',
      options: []
    },
    { 
      name: 'Thai Basilikum', 
      price: '', 
      description: '', 
      number: '22',
      options: [
        { label: 'A Veggie', price: '11.90' },
        { label: 'B Tofu', price: '12.50' },
        { label: 'C Hähnchen', price: '12.50' },
        { label: 'D Rind', price: '13.90' },
        { label: 'E Ente', price: '14.50' },
        { label: 'F Garnelen', price: '14.90' },
        { label: 'G Hähnchenkeule', price: '13.50' },
      ]
    },
    { 
      name: 'Vegane Gerichte', 
      price: '', 
      description: 'Mit Ingwer-Soja-Sauce', 
      number: '23',
      options: [
        { label: 'A Vegetarisch', price: '11.90' },
        { label: 'B Tofu', price: '12.50' },
        { label: 'C Udon', price: '12.90' },
        { label: 'D Udon + Tofu', price: '13.50' },
        { label: 'E Glasnudeln', price: '14.50' },
        { label: 'F Glasnudeln + Tofu', price: '14.90' },
        { label: 'G Vietn. Reisbandnudeln', price: '14.50' },
        { label: 'H Vietn. Reisbandnudeln + Tofu', price: '14.90' },
      ]
    },
    { 
      name: 'Thai Zitronengras', 
      price: '', 
      description: '', 
      number: '24',
      options: [
        { label: 'A Veggie', price: '11.90' },
        { label: 'B Tofu', price: '12.50' },
        { label: 'C Hähnchen', price: '12.50' },
        { label: 'D Rind', price: '13.90' },
        { label: 'E Ente', price: '14.50' },
        { label: 'F Garnelen', price: '14.90' },
        { label: 'G Hähnchenkeule', price: '13.50' },
      ]
    },
    { 
      name: 'Mango Curry', 
      price: '', 
      description: '', 
      number: '25',
      options: [
        { label: 'A Veggie', price: '11.90' },
        { label: 'B Tofu', price: '12.50' },
        { label: 'C Hähnchen', price: '12.50' },
        { label: 'D Rind', price: '13.90' },
        { label: 'E Ente', price: '14.50' },
        { label: 'F Garnelen', price: '14.90' },
        { label: 'G Hähnchenkeule', price: '13.50' },
      ]
    },
    { 
      name: 'Roter Curry', 
      price: '', 
      description: '', 
      number: '26',
      options: [
        { label: 'A Veggie', price: '11.90' },
        { label: 'B Tofu', price: '12.50' },
        { label: 'C Hähnchen', price: '12.50' },
        { label: 'D Rind', price: '13.90' },
        { label: 'E Ente', price: '14.50' },
        { label: 'F Garnelen', price: '14.90' },
        { label: 'G Hähnchenkeule', price: '13.50' },
      ]
    },
    { 
      name: 'Massaman Curry', 
      price: '', 
      description: '', 
      number: '27',
      options: [
        { label: 'A Veggie', price: '11.90' },
        { label: 'B Tofu', price: '12.50' },
        { label: 'C Hähnchen', price: '12.50' },
        { label: 'D Rind', price: '13.90' },
        { label: 'E Ente', price: '14.50' },
        { label: 'F Garnelen', price: '14.90' },
        { label: 'G Hähnchenkeule', price: '13.50' },
      ]
    },
    { 
      name: 'Gebackenes', 
      price: '', 
      description: '', 
      number: '28',
      options: [
        { label: 'A Hähnchenbrustfilet', price: '11.90' },
        { label: 'B Hähnchenstreifen', price: '11.90' },
        { label: 'C Hähnchenkeule', price: '11.90' },
        { label: 'D Fischfilet', price: '12.90' },
        { label: 'E Ente', price: '13.50' },
      ]
    },
    { 
      name: 'Gebratener Reis', 
      price: '', 
      description: '', 
      number: '30',
      options: [
        { label: 'A Veggie', price: '11.90' },
        { label: 'B Tofu', price: '12.50' },
        { label: 'C Hähnchen', price: '12.90' },
        { label: 'D Rind', price: '14.90' },
        { label: 'E Ente', price: '16.50' },
        { label: 'F Garnelen', price: '15.90' },
        { label: 'G Hähnchenkeule', price: '13.50' },
      ]
    },
  ],

  // SPEZIELLES
  specials: [
    { 
      name: 'Gebratene Nudeln', 
      price: '', 
      description: '', 
      number: '31',
      options: [
        { label: 'A Tofu', price: '12.50' },
        { label: 'B Hähnchen', price: '12.90' },
        { label: 'C Rind', price: '14.90' },
        { label: 'D Ente', price: '16.50' },
        { label: 'E Garnelen', price: '15.50' },
        { label: 'F Hähnchenkeule', price: '15.50' },
      ]
    },
    { 
      name: 'Pho', 
      price: '', 
      description: '', 
      number: '32',
      options: [
        { label: 'A Tofu', price: '15.90' },
        { label: 'B Huhn', price: '15.90' },
        { label: 'C Rind', price: '16.90' },
      ]
    },
    { 
      name: 'Soba Nudeln', 
      price: '', 
      description: '', 
      number: '34',
      options: [
        { label: 'A Hähnchenkeule', price: '16.90' },
        { label: 'B Ente', price: '17.90' },
      ]
    },
    { 
      name: 'Laksa', 
      price: '', 
      description: '', 
      number: '35',
      options: [
        { label: 'A Veggie', price: '14.50' },
        { label: 'B Tofu', price: '14.90' },
        { label: 'C Hähnchen', price: '14.90' },
        { label: 'D Rind', price: '15.50' },
        { label: 'E Garnelen', price: '15.90' },
      ]
    },
    { 
      name: 'Bo Luc Lac', 
      price: '16.90', 
      description: '', 
      number: '36',
      options: []
    },
    { 
      name: 'Mien Xao', 
      price: '', 
      description: '', 
      number: '37',
      options: [
        { label: 'A Veggie', price: '14.50' },
        { label: 'B Tofu', price: '14.90' },
        { label: 'C Hähnchen', price: '14.90' },
        { label: 'D Rind', price: '15.90' },
        { label: 'E Ente', price: '16.50' },
        { label: 'F Garnelen', price: '17.50' },
        { label: 'G Hähnchenkeule', price: '16.50' },
      ]
    },
    { 
      name: 'Pho Xao', 
      price: '', 
      description: '', 
      number: '38',
      options: [
        { label: 'A Veggie', price: '14.50' },
        { label: 'B Tofu', price: '14.90' },
        { label: 'C Hähnchen', price: '14.90' },
        { label: 'D Rind', price: '15.90' },
        { label: 'E Ente', price: '16.50' },
        { label: 'F Garnelen', price: '17.50' },
        { label: 'G Hähnchenkeule', price: '16.50' },
      ]
    },
    { 
      name: 'Pad Thai', 
      price: '', 
      description: '', 
      number: '39',
      options: [
        { label: 'A Veggie', price: '14.50' },
        { label: 'B Tofu', price: '14.90' },
        { label: 'C Hähnchen', price: '14.90' },
        { label: 'D Rind', price: '15.90' },
        { label: 'E Ente', price: '16.50' },
        { label: 'F Garnelen', price: '17.50' },
        { label: 'G Hähnchenkeule', price: '16.50' },
      ]
    },
    { 
      name: 'Bun Tron', 
      price: '', 
      description: '', 
      number: '40',
      options: [
        { label: 'A Tofu', price: '16.50' },
        { label: 'C Hähnchen', price: '16.50' },
        { label: 'D Rind', price: '17.50' },
        { label: 'E Garnelen', price: '17.50' },
      ]
    },
  ],

  // SUSHI
  nigiri: [
    { name: 'Avocado', price: '4.90', description: '2 Stück', number: 'N1' },
    { name: 'Lachs / Salmon', price: '6.90', description: '2 Stück', number: 'N2' },
    { name: 'Thunfisch / Tuna', price: '7.90', description: '2 Stück', number: 'N3' },
    { name: 'Ebi (Garnelen) / Shrimps', price: '6.90', description: '2 Stück', number: 'N4' },
    { name: 'Surimi (Krabbenfleischimitat)', price: '5.90', description: '2 Stück', number: 'N5' },
    { name: 'Aal / Unagi', price: '7.90', description: '2 Stück', number: 'N6' },
  ],
  maki: [
    { name: 'Avocado', price: '5.50', description: '', number: 'S1' },
    { name: 'Kappa (Gurke / cucumber)', price: '4.50', description: '', number: 'S2' },
    { name: 'Mango', price: '5.50', description: '', number: 'S3' },
    { name: 'Lachs / Salmon', price: '5.50', description: '', number: 'S4' },
    { name: 'Thunfisch / Tuna', price: '7.50', description: '', number: 'S5' },
    { name: 'Ebi (Garnelen) / Shrimps', price: '7.50', description: '', number: 'S6' },
    { name: 'Surimi', price: '5.90', description: '', number: 'S7' },
  ],
  makiInsideOut: [
    { 
      name: 'Veggie Philadelphia', 
      price: '', 
      description: '8 Stück (mit Sesam) oder Frittiertes Sushi 10 Stück', 
      number: 'S8',
      options: [
        { label: 'A Avocado, Frischkäse', price: '8.90', priceCrunchy: '11.90' },
        { label: 'B Gurke, Frischkäse', price: '7.90', priceCrunchy: '10.90' },
      ]
    },
    { 
      name: 'Lachs Philadelphia', 
      price: '', 
      description: '8 Stück (mit Sesam) oder Frittiertes Sushi 10 Stück', 
      number: 'S9',
      options: [
        { label: 'A Lachs, Avocado, Frischkäse', price: '9.90', priceCrunchy: '12.90' },
        { label: 'B Lachs, Gurke, Frischkäse', price: '9.90', priceCrunchy: '12.90' },
      ]
    },
  ],
  sushiRolls: [
    { name: 'California Classic', price: '9.90', priceCrunchy: '12.90', description: 'Lachs, Avocado, Rucola, Mayo', number: 'S10' },
    { name: 'Boston Roll', price: '10.90', priceCrunchy: '13.90', description: 'Thunfisch, Avocado', number: 'S11A' },
    { name: 'Boston Roll', price: '10.90', priceCrunchy: '13.90', description: 'Thunfisch, Gurke', number: 'S11B' },
    { name: 'California', price: '8.90', priceCrunchy: '11.90', description: 'Surimi, Avocado, Frischkäse', number: 'S12A' },
    { name: 'California', price: '8.90', priceCrunchy: '11.90', description: 'Surimi, Gurke, Frischkäse', number: 'S12B' },
    { name: 'Ebi Philadelphia', price: '9.90', priceCrunchy: '12.90', description: 'Garnelen, Avo, Frischkäse', number: 'S13' },
    { name: 'Tengu Maki', price: '10.90', priceCrunchy: '13.90', description: 'Garnelen Tempura, Avo, Frischkäse', number: 'S14A' },
    { name: 'Tengu Maki', price: '10.90', priceCrunchy: '13.90', description: 'Garnelen Tempura, Gurke, Frischkäse', number: 'S14B' },
    { name: 'Crispy Duck', price: '9.90', priceCrunchy: '12.90', description: 'Ente, Avocado, Mayo', number: 'S15' },
    { name: 'Crispy Chicken', price: '9.90', priceCrunchy: '12.90', description: 'Hähnchen, Gurke, Mayo', number: 'S16' },
    { name: 'Mango Roll', price: '8.90', priceCrunchy: '11.90', description: 'Mango, Mayo', number: 'S17' },
    { name: 'Oliven Roll', price: '8.90', priceCrunchy: '11.90', description: 'Oliven, Rucola, Frischkäse', number: 'S18' },
    { name: 'Tobiko Roll', price: '9.90', priceCrunchy: '–', description: 'Surimi, Avocado, Frischkäse, Tobiko', number: 'S19' },
  ],
  powerRoll: [
    { name: 'Power Avocado Roll', price: '15.90', description: 'Avocado, Frischkäse → Avocado außen', number: 'S20' },
    { name: 'Power Lachs Roll', price: '16.90', description: 'Lachs, Avocado → Lachs außen', number: 'S21' },
    { name: 'Power Thunfisch Roll', price: '16.90', description: 'Thunfisch, Avocado → Thunfisch außen', number: 'S22' },
    { name: 'Tempura Unagi Power Roll', price: '17.90', description: 'Tempura, Avo, Frischkäse → Unagi außen', number: 'S23' },
    { name: 'Tempura Avocado Power Roll', price: '16.90', description: 'Tempura, Mango, Mayo → Avo außen', number: 'S24' },
  ],
  sushiMenus: [
    { name: 'Vegetarisch', price: '15.90', description: '6 Avocado Maki, 6 Kappa Maki, 8 Mango Inside Out', number: 'M1' },
    { name: 'Lachs / Tempura', price: '23.90', description: '8 Lachs, Avo, Sesam IO + 8 Tempura Unagi Power', number: 'M2' },
    { name: 'Mix', price: '22.90', description: '6 Thunfisch Maki, 8 Lachs/Gurke/Frischkäse IO + 8 Ebi Avocado Inside Out', number: 'M3' },
    { name: 'Mix', price: '22.90', description: '6 Mango Maki, 8 Lachs/Gurke/Frischkäse + 10 Tobico Roll, 20 Surimi Frischkäse Inside Out', number: 'M4' },
    { name: 'Mix', price: '24.90', description: '6 Thunfisch Maki, 8 Lachs/Avocado, 8 Lachs/Frischkäse Inside Out, 2 Nigiri', number: 'M5' },
    { name: 'Für 2 Personen', price: '52.90', description: 'Sehr großes Mix-Menü', number: 'M6' },
  ],

  // BOX TO GO
  boxToGo: [
    { name: 'Veggie Nudeln', price: '5.50', description: 'Nudeln mit Gemüse', number: '1' },
    { name: 'Gebratener Reis', price: '9.50', description: 'Ei und Gemüse', number: '2' },
    { name: 'Gebratener Reis mit Hähnchen', price: '9.90', description: '', number: '3' },
    { name: 'Mini-Frühlingsrollen (6 Stk)', price: '7.50', description: 'Vegetarisch', number: '4' },
    { name: 'Hähnchen Gemüse', price: '8.50', description: 'Gebratenes Hähnchen m. Gemüse', number: '5' },
    { name: 'Hähnchenstreifen gebacken', price: '8.50', description: 'Knusprig', number: '6' },
    { name: 'Hähnchen Curry', price: '8.50', description: 'Zartes Hähnchen in Curry', number: '7' },
    { name: 'Ente gebacken', price: '10.50', description: 'Entenbrust', number: '8' },
    { name: 'Veggie Tofu', price: '7.90', description: 'Tofu mit Gemüse', number: '9' },
    { name: 'Hähnchenkeule gebacken', price: '9.50', description: '', number: '10' },
  ],

  // GETRÄNKE
  drinks: [
    { name: 'Coca-Cola (0,33l)', price: '3.50', description: '' },
    { name: 'Coca-Cola Zero (0,33l)', price: '3.50', description: '' },
    { name: 'Fanta (0,33l)', price: '3.50', description: '' },
    { name: 'Sprite (0,33l)', price: '3.50', description: '' },
    { name: 'Apfelschorle (0,33l)', price: '3.50', description: '' },
    { name: 'Orangensaft (0,33l)', price: '3.90', description: '' },
    { name: 'Apfelsaft (0,33l)', price: '3.90', description: '' },
    { name: 'Wasser still (0,5l)', price: '3.00', description: '' },
    { name: 'Wasser spritzig (0,5l)', price: '3.00', description: '' },
  ],
}
