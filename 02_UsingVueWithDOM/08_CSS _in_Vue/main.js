new Vue({
    el: '#obj',
    data: {
        red: false,
        color: 'blue_property',
    },
    computed:{
        changeColor: function(){
            return {
                red_property: this.red,
                blue_property: !this.red
            }
        },
    },
    methods:{

    }
})