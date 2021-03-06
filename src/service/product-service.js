/*
* @Author: Administrator
* @Date:   2017-08-28 09:01:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-04 12:31:58
*/
'use strict';
var _mm = require('util/util.js');
var _product = {
    // 获取商品列表
    getProductList : function(listParam, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/list.do'),
            data    : listParam,
            success : resolve,
            method  : 'GET',
            error   : reject
        });
    },
    // 获取商品详细信息
    getProductDetail : function(productId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/detail.do'),
            data    : {
                productId : productId
            },
            success : resolve,
            method  : 'GET',
            error   : reject
        });
    }
}
module.exports = _product;