<template>
    <div class="main">
        <el-row class="menu">
            <el-col :span="24">
                <h5>前端知识</h5>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
                        <el-menu-item-group :key="index" v-if="item.children && item.children.length>0">
                            <template slot="title">{{item.name}}</template>
                            <el-menu-item index="1-1" v-for="(child, index) in item.children" :key="index"><router-link :to="child.path">{{child.name}}</router-link></el-menu-item>
                        </el-menu-item-group>
                    </template>
                </el-menu>
            </el-col>
        </el-row>
        <div class="router-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    mounted() {
        console.log(this.$router.options.routes);
    }
}
</script>

<style lang="scss">
html, body{
    margin: 0;
    padding: 0;
}
.main{
    display: flex;
    .menu{
        width: 300px;
        min-height: 100vh;
        box-shadow: 0 0 40px #CCC;
        .el-menu{
            text-align: left;
            border-right: none;
        }
    }
    .router-container{
        flex: 1;
        padding: 20px;
        text-align: left;
    }
}

</style>