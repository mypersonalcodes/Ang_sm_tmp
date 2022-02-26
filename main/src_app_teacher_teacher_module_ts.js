"use strict";
(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_teacher_teacher_module_ts"],{

/***/ 19927:
/*!***************************************************!*\
  !*** ./src/app/teacher/teacher-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherRoutingModule": () => (/* binding */ TeacherRoutingModule)
/* harmony export */ });
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../authentication/page404/page404.component */ 1991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 15442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
    },
    { path: '**', component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component },
];
class TeacherRoutingModule {
}
TeacherRoutingModule.ɵfac = function TeacherRoutingModule_Factory(t) { return new (t || TeacherRoutingModule)(); };
TeacherRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TeacherRoutingModule });
TeacherRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TeacherRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 33042:
/*!*******************************************!*\
  !*** ./src/app/teacher/teacher.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherModule": () => (/* binding */ TeacherModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ 53808);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-echarts */ 45877);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-pick-datetime */ 37526);
/* harmony import */ var _teacher_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher-routing.module */ 19927);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 15442);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);



























class TeacherModule {
}
TeacherModule.ɵfac = function TeacherModule_Factory(t) { return new (t || TeacherModule)(); };
TeacherModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TeacherModule });
TeacherModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _teacher_routing_module__WEBPACK_IMPORTED_MODULE_1__.TeacherRoutingModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_6__.ChartsModule,
            ngx_echarts__WEBPACK_IMPORTED_MODULE_7__.NgxEchartsModule.forRoot({
                echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.t.bind(__webpack_require__, /*! echarts */ 72750, 23)),
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckboxModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltipModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__.OwlDateTimeModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__.OwlNativeDateTimeModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TeacherModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _teacher_routing_module__WEBPACK_IMPORTED_MODULE_1__.TeacherRoutingModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_6__.ChartsModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_7__.NgxEchartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckboxModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltipModule,
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__.OwlDateTimeModule,
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_0__.OwlNativeDateTimeModule,
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_teacher_teacher_module_ts.js.map