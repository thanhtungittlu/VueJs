new Vue({
    el: '#obj',
    data: {
        noidung: "Hello every body. ",
        link: "http://facebook.com/",
        codeHTML: '<a href="https://vi.vuejs.org/v2/guide/">Chuyển tới trang giới thiệu của VueJS</a>' ,
    },
    methods:{
        changeNoiDung: function() {
            this.noidung = "Noi dung moi cap nhat"
            return this.noidung
        }
    }
})