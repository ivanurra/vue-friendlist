const app = Vue.createApp({
    data() {
        return {
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
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'emma',
                name: 'Emma Cohen',
                phone: '111 111 111',
                email: 'emmacohen@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');