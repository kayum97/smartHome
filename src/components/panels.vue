<template lang="pug">

.div.panel_container
    menuApp(:isActive='isActive')
    div.container
        .row.panel
            mixin panel(name, data, sym)
                .card
                    .card-body
                        h5.card-title #{name} 
                        p.card-text #{data} #{sym}

                    

            +panel('Температура', '{{ temp }}', '°')
            +panel('Влажность', '{{ hum }}','%')
            +panel('Газ', '{{gas}}', '%')
        .row
            .col-md-12.day
                small Обновлено {{ day }}
                

</template>

<script>
import axios from 'axios'
import menuApp from './menuApp'
export default {
  name: 'panels',
  components: { 'menuApp': menuApp},
  data () {
    return {
      isActive: true,
      temp: '',
      hum: '',
      gas: '',
      day: '',
      req: ''
    }
  },
  created: function() {
    window.document.title = "Главная"
     if(!localStorage.token) this.$router.replace(this.$route.query.redirect || '/login')
     this.data_get()
     window.setInterval(() => {
        this.data_get()
    }, 20000)
        
     
  },
  methods: {
    data_get() {
        axios.get('http://api.home-server.tmweb.ru/sensor/get', {
            params: {
                api_token: localStorage.token
            }
        })
        .then(
            request => this.success(request)
        )
        .catch(() => this.error() )
     },
    success(req) {
        this.temp = req.data.data.temp
        this.hum = req.data.data.hum
        this.gas = req.data.data.gas
        this.day = req.data.data.created_at.date
        this.normal()

    console.log(req)
        
    },
    normal() {
        if(this.temp >= 30) {
            document.links[0].parentNode.parentNode.parentNode
                            .lastChild.firstChild.firstChild
                            .style.border = "2px solid #8B0000"
        }
        if(this.hum >= 70) { 
            document.links[0].parentNode.parentNode.parentNode
                            .lastChild.firstChild.firstChild.nextSibling
                            .style.border = "2px solid #8B0000"
        }
        if(this.gas >= 5) {
            document.links[0].parentNode.parentNode.parentNode
                            .lastChild.firstChild.lastChild
                            .style.border = "2px solid #8B0000"
        }
    },
    error() { 
        this.temp = ''
        this.hum = ''
        this.gas = ''
        var hidden = document.links[0].parentNode.parentNode.parentNode
                            .lastChild.firstChild.style.display="none"
        this.day = 'Нет данных'


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
    float: left;
    box-sizing: border-box;
    margin: 1% 1% 0 0;
    width: auto;
    h5 {
        font-size: 18px !important;
        margin: 0;    
    }
    p {
        font-size: 50px;
        margin: 0;

    }
}

small {
    font-size: 16px;
    color: #DCDCDC;
}
img {
    width: 2%;
}
.panel {
    overflow: hidden;
    padding: 0 0 0 14px;
}
@media (max-width: 575px) {
	.card.text-white {
	    float: none;
        width: 40%;
	}

}
@media (min-width: 576px) and (max-width: 991px) {
    .panel {
        padding: 0;
    }
    .day {
        padding: 0;    
    }

}
</style>
