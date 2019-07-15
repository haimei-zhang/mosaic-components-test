(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-mosaic-icons></app-mosaic-icons>\r\n<router-outlet></router-outlet>\r\n<div class=\"mosaic-loading mosaic-spinner\" *ngIf=\"isLoading\"></div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contract-reference-manager/contract-reference-manager.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contract-reference-manager/contract-reference-manager.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contract-reference-manager works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/error-page/error-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/error-page/error-page.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"error-wrapper\">\r\n  <div id='content'>\r\n    <div class=\"logo\">\r\n      <img src=\"../../../../assets/images/advanced-horizontal.svg\" alt=\"Advanced\" class=\"img-responsive\">\r\n    </div>\r\n    <div id=\"icon\">\r\n      <img src=\"../../../../assets/images/nothing.svg\" alt=\"nothing found\" class=\"img-responsive\">\r\n    </div>\r\n    <h4>Hmm. Something's not quite right... We can't find that page!</h4>\r\n    <p>If you're worried, get in contact with our\r\n      <a href=\"https://www.oneadvanced.com/customer-support/\">support team.</a>\r\n    </p>\r\n    <button (click)=\"goBack()\" class=\"back-btn\">Take me back</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/file-export/file-export.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/file-export/file-export.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mosaic-button icon=\"download\" color=\"advanced\" click=\"download()\" disabled=\"{{!isEnabled}}\">\r\n  {{'CPA_MANAGER.REQUEST_EXPORT' | translate}}\r\n</mosaic-button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/file-upload/file-upload.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/file-upload/file-upload.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mosaic-button icon=\"send_file\" color=\"advanced\" class=\"mr-2 mb-1\" click=\"openFileUploader($event)\" disabled=\"{{!isEnabled}}\">\r\n  {{'COMMON.UPLOAD' | translate}}\r\n  <input id=\"upload-cpa-input\" type=\"file\" (change)=\"onFileUpload($event)\" accept=\".txt,.csv,.xls,.xlsx\" [hidden]=\"true\" hidden>\r\n</mosaic-button>\r\n\r\n<div [hidden]=\"!attachment\" class=\"upload-confirmation__wrap mb-1\">\r\n  <div class=\"upload-confirmation__filename mr-2\" *ngIf=\"attachment\">\r\n    <strong>File selected:</strong>\r\n    <span title=\"{{attachment?.name}}\">{{attachment?.name | trim:20}}</span>\r\n  </div>\r\n  <span (click)=\"resetUploadAttachment()\"><svg class=\"icon\" width=\"20\" height=\"20\"><use xlink:href='#cross' href='#cross'></use></svg></span>\r\n  <mosaic-button color=\"success\" xs click=\"submitUpload()\">\r\n    {{'COMMON.CONFIRM' | translate}}\r\n  </mosaic-button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/footer/footer.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/footer/footer.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer theme-dark\">\r\n  <div class=\"footer-logo\">\r\n    <img src=\"assets/images/advanced-logo-white.svg\" alt=\"advanced logo\" width=\"164\" height=\"34\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/modal/modal.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/modal/modal.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\" id=\"uploadModalLabel\">{{title}}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div [innerHTML]=\"content | safeHtml\"></div>\r\n</div>\r\n\r\n<div class=\"modal-footer\">\r\n  <ng-container *ngIf=\"footerFormat === 'ok'\">\r\n    <button type=\"button\" class=\"btn btn-advanced\" (click)=\"bsModalRef.hide()\">OK</button>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"footerFormat === 'yes_no'\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">No</button>\r\n    <button type=\"button\" class=\"btn btn-advanced\" (click)=\"bsModalRef.hide()\">Yes</button>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"footerFormat === 'text_form'\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-advanced\" (click)=\"bsModalRef.hide()\">Submit</button>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"footerFormat === 'custom_action'\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">{{actionText[0]}}</button>\r\n    <button type=\"button\" class=\"btn btn-advanced\" (click)=\"bsModalRef.hide()\">{{actionText[1]}}</button>\r\n  </ng-container>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/mosaic-icons/mosaic-icons.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/mosaic-icons/mosaic-icons.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"svg-hidden\">\r\n  <symbol id=\"send_file\" viewBox=\"0 0 32 32\">\r\n    <path style=\" \" d=\"M 6 3 L 6 29 L 26 29 L 26 9.59375 L 25.71875 9.28125 L 19.71875 3.28125 L 19.40625 3 Z M 8 5 L 18 5 L 18 11 L 24 11 L 24 27 L 8 27 Z M 20 6.4375 L 22.5625 9 L 20 9 Z M 16.28125 13.28125 L 14.84375 14.71875 L 17.125 17 L 11 17 L 11 19 L 17.125 19 L 14.84375 21.28125 L 16.28125 22.71875 L 20.28125 18.71875 L 20.96875 18 L 20.28125 17.28125 Z \"/>\r\n  </symbol>\r\n  <symbol id=\"file\" viewBox=\"0 0 32 32\">\r\n    <path style=\" \" d=\"M 6 3 L 6 29 L 26 29 L 26 9.59375 L 25.71875 9.28125 L 19.71875 3.28125 L 19.40625 3 Z M 8 5 L 18 5 L 18 11 L 24 11 L 24 27 L 8 27 Z M 20 6.4375 L 22.5625 9 L 20 9 Z \"/>\r\n  </symbol>\r\n  <symbol id=\"download\" viewBox=\"0 0 32 32\">\r\n    <path style=\" \" d=\"M 15 4 L 15 20.5625 L 9.71875 15.28125 L 8.28125 16.71875 L 15.28125 23.71875 L 16 24.40625 L 16.71875 23.71875 L 23.71875 16.71875 L 22.28125 15.28125 L 17 20.5625 L 17 4 Z M 7 26 L 7 28 L 25 28 L 25 26 Z \"/>\r\n  </symbol>\r\n  <symbol id=\"check\" viewBox=\"0 0 32 32\">\r\n    <path style=\" \" d=\"M 16 3 C 8.800781 3 3 8.800781 3 16 C 3 23.199219 8.800781 29 16 29 C 23.199219 29 29 23.199219 29 16 C 29 14.601563 28.8125 13.207031 28.3125 11.90625 L 26.6875 13.5 C 26.886719 14.300781 27 15.101563 27 16 C 27 22.101563 22.101563 27 16 27 C 9.898438 27 5 22.101563 5 16 C 5 9.898438 9.898438 5 16 5 C 19 5 21.695313 6.195313 23.59375 8.09375 L 25 6.6875 C 22.699219 4.386719 19.5 3 16 3 Z M 27.28125 7.28125 L 16 18.5625 L 11.71875 14.28125 L 10.28125 15.71875 L 15.28125 20.71875 L 16 21.40625 L 16.71875 20.71875 L 28.71875 8.71875 Z \"/>\r\n  </symbol>\r\n  <symbol id=\"cross\" viewBox=\"0 0 32 32\">\r\n    <path style=\" \" d=\"M 8.71875 7.28125 L 7.28125 8.71875 L 14.5625 16 L 7.28125 23.28125 L 8.71875 24.71875 L 16 17.4375 L 23.28125 24.71875 L 24.71875 23.28125 L 17.4375 16 L 24.71875 8.71875 L 23.28125 7.28125 L 16 14.5625 Z \"/>\r\n  </symbol>\r\n  <symbol id=\"settings\" viewBox=\"0 0 32 32\">\r\n    <path d=\"M 13.1875 3 L 13.03125 3.8125 L 12.4375 6.78125 C 11.484375 7.15625 10.625 7.683594 9.84375 8.3125 L 6.9375 7.3125 L 6.15625 7.0625 L 5.75 7.78125 L 3.75 11.21875 L 3.34375 11.9375 L 3.9375 12.46875 L 6.1875 14.4375 C 6.105469 14.949219 6 15.460938 6 16 C 6 16.539063 6.105469 17.050781 6.1875 17.5625 L 3.9375 19.53125 L 3.34375 20.0625 L 3.75 20.78125 L 5.75 24.21875 L 6.15625 24.9375 L 6.9375 24.6875 L 9.84375 23.6875 C 10.625 24.316406 11.484375 24.84375 12.4375 25.21875 L 13.03125 28.1875 L 13.1875 29 L 18.8125 29 L 18.96875 28.1875 L 19.5625 25.21875 C 20.515625 24.84375 21.375 24.316406 22.15625 23.6875 L 25.0625 24.6875 L 25.84375 24.9375 L 26.25 24.21875 L 28.25 20.78125 L 28.65625 20.0625 L 28.0625 19.53125 L 25.8125 17.5625 C 25.894531 17.050781 26 16.539063 26 16 C 26 15.460938 25.894531 14.949219 25.8125 14.4375 L 28.0625 12.46875 L 28.65625 11.9375 L 28.25 11.21875 L 26.25 7.78125 L 25.84375 7.0625 L 25.0625 7.3125 L 22.15625 8.3125 C 21.375 7.683594 20.515625 7.15625 19.5625 6.78125 L 18.96875 3.8125 L 18.8125 3 Z M 14.8125 5 L 17.1875 5 L 17.6875 7.59375 L 17.8125 8.1875 L 18.375 8.375 C 19.511719 8.730469 20.542969 9.332031 21.40625 10.125 L 21.84375 10.53125 L 22.40625 10.34375 L 24.9375 9.46875 L 26.125 11.5 L 24.125 13.28125 L 23.65625 13.65625 L 23.8125 14.25 C 23.941406 14.820313 24 15.402344 24 16 C 24 16.597656 23.941406 17.179688 23.8125 17.75 L 23.6875 18.34375 L 24.125 18.71875 L 26.125 20.5 L 24.9375 22.53125 L 22.40625 21.65625 L 21.84375 21.46875 L 21.40625 21.875 C 20.542969 22.667969 19.511719 23.269531 18.375 23.625 L 17.8125 23.8125 L 17.6875 24.40625 L 17.1875 27 L 14.8125 27 L 14.3125 24.40625 L 14.1875 23.8125 L 13.625 23.625 C 12.488281 23.269531 11.457031 22.667969 10.59375 21.875 L 10.15625 21.46875 L 9.59375 21.65625 L 7.0625 22.53125 L 5.875 20.5 L 7.875 18.71875 L 8.34375 18.34375 L 8.1875 17.75 C 8.058594 17.179688 8 16.597656 8 16 C 8 15.402344 8.058594 14.820313 8.1875 14.25 L 8.34375 13.65625 L 7.875 13.28125 L 5.875 11.5 L 7.0625 9.46875 L 9.59375 10.34375 L 10.15625 10.53125 L 10.59375 10.125 C 11.457031 9.332031 12.488281 8.730469 13.625 8.375 L 14.1875 8.1875 L 14.3125 7.59375 Z M 16 11 C 13.25 11 11 13.25 11 16 C 11 18.75 13.25 21 16 21 C 18.75 21 21 18.75 21 16 C 21 13.25 18.75 11 16 11 Z M 16 13 C 17.667969 13 19 14.332031 19 16 C 19 17.667969 17.667969 19 16 19 C 14.332031 19 13 17.667969 13 16 C 13 14.332031 14.332031 13 16 13 Z \"/>\r\n  </symbol>\r\n</svg>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/supplier-dropdown/supplier-dropdown.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/supplier-dropdown/supplier-dropdown.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mosaic-dropdown color=\"default\" outline title=\"{{placeholder}}\">\r\n  <a href=\"javascript: void(0)\" *ngFor=\"let supplier of suppliers\" (click)=\"select(supplier)\">{{supplier[propertyName]}}</a>\r\n</mosaic-dropdown>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/core.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/core.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mosaic-row>\r\n  <mosaic-col>\r\n    <mosaic-card routerLink=\"/cpa-manager\">\r\n      <mosaic-card-body>\r\n        <h4>cpa Manager</h4>\r\n        <div>\r\n          content\r\n        </div>\r\n      </mosaic-card-body>\r\n    </mosaic-card>\r\n  </mosaic-col>\r\n  <mosaic-col>\r\n    <mosaic-card routerLink=\"/tag-manager\">\r\n      <mosaic-card-body>\r\n        <h4>tag Manager</h4>\r\n        <div>\r\n          content\r\n        </div>\r\n      </mosaic-card-body>\r\n    </mosaic-card>\r\n  </mosaic-col>\r\n  <mosaic-col>\r\n    <mosaic-card routerLink=\"/contract-reference-manager\">\r\n      <mosaic-card-body>\r\n        <h4>contract reference Manager</h4>\r\n        <div>\r\n          content\r\n        </div>\r\n      </mosaic-card-body>\r\n    </mosaic-card>\r\n  </mosaic-col>\r\n</mosaic-row>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cpa-manager/components/download-table/download-table.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cpa-manager/components/download-table/download-table.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mosaic-col lg=\"12\">\r\n  <mosaic-table striped bordered hover>\r\n    <table>\r\n      <thead>\r\n      <tr>\r\n        <th scope=\"col\">Description</th>\r\n        <th scope=\"col\">Status</th>\r\n        <th scope=\"col\">Date</th>\r\n        <th scope=\"col\" class=\"table-actions\">Actions</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let download of downloads\">\r\n        <td>{{download.name}}</td>\r\n        <td class=\"status-{{download.status | lowercase}}\" [ngSwitch]=\"download.status\">\r\n          <svg *ngSwitchCase=\"'Success'\" class=\"icon\" width=\"24\" height=\"24\"><use xlink:href='#check' href='#check'></use></svg>\r\n          <svg *ngSwitchCase=\"'Failed'\" class=\"icon\" width=\"24\" height=\"24\"><use xlink:href='#cross' href='#cross'></use></svg>\r\n          {{download.status}}\r\n        </td>\r\n        <td>{{download.datetime}}</td>\r\n        <td>\r\n          <mosaic-button color=\"advanced\">{{'COMMON.EXPORT' | translate}}</mosaic-button>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </mosaic-table>\r\n</mosaic-col>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cpa-manager/components/upload-table/upload-table.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cpa-manager/components/upload-table/upload-table.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mosaic-col lg=\"12\">\r\n  <mosaic-table striped bordered hover>\r\n    <table>\r\n      <thead>\r\n      <tr>\r\n        <th scope=\"col\">Report Name</th>\r\n        <th scope=\"col\">Status</th>\r\n        <th scope=\"col\">Date</th>\r\n        <th scope=\"col\" class=\"table-actions\">Actions</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let report of reports\">\r\n        <td>{{report.name}}</td>\r\n        <td class=\"status-{{report.status | lowercase}}\" [ngSwitch]=\"report.status\">\r\n          <svg *ngSwitchCase=\"'Success'\" class=\"icon\" width=\"24\" height=\"24\"><use xlink:href='#check' href='#check'></use></svg>\r\n          <svg *ngSwitchCase=\"'Failed'\" class=\"icon\" width=\"24\" height=\"24\"><use xlink:href='#cross' href='#cross'></use></svg>\r\n          {{report.status}}\r\n        </td>\r\n        <td>{{report.datetime}}</td>\r\n        <td>\r\n          <mosaic-button color=\"advanced\">{{'COMMON.EXPORT' | translate}}</mosaic-button>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </mosaic-table>\r\n</mosaic-col>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cpa-manager/cpa-manager.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cpa-manager/cpa-manager.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mosaic-page>\r\n  <mosaic-main-container fluid>\r\n    <mosaic-card>\r\n      <mosaic-card-body>\r\n        <mosaic-row>\r\n          <mosaic-col lg=\"12\">\r\n            <div class=\"mb-1\">\r\n              <h1 class=\"page-header\">{{'PAGE_TITLES.CPA_MANAGER' | translate}}</h1>\r\n            </div>\r\n            <div class=\"mb-2\">\r\n              <p>{{'CPA_MANAGER.INSTRUCTIONS' | translate}}</p>\r\n              <app-supplier-dropdown [suppliers]=\"(suppliers$ | async)\" [propertyName]=\"'name'\" [placeholder]=\"dropdownPlaceholder\"\r\n                                     (supplier)=\"updateSupplier($event)\" (newPlaceholder)=\"updatePlaceholder($event)\" (supplierSelected)=\"enableUploadBtn($event)\"></app-supplier-dropdown>\r\n            </div>\r\n            <div class=\"mb-2\">\r\n            </div>\r\n            <div>\r\n              <mosaic-tabs>\r\n                <mosaic-tab-pane title=\"{{'COMMON.DOWNLOAD' | translate}}\">\r\n                  <div>\r\n                    <!-- dropdown was here -->\r\n                    <div class=\"mb-1\">\r\n                      <app-file-export [isEnabled]=\"supplierSelected\"></app-file-export>\r\n                    </div>\r\n                    <app-download-table [downloads]=\"(downloads$ | async)\"></app-download-table>\r\n                  </div>\r\n                </mosaic-tab-pane>\r\n                <mosaic-tab-pane title=\"{{'COMMON.UPLOAD' | translate}}\">\r\n                  <div>\r\n                    <!-- dropdown was here -->\r\n                    <div class=\"mb-1\">\r\n                      <mosaic-button class=\"mr-2 mb-1\" color=\"default\" ouline icon=\"file\" href=\"{{getDownloadTemplateUrl()}}\">\r\n                        {{'CPA_MANAGER.DOWNLOAD_TEMPLATE' | translate}}\r\n                      </mosaic-button>\r\n                      <app-file-upload [isEnabled]=\"supplierSelected\"></app-file-upload>\r\n                    </div>\r\n                    <app-upload-table [reports]=\"(reports$ | async)\"></app-upload-table>\r\n                  </div>\r\n                </mosaic-tab-pane>\r\n              </mosaic-tabs>\r\n            </div>\r\n          </mosaic-col>\r\n        </mosaic-row>\r\n      </mosaic-card-body>\r\n    </mosaic-card>\r\n  </mosaic-main-container>\r\n</mosaic-page>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tag-manager/tag-manager.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tag-manager/tag-manager.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tag-manager works!\n</p>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cpa_manager_cpa_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cpa-manager/cpa-manager.component */ "./src/app/cpa-manager/cpa-manager.component.ts");
/* harmony import */ var _core_components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/error-page/error-page.component */ "./src/app/core/components/error-page/error-page.component.ts");
/* harmony import */ var _tag_manager_tag_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tag-manager/tag-manager.component */ "./src/app/tag-manager/tag-manager.component.ts");
/* harmony import */ var _contract_reference_manager_contract_reference_manager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contract-reference-manager/contract-reference-manager.component */ "./src/app/contract-reference-manager/contract-reference-manager.component.ts");
/* harmony import */ var _core_core_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.component */ "./src/app/core/core.component.ts");








