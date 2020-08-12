const initialState = {
  additionalPrice: 0,
  car: {
    price: 26000,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, state.additionalFeatures[action.payload-1]]
                },
                additionalPrice: state.additionalPrice + state.additionalFeatures[action.payload-1].price
            }
        case 'DELETE':
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(item => item.id !== action.payload)
                },
                additionalPrice: state.additionalPrice - state.additionalFeatures[action.payload-1].price
            }
        default:
            return state
    }
}
