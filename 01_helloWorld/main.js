new Vue({
    el: '#obj',
    data: {
        noidung: "Hello every body. hello world"
    },
    methods:{
        changeValue: function(e) {
            this.noidung = e.target.value;
        }
    }
})