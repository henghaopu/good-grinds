<template>
    <div class="navbar">
        <nav class="nav-extended brown darken-1">
            <div class="nav-content">
                <router-link to="">
                    <span class="nav-title">Good Grinds</span>
                </router-link>
                <a href="" class="btn-floating btn-large halfway-fab orange darken-1">
                    <router-link to="">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
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
</style>

