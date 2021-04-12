export default {
    template: '#search-form',

    // View 인스턴스와 Form 컴포넌트간의 데이터 연결
    props: ['value'],
    data() {
        return {
            inputValue: this.value
        }
    },
    // vue model을 감시하고 있다가 해당 값이 변경되면 실행됨
    watch: {
      value(newVal, oldVal) {
          this.inputValue = newVal
      }
    },
    methods: {
        onSubmit() {
            this.$emit('@submit', this.inputValue.trim())
        },
        onKeyup() {
            if (!this.inputValue.length) this.onReset()
        },
        onReset() {
            this.inputValue = ''
            this.$emit('@reset')
        }
    }
}