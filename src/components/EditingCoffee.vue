<template>
    <div v-if="coffee" class="container edit-coffee">
        <h2>Edit {{coffee.name}}</h2>
        <form @submit.prevent="editCoffee">
            <div class="field title">
                <label for="title">Coffee Name</label>
                <p v-if="coffee.name === null" :class="{warning: !isEntered}">{{reminder}}</p>
                <input type="text" id="title" placeholder="My Aromatic Coffee" v-model="coffee.name">
            </div>
            <div class="field added-ingredient" v-for="(ingredient, index) in coffee.ingredients" :key="index">
                <label :for="index">Added Ingredient</label>
                <!-- <input type="text" :value="ingredient"> -->
                <input type="text" :id="index" v-model="coffee.ingredients[index]"> 
                <i class="material-icons" tabindex="0" @click="deleteIngredient(ingredient)" @keyup.enter="deleteIngredient(ingredient)">remove_circle_outline</i>
            </div>
            <div class="field add-ingredient">
                <label for="add-ingredient">Add an Ingredient (Optional)</label>
                <input type="text" id="add-ingredient" placeholder="My Special Ingredient" v-model="newIngredient">
                <i class="material-icons" tabindex="0" @click="addIngredient" @keyup.enter="addIngredient">add_circle_outline</i>
            </div>
            <div class="field center-align">
                <button class="btn" ontouchstart="">Update Coffee</button>
            </div>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
    name: 'EditingCoffee',
    data() {
        return {
            coffee: null,
            newIngredient: null,
            reminder: null
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
    },
    methods: {
        addIngredient() {
            if (this.newIngredient) {
                this.coffee.ingredients.push(this.newIngredient)
                this.newIngredient = null
            }
        },
        deleteIngredient(ingredient) {
            this.coffee.ingredients = this.coffee.ingredients.filter((ingre) => {
                return ingre != ingredient
            })
        },
        editCoffee() {
            console.log(this.coffee)
        }
    }
}
</script>

<style scoped>
.warning {
    color: red;
    margin: 0;
    font-size: 0.8rem;
}
.edit-coffee {
    margin-top: 3.75rem;
    padding: 1.25rem;
    max-width: 500px;
}
.edit-coffee h2 {
    font-size: 2rem;
    margin: 1.25rem auto;
}
.edit-coffee .field {
    margin: 1.25rem auto;
}
.add-ingredient, 
.added-ingredient {
    position: relative;
}
.add-ingredient i, 
.added-ingredient i {
    position: absolute;
    right: 0px;
    bottom: 16px;
    color: hsl(0, 0%, 60%);
    cursor: pointer;
}
.add-ingredient i:hover, .add-ingredient i:active,
.added-ingredient i:hover, .added-ingredient i:active {
    color: hsl(0, 0%, 45%);
}
.add-ingredient i:focus, 
.added-ingredient i:focus {
    outline: 2px dashed pink;
    color: hsl(171, 17%, 51%);
}
.btn {
    background-color: hsl(33, 100%, 50%);
}
button:active {
    background: hsl(33, 100%, 60%);
}
button:focus {
    outline: 2px dashed pink;
}
</style>