var routes = [
    { path: 'cpa-manager', component: _cpa_manager_cpa_manager_component__WEBPACK_IMPORTED_MODULE_3__["CpaManagerComponent"] },
    { path: 'tag-manager', component: _tag_manager_tag_manager_component__WEBPACK_IMPORTED_MODULE_5__["TagManagerComponent"] },
    { path: 'contract-manager', component: _contract_reference_manager_contract_reference_manager_component__WEBPACK_IMPORTED_MODULE_6__["ContractReferenceManagerComponent"] },
    { path: 'home', component: _core_core_component__WEBPACK_IMPORTED_MODULE_7__["CoreComponent"] },
    { path: 'error', component: _core_components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__["ErrorPageComponent"] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_models_translate_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/models/translate.model */ "./src/app/core/models/translate.model.ts");
/* harmony import */ var _assets_i18n_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/i18n/en */ "./src/assets/i18n/en.ts");
/* harmony import */ var _core_service_loading_indicator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/service/loading-indicator.service */ "./src/app/core/service/loading-indicator.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(translateService, loadingIndicatorService) {
        var _this = this;
        this.translateService = translateService;
        this.loadingIndicatorService = loadingIndicatorService;
        this.isLoading = false;
        loadingIndicatorService.onLoadingChanged.subscribe(function (isLoading) { return setTimeout(function () { return _this.isLoading = isLoading; }, 0); });
        translateService.setDefaultLang(_core_models_translate_model__WEBPACK_IMPORTED_MODULE_3__["defaultLanguage"]);
        translateService.setTranslation('en', _assets_i18n_en__WEBPACK_IMPORTED_MODULE_4__["EN"]);
        translateService.use('en');
    }
    AppComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _core_service_loading_indicator_service__WEBPACK_IMPORTED_MODULE_5__["LoadingIndicatorService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _core_service_loading_indicator_service__WEBPACK_IMPORTED_MODULE_5__["LoadingIndicatorService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _cpa_manager_cpa_manager_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cpa-manager/cpa-manager.module */ "./src/app/cpa-manager/cpa-manager.module.ts");
