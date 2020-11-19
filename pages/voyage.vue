<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div>
        <div class="links">
          <ul> 
            <li v-for="item in computedItems" :key="item.code" class="title">                
                    {{item.class}}
                    {{item.flight}}
                    {{item.from}}
                    {{item.gate}}
                    {{item.number}}
                    {{item.passenger}}
                    {{item.seat}}
                    {{item.number}}
                    {{item.time}}
                    {{item.to}}
                </li>           
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      // items: computedItems
    }
  },
  computed: mapGetters({
    computedItems: 'getDestinationTicket' 
     }),
  created () {
    this.$store.dispatch('getTicket',this.$route.params.code)
  }

}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.toolbar {
  height: 80px;
  background-color: #35495e;
  align-self: flex-start;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-image: url('~assets/airplane.jpg');
  background-size: cover;
}

.title {
  font-weight: 500;
  font-size: 58px;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px #000;
  text-align: center;
}

.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  & > * {
    margin: 5px;
  }
}
</style>
