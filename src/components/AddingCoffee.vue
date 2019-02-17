<template>
    <div class="add-coffee container">
        <h2 class="cneter-align brown-text">Add New Coffee Recipe</h2>
        <form @submit.prevent="addCoffee">
            <div class="field title">
                <label for="title">Coffee Title:</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div class="field add-ingredient">
                <label for="add-ingredient">Add an Ingredient:</label>
                <input type="text" name="add-ingredient">
            </div>
            <div class="field center-align">
                <button class="btn orange darken-1">Add Coffee</button>
            </div>
        </form>
    </div>
</template>


<script>
export default {
    name: 'AddingCoffee',
    data() {
        return {
            title: null
        }
    },    
    methods: {
        addCoffee() {
            console.log('Coffee Title: ' + this.title)
        }
    }
}
</script>

<style scoped>
.add-coffee {
    margin-top: 3.75rem;
    padding: 1.25rem;
    max-width: 500px;
}
.add-coffee h2 {
    font-size: 2rem;
    margin: 1.25rem auto;
}
.add-coffee .field {
    margin: 1.25rem auto;
}
button:focus {
    outline: 2px dashed pink;
}
</style>
