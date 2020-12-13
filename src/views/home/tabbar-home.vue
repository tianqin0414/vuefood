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
        <van-sidebar v-model="activeKey" style="height: 40rem;background-color: #f7f8fa">
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
        </van-sidebar>
                </van-col>
                <van-col span="20">
        <div style="background-color: red">33333333</div>
                </van-col>
            </van-row>
        </div>
        <section class="buy_cart_container cart_icon_activity">
            <section class="cart_icon_num">
                <div class="cart_icon_container" >
<span class="cart_list_length">
                                    56
                                </span>
                    <img src="../../assets/images/cart_icon.png" class="cart_icon"/>
                </div>
            </section>

        </section>
    </div>
</template>

<script>
    import { Col, Row,Sidebar,SidebarItem } from 'vant';
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import ImagePreviewItem from "vant/es/image-preview/ImagePreviewItem";

    export default {
        // name: 'Home',
        data() {
            return {
                activeKey: 0,
            };
        },
        components: {
            ImagePreviewItem,
            HelloWorld,
            [Col.name]: Col,
            [Row.name]: Row,
            [Sidebar.name]:Sidebar,
            [SidebarItem.name]:SidebarItem
        },
    }
</script>

<style lang="scss" scoped>
    .buy_cart_container {
        position: absolute;
        background-color: #3d3d3f;
        bottom: 0;
        left: 0;
        z-index: 13;
        display: flex;
        width:100%;
        height: 2rem;
        .cart_icon_num {
            flex: 1;
            .cart_icon_container {
                display: flex;
                background-color: #006025;
                position: absolute;
                padding: .4rem;
                border: 0.18rem solid #444;
                border-radius: 50%;
                left: .5rem;
                top: -.7rem;
                .cart_icon {
                    width: 1.2rem;
                    height: 1.2rem;
                }
                .cart_list_length{
                    position: absolute;
                    top: -.25rem;
                    right: -.25rem;
                    background-color: #ff461d;
                    line-height: .7rem;
                    text-align: center;
                    border-radius: 50%;
                    border: 0.025rem solid #ff461d;
                    min-width: .7rem;
                    height: .7rem;
                    size:.5rem;
                    color: #fff;
                }
            }
        }
        .cart_icon_activity{
            background-color: #ffe35c;
        }
    }

    </style>
