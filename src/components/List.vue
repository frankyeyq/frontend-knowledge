<template>
    <el-row class="menu">
        <el-col :span="24">
            <h5>前端知识</h5>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <!-- <el-submenu index="1">
                    <template slot="title">
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="2">
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <span slot="title">导航三</span>
                </el-menu-item> -->
                <template v-for="(item, index) in $router.options.routes">
                    <el-submenu :index="index+''" :key="index" v-if="item.children && item.children.length>0">
                        <template slot="title">
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item-group v-for="(child, index) in item.children" :key="index">
                            <el-menu-item index="index">{{child.name}}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item :index="index+''" v-else :key="index">
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-col>
    </el-row>
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
.menu{
    width: 300px;
    min-height: 100vh;
    box-shadow: 0 0 40px #CCC;
    .el-menu{
        text-align: left;
        border-right: none;
    }
}
</style>