/* harmony import */ var _tag_manager_tag_manager_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tag-manager/tag-manager.module */ "./src/app/tag-manager/tag-manager.module.ts");
/* harmony import */ var _contract_reference_manager_contract_reference_manager_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contract-reference-manager/contract-reference-manager.module */ "./src/app/contract-reference-manager/contract-reference-manager.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_service_loading_indicator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/service/loading-indicator.service */ "./src/app/core/service/loading-indicator.service.ts");
/* harmony import */ var _core_service_interceptor_loading_indicator_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/service/interceptor/loading-indicator-interceptor.service */ "./src/app/core/service/interceptor/loading-indicator-interceptor.service.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({}),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _cpa_manager_cpa_manager_module__WEBPACK_IMPORTED_MODULE_9__["CpaManagerModule"],
                _tag_manager_tag_manager_module__WEBPACK_IMPORTED_MODULE_10__["TagManagerModule"],
                _contract_reference_manager_contract_reference_manager_module__WEBPACK_IMPORTED_MODULE_11__["ContractReferenceManagerModule"]
            ],
            providers: [
                _core_service_loading_indicator_service__WEBPACK_IMPORTED_MODULE_13__["LoadingIndicatorService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useFactory: function (service) { return new _core_service_interceptor_loading_indicator_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["LoadingIndicatorInterceptorService"](service); },
                    multi: true,
                    deps: [_core_service_loading_indicator_service__WEBPACK_IMPORTED_MODULE_13__["LoadingIndicatorService"]]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contract-reference-manager/contract-reference-manager.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/contract-reference-manager/contract-reference-manager.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0LXJlZmVyZW5jZS1tYW5hZ2VyL2NvbnRyYWN0LXJlZmVyZW5jZS1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/contract-reference-manager/contract-reference-manager.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/contract-reference-manager/contract-reference-manager.component.ts ***!
  \************************************************************************************/
/*! exports provided: ContractReferenceManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractReferenceManagerComponent", function() { return ContractReferenceManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContractReferenceManagerComponent = /** @class */ (function () {
    function ContractReferenceManagerComponent() {
    }
    ContractReferenceManagerComponent.prototype.ngOnInit = function () {
    };
    ContractReferenceManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contract-reference-manager',
            template: __webpack_require__(/*! raw-loader!./contract-reference-manager.component.html */ "./node_modules/raw-loader/index.js!./src/app/contract-reference-manager/contract-reference-manager.component.html"),
            styles: [__webpack_require__(/*! ./contract-reference-manager.component.scss */ "./src/app/contract-reference-manager/contract-reference-manager.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContractReferenceManagerComponent);
    return ContractReferenceManagerComponent;
}());



/***/ }),

/***/ "./src/app/contract-reference-manager/contract-reference-manager.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/contract-reference-manager/contract-reference-manager.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ContractReferenceManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractReferenceManagerModule", function() { return ContractReferenceManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contract_reference_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contract-reference-manager.component */ "./src/app/contract-reference-manager/contract-reference-manager.component.ts");




var ContractReferenceManagerModule = /** @class */ (function () {
    function ContractReferenceManagerModule() {
    }
    ContractReferenceManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contract_reference_manager_component__WEBPACK_IMPORTED_MODULE_3__["ContractReferenceManagerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_contract_reference_manager_component__WEBPACK_IMPORTED_MODULE_3__["ContractReferenceManagerComponent"]]
        })
    ], ContractReferenceManagerModule);
    return ContractReferenceManagerModule;
}());



/***/ }),

/***/ "./src/app/core/components/error-page/error-page.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/core/components/error-page/error-page.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#error-wrapper {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #333333;\r\n    font-family: 'Open Sans';\r\n    color: white;\r\n}\r\n\r\nh4 {\r\n    color: white;\r\n    font-weight: normal;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    font-size: 32px;\r\n}\r\n\r\n#content {\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    margin-top: 100px\r\n}\r\n\r\n.logo {\r\n    width:300px;\r\n    margin: 50px auto;\r\n}\r\n\r\n#icon img {\r\n    margin: 0 auto;\r\n}\r\n\r\na {\r\n    color: #e9510e;\r\n}\r\n\r\n.back-btn {\r\n    background: #1d428a;\r\n    color: white;\r\n    border-radius: 2px;\r\n    border: 1px solid #193875;\r\n    padding: 6px 8px;\r\n    margin-top: 20px;\r\n    font-size: 14px;\r\n    font-family: 'Open Sans', Arial;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZXJyb3ItcGFnZS9lcnJvci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZXJyb3Itd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHhcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG5cclxuI2ljb24gaW1nIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjZTk1MTBlO1xyXG59XHJcblxyXG4uYmFjay1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogIzFkNDI4YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOTM4NzU7XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWw7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/components/error-page/error-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/components/error-page/error-page.component.ts ***!
  \********************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent.prototype.goBack = function () {
        window.history.back();
    };
    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/core/components/error-page/error-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/core/components/file-export/file-export.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/core/components/file-export/file-export.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9maWxlLWV4cG9ydC9maWxlLWV4cG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/components/file-export/file-export.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/file-export/file-export.component.ts ***!
  \**********************************************************************/
/*! exports provided: FileExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExportComponent", function() { return FileExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileExportComponent = /** @class */ (function () {
    function FileExportComponent() {
        this.isEnabled = false;
    }
    FileExportComponent.prototype.ngOnInit = function () {
    };
    FileExportComponent.prototype.download = function () {
        console.log('download');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileExportComponent.prototype, "isEnabled", void 0);
    FileExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-export',
            template: __webpack_require__(/*! raw-loader!./file-export.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/file-export/file-export.component.html"),
            styles: [__webpack_require__(/*! ./file-export.component.scss */ "./src/app/core/components/file-export/file-export.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileExportComponent);
    return FileExportComponent;
}());



/***/ }),

