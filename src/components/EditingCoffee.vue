<template>
    <div v-if="coffee" class="container edit-coffee">
        <h2>Edit {{coffee.name}}</h2>
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
    name: 'EditingCoffee',
    data() {
        return {
            coffee: null
        }
    },
    // called when the component is created but not yet render to the DOM
    created() {
        // issue: why can't we use '==='? 
        let ref = db.collection('coffeeCollection').where('subPath', '==', this.$route.params.coffee_path)
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.coffee = doc.data()
                this.coffee.if = doc.id
            })
        })
    }
}
</script>

<style scoped>

</style>
