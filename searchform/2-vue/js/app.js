import SearchModel from "./models/SearchModel.js";

new Vue({
    // element를 의미하는 el
    // vue index가 어디에 바이딩될지 선택
    el: '#app',
    data: {
        //입력 데이터 받아서 저장할 data
        query: '',
        submitted: false,
        searchResult: []
    },
    methods: {
        onSubmit(e) {
            this.search()
        },
        onKeyup() {
            if (!this.query.length) this.onReset()
        },
        onReset() {
            this.query = ''
            // 검색 결과 숨기는 로직
            debugger
        },
        search() {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        },
    }
})