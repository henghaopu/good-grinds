<template>
  <div class="home container">
    <div class="card" v-for="coffee in coffeeList" :key="coffee.id">
      <div class="card-content">
        <i class="material-icons delete" tabindex="0">delete</i>
        <h2 class="brown-text">{{ coffee.name }}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in coffee.ingredients" :key="index">
            <span class="chip">{{ ingredient }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      coffeeList: [
        {id: '1', name: 'Espresso', subPath: 'espresso', ingredients: []},
        {id: '2', name: 'Americano', subPath: 'americano', ingredients: ['Espresso', 'Water']},
        {id: '3', name: 'Latte', subPath: 'latte', ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam']}, 
        {id: '4', name: 'Mocha', subPath: 'mocha', ingredients: ['Espresso', 'Steamed milk', 'Milk Foam', 'Chocolate powder']}
      ]
    }
  },
  components: {
    
  }
}
</script>

<style scoped>
.home {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat( auto-fit, minmax(250px,1fr));  
  grid-gap: 1.875rem;
  margin-top: 3.75rem;
}

.home h2 {
  font-size: 1.8rem;
  text-align: center;
  margin-top: 0;
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
.home .delete:focus {
  outline: 2px dashed pink;
}

</style>

