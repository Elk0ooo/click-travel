<template>
  <div class="container">      
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div>
        <section class="ticket">
  <div class="header">
    <h1>Boarding Pass</h1>
    <h3>First Class</h3>
  </div>
  <div class="body">
    <h2><b>PASSENGER</b></h2>
    <p>{{ this.$route.params.passenger.toUpperCase() }}</p>
 
    <div id="second">
      <div id="flight">
        <h2><b>FLIGHT</b></h2>
        <p>{{ this.$route.params.flight.toUpperCase() }}</p>  
      </div>
  
      <div id="from">
        <h2><b>FROM</b></h2>
        <p>{{ this.$route.params.from.toUpperCase() }}</p>
      </div>
  
      <div id="to">
        <h2><b>TO</b></h2>
        <p>{{ this.$route.params.to.toUpperCase() }}</p>
      </div>
 
      <div id="class">
        <h2><b>CLASS</b></h2>
        <p>{{ this.$route.params.class.toUpperCase() }}</p>  
      </div>
    </div>
 
    <div id="third">
      <div id="gate">
        <h2><b>GATE</b></h2>
        <p class="big">{{ this.$route.params.gate.toUpperCase() }}</p>
      </div>
    
      <div id="time">
        <h2><b>TIME</b></h2>
        <p class="big">{{ this.$route.params.time.toUpperCase() }}</p>  
      </div>
 
      <div id="seat">
        <h2><b>SEAT</b></h2>
        <p class="big">{{ this.$route.params.seat.toUpperCase() }}</p>
      </div>
    </div>
  </div>
  <div class="footer"></div>
</section>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.police{
    color: grey;
}
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



.ticket {
    width: 1000px;
    border-radius: 25px;
    background-color: rgb(0, 140, 255);
 
    .header {
        color: white;
        padding-left: 1em;
    }
 
    .body {
        background-color: whitesmoke;
        padding: 1em;
 
        h2 {
            color: gray;
            font-size: medium;
            font-weight: 400;
        }
 
        #second {
            margin-top: 2em;
            display: flex;
 
            #from, #to, #class {
                margin-left: 5em;
            }
        }
 
        #third {
            margin-top: 2em;
            display: flex;
 
            #time, #seat {
                margin-left: 2em;
            }
 
            .big {
                font-size: 2em;
                font-weight: bold;
                background-color: white;
            }
        }
    }
 
    .footer {
        height: 50px;
    }
}
</style>
