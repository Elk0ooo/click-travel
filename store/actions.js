import myApi from '~/api/api'

export default {
  getDestination (state) {
    myApi.get('destinations').then(response => state.commit('setDestination', response))
  },
  getTicket (state,iataCode) {
    myApi.get('/tickets?filter={"offset": 0,"limit": 100,"skip": 0,"where": {"to": "'+iataCode+'"}}').then((response) => state.commit('setTicket',response))
  } 
}
