export async function searchRecipesByIngredients(pathname, searchValue) {
  if (pathname === '/comidas') {
    try {
      const response = await
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`);
      const { meals } = await response.json();
      return meals;
    } catch (error) {
      return null;
    }
  }
  try {
    const response = await
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchValue}`);
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    return null;
  }
}

export async function searchRecipesByName(pathname, searchValue) {
  if (pathname === '/comidas') {
    try {
      const response = await
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
      const { meals } = await response.json();
      return meals;
    } catch (error) {
      return null;
    }
  }
  try {
    const response = await
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`);
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    return null;
  }
}

export async function searchRecipesByFirstLetter(pathname, searchValue) {
  if (pathname === '/comidas') {
    try {
      const response = await
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`);
      const { meals } = await response.json();
      return meals;
    } catch (error) {
      return null;
    }
  }
  try {
    const response = await
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchValue}`);
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    return null;
  }
}

export async function searchRecipes(pathname) {
  if (pathname === '/comidas') {
    try {
      const response = await
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const { meals } = await response.json();
      return meals;
    } catch (error) {
      return null;
    }
  }
  try {
    const response = await
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    return null;
  }
}

export async function RandomRecipe(pathname) {
  if (pathname === 'comidas') {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const { meals } = await response.json();
      console.log(meals);
      return meals;
    } catch (error) {
      return null;
    }
  }
  try {
    const response = await
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    return null;
  }
}

export async function searchCategories(pathname) {
  if (pathname === '/comidas') {
    try {
      const response = await
      fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const { meals } = await response.json();
      return meals;
    } catch (error) {
      return null;
    }
  }
  try {
    const response = await
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    return null;
  }
}

export async function searchRecipesByCategory(pathname, category) {
  if (pathname === '/comidas') {
    try {
      const response = await
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const { meals } = await response.json();
      return meals;
    } catch (error) {
      return null;
    }
  }
  try {
    const response = await
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    return null;
  }
}

export async function getMealsAreas() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    return null;
  }
}

export async function fetchMealsByArea(area) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    return null;
  }
}

export async function getIngredients(pathname) {
  if (pathname === 'comidas') {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const { meals } = await response.json();
      return meals;
    } catch (error) {
      return null;
    }
  }
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    return null;
  }
}

export const getMealApi = async (id) => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { meals } = await fetch(endpoint).then((data) => data.json());
  return meals;
};

export const getMealApiSugestions = async () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const { meals } = await fetch(endpoint).then((data) => data.json());
  return meals;
};

export const getDrinkApi = async (id) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { drinks } = await fetch(endpoint).then((data) => data.json());
  return drinks;
};

export const getDrinkApiSugestions = async () => {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const { drinks } = await fetch(endpoint).then((data) => data.json());
  return drinks;
};
