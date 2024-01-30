(self["webpackChunkamcart_E_Commerce"] = self["webpackChunkamcart_E_Commerce"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ 96630);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 3653);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 38422);
/* harmony import */ var _common_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-components/banner/banner.component */ 55881);
/* harmony import */ var _common_components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-components/product-detail/product-detail.component */ 77827);
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notfound/notfound.component */ 78421);
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/demo.component */ 69793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);










const routes = [
    {
        path: '',
        component: _common_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__.BannerComponent,
        pathMatch: 'full',
    },
    {
        path: 'products',
        component: _common_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__.BannerComponent,
        pathMatch: 'full'
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent,
        pathMatch: 'full'
    },
    {
        path: 'signIn',
        component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__.SignInComponent,
    },
    {
        path: 'signUp',
        component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.SignUpComponent,
    },
    {
        path: 'product-detail/:id',
        component: _common_components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__.ProductDetailComponent,
    },
    {
        path: 'demo',
        component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_6__.DemoComponent,
    },
    { path: '404', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__.NotfoundComponent },
    { path: '**', redirectTo: '/404' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer/footer.component */ 5235);
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header/header.component */ 39819);




class AppComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _header_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ 96630);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 3653);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 38422);
/* harmony import */ var _common_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common-components/banner/banner.component */ 55881);
/* harmony import */ var _common_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common-components/product-card/product-card.component */ 67493);
/* harmony import */ var _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer/footer.component */ 5235);
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header/header.component */ 39819);
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-stars */ 75026);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-pagination */ 92302);
/* harmony import */ var _common_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common-components/filter/filter.component */ 17705);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular-slider/ngx-slider */ 92498);
/* harmony import */ var _common_components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common-components/product-detail/product-detail.component */ 77827);
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo/demo.component */ 69793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 59121);
































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        ngx_stars__WEBPACK_IMPORTED_MODULE_16__.NgxStarsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_21__.NgxPaginationModule,
        _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_22__.NgxSliderModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent,
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__.SignInComponent,
        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__.SignUpComponent,
        _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent,
        _header_header_header_component__WEBPACK_IMPORTED_MODULE_8__.HeaderComponent,
        _common_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__.BannerComponent,
        _common_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_6__.ProductCardComponent,
        _common_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__.FilterComponent,
        _common_components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__.ProductDetailComponent,
        _demo_demo_component__WEBPACK_IMPORTED_MODULE_11__.DemoComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        ngx_stars__WEBPACK_IMPORTED_MODULE_16__.NgxStarsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_21__.NgxPaginationModule,
        _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_22__.NgxSliderModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetComponentScope"](_common_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__.BannerComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOption, ngx_pagination__WEBPACK_IMPORTED_MODULE_21__.PaginationControlsComponent, _common_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_6__.ProductCardComponent,
    _common_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__.FilterComponent], [ngx_pagination__WEBPACK_IMPORTED_MODULE_21__.PaginatePipe]);


/***/ }),

/***/ 55881:
/*!**************************************************************!*\
  !*** ./src/app/common-components/banner/banner.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter/filter.component */ 17705);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ 66082);






function BannerComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BannerComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.clearSelection()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function BannerComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BannerComponent_ng_container_13_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 29)(1, "span", 30)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const product_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", product_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r14);
} }
function BannerComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BannerComponent_ng_container_13_mat_option_1_Template, 4, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.filterProductNameForAutoComplete);
} }
function BannerComponent_div_15_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", option_r16.measure);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r16.display, " ");
} }
function BannerComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 31)(2, "div", 32)(3, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Sort By");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 34)(6, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BannerComponent_div_15_Template_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.sort_by = $event); })("change", function BannerComponent_div_15_Template_select_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.sortProduct()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BannerComponent_div_15_option_7_Template, 2, 2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.sort_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.options);
} }
function BannerComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" Items ", ctx_r6.start == null ? 1 : ctx_r6.start, " to ", ctx_r6.last == null ? 10 : ctx_r6.last, " of ", ctx_r6.totalRecords, " total ");
} }
function BannerComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38)(1, "pagination-controls", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function BannerComponent_div_23_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.renderNextPage($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function BannerComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40)(1, "product-left-filter", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("priceChange", function BannerComponent_div_25_Template_product_left_filter_priceChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.filterPrice($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product_filter", ctx_r8.left_filter)("genderSet", ctx_r8.genderSet)("colorSet", ctx_r8.colorSet)("priceSet", ctx_r8.priceSet)("filterColor", ctx_r8.filterColor.bind(ctx_r8))("filterGender", ctx_r8.filterGender.bind(ctx_r8))("filterPrice", ctx_r8.filterPrice.bind(ctx_r8));
} }
function BannerComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-product-card", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const res_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", res_r24);
} }
function BannerComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "There are no products that match your search, try something else.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
const _c0 = function (a2, a3) { return { id: "listing_pagination", itemsPerPage: 10, currentPage: a2, totalItems: a3 }; };
class BannerComponent {
    constructor(_productService) {
        this._productService = _productService;
        this.searchProducts = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.valueToSearch = '';
        this.data = [];
        this.isLoading = false;
        this.minLengthTerm = 3;
        this.selectedTextQuery = "";
        this.searchProductCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.page = 1;
        this.colorSet = new Set();
        this.priceSet = new Set();
        this.genderSet = new Set();
        this.options = [
            { measure: 'price', display: 'Price Lowest to Higest' },
            { measure: '-price', display: 'Price Higest to Lowest' }
        ];
    }
    ngOnInit() {
        this.searchProductCtrl.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(res => {
            return res !== null && res.length >= this.minLengthTerm;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => {
            this.errorMsg = "";
            this.filterProductNameForAutoComplete = [];
            this.isLoading = true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(value => this._productService.searchBoxAutoSuggestor(value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
            this.isLoading = false;
        }))))
            .subscribe((data) => {
            console.log(data);
            if (data['result'] == undefined) {
                this.errorMsg = data['Error'];
                this.filterProductNameForAutoComplete = [];
            }
            else {
                this.errorMsg = "";
                this.filterProductNameForAutoComplete = data['result'];
            }
        });
        this.fetchProduct();
    }
    onSelected() {
        // # reset page number
        this.resetBasicAttr();
        this.fetchProduct();
    }
    fetchProduct() {
        this._productService.getProductsByFilter(this.selectedTextQuery, this.page, this.sort_by, this.colorSet, this.genderSet, this.priceMin, this.priceMax).subscribe((response) => {
            this.data = response.result;
            this.totalRecords = response.total_products;
            this.left_filter = response.filter;
        });
    }
    displayWith(value) {
        return value;
    }
    clearSelection() {
        this.selectedTextQuery = "";
        this.filterProductNameForAutoComplete = [];
        this.resetBasicAttr();
        this.fetchProduct();
    }
    renderNextPage(event) {
        this.start = event * 10 - 9;
        this.last = event * 10;
        this.page = event;
        this.fetchProduct();
    }
    sortProduct() {
        this.fetchProduct();
    }
    filterColor(event, entry) {
        console.log(this);
        // checked or not 
        if (event.target.checked) {
            this.colorSet.add(entry.key);
        }
        else {
            this.colorSet.delete(entry.key);
        }
        this.resetBasicAttr();
        this.fetchProduct();
    }
    filterPriceOld(event, entry) {
        if (event.target.checked) {
            this.priceSet.add(entry.key);
        }
        else {
            this.priceSet.delete(entry.key);
        }
        this.resetBasicAttr();
        this.fetchProduct();
    }
    filterPrice(event) {
        this.priceMin = this.filterComponentRef.priceMinValue;
        this.priceMax = this.filterComponentRef.priceMaxValue;
        this.resetBasicAttr();
        this.fetchProduct();
    }
    filterGender(event, entry) {
        if (event.target.checked) {
            this.genderSet.add(entry.key);
        }
        else {
            this.genderSet.delete(entry.key);
        }
        this.resetBasicAttr();
        this.fetchProduct();
    }
    resetBasicAttr() {
        this.start = 1;
        this.last = 10;
        this.page = 1;
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], viewQuery: function BannerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_filter_filter_component__WEBPACK_IMPORTED_MODULE_0__.FilterComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.filterComponentRef = _t.first);
    } }, outputs: { searchProducts: "searchProducts" }, decls: 33, vars: 20, consts: [[1, "pg-body"], [1, "container"], [1, "gap-50", "hidden-xs"], [1, "row"], [1, "col-sm-3"], [1, "required", "form-group"], [1, "example-full-width"], ["matInput", "", "placeholder", "Search product", 3, "ngModel", "matAutocomplete", "formControl", "ngModelChange", "keyup.enter"], ["trigger", "matAutocompleteTrigger"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [3, "panelWidth", "displayWith", "optionSelected"], ["auto", "matAutocomplete"], ["class", "is-loading", 4, "ngIf"], [4, "ngIf"], [1, "col-xs-6", "col-md-6"], ["class", "col-sm-3", 4, "ngIf"], [1, "cat-content"], [1, "cat-view-options"], [1, "cat-pagination"], ["class", "col-sm-3 ", 4, "ngIf"], ["class", "col-sm-6 text-center", 4, "ngIf"], ["class", "col-md-2", 4, "ngIf"], [1, "col-md-9"], [1, "products-list"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], ["class", "alert alert-warning", 4, "ngIf"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "is-loading"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "text-capitalize"], [1, "row", "no-gutter", "form-group"], [1, "col-md-4"], [1, "cvo-label"], [1, "col-md-8"], ["name", "sortby", 1, "form-control", "cvo-control", "s-styled", "hasCustomSelect", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "col-sm-6", "text-center"], ["id", "listing_pagination", 1, "pagination", "text-center", 3, "pageChange"], [1, "col-md-2"], [3, "product_filter", "genderSet", "colorSet", "priceSet", "filterColor", "filterGender", "filterPrice", "priceChange"], [1, "col-md-3"], [3, "product"], [1, "alert", "alert-warning"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "mat-form-field", 6)(7, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BannerComponent_Template_input_ngModelChange_7_listener($event) { return ctx.selectedTextQuery = $event; })("keyup.enter", function BannerComponent_Template_input_keyup_enter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8); ctx.onSelected(); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.closePanel()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, BannerComponent_button_9_Template, 3, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-autocomplete", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("optionSelected", function BannerComponent_Template_mat_autocomplete_optionSelected_10_listener() { return ctx.onSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BannerComponent_mat_option_12_Template, 2, 0, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BannerComponent_ng_container_13_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, BannerComponent_div_15_Template, 8, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 3)(17, "div", 16)(18, "div", 17)(19, "div", 18)(20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, BannerComponent_div_21_Template, 2, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, BannerComponent_div_23_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, BannerComponent_div_25_Template, 2, 7, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 22)(27, "div", 23)(28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, BannerComponent_div_29_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, BannerComponent_div_32_Template, 3, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedTextQuery)("matAutocomplete", _r2)("formControl", ctx.searchProductCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedTextQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("panelWidth", 400)("displayWith", ctx.displayWith);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.left_filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](30, 14, ctx.data, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](17, _c0, ctx.page, ctx.totalRecords)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.length === 0);
    } }, styles: ["input.roundcorner-mid[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 100%;\n}\n\n.banner[_ngcontent-%COMP%] {\n  background-color: #008ecc;\n  min-height: 40px;\n  vertical-align: middle;\n  color: white;\n  padding: 5px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9jb21tb24uc2NzcyIsImJhbm5lci5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0FKOztBQUFBO0VBQ0kseUJDSlc7RURLWCxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBR0oiLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbnB1dC5yb3VuZGNvcm5lci1taWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggO1xuICAgIHdpZHRoOiAxMDAlO1xufSIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvY29tbW9uLnNjc3NcIjtcblxuLmJhbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1jb2xvcjtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweCAwIDAgMDtcbn0iLCIkaGVhZGVyLWNvbG9yOiAjMDA4ZWNjIl19 */"] });


