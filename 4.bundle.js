webpackJsonp([4],{

/***/ 20:
/*!******************************!*\
  !*** ./js/views/question.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var Question = Vue.extend({
	    template: __webpack_require__(/*! ../template/question.html */ 21),
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


/***/ },

/***/ 21:
/*!***********************************!*\
  !*** ./js/template/question.html ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = "<button v-on:click=\"submit\">提交</button>\n<template v-for=\"questionGroup in questionGroupArr\">\n<fieldset>\n    <legend>{{questionGroup.label}}</legend>\n\n    <div style=\"margin-top:20px\" class=\"question-container\" v-for=\"question in questionGroup.questions\">\n        <fieldset class='fieldset-related'  id={{question.id}} data-recordid=\"{{question.currentRecordId}}\" data-telephonetype=\"{{question.currentTelephoneType}}\" data-phone=\"{{question.currentPhone}}\" data-questiontype=\"{{question.questionType}}\" data-answertype=\"{{question.answerType}}\">\n            <legend v-if=\"question.answerType !== 'HTML_BLANK'\" class='legend-inherit'>\n                {{question.id}} <span class=\"question-desc\">{{question.description}}</span>\n                <template v-if=\"question.questionType === 'CROSS_QUESTION'\">\n                <label class=\"question-remark-label\">备注:</label>\n                <input class=\"question-remark\" value=\"<%=question.currentRemark%>\"\n                       data-dojo-type=\"dijit/form/TextBox\"    />\n                </template>\n            </legend>\n            <!--单选框-->\n            <div class=\"fieldset-related-container\">\n                <div v-if=\"question.answerType === 'HTML_TEXT'\" class=\"fieldset-related-container\">\n                    <textarea data-parentid=\"{{question.id}}\"  id='{{question.id + ';;'}}' data-dojo-type=\"dijit/form/Textarea\" name=\"{{question.id}}\" value='{{question.currentAnswerDesc}}'></textarea>\n                </div>\n                <div v-if=\"question.answerType === 'HTML_BLANK'\" class=\"fieldset-related-container\">\n                    {{question.id}} {{question.description}}\n                </div>\n                <template v-if=\"question.answerType === 'HTML_RADIO_GROUP'\">\n                <template  v-for=\"answer in question.answerList\">\n                <input :value=\"{description: answer.description, selectedAnswer: answer.id}\" v-model=\"question.selectedAnswer\" data-desc=\"{{answer.description}}\" data-parentid=\"{{question.id}}\" type=\"radio\" name=\"{{question.id}}\"  value=\"{{answer.id}}\"\n                id='{{question.id}};{{answer.id}};{{answer.subQuestionId}}' class='{{answer.subQuestionId}}' />\n                <label for=\"\">{{answer.description}}</label>\n                </template>\n                </template>\n\n                <template v-if=\"question.answerType === 'HTML_MULTI'\">\n                <template v-for=\"answer in question.answerList\">\n                <input v-model=\"question.answerId\" value=\"{{answer.id}}\" data-desc=\"{{answer.description}}\" data-parentid=\"{{question.id}}\" type=\"checkbox\" name=\"{{question.id}}\"\n                id='{{question.id}};{{answer.id}};{{answer.subQuestionId}}' class='{{answer.subQuestionId}}' />\n                <label for=\"\">{{answer.description}}</label>\n                </template>\n                </template>\n\n            </div>\n        </fieldset>\n    </div>\n\n\n</fieldset>\n</template>\n\n<input id=\"mf1\" value=\"a\" type=\"checkbox\" name=\"aasdf\"  v-model=\"aa\"/>\n<input id=\"mf2\" value=\"b\" type=\"checkbox\" name=\"aasdf\" v-model=\"aa\"/>\n";

/***/ }

});
//# sourceMappingURL=4.bundle.js.map