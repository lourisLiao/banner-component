<template>
    <div class="container" @mousein="hover = true" @mouseout="hover = false">
        <div class="type_symbol">
            <div class="loading" v-show="type === 'loading'">
                <img class="loading_symbol" ref="spinner"/>
            </div>
            <div v-show="type === 'normal'">normal icon</div>
            <div v-show="type === 'success'">success icon</div>
            <div v-show="type === 'error'">error icon</div>
        </div>

        <div class="text">{{ text }}</div>

        <div class="extra" v-show="extraOption" @click="handleOnClick">{{ extraOptionText }}</div>
    </div>
</template>
<script lang="ts">
    import styleScope from './index.styl';
    import { spinnerRotate } from "shared/utils/animation";

    export default {
        name: 'banner',
        data() {
            return {
                styleScope,
                visible: false,
                type: '',
                text: '',
                hover: false,
                extraOptionText: '撤销',
                extraOption: false,
                duration: null,
                callback: null,
                autoCloseTimerId: null,
            }
        },
        watch: {
            visible(val) {
                this.$nextTick(() => {
                    if (val) {
                        this.bannerEntryAnimate();
                    }else {
                        this.bannerExitAnimate();
                    }
                })
            },
            hover(hover) {
                if (!this.extraOption) return;

                if (hover) {
                    this.cleanAutoCloseTimer();
                }else {
                    this.setAutoCloseTimer();
                }
            }
        },
        methods: {
            handleOnClick() {
                this.callback();
            },
            bannerEntryAnimate() {
                let $wrapper = this.$el;

                let animation = $wrapper.anime({
                    top: {
                        value: [-40, DeviceInfo.isOSX() || DeviceInfo.isMac() ? 16 : 46]
                    }
                }, {
                    easing: 'spring',
                    stiffness: 300,
                    velocity: 5,
                    dampingRadio: 1,
                });

                animation.play();

                this.cleanAutoCloseTimer();
                this.setAutoCloseTimer();
            },
            bannerExitAnimate() {
                let $wrapper = this.$el;

                let animation = $wrapper.anime({
                    top: {
                        value: ['current', -40]
                    }
                }, {
                    easing: 'spring',
                    stiffness: 300,
                    velocity: 5,
                    dampingRadio: 1,
                });

                animation.onComplete(() => {
                    this.extraOption = false;
                    this.extraOptionText = '';
                });

                animation.play();
            },
            setAutoCloseTimer() {
                this.duration = this.type === 'loading' ? 0 : 3000;
                if (this.duration > 0) {
                    this.autoCloseTimerId = setTimeout(() => {
                        this.visible = false;
                        this.cleanAutoCloseTimer();
                    }, this.duration);
                }
            },
            cleanAutoCloseTimer() {
                if (this.autoCloseTimerId) {
                    clearTimeout(this.autoCloseTimerId);
                    this.autoCloseTimerId = null;
                }
            }

        },

        mounted() {
            this._animate = spinnerRotate(this.$refs.spinner);
            this._animate.rotateStart();
        }
    }

</script>