/***/ "./src/app/core/components/file-upload/file-upload.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/core/components/file-upload/file-upload.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*theme*/\n.theme-dark {\n  background-color: #333333;\n  color: #fff;\n}\n.theme-blue {\n  background-color: #009fdf;\n  color: #fff;\n}\n.theme-green {\n  background-color: #009a44;\n  color: #fff;\n}\n.theme-dark-blue {\n  background-color: #1d428a;\n  color: #fff;\n}\n.theme-yellow {\n  background-color: #F5B846;\n  color: #fff;\n}\n.theme-red {\n  background-color: #da291c;\n  color: #fff;\n}\n.theme-orange {\n  background-color: #e9510e;\n  color: #fff;\n}\n.has-danger {\n  border: 1px solid #da291c !important;\n}\ninput.ng-invalid, select.ng-invalid {\n  border: 1px solid #da291c;\n}\n.has-changes {\n  color: #F5B846;\n}\n.has-changes-in-edit {\n  border: 1px solid #F5B846;\n}\n.upload-confirmation__wrap {\n  color: #999999;\n}\n.upload-confirmation__wrap svg {\n  fill: #da291c;\n  cursor: pointer;\n}\n.upload-confirmation__filename {\n  display: inline;\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2ZpbGUtdXBsb2FkL0M6XFxVc2Vyc1xcaGFpbWVpLnpoYW5nLkFDU1xcV2Vic3Rvcm1Qcm9qZWN0c1xcbW9zYWljLWNvbXBvbmVudHMtdGVzdC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcZmlsZS11cGxvYWRcXGZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9maWxlLXVwbG9hZC9DOlxcVXNlcnNcXGhhaW1laS56aGFuZy5BQ1NcXFdlYnN0b3JtUHJvamVjdHNcXG1vc2FpYy1jb21wb25lbnRzLXRlc3Qvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NBLFFBQUE7QUFDQTtFQUNFLHlCQTlCZTtFQStCZixXQUFBO0FDakNGO0FEb0NBO0VBQ0UseUJBeENZO0VBeUNaLFdBQUE7QUNqQ0Y7QURvQ0E7RUFDRSx5QkE5Q1E7RUErQ1IsV0FBQTtBQ2pDRjtBRG9DQTtFQUNFLHlCQWpEUTtFQWtEUixXQUFBO0FDakNGO0FEb0NBO0VBQ0UseUJBckRRO0VBc0RSLFdBQUE7QUNqQ0Y7QURvQ0E7RUFDRSx5QkF6RE87RUEwRFAsV0FBQTtBQ2pDRjtBRG9DQTtFQUNFLHlCQTdEUztFQThEVCxXQUFBO0FDakNGO0FEb0NBO0VBQ0Usb0NBQUE7QUNqQ0Y7QURvQ0E7RUFDRSx5QkFBQTtBQ2pDRjtBRG9DQTtFQUNFLGNBNUVRO0FDMkNWO0FEb0NBO0VBQ0UseUJBQUE7QUNqQ0Y7QUMvQ0k7RUFFSSxjRkVHO0FDK0NYO0FDL0NRO0VBQ0ksYUZKSDtFRUtHLGVBQUE7QURpRFo7QUM5Q0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QURnRFIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc3VjY2VzczogIzAwOWE0NDtcclxuJGluZm9ybWF0aW9uOiAjMDA5ZmRmO1xyXG4kcHJpbWFyeTogIzFkNDI4YTtcclxuJHdhcm5pbmc6ICNGNUI4NDY7XHJcbiRkYW5nZXI6ICNkYTI5MWM7XHJcbiRhZHZhbmNlZDogI2U5NTEwZTtcclxuJGFkdmFuY2VkLWJsYWNrOiAjMzMzMzMzO1xyXG4kZGlzYWJsZWQ6ICM5OTk5OTk7XHJcblxyXG5AZnVuY3Rpb24gc3VjY2Vzcy1saWdodCgkb3BhY2l0eSkge1xyXG4gIEByZXR1cm4gcmdiYSgwLDE1NCw2OCwgJG9wYWNpdHkpO1xyXG59O1xyXG5AZnVuY3Rpb24gaW5mb3JtYXRpb24tbGlnaHQoJG9wYWNpdHkpIHtcclxuICBAcmV0dXJuIHJnYmEoIDAsMTU5LDIyMywgJG9wYWNpdHkpO1xyXG59O1xyXG5AZnVuY3Rpb24gcHJpbWFyeS1saWdodCgkb3BhY2l0eSkge1xyXG4gIEByZXR1cm4gcmdiYSgyOSw2NiwxMzgsICRvcGFjaXR5KTtcclxufTtcclxuQGZ1bmN0aW9uIHdhcm5pbmctbGlnaHQoJG9wYWNpdHkpIHtcclxuICBAcmV0dXJuIHJnYmEoMjQ1LDE4NCw3MCwgJG9wYWNpdHkpO1xyXG59O1xyXG5AZnVuY3Rpb24gZGFuZ2VyLWxpZ2h0KCRvcGFjaXR5KSB7XHJcbiAgQHJldHVybiByZ2JhKDIxOCw0MSwyOCwgJG9wYWNpdHkpO1xyXG59O1xyXG5AZnVuY3Rpb24gYWR2YW5jZWQtbGlnaHQoJG9wYWNpdHkpIHtcclxuICBAcmV0dXJuIHJnYmEoMjMzLDgxLDE0LCAkb3BhY2l0eSk7XHJcbn07XHJcbkBmdW5jdGlvbiBhZHZhbmNlZC1ibGFjay1saWdodCgkb3BhY2l0eSkge1xyXG4gIEByZXR1cm4gcmdiYSg1MSw1MSw1MSwgJG9wYWNpdHkpO1xyXG59O1xyXG5AZnVuY3Rpb24gZGlzYWJsZWQtbGlnaHQoJG9wYWNpdHkpIHtcclxuICBAcmV0dXJuIHJnYmEoODUsODUsODUsICRvcGFjaXR5KTtcclxufTtcclxuXHJcbi8qdGhlbWUqL1xyXG4udGhlbWUtZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFkdmFuY2VkLWJsYWNrO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGhlbWUtYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGluZm9ybWF0aW9uO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGhlbWUtZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGhlbWUtZGFyay1ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRoZW1lLXllbGxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdhcm5pbmc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50aGVtZS1yZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYW5nZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50aGVtZS1vcmFuZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhZHZhbmNlZDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmhhcy1kYW5nZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRkYW5nZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZCwgc2VsZWN0Lm5nLWludmFsaWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRkYW5nZXI7XHJcbn1cclxuXHJcbi5oYXMtY2hhbmdlcyB7XHJcbiAgY29sb3I6ICR3YXJuaW5nO1xyXG59XHJcblxyXG4uaGFzLWNoYW5nZXMtaW4tZWRpdCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHdhcm5pbmc7XHJcbn1cclxuXHJcblxyXG4iLCIvKnRoZW1lKi9cbi50aGVtZS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50aGVtZS1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZkZjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50aGVtZS1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlhNDQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGhlbWUtZGFyay1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkNDI4YTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50aGVtZS15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVCODQ2O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRoZW1lLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYTI5MWM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGhlbWUtb3JhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5NTEwZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5oYXMtZGFuZ2VyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhMjkxYyAhaW1wb3J0YW50O1xufVxuXG5pbnB1dC5uZy1pbnZhbGlkLCBzZWxlY3QubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYTI5MWM7XG59XG5cbi5oYXMtY2hhbmdlcyB7XG4gIGNvbG9yOiAjRjVCODQ2O1xufVxuXG4uaGFzLWNoYW5nZXMtaW4tZWRpdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGNUI4NDY7XG59XG5cbi51cGxvYWQtY29uZmlybWF0aW9uX193cmFwIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4udXBsb2FkLWNvbmZpcm1hdGlvbl9fd3JhcCBzdmcge1xuICBmaWxsOiAjZGEyOTFjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udXBsb2FkLWNvbmZpcm1hdGlvbl9fZmlsZW5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vbGlicy9jb2xvcnMuc2Nzcyc7XHJcblxyXG4udXBsb2FkLWNvbmZpcm1hdGlvbiB7XHJcbiAgICAmX193cmFwIHtcclxuXHJcbiAgICAgICAgY29sb3I6ICRkaXNhYmxlZDtcclxuXHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgZmlsbDogJGRhbmdlcjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2ZpbGVuYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/core/components/file-upload/file-upload.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/file-upload/file-upload.component.ts ***!
  \**********************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent() {
        this.isEnabled = false;
    }
    FileUploadComponent.prototype.ngOnInit = function () {
    };
    FileUploadComponent.prototype.onFileUpload = function (event) {
        this.attachment = event.target.files[0];
    };
    FileUploadComponent.prototype.openFileUploader = function (event) {
        var fileInput = document.querySelector(event.target.dataset.input);
        if (fileInput) {
            fileInput.click();
        }
    };
    FileUploadComponent.prototype.resetUploadAttachment = function () {
        delete this.attachment;
        var fileInput = document.querySelector('#upload-cpa-input');
        fileInput.value = '';
    };
    FileUploadComponent.prototype.submitUpload = function () {
        // TODO: send file for processing
        this.resetUploadAttachment();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FileUploadComponent.prototype, "isEnabled", void 0);
    FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! raw-loader!./file-upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/file-upload/file-upload.component.html"),
            styles: [__webpack_require__(/*! ./file-upload.component.scss */ "./src/app/core/components/file-upload/file-upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/core/components/footer/footer.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  height: 60px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1001;\n}\n.footer .footer-logo, .footer .footer-text {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9DOlxcVXNlcnNcXGhhaW1laS56aGFuZy5BQ1NcXFdlYnN0b3JtUHJvamVjdHNcXG1vc2FpYy1jb21wb25lbnRzLXRlc3Qvc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxVc2Vyc1xcaGFpbWVpLnpoYW5nLkFDU1xcV2Vic3Rvcm1Qcm9qZWN0c1xcbW9zYWljLWNvbXBvbmVudHMtdGVzdC9zcmNcXGxpYnNcXF9jb21tb24uc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQ0hjO0VESWQsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FFREY7QUZHRTtFQUNFLGlCQUFBO0FFREoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2xpYnMvY29tbW9uJztcclxuXHJcbi5mb290ZXIge1xyXG4gIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAxMDAxO1xyXG5cclxuICAuZm9vdGVyLWxvZ28sIC5mb290ZXItdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbn1cclxuIiwiJGZvb3Rlci1oZWlnaHQ6IDYwcHg7IiwiLmZvb3RlciB7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDAxO1xufVxuLmZvb3RlciAuZm9vdGVyLWxvZ28sIC5mb290ZXIgLmZvb3Rlci10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/components/modal/modal.component.scss":
/*!************************************************************!*\
  !*** ./src/app/core/components/modal/modal.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/components/modal/modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/modal/modal.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "footerFormat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ModalComponent.prototype, "actionText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalComponent.prototype, "content", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/core/components/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/core/components/mosaic-icons/mosaic-icons.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/mosaic-icons/mosaic-icons.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".svg-hidden {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL21vc2FpYy1pY29ucy9DOlxcVXNlcnNcXGhhaW1laS56aGFuZy5BQ1NcXFdlYnN0b3JtUHJvamVjdHNcXG1vc2FpYy1jb21wb25lbnRzLXRlc3Qvc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXG1vc2FpYy1pY29uc1xcbW9zYWljLWljb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbW9zYWljLWljb25zL21vc2FpYy1pY29ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9tb3NhaWMtaWNvbnMvbW9zYWljLWljb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2Zy1oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIiwiLnN2Zy1oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/mosaic-icons/mosaic-icons.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/components/mosaic-icons/mosaic-icons.component.ts ***!
  \************************************************************************/
/*! exports provided: MosaicIconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MosaicIconsComponent", function() { return MosaicIconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MosaicIconsComponent = /** @class */ (function () {
    function MosaicIconsComponent() {
    }
    MosaicIconsComponent.prototype.ngOnInit = function () {
    };
    MosaicIconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mosaic-icons',
            template: __webpack_require__(/*! raw-loader!./mosaic-icons.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/mosaic-icons/mosaic-icons.component.html"),
            styles: [__webpack_require__(/*! ./mosaic-icons.component.scss */ "./src/app/core/components/mosaic-icons/mosaic-icons.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MosaicIconsComponent);
    return MosaicIconsComponent;
}());



/***/ }),

/***/ "./src/app/core/components/supplier-dropdown/supplier-dropdown.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/core/components/supplier-dropdown/supplier-dropdown.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zdXBwbGllci1kcm9wZG93bi9zdXBwbGllci1kcm9wZG93bi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/components/supplier-dropdown/supplier-dropdown.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/core/components/supplier-dropdown/supplier-dropdown.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SupplierDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierDropdownComponent", function() { return SupplierDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SupplierDropdownComponent = /** @class */ (function () {
    function SupplierDropdownComponent() {
        this.supplier = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newPlaceholder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.supplierSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SupplierDropdownComponent.prototype.ngOnInit = function () { };
    SupplierDropdownComponent.prototype.select = function (supplier) {
        this.supplier.emit(supplier);
        this.newPlaceholder.emit(supplier[this.propertyName]);
        this.supplierSelected.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SupplierDropdownComponent.prototype, "suppliers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SupplierDropdownComponent.prototype, "propertyName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SupplierDropdownComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SupplierDropdownComponent.prototype, "supplier", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SupplierDropdownComponent.prototype, "newPlaceholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SupplierDropdownComponent.prototype, "supplierSelected", void 0);
    SupplierDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-supplier-dropdown',
            template: __webpack_require__(/*! raw-loader!./supplier-dropdown.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/supplier-dropdown/supplier-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./supplier-dropdown.component.scss */ "./src/app/core/components/supplier-dropdown/supplier-dropdown.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SupplierDropdownComponent);
    return SupplierDropdownComponent;
}());



/***/ }),

/***/ "./src/app/core/core.component.scss":
/*!******************************************!*\
  !*** ./src/app/core/core.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29yZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/core.component.ts":
/*!****************************************!*\
  !*** ./src/app/core/core.component.ts ***!
  \****************************************/
/*! exports provided: CoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreComponent", function() { return CoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoreComponent = /** @class */ (function () {
    function CoreComponent() {
    }
    CoreComponent.prototype.ngOnInit = function () {
    };
    CoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-core',
            template: __webpack_require__(/*! raw-loader!./core.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/core.component.html"),
            styles: [__webpack_require__(/*! ./core.component.scss */ "./src/app/core/core.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoreComponent);
    return CoreComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core.component */ "./src/app/core/core.component.ts");
/* harmony import */ var _components_supplier_dropdown_supplier_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/supplier-dropdown/supplier-dropdown.component */ "./src/app/core/components/supplier-dropdown/supplier-dropdown.component.ts");
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "./src/app/core/components/error-page/error-page.component.ts");
/* harmony import */ var _components_mosaic_icons_mosaic_icons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mosaic-icons/mosaic-icons.component */ "./src/app/core/components/mosaic-icons/mosaic-icons.component.ts");
/* harmony import */ var _components_file_export_file_export_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/file-export/file-export.component */ "./src/app/core/components/file-export/file-export.component.ts");
/* harmony import */ var _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/file-upload/file-upload.component */ "./src/app/core/components/file-upload/file-upload.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/core/components/modal/modal.component.ts");
/* harmony import */ var _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipe/safe-html.pipe */ "./src/app/core/pipe/safe-html.pipe.ts");
/* harmony import */ var _pipe_trim_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipe/trim.pipe */ "./src/app/core/pipe/trim.pipe.ts");
















var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _core_component__WEBPACK_IMPORTED_MODULE_7__["CoreComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _components_supplier_dropdown_supplier_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["SupplierDropdownComponent"],
                _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_9__["ErrorPageComponent"],
                _components_mosaic_icons_mosaic_icons_component__WEBPACK_IMPORTED_MODULE_10__["MosaicIconsComponent"],
                _components_file_export_file_export_component__WEBPACK_IMPORTED_MODULE_11__["FileExportComponent"],
                _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_12__["FileUploadComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"],
                _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_14__["SafeHtmlPipe"],
                _pipe_trim_pipe__WEBPACK_IMPORTED_MODULE_15__["TrimPipe"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
            ],
            exports: [
                _core_component__WEBPACK_IMPORTED_MODULE_7__["CoreComponent"],
                _components_supplier_dropdown_supplier_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["SupplierDropdownComponent"],
                _components_mosaic_icons_mosaic_icons_component__WEBPACK_IMPORTED_MODULE_10__["MosaicIconsComponent"],
                _components_file_export_file_export_component__WEBPACK_IMPORTED_MODULE_11__["FileExportComponent"],
                _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_12__["FileUploadComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            entryComponents: [
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/models/translate.model.ts":
/*!************************************************!*\
  !*** ./src/app/core/models/translate.model.ts ***!
  \************************************************/
/*! exports provided: Language, defaultLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLanguage", function() { return defaultLanguage; });
var Language = {
    EN: 'en',
    ES: 'es',
};
var defaultLanguage = Language.EN;


/***/ }),

/***/ "./src/app/core/pipe/safe-html.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/core/pipe/safe-html.pipe.ts ***!
  \*********************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(dom) {
        this.dom = dom;
    }
    SafeHtmlPipe.prototype.transform = function (value, args) {
        return this.dom.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeHtml'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/core/pipe/trim.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/core/pipe/trim.pipe.ts ***!
  \****************************************/
/*! exports provided: TrimPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrimPipe = /** @class */ (function () {
    function TrimPipe() {
    }
    TrimPipe.prototype.transform = function (value, num) {
        if (value) {
            if (num) {
                return value.substring(0, num) + '…';
            }
            else {
                return value.substring(0, 10) + '…';
            }
        }
    };
    TrimPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'trim'
        })
    ], TrimPipe);
    return TrimPipe;
}());