/***/ }),

/***/ 17705:
/*!**************************************************************!*\
  !*** ./src/app/common-components/filter/filter.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterComponent": () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-slider/ngx-slider */ 92498);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);

// import { BannerComponentAPI } from '../banner/banner.component';




function FilterComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilterComponent_li_5_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const gender_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.filterGender($event, gender_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", gender_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.genderChecked(gender_r2.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", gender_r2.key, " ");
} }
function FilterComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilterComponent_li_16_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const color_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.filterColor($event, color_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", color_r5.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", color_r5.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.colorChecked(color_r5.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", color_r5.key, " ");
} }
class FilterComponent {
    constructor() {
        // public colorList: any = [];
        // public priceList: any = [];
        // public genderList :any = [];
        this.priceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.product_filter = {};
        this.priceMinValue = 0;
        this.priceMaxValue = 500;
        this.options = {
            floor: 0,
            ceil: 3000,
            translate: (value, label) => {
                switch (label) {
                    case _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_1__.LabelType.Low:
                        return "$" + value;
                    case _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_1__.LabelType.High:
                        return "$" + value;
                    default:
                        return "$" + value;
                }
            }
        };
    }
    ngOnInit() {
        console.log(this.product_filter);
        this.priceMinValue = this.product_filter.price_min * 1.2;
        this.priceMaxValue = this.product_filter.price_max * .90;
        this.options.ceil = this.product_filter.price_max;
        this.options.floor = this.product_filter.price_min;
    }
    genderChecked(value) {
        if (this.genderSet.has(value)) {
            return true;
        }
        else {
            return false;
        }
    }
    colorChecked(value) {
        if (this.colorSet.has(value)) {
            return true;
        }
        else {
            return false;
        }
    }
    priceChecked(value) {
        if (this.priceSet.has(value)) {
            return true;
        }
        else {
            return false;
        }
    }
    sliderEvent() {
        this.priceChange.emit();
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(); };
FilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["product-left-filter"]], inputs: { product_filter: "product_filter", filterColor: "filterColor", filterPrice: "filterPrice", filterGender: "filterGender", genderSet: "genderSet", priceSet: "priceSet", colorSet: "colorSet", bannerCom: "bannerCom" }, outputs: { priceChange: "priceChange" }, decls: 17, vars: 5, consts: [[1, "widget", "wg-filterslist"], [1, "wg-title"], [1, "wg-body"], [1, "wgfl-list"], [4, "ngFor", "ngForOf"], [1, "widget", "wg-price-fiter"], [3, "value", "highValue", "options", "valueChange", "highValueChange", "mouseup"], ["type", "checkbox", 1, "color-option", 3, "value", "checked", "change"], ["for", "brand-checkbox1", 1, "stl"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilterComponent_li_5_Template, 6, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Filter by price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2)(10, "ngx-slider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FilterComponent_Template_ngx_slider_valueChange_10_listener($event) { return ctx.priceMinValue = $event; })("highValueChange", function FilterComponent_Template_ngx_slider_highValueChange_10_listener($event) { return ctx.priceMaxValue = $event; })("mouseup", function FilterComponent_Template_ngx_slider_mouseup_10_listener() { return ctx.sliderEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0)(12, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2)(15, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FilterComponent_li_16_Template, 6, 5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product_filter.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.priceMinValue)("highValue", ctx.priceMaxValue)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product_filter.color);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_1__["ɵa"]], styles: ["input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.color-item[_ngcontent-%COMP%] {\n  display: inline-table;\n}\n\n.color-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.color-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  border: 2px solid #000;\n}\n\n.color-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  border: 1px solid #dbdbdb;\n  border-radius: 4px;\n  display: block;\n  height: 30px;\n  margin-right: 10px;\n  width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUF1QixpQkFBQTtBQUV2Qjs7QUFBQTtFQUNFLHFCQUFBO0FBR0Y7O0FBREU7RUFDRSxhQUFBO0FBR0o7O0FBREk7RUFDRSxzQkFBQTtBQUdOOztBQUFJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRU4iLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQ6Y2hlY2tlZCArIHNwYW4geyBmb250LXdlaWdodDogYm9sZDsgfVxuXG4uY29sb3ItaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcblxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICY6Y2hlY2tlZCArIHNwYW4ge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICB9XG5cbiAgICAmICsgc3BhbiB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 67493:
/*!**************************************************************************!*\
  !*** ./src/app/common-components/product-card/product-card.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCardComponent": () => (/* binding */ ProductCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function (a1) { return ["product-detail", a1]; };
class ProductCardComponent {
    constructor() {
        this.product = {};
        this.discountPercentage = 12;
    }
    viewProduct() {
        //this.increaseInterest(1);
    }
    addProductToCart() {
        // this.increaseInterest(2);
    }
    buyProduct() {
        // this.increaseInterest(3);
    }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(); };
ProductCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, decls: 12, vars: 6, consts: [[1, "pl-w-backside", 3, "routerLink"], [3, "src"], [1, "pl-caption"], [1, "pl-price-block"], [1, "pl-price-old"], [1, "pl-price"], [1, "pl-name", "text-capitalize"], [1, "stars-rating"], [1, "stars"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure")(1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.product.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.product.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx.product.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.productDisplayName, "");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n}\n\n.productTitle[_ngcontent-%COMP%] {\n  color: #0F1111;\n}\n\n.priceAfterDiscount[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.actualPrice[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-decoration-line: line-through;\n}\n\n.discountPercentage[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding-left: 5px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0Esa0NBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBR0oiLCJmaWxlIjoicHJvZHVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4ucHJvZHVjdFRpdGxlIHtcbiAgICBjb2xvcjogIzBGMTExMTtcbn1cblxuLnByaWNlQWZ0ZXJEaXNjb3VudCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuLmFjdHVhbFByaWNlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcbn1cbi5kaXNjb3VudFBlcmNlbnRhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"] });


/***/ }),

