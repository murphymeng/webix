var Question = Vue.extend({
    template: require('../template/question.html'),
    data: function (transition) {
        return {
            aa: {'mf': 'cccc'},
            cities: [{
                id: 1,
                name: '上海'
            }, {
                id: 2,
                name: '北京'
            }]
        }
    },
    computed: {

    },
    methods: {
        submit: function() {
            $.each(this.questionGroupArr[0].questions, function(idx, question) {
                if (question.answerType === 'HTML_MULTI') {
                    question.answerDesc = [];
                    var selectedAnswers = question.answerList.filter(function(item) {
                        return question.answerId.indexOf(item.id) >= 0;
                    });
                    $.each(selectedAnswers, function(index, answer) {
                        question.answerDesc.push(answer.description);
                    });
                }
            });
        }
    },
    route:  {
        activate: function (transition) {
            var self = this;

            this.$http({url: './data/question.json', method: 'GET'}).then(function (response) {
                  self.items = response.data;
                  this.$set('questionGroupArr', []);
                  this.questionGroupArr.push({
                      'label': '交叉问题库',
                      'questions': response.data.body.obj.crossQuestionList
                  });

                  //debugger
                  $.each(this.questionGroupArr[0].questions, function(idx, question) {
                      if (question.answerType === 'HTML_MULTI') {
                          question.answerId = [];
                        //   self.$watch('question.answerId', function (val) {
                        //       //alert(question.answerId);
                        //       //this.fullName = val + ' ' + this.lastName
                        //   })
                      }
                  })

            }, function (response) {
                  // error callback
            });

            transition.next()
        },
        deactivate: function (transition) {
            console.log('hook-example deactivated!')
            transition.next()
        }
    }

});
module.exports = Question;
