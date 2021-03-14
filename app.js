const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                {
                    id: 'david',
                    name: 'David Paniagua',
                    phone: '555 555 555',
                    email: 'panyagua@localhost.com'
                },
                {
                    id: 'emma',
                    name: 'Emma Cohen',
                    phone: '111 111 111',
                    email: 'emmacohen@localhost.com'
                }
            ]
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');