/***/ 77827:
/*!******************************************************************************!*\
  !*** ./src/app/common-components/product-detail/product-detail.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailComponent": () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/product.service */ 66082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



class ProductDetailComponent {
    constructor(_productService, route) {
        this._productService = _productService;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            this.currentProductId = param["id"];
            this._productService.getProductItem(this.currentProductId).subscribe(data => this.product = data);
        });
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
ProductDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 43, vars: 0, consts: [[1, "container"], [1, "card"], [1, "container-fliud"], [1, "wrapper", "row"], [1, "preview", "col-md-6"], [1, "preview-pic", "tab-content"], ["id", "pic-1", 1, "tab-pane", "active"], ["src", "http://placekitten.com/400/252"], [1, "details", "col-md-6"], [1, "product-title"], [1, "rating"], [1, "stars"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "product-description"], [1, "price"], [1, "sizes"], ["data-toggle", "tooltip", "title", "small", 1, "size"], ["data-toggle", "tooltip", "title", "medium", 1, "size"], ["data-toggle", "tooltip", "title", "large", 1, "size"], ["data-toggle", "tooltip", "title", "xtra large", 1, "size"], [1, "colors"], ["data-toggle", "tooltip", "title", "Not In store", 1, "color", "orange", "not-available"], [1, "color", "green"], [1, "color", "blue"], [1, "action"], ["type", "button", 1, "add-to-cart", "btn", "btn-default"], [1, "gap-50", "hidden-xs"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "men's shoes fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 12)(14, "span", 12)(15, "span", 12)(16, "span", 13)(17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "current price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "$180");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "sizes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "colors: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "span", 22)(37, "span", 23)(38, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 25)(40, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 27);
    } }, styles: ["body[_ngcontent-%COMP%] {\n    font-family: 'open sans';\n    overflow-x: hidden; }\nimg[_ngcontent-%COMP%] {\n    max-width: 100%; }\n.preview[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column; }\n@media screen and (max-width: 996px) {\n      .preview[_ngcontent-%COMP%] {\n        margin-bottom: 20px; } }\n.preview-pic[_ngcontent-%COMP%] {\n    flex-grow: 1; }\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\n    border: none;\n    margin-top: 15px; }\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 18%;\n      margin-right: 2.5%; }\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 100%;\n        display: block; }\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0; }\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n        margin-right: 0; }\n.tab-content[_ngcontent-%COMP%] {\n    overflow: hidden; }\n.tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      width: 100%;\n      animation-name: opacity;\n      animation-duration: .3s; }\n.card[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    background: #eee;\n    padding: 3em;\n    line-height: 1.5em; }\n@media screen and (min-width: 997px) {\n    .wrapper[_ngcontent-%COMP%] {\n      display: flex; } }\n.details[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column; }\n.colors[_ngcontent-%COMP%] {\n    flex-grow: 1; }\n\n.checked[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #ff9f1a; }\n.product-title[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%], .product-description[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .vote[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%] {\n    margin-bottom: 15px; }\n.product-title[_ngcontent-%COMP%] {\n    margin-top: 0; }\n.size[_ngcontent-%COMP%] {\n    margin-right: 10px; }\n.size[_ngcontent-%COMP%]:first-of-type {\n      margin-left: 40px; }\n.color[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n    height: 2em;\n    width: 2em;\n    border-radius: 2px; }\n.color[_ngcontent-%COMP%]:first-of-type {\n      margin-left: 20px; }\n.add-to-cart[_ngcontent-%COMP%], .like[_ngcontent-%COMP%] {\n    background: #ff9f1a;\n    padding: 1.2em 1.5em;\n    border: none;\n    text-transform: UPPERCASE;\n    font-weight: bold;\n    color: #fff;\n    transition: background .3s ease; }\n.add-to-cart[_ngcontent-%COMP%]:hover, .like[_ngcontent-%COMP%]:hover {\n      background: #b36800;\n      color: #fff; }\n.not-available[_ngcontent-%COMP%] {\n    text-align: center;\n    line-height: 2em; }\n.not-available[_ngcontent-%COMP%]:before {\n      font-family: fontawesome;\n      content: \"\\f00d\";\n      color: #fff; }\n.orange[_ngcontent-%COMP%] {\n    background: #ff9f1a; }\n.green[_ngcontent-%COMP%] {\n    background: #85ad00; }\n.blue[_ngcontent-%COMP%] {\n    background: #0076ad; }\n.tooltip-inner[_ngcontent-%COMP%] {\n    padding: 1.3em; }\n@keyframes opacity {\n    0% {\n      opacity: 0;\n      transform: scale(3); }\n    100% {\n      opacity: 1;\n      transform: scale(1); } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHNDQUFzQztBQUN0QztJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0IsRUFBRTtBQUV0QjtJQUNFLGVBQWUsRUFBRTtBQUVuQjtJQUlFLGFBQWE7SUFLTCxzQkFBc0IsRUFBRTtBQUNoQztNQUNFO1FBQ0UsbUJBQW1CLEVBQUUsRUFBRTtBQUU3QjtJQUlVLFlBQVksRUFBRTtBQUV4QjtJQUNFLFlBQVk7SUFDWixnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLFVBQVU7TUFDVixrQkFBa0IsRUFBRTtBQUNwQjtRQUNFLGVBQWU7UUFDZixjQUFjLEVBQUU7QUFDbEI7UUFDRSxVQUFVO1FBQ1YsU0FBUyxFQUFFO0FBQ2I7UUFDRSxlQUFlLEVBQUU7QUFFdkI7SUFDRSxnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLFdBQVc7TUFFSCx1QkFBdUI7TUFFdkIsdUJBQXVCLEVBQUU7QUFFckM7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0IsRUFBRTtBQUV0QjtJQUNFO01BSUUsYUFBYSxFQUFFLEVBQUU7QUFFckI7SUFJRSxhQUFhO0lBS0wsc0JBQXNCLEVBQUU7QUFFbEM7SUFJVSxZQUFZLEVBQUU7QUFFeEI7OzBCQUV3QjtBQUV4QjtJQUNFLGNBQWMsRUFBRTtBQUVsQjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsYUFBYSxFQUFFO0FBRWpCO0lBQ0Usa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUVILCtCQUErQixFQUFFO0FBQ3pDO01BQ0UsbUJBQW1CO01BQ25CLFdBQVcsRUFBRTtBQUVqQjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsV0FBVyxFQUFFO0FBRWpCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsY0FBYyxFQUFFO0FBWWxCO0lBQ0U7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUU7SUFDL0I7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUUsRUFBRTtBQUVuQyxvQ0FBb0MiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqKioqKioqKioqKioqKioqZ2xvYmFscyoqKioqKioqKioqKiovXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ29wZW4gc2Fucyc7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XG4gIFxuICBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTsgfVxuICBcbiAgLnByZXZpZXcge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTZweCkge1xuICAgICAgLnByZXZpZXcge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9IH1cbiAgXG4gIC5wcmV2aWV3LXBpYyB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7IH1cbiAgXG4gIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkge1xuICAgICAgd2lkdGg6IDE4JTtcbiAgICAgIG1hcmdpbi1yaWdodDogMi41JTsgfVxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBhIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwOyB9XG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGk6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XG4gIFxuICAudGFiLWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAudGFiLWNvbnRlbnQgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogb3BhY2l0eTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IC4zczsgfVxuICBcbiAgLmNhcmQge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBwYWRkaW5nOiAzZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtOyB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTdweCkge1xuICAgIC53cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiBmbGV4OyB9IH1cbiAgXG4gIC5kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIFxuICAuY29sb3JzIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxuICBcbiAgLyogLnByb2R1Y3QtdGl0bGUsIC5wcmljZSwgLnNpemVzLCAuY29sb3JzIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogVVBQRVJDQVNFO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9ICovXG4gIFxuICAuY2hlY2tlZCwgLnByaWNlIHNwYW4ge1xuICAgIGNvbG9yOiAjZmY5ZjFhOyB9XG4gIFxuICAucHJvZHVjdC10aXRsZSwgLnJhdGluZywgLnByb2R1Y3QtZGVzY3JpcHRpb24sIC5wcmljZSwgLnZvdGUsIC5zaXplcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxuICBcbiAgLnByb2R1Y3QtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7IH1cbiAgXG4gIC5zaXplIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cbiAgICAuc2l6ZTpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4OyB9XG4gIFxuICAuY29sb3Ige1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxuICAgIC5jb2xvcjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XG4gIFxuICAuYWRkLXRvLWNhcnQsIC5saWtlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmY5ZjFhO1xuICAgIHBhZGRpbmc6IDEuMmVtIDEuNWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogVVBQRVJDQVNFO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7IH1cbiAgICAuYWRkLXRvLWNhcnQ6aG92ZXIsIC5saWtlOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNiMzY4MDA7XG4gICAgICBjb2xvcjogI2ZmZjsgfVxuICBcbiAgLm5vdC1hdmFpbGFibGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMmVtOyB9XG4gICAgLm5vdC1hdmFpbGFibGU6YmVmb3JlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcbiAgICAgIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XG4gICAgICBjb2xvcjogI2ZmZjsgfVxuICBcbiAgLm9yYW5nZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmOWYxYTsgfVxuICBcbiAgLmdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kOiAjODVhZDAwOyB9XG4gIFxuICAuYmx1ZSB7XG4gICAgYmFja2dyb3VuZDogIzAwNzZhZDsgfVxuICBcbiAgLnRvb2x0aXAtaW5uZXIge1xuICAgIHBhZGRpbmc6IDEuM2VtOyB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgb3BhY2l0eSB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgzKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgzKTsgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XG4gIFxuICBAa2V5ZnJhbWVzIG9wYWNpdHkge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxuICBcbiAgLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqLyJdfQ== */"] });


