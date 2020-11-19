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
      console.log(state.destinationList)
    },
    setTicket (state, payload) {  
        const indexTicketList = []
        payload.data.forEach((ticket) => {
          const cur = {}
          cur.class = ticket.class
          cur.flight = ticket.flight
          cur.from = ticket.from
          cur.gate = ticket.gate
          cur.number = ticket.number
          cur.passenger = ticket.passenger
          cur.seat = ticket.seat
          cur.number = ticket.number
          cur.time = ticket.time
          cur.to = ticket.to
          indexTicketList.push(cur)
          
        })
   
        state.ticketsList = indexTicketList
        console.log(state.ticketsList)
      },
  }
  