<template>
    <div class="navbar">
        <nav class="nav-extended brown darken-1">
            <div class="nav-content">
                <router-link :to="{ name: 'home' }">
                    <span class="nav-title">Good Grinds</span>
                </router-link>
                <router-link :to="{ name: 'adding-coffee' }" class="btn-floating btn-large halfway-fab orange darken-1">
                    <i class="material-icons">add</i>
                </router-link>
            </div>    
        </nav>        
    </div>
</template>

<script>

export default {
    name: 'NavBar',
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
.navbar nav {
    padding: 0 1.25rem;
}
.nav-content a:focus {
    outline: 2px dashed pink;
}
</style>

