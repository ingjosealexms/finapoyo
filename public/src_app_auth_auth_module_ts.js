"use strict";
(self["webpackChunkauthApp"] = self["webpackChunkauthApp"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main/main.component */ 2105);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ 1741);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/register/register.component */ 3981);
/* harmony import */ var _pages_informacion_informacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/informacion/informacion.component */ 5839);
/* harmony import */ var _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/resetpassword/resetpassword.component */ 6486);
/* harmony import */ var _pages_planes_planes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/planes/planes.component */ 2559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [
    {
        path: '',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
        children: [
            { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
            { path: 'registro', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent },
            { path: 'informacion', component: _pages_informacion_informacion_component__WEBPACK_IMPORTED_MODULE_3__.InformacionComponent },
            { path: 'resetpassword', component: _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_4__.ResetpasswordComponent },
            { path: 'planes', component: _pages_planes_planes_component__WEBPACK_IMPORTED_MODULE_5__.PlanesComponent },
            { path: '**', redirectTo: '' },
        ]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 431);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ 1741);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/register/register.component */ 3981);
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main/main.component */ 2105);
/* harmony import */ var _pages_informacion_informacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/informacion/informacion.component */ 5839);
/* harmony import */ var src_app_safeauth_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/safeauth.pipe */ 6722);
/* harmony import */ var _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/resetpassword/resetpassword.component */ 6486);
/* harmony import */ var _pages_planes_planes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/planes/planes.component */ 2559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
        _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent,
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent,
        _pages_informacion_informacion_component__WEBPACK_IMPORTED_MODULE_4__.InformacionComponent,
        src_app_safeauth_pipe__WEBPACK_IMPORTED_MODULE_5__.SafeauthPipe, _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_6__.ResetpasswordComponent, _pages_planes_planes_component__WEBPACK_IMPORTED_MODULE_7__.PlanesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 5839:
/*!*****************************************************************!*\
  !*** ./src/app/auth/pages/informacion/informacion.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionComponent": () => (/* binding */ InformacionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class InformacionComponent {
    constructor() { }
    ngOnInit() {
    }
}
InformacionComponent.ɵfac = function InformacionComponent_Factory(t) { return new (t || InformacionComponent)(); };
InformacionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformacionComponent, selectors: [["app-informacion"]], decls: 18, vars: 0, consts: [[1, "hideScroll"], [1, "espejo"], [2, "font-size", "25px", "text-align", "left", "color", "WHITE", "margin-left", "25px"], [2, "font-size", "15px", "color", "WHITE", "margin-left", "0"], [2, "font-size", "25px", "text-align", "right", "color", "WHITE", "margin-right", "25px"], [2, "font-size", "15px", "text-align", "right", "color", "WHITE", "margin-right", "15px"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5480513819393!2d-98.437651563799!3d18.90712075392527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfb47dd344f145%3A0x98786c6c9bd858ab!2sC.%205%20Pte.%20506%2C%20Centro%2C%2074200%20Atlixco%2C%20Pue.!5e0!3m2!1ses!2smx!4v1671214254719!5m2!1ses!2smx", "width", "100%", "height", "400px", "allowfullscreen", "", "loading", "lazy", 2, "border", "0", "margin-bottom", "0", "border-radius", "15px"]], template: function InformacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " DIRECCI\u00D3N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 5 poniente # 506 altos 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Col. Centro, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " CP. 74200 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Atlixco, Pue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " CONTACTO\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "H3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Cel: 244 111 7224 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".map-responsive[_ngcontent-%COMP%]{\r\n\r\n    overflow:hidden;\r\n\r\n    padding-bottom:56.25%;\r\n\r\n    position:relative;\r\n\r\n    height:0;\r\n\r\n}\r\n\r\n.map-responsive[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{\r\n\r\n    left:0;\r\n\r\n    top:0;\r\n\r\n    height:80%;\r\n\r\n    width:80%;\r\n\r\n    position:absolute;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWFjaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTs7SUFFZixxQkFBcUI7O0lBRXJCLGlCQUFpQjs7SUFFakIsUUFBUTs7QUFFWjs7QUFFQTs7SUFFSSxNQUFNOztJQUVOLEtBQUs7O0lBRUwsVUFBVTs7SUFFVixTQUFTOztJQUVULGlCQUFpQjs7QUFFckIiLCJmaWxlIjoiaW5mb3JtYWNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtcmVzcG9uc2l2ZXtcclxuXHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206NTYuMjUlO1xyXG5cclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cclxuICAgIGhlaWdodDowO1xyXG5cclxufVxyXG5cclxuLm1hcC1yZXNwb25zaXZlIGlmcmFtZXtcclxuXHJcbiAgICBsZWZ0OjA7XHJcblxyXG4gICAgdG9wOjA7XHJcblxyXG4gICAgaGVpZ2h0OjgwJTtcclxuXHJcbiAgICB3aWR0aDo4MCU7XHJcblxyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcblxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 2105:
/*!***************************************************!*\
  !*** ./src/app/auth/pages/main/main.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 2, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:500,700\");\r\n*[_ngcontent-%COMP%]{\r\n\t\tmargin: 0;\r\n\t\tpadding: 0;\r\n\t\tbox-sizing: border-box;\r\n\r\n\t\tfont-family: 'Montserrat';\r\n\t\tfont-weight: 500;\r\n\r\n\t}\r\n\r\n\r\n\r\n.container-menu[_ngcontent-%COMP%]{\r\n\t\tposition:absolute;\r\n\t\ttop: 50px;left: 0;\r\n\t\tbottom: 134;\r\n\t\ttransition: all 500ms ease;\r\n    width: 300px;\r\n    background-color: rgb(33, 1, 54, 0.5);\r\ntransform: translateX(-300px);\r\ntransition:transform 0.3s ease-in-out;\r\n\t}\r\n.show[_ngcontent-%COMP%]{\r\n    transform: translateX(0);\r\n  }\r\n.container-menu[_ngcontent-%COMP%] > nav[_ngcontent-%COMP%]{\r\n\r\ndisplay: flex;\r\nflex-direction: column;\r\nalign-items: center;\r\nwidth: 100%;\r\nheight: 100%;\r\npadding: 0 10px;\r\njustify-content: center;\r\n\r\n}\r\n.container-menu[_ngcontent-%COMP%] > nav[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{\r\n\r\ntext-decoration: none;\r\nmargin: 10 0px;\r\npadding: 5px;\r\ncolor: rgba(235, 215, 248, 0.8);\r\nbackground-color: rgb(33, 1, 54, 0.7);\r\nborder-radius: 5px;\r\nwidth: 100%;\r\ntext-align: center;\r\n}\r\n.container-menu[_ngcontent-%COMP%] > nav[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{\r\n\r\n    background-color: rgba(237, 229, 243, 0.9);\r\ncolor: rgb(33, 1, 54, 0.7);\r\n\t}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EseUVBQXlFO0FBQ3pFO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7O0VBRXRCLHlCQUF5QjtFQUN6QixnQkFBZ0I7O0NBRWpCO0FBRUM7Ozs7Ozs7Ozs7Ozs7Q0FhRDtBQUVBLG9DQUFvQztBQUVwQyxlQUFlO0FBRWY7RUFDQyxpQkFBaUI7RUFDakIsU0FBUyxDQUFDLE9BQU87RUFDakIsV0FBVztFQUNYLDBCQUEwQjtJQUN4QixZQUFZO0lBQ1oscUNBQXFDO0FBQ3pDLDZCQUE2QjtBQUM3QixxQ0FBcUM7Q0FDcEM7QUFHQztJQUNFLHdCQUF3QjtFQUMxQjtBQUVGOztBQUVBLGFBQWE7QUFDYixzQkFBc0I7QUFDdEIsbUJBQW1CO0FBQ25CLFdBQVc7QUFDWCxZQUFZO0FBQ1osZUFBZTtBQUNmLHVCQUF1Qjs7QUFFdkI7QUFFQTs7QUFFQSxxQkFBcUI7QUFDckIsY0FBYztBQUNkLFlBQVk7QUFDWiwrQkFBK0I7QUFDL0IscUNBQXFDO0FBQ3JDLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCO0FBRUE7O0lBRUksMENBQTBDO0FBQzlDLDBCQUEwQjtDQUN6QjtBQUVBLHNCQUFzQiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo1MDAsNzAwXCIpO1xyXG4qe1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG5cdH1cclxuXHJcbiAgLypcclxuXHQuY2FwYXtcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IHJlbGF0aXZlO1xyXG5cdFx0aGVpZ2h0OiByZWxhdGl2ZTtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoODIsIDg4LCA4MSwgMC42KTtcclxuXHRcdHotaW5kZXg6IC0xO1xyXG5cdFx0dG9wOiAwO2xlZnQ6IDA7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcblx0XHQtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0fVxyXG4qL1xyXG5cclxuXHQvKkZpbiBkZSBFc3RpbG9zIHBhcmEgZWwgZW5jYWJlemFkbyovXHJcblxyXG5cdC8qTWVuw7kgbGF0ZXJhbCovXHJcblxyXG5cdC5jb250YWluZXItbWVudXtcclxuXHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0dG9wOiA1MHB4O2xlZnQ6IDA7XHJcblx0XHRib3R0b206IDEzNDtcclxuXHRcdHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAxLCA1NCwgMC41KTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XHJcbnRyYW5zaXRpb246dHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0fVxyXG5cclxuXHJcbiAgLnNob3d7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG5cclxuLmNvbnRhaW5lci1tZW51Pm5hdntcclxuXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnBhZGRpbmc6IDAgMTBweDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyLW1lbnU+bmF2PmF7XHJcblxyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbm1hcmdpbjogMTAgMHB4O1xyXG5wYWRkaW5nOiA1cHg7XHJcbmNvbG9yOiByZ2JhKDIzNSwgMjE1LCAyNDgsIDAuOCk7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMSwgNTQsIDAuNyk7XHJcbmJvcmRlci1yYWRpdXM6IDVweDtcclxud2lkdGg6IDEwMCU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1tZW51Pm5hdj5hOmhvdmVye1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM3LCAyMjksIDI0MywgMC45KTtcclxuY29sb3I6IHJnYigzMywgMSwgNTQsIDAuNyk7XHJcblx0fVxyXG5cclxuXHQvKkZpbiBkZSBNZW7DuSBsYXRlcmFsKi9cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 2559:
/*!*******************************************************!*\
  !*** ./src/app/auth/pages/planes/planes.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanesComponent": () => (/* binding */ PlanesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class PlanesComponent {
    constructor() { }
    ngOnInit() {
        // this.total15();
    }
    total15() {
        let plazo = 15;
        //let credito = document.getElementById('pago')!.innerHTML
        let credito = document.getElementById('pago');
        var sel = credito.selectedIndex;
        var opt = credito.options[sel];
        //var CurValue = (opt).value;
        var CurText = (opt).text;
        let creditonumerofinal = +CurText;
        let diario = (creditonumerofinal * 1.20) / 15;
        let total = (creditonumerofinal * 1.20);
        document.getElementById('diario').innerHTML = diario.toString();
        document.getElementById('total').innerHTML = total.toString();
    }
    total20() {
        let plazo = 20;
        //let credito = document.getElementById('pago')!.innerHTML
        let credito20 = document.getElementById('pago20');
        var sel20 = credito20.selectedIndex;
        var opt20 = credito20.options[sel20];
        //var CurValue = (opt).value;
        var CurText20 = (opt20).text;
        let creditonumerofinal20 = +CurText20;
        let diario20 = (creditonumerofinal20 * 1.25) / 20;
        let redondeo20 = Math.round(diario20);
        let total20 = (creditonumerofinal20 * 1.25);
        document.getElementById('diario20').innerHTML = redondeo20.toString();
        document.getElementById('total20').innerHTML = total20.toString();
    }
    total25() {
        let plazo = 25;
        //let credito = document.getElementById('pago')!.innerHTML
        let credito25 = document.getElementById('pago25');
        var sel25 = credito25.selectedIndex;
        var opt25 = credito25.options[sel25];
        //var CurValue = (opt).value;
        var CurText25 = (opt25).text;
        let creditonumerofinal25 = +CurText25;
        let diario25 = (creditonumerofinal25 * 1.30) / 25;
        let total25 = (creditonumerofinal25 * 1.30);
        document.getElementById('diario25').innerHTML = diario25.toString();
        document.getElementById('total25').innerHTML = total25.toString();
    }
    total30() {
        let plazo = 30;
        //let credito = document.getElementById('pago')!.innerHTML
        let credito30 = document.getElementById('pago30');
        var sel30 = credito30.selectedIndex;
        var opt30 = credito30.options[sel30];
        //var CurValue = (opt).value;
        var CurText30 = (opt30).text;
        let creditonumerofinal30 = +CurText30;
        let diario30 = (creditonumerofinal30 * 1.35) / 30;
        let total30 = (creditonumerofinal30 * 1.35);
        let redondeo30 = Math.round(diario30);
        document.getElementById('diario30').innerHTML = redondeo30.toString();
        document.getElementById('total30').innerHTML = total30.toString();
    }
    ////////////////////////////////////////////////////////////
    totaltodos() {
        ////////////////////GLOBALES PARA FUNCIONES DE PLAZO//////////////////////
        var plazo = document.getElementById('plazo');
        var sel = plazo.selectedIndex;
        var opt = plazo.options[sel];
        //var CurValue = (opt).value;
        var plazotexto = (opt).text;
        var plazonumerofinal = +plazotexto;
        //////////////////////////////////////////////////////////////////////////
        if (plazonumerofinal == 15) {
            let credito = document.getElementById('pago');
            var sel = credito.selectedIndex;
            var opt = credito.options[sel];
            //var CurValue = (opt).value;
            var CurText = (opt).text;
            let creditonumerofinal = +CurText;
            let diario = (creditonumerofinal * 1.20) / 15;
            let total = (creditonumerofinal * 1.20);
            document.getElementById('diario').innerHTML = diario.toString();
            document.getElementById('totalapagar').innerHTML = total.toString();
        }
        else if (plazonumerofinal == 20) {
            let credito20 = document.getElementById('pago');
            var sel20 = credito20.selectedIndex;
            var opt20 = credito20.options[sel20];
            //var CurValue = (opt).value;
            var CurText20 = (opt20).text;
            let creditonumerofinal20 = +CurText20;
            let diario20 = (creditonumerofinal20 * 1.25) / 20;
            let redondeo20 = Math.round(diario20);
            let total20 = (creditonumerofinal20 * 1.25);
            document.getElementById('diario').innerHTML = redondeo20.toString();
            document.getElementById('totalapagar').innerHTML = total20.toString();
        }
        else if (plazonumerofinal == 25) {
            let credito25 = document.getElementById('pago');
            var sel25 = credito25.selectedIndex;
            var opt25 = credito25.options[sel25];
            //var CurValue = (opt).value;
            var CurText25 = (opt25).text;
            let creditonumerofinal25 = +CurText25;
            let diario25 = (creditonumerofinal25 * 1.30) / 25;
            let total25 = (creditonumerofinal25 * 1.30);
            document.getElementById('diario').innerHTML = diario25.toString();
            document.getElementById('totalapagar').innerHTML = total25.toString();
        }
        else if (plazonumerofinal == 30) {
            let credito30 = document.getElementById('pago');
            var sel30 = credito30.selectedIndex;
            var opt30 = credito30.options[sel30];
            //var CurValue = (opt).value;
            var CurText30 = (opt30).text;
            let creditonumerofinal30 = +CurText30;
            let diario30 = (creditonumerofinal30 * 1.35) / 30;
            let total30 = (creditonumerofinal30 * 1.35);
            let redondeo30 = Math.round(diario30);
            document.getElementById('diario').innerHTML = redondeo30.toString();
            document.getElementById('totalapagar').innerHTML = total30.toString();
        }
    }
}
PlanesComponent.ɵfac = function PlanesComponent_Factory(t) { return new (t || PlanesComponent)(); };
PlanesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanesComponent, selectors: [["app-planes"]], decls: 51, vars: 0, consts: [[1, "hideScroll"], [1, "espejo"], [1, "title"], ["type", "text", "name", "plazo", "id", "plazo", 1, "correo-pass", 3, "click"], ["value", "15"], ["value", "20"], ["value", "25"], ["value", "30"], ["type", "text", "id", "diario"], ["type", "text", "name", "pago", "id", "pago", 1, "correo-pass", 3, "click"], ["value", "1000"], ["value", "1500"], ["value", "2000"], ["value", "2500"], ["value", "3000"], ["value", "3500"], ["value", "4000"], ["value", "4500"], ["value", "5000"], ["id", "totalapagar", 1, "correo-pass"]], template: function PlanesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " PLANES DE CREDITO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table")(5, "thead")(6, "tr")(7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PLAZO EN D\u00CDAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PAGO DIARIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CREDITO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TOTAL A PAGAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr")(16, "td")(17, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanesComponent_Template_select_click_17_listener() { return ctx.totaltodos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td")(29, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanesComponent_Template_select_click_29_listener() { return ctx.totaltodos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "1500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "2500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "3000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "3500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "4000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "4500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "5000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td")(49, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3981:
/*!***********************************************************!*\
  !*** ./src/app/auth/pages/register/register.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 6518);






class RegisterComponent {
    constructor(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.miFormulario = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
            area: ['usuario', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    registro() {
        const { name, email, password, area } = this.miFormulario.value;
        this.authService.registro(name, email, password, area)
            .subscribe(ok => {
            if (ok === true) {
                this.router.navigate(['/usuario/missolicitudes'])
                    .then(() => {
                    window.location.reload();
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', ok, 'error');
            }
        });
    }
    refresh() {
        window.location.reload();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 19, vars: 1, consts: [[1, "espejo-registro"], [1, "title"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "division"], [1, "etiquetas"], ["type", "text", "formControlName", "name", "placeholder", "Ingrese su nombre", "autofocus", "", 1, "correo-pass"], ["type", "text", "formControlName", "email", "placeholder", "Ingrese su email", "autofocus", "", 1, "correo-pass"], ["type", "password", "formControlName", "password", "placeholder", "Ingrese su contrase\u00F1a", 1, "correo-pass"], [1, "div-boton"], [1, "btn", "btn-registrar"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "REGISTRO DE NUEVOS USUARIOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() { return ctx.registro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " INGRESE SU NOMBRE COMPLETO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3)(9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " INGRESE SU CORREO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 3)(13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " INGRESE SU CONTRASE\u00D1A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8)(17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " CREAR USUARIO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.miFormulario);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".espejo-registro[_ngcontent-%COMP%] {\r\n    background-color: rgba(9, 9, 9, 0.6);\r\n    width: 40vw;\r\n    max-width: 500px;\r\n    min-width: 300px;\r\n\r\n    max-height: 300px;\r\n    \r\n  \r\n    border-radius: 15px;\r\n    align-content: center;\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: auto;\r\n    margin-top: 50px;\r\n    padding-top: 50px;\r\n    padding-bottom: 154px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCOztJQUVoQixpQkFBaUI7OztJQUdqQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5lc3Blam8tcmVnaXN0cm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5LCA5LCA5LCAwLjYpO1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuXHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIFxyXG4gIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNTRweDtcclxuICB9Il19 */"] });


/***/ }),

/***/ 6486:
/*!*********************************************************************!*\
  !*** ./src/app/auth/pages/resetpassword/resetpassword.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpasswordComponent": () => (/* binding */ ResetpasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_auth_services_resetpassword_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/services/resetpassword.service */ 6033);






class ResetpasswordComponent {
    constructor(fb, router, toastr, _resetpasswordService, aRouter) {
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this._resetpasswordService = _resetpasswordService;
        this.aRouter = aRouter;
        this.resetpasswordForm = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            correo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            cargo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
        this.id = this.aRouter.snapshot.paramMap.get('id');
    }
    ;
    ngOnInit() {
    }
    agregarSolicitudes() {
        const RESETPASSWORD = {
            /*nuevas constantes*/
            nombre: this.resetpasswordForm.get('nombre')?.value,
            correo: this.resetpasswordForm.get('correo')?.value,
            cargo: this.resetpasswordForm.get('cargo')?.value
            /*-------------------*/
        };
        console.log(RESETPASSWORD);
        this._resetpasswordService.guardarSolicitudes(RESETPASSWORD).subscribe(data => {
            this.toastr.success('La solicitud fue enviada', 'Solicitud Registrada');
            this.router.navigate(['/']);
        }, error => {
            console.log(error);
            this.resetpasswordForm.reset();
        });
    }
}
ResetpasswordComponent.ɵfac = function ResetpasswordComponent_Factory(t) { return new (t || ResetpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_auth_services_resetpassword_service__WEBPACK_IMPORTED_MODULE_0__.ResetpasswordService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
ResetpasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResetpasswordComponent, selectors: [["app-resetpassword"]], decls: 19, vars: 1, consts: [[1, "espejo-registro"], [1, "title"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "division"], [1, "etiquetas"], ["type", "text", "formControlName", "nombre", "placeholder", "Ingrese su nombre completo", "autofocus", "", "required", "", 1, "correo-pass"], ["formControlName", "correo", "type", "text", "placeholder", "Ingrese su correo", "required", "", 1, "correo-pass"], ["formControlName", "cargo", "type", "text", "placeholder", "Ingrese su cargo", "required", "", 1, "correo-pass"], [1, "div-boton"], ["type", "submit", 1, "btn", "btn-registrar"]], template: function ResetpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "SOLICITUD DE RESTABLECIMIENTO DE CONTRASE\u00D1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ResetpasswordComponent_Template_form_ngSubmit_3_listener() { return ctx.agregarSolicitudes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " INGRESE SU NOMBRE COMPLETO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3)(9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " CORREO ELECTRONICO USADO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3)(13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " ROL DE USUARIO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8)(17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " SOLICITAR RESET ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.resetpasswordForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".espejo-registro[_ngcontent-%COMP%] {\r\n    background-color: rgba(9, 9, 9, 0.6);\r\n    width: 40vw;\r\n    max-width: 500px;\r\n    min-width: 300px;\r\n\r\n    max-height: 350px;\r\n    \r\n  \r\n    border-radius: 15px;\r\n    align-content: center;\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: auto;\r\n    margin-top: 50px;\r\n    padding-top: 50px;\r\n    padding-bottom: 154px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0cGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0lBRWhCLGlCQUFpQjs7O0lBR2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InJlc2V0cGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXNwZWpvLXJlZ2lzdHJvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOSwgOSwgOSwgMC42KTtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcblxyXG4gICAgbWF4LWhlaWdodDogMzUwcHg7XHJcbiAgICBcclxuICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTU0cHg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 6033:
/*!********************************************************!*\
  !*** ./src/app/auth/services/resetpassword.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpasswordService": () => (/* binding */ ResetpasswordService)
/* harmony export */ });
/* harmony import */ var globales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! globales */ 5093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ResetpasswordService {
    constructor(http) {
        this.http = http;
        this.url = globales__WEBPACK_IMPORTED_MODULE_0__.lurl + '/api/resetpassword/';
    }
    getSolicitudes() {
        return this.http.get(this.url);
    }
    eliminarSolicitudes(id) {
        return this.http.delete(this.url + id);
    }
    guardarSolicitudes(resetpassword) {
        return this.http.post(this.url, resetpassword);
    }
    obtenerSolicitud(id) {
        return this.http.get(this.url + id);
    }
}
ResetpasswordService.ɵfac = function ResetpasswordService_Factory(t) { return new (t || ResetpasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ResetpasswordService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ResetpasswordService, factory: ResetpasswordService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6722:
/*!**********************************!*\
  !*** ./src/app/safeauth.pipe.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeauthPipe": () => (/* binding */ SafeauthPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


class SafeauthPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeauthPipe.ɵfac = function SafeauthPipe_Factory(t) { return new (t || SafeauthPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafeauthPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeauth", type: SafeauthPipe, pure: true });


/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map