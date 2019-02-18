<template>
    <div class="add-coffee container">
        <h2 class="center-align brown-text">Add New Coffee Recipe</h2>
        <form @submit.prevent="addCoffee">
            <div class="field title">
                <label for="title">Coffee Name</label>
                <p v-if="title === null" :class="{warning: !isEntered}">{{reminder}}</p>
                <input type="text" id="title" placeholder="My Aromatic Coffee" v-model="title">
            </div>
            <div class="field added-ingredient" v-for="(ingredient, index) in addedIngredients" :key="index">
                <label :for="index">Added Ingredient</label>
                <!-- <input type="text" :value="ingredient"> -->
                <input type="text" :id="index" v-model="addedIngredients[index]"> 
            </div>
            <div class="field add-ingredient">
                <label for="add-ingredient">Add an Ingredient (Optional)</label>
                <div class="input-icon-wrap">
                    <input type="text" id="add-ingredient" placeholder="My Special Ingredient" v-model="newIngredient">
                    <i class="material-icons" tabindex="0" @click="addIngredient" @keyup.enter="addIngredient">add_circle_outline</i>
                </div>
            </div>
            <div class="field center-align">
                <button class="btn" ontouchstart="">Add Coffee</button>
            </div>
        </form>
    </div>
</template>


<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'AddingCoffee',
    data() {
        return {
            title: null,
            subPath: null,
            newIngredient: null,
            addedIngredients: [],
            
            isEntered: false,
            reminder: null,
        }
    },    
    methods: {
        addCoffee() {
            if (this.title) {
                this.isEntered = true
                this.reminder = null
                // create a subPath
                this.subPath = slugify(this.title, {
                    replacement: '-',
                    remove: /[*_+~.()^'"!\-:@]/g,
                    lower: true
                })
                
                db.collection('coffeeCollection').add({
                    name: this.title,
                    subPath: this.subPath,
                    ingredients: this.addedIngredients,
                    isDeletable: true
                }).then(()=> {
                    // redirect the user to the home page
                    this.$router.push({ name: 'home' })
                }).catch( err => {
                    console.log(err)
                })
            } else {
                this.isEntered = false
                this.reminder = '(Woops! forgot to name your coffee?)'
                this.title = null
            }
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
.warning {
    color: red;
    margin: 0;
    font-size: 0.8rem;
}
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
    top: 10px;
    color: hsl(0, 0%, 60%);
    cursor: pointer;
}
.input-icon-wrap i:hover, .input-icon-wrap i:active {
    color: hsl(0, 0%, 45%);
}
.input-icon-wrap i:focus {
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