/***/ }),

/***/ "./src/app/core/service/interceptor/loading-indicator-interceptor.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/core/service/interceptor/loading-indicator-interceptor.service.ts ***!
  \***********************************************************************************/
/*! exports provided: LoadingIndicatorInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorInterceptorService", function() { return LoadingIndicatorInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _loading_indicator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading-indicator.service */ "./src/app/core/service/loading-indicator.service.ts");




var LoadingIndicatorInterceptorService = /** @class */ (function () {
    function LoadingIndicatorInterceptorService(loadingIndicatorService) {
        this.loadingIndicatorService = loadingIndicatorService;
    }
    LoadingIndicatorInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        this.loadingIndicatorService.onStarted(req);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loadingIndicatorService.onFinished(req); }));
    };
    LoadingIndicatorInterceptorService.ctorParameters = function () { return [
        { type: _loading_indicator_service__WEBPACK_IMPORTED_MODULE_3__["LoadingIndicatorService"] }
    ]; };
    LoadingIndicatorInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loading_indicator_service__WEBPACK_IMPORTED_MODULE_3__["LoadingIndicatorService"]])
    ], LoadingIndicatorInterceptorService);
    return LoadingIndicatorInterceptorService;
}());



/***/ }),

/***/ "./src/app/core/service/loading-indicator.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/service/loading-indicator.service.ts ***!
  \***********************************************************/
/*! exports provided: LoadingIndicatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorService", function() { return LoadingIndicatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingIndicatorService = /** @class */ (function () {
    function LoadingIndicatorService() {
        this.onLoadingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.creations = 0;
        this.resolutions = 0;
    }
    LoadingIndicatorService.prototype.onStarted = function (req) {
        this.creations++;
        this.notify();
    };
    LoadingIndicatorService.prototype.onFinished = function (req) {
        this.resolutions++;
        this.notify();
    };
    LoadingIndicatorService.prototype.notify = function () {
        this.onLoadingChanged.emit(this.creations > this.resolutions);
    };
    LoadingIndicatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingIndicatorService);
    return LoadingIndicatorService;
}());



/***/ }),

/***/ "./src/app/cpa-manager/components/download-table/download-table.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/cpa-manager/components/download-table/download-table.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-actions {\n  width: 6em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3BhLW1hbmFnZXIvY29tcG9uZW50cy9kb3dubG9hZC10YWJsZS9DOlxcVXNlcnNcXGhhaW1laS56aGFuZy5BQ1NcXFdlYnN0b3JtUHJvamVjdHNcXG1vc2FpYy1jb21wb25lbnRzLXRlc3Qvc3JjXFxhcHBcXGNwYS1tYW5hZ2VyXFxjb21wb25lbnRzXFxkb3dubG9hZC10YWJsZVxcZG93bmxvYWQtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NwYS1tYW5hZ2VyL2NvbXBvbmVudHMvZG93bmxvYWQtdGFibGUvZG93bmxvYWQtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NwYS1tYW5hZ2VyL2NvbXBvbmVudHMvZG93bmxvYWQtdGFibGUvZG93bmxvYWQtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtYWN0aW9ucyB7XHJcbiAgd2lkdGg6IDZlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLnRhYmxlLWFjdGlvbnMge1xuICB3aWR0aDogNmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/cpa-manager/components/download-table/download-table.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/cpa-manager/components/download-table/download-table.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DownloadTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadTableComponent", function() { return DownloadTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DownloadTableComponent = /** @class */ (function () {
    function DownloadTableComponent() {
    }
    DownloadTableComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DownloadTableComponent.prototype, "downloads", void 0);
    DownloadTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-download-table',
            template: __webpack_require__(/*! raw-loader!./download-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/cpa-manager/components/download-table/download-table.component.html"),
            styles: [__webpack_require__(/*! ./download-table.component.scss */ "./src/app/cpa-manager/components/download-table/download-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DownloadTableComponent);
    return DownloadTableComponent;
}());



/***/ }),

/***/ "./src/app/cpa-manager/components/upload-table/upload-table.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/cpa-manager/components/upload-table/upload-table.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-actions {\n  width: 6em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3BhLW1hbmFnZXIvY29tcG9uZW50cy91cGxvYWQtdGFibGUvQzpcXFVzZXJzXFxoYWltZWkuemhhbmcuQUNTXFxXZWJzdG9ybVByb2plY3RzXFxtb3NhaWMtY29tcG9uZW50cy10ZXN0L3NyY1xcYXBwXFxjcGEtbWFuYWdlclxcY29tcG9uZW50c1xcdXBsb2FkLXRhYmxlXFx1cGxvYWQtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NwYS1tYW5hZ2VyL2NvbXBvbmVudHMvdXBsb2FkLXRhYmxlL3VwbG9hZC10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY3BhLW1hbmFnZXIvY29tcG9uZW50cy91cGxvYWQtdGFibGUvdXBsb2FkLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWFjdGlvbnMge1xyXG4gIHdpZHRoOiA2ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi50YWJsZS1hY3Rpb25zIHtcbiAgd2lkdGg6IDZlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cpa-manager/components/upload-table/upload-table.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/cpa-manager/components/upload-table/upload-table.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UploadTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadTableComponent", function() { return UploadTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UploadTableComponent = /** @class */ (function () {
    function UploadTableComponent() {
    }
    UploadTableComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], UploadTableComponent.prototype, "reports", void 0);
    UploadTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-table',
            template: __webpack_require__(/*! raw-loader!./upload-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/cpa-manager/components/upload-table/upload-table.component.html"),
            styles: [__webpack_require__(/*! ./upload-table.component.scss */ "./src/app/cpa-manager/components/upload-table/upload-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UploadTableComponent);
    return UploadTableComponent;
}());



/***/ }),

/***/ "./src/app/cpa-manager/cpa-manager.component.scss":
/*!********************************************************!*\
  !*** ./src/app/cpa-manager/cpa-manager.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Fixed footer */\n.cpa-wrapper {\n  min-height: calc(100vh - 60px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3BhLW1hbmFnZXIvQzpcXFVzZXJzXFxoYWltZWkuemhhbmcuQUNTXFxXZWJzdG9ybVByb2plY3RzXFxtb3NhaWMtY29tcG9uZW50cy10ZXN0L3NyY1xcYXBwXFxjcGEtbWFuYWdlclxcY3BhLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NwYS1tYW5hZ2VyL2NwYS1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLGlCQUFBO0FBQ0E7RUFDSSw4QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY3BhLW1hbmFnZXIvY3BhLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9saWJzL2NvbW1vbic7XHJcblxyXG4vKiBGaXhlZCBmb290ZXIgKi9cclxuLmNwYS13cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRmb290ZXItaGVpZ2h0fSk7XHJcbn0iLCIvKiBGaXhlZCBmb290ZXIgKi9cbi5jcGEtd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cpa-manager/cpa-manager.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cpa-manager/cpa-manager.component.ts ***!
  \******************************************************/
/*! exports provided: CpaManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpaManagerComponent", function() { return CpaManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/app/cpa-manager/store/index.ts");
/* harmony import */ var _service_cpa_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/cpa-manager.service */ "./src/app/cpa-manager/service/cpa-manager.service.ts");





var CpaManagerComponent = /** @class */ (function () {
    function CpaManagerComponent(store, cpaManagerService) {
        this.store = store;
        this.cpaManagerService = cpaManagerService;
        this.dropdownPlaceholder = 'Select a Supplier';
    }
    CpaManagerComponent.prototype.ngOnInit = function () {
        // this.cpaManagerService.fetchReports().subscribe(data => console.log(data));
        this.reports$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["getReportsState"]));
        this.downloads$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["getDownloadsState"]));
        this.suppliers$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_3__["getSuppliersState"]));
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["LoadReports"]());
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["LoadSuppliers"]());
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["LoadDownloads"]());
    };
    CpaManagerComponent.prototype.updateSupplier = function (supplier) {
        console.log(supplier);
    };
    CpaManagerComponent.prototype.getDownloadTemplateUrl = function () {
        return this.cpaManagerService.downloadTemplateUrl;
    };
    CpaManagerComponent.prototype.updatePlaceholder = function (placeholder) {
        this.dropdownPlaceholder = placeholder;
    };
    CpaManagerComponent.prototype.enableUploadBtn = function (supplierSelected) {
        this.supplierSelected = supplierSelected;
    };
    CpaManagerComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _service_cpa_manager_service__WEBPACK_IMPORTED_MODULE_4__["CpaManagerService"] }
    ]; };
    CpaManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cpa-manager',
            template: __webpack_require__(/*! raw-loader!./cpa-manager.component.html */ "./node_modules/raw-loader/index.js!./src/app/cpa-manager/cpa-manager.component.html"),
            styles: [__webpack_require__(/*! ./cpa-manager.component.scss */ "./src/app/cpa-manager/cpa-manager.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _service_cpa_manager_service__WEBPACK_IMPORTED_MODULE_4__["CpaManagerService"]])
    ], CpaManagerComponent);
    return CpaManagerComponent;
}());



/***/ }),

/***/ "./src/app/cpa-manager/cpa-manager.module.ts":
/*!***************************************************!*\
  !*** ./src/app/cpa-manager/cpa-manager.module.ts ***!
  \***************************************************/
/*! exports provided: CpaManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpaManagerModule", function() { return CpaManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _cpa_manager_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cpa-manager.component */ "./src/app/cpa-manager/cpa-manager.component.ts");
/* harmony import */ var _components_upload_table_upload_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/upload-table/upload-table.component */ "./src/app/cpa-manager/components/upload-table/upload-table.component.ts");
/* harmony import */ var _components_download_table_download_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/download-table/download-table.component */ "./src/app/cpa-manager/components/download-table/download-table.component.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/reducers */ "./src/app/cpa-manager/store/reducers/index.ts");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/effects */ "./src/app/cpa-manager/store/effects/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");














