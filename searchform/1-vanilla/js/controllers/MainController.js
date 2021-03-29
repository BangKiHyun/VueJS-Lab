import FormView from "../views/FormView.js";
import ResultView from "../views/ResultView.js";
import TabView from "../views/TabView.js";
import KeywordView from "../views/KeywordVIew.js";
import HistoryView from "../views/HistoryView.js";

import SearchModel from "../models/SearchModel.js";
import KeywordModel from "../models/KeywordModel.js";
import HistoryModel from "../models/HistoryModel";

const tag = '[MainController]'

export default {
    init() {
        console.log(tag, 'init()')
        FormView.setup(document.querySelector('form'))
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.onResetForm())

        TabView.setup(document.querySelector('#tabs'))
            .on('@change', e => this.onChangeTab(e.detail.tabName))

        KeywordView.setup(document.querySelector('#search-keyword'))
            .on('@click', e => this.onClickKeyword(e.detail.keyword))

        HistoryView.setup(document.querySelector('#search-history'))
            .on('@click', e => this.onClickHistory(e.detail.keyword))

        ResultView.setup(document.querySelector("#search-result"))

        this.selectedTab = '최근 검색어'
        this.renderView()
    },

    // 모든 View 한번에 호출
    renderView() {
        console.log(tag, 'renderView()')
        TabView.setActiveTab(this.selectedTab)

        if (this.selectedTab === '추천 검색어') {
            this.fetchSearchKeyword()
        } else {
            this.fetchSearchHistoryKeyword()
        }

        ResultView.hide()
    },

    fetchSearchKeyword() {
        KeywordModel.list().then(data => {
            KeywordView.render(data)
        })
    },

    fetchSearchHistoryKeyword() {
        HistoryModel.list().then(data => {
            HistoryView.render(data)
        })
    },

    search(query) {
        console.log(tag, 'search()', query)
        // search api
        FormView.setValue(query)
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })
    },

    onSubmit(input) {
        console.log(tag, 'onSubmit()', input)
        this.search(input)
    },

    onResetForm() {
        console.log(tag, 'onResetForm()')
        this.renderView()
    },

    onSearchResult(data) {
        TabView.hide()
        KeywordView.hide()
        ResultView.render(data)
    },

    onChangeTab(tabName) {
        debugger
    },

    onClickKeyword(keyword) {
        this.search(keyword)
    },

    onClickHistory(keyword){
        this.search(keyword)
    },
}