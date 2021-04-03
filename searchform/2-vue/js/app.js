import SearchModel from "./models/SearchModel.js";
import KeywordModel from "./models/KeywordModel.js";

new Vue({
    // element를 의미하는 el
    // vue index가 어디에 바이딩될지 선택
    el: '#app',
    data: {
        //입력 데이터 받아서 저장할 data
        query: '',
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: '',
        keywords: [],
        searchResult: []
    },
    created() {
        this.selectedTab = this.tabs[0]
        this.fetchKeyword();
    },
    methods: {
        onSubmit(e) {
            this.search()
        },
        onKeyup() {
            if (!this.query.length) this.onReset()
        },
        onClickTab(tab) {
            this.selectedTab = tab
        },
        onClickKeyword(keyword) {
            this.query = keyword
            this.search()
        },
        fetchKeyword() {
            KeywordModel.list().then(data => {
                this.keywords = data
            })
        },
        onReset() {
            this.query = ''
            // 검색 결과 숨기는 로직
            this.submitted = false
            this.searchResult = []
        },
        search() {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        },
    }
})