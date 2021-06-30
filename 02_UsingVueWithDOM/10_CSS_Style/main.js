new Vue({
    el: '#obj',
    data: {
        color:'gray',
        width: 100,
        height:100,
    },
    computed:{
        changeStyle: function(){
            return{
                backgroundColor: this.color,
                width: this.width + 'px',
                height: this.height + 'px',
            }
        },
    },
    methods:{

    }
})