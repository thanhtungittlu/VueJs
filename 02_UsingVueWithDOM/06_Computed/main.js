new Vue({
    el: '#obj',
    data: {
        a: 0,
        b: 0,
        af:0,
        bf:0,
    },
    computed:{
        // computed thực hiện như một function nhưng nó chỉ được coi là 1 thuộc tính ( không có đóng mở ngoặc)
        // computec thực hiện trước method
        // Nó chỉ thực hiển khi data có thay đổi
        showA: function(){
            console.log("Function A Computed")
            return this.a
        },
        showB: function(){
            console.log("Function B Computed")
            return this.b
        },
    },

    methods:{ // Nó thực hiện cả 2 hàm khi 1 trong 2 thay đổi
        showAf: function(){
            console.log("Function A Method")
            return this.af
        },
        showBf: function(){
            console.log("Function B Method")
            return this.bf

        },
    },
})