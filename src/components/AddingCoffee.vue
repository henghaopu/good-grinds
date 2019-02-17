<template>
    <div class="add-coffee container">
        <h2 class="center-align brown-text">Add New Coffee Recipe</h2>
        <form @submit.prevent="addCoffee">
            <div class="field title">
                <label for="title">Coffee Title:</label>
                <input type="text" id="title" v-model="title">
            </div>
            <div class="field added-ingredient" v-for="(ingredient, index) in addedIngredients" :key="index">
                <label :for="index">Added Ingredient</label>
                <!-- <input type="text" :value="ingredient"> -->
                <input type="text" :id="index" v-model="addedIngredients[index]"> 
            </div>
            <div class="field add-ingredient">
                <label for="add-ingredient">Add an Ingredient:</label>
                <div class="input-icon-wrap">
                    <input type="text" id="add-ingredient" v-model="newIngredient">
                    <i class="material-icons" tabindex="0" @click="addIngredient" @keyup.enter="addIngredient">add_circle_outline</i>
                </div>
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
            title: null,
            newIngredient: null,
            addedIngredients: []
        }
    },    
    methods: {
        addCoffee() {
            console.log('Coffee Name: ' + this.title + '\n Coffee Ingredients: ' + this.addedIngredients)
        },
        addIngredient() {
            if (this.newIngredient) {
                this.addedIngredients.push(this.newIngredient)
                this.newIngredient = null
            }
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
.input-icon-wrap {
    position: relative;
}
.input-icon-wrap i {
    position: absolute;
    right: 0px;
    color: hsl(0, 0%, 60%);
    cursor: pointer;
}
.input-icon-wrap i:hover {
    color: hsl(0, 0%, 45%);
}
.input-icon-wrap i:focus {
    outline: 2px dashed pink;
    color: hsl(171, 17%, 51%);
}
button:focus {
    outline: 2px dashed pink;
}
</style>
