<template>
    <div>
        <h2 v-if="loading.length !== 0"><span class="badge bg-primary">{{ renderPhrase(loading.length) }}</span></h2>
        <h2 v-else><span class="badge bg-danger">Никто с тобой не тусанет</span></h2>
        <table v-if="loading.length !== 0" class="table">
            <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качество</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in loading" :key="user._id">
                    <td>{{ user.name }}</td>
                    <td>
                        <span v-for="q in user.qualities" :key="q.color" :class="`m-2 badge bg-${q.color}`">
                            {{ q.name }}
                        </span>
                    </td>
                    <td>{{ user.profession.name }}</td>
                    <td>{{ user.completedMeetings }}</td>
                    <td>{{ user.rate }}/5</td>
                    <td>
                        <button class="btn btn-danger" @click="handleDelete(user._id)">
                            delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    data() {
        return {
            numbers: [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44]
        }
    },
    computed: {
        loading() {
            return this.$store.getters.users
        }
    },
    methods: {
        async handleDelete(id) {
            await this.$store.dispatch('deleteUser', id)
        },
        findNumber(arr, value) {
            let low = 0;
            let high = arr.length - 1;
            while (low <= high) {
                let mid = Math.round((low + high) / 2);
                let guess = arr[mid];
                if (guess === value) {
                    return true;
                }
                if (guess > value) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
            return false;
        },
        renderPhrase(number) {
            return this.findNumber(this.numbers, number)
                ? `${number} человека тусанут с тобой сегодня`
                : `${number} человек тусанет с тобой сегодня`;
        }
    }
}

</script>

