<template>
    <!--<van-tabbar v-model="active" style="z-index: 1999">-->
        <!--<van-tabbar-item-->
                <!--v-for="(tab, index) in tabbar"-->
                <!--:icon="tab.icon"-->
                <!--:to="tab.path"-->
                <!--:dot="tab.dot"-->
                <!--:info="tab.info"-->
                <!--:key="index">-->
            <!--{{tab.name}}-->
        <!--</van-tabbar-item>-->
    <!--</van-tabbar>-->
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o" badge="5">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o" badge="20">标签</van-tabbar-item>
    </van-tabbar>
</template>


<script>
    import { Tabbar, TabbarItem } from 'vant';

    export default {
        data() {
            return {
                active: 0,
                tabbar: [
                    {
                        name: '精选',
                        path: '/',
                        pathName: 'home',
                        icon: 'compass-full',
                        dot: false,
                        info: ''
                    },
                    {
                        name: '分类',
                        path: '/items',
                        pathName: 'class',
                        icon: 'class-full',
                        dot: false,
                        info: ''
                    },
                    {
                        name: '购物车',
                        path: '/order',
                        pathName: 'cart',
                        icon: 'cart-full',
                        dot: false,
                        info: ''
                    },
                    {
                        name: '我的',
                        path: '/user',
                        pathName: 'user',
                        icon: 'wode',
                        dot: false,
                        info: ''
                    }
                ]
            };
        },

        watch: {
            $route: 'changeActive'
        },

        created() {
            const toName = this.$route.name;
            this.setActive(toName);
        },

        methods: {
            changeActive({ name }) {
                this.setActive(name);
            },
            setActive(name) {
                this.tabbar.forEach((tab, i) => {
                    if (tab.pathName == name) {
                        this.active = i;
                        return false;
                    }
                });
            }
        },

        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem
        }
    };
</script>