var CpaManagerModule = /** @class */ (function () {
    function CpaManagerModule() {
    }
    CpaManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _cpa_manager_component__WEBPACK_IMPORTED_MODULE_8__["CpaManagerComponent"],
                _components_upload_table_upload_table_component__WEBPACK_IMPORTED_MODULE_9__["UploadTableComponent"],
                _components_download_table_download_table_component__WEBPACK_IMPORTED_MODULE_10__["DownloadTableComponent"]
            ],
            imports: [
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('cpa-manager', _store_reducers__WEBPACK_IMPORTED_MODULE_11__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature(_store_effects__WEBPACK_IMPORTED_MODULE_12__["effects"]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot()
            ],
            exports: [
                _cpa_manager_component__WEBPACK_IMPORTED_MODULE_8__["CpaManagerComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], CpaManagerModule);
    return CpaManagerModule;
}());



/***/ }),

/***/ "./src/app/cpa-manager/service/cpa-manager.service.ts":
/*!************************************************************!*\
  !*** ./src/app/cpa-manager/service/cpa-manager.service.ts ***!
  \************************************************************/
/*! exports provided: CpaManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpaManagerService", function() { return CpaManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CpaManagerService = /** @class */ (function () {
    function CpaManagerService(httpclient) {
        this.httpclient = httpclient;
    }
    CpaManagerService.prototype.fetchReports = function () {
        return this.httpclient.get('../assets/data-test.json');
    };
    CpaManagerService.prototype.fetchSuppliers = function () {
        return this.httpclient.get('../assets/suppliers.json');
    };
    CpaManagerService.prototype.fetchDownloads = function () {
        return this.httpclient.get('../assets/data-test-downloads.json');
    };
    CpaManagerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CpaManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CpaManagerService);
    return CpaManagerService;
}());



/***/ }),

/***/ "./src/app/cpa-manager/store/actions/downloads.actions.ts":
/*!****************************************************************!*\
  !*** ./src/app/cpa-manager/store/actions/downloads.actions.ts ***!
  \****************************************************************/
/*! exports provided: LOAD_DOWNLOADS, LOAD_DOWNLOADS_SUCCESS, LoadDownloads, LoadDownloadsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_DOWNLOADS", function() { return LOAD_DOWNLOADS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_DOWNLOADS_SUCCESS", function() { return LOAD_DOWNLOADS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDownloads", function() { return LoadDownloads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDownloadsSuccess", function() { return LoadDownloadsSuccess; });
var LOAD_DOWNLOADS = '[CpaManager] Load Downloads';
var LOAD_DOWNLOADS_SUCCESS = '[CpaManager] Load Downloads Success';
var LoadDownloads = /** @class */ (function () {
    function LoadDownloads(payload) {
        this.payload = payload;
        this.type = LOAD_DOWNLOADS;
    }
    LoadDownloads.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return LoadDownloads;
}());

var LoadDownloadsSuccess = /** @class */ (function () {
    function LoadDownloadsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_DOWNLOADS_SUCCESS;
    }
    LoadDownloadsSuccess.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return LoadDownloadsSuccess;
}());



/***/ }),

/***/ "./src/app/cpa-manager/store/actions/index.ts":
/*!****************************************************!*\
  !*** ./src/app/cpa-manager/store/actions/index.ts ***!
  \****************************************************/
/*! exports provided: LOAD_REPORTS, LOAD_REPORTS_SUCCESS, LoadReports, LoadReportsSuccess, LOAD_SUPPLIERS, LOAD_SUPPLIERS_SUCCESS, LoadSuppliers, LoadSuppliersSuccess, LOAD_DOWNLOADS, LOAD_DOWNLOADS_SUCCESS, LoadDownloads, LoadDownloadsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reports_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.actions */ "./src/app/cpa-manager/store/actions/reports.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_REPORTS", function() { return _reports_actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_REPORTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_REPORTS_SUCCESS", function() { return _reports_actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_REPORTS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadReports", function() { return _reports_actions__WEBPACK_IMPORTED_MODULE_0__["LoadReports"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadReportsSuccess", function() { return _reports_actions__WEBPACK_IMPORTED_MODULE_0__["LoadReportsSuccess"]; });

/* harmony import */ var _suppliers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suppliers.actions */ "./src/app/cpa-manager/store/actions/suppliers.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUPPLIERS", function() { return _suppliers_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_SUPPLIERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUPPLIERS_SUCCESS", function() { return _suppliers_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_SUPPLIERS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadSuppliers", function() { return _suppliers_actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuppliers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadSuppliersSuccess", function() { return _suppliers_actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuppliersSuccess"]; });

/* harmony import */ var _downloads_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./downloads.actions */ "./src/app/cpa-manager/store/actions/downloads.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_DOWNLOADS", function() { return _downloads_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_DOWNLOADS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_DOWNLOADS_SUCCESS", function() { return _downloads_actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_DOWNLOADS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadDownloads", function() { return _downloads_actions__WEBPACK_IMPORTED_MODULE_2__["LoadDownloads"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadDownloadsSuccess", function() { return _downloads_actions__WEBPACK_IMPORTED_MODULE_2__["LoadDownloadsSuccess"]; });






/***/ }),

/***/ "./src/app/cpa-manager/store/actions/reports.actions.ts":
/*!**************************************************************!*\
  !*** ./src/app/cpa-manager/store/actions/reports.actions.ts ***!
  \**************************************************************/
/*! exports provided: LOAD_REPORTS, LOAD_REPORTS_SUCCESS, LoadReports, LoadReportsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_REPORTS", function() { return LOAD_REPORTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_REPORTS_SUCCESS", function() { return LOAD_REPORTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadReports", function() { return LoadReports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadReportsSuccess", function() { return LoadReportsSuccess; });
var LOAD_REPORTS = '[CpaManager] Load Reports';
var LOAD_REPORTS_SUCCESS = '[CpaManager] Load Reports Success';
var LoadReports = /** @class */ (function () {
    function LoadReports(payload) {
        this.payload = payload;
        this.type = LOAD_REPORTS;
    }
    LoadReports.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return LoadReports;
}());

var LoadReportsSuccess = /** @class */ (function () {
    function LoadReportsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_REPORTS_SUCCESS;
    }
    LoadReportsSuccess.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return LoadReportsSuccess;
}());



/***/ }),

/***/ "./src/app/cpa-manager/store/actions/suppliers.actions.ts":
/*!****************************************************************!*\
  !*** ./src/app/cpa-manager/store/actions/suppliers.actions.ts ***!
  \****************************************************************/
/*! exports provided: LOAD_SUPPLIERS, LOAD_SUPPLIERS_SUCCESS, LoadSuppliers, LoadSuppliersSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUPPLIERS", function() { return LOAD_SUPPLIERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUPPLIERS_SUCCESS", function() { return LOAD_SUPPLIERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuppliers", function() { return LoadSuppliers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuppliersSuccess", function() { return LoadSuppliersSuccess; });
var LOAD_SUPPLIERS = '[CpaManager] Load Suppliers';
var LOAD_SUPPLIERS_SUCCESS = '[CpaManager] Load Suppliers Success';
var LoadSuppliers = /** @class */ (function () {
    function LoadSuppliers(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPLIERS;
    }
    LoadSuppliers.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return LoadSuppliers;
}());

var LoadSuppliersSuccess = /** @class */ (function () {
    function LoadSuppliersSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_SUPPLIERS_SUCCESS;
    }
    LoadSuppliersSuccess.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return LoadSuppliersSuccess;
}());



/***/ }),

/***/ "./src/app/cpa-manager/store/effects/downloads.effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/cpa-manager/store/effects/downloads.effects.ts ***!
  \****************************************************************/
/*! exports provided: DownloadsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsEffects", function() { return DownloadsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_cpa_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/cpa-manager.service */ "./src/app/cpa-manager/service/cpa-manager.service.ts");
/* harmony import */ var _actions_downloads_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/downloads.actions */ "./src/app/cpa-manager/store/actions/downloads.actions.ts");






var DownloadsEffects = /** @class */ (function () {
    function DownloadsEffects(actions$, cpaManagerService) {
        var _this = this;
        this.actions$ = actions$;
        this.cpaManagerService = cpaManagerService;
        this.loadDownloads$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_downloads_actions__WEBPACK_IMPORTED_MODULE_5__["LOAD_DOWNLOADS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.cpaManagerService.fetchDownloads().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('From download.effects: ', data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _actions_downloads_actions__WEBPACK_IMPORTED_MODULE_5__["LoadDownloadsSuccess"](data); }));
        }));
    }
    DownloadsEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _service_cpa_manager_service__WEBPACK_IMPORTED_MODULE_4__["CpaManagerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DownloadsEffects.prototype, "loadDownloads$", void 0);
    DownloadsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _service_cpa_manager_service__WEBPACK_IMPORTED_MODULE_4__["CpaManagerService"]])
    ], DownloadsEffects);
    return DownloadsEffects;
}());



/***/ }),

/***/ "./src/app/cpa-manager/store/effects/index.ts":
/*!****************************************************!*\
  !*** ./src/app/cpa-manager/store/effects/index.ts ***!
  \****************************************************/
/*! exports provided: effects, ReportsEffects, SuppliersEffects, DownloadsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _reports_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.effects */ "./src/app/cpa-manager/store/effects/reports.effects.ts");
/* harmony import */ var _suppliers_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suppliers.effects */ "./src/app/cpa-manager/store/effects/suppliers.effects.ts");
/* harmony import */ var _downloads_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./downloads.effects */ "./src/app/cpa-manager/store/effects/downloads.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportsEffects", function() { return _reports_effects__WEBPACK_IMPORTED_MODULE_0__["ReportsEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuppliersEffects", function() { return _suppliers_effects__WEBPACK_IMPORTED_MODULE_1__["SuppliersEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownloadsEffects", function() { return _downloads_effects__WEBPACK_IMPORTED_MODULE_2__["DownloadsEffects"]; });




var effects = [_reports_effects__WEBPACK_IMPORTED_MODULE_0__["ReportsEffects"], _suppliers_effects__WEBPACK_IMPORTED_MODULE_1__["SuppliersEffects"], _downloads_effects__WEBPACK_IMPORTED_MODULE_2__["DownloadsEffects"]];





/***/ }),

/***/ "./src/app/cpa-manager/store/effects/reports.effects.ts":
/*!**************************************************************!*\
  !*** ./src/app/cpa-manager/store/effects/reports.effects.ts ***!
  \**************************************************************/
/*! exports provided: ReportsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsEffects", function() { return ReportsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_cpa_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/cpa-manager.service */ "./src/app/cpa-manager/service/cpa-manager.service.ts");
/* harmony import */ var _actions_reports_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/reports.actions */ "./src/app/cpa-manager/store/actions/reports.actions.ts");






