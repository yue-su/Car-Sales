export const addFeature = (id) => {
  return {
    type: "ADD",
      payload: id
  }
}

export const deleteFeature = (feature) => {
  return {
    type: "DELETE",
    payload: feature,
  }
}

