function maxDuffelBagValue(cakeTypes, weightCapacity) {

  // Holds the maximum possible value at each duffel bag weight capacity
  // from 0 to weightCapacity
  let maxValuesAtCapacities = [];
  for (let i = 0; i <= weightCapacity; i++) {
    maxValuesAtCapacities[i] = 0;
  }

  for (let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {

    let currentMaxValue = 0;

    for (let j = 0; j < cakeTypes.length; j++) {
      let cakeType = cakeTypes[j];

      if (cakeType.weight === 0 && cakeType.value !== 0) {
        return Infinity;
      }

      if (cakeType.weight <= currentCapacity) {
        let maxValueUsingCakeType = cakeType.value + maxValuesAtCapacities[currentCapacity - cakeType.weight];

        currentMaxValue = Math.max(maxValueUsingCakeType, currentMaxValue);
      }
    }

    maxValuesAtCapacities[currentCapacity] = currentMaxValue;
  }

  return maxValuesAtCapacities[weightCapacity];
}
