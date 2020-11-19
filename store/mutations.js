/* eslint-disable no-console */
// Appellée par action et modificat° de state / Store

export default {
    setDestination (state, payload) {
      const indexDestinationList = []
      payload.data.forEach((destination) => {
        const cur = {}
        cur.name = destination.name
        cur.code = destination.code
        cur.weather = destination.weather
        cur.isDreamDestination = destination.isDreamDestination
        if (cur.isDreamDestination)
        {
            indexDestinationList.push(cur)
        }
        
      })
  
      state.destinationList = indexDestinationList
    }
  
  }
  