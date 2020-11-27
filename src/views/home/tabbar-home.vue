<template>
    <div class="tab_home">
        <!--<HelloWorld msg="222Welcome to Your Vue.js App"/>-->
        <!--<van-row>-->
            <!--<van-col span="4">span: 8</van-col>-->
            <!--<van-col span="12">span: 8</van-col>-->
            <!--<van-col span="8">span: 8</van-col>-->
        <!--</van-row>-->
        <div>
            <van-row style="display: flex">
                <van-col span="4">
        <van-sidebar v-model="activeKey" style="height: 78rem;background-color: #f7f8fa">
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
        </van-sidebar>
                </van-col>
                <van-col span="16">
        <div style="background-color: red">33333333</div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import { Col, Row,Sidebar,SidebarItem } from 'vant';
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        // name: 'Home',
        data() {
            return {
                activeKey: 0,
            };
        },
        components: {
            HelloWorld,
            [Col.name]: Col,
            [Row.name]: Row,
            [Sidebar.name]:Sidebar,
            [SidebarItem.name]:SidebarItem
        },
    }
</script>
