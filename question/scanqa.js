(function() {
    var answer = {};
    Vue.component('single', {
        props: ['question', 'optionitem', 'option', 'index'],
        template: '<label class="check-label"><input type="radio" :name="question.id" @click="answerHandler(question.id,option)" :class="classObject" class="option"/><i>{{option}}</i>{{optionitem.text}}</label>',
        computed: {
            classObject: function() {
                return {
                    'check-right': this.optionitem.isright === 'right',
                    'check-error': this.optionitem.isright === 'error',
                    'check-forgot': this.optionitem.isright === 'forgot'
                }
            }
        },
        methods: {
            answerHandler: function(qid, option) {
                answer[qid] = option;
            }
        }
    });
    Vue.component('judge', {
        props: ['question'],
        template: '<div class="judgeitems"><label class="check-label"><input type="radio" :name="question.id" @click="answerHandler($event,question.id)" :class="classObject" class="option" value="true"/><i>正确</i></label><label class="check-label"><input type="radio" :name="question.id" @click="answerHandler($event,question.id)"  :class="classObject" class="option" value="false"/><i>错误</i></label></div>',
        computed: {
            classObject: function() {
                return {
                    'check-right': this.question.isright,
                    'check-error': this.question.isright === false
                }
            }
        },
        methods: {
            answerHandler: function(elem, qid) {
                answer[qid] = elem.target.value;
            }
        }
    });
    Vue.component('mutli', {
        props: ['question', 'optionitem', 'option', 'index'],
        template: '<label class="check-label"><input type="checkbox" :name="question.id" @click="answerHandler($event,question.id,option)" :class="classObject" class="option"/><i>{{option}}</i>{{optionitem.text}}</label>',
        computed: {
            classObject: function(elem) {
                return {
                    'check-right': this.optionitem.isright === 'right',
                    'check-error': this.optionitem.isright === 'error',
                    'check-forgot': this.optionitem.isright === 'forgot'
                }
            }
        },
        methods: {
            answerHandler: function(elem, qid, option) {
                if (typeof(answer[qid]) == 'undefined') {
                    answer[qid] = [];
                }
                if (elem.target.checked) {
                    answer[qid].push(option);
                } else {
                    for (var i = 0; i < answer[qid].length; i++) {
                        if (answer[qid][i] == option) {
                            answer[qid].splice(i);
                        }
                    }
                }
            }
        }
    });
    var vm = new Vue({
        el: "#qa",
        data: {
            questions: qaList,
            optionList: ["A", "B", "C", "D", "E", "F"],
            issubmit: false,
            typejson: { 1: "单选题", 2: "多选题", 4: "判断题" }
        },
        filters:{
        	formatAnswer:function(value){
        		if(value==='true'){
        			return '正确';
        		}else if(value==='false'){
        			return '错误';
        		}else{
        			return value;
        		}
        	}
        },
        methods: {
            getTypestr: function(index) {
                return this.typejson[index];
            },
            getOption: function(index) {
                return this.optionList[index];
            },
            renderAns: function() {
                document.body.scrollTop=0;
                this.issubmit = true;
                var qlen = 0;
                for (; qlen < this.questions.length; ++qlen) {
                    var qid = this.questions[qlen].id;
                    var chliceitems = this.questions[qlen].choiceList;
                    var correctAnswer = this.questions[qlen].correctAnswer;
                    var type = this.questions[qlen].type;
                    var selfans;
                    if (type == 2) {
                        selfans = answer[qid] || [];
                        selfans = selfans.sort().join(";");
                    } else {
                        selfans = answer[qid] || ""
                    }
                    this.$set(this.questions[qlen], 'selfAns', selfans || "未选择");
                    if (selfans == correctAnswer) {
                        this.$set(this.questions[qlen], 'isright', true);
                    } else {
                        this.$set(this.questions[qlen], 'isright', false);
                    }
                    var itemnum = 0;
                    for (; itemnum < chliceitems.length; ++itemnum) {
                        if (correctAnswer.indexOf(this.optionList[itemnum]) >= 0 && selfans.indexOf(this.optionList[itemnum]) >= 0) {
                            //正确
                            this.$set(this.questions[qlen].choiceList[itemnum], 'isright', "right");
                        } else if (correctAnswer.indexOf(this.optionList[itemnum]) >= 0 && selfans.indexOf(this.optionList[itemnum]) < 0) {
                            //忘选
                            this.$set(this.questions[qlen].choiceList[itemnum], 'isright', "forgot");
                        } else if (correctAnswer.indexOf(this.optionList[itemnum]) < 0 && selfans.indexOf(this.optionList[itemnum]) >= 0) {
                            //选错了。
                            this.$set(this.questions[qlen].choiceList[itemnum], 'isright', "error");
                        }
                    }
                }
            }
        }
    })
})()