var ReportsEffects = /** @class */ (function () {
    function ReportsEffects(actions$, cpaManagerService) {
        var _this = this;
        this.actions$ = actions$;
        this.cpaManagerService = cpaManagerService;
        this.loadReports$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_reports_actions__WEBPACK_IMPORTED_MODULE_5__["LOAD_REPORTS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.cpaManagerService.fetchReports().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _actions_reports_actions__WEBPACK_IMPORTED_MODULE_5__["LoadReportsSuccess"](data); }));
        }));
    }
    ReportsEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _service_cpa_manager_service__WEBPACK_IMPORTED_MODULE_4__["CpaManagerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReportsEffects.prototype, "loadReports$", void 0);
    ReportsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _service_cpa_manager_service__WEBPACK_IMPORTED_MODULE_4__["CpaManagerService"]])
    ], ReportsEffects);
    return ReportsEffects;
}());



/***/ }),

/***/ "./src/app/cpa-manager/store/effects/suppliers.effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/cpa-manager/store/effects/suppliers.effects.ts ***!
  \****************************************************************/
/*! exports provided: SuppliersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersEffects", function() { return SuppliersEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_cpa_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/cpa-manager.service */ "./src/app/cpa-manager/service/cpa-manager.service.ts");
/* harmony import */ var _actions_suppliers_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/suppliers.actions */ "./src/app/cpa-manager/store/actions/suppliers.actions.ts");






var SuppliersEffects = /** @class */ (function () {
    function SuppliersEffects(actions$, cpaManagerService) {
        var _this = this;
        this.actions$ = actions$;
        this.cpaManagerService = cpaManagerService;
        this.loadSuppliers$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_suppliers_actions__WEBPACK_IMPORTED_MODULE_5__["LOAD_SUPPLIERS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.cpaManagerService.fetchSuppliers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _actions_suppliers_actions__WEBPACK_IMPORTED_MODULE_5__["LoadSuppliersSuccess"](data); }));
        }));
    }
    SuppliersEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _service_cpa_manager_service__WEBPACK_IMPORTED_MODULE_4__["CpaManagerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SuppliersEffects.prototype, "loadSuppliers$", void 0);
    SuppliersEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _service_cpa_manager_service__WEBPACK_IMPORTED_MODULE_4__["CpaManagerService"]])
    ], SuppliersEffects);
    return SuppliersEffects;
}());



/***/ }),

/***/ "./src/app/cpa-manager/store/index.ts":
/*!********************************************!*\
  !*** ./src/app/cpa-manager/store/index.ts ***!
  \********************************************/
/*! exports provided: reducers, getCpaMangerState, getReportsState, getDownloadsState, getSuppliersState, LOAD_REPORTS, LOAD_REPORTS_SUCCESS, LoadReports, LoadReportsSuccess, LOAD_SUPPLIERS, LOAD_SUPPLIERS_SUCCESS, LoadSuppliers, LoadSuppliersSuccess, LOAD_DOWNLOADS, LOAD_DOWNLOADS_SUCCESS, LoadDownloads, LoadDownloadsSuccess, effects, ReportsEffects, SuppliersEffects, DownloadsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/app/cpa-manager/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCpaMangerState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getCpaMangerState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReportsState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getReportsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDownloadsState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getDownloadsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSuppliersState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getSuppliersState"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/cpa-manager/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_REPORTS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_REPORTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_REPORTS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_REPORTS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadReports", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadReports"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadReportsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadReportsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUPPLIERS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_SUPPLIERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUPPLIERS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_SUPPLIERS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadSuppliers", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuppliers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadSuppliersSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadSuppliersSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_DOWNLOADS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_DOWNLOADS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_DOWNLOADS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_DOWNLOADS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadDownloads", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadDownloads"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadDownloadsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadDownloadsSuccess"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects */ "./src/app/cpa-manager/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportsEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["ReportsEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuppliersEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["SuppliersEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownloadsEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["DownloadsEffects"]; });






/***/ }),

/***/ "./src/app/cpa-manager/store/reducers/downloads.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/cpa-manager/store/reducers/downloads.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_downloads_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/downloads.actions */ "./src/app/cpa-manager/store/actions/downloads.actions.ts");


var initialState = {
    downloads: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_downloads_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_DOWNLOADS_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { downloads: action.payload });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/cpa-manager/store/reducers/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/cpa-manager/store/reducers/index.ts ***!
  \*****************************************************/
/*! exports provided: reducers, getCpaMangerState, getReportsState, getDownloadsState, getSuppliersState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCpaMangerState", function() { return getCpaMangerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReportsState", function() { return getReportsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDownloadsState", function() { return getDownloadsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuppliersState", function() { return getSuppliersState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reports_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.reducer */ "./src/app/cpa-manager/store/reducers/reports.reducer.ts");
/* harmony import */ var _suppliers_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suppliers.reducer */ "./src/app/cpa-manager/store/reducers/suppliers.reducer.ts");
/* harmony import */ var _downloads_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./downloads.reducer */ "./src/app/cpa-manager/store/reducers/downloads.reducer.ts");




var reducers = {
    reportsManager: _reports_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    suppliersManager: _suppliers_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    downloadsManager: _downloads_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]
};
var getCpaMangerState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('cpa-manager');
var getReportsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCpaMangerState, function (state) { return state.reportsManager.reports; });
var getDownloadsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCpaMangerState, function (state) { return state.downloadsManager.downloads; });
var getSuppliersState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCpaMangerState, function (state) { return state.suppliersManager.suppliers; });


/***/ }),

/***/ "./src/app/cpa-manager/store/reducers/reports.reducer.ts":
/*!***************************************************************!*\
  !*** ./src/app/cpa-manager/store/reducers/reports.reducer.ts ***!
  \***************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_reports_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/reports.actions */ "./src/app/cpa-manager/store/actions/reports.actions.ts");


var initialState = {
    reports: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_reports_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_REPORTS_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { reports: action.payload });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/cpa-manager/store/reducers/suppliers.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/cpa-manager/store/reducers/suppliers.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_suppliers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/suppliers.actions */ "./src/app/cpa-manager/store/actions/suppliers.actions.ts");


var initialState = {
    suppliers: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_suppliers_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_SUPPLIERS_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { suppliers: action.payload });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/tag-manager/tag-manager.component.scss":
/*!********************************************************!*\
  !*** ./src/app/tag-manager/tag-manager.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZy1tYW5hZ2VyL3RhZy1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tag-manager/tag-manager.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tag-manager/tag-manager.component.ts ***!
  \******************************************************/
/*! exports provided: TagManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagManagerComponent", function() { return TagManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TagManagerComponent = /** @class */ (function () {
    function TagManagerComponent() {
    }
    TagManagerComponent.prototype.ngOnInit = function () {
    };
    TagManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tag-manager',
            template: __webpack_require__(/*! raw-loader!./tag-manager.component.html */ "./node_modules/raw-loader/index.js!./src/app/tag-manager/tag-manager.component.html"),
            styles: [__webpack_require__(/*! ./tag-manager.component.scss */ "./src/app/tag-manager/tag-manager.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TagManagerComponent);
    return TagManagerComponent;
}());



/***/ }),

/***/ "./src/app/tag-manager/tag-manager.module.ts":
/*!***************************************************!*\
  !*** ./src/app/tag-manager/tag-manager.module.ts ***!
  \***************************************************/
/*! exports provided: TagManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagManagerModule", function() { return TagManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tag_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-manager.component */ "./src/app/tag-manager/tag-manager.component.ts");




var TagManagerModule = /** @class */ (function () {
    function TagManagerModule() {
    }
    TagManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tag_manager_component__WEBPACK_IMPORTED_MODULE_3__["TagManagerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_tag_manager_component__WEBPACK_IMPORTED_MODULE_3__["TagManagerComponent"]]
        })
    ], TagManagerModule);
    return TagManagerModule;
}());



/***/ }),

/***/ "./src/assets/i18n/en.ts":
/*!*******************************!*\
  !*** ./src/assets/i18n/en.ts ***!
  \*******************************/
/*! exports provided: EN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EN", function() { return EN; });
var EN = {
    COMMON: {
        ACTIONS: 'Actions',
        ACTIVATE: 'Activate',
        ADD: 'Add',
        ALL: 'All',
        APPLY: 'Apply',
        APPROVE: 'Approve',
        ARCHIVE: 'Archive',
        ASSIGNMENT_LEVEL: 'Assignment Level',
        ATTACHMENTS: 'Attachments',
        ATTRIBUTE_DROPDOWN_PLACEHOLDER: 'Please Select an Attribute Type',
        ATTRIBUTE_TYPE: 'Attribute Type',
        AUDIT_LOG: 'Audit Log',
        AUTO_REFRESH: 'Auto-Refresh',
        BACK: 'Back',
        BACK_TO_MENU: 'Back to Menu',
        BUYER: 'Buyer',
        CANCEL: 'Cancel',
        CANCEL_EDIT: 'Cancel Edit',
        CATALOGUE_NUMBER: 'Catalogue Number',
        CLEAR_SELECTION: 'Clear Selection',
        COMMENTS: 'Comments',
        CONFIRM: 'Confirm',
        CONFIRM_UPLOAD: 'Confirm Upload',
        CONTRACT_REFERENCE: 'Contract Reference',
        DATE: 'Date',
        DELETE: 'Delete',
        DELETE_SELECTED: 'Delete Selected',
        DELETE_ALL: 'Delete All',
        DESCRIPTION: 'Description',
        DETAILS: 'Details',
        DOWNLOAD: 'Download',
        DOWNLOAD_EXPORT: 'Completed Export',
        DOWNLOAD_TEMPLATE: 'Download Template',
        DOWNLOAD_UPLOAD: 'Uploaded File',
        ERROR_REPORT: 'Error Report',
        EDIT: 'Edit',
        END_DATE: 'End Date',
        EXPORT: 'Export',
        EXPORT_TYPE: 'Export Type',
        FILE_SELECTED: 'File Selected',
        FILTER: 'Filter',
        HIDE_AUDIT_LOG: 'Hide Audit Log',
        IMPORT: 'Import',
        INVALID_CHARACTERS: 'Invalid Characters',
        INVENTORY_MANAGEMENT: 'Inventory Management',
        ITEMS: 'Items',
        LOADING: 'Loading...',
        LOT: 'Lot',
        MANAGE: 'Manage',
        NAME: 'Name',
        NO: 'No',
        NO_DATA: 'No Data Available',
        OK: 'OK',
        PURGE: 'Purge',
        RECENT_AUDIT_LOGS: 'Recent Audit Logs',
        RECENT_AUDITS_TOOLTIP: 'Displays the ten most recent actions performed, for a full audit toggle the "Show Audit Log" button.',
        REFERENCE: 'Reference',
        REFRESH: 'Refresh',
        REFRESH_WARNING: 'This table automatically refreshes every 10 seconds',
        REJECT: 'Reject',
        REMOVE_FILE: 'Remove file',
        SAVE: 'Save',
        SEARCH: 'Search',
        SELECT_DATE: 'Select a date',
        SELECT_FILE: 'Select A File',
        SENT_TO: 'Sent to',
        SHOW_AUDIT_LOG: 'Show Audit Log',
        START_DATE: 'Start Date',
        START_REFRESHING: 'Enable Refreshing',
        STARTING: 'Starting',
        STATUS: 'Status',
        STOP_REFRESHING: 'Disable Refreshing',
        SUBMIT: 'Submit',
        SUPPLIER: 'Supplier',
        SUPPLIER_DROPDOWN_PLACEHOLDER: 'Select a Supplier',
        SUPPLIER_SELECTED: 'Supplier Selected',
        TAG: 'Tag',
        TAG_NAME: 'Tag Name',
        TARGET_SPEND: 'Target Spend',
        TYPE: 'Type',
        UPLOAD: 'Upload',
        USER: 'User',
        UPLOAD_ATTACHMENT: 'Upload Attachment',
        UPLOADED_FILE: 'Uploaded File',
        VIEW_DETAILS: 'View Details',
        YES: 'Yes'
    },
    MESSAGE: {
        ERROR: '',
        SUCCESS: '',
        VALIDATION_FAILED: ''
    },
    PAGE_TITLES: {
        ATTRIBUTE_MANAGER: 'Attribute Manager',
        CONTRACT_DATA: 'Contract Data',
        CPA_MANAGER: 'CPA Manager',
        TAG_MANAGER: 'Inventory Management'
    },
    CPA_MANAGER: {
        INTRO_TOOLTIP: 'Contract Purchase Agreement (CPA) Manager allows you to download catalogues for a specific supplier and upload CPA values against each product using a template provided. You can also do exports of all the CPA values as well as the CPA values being included in the basket return.',
        DOWNLOAD_TOOLTIP: 'Allows you to request an export of a supplier catalogue and lists all previous catalogue downloads per supplier',
        UPLOAD_TOOLTIP: 'Allows you to download a predefined template, then upload with the associated values added against each product for a specified supplier',
        INSTRUCTIONS: 'Please select a supplier to upload or download CPA values:',
        INSTRUCTIONS_UPLOAD: 'Please select a specific supplier',
        REQUEST_EXPORT: 'Request Export',
        DESCRIPTION: {
            CPA_EXPORT_ALL: 'All items',
            CPA_EXPORT_WITH_CPA: 'Items with CPA values',
            CPA_EXPORT_WITHOUT_CPA: 'Items without CPA values',
            NULL: ''
        },
        UPLOAD_INSTRUCTION: 'Upload items with CPA values for',
        EXPORT_INSTRUCTION: 'Export items for',
        ITEMS_WITH_CPA: 'Items with CPA',
        ITEMS_WITHOUT_CPA: 'Items without CPA',
        SELECT_SUPPLIER_INSTRUCTIONS: 'Please select a supplier to view previous exports...',
        PREVIOUS_EXPORT: 'Previous exports for',
        PREVIOUS_UPLOAD: 'Previous uploads for',
        UPLOAD_LARGE_FILE_VALIDATION: 'File must be under 19000KB'
    },
    TAG_MANAGER: {
        ADD_NEW_TAG: 'Add New Tag',
        DESCRIPTION: {
            TAG_EXPORT_ALL: 'Exported all tags',
            TAG_EXPORT_MINUS: 'Exported Minus tags',
            TAG_EXPORT_PLUS: 'Exported Plus tags',
            TAG_EXPORT_MINUS_AND_PLUS: 'Exported Minus and Plus tags',
            TAG_EXPORT_MINUS_AND_UNTAGGED: 'Exported Minus tags and untagged',
            TAG_EXPORT_PLUS_AND_UNTAGGED: 'Exported Plus and untagged',
            TAG_EXPORT_UNTAGGED: 'Exported untagged',
            TAG_UPLOAD: 'Uploaded tags',
            TAG_PURGE_PLUS: 'Purged Plus tags',
            TAG_PURGE_MINUS: 'Purged Minus tags',
            TAG_PURGE_ALL: 'Purged all tags'
        },
        EXPORT_INSTRUCTION: 'Please select export options from below',
        INTRO_TOOLTIP: 'Inventory Management allows you to manage the upload/export of product data that is needed for an inventory system, allowing you to define which products should be included and which to ignore.',
        MANAGE_ATTRIBUTE_HEADER: 'Manage Attribute',
        MANAGE_ATTRIBUTE_INSTRUCTIONS: 'Please select a supplier',
        MINUS: 'Minus (-)',
        MODAL_PURGE_INFO: 'Are you sure you would like to purge <strong>{{actionName}}</strong> items from <strong>{{tagName}}</strong> for supplier <strong>{{supplierName}}</strong>?',
        NO_TAGS_INFO: 'No tags available to display.',
        PLUS: 'Plus (+)',
        PURGE_ALL_TAGS: 'Purge all tags',
        PURGE_MINUS_TAGS: 'Purge (-) tags',
        PURGE_PLUS_TAGS: 'Purge (+) tags',
        PURGE_TAG: 'Purge Tag',
        REQUEST_EXPORT: 'Request Export',
        TAGGED_ITEMS: 'Tagged items',
        TOOLTIPS: {
            EXPORT: 'Allows you to request an export of items with selected tag values for a specified supplier\'s catalogue',
            PURGE: 'Allows you to clear specified tag values from a supplier\'s catalogue, with the option of clearing all tagged items',
            UPLOAD: 'Allows you to download a predefined template, then upload with the associated values added against each product for a specified supplier'
        },
        UNTAGGED: 'Untagged'
    },
    CONTRACT_DATA: {
        ACTIVE_TAGS: 'Active',
        ADD_NEW: 'Add New',
        APPROVAL: 'Approval',
        APPROVE_CONTRACT_REFERENCE: 'Approve Contract Reference',
        ARCHIVED_TAGS: 'Archived',
        CONTRACT_DATA_APPLY_INFO: 'Contract reference is currently applied to',
        CONTRACT_REFERENCE_APPLIED_TO: 'Apply Contract Reference to',
        CONTRACTED: 'Contracted',
        CREATE_FRAMEWORK: 'Create Framework',
        DELETE_CONTRACT: 'Delete Contract Reference',
        DELETE_FRAMEWORK: 'Delete Framework',
        DELETE_ONCE_EXPIRED: 'Remove from items once expired',
        EDIT: 'Edit Contract Settings',
        EMAIL_NOTIFICATIONS: 'Email Notification',
        EMAIL_NOTIFICATIONS_ADDRESS: 'Email Notification Address',
        EXPORT: 'Export Items',
        FRAMEWORK: 'Framework',
        INTRO_TOOLTIP: 'Contract Data allows you to manage contract references at product and supplier level, setting start and end dates as well as notifications to be alerted when a contract reference expires.',
        LOCAL: 'Local',
        MANAGE_ITEMS: 'Manage Items',
        MANAGE_ITEMS_TITLE: 'Your Contracted Items',
        MANAGE_TYPE: 'Manage Type',
        MODAL_DELETE_CONTRACT: 'Are you sure you would like to delete the contract reference {{tagName}}?',
        MODAL_DELETE_CONTRACT_TITLE: 'Delete Contract Reference',
        MODAL_REMOVE_ASSIGN_BODY: 'Are you sure you would like to remove the assignment of this contract reference to catalogue items?',
        MODAL_REMOVE_ASSIGN_TITLE: 'Remove Contract Reference Assignment',
        NOT_CONTRACTED: 'Not Contracted',
        NOTIFICATION_INVALID_DATE: 'Date must be after today and before/on the end date',
        REMOVE_ASSIGN: 'Remove Assignment',
        REMOVE_PRODUCTS: 'Remove Products',
        REJECT_CONTRACT_REFERENCE: 'Reject Contract Reference',
        REJECT_REASON: 'Reject Reason',
        SAVE_INSTRUCTIONS: 'Save contract to apply changes',
        SELECT_EXPORT_OPTIONS_INSTRUCTION: 'Please select export options from below',
        SEND_TO_BUYER: 'Send to Buyer',
        TOOLTIPS: {
            APPROVAL_TAB_FOR_SUPPLIER: 'This \'Approval\' tab shows contract references that have been created by you as the Supplier or by the Buyer. These will remain in the Approval Tab until they are approved or rejected by the buyer (Approval only available for Local frameworks) you have submitted it to. If the buyer approves the contract reference it will automatically be moved into the Active tab if the buyer rejects a contract reference, it will display a reason for rejection to enable you to resolve any problems with it. Once you have resolved any rejectons the contract reference will remain in the Approval tab until the Buyer approves it, at which point it will move to the Active tab',
            APPLY_TO_FRAMEWORK: 'Apply contract type to Framework',
            APPLY_TO_FRAMEWORK_PROMPT: 'You are about to change the contract type from Local to Framework level. Are you Sure?',
            APPLY_TO_ITEMS: 'Apply to manually uploaded items',
            APPLY_TO_ITEMS_PROMPT: 'You are about to change the assignment level from Supplier to Item level. Are you Sure?',
            APPLY_TO_LOCAL: 'Apply contract type to Local',
            APPLY_TO_LOCAL_PROMPT: 'You are about to change the contract type from Framework to Local level. Are you Sure?',
            APPLY_TO_SUPPLIER: 'Apply to <u>all</u> supplier items',
            APPLY_TO_SUPPLIER_PROMPT: 'You are about to change the assignment level from Item to Supplier level. Are you Sure?',
            APPROVE_CONTRACT_REFERENCE: 'Are you sure you want to approve this contract reference?',
            CONTRACT_FROM_SUPPLIER: 'This "New" tab allows you to receive notifications when a supplier sends through a list of products they have identified as contracted. You can download that list of products and decide to approve or reject them. Approving them will automatically create a new contract tag within the "Active" tab, rejecting them will notify the supplier.',
            DELETE_CONTRACT: 'Deleting this contract reference will delete it completely. Are you sure?',
            DELETE_FRAMEWORK: 'Are you sure you want to delete the framework?',
            DELETE_EXPIRED_DETAILS: 'Remove the contract reference from the items it has been assigned to once expired. This will also automatically archive the contract reference itself.',
            END_DATE: 'When the end date is reached, the contract reference will expire and automatically be moved to the archived tab.',
            NO_CONTRACTS_INFO: 'No Contract Data available to display',
            RECEIVE_EMAIL_NOTIFICATION: 'Select a date to be notified via email when the contract reference has expired',
            REMOVE_PRODUCTS: 'Are you sure you want to remove the contract reference from the product/s selected?',
            REJECT_CONTRACT_REFERENCE: 'Are you sure you want to reject this contract reference?',
            UNABLE_TO_DELETE: 'This contract reference is assigned to items, remove the assignment below to enable deletion.',
            UPLOAD_GUIDELINE: 'The assignment level is automatically set to Item level, if you need the contract to be assigned against a Supplier then you can change this to Supplier level'
        },
        UPLOAD: 'Upload Items',
        UPLOAD_CONTRACT: 'Upload Contract (pdf, jpg, png)',
        VIEW_CONTRACT: 'View Contract'
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\haimei.zhang.ACS\WebstormProjects\mosaic-components-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map