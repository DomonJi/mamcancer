/*
 * main.js
 * Copyright (C) 2016 disoul <disoul@disoul-surface>
 *
 * Distributed under terms of the MIT license.
 */
require('../postcss/index.css');
require('./rem.js');
import Vue from 'vue'

var years = [];
for (let i = 1960;i <= 2000;i++){
  years.push(i);
}
var globalData = {
  index: 0,
  share: false,
  activeIndex: -1,
  years: years,
  finish: false,
  result: {
    text: '低风险',
    percent: '20%',
    avg_percent: '10%',
    suggestion: '增强乳腺健康意识<br/>每年一侧专科体格检查'
  },
  load_percent: 0,
  loaded: false,
  mouths: ['01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12],
  questions: [
    {
      title: '请选择你的出生年月',
      options: [],
    },
    {
      title: '您还记得<br>初次月经来潮的年龄么',
      options: ['不知道', '7-11岁', '12-13岁', '14岁以后']
    },
    {
      title: '您的第一个宝宝<br>在您几岁的时候出生',
      options: ['还没生', '20岁前', '20-24岁', '25-29岁', '30岁后']
    },
    {
      title: '在您的母亲，姐妹或女儿中<br>有乳腺癌患者么',
      options: ['不知道', '没有', '有一个', '大于一个']
    },
    {
      title: '您是否曾进行过<br>乳腺活检手术(微创手术)',
      options: ['是的', '没有 ']
    },
  ],
  answer: [],
}

var intervalId;

var root = new Vue({
  el: '#app',
  data: globalData,
  methods: {
    enter: function(data) {
      let idx = this.index;
      if (idx == 0) {
        this.answer.push(
          [
            document.getElementById('yearpicker').value,
            document.getElementById('mouthpicker').value
          ]
        );
      } else {
        this.answer.push(data);
      }
      this.toNextScent();
    },
    toNextScent: function() {
      if (this.index < 4) {
        this.index++;
      } else {
        /*
         * 这里开始处理问卷结果逻辑
         * this.answer 是一个数组包含5个值，如下
         * [[1995,2], 1, 2, 0, 1]
         * 分别表示问题1 到 5的选择情况
         * 0就是第一个选项1就是第二个，第一个数组表示出生日期
         *
         * this.result 表示显示出来的结果
         * this.result.text ‘高风险’ ‘低风险’ 中的一个
         * this.result.percent 表示未来5年患病概率，数字，默认20
         * this.result.avg_percent 表示未来5年平均患病概率，数字，默认10
         * this.result.suggest 表示建议，用<br/>来表示换行，字符串
        */
        if (this.answer[4] == 0) {
          this.result.text = '低风险';
        console.log(this.answer);
        } else {
          this.result.text = '高风险';
        }

        /* 问卷结果逻辑结束 */
        this.finish = true;
      }
    },
    updateLoad: function(){
      console.log('update');
      this.load_percent += 5;
      if (this.load_percent >= 95) {
        clearInterval(intervalId);
      }
    },
    redo: function(){
      this.answer = [];
      this.finish = false;
      this.index = 0;
    },
    sharee: function(){
      console.log('share');
      this.share = true;
    },
    cancelshare: function() {
      this.share = false;
    },
    click: function(event, index) {
      console.log(event);
      this.activeIndex = index;
      let self = this;
      event.target.addEventListener('touchend', function() {
        console.log('up');
        self.activeIndex = -1;
      });
    },
  },
  created: function() {
    intervalId = setInterval(this.updateLoad.bind(this), 150);
  },
  
});

$("#yearpicker").drum({});
$("#mouthpicker").drum({});

window.onload = function () {
  console.log('12313');
  root.loaded = true;
  clearInterval(intervalId);
};

Hammer.plugins.fakeMultitouch();

