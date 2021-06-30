new Vue({
    el: '#obj',
    data: {
       dem: 0,
       x: 0,
       y: 0,
    },
    methods:{
        upValue: function(){
            this.dem ++
        },
        radiant: function(e){
            this.x = e.clientX
            this.y = e.clientY
        },
        stopEvent: function(e){      //Cách 1
            e.stopPropagation()
        }
    },
})