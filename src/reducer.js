import { equal } from './utils';

const initialState = {
  accessToken: null,
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: [],
  selectedRegion: null,
  selectedCategory: null,
  loginFields: {
    email: '',
    password: '',
  },
  reviewFields: {
    score: '',
    description: '',
  },
};

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },

  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },

  setRestaurant(state, { payload: { restaurant } }) {
    return {
      ...state,
      restaurant,
    };
  },

  setRestaurantsReview(state, { payload: { reviews } }) {
    return {
      ...state,
      restaurantReviews: reviews,
    };
  },

  addRestaurantReview(state, { payload: { review } }) {
    const { restaurant: { reviews } } = state;
    return {
      ...state,
      restaurant: {
        reviews: [review, ...reviews],
      },
    };
  },

  setAccessToken(state, { payload: { accessToken } }) {
    return {
      ...state,
      accessToken,
    };
  },

  selectRegion(state, { payload: { regionId } }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find(equal('id', regionId)),
    };
  },

  selectCategory(state, { payload: { categoryId } }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equal('id', categoryId)),
    };
  },

  changeLoginFields(state, { payload: { name, value } }) {
    const { loginFields } = state;
    return {
      ...state,
      loginFields: {
        ...loginFields,
        [name]: value,
      },
    };
  },

  changeReviewFields(state, { payload: { name, value } }) {
    const { reviewFields } = state;
    return {
      ...state,
      reviewFields: {
        ...reviewFields,
        [name]: value,
      },
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
