"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function totalvalue(data) {
    return {
        type: 'TOTAL_VALUE',
        data: data
    };
}
exports.totalvalue = totalvalue;
function scoreToStartInitValue(data) {
    return {
        type: 'STS_INITVALUE',
        data: data
    };
}
exports.scoreToStartInitValue = scoreToStartInitValue;
function scoreToStartValue(data) {
    return {
        type: 'STS_VALUE',
        data: data
    };
}
exports.scoreToStartValue = scoreToStartValue;
function remark(data) {
    return {
        type: 'REMARK_VALUE',
        data: data
    };
}
exports.remark = remark;
function recommend(data) {
    return {
        type: 'RECOMMEND_VALUE',
        data: data
    };
}
exports.recommend = recommend;
