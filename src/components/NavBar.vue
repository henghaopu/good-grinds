<template>
    <div class="navbar">
        <nav class="nav-extended brown darken-1">
            <div class="nav-content">
                <router-link :to="{ name: 'home' }">
                    <span class="nav-title" ontouchstart="">Good Grinds</span>
                    <img class="favicon" :src="logoUrl" alt="logo" width="40px" height="40px;">
                </router-link>
                <router-link :to="{ name: 'adding-coffee' }" class="btn-floating btn-large halfway-fab orange darken-1 nav-add">
                    <i class="material-icons" ontouchstart="">add</i>
                </router-link>
            </div>    
        </nav>        
    </div>
</template>

<script>
import db, {storage} from '@/firebase/init'
export default {
    name: 'NavBar',
    data() {
        return {
            logoInfo: null,
            logoUrl: null
            
        }
    },
    created() {
        let docRef = db.collection('logo').doc('logoPath')
        docRef.get().then(docSnapshot => {
            if (docSnapshot.exists) {
                this.logoInfo = docSnapshot.data()
                this.logoInfo.id = docSnapshot.id
            }
        }).then(() => {
            // Create a storage reference from the storage service
            console.log(this) // undefine
            let logoRef = storage.ref(this.logoInfo.folderName)
            let spaceRef = logoRef.child(this.logoInfo.imageName + '.' + this.logoInfo.extension)
            spaceRef.getDownloadURL().then(url => {
                this.logoUrl = url
            }).catch(err => {
                console.log(err)
            })
        })
        
        // storageRef.getMetadata().then(metadata => {
        //     this.logoSrc = metadata.
        // }).catch(err => {
        //     console.log(err)
        // })
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Caveat');
.navbar nav {
    padding: 0 1.25rem;
}
.nav-title {
    font-family: 'Caveat', cursive;
}
.nav-title:active {
    color: hsl(33, 100%, 50%);
}
.nav-content i:active {
    background: hsl(33, 100%, 60%);
}
.nav-content a:focus {
    outline: 2px dashed pink;
}
.nav-content a:first-child {
    position: relative;
}
.favicon {
    position: absolute; 
    right: -18px;
    bottom: 13px;
}
</style>

