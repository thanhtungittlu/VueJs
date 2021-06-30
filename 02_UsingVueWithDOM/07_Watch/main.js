new Vue({
    el: '#obj',
    data: {
        a: 0,
        b: 0,

    },
    watch: { 
        a:function(newValue){ // Khi biến data a thay đổi thì thực hiện các câu lệnh dưới
            console.log("a đã được thay đổi")
        }
    },
    computed:{
        // computed thực hiện như một function nhưng nó chỉ được coi là 1 thuộc tính ( không có đóng mở ngoặc)
        
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

})