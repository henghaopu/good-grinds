<template>
  <div class="home container">
    <div class="card" v-for="coffee in coffeeCollection" :key="coffee.id">
      <div class="card-content">
        <i v-if="coffee.isDeletable" class="material-icons delete" tabindex="0" @click="deleteCoffee(coffee.id)" @keyup.enter="deleteCoffee(coffee.id)">delete</i>
        <h2 class="brown-text">{{ coffee.name }}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in coffee.ingredients" :key="index">
            <span class="chip">{{ ingredient }}</span>
          </li>
        </ul>
      </div>
      <router-link v-if="coffee.isDeletable" :to="{name: 'editing-coffee', params: {coffee_path: coffee.subPath}}" class="btn-floating btn-medium halfway-fab orange darken-1" tabindex="0">
        <i class="material-icons">edit</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'home',
  data() {
    return {
      // data will be retrieved from the firestore database and being stored in this array locally 
      // so that every time we make a change to it we can interact with this array rather than
      // directly going out and interacting with the database 
      coffeeCollection: [
        // {id: '1', name: 'Espresso', subPath: 'espresso', ingredients: []},
        // {id: '2', name: 'Americano', subPath: 'americano', ingredients: ['Espresso', 'Water']},
        // {id: '3', name: 'Latte', subPath: 'latte', ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam']}, 
        // {id: '4', name: 'Mocha', subPath: 'mocha', ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam', 'Chocolate Powder']}
      ]
    }
  },
  methods: {
    deleteCoffee(id) {
      
      // if (event.type === 'click' || (event.type === 'keyup' && event.keyCode === 13)) {
      //// delete local data  
      //   this.coffeeCollection = this.coffeeCollection.filter(coffee => {
      //     return coffee.id !== id
      //   })
      // }

      // delete document from Firestore
      db.collection('coffeeCollection').doc(id).delete()
      .then(() => {
        // update(delete) local data
        this.coffeeCollection = this.coffeeCollection.filter(coffee => {
          return coffee.id !== id
        })
      })
      
    }
  },
  created () {
    // fetch data from the firestore
    db.collection('coffeeCollection').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let coffee = doc.data()
        coffee.id = doc.id
        this.coffeeCollection.push(coffee)
      })
    })
  },
  components: {
    
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Handlee');
.home {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat( auto-fit, minmax(250px,1fr));  
  grid-gap: 1.875rem;
  margin-top: 3.75rem;
}
.home h2 {
  font-family: 'Handlee', cursive;
  font-size: 1.8rem;
  text-align: center;
  margin-top: 0;
}
.chip {
  font-family: 'Handlee', cursive;
}
.home .ingredients {
  margin: 30px auto;
}

.home .ingredients li {
  display: inline-block;
}
.home .delete {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.4rem;
  color: hsl(0, 0%, 45%);
  cursor: pointer;
}
a:last-of-type > i:active {
    background: hsl(33, 100%, 60%);
}
.home .delete:focus, 
.card a:last-of-type:focus {
  outline: 2px dashed pink;
}
.card a:last-of-type > i {
  font-size: 1.3rem;
}
</style>

