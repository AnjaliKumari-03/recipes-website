const recipes = [
  //---------------- Indian Breakfast ------------------
  {
    id: "indian-breakfast-1",
    name: "Masala Dosa",
    cuisine: "Indian",
    category: "Breakfast",
    image: "/images/masala-dosa.jpg",
    servings: 2,
    time: "45 minutes",
    ingredients: [
      "2 cups rice",
      "1/2 cup urad dal",
      "1 tsp fenugreek seeds",
      "1 tsp salt",
      "1 cup boiled potatoes",
      "1 tsp mustard seeds",
      "1 tsp turmeric powder",
      "2 tbsp oil",
    ],
    steps: [
      "Soak rice, urad dal, and fenugreek seeds overnight. Grind to a smooth batter and ferment for 8 hours.",
      "Prepare potato masala by frying mustard seeds and turmeric, then adding mashed potatoes.",
      "Heat tawa, spread the batter thinly, cook until golden, add filling, and fold.",
    ],
    equipment: ["Tawa", "Spatula", "Mixing bowls"],
    tips: "Serve with coconut chutney and sambhar.",
  },
  {
    id: "indian-breakfast-2",
    name: "Poha",
    cuisine: "Indian",
    category: "Breakfast",
    image: "/images/poha.jpg",
    servings: 2,
    time: "20 minutes",
    ingredients: [
      "1.5 cups flattened rice (poha)",
      "1 onion, chopped",
      "1 green chili, chopped",
      "1 tsp mustard seeds",
      "8-10 curry leaves",
      "1/2 tsp turmeric powder",
      "1/2 tsp sugar",
      "2 tbsp oil",
      "Salt to taste",
      "Fresh coriander leaves",
      "Lemon wedges",
    ],
    steps: [
      "Wash poha and drain excess water.",
      "In a pan, heat oil, splutter mustard seeds, sauté onions, green chili, and curry leaves.",
      "Add turmeric, salt, sugar, and poha. Cook for 5 minutes.",
      "Garnish with coriander and lemon juice.",
    ],
    equipment: ["Kadhai", "Spatula"],
    tips: "Use thick poha for best results.",
  },
  {
    id: "indian-breakfast-3",
    name: "Idli",
    cuisine: "Indian",
    category: "Breakfast",
    image: "/images/idli.jpg",
    servings: 4,
    time: "12 hours (incl. fermentation)",
    ingredients: [
      "2 cups idli rice",
      "1 cup urad dal",
      "1 tsp fenugreek seeds",
      "Salt to taste",
      "Water as needed",
    ],
    steps: [
      "Soak rice, dal, and fenugreek seeds separately for 6 hours. Grind to a batter and ferment overnight.",
      "Grease idli molds, pour batter, and steam for 12-15 minutes.",
    ],
    equipment: ["Idli steamer", "Mixing bowls"],
    tips: "Fermentation depends on room temperature.",
  },
  {
    id: "indian-breakfast-4",
    name: "Aloo Paratha",
    cuisine: "Indian",
    category: "Breakfast",
    image: "/images/aloo-paratha.jpg",
    servings: 2,
    time: "30 minutes",
    ingredients: [
      "2 cups wheat flour",
      "2 boiled potatoes",
      "1 tsp cumin powder",
      "1/2 tsp garam masala",
      "Salt to taste",
      "2 tbsp coriander leaves",
      "Butter/ghee for frying",
    ],
    steps: [
      "Prepare dough using wheat flour and water.",
      "Mash potatoes, add spices and coriander.",
      "Roll dough, fill with potato mixture, and cook on tawa with butter.",
    ],
    equipment: ["Rolling pin", "Tawa", "Mixing bowls"],
    tips: "Serve hot with curd or pickle.",
  },

  //---------------- Indian Lunch ------------------
  {
    id: "indian-lunch-1",
    name: "Paneer Butter Masala",
    cuisine: "Indian",
    category: "Lunch",
    image: "/images/paneer-butter-masala.jpg",
    servings: 3,
    time: "40 minutes",
    ingredients: [
      "200g paneer cubes",
      "2 tomatoes, pureed",
      "1 onion, chopped",
      "1 tsp ginger-garlic paste",
      "2 tbsp butter",
      "1/4 cup fresh cream",
      "1 tsp garam masala",
      "1 tsp red chili powder",
      "Salt to taste",
      "Coriander leaves",
    ],
    steps: [
      "Heat butter, sauté onions and ginger-garlic paste.",
      "Add tomato puree and spices. Cook until oil separates.",
      "Add paneer cubes and cream. Simmer for 5 minutes.",
    ],
    equipment: ["Pan", "Spatula"],
    tips: "Soak paneer in warm water for softness.",
  },
  {
    id: "indian-lunch-2",
    name: "Dal Tadka",
    cuisine: "Indian",
    category: "Lunch",
    image: "/images/dal-tadka.jpg",
    servings: 4,
    time: "30 minutes",
    ingredients: [
      "1 cup toor dal",
      "1 tomato, chopped",
      "1 onion, chopped",
      "2 tsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1 tsp mustard seeds",
      "1 tsp turmeric powder",
      "2 red chilies",
      "2 tbsp ghee",
      "Salt to taste",
      "Coriander leaves",
    ],
    steps: [
      "Pressure cook dal with turmeric until soft.",
      "Heat ghee, add cumin, mustard, and chilies. Sauté onions and tomatoes.",
      "Add dal, salt, and simmer for 5 minutes.",
    ],
    equipment: ["Pressure cooker", "Kadhai"],
    tips: "Add a pinch of asafoetida in tadka for aroma.",
  },
  {
    id: "indian-lunch-3",
    name: "Chicken Biryani",
    cuisine: "Indian",
    category: "Lunch",
    image: "/images/chicken-biryani.jpg",
    servings: 4,
    time: "1 hour 15 minutes",
    ingredients: [
      "2 cups basmati rice",
      "500 grams chicken (bone-in pieces)",
      "1 cup plain yogurt",
      "2 large onions, thinly sliced",
      "2 tomatoes, chopped",
      "2 tbsp ginger-garlic paste",
      "1/2 cup fresh coriander leaves, chopped",
      "1/2 cup mint leaves, chopped",
      "4 tbsp oil",
      "2 tbsp ghee",
      "1 tsp cumin seeds",
      "4 cloves",
      "2 cardamom pods",
      "1 cinnamon stick",
      "1 bay leaf",
      "1 tsp red chili powder",
      "1/2 tsp turmeric powder",
      "1 tsp garam masala",
      "Salt to taste",
      "4 cups water",
      "Saffron strands soaked in 2 tbsp warm milk (optional)"
    ],
    steps: [
      "Wash and soak basmati rice for 30 minutes. Drain and set aside.",
      "Marinate chicken with yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, and salt. Let it sit for at least 30 minutes.",
      "Heat oil in a large pot. Add cumin seeds, cloves, cardamom, cinnamon, and bay leaf. Sauté for 1 minute.",
      "Add sliced onions and fry until golden brown. Remove half for garnishing later.",
      "Add tomatoes, mint, and coriander leaves. Cook until tomatoes are soft.",
      "Add marinated chicken and cook until chicken is no longer pink and oil separates.",
      "Meanwhile, boil water in another pot, add soaked rice and salt. Cook until 70% done. Drain.",
      "Layer the cooked chicken with parboiled rice. Sprinkle saffron milk, ghee, and fried onions on top.",
      "Cover with a tight lid and cook on low heat (dum) for 20–25 minutes.",
      "Let it rest for 10 minutes before opening. Fluff gently and serve hot."
    ],
    equipment: ["Large heavy-bottomed pot or Dutch oven", "Spatula", "Saucepan for rice"],
    tips: "For authentic flavor, cook on dum by sealing the lid with dough. Serve with raita and salad."
},

  {
    id: "indian-lunch-4",
    name: "Bhindi Masala",
    cuisine: "Indian",
    category: "Lunch",
    image: "/images/bhindi-masala.jpg",
    servings: 3,
    time: "25 minutes",
    ingredients: [
      "200g bhindi (okra), sliced",
      "1 onion, chopped",
      "1 tomato, chopped",
      "1 tsp cumin seeds",
      "1 tsp coriander powder",
      "1/2 tsp turmeric",
      "1/2 tsp red chili powder",
      "2 tbsp oil",
      "Salt to taste",
    ],
    steps: [
      "Heat oil, sauté cumin seeds and onions.",
      "Add tomatoes, spices, and bhindi. Cook until soft.",
    ],
    equipment: ["Kadhai", "Spatula"],
    tips: "Dry bhindi well to avoid stickiness.",
  },

  //---------------- Indian Dinner ------------------
  {
    id: "indian-dinner-1",
    name: "Chicken Curry",
    cuisine: "Indian",
    category: "Dinner",
    image: "/images/chicken-curry.jpg",
    servings: 4,
    time: "50 minutes",
    ingredients: [
      "500g chicken pieces",
      "2 onions, sliced",
      "2 tomatoes, pureed",
      "2 tsp ginger-garlic paste",
      "1 tsp garam masala",
      "1 tsp turmeric",
      "1 tsp red chili powder",
      "3 tbsp oil",
      "Salt to taste",
      "Coriander leaves",
    ],
    steps: [
      "Heat oil, sauté onions and ginger-garlic paste.",
      "Add tomatoes and spices. Cook until oil separates.",
      "Add chicken and cook for 30 minutes.",
    ],
    equipment: ["Deep pan", "Spatula"],
    tips: "Marinate chicken beforehand for better flavor.",
  },
  {
    id: "indian-dinner-2",
    name: "Palak Paneer",
    cuisine: "Indian",
    category: "Dinner",
    image: "/images/palak-paneer.jpg",
    servings: 3,
    time: "35 minutes",
    ingredients: [
      "200g paneer cubes",
      "250g spinach leaves",
      "1 onion, chopped",
      "1 tsp ginger-garlic paste",
      "1 green chili",
      "2 tbsp cream",
      "2 tbsp oil",
      "Salt to taste",
    ],
    steps: [
      "Blanch spinach, puree it with green chili.",
      "Sauté onions and ginger-garlic paste.",
      "Add spinach puree, salt, and paneer cubes. Cook for 5 mins.",
    ],
    equipment: ["Blender", "Pan"],
    tips: "Add cream at the end for richness.",
  },
  {
    id: "indian-dinner-3",
    name: "Khichdi",
    cuisine: "Indian",
    category: "Dinner",
    image: "/images/khichdi.jpg",
    servings: 4,
    time: "35 minutes",
    ingredients: [
      "1 cup basmati rice",
      "1/2 cup yellow moong dal (split yellow lentils)",
      "1 medium onion, finely chopped",
      "1 medium tomato, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric powder",
      "1 tsp ginger paste",
      "2 green chilies, slit (optional)",
      "2 tbsp ghee or oil",
      "Salt to taste",
      "4 cups water",
      "Fresh coriander leaves for garnish",
    ],
    steps: [
      "Wash rice and dal together and soak for 15 minutes. Drain.",
      "Heat ghee in a pressure cooker. Add cumin seeds and let them splutter.",
      "Sauté onions until translucent. Add ginger paste and green chilies.",
      "Add tomatoes and turmeric powder. Cook until soft.",
      "Add soaked rice and dal. Stir for 2 minutes.",
      "Pour in water and add salt. Mix well.",
      "Pressure cook for 3-4 whistles on medium heat.",
      "Let pressure release naturally. Stir and garnish with fresh coriander leaves.",
    ],
    equipment: ["Pressure cooker", "Spatula"],
    tips: "Adjust water quantity for softer or firmer khichdi. Serve with pickle and papad.",
},

  {
    id: "indian-dinner-4",
    name: "Mixed Vegetable Curry",
    cuisine: "Indian",
    category: "Dinner",
    image: "/images/mixed-veg.jpg",
    servings: 3,
    time: "30 minutes",
    ingredients: [
      "1 cup mixed vegetables (carrot, beans, peas)",
      "1 onion, chopped",
      "1 tomato, chopped",
      "1 tsp ginger-garlic paste",
      "1/2 tsp turmeric",
      "1 tsp coriander powder",
      "2 tbsp oil",
      "Salt to taste",
    ],
    steps: [
      "Sauté onions, ginger-garlic, and tomatoes.",
      "Add spices and veggies. Cook until soft.",
    ],
    equipment: ["Kadhai", "Knife"],
    tips: "Add cream for a richer taste.",
  },

  //---------------- Western Breakfast ------------------
  {
    id: "western-breakfast-1",
    name: "Pancakes",
    cuisine: "Western",
    category: "Breakfast",
    image: "/images/pancakes.jpg",
    servings: 2,
    time: "25 minutes",
    ingredients: [
      "1 cup all-purpose flour",
      "2 tbsp sugar",
      "1 tsp baking powder",
      "1/2 tsp salt",
      "1 cup milk",
      "1 egg",
      "2 tbsp melted butter",
      "1 tsp vanilla extract",
    ],
    steps: [
      "Mix dry ingredients in a bowl.",
      "Whisk wet ingredients separately, then combine with dry ingredients.",
      "Heat a non-stick pan and pour 1/4 cup batter. Cook both sides until golden.",
    ],
    equipment: ["Mixing bowls", "Whisk", "Non-stick pan"],
    tips: "Serve with maple syrup and berries.",
  },
  {
    id: "western-breakfast-2",
    name: "Scrambled Eggs",
    cuisine: "Western",
    category: "Breakfast",
    image: "/images/scrambled-eggs.jpg",
    servings: 2,
    time: "10 minutes",
    ingredients: [
      "4 eggs",
      "2 tbsp milk",
      "1 tbsp butter",
      "Salt and pepper to taste",
    ],
    steps: [
      "Whisk eggs, milk, salt, and pepper.",
      "Melt butter in a pan, pour egg mixture, and gently stir until softly cooked.",
    ],
    equipment: ["Non-stick pan", "Spatula"],
    tips: "Cook on low heat for creamy texture.",
  },
  {
    id: "western-breakfast-3",
    name: "Avocado Toast",
    cuisine: "Western",
    category: "Breakfast",
    image: "/images/avocado-toast.jpg",
    servings: 1,
    time: "10 minutes",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "1 tsp lemon juice",
      "Salt and pepper to taste",
      "Chili flakes (optional)",
    ],
    steps: [
      "Toast the bread slices.",
      "Mash avocado with lemon juice, salt, and pepper. Spread over toast.",
    ],
    equipment: ["Toaster", "Fork"],
    tips: "Add poached egg on top for extra protein.",
  },
  {
    id: "western-breakfast-4",
    name: "Omelette",
    cuisine: "Western",
    category: "Breakfast",
    image: "/images/omelette.jpg",
    servings: 1,
    time: "15 minutes",
    ingredients: [
      "2 eggs",
      "1 tbsp milk",
      "2 tbsp bell peppers, chopped",
      "2 tbsp onions, chopped",
      "1 tbsp cheese, grated",
      "Salt and pepper to taste",
      "1 tsp olive oil",
    ],
    steps: [
      "Whisk eggs, milk, salt, and pepper.",
      "Sauté vegetables in olive oil, pour egg mixture, sprinkle cheese, and fold when cooked.",
    ],
    equipment: ["Non-stick pan", "Spatula"],
    tips: "Use medium heat for fluffier omelet.",
  },

  //---------------- Western Lunch ------------------
  {
    id: "western-lunch-1",
    name: "Grilled Cheese Sandwich",
    cuisine: "Western",
    category: "Lunch",
    image: "/images/grilled-cheese.jpg",
    servings: 1,
    time: "15 minutes",
    ingredients: [
      "2 slices bread",
      "2 slices cheddar cheese",
      "1 tbsp butter",
    ],
    steps: [
      "Butter one side of each bread slice.",
      "Place cheese between slices, buttered side out.",
      "Grill on skillet until golden brown on both sides.",
    ],
    equipment: ["Skillet", "Spatula"],
    tips: "Use sourdough bread for extra flavor.",
  },
  {
    id: "western-lunch-2",
    name: "Caesar Salad",
    cuisine: "Western",
    category: "Lunch",
    image: "/images/caesar-salad.jpg",
    servings: 2,
    time: "20 minutes",
    ingredients: [
      "1 romaine lettuce head, chopped",
      "1/2 cup croutons",
      "1/4 cup parmesan cheese",
      "3 tbsp Caesar dressing",
      "1 grilled chicken breast (optional)",
    ],
    steps: [
      "Toss lettuce, croutons, and parmesan with dressing.",
      "Top with sliced grilled chicken if desired.",
    ],
    equipment: ["Mixing bowl", "Knife"],
    tips: "Use fresh parmesan for best flavor.",
  },
  {
    id: "western-lunch-3",
    name: "Spaghetti Aglio e Olio",
    cuisine: "Western",
    category: "Lunch",
    image: "/images/spaghetti-aglio.jpg",
    servings: 2,
    time: "25 minutes",
    ingredients: [
      "200g spaghetti",
      "4 garlic cloves, sliced",
      "1/4 cup olive oil",
      "1 tsp chili flakes",
      "Salt to taste",
      "Fresh parsley for garnish",
    ],
    steps: [
      "Cook spaghetti al dente.",
      "Sauté garlic in olive oil, add chili flakes, and toss spaghetti.",
      "Garnish with parsley and serve.",
    ],
    equipment: ["Pot", "Pan", "Strainer"],
    tips: "Don't burn the garlic; cook on low heat.",
  },
  {
    id: "western-lunch-4",
    name: "Veggie Wrap",
    cuisine: "Western",
    category: "Lunch",
    image: "/images/veggie-wrap.jpg",
    servings: 2,
    time: "15 minutes",
    ingredients: [
      "2 tortilla wraps",
      "1/2 cup bell peppers, julienned",
      "1/2 cup cucumbers, sliced",
      "1/4 cup hummus",
      "Salt and pepper to taste",
    ],
    steps: [
      "Spread hummus on tortillas.",
      "Add veggies, season, and roll tightly.",
    ],
    equipment: ["Knife", "Cutting board"],
    tips: "Add feta cheese for extra flavor.",
  },

  //---------------- Western Dinner ------------------
  {
    id: "western-dinner-1",
    name: "Grilled Chicken",
    cuisine: "Western",
    category: "Dinner",
    image: "/images/grilled-chicken.jpg",
    servings: 2,
    time: "35 minutes",
    ingredients: [
      "2 chicken breasts",
      "1 tbsp olive oil",
      "1 tsp paprika",
      "1 tsp garlic powder",
      "Salt and pepper to taste",
    ],
    steps: [
      "Marinate chicken with olive oil, spices, salt, and pepper.",
      "Grill at 400°F (200°C) for 6-7 minutes per side until cooked through.",
    ],
    equipment: ["Grill pan or outdoor grill", "Tongs"],
    tips: "Rest chicken for 5 minutes before serving.",
  },
  {
    id: "western-dinner-2",
    name: "Roasted Veggies",
    cuisine: "Western",
    category: "Dinner",
    image: "/images/roasted-veggies.jpg",
    servings: 3,
    time: "30 minutes",
    ingredients: [
      "1 cup broccoli florets",
      "1 cup bell peppers, sliced",
      "1 cup zucchini, sliced",
      "2 tbsp olive oil",
      "1 tsp Italian seasoning",
      "Salt and pepper to taste",
    ],
    steps: [
      "Preheat oven to 400°F (200°C).",
      "Toss veggies with olive oil, seasoning, salt, and pepper.",
      "Roast for 20-25 minutes until tender.",
    ],
    equipment: ["Baking tray", "Oven"],
    tips: "Don't overcrowd the pan for better roasting.",
  },
  {
    id: "western-dinner-3",
    name: "Mac and Cheese",
    cuisine: "Western",
    category: "Dinner",
    image: "/images/mac-and-cheese.jpg",
    servings: 3,
    time: "30 minutes",
    ingredients: [
      "200g macaroni",
      "2 tbsp butter",
      "2 tbsp flour",
      "2 cups milk",
      "1.5 cups cheddar cheese, grated",
      "Salt and pepper to taste",
    ],
    steps: [
      "Boil macaroni until al dente.",
      "Make roux with butter and flour, gradually add milk to form sauce.",
      "Stir in cheese until melted, add pasta, and mix well.",
    ],
    equipment: ["Pot", "Whisk"],
    tips: "Use sharp cheddar for a stronger flavor.",
  },
  {
    id: "western-dinner-4",
    name: "Baked Salmon",
    cuisine: "Western",
    category: "Dinner",
    image: "/images/baked-salmon.jpg",
    servings: 2,
    time: "25 minutes",
    ingredients: [
      "2 salmon fillets",
      "1 tbsp olive oil",
      "1 tsp lemon juice",
      "1 tsp dried dill",
      "Salt and pepper to taste",
    ],
    steps: [
      "Preheat oven to 375°F (190°C).",
      "Brush salmon with olive oil, lemon juice, dill, salt, and pepper.",
      "Bake for 15-18 minutes until flaky.",
    ],
    equipment: ["Oven", "Baking dish"],
    tips: "Check internal temperature reaches 145°F (63°C).",
  },
];

export default recipes;