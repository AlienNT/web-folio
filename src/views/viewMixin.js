export const ViewMixin = {
    computed: {
        scrollEvent() {
            return this.$store.getters['GET_SCROLL_EVENT']
        },
        element() {
            return this.$refs[this.$options.name]
        },
        refName() {
            return this.$options.name
        }
    },
    methods: {
        scrolling() {
           return this.$store.dispatch('scrollAction', {
                event: this.scrollEvent,
                element: this.element,
                refName: this.refName
            })
        }
    },
    watch: {
        scrollEvent: {
            handler(e) {
                this.scrolling(e)
            }
        }
    },
}