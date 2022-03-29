Vue.createApp({
    data() {
        return {
            message: 'Credit Tabel Results' 
            }
    },
    computed: {
        CalculateSumCredit(){
            return this.sum / this.period,
            console.log(this.sum / this.period);
        }
    }
}).mount('#app')