/***/ }),

/***/ 60812:
/*!*************************************!*\
  !*** ./src/app/core/baseService.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseService": () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);


/** Base class for all services */
class BaseService {
    /** Create instance for httpClient base */
    constructor(http) {
        this._baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.envVar.apiBaseUrl;
        this._http = http;
    }
    /**** Http get method */
    get(uri, header = {}) {
        let url = `${this._baseUrl}/${uri}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(header);
        return this._http.get(url, {
            headers: headers
        });
    }
}


/***/ }),

/***/ 69793:
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoComponent": () => (/* binding */ DemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_demo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/demo.service */ 55417);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



function DemoComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("api message:- ", ctx_r0.apiMessage, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("api status code:- ", ctx_r0.apiStatusCode, "");
} }
class DemoComponent {
    constructor(_demoService) {
        this._demoService = _demoService;
        this.apiMessage = "";
    }
    ngOnInit() {
    }
    userClick() {
        this.apiMessage = "";
        this.apiStatusCode = 0;
        this._demoService.getUserMessage().subscribe(x => {
            x.subscribe({
                next: (response) => {
                    this.apiMessage = response.message;
                    this.apiStatusCode = response.status;
                },
                error: (err) => {
                    this.apiMessage = "you are not authorized to perform this operation";
                    this.apiStatusCode = err.status;
                },
                complete: () => {
                    console.log("hi i am here complete");
                }
            });
        });
    }
    adminClick() {
        this.apiMessage = "";
        this.apiStatusCode = 0;
        this._demoService.getAdminMessage().subscribe(x => {
            x.subscribe({
                next: (response) => {
                    this.apiMessage = response.message;
                    this.apiStatusCode = response.status;
                },
                error: (err) => {
                    this.apiMessage = "you are not authorized to perform this operation";
                    this.apiStatusCode = err.status;
                },
                complete: () => {
                    console.log("hi i am here complete");
                }
            });
        });
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_demo_service__WEBPACK_IMPORTED_MODULE_0__.DemoService)); };
DemoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["app-demo"]], decls: 17, vars: 1, consts: [[1, "row", "justify-content-center", "my-5"], [1, "col-4"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col", "mb-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [4, "ngIf"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Authorization For Admin and User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoComponent_Template_button_click_10_listener() { return ctx.adminClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Admin click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4)(13, "div", 5)(14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoComponent_Template_button_click_14_listener() { return ctx.userClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Normal User click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DemoComponent_div_16_Template, 5, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.apiMessage);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5235:
/*!***************************************************!*\
  !*** ./src/app/footer/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 54, vars: 0, consts: [["id", "footer-2"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "about-us-box", "mobile-collapse"], [1, "title-type-1", "mobile-collapse-header"], [1, "mobile-collapse-body"], [1, "contact-info-box", "mobile-collapse"], [1, "list-unstyled", "mobile-collapse-body"], [1, "icon-pointer"], [1, "icon-screen-smartphone"], ["href", "mailto:dharmesh.nadola@nagarro.com"], [1, "icon-envelope"], ["href", "https://nagarro.com"], [1, "icon-globe"], ["id", "footer-4"], [1, "col-md-6", "text-center-md"], ["src", "assets/images/credit-cards.png", "alt", "accepted credit cards"], [1, "col-md-6", "text-right", "text-center-md"], ["id", "footer-5"], [1, "copyright"], [1, "icon_heart"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3)(14, "div", 7)(15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Contact Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 8)(18, "li")(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Maruti Udyog, Sector 18, Gurugram, Haryana, 122015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li")(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " +91-9024627167");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li")(29, "a", 11)(30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "dharmesh.nadola@nagarro.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li")(35, "a", 13)(36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "www.nagarro.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15)(41, "div", 1)(42, "div", 2)(43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19)(47, "div", 1)(48, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u00A9 2023 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Nagarro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " All right reseved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 39819:
/*!***************************************************!*\
  !*** ./src/app/header/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_cognito_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cognito.service */ 15755);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);




function HeaderComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.signOut()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router, cognitoService) {
        this.router = router;
        this.cognitoService = cognitoService;
        this.isAuthenticated = false;
    }
    checkvalue(user) {
        if (user) {
            this.isAuthenticated = true;
        }
        else {
            this.isAuthenticated = false;
        }
    }
    ngOnInit() {
        this.cognitoService.authenticationSubject.subscribe(updated => this.checkvalue(updated));
    }
    signOut() {
        this.cognitoService.signOut()
            .then(() => {
            this.router.navigate(['/signIn']);
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cognito_service__WEBPACK_IMPORTED_MODULE_0__.CognitoService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 17, vars: 4, consts: [[1, "navbar", "navbar-expand-sm", "navbar-light", "bg-light"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarContent", 1, "collapse", "navbar-collapse", "float-right"], [1, "navbar-nav", "ms-auto", "mb-2", "mb-lg-0", "float-right"], [1, "nav-item"], ["class", "nav-link", "routerLink", "/signUp", "routerLinkActive", "active", 4, "ngIf"], ["class", "nav-link", "routerLink", "/signIn", "routerLinkActive", "active", 4, "ngIf"], ["class", "nav-link", "routerLink", "/profile", "routerLinkActive", "active", 4, "ngIf"], ["class", "nav-link", "routerLink", "", 3, "click", 4, "ngIf"], ["routerLink", "/signUp", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/signIn", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "", 1, "nav-link", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "E-Com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HeaderComponent_a_9_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HeaderComponent_a_11_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HeaderComponent_a_13_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HeaderComponent_a_15_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "header");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 78421:
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotfoundComponent": () => (/* binding */ NotfoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class NotfoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
NotfoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-notfound"]], decls: 13, vars: 0, consts: [[1, "d-flex", "align-items-center", "justify-content-center", "vh-100"], [1, "text-center", "row"], [1, "col-md-6"], ["src", "https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg", "alt", "", 1, "img-fluid"], [1, "col-md-6", "mt-5"], [1, "fs-3"], [1, "text-danger"], [1, "lead"], ["href", "/", 1, "navbar-brand", "btn", "btn-primary"]], template: function NotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "p", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Opps!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Page not found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " The page you\u2019re looking for doesn\u2019t exist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Go Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rmb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 96630:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_cognito_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cognito.service */ 15755);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




function ProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message);
} }
function ProfileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
} }
function ProfileComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 17);
} }
class ProfileComponent {
    constructor(cognitoService) {
        this.cognitoService = cognitoService;
        this.loading = false;
        this.user = {};
    }
    ngOnInit() {
        this.cognitoService.getUser()
            .then((user) => {
            this.user = user.attributes;
        });
    }
    handleKeyboardEvent(event) {
        if (event.keyCode === 13) {
            this.update();
        }
    }
    update() {
        this.loading = true;
        this.message = "";
        this.errorMessage = "";
        this.cognitoService.updateUser(this.user)
            .then((response) => {
            this.loading = false;
            this.message = "your profile information update successfully";
        }).catch((error) => {
            this.errorMessage = error;
            this.loading = false;
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cognito_service__WEBPACK_IMPORTED_MODULE_0__.CognitoService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 21, vars: 6, consts: [[1, "row", "justify-content-center", "my-5"], [1, "col-4", 3, "keydown"], ["class", "message alert alert-success", 4, "ngIf"], ["class", "message alert alert-danger", 4, "ngIf"], [1, "row"], [1, "col", "mb-2"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "name", "email", "disabled", "", 1, "form-control", "form-control-sm", 3, "ngModel"], ["email", "ngModel"], ["for", "name", 1, "form-label"], ["type", "text", "id", "fname", "name", "fname", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [1, "col", "d-grid"], ["type", "button", 1, "btn", "btn-sm", "btn-dark", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "message", "alert", "alert-success"], [1, "message", "alert", "alert-danger"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function ProfileComponent_Template_div_keydown_1_listener($event) { return ctx.handleKeyboardEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4)(11, "div", 5)(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_14_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4)(17, "div", 12)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_18_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProfileComponent_span_19_Template, 1, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 15755:
/*!*********************************************!*\
  !*** ./src/app/services/cognito.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CognitoService": () => (/* binding */ CognitoService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-amplify */ 40290);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify */ 48562);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);




class CognitoService {
    constructor() {
        var cognito = {
            userPoolId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.envVar.userPoolId,
            userPoolWebClientId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.envVar.userPoolWebClientId
        };
        aws_amplify__WEBPACK_IMPORTED_MODULE_1__["default"].configure({
            Auth: cognito
        });
        this.authenticationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(JSON.parse(sessionStorage.getItem('currentUser')));
    }
    signUp(user) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_3__.Auth.signUp({
            username: user.email,
            attributes: {
                'email': user.email,
                'name': user.name
            },
            password: user.password,
        });
    }
    confirmSignUp(user) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_3__.Auth.confirmSignUp(user.email, user.code);
    }
    signIn(user) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_3__.Auth.signIn(user.email, user.password)
            .then((user) => {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            this.authenticationSubject.next(user);
        });
    }
    get currentUserValue() {
        return this.authenticationSubject.value;
    }
    signOut() {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_3__.Auth.signOut()
            .then(() => {
            sessionStorage.removeItem('currentUser');
            this.authenticationSubject.next(null);
        });
    }
    isAuthenticatedUpdated() {
        if (this.authenticationSubject.value) {
            return Promise.resolve(true);
        }
        else {
            return this.getUser()
                .then((user) => {
                if (user) {
                    return true;
                }
                else {
                    return false;
                }
            }).catch(() => {
                return false;
            });
        }
    }
    isAuthenticated() {
        if (this.authenticationSubject.value) {
            return Promise.resolve(true);
        }
        else {
            return this.getUser()
                .then((user) => {
                debugger;
                if (user) {
                    return true;
                }
                else {
                    return false;
                }
            }).catch(() => {
                return false;
            });
        }
    }
    getUser() {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_3__.Auth.currentUserInfo();
    }
    updateUser(user) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_3__.Auth.currentUserPoolUser()
            .then((cognitoUser) => {
            return aws_amplify__WEBPACK_IMPORTED_MODULE_3__.Auth.updateUserAttributes(cognitoUser, user);
        });
    }
}
CognitoService.ɵfac = function CognitoService_Factory(t) { return new (t || CognitoService)(); };
CognitoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CognitoService, factory: CognitoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 55417:
/*!******************************************!*\
  !*** ./src/app/services/demo.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoService": () => (/* binding */ DemoService)
/* harmony export */ });
/* harmony import */ var _core_baseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/baseService */ 60812);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ 40290);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify */ 48562);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);






class DemoService extends _core_baseService__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    /** Create instance for product service */
    constructor(_httpClient) {
        super(_httpClient);
        this._httpClient = _httpClient;
        var cognito = {
            userPoolId: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.envVar.userPoolId,
            userPoolWebClientId: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.envVar.userPoolWebClientId
        };
        aws_amplify__WEBPACK_IMPORTED_MODULE_2__["default"].configure({
            Auth: cognito
        });
    }
    getAuthToken() {
        aws_amplify__WEBPACK_IMPORTED_MODULE_3__.Auth.currentSession().then((value) => {
            return value.getIdToken().getJwtToken();
        }).catch((error) => console.log(error));
    }
    getUserMessage() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(aws_amplify__WEBPACK_IMPORTED_MODULE_3__.Auth.currentSession().then((value) => {
            var auth_token = value.getAccessToken().getJwtToken();
            const myInit = {
                Authorization: `${auth_token}`
            };
            console.log(myInit);
            return this.get(`user`, myInit);
        }).catch((error) => console.log(error)));
    }
    /** function to product suggestor */
    getAdminMessage() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(aws_amplify__WEBPACK_IMPORTED_MODULE_3__.Auth.currentSession().then((value) => {
            var auth_token = value.getAccessToken().getJwtToken();
            const myInit = {
                Authorization: `${auth_token}`
            };
            console.log(myInit);
            return this.get(`admin`, myInit);
        }).catch((error) => console.log(error)));
    }
}
DemoService.ɵfac = function DemoService_Factory(t) { return new (t || DemoService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
DemoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: DemoService, factory: DemoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 66082:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _core_baseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/baseService */ 60812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class ProductService extends _core_baseService__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    /** Create instance for product service */
    constructor(_httpClient) {
        super(_httpClient);
        this._httpClient = _httpClient;
    }
    /** function to search product values */
    getProductsByFilter(filter, page, sort_by, colorSet, genderSet, priceMinValue, priceMaxValue) {
        var colorList = Array.from(colorSet);
        var genderList = Array.from(genderSet);
        var query_string = {};
        if (colorList.length > 0) {
            query_string['baseColour__in'] = colorList.map(ele => ele).join("__");
        }
        if (genderList.length > 0) {
            query_string['gender__in'] = genderList.map(ele => ele).join("__");
        }
        if (priceMinValue) {
            query_string['price__gte'] = priceMinValue;
        }
        if (priceMaxValue) {
            query_string['price__lte'] = priceMaxValue;
        }
        if (filter) {
            query_string['text'] = filter;
        }
        if (page) {
            query_string['page'] = page;
        }
        if (sort_by) {
            query_string['ordering'] = sort_by;
        }
        const parms = new URLSearchParams(query_string);
        return this.get(`v1/search/?${parms}`);
    }
    /** function to product suggestor */
    searchBoxAutoSuggestor(filter) {
        return this.get(`v1/search/suggest/?name_suggest=${filter}`);
    }
    /** function to product detail */
    getProductItem(id) {
        return this.get(`v1/search/suggest/`);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3653:
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_cognito_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cognito.service */ 15755);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function SignInComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function SignInComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 20);
} }
const _c0 = function (a0, a1) { return { "bi-eye-fill": a0, "bi-eye-slash-fill": a1 }; };
class SignInComponent {
    constructor(router, cognitoService) {
        this.router = router;
        this.cognitoService = cognitoService;
        this.loading = false;
        this.user = {};
        // redirect to home if already logged in
        if (this.cognitoService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    handleKeyboardEvent(event) {
        if (event.keyCode === 13) {
            this.signIn();
        }
    }
    signIn() {
        this.loading = true;
        this.errorMessage = "";
        this.cognitoService.signIn(this.user)
            .then(() => {
            this.router.navigate(['/profile']);
        }).catch((error) => {
            this.errorMessage = error.message;
            this.loading = false;
        });
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cognito_service__WEBPACK_IMPORTED_MODULE_0__.CognitoService)); };
SignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 25, vars: 10, consts: [[1, "row", "justify-content-center", "my-5"], [1, "col-4"], [1, "card", 3, "keydown"], [1, "card-body"], ["class", "message alert alert-danger", 4, "ngIf"], [1, "row"], [1, "col", "mb-2"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "name", "email", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password", 1, "form-label"], [1, "input-group", "input-group-sm"], ["id", "password", "name", "password", 1, "form-control", "form-control-sm", 3, "type", "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", 3, "ngClass"], [1, "col", "d-grid"], ["type", "button", 1, "btn", "btn-sm", "btn-success", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "message", "alert", "alert-danger"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SignInComponent_Template_div_keydown_2_listener($event) { return ctx.handleKeyboardEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SignInComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_9_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_16_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_18_listener() { return ctx.user.showPassword = !ctx.user.showPassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5)(21, "div", 16)(22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_22_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SignInComponent_span_23_Template, 1, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.user.showPassword ? "text" : "password")("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c0, !ctx.user.showPassword, ctx.user.showPassword));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 38422:
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_cognito_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cognito.service */ 15755);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function SignUpComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function SignUpComponent_div_4_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 22);
} }
const _c0 = function (a0, a1) { return { "bi-eye-fill": a0, "bi-eye-slash-fill": a1 }; };
function SignUpComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignUpComponent_div_4_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.user.name = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 12, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignUpComponent_div_4_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.user.email = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "div", 8)(15, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14)(18, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignUpComponent_div_4_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.user.password = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_div_4_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.user.showPassword = !ctx_r11.user.showPassword); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7)(23, "div", 19)(24, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_div_4_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.signUp()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SignUpComponent_div_4_span_25_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r1.user.showPassword ? "text" : "password")("ngModel", ctx_r1.user.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c0, !ctx_r1.user.showPassword, ctx_r1.user.showPassword));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.loading);
} }
function SignUpComponent_div_5_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 22);
} }
function SignUpComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignUpComponent_div_5_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.user.code = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div", 19)(9, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_div_5_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.confirmSignUp()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SignUpComponent_div_5_span_10_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.user.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.loading);
} }
class SignUpComponent {
    constructor(router, cognitoService) {
        this.router = router;
        this.cognitoService = cognitoService;
        this.loading = false;
        this.isConfirm = false;
        this.user = {};
        // redirect to home if already logged in
        if (this.cognitoService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    handleKeyboardEvent(event) {
        if (event.keyCode === 13) {
            if (this.isConfirm) {
                this.confirmSignUp();
            }
            else {
                this.signUp();
            }
        }
    }
    signUp() {
        this.loading = true;
        this.errorMessage = "";
        this.cognitoService.signUp(this.user)
            .then(() => {
            this.loading = false;
            this.isConfirm = true;
        }).catch((error) => {
            this.errorMessage = error.message;
            this.loading = false;
        });
    }
    confirmSignUp() {
        this.loading = true;
        this.errorMessage = "";
        this.cognitoService.confirmSignUp(this.user)
            .then(() => {
            this.router.navigate(['/signIn']);
        }).catch((error) => {
            this.errorMessage = error.message;
            this.loading = false;
        });
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cognito_service__WEBPACK_IMPORTED_MODULE_0__.CognitoService)); };
SignUpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 6, vars: 3, consts: [[1, "row", "justify-content-center", "my-5"], [1, "col-4"], [1, "card", 3, "keydown"], ["class", "message alert alert-danger", 4, "ngIf"], ["class", "card-body", 4, "ngIf"], [1, "message", "alert", "alert-danger"], [1, "card-body"], [1, "row"], [1, "col", "mb-2"], ["for", "email", 1, "form-label"], ["type", "text", "id", "fname", "name", "name", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "email", "id", "email", "name", "email", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "form-label"], [1, "input-group", "input-group-sm"], ["id", "password", "name", "password", 1, "form-control", "form-control-sm", 3, "type", "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", 3, "ngClass"], [1, "col", "d-grid"], ["type", "button", 1, "btn", "btn-sm", "btn-success", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["for", "code", 1, "form-label"], ["type", "text", "id", "code", "name", "code", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["code", "ngModel"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function SignUpComponent_Template_div_keydown_2_listener($event) { return ctx.handleKeyboardEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SignUpComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SignUpComponent_div_4_Template, 27, 10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SignUpComponent_div_5_Template, 12, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isConfirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isConfirm);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    envVar: {
        userPoolId: 'ap-southeast-1_6YmSRhy7R',
        userPoolWebClientId: '3kpjpvm1t1v61s9tkf0oi857v3',
        apiBaseUrl: "http://localhost:9010"
    }
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 56249:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map