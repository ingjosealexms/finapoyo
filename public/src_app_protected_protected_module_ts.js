"use strict";
(self["webpackChunkauthApp"] = self["webpackChunkauthApp"] || []).push([["src_app_protected_protected_module_ts"],{

/***/ 7590:
/*!***************************************************!*\
  !*** ./src/app/auth/services/manuales.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualesService": () => (/* binding */ ManualesService)
/* harmony export */ });
/* harmony import */ var globales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! globales */ 5093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ManualesService {
    constructor(http) {
        this.http = http;
        this.url = globales__WEBPACK_IMPORTED_MODULE_0__.lurl + '/api/manuales/';
    }
    getManuales() {
        return this.http.get(this.url);
    }
    eliminarManual(id) {
        return this.http.delete(this.url + id);
    }
    guardarManuales(manuales) {
        return this.http.post(this.url, manuales);
    }
    obtenerManual(id) {
        return this.http.get(this.url + id);
    }
}
ManualesService.ɵfac = function ManualesService_Factory(t) { return new (t || ManualesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ManualesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ManualesService, factory: ManualesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5130:
/*!************************************************************************************!*\
  !*** ./src/app/protected/administrador/crear-manuales/crear-manuales.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearManualesComponent": () => (/* binding */ CrearManualesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_auth_services_manuales_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/services/manuales.service */ 7590);
/* harmony import */ var src_app_protected_services_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/protected/services/rest.service */ 774);






// crea un nuevo objeto `Date`
var today = new Date();
// `getDate()` devuelve el día del mes (del 1 al 31)
var day = today.getDate();
// `getMonth()` devuelve el mes (de 0 a 11)
var month = today.getMonth() + 1;
// `getFullYear()` devuelve el año completo
var year = today.getFullYear();
// muestra la fecha de hoy en formato `MM/DD/YYYY`
var fecha = `${month}-${day}-${year}`;
var hora = today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds();
var FechaHora = fecha + '-' + hora;
class CrearManualesComponent {
    constructor(fb, router, toastr, _manualesService, aRouter, restService) {
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this._manualesService = _manualesService;
        this.aRouter = aRouter;
        this.restService = restService;
        this.manualesForm = this.fb.group({
            nombre: [''],
            descripcion: [''],
            tipo: [''],
            ruta: [''],
        });
        this.id = this.aRouter.snapshot.paramMap.get('id');
    }
    ngOnInit() {
    }
    agregarManuales() {
        this.sendFile();
        const MANUALES = {
            nombre: this.manualesForm.get('nombre')?.value,
            descripcion: this.manualesForm.get('descripcion')?.value,
            tipo: this.manualesForm.get('tipo')?.value,
            ruta: "src/app/public/" + FechaHora + "-" + this.manualesForm.get('nombre')?.value + "." + this.manualesForm.get('tipo')?.value
        };
        console.log(MANUALES);
        this._manualesService.guardarManuales(MANUALES).subscribe(data => {
            this.toastr.success('El manual fue registrado con exito!', 'Manual Registrado!');
            this.router.navigate(['/usuario/misdocumentos']);
        }, error => {
            console.log(error);
            this.manualesForm.reset();
        });
    }
    //metodos para enviar el archivo
    getFile($event) {
        //TODO esto captura el archivo!
        const [file] = $event.target.files;
        const extension = $event.target.files;
        this.fileTmp = {
            fileRaw: file,
            // fileName:file.name
            fileName: FechaHora + "-" + this.manualesForm.get('nombre')?.value + "." + this.manualesForm.get('tipo')?.value
        };
    }
    sendFile() {
        const body = new FormData();
        body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
        this.restService.sendPost(body)
            .subscribe(res => console.log(res));
    }
}
CrearManualesComponent.ɵfac = function CrearManualesComponent_Factory(t) { return new (t || CrearManualesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_auth_services_manuales_service__WEBPACK_IMPORTED_MODULE_0__.ManualesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_protected_services_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService)); };
CrearManualesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CrearManualesComponent, selectors: [["app-crear-manuales"]], decls: 28, vars: 1, consts: [[1, "hideScroll"], [1, "title"], [1, "espejo"], [3, "formGroup", "ngSubmit"], [1, "division"], [1, "etiquetas"], ["type", "text", "formControlName", "nombre", "placeholder", "Ingrese el nombre del docuemnto", "autofocus", "", "required", "", 1, "correo-pass"], ["formControlName", "descripcion", "type", "text", "placeholder", "Ingrese la descripci\u00F3n del archivo", "required", "", 1, "correo-pass"], ["formControlName", "tipo", "name", "select", 1, "correo-pass"], ["value", "pdf", "selected", ""], ["value", "pptx"], ["value", "xls", "selected", ""], ["value", "docx"], ["type", "file", 1, "btn", "btn-archivos", 3, "change"], [1, "button"], ["type", "submit", "value", "SUBIR DOCUMENTOS", 1, "btn", "btn-nuevo"]], template: function CrearManualesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "SUBIR MANUALES");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CrearManualesComponent_Template_form_ngSubmit_4_listener() { return ctx.agregarManuales(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " INGRESE EL NOMBRE DEL MANUAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4)(10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " DESCRIPCI\u00D3N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4)(14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " TIPO DE DOCUMENTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "select", 8)(17, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "POWER POINT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "EXCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "WORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CrearManualesComponent_Template_input_change_25_listener($event) { return ctx.getFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.manualesForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1tYW51YWxlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5167:
/*!************************************************************************************************!*\
  !*** ./src/app/protected/administrador/crear-notificaciones/crear-notificaciones.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearNotificacionesComponent": () => (/* binding */ CrearNotificacionesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_protected_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/protected/services/notificaciones.service */ 3290);





class CrearNotificacionesComponent {
    constructor(fb, router, toastr, _notificacionesService, aRouter) {
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this._notificacionesService = _notificacionesService;
        this.aRouter = aRouter;
        this.notificacionesForm = this.fb.group({
            nombre: [''],
            descripcion: [''],
            usuario: [''],
            fechacreacion: ['']
        });
        this.id = this.aRouter.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.esEditar();
    }
    agregarNotificaciones() {
        const NOTIFICACIONES = {
            /*nuevas constantes*/
            nombre: this.notificacionesForm.get('nombre')?.value,
            descripcion: this.notificacionesForm.get('descripcion')?.value,
            usuario: this.notificacionesForm.get('usuario')?.value,
            fechacreacion: this.notificacionesForm.get('fechacreacion')?.value
            /*-------------------*/
        };
        console.log(NOTIFICACIONES);
        this._notificacionesService.guardarNotificaciones(NOTIFICACIONES).subscribe(data => {
            this.toastr.success('La notificación fue gardada', 'Notificación Registrada');
            this.router.navigate(['/']);
        }, error => {
            console.log(error);
            this.notificacionesForm.reset();
        });
    }
    esEditar() {
        if (this.id !== null) {
            this._notificacionesService.obtenerNotificacion(this.id).subscribe(data => {
                this.notificacionesForm.setValue({
                    nombre: data.nombre,
                    descripcion: data.descripcion,
                    usuario: data.usuario,
                    fechacreacion: data.tipo
                });
            });
        }
    }
}
CrearNotificacionesComponent.ɵfac = function CrearNotificacionesComponent_Factory(t) { return new (t || CrearNotificacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_protected_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_0__.NotificacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
CrearNotificacionesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CrearNotificacionesComponent, selectors: [["app-crear-notificaciones"]], decls: 23, vars: 1, consts: [[1, "hideScroll"], [1, "title"], [1, "espejo"], [3, "formGroup", "ngSubmit"], [1, "division"], [1, "etiquetas"], ["type", "text", "formControlName", "nombre", "placeholder", "Ingrese el titulo de la notificaci\u00F3n", "autofocus", "", "required", "", 1, "correo-pass"], ["formControlName", "descripcion", "type", "text", "placeholder", "Ingrese el contenido de la notificaci\u00F3n", "required", "", 1, "correo-pass"], ["formControlName", "usuario", "type", "text", "placeholder", "seleccione el usuario de destino", "required", "", 1, "correo-pass"], ["formControlName", "fechacreacion", "type", "text", "placeholder", "fecha de creaci\u00F3n de la notificaci\u00F3n", "required", "", 1, "correo-pass"], [1, "button"], ["type", "submit", "value", "CREAR NOTIFICACI\u00D3N", 1, "btn", "btn-nuevo"]], template: function CrearNotificacionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "CREAR NOTIFICACIONES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CrearNotificacionesComponent_Template_form_ngSubmit_4_listener() { return ctx.agregarNotificaciones(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Titulo de la notificaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Descripci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4)(14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Usuarios de destino ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4)(18, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Fecha de creaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.notificacionesForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1ub3RpZmljYWNpb25lcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7281:
/*!************************************************************************************!*\
  !*** ./src/app/protected/administrador/crear-usuarios/crear-usuarios.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearUsuariosComponent": () => (/* binding */ CrearUsuariosComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_protected_services_usuarios_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/protected/services/usuarios.service */ 8541);






class CrearUsuariosComponent {
    constructor(fb, router, toastr, _usuariosService, aRouter) {
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this._usuariosService = _usuariosService;
        this.aRouter = aRouter;
        this.titulo = 'Crear usuarios';
        this.usuariosForm = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            aoellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            correo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            contrasena: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
        this.id = this.aRouter.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.esEditar();
    }
    esEditar() {
        if (this.id !== null) {
            this._usuariosService.obtenerUsuario(this.id).subscribe(data => {
                this.usuariosForm.setValue({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    area: data.area
                });
            });
        }
    }
    actualizar() {
    }
}
CrearUsuariosComponent.ɵfac = function CrearUsuariosComponent_Factory(t) { return new (t || CrearUsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_protected_services_usuarios_service__WEBPACK_IMPORTED_MODULE_0__.UsuariosService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
CrearUsuariosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CrearUsuariosComponent, selectors: [["app-crear-usuarios"]], decls: 19, vars: 1, consts: [[1, "title"], [1, "espejo-registro"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "division"], [1, "etiquetas"], ["type", "text", "formControlName", "name", "placeholder", "Ingrese su nombre", "autofocus", "", 1, "correo-pass"], ["type", "text", "formControlName", "email", "placeholder", "Ingrese su email", "autofocus", "", 1, "correo-pass"], ["type", "password", "formControlName", "password", "placeholder", "Ingrese su contrase\u00F1a", 1, "correo-pass"], [1, "div-boton"], [1, "btn", "btn-registrar"]], template: function CrearUsuariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "REGISTRO DE NUEVOS USUARIOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CrearUsuariosComponent_Template_form_ngSubmit_3_listener() { return ctx.actualizar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " INGRESE SU NOMBRE COMPLETO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3)(9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " INGRESE SU CORREO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3)(13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " INGRESE SU CONTRASE\u00D1A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8)(17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " CREAR USUARIO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.usuariosForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".text-danger[_ngcontent-%COMP%] {\r\n    text-align: start;\r\n    margin-left: 7px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWFyLXVzdWFyaW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImNyZWFyLXVzdWFyaW9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1kYW5nZXIge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG59Il19 */"] });


/***/ }),

/***/ 2449:
/*!********************************************************************************!*\
  !*** ./src/app/protected/administrador/crear-videos/crear-videos.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearVideosComponent": () => (/* binding */ CrearVideosComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_protected_services_videos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/protected/services/videos.service */ 8407);






class CrearVideosComponent {
    constructor(fb, router, toastr, _videosService, aRouter) {
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this._videosService = _videosService;
        this.aRouter = aRouter;
        this.titulo = 'Crear videos';
        this.videosForm = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            link: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
        });
        this.id = this.aRouter.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.esEditar();
    }
    agregarVideos() {
        const VIDEOS = {
            nombre: this.videosForm.get('nombre')?.value,
            link: this.videosForm.get('link')?.value,
            descripcion: this.videosForm.get('descripcion')?.value
        };
        console.log(VIDEOS);
        this._videosService.guardarVideos(VIDEOS).subscribe(data => {
            this.toastr.success('El video fue registrado con exito!', 'video Registrado!');
            this.router.navigate(['/']);
        }, error => {
            console.log(error);
            this.videosForm.reset();
        });
    }
    esEditar() {
        if (this.id !== null) {
            this.titulo = 'Editar producto';
            this._videosService.obtenerVideo(this.id).subscribe(data => {
                this.videosForm.setValue({
                    nombre: data.nombre,
                    link: data.link,
                    descripcion: data.descripcion
                });
            });
        }
    }
}
CrearVideosComponent.ɵfac = function CrearVideosComponent_Factory(t) { return new (t || CrearVideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_protected_services_videos_service__WEBPACK_IMPORTED_MODULE_0__.VideosService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
CrearVideosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CrearVideosComponent, selectors: [["app-crear-videos"]], decls: 15, vars: 1, consts: [[1, "hideScroll"], [1, "title"], [1, "espejo"], [3, "formGroup", "ngSubmit"], [1, "division"], [1, "etiquetas"], ["type", "text", "formControlName", "nombre", "placeholder", "Ingrese su nombre(s)", "autofocus", "", "required", "", 1, "correo-pass"], ["formControlName", "link", "type", "text", "placeholder", "Ingrese sus apellidos", "required", "", 1, "correo-pass"], [1, "button"], ["type", "submit", "value", "SOLICITAR BAJA", 1, "btn", "btn-nuevo"]], template: function CrearVideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "LISTADO DE VIDEOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CrearVideosComponent_Template_form_ngSubmit_4_listener() { return ctx.agregarVideos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " INGRESE SU NOMBRE (s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4)(10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Apellidos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.videosForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci12aWRlb3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3448:
/*!**************************************************************************!*\
  !*** ./src/app/protected/administrador/dashadmin/dashadmin.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashadminComponent": () => (/* binding */ DashadminComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/message.service */ 2684);




class DashadminComponent {
    constructor(fb, _MessageService) {
        this.fb = fb;
        this._MessageService = _MessageService;
        this.formulario = this.fb.group({
            nombre: [''],
            asunto: [''],
            email: [''],
            mensaje: [''],
        });
    }
    correo() {
        const { nombre, asunto, email, mensaje } = this.formulario.value;
        this._MessageService.sendMessage(nombre, asunto, email, mensaje)
            .subscribe(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
        });
    }
}
DashadminComponent.ɵfac = function DashadminComponent_Factory(t) { return new (t || DashadminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService)); };
DashadminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashadminComponent, selectors: [["app-dashadmin"]], decls: 22, vars: 1, consts: [[1, "espejo-reportes"], [1, "title"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "division"], [1, "etiquetas"], ["type", "text", "name", "\u201Dnombre\u201D", "placeholder", "Ingrese su nombre", "autofocus", "", 1, "correo-pass"], ["type", "text", "name", "asunto", "placeholder", "Ingrese el asunto de su email", "autofocus", "", 1, "correo-pass"], ["type", "text", "formControlName", "email", "placeholder", "Ingrese su email", "autofocus", "", 1, "correo-pass"], ["name", "\u201Dmensaje\u201D", 1, "correo-pass-area"], ["type", "\u201Dsubmit\u201D", 1, "btn", "btn-ingresar"]], template: function DashadminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "REPORTE DE FALLAS DE SOFTWARE/HARDWARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function DashadminComponent_Template_form_ngSubmit_3_listener() { return ctx.correo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " INGRESE SU NOMBRE COMPLETO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3)(9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " INGRESE EL ASUNTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3)(13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " INGRESE SU CORREO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 3)(17, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Detalle su mensaje ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formulario);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: [".espejo-reportes[_ngcontent-%COMP%] {\r\n  background-color: rgba(6, 28, 99, 0.5);\r\n  width: 40vw;\r\n  max-width: 600px;\r\n  min-width: 300px;\r\n  height: 540px;\r\n  border-radius: 15px;\r\n  align-content: center;\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: auto;\r\n  margin-top: auto;\r\n  padding-bottom: 154px;\r\n  \r\n}\r\n\r\n.correo-pass-area[_ngcontent-%COMP%]{\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  width: 80%;\r\n  height: 200px;\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n  \r\n  font-size: 15px;\r\n  font-family: 'Montserrat';\r\n  font-weight: 500;\r\n  text-align: left;\r\n  color: white;\r\n  border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hhZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQXNDO0VBQ3RDLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBQUNkIiwiZmlsZSI6ImRhc2hhZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVzcGVqby1yZXBvcnRlcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2LCAyOCwgOTksIDAuNSk7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogNTQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgcGFkZGluZy1ib3R0b206IDE1NHB4O1xyXG4gIC8qICBvdmVyZmxvdy15OiBhdXRvOyovXHJcbn1cclxuXHJcbi5jb3JyZW8tcGFzcy1hcmVhe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAvKnRpcG9ncmFmaWEqL1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59Il19 */"] });


/***/ }),

/***/ 8246:
/*!**************************************************************************************************!*\
  !*** ./src/app/protected/administrador/listar-notificaciones/listar-notificaciones.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarNotificacionesComponent": () => (/* binding */ ListarNotificacionesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_protected_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/protected/services/notificaciones.service */ 3290);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





function ListarNotificacionesComponent_table_6_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListarNotificacionesComponent_table_6_tr_11_Template_i_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const notificaciones_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.eliminarNotificacion(notificaciones_r3._id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const notificaciones_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notificaciones_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notificaciones_r3.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notificaciones_r3.fechacreacion);
} }
function ListarNotificacionesComponent_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "TITULO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "DESCRIPCI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "USUARIOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "FECHA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ListarNotificacionesComponent_table_6_tr_11_Template, 10, 3, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listNotificaciones);
} }
function ListarNotificacionesComponent_h5_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No hay notificaciones para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ListarNotificacionesComponent {
    constructor(_notificacionesService, toastr) {
        this._notificacionesService = _notificacionesService;
        this.toastr = toastr;
        this.listNotificaciones = [];
    }
    ngOnInit() {
        this.obtenerNotificaciones();
    }
    obtenerNotificaciones() {
        this._notificacionesService.getNotificaciones().subscribe(data => {
            console.log(data);
            this.listNotificaciones = data;
        }, error => {
            console.log(error);
        });
    }
    eliminarNotificacion(id) {
        this._notificacionesService.eliminarNotificaciones(id).subscribe(data => {
            this.toastr.error('La notificación fue eliminada con exito', 'Notificación Eliminado');
            this.obtenerNotificaciones();
        }, error => {
            console.log(error);
        });
    }
}
ListarNotificacionesComponent.ɵfac = function ListarNotificacionesComponent_Factory(t) { return new (t || ListarNotificacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_protected_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_0__.NotificacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService)); };
ListarNotificacionesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListarNotificacionesComponent, selectors: [["app-listar-notificaciones"]], decls: 8, vars: 2, consts: [[1, "hideScroll"], [1, "espejo"], [1, "title"], ["routerLink", "/usuario/crear-notificaciones", 1, "btn", "btn-nuevo"], [4, "ngIf"], ["style", "text-align: start; margin-top: 10px;", 4, "ngIf"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["routerLink", "['/editar-notificaciones', notificaciones._id]", 1, "fas", "fa-edit", "text-primary"], [1, "fas", "fa-trash", "text-danger", 3, "click"], [2, "text-align", "start", "margin-top", "10px"]], template: function ListarNotificacionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " LISTADO DE NOTIFICACIONES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "NUEVO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListarNotificacionesComponent_table_6_Template, 12, 1, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ListarNotificacionesComponent_h5_7_Template, 2, 0, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listNotificaciones.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listNotificaciones.length == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXItbm90aWZpY2FjaW9uZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3155:
/*!************************************************************************************************************!*\
  !*** ./src/app/protected/administrador/listar-notificacionesadmin/listar-notificacionesadmin.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarNotificacionesadminComponent": () => (/* binding */ ListarNotificacionesadminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ListarNotificacionesadminComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListarNotificacionesadminComponent.ɵfac = function ListarNotificacionesadminComponent_Factory(t) { return new (t || ListarNotificacionesadminComponent)(); };
ListarNotificacionesadminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListarNotificacionesadminComponent, selectors: [["app-listar-notificacionesadmin"]], decls: 0, vars: 0, template: function ListarNotificacionesadminComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXItbm90aWZpY2FjaW9uZXNhZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2676:
/*!**************************************************************************************!*\
  !*** ./src/app/protected/administrador/listar-usuarios/listar-usuarios.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarUsuariosComponent": () => (/* binding */ ListarUsuariosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/services/auth.service */ 6518);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





function ListarUsuariosComponent_table_6_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const usuarios_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](usuarios_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](usuarios_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](usuarios_r3.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](usuarios_r3.area);
} }
function ListarUsuariosComponent_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "NOMBRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "CORREO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "CONTRASE\u00D1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "AREA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ListarUsuariosComponent_table_6_tr_11_Template, 11, 4, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listUsuarios);
} }
function ListarUsuariosComponent_h5_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No hay usuarios para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ListarUsuariosComponent {
    constructor(authService, toastr) {
        this.authService = authService;
        this.toastr = toastr;
        this.listUsuarios = [];
    }
    ngOnInit() {
        this.obtenerUsuarios();
    }
    obtenerUsuarios() {
        this.authService.getUsuarios().subscribe(data => {
            console.log(data);
            this.listUsuarios = data;
        }, error => {
            console.log(error);
        });
    }
}
ListarUsuariosComponent.ɵfac = function ListarUsuariosComponent_Factory(t) { return new (t || ListarUsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService)); };
ListarUsuariosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListarUsuariosComponent, selectors: [["app-listar-usuarios"]], decls: 8, vars: 2, consts: [[1, "hideScroll"], [1, "espejo"], [1, "title"], ["routerLink", "/crear-usuarios", 1, "btn", "btn-nuevo"], [4, "ngIf"], ["style", "text-align: start; margin-top: 10px;", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["routerLink", "['/editar-usuarios', usuarios._id]", 1, "fas", "fa-edit", "text-primary"], [2, "text-align", "start", "margin-top", "10px"]], template: function ListarUsuariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " LISTADO DE USUARIOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "NUEVO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListarUsuariosComponent_table_6_Template, 12, 1, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ListarUsuariosComponent_h5_7_Template, 2, 0, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listUsuarios.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listUsuarios.length == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXItdXN1YXJpb3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3390:
/*!**********************************************************************************!*\
  !*** ./src/app/protected/administrador/listar-videos/listar-videos.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarVideosComponent": () => (/* binding */ ListarVideosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_protected_services_videos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/protected/services/videos.service */ 8407);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_safe_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/safe.pipe */ 3289);






function ListarVideosComponent_table_6_tr_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListarVideosComponent_table_6_tr_9_Template_i_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const videos_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.eliminarVideos(videos_r4._id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const videos_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](videos_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](videos_r4.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](videos_r4.descripcion);
} }
function ListarVideosComponent_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "NOMBRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "LINK");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "DESCRIPCI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ListarVideosComponent_table_6_tr_9_Template, 10, 3, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.listVideos);
} }
function ListarVideosComponent_h5_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No hay usuarios para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListarVideosComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "iframe", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const videos_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", videos_r7.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, videos_r7.link), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
} }
class ListarVideosComponent {
    constructor(_videosService, toastr) {
        this._videosService = _videosService;
        this.toastr = toastr;
        this.listVideos = [];
    }
    ngOnInit() {
        this.obtenerVideos();
    }
    obtenerVideos() {
        this._videosService.getVideos().subscribe(data => {
            console.log(data);
            this.listVideos = data;
        }, error => {
            console.log(error);
        });
    }
    eliminarVideos(id) {
        this._videosService.eliminarVideos(id).subscribe(data => {
            this.toastr.error('El videos fue eliminado con exito', 'Video Eliminado');
            this.obtenerVideos();
        }, error => {
            console.log(error);
        });
    }
}
ListarVideosComponent.ɵfac = function ListarVideosComponent_Factory(t) { return new (t || ListarVideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_protected_services_videos_service__WEBPACK_IMPORTED_MODULE_0__.VideosService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService)); };
ListarVideosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListarVideosComponent, selectors: [["app-listar-videos"]], decls: 9, vars: 3, consts: [[1, "hideScroll"], [1, "espejo"], [1, "title"], ["routerLink", "/crear-videos", 1, "btn", "btn-nuevo"], [4, "ngIf"], ["style", "text-align: start; margin-top: 10px;", 4, "ngIf"], ["style", "margin-top: 5vh; margin-bottom:5vh;", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["routerLink", "['/editar-videos', videos._id]", 1, "fas", "fa-edit", "text-primary"], [1, "fas", "fa-trash", "text-danger", 3, "click"], [2, "text-align", "start", "margin-top", "10px"], [2, "margin-top", "5vh", "margin-bottom", "5vh"], [2, "text-align", "center"], ["width", "100%", "height", "315", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"]], template: function ListarVideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " LISTADO DE VIDEOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "NUEVO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ListarVideosComponent_table_6_Template, 10, 1, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ListarVideosComponent_h5_7_Template, 2, 0, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ListarVideosComponent_div_8_Template, 5, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.listVideos.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.listVideos.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listVideos);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, src_app_safe_pipe__WEBPACK_IMPORTED_MODULE_1__.SafePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXItdmlkZW9zLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1056:
/*!*******************************************************!*\
  !*** ./src/app/protected/protected-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtectedRoutingModule": () => (/* binding */ ProtectedRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/pages/login/login.component */ 1741);
/* harmony import */ var _administrador_crear_manuales_crear_manuales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administrador/crear-manuales/crear-manuales.component */ 5130);
/* harmony import */ var _administrador_crear_usuarios_crear_usuarios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administrador/crear-usuarios/crear-usuarios.component */ 7281);
/* harmony import */ var _administrador_dashadmin_dashadmin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./administrador/dashadmin/dashadmin.component */ 3448);
/* harmony import */ var _administrador_listar_notificaciones_listar_notificaciones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./administrador/listar-notificaciones/listar-notificaciones.component */ 8246);
/* harmony import */ var _administrador_listar_notificacionesadmin_listar_notificacionesadmin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administrador/listar-notificacionesadmin/listar-notificacionesadmin.component */ 3155);
/* harmony import */ var _administrador_listar_usuarios_listar_usuarios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./administrador/listar-usuarios/listar-usuarios.component */ 2676);
/* harmony import */ var _administrador_listar_videos_listar_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./administrador/listar-videos/listar-videos.component */ 3390);
/* harmony import */ var _workzone_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workzone/clientes/clientes.component */ 6277);
/* harmony import */ var _workzone_crear_clientes_crear_clientes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workzone/crear-clientes/crear-clientes.component */ 6116);
/* harmony import */ var _workzone_crear_misdocumentos_crear_misdocumentos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workzone/crear-misdocumentos/crear-misdocumentos.component */ 280);
/* harmony import */ var _workzone_crear_prestamos_crear_prestamos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./workzone/crear-prestamos/crear-prestamos.component */ 7220);
/* harmony import */ var _workzone_misdocumentos_misdocumentos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./workzone/misdocumentos/misdocumentos.component */ 1815);
/* harmony import */ var _workzone_misnotificaciones_misnotificaciones_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./workzone/misnotificaciones/misnotificaciones.component */ 2276);
/* harmony import */ var _workzone_prestamos_prestamos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./workzone/prestamos/prestamos.component */ 8556);
/* harmony import */ var _workzone_ventas_ventas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./workzone/ventas/ventas.component */ 898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);



















const routes = [
    {
        path: '',
        children: [
            { path: '', component: _auth_pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
            { path: 'clientes', component: _workzone_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_8__.ClientesComponent },
            { path: 'prestamos', component: _workzone_prestamos_prestamos_component__WEBPACK_IMPORTED_MODULE_14__.PrestamosComponent },
            { path: 'dashadmin', component: _administrador_dashadmin_dashadmin_component__WEBPACK_IMPORTED_MODULE_3__.DashadminComponent },
            { path: 'crear-usuarios', component: _administrador_crear_usuarios_crear_usuarios_component__WEBPACK_IMPORTED_MODULE_2__.CrearUsuariosComponent },
            { path: 'listar-notificaciones', component: _administrador_listar_notificaciones_listar_notificaciones_component__WEBPACK_IMPORTED_MODULE_4__.ListarNotificacionesComponent },
            { path: 'listar-notificacionesadmin', component: _administrador_listar_notificacionesadmin_listar_notificacionesadmin_component__WEBPACK_IMPORTED_MODULE_5__.ListarNotificacionesadminComponent },
            { path: 'listar-usuarios', component: _administrador_listar_usuarios_listar_usuarios_component__WEBPACK_IMPORTED_MODULE_6__.ListarUsuariosComponent },
            { path: 'listar-videos', component: _administrador_listar_videos_listar_videos_component__WEBPACK_IMPORTED_MODULE_7__.ListarVideosComponent },
            { path: 'crear-manuales', component: _administrador_crear_manuales_crear_manuales_component__WEBPACK_IMPORTED_MODULE_1__.CrearManualesComponent },
            { path: 'misdocumentos', component: _workzone_misdocumentos_misdocumentos_component__WEBPACK_IMPORTED_MODULE_12__.MisdocumentosComponent },
            { path: 'misnotificaciones', component: _workzone_misnotificaciones_misnotificaciones_component__WEBPACK_IMPORTED_MODULE_13__.MisnotificacionesComponent },
            { path: 'ventas', component: _workzone_ventas_ventas_component__WEBPACK_IMPORTED_MODULE_15__.VentasComponent },
            { path: 'crear-misdocumentos', component: _workzone_crear_misdocumentos_crear_misdocumentos_component__WEBPACK_IMPORTED_MODULE_10__.CrearMisdocumentosComponent },
            { path: 'crear-clientes', component: _workzone_crear_clientes_crear_clientes_component__WEBPACK_IMPORTED_MODULE_9__.CrearClientesComponent },
            { path: 'crear-prestamos', component: _workzone_crear_prestamos_crear_prestamos_component__WEBPACK_IMPORTED_MODULE_11__.CrearPrestamosComponent },
            { path: '**', redirectTo: '' },
        ]
    }
];
class ProtectedRoutingModule {
}
ProtectedRoutingModule.ɵfac = function ProtectedRoutingModule_Factory(t) { return new (t || ProtectedRoutingModule)(); };
ProtectedRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: ProtectedRoutingModule });
ProtectedRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](ProtectedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] }); })();


/***/ }),

/***/ 9313:
/*!***********************************************!*\
  !*** ./src/app/protected/protected.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtectedModule": () => (/* binding */ ProtectedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _protected_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protected-routing.module */ 1056);
/* harmony import */ var _administrador_crear_notificaciones_crear_notificaciones_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administrador/crear-notificaciones/crear-notificaciones.component */ 5167);
/* harmony import */ var _administrador_crear_usuarios_crear_usuarios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administrador/crear-usuarios/crear-usuarios.component */ 7281);
/* harmony import */ var _administrador_crear_videos_crear_videos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./administrador/crear-videos/crear-videos.component */ 2449);
/* harmony import */ var _administrador_listar_notificaciones_listar_notificaciones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./administrador/listar-notificaciones/listar-notificaciones.component */ 8246);
/* harmony import */ var _administrador_listar_notificacionesadmin_listar_notificacionesadmin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administrador/listar-notificacionesadmin/listar-notificacionesadmin.component */ 3155);
/* harmony import */ var _administrador_listar_usuarios_listar_usuarios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./administrador/listar-usuarios/listar-usuarios.component */ 2676);
/* harmony import */ var _administrador_listar_videos_listar_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./administrador/listar-videos/listar-videos.component */ 3390);
/* harmony import */ var src_app_safe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/safe.pipe */ 3289);
/* harmony import */ var _administrador_dashadmin_dashadmin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./administrador/dashadmin/dashadmin.component */ 3448);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _workzone_misnotificaciones_misnotificaciones_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workzone/misnotificaciones/misnotificaciones.component */ 2276);
/* harmony import */ var _workzone_misdocumentos_misdocumentos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./workzone/misdocumentos/misdocumentos.component */ 1815);
/* harmony import */ var _workzone_micalendario_micalendario_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./workzone/micalendario/micalendario.component */ 1433);
/* harmony import */ var _workzone_crear_misdocumentos_crear_misdocumentos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./workzone/crear-misdocumentos/crear-misdocumentos.component */ 280);
/* harmony import */ var _workzone_ventas_ventas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./workzone/ventas/ventas.component */ 898);
/* harmony import */ var _administrador_crear_manuales_crear_manuales_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./administrador/crear-manuales/crear-manuales.component */ 5130);
/* harmony import */ var _workzone_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./workzone/clientes/clientes.component */ 6277);
/* harmony import */ var _workzone_crear_clientes_crear_clientes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./workzone/crear-clientes/crear-clientes.component */ 6116);
/* harmony import */ var _workzone_crear_prestamos_crear_prestamos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./workzone/crear-prestamos/crear-prestamos.component */ 7220);
/* harmony import */ var _workzone_prestamos_prestamos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./workzone/prestamos/prestamos.component */ 8556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);























class ProtectedModule {
}
ProtectedModule.ɵfac = function ProtectedModule_Factory(t) { return new (t || ProtectedModule)(); };
ProtectedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: ProtectedModule });
ProtectedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        _protected_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProtectedRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](ProtectedModule, { declarations: [_administrador_crear_notificaciones_crear_notificaciones_component__WEBPACK_IMPORTED_MODULE_1__.CrearNotificacionesComponent,
        _administrador_crear_usuarios_crear_usuarios_component__WEBPACK_IMPORTED_MODULE_2__.CrearUsuariosComponent,
        _administrador_crear_videos_crear_videos_component__WEBPACK_IMPORTED_MODULE_3__.CrearVideosComponent,
        _administrador_listar_notificaciones_listar_notificaciones_component__WEBPACK_IMPORTED_MODULE_4__.ListarNotificacionesComponent,
        _administrador_listar_notificacionesadmin_listar_notificacionesadmin_component__WEBPACK_IMPORTED_MODULE_5__.ListarNotificacionesadminComponent,
        _administrador_listar_usuarios_listar_usuarios_component__WEBPACK_IMPORTED_MODULE_6__.ListarUsuariosComponent,
        _administrador_listar_videos_listar_videos_component__WEBPACK_IMPORTED_MODULE_7__.ListarVideosComponent,
        _administrador_dashadmin_dashadmin_component__WEBPACK_IMPORTED_MODULE_9__.DashadminComponent,
        _workzone_misnotificaciones_misnotificaciones_component__WEBPACK_IMPORTED_MODULE_10__.MisnotificacionesComponent,
        _workzone_misdocumentos_misdocumentos_component__WEBPACK_IMPORTED_MODULE_11__.MisdocumentosComponent,
        _workzone_micalendario_micalendario_component__WEBPACK_IMPORTED_MODULE_12__.MicalendarioComponent,
        src_app_safe_pipe__WEBPACK_IMPORTED_MODULE_8__.SafePipe,
        _workzone_crear_misdocumentos_crear_misdocumentos_component__WEBPACK_IMPORTED_MODULE_13__.CrearMisdocumentosComponent,
        _workzone_ventas_ventas_component__WEBPACK_IMPORTED_MODULE_14__.VentasComponent,
        _administrador_crear_manuales_crear_manuales_component__WEBPACK_IMPORTED_MODULE_15__.CrearManualesComponent,
        _workzone_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_16__.ClientesComponent,
        _workzone_crear_clientes_crear_clientes_component__WEBPACK_IMPORTED_MODULE_17__.CrearClientesComponent,
        _workzone_crear_prestamos_crear_prestamos_component__WEBPACK_IMPORTED_MODULE_18__.CrearPrestamosComponent,
        _workzone_prestamos_prestamos_component__WEBPACK_IMPORTED_MODULE_19__.PrestamosComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        _protected_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProtectedRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 8977:
/*!*******************************************************!*\
  !*** ./src/app/protected/services/almacen.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlmacenService": () => (/* binding */ AlmacenService)
/* harmony export */ });
/* harmony import */ var globales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! globales */ 5093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class AlmacenService {
    constructor(http) {
        this.http = http;
        this.url = globales__WEBPACK_IMPORTED_MODULE_0__.lurl + '/api/almacen/';
    }
    getAlmacen() {
        return this.http.get(this.url);
    }
    eliminarAlmacen(id) {
        return this.http.delete(this.url + id);
    }
    guardarAlmacen(almacen) {
        return this.http.post(this.url, almacen);
    }
    obtenerAlmacen(id) {
        return this.http.get(this.url + id);
    }
}
AlmacenService.ɵfac = function AlmacenService_Factory(t) { return new (t || AlmacenService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AlmacenService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AlmacenService, factory: AlmacenService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8795:
/*!********************************************************!*\
  !*** ./src/app/protected/services/clientes.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesService": () => (/* binding */ ClientesService)
/* harmony export */ });
/* harmony import */ var globales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! globales */ 5093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ClientesService {
    constructor(http) {
        this.http = http;
        this.url = globales__WEBPACK_IMPORTED_MODULE_0__.lurl + '/api/clientes/';
    }
    getClientes() {
        return this.http.get(this.url);
    }
    eliminarClientes(id) {
        return this.http.delete(this.url + id);
    }
    guardarClientes(clientes) {
        return this.http.post(this.url, clientes);
    }
    obtenerClientes(id) {
        return this.http.get(this.url + id);
    }
}
ClientesService.ɵfac = function ClientesService_Factory(t) { return new (t || ClientesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ClientesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClientesService, factory: ClientesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 496:
/*!*************************************************************!*\
  !*** ./src/app/protected/services/misdocumentos.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisdocumentosService": () => (/* binding */ MisdocumentosService)
/* harmony export */ });
/* harmony import */ var globales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! globales */ 5093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class MisdocumentosService {
    constructor(http) {
        this.http = http;
        this.url = globales__WEBPACK_IMPORTED_MODULE_0__.lurl + '/api/misdocumentos/';
    }
    getMisdocumentos() {
        return this.http.get(this.url);
    }
    eliminarMisdocumentos(id) {
        return this.http.delete(this.url + id);
    }
    guardarMisdocumentos(misdocumentos) {
        return this.http.post(this.url, misdocumentos);
    }
    obtenerMidocumento(id) {
        return this.http.get(this.url + id);
    }
}
MisdocumentosService.ɵfac = function MisdocumentosService_Factory(t) { return new (t || MisdocumentosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
MisdocumentosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MisdocumentosService, factory: MisdocumentosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3290:
/*!**************************************************************!*\
  !*** ./src/app/protected/services/notificaciones.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificacionesService": () => (/* binding */ NotificacionesService)
/* harmony export */ });
/* harmony import */ var globales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! globales */ 5093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class NotificacionesService {
    constructor(http) {
        this.http = http;
        this.url = globales__WEBPACK_IMPORTED_MODULE_0__.lurl + '/api/notificaciones/';
    }
    getNotificaciones() {
        return this.http.get(this.url);
    }
    eliminarNotificaciones(id) {
        return this.http.delete(this.url + id);
    }
    guardarNotificaciones(notificaciones) {
        return this.http.post(this.url, notificaciones);
    }
    obtenerNotificacion(id) {
        return this.http.get(this.url + id);
    }
}
NotificacionesService.ɵfac = function NotificacionesService_Factory(t) { return new (t || NotificacionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
NotificacionesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificacionesService, factory: NotificacionesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7137:
/*!*********************************************************!*\
  !*** ./src/app/protected/services/prestamos.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrestamosService": () => (/* binding */ PrestamosService)
/* harmony export */ });
/* harmony import */ var globales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! globales */ 5093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class PrestamosService {
    constructor(http) {
        this.http = http;
        this.url = globales__WEBPACK_IMPORTED_MODULE_0__.lurl + '/api/prestamos/';
    }
    getPrestamos() {
        return this.http.get(this.url);
    }
    eliminarPrestamos(id) {
        return this.http.delete(this.url + id);
    }
    guardarPrestamos(prestamos) {
        return this.http.post(this.url, prestamos);
    }
    obtenerPrestamos(id) {
        return this.http.get(this.url + id);
    }
}
PrestamosService.ɵfac = function PrestamosService_Factory(t) { return new (t || PrestamosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PrestamosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PrestamosService, factory: PrestamosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 774:
/*!****************************************************!*\
  !*** ./src/app/protected/services/rest.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestService": () => (/* binding */ RestService)
/* harmony export */ });
/* harmony import */ var globales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! globales */ 5093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class RestService {
    constructor(http) {
        this.http = http;
    }
    sendPost(body) {
        return this.http.post(globales__WEBPACK_IMPORTED_MODULE_0__.lurl + `/upload`, body);
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8541:
/*!********************************************************!*\
  !*** ./src/app/protected/services/usuarios.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosService": () => (/* binding */ UsuariosService)
/* harmony export */ });
/* harmony import */ var globales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! globales */ 5093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class UsuariosService {
    constructor(http) {
        this.http = http;
        this.url = globales__WEBPACK_IMPORTED_MODULE_0__.lurl + '/api/usuarios/';
    }
    getUsuarios() {
        return this.http.get(this.url);
    }
    eliminarUsuario(id) {
        return this.http.delete(this.url + id);
    }
    guardarUsuario(usuarios) {
        return this.http.post(this.url, usuarios);
    }
    obtenerUsuario(id) {
        return this.http.get(this.url + id);
    }
}
UsuariosService.ɵfac = function UsuariosService_Factory(t) { return new (t || UsuariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UsuariosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsuariosService, factory: UsuariosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8407:
/*!******************************************************!*\
  !*** ./src/app/protected/services/videos.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideosService": () => (/* binding */ VideosService)
/* harmony export */ });
/* harmony import */ var globales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! globales */ 5093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class VideosService {
    constructor(http) {
        this.http = http;
        this.url = globales__WEBPACK_IMPORTED_MODULE_0__.lurl + '/api/videos/';
    }
    getVideos() {
        return this.http.get(this.url);
    }
    eliminarVideos(id) {
        return this.http.delete(this.url + id);
    }
    guardarVideos(videos) {
        return this.http.post(this.url, videos);
    }
    obtenerVideo(id) {
        return this.http.get(this.url + id);
    }
}
VideosService.ɵfac = function VideosService_Factory(t) { return new (t || VideosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
VideosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VideosService, factory: VideosService.ɵfac, providedIn: 'any' });


/***/ }),

/***/ 6277:
/*!*******************************************************************!*\
  !*** ./src/app/protected/workzone/clientes/clientes.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesComponent": () => (/* binding */ ClientesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_protected_services_clientes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/protected/services/clientes.service */ 8795);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





function ClientesComponent_table_6_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const clientes_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](clientes_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](clientes_r3.direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](clientes_r3.colonia);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](clientes_r3.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](clientes_r3.cobranza);
} }
function ClientesComponent_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "NOMBRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "DIRECCI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "COLONIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "TELEFONO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "DIR. DE COBRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ClientesComponent_table_6_tr_13_Template, 11, 5, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listClientes);
} }
function ClientesComponent_h5_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No hay solicitudes para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ClientesComponent {
    constructor(_clientesService, toastr) {
        this._clientesService = _clientesService;
        this.toastr = toastr;
        this.listClientes = [];
    }
    ngOnInit() {
        this.obtenerClientes();
    }
    obtenerClientes() {
        this._clientesService.getClientes().subscribe(data => {
            console.log(data);
            this.listClientes = data;
        }, error => {
            console.log(error);
        });
    }
    eliminarClientes(id) {
        this._clientesService.eliminarClientes(id).subscribe(data => {
            this.toastr.error('El producto fue eliminado con exito', 'Producto Eliminado');
            this.obtenerClientes();
        }, error => {
            console.log(error);
        });
    }
}
ClientesComponent.ɵfac = function ClientesComponent_Factory(t) { return new (t || ClientesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_protected_services_clientes_service__WEBPACK_IMPORTED_MODULE_0__.ClientesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService)); };
ClientesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClientesComponent, selectors: [["app-clientes"]], decls: 8, vars: 2, consts: [[1, "hideScroll"], [1, "espejo"], [1, "title"], ["routerLink", "/usuario/crear-clientes", 1, "btn", "btn-nuevo"], [4, "ngIf"], ["class", "etiquetas", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "etiquetas"]], template: function ClientesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " CLIENTES REGISTRADOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "NUEVO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ClientesComponent_table_6_Template, 14, 1, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ClientesComponent_h5_7_Template, 2, 0, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listClientes.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listClientes.length == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6116:
/*!*******************************************************************************!*\
  !*** ./src/app/protected/workzone/crear-clientes/crear-clientes.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearClientesComponent": () => (/* binding */ CrearClientesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_protected_services_clientes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/protected/services/clientes.service */ 8795);
/* harmony import */ var src_app_protected_services_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/protected/services/rest.service */ 774);
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/services/auth.service */ 6518);







// crea un nuevo objeto `Date`
var today = new Date();
// `getDate()` devuelve el día del mes (del 1 al 31)
var day = today.getDate();
// `getMonth()` devuelve el mes (de 0 a 11)
var month = today.getMonth() + 1;
// `getFullYear()` devuelve el año completo
var year = today.getFullYear();
// muestra la fecha de hoy en formato `MM/DD/YYYY`
var fecha = `${month}-${day}-${year}`;
var hora = today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds();
var FechaHora = fecha + '-' + hora;
class CrearClientesComponent {
    constructor(fb, router, toastr, _clientesService, aRouter, restService, authService) {
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this._clientesService = _clientesService;
        this.aRouter = aRouter;
        this.restService = restService;
        this.authService = authService;
        this.clientesForm = this.fb.group({
            nombre: [''],
            direccion: [''],
            colonia: [''],
            telefono: [''],
            cobranza: [''],
            cantidadprestamo: [''],
            pagodiario: [''],
            plazoprestamo: [''],
        });
        this.id = this.aRouter.snapshot.paramMap.get('id');
    }
    get email() {
        return this.authService.usuario.email;
    }
    ngOnInit() {
        this.pruebafecha();
    }
    pruebafecha() {
        console.log(`${month}-${day}-${year}`);
        console.log(this.email);
    }
    agregarClientes() {
        const CLIENTES = {
            nombre: this.clientesForm.get('nombre')?.value,
            direccion: this.clientesForm.get('direccion')?.value,
            colonia: this.clientesForm.get('colonia')?.value,
            telefono: this.clientesForm.get('telefono')?.value,
            cobranza: this.clientesForm.get('cobranza')?.value,
            cantidadprestamo: this.clientesForm.get('cantidadprestamo')?.value,
            pagodiario: this.clientesForm.get('pagodiario')?.value,
            plazoprestamo: this.clientesForm.get('plazoprestamo')?.value,
            // ruta: "src/app/public/" + this.misdocumentosForm.get('nombre')?.value + this.misdocumentosForm.get('tipo')?.value
        };
        console.log(CLIENTES);
        this._clientesService.guardarClientes(CLIENTES).subscribe(data => {
            this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
            this.router.navigate(['/usuario/almacen']);
        }, error => {
            console.log(error);
            this.clientesForm.reset();
        });
    }
    //metodos para enviar el archivo
    getFile($event) {
        //TODO esto captura el archivo!
        const [file] = $event.target.files;
        const extension = $event.target.files;
        this.fileTmp = {
            fileRaw: file,
            // fileName:file.name
            fileName: FechaHora + "-" + this.clientesForm.get('nombre')?.value + "." + this.clientesForm.get('tipo')?.value
        };
    }
    sendFile() {
        const body = new FormData();
        body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
        this.restService.sendPost(body)
            .subscribe(res => console.log(res));
    }
}
CrearClientesComponent.ɵfac = function CrearClientesComponent_Factory(t) { return new (t || CrearClientesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_protected_services_clientes_service__WEBPACK_IMPORTED_MODULE_0__.ClientesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_protected_services_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
CrearClientesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CrearClientesComponent, selectors: [["app-crear-clientes"]], decls: 39, vars: 1, consts: [[1, "hideScroll"], [1, "espejo"], [1, "title"], [3, "formGroup", "ngSubmit"], [1, "division"], [1, "etiquetas"], ["type", "text", "formControlName", "nombre", "autofocus", "", "required", "", 1, "correo-pass"], ["formControlName", "direccion", "type", "text", "required", "", 1, "correo-pass"], ["formControlName", "colonia", "type", "text", "required", "", 1, "correo-pass"], ["formControlName", "telefono", "type", "text", "required", "", 1, "correo-pass"], ["formControlName", "cobranza", "type", "text", "required", "", 1, "correo-pass"], ["formControlName", "cantidadprestamo", "type", "text", "required", "", 1, "correo-pass"], ["formControlName", "pagodiario", "type", "text", "required", "", 1, "correo-pass"], ["formControlName", "plazoprestamo", "type", "text", "required", "", 1, "correo-pass"], [1, "button"], ["type", "submit", "value", "GUARDAR CLIENTE", 1, "btn", "btn-nuevo"]], template: function CrearClientesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "REGISTRAR CLIENTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CrearClientesComponent_Template_form_ngSubmit_4_listener() { return ctx.agregarClientes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " INGRESE EL NOMBRE COMPLETO DEL CLIENTE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4)(10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " INGRESE LA DIRECCI\u00D3N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 4)(14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " INGRESE LA COLONIA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 4)(18, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " INGRESE EL TELEFONO DE CONTACTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 4)(22, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " DIRECCI\u00D3N DE COBRANZA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 4)(26, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " CANTIDAD A PRESTAMO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 4)(30, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " CANTIDAD A PAGAR DIARIO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 4)(34, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " PLAZO DEL PRESTAMO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.clientesForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1jbGllbnRlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 280:
/*!*****************************************************************************************!*\
  !*** ./src/app/protected/workzone/crear-misdocumentos/crear-misdocumentos.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearMisdocumentosComponent": () => (/* binding */ CrearMisdocumentosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_protected_services_misdocumentos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/protected/services/misdocumentos.service */ 496);
/* harmony import */ var src_app_protected_services_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/protected/services/rest.service */ 774);
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/services/auth.service */ 6518);







// crea un nuevo objeto `Date`
var today = new Date();
// `getDate()` devuelve el día del mes (del 1 al 31)
var day = today.getDate();
// `getMonth()` devuelve el mes (de 0 a 11)
var month = today.getMonth() + 1;
// `getFullYear()` devuelve el año completo
var year = today.getFullYear();
// muestra la fecha de hoy en formato `MM/DD/YYYY`
var fecha = `${month}-${day}-${year}`;
var hora = today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds();
var FechaHora = fecha + '-' + hora;
class CrearMisdocumentosComponent {
    constructor(fb, router, toastr, _misdocumentosService, aRouter, restService, authService) {
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this._misdocumentosService = _misdocumentosService;
        this.aRouter = aRouter;
        this.restService = restService;
        this.authService = authService;
        this.misdocumentosForm = this.fb.group({
            nombre: [''],
            descripcion: [''],
            tipo: [''],
            autor: [''],
            ruta: [''],
            correo: [this.email],
            proyectoid: ['']
        });
        this.id = this.aRouter.snapshot.paramMap.get('id');
    }
    get email() {
        return this.authService.usuario.email;
    }
    ngOnInit() {
        this.pruebafecha();
    }
    pruebafecha() {
        console.log(`${month}-${day}-${year}`);
        console.log(this.email);
    }
    agregarMisdocumentos() {
        this.sendFile();
        const MISDOCUMENTOS = {
            nombre: this.misdocumentosForm.get('nombre')?.value,
            descripcion: this.misdocumentosForm.get('descripcion')?.value,
            tipo: this.misdocumentosForm.get('tipo')?.value,
            autor: this.misdocumentosForm.get('autor')?.value,
            proyectoid: this.misdocumentosForm.get('proyectoid')?.value,
            correo: this.misdocumentosForm.get('correo')?.value,
            ruta: "src/app/public/" + FechaHora + "-" + this.misdocumentosForm.get('nombre')?.value + "." + this.misdocumentosForm.get('tipo')?.value
            // ruta: "src/app/public/" + this.misdocumentosForm.get('nombre')?.value + this.misdocumentosForm.get('tipo')?.value
        };
        console.log(MISDOCUMENTOS);
        this._misdocumentosService.guardarMisdocumentos(MISDOCUMENTOS).subscribe(data => {
            this.toastr.success('El manual fue registrado con exito!', 'Manual Registrado!');
            this.router.navigate(['/usuario/misdocumentos']);
        }, error => {
            console.log(error);
            this.misdocumentosForm.reset();
        });
    }
    //metodos para enviar el archivo
    getFile($event) {
        //TODO esto captura el archivo!
        const [file] = $event.target.files;
        const extension = $event.target.files;
        this.fileTmp = {
            fileRaw: file,
            // fileName:file.name
            fileName: FechaHora + "-" + this.misdocumentosForm.get('nombre')?.value + "." + this.misdocumentosForm.get('tipo')?.value
        };
    }
    sendFile() {
        const body = new FormData();
        body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
        this.restService.sendPost(body)
            .subscribe(res => console.log(res));
    }
}
CrearMisdocumentosComponent.ɵfac = function CrearMisdocumentosComponent_Factory(t) { return new (t || CrearMisdocumentosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_protected_services_misdocumentos_service__WEBPACK_IMPORTED_MODULE_0__.MisdocumentosService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_protected_services_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
CrearMisdocumentosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CrearMisdocumentosComponent, selectors: [["app-crear-misdocumentos"]], decls: 40, vars: 1, consts: [[1, "hideScroll"], [1, "espejo"], [1, "title"], [3, "formGroup", "ngSubmit"], [1, "division"], [1, "etiquetas"], ["type", "text", "formControlName", "nombre", "placeholder", "Ingrese el nombre del docuemnto", "autofocus", "", "required", "", 1, "correo-pass"], ["formControlName", "descripcion", "type", "text", "placeholder", "Ingrese la descripci\u00F3n del archivo", "required", "", 1, "correo-pass"], ["formControlName", "tipo", "name", "select", 1, "correo-pass"], ["value", "pdf", "selected", ""], ["value", "pptx"], ["value", "xls", "selected", ""], ["value", "docx"], ["formControlName", "autor", "type", "text", "placeholder", "Ingrese el autor", "required", "", 1, "correo-pass"], ["formControlName", "correo", "type", "text", "placeholder", "Ingrese su correo", "required", "", 1, "correo-pass"], ["formControlName", "proyectoid", "type", "text", "placeholder", "Ingrese el nombre del proyecto", "required", "", 1, "correo-pass"], ["type", "file", 1, "btn", "btn-archivos", 3, "change"], [1, "button"], ["type", "submit", "value", "SUBIR DOCUMENTOS", 1, "btn", "btn-nuevo"]], template: function CrearMisdocumentosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "SUBIR DOCUEMNTOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CrearMisdocumentosComponent_Template_form_ngSubmit_4_listener() { return ctx.agregarMisdocumentos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " INGRESE EL NOMBRE DEL DOCUMENTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4)(10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Descripci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 4)(14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Tipo de documento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "select", 8)(17, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "POWER POINT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "EXCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "WORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 4)(26, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Autor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 4)(30, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Correo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 4)(34, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Nombre del proyecto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CrearMisdocumentosComponent_Template_input_change_37_listener($event) { return ctx.getFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.misdocumentosForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1taXNkb2N1bWVudG9zLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 7220:
/*!*********************************************************************************!*\
  !*** ./src/app/protected/workzone/crear-prestamos/crear-prestamos.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearPrestamosComponent": () => (/* binding */ CrearPrestamosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_protected_services_prestamos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/protected/services/prestamos.service */ 7137);
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/services/auth.service */ 6518);






//////////////////////////////////////////////////////////
// crea un nuevo objeto `Date`
var today = new Date();
// `getDate()` devuelve el día del mes (del 1 al 31)
var day = today.getDate();
// `getMonth()` devuelve el mes (de 0 a 11)
var month = today.getMonth() + 1;
// `getFullYear()` devuelve el año completo
var year = today.getFullYear();
// muestra la fecha de hoy en formato `MM/DD/YYYY`
var fecha = `${month}-${day}-${year}`;
var hora = today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds();
var FechaHora = fecha + '-' + hora;
//////////////////////////////////////////////////////////
class CrearPrestamosComponent {
    constructor(fb, router, toastr, _prestamosService, aRouter, authService) {
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this._prestamosService = _prestamosService;
        this.aRouter = aRouter;
        this.authService = authService;
        this.prestamosForm = this.fb.group({
            fecha: [fecha],
            folio: [fecha + '1'],
            nombre: [''],
            direccion: [''],
            colonia: [''],
            telefono: [''],
            cobranza: [''],
            cantidadprestamo: [''],
            plazoprestamo: [''],
            totalapagar: [""],
            pagodiario: [''],
            fechapago: [fecha]
        });
        this.id = this.aRouter.snapshot.paramMap.get('id');
    }
    get email() {
        return this.authService.usuario.email;
    }
    ngOnInit() {
        this.pruebafecha();
    }
    pruebafecha() {
        console.log(`${month}-${day}-${year}`);
        console.log(this.email);
    }
    agregarPrestamos() {
        const PRESTAMOS = {
            fecha: this.prestamosForm.get('fecha')?.value,
            folio: this.prestamosForm.get('folio')?.value,
            nombre: this.prestamosForm.get('nombre')?.value,
            direccion: this.prestamosForm.get('direccion')?.value,
            colonia: this.prestamosForm.get('colonia')?.value,
            telefono: this.prestamosForm.get('telefono')?.value,
            cobranza: this.prestamosForm.get('cobranza')?.value,
            cantidadprestamo: this.prestamosForm.get('cantidadprestamo')?.value,
            pagodiario: this.prestamosForm.get('pagodiario')?.value,
            //
            plazoprestamo: this.prestamosForm.get('plazo')?.value,
            fechapago: this.prestamosForm.get('fechapago')?.value,
            totalapagar: this.prestamosForm.get('totalapagar')?.value
        };
        this._prestamosService.guardarPrestamos(PRESTAMOS).subscribe(data => {
            this.toastr.success('El prestamo fue registrado con exito!', 'prestamo Registrado!');
            this.router.navigate(['/usuario/prestamos']);
        }, error => {
            console.log(error);
            this.prestamosForm.reset();
        });
    }
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
CrearPrestamosComponent.ɵfac = function CrearPrestamosComponent_Factory(t) { return new (t || CrearPrestamosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_protected_services_prestamos_service__WEBPACK_IMPORTED_MODULE_0__.PrestamosService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
CrearPrestamosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CrearPrestamosComponent, selectors: [["app-crear-prestamos"]], decls: 83, vars: 1, consts: [[1, "hideScroll"], [1, "espejo"], [1, "title"], [3, "formGroup", "ngSubmit"], [1, "division"], [1, "etiquetas"], ["type", "text", "formControlName", "fecha", "autofocus", "", "required", "", "readonly", "", 1, "correo-pass"], ["type", "text", "formControlName", "folio", "autofocus", "", "required", "", "readonly", "", 1, "correo-pass"], ["type", "text", "formControlName", "nombre", "autofocus", "", "required", "", 1, "correo-pass"], ["formControlName", "direccion", "type", "text", "required", "", 1, "correo-pass"], ["formControlName", "colonia", "type", "text", "required", "", 1, "correo-pass"], ["formControlName", "telefono", "type", "text", "required", "", 1, "correo-pass"], ["formControlName", "cobranza", "type", "text", "required", "", 1, "correo-pass"], ["type", "text", "name", "pago", "id", "pago", 1, "correo-pass", 3, "click"], ["value", "1000"], ["value", "1500"], ["value", "2000"], ["value", "2500"], ["value", "3000"], ["value", "3500"], ["value", "4000"], ["value", "4500"], ["value", "5000"], ["type", "text", "name", "plazo", "id", "plazo", 1, "correo-pass", 3, "click"], ["value", "15"], ["value", "20"], ["value", "25"], ["value", "30"], ["formControlName", "totalapagar", "id", "totalapagar", 1, "correo-pass"], ["formControlName", "pagodiario", "id", "diario", 1, "correo-pass"], ["formControlName", "fechapago", "id", "fechapago", "readonly", "", 1, "correo-pass"], [1, "button"], ["type", "submit", "value", "GENERAR PRESTAMO", 1, "btn", "btn-nuevo"]], template: function CrearPrestamosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "GENERAR PRESTAMO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CrearPrestamosComponent_Template_form_ngSubmit_4_listener() { return ctx.agregarPrestamos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " FECHA DEL PRESTAMO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4)(10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " FOLIO DEL PRESTAMO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4)(14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " INGRESE EL NOMBRE COMPLETO DEL CLIENTE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4)(18, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " INGRESE LA DIRECCI\u00D3N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 4)(22, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " INGRESE LA COLONIA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 4)(26, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " INGRESE EL TELEFONO DE CONTACTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 4)(30, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " DIRECCI\u00D3N DE COBRANZA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 4)(34, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " CANTIDAD A PRESTAMO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CrearPrestamosComponent_Template_select_click_36_listener() { return ctx.totaltodos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "1500");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "2500");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "3000");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "3500");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "4000");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "4500");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "5000");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 4)(56, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " PLAZO DEL PRESTAMO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CrearPrestamosComponent_Template_select_click_58_listener() { return ctx.totaltodos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 4)(68, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " CANTIDAD A PAGAR TOTAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 4)(73, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " CANTIDAD A PAGAR DIARIO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 4)(78, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " FECHA DE PAGO- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.prestamosForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1wcmVzdGFtb3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1433:
/*!***************************************************************************!*\
  !*** ./src/app/protected/workzone/micalendario/micalendario.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MicalendarioComponent": () => (/* binding */ MicalendarioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class MicalendarioComponent {
    constructor() { }
    ngOnInit() {
    }
}
MicalendarioComponent.ɵfac = function MicalendarioComponent_Factory(t) { return new (t || MicalendarioComponent)(); };
MicalendarioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MicalendarioComponent, selectors: [["app-micalendario"]], decls: 0, vars: 0, template: function MicalendarioComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaWNhbGVuZGFyaW8uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1815:
/*!*****************************************************************************!*\
  !*** ./src/app/protected/workzone/misdocumentos/misdocumentos.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisdocumentosComponent": () => (/* binding */ MisdocumentosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_protected_services_misdocumentos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/protected/services/misdocumentos.service */ 496);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





function MisdocumentosComponent_table_6_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MisdocumentosComponent_table_6_tr_13_Template_i_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const manuales_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.eliminarManual(manuales_r3._id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const manuales_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](manuales_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](manuales_r3.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](manuales_r3.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](manuales_r3.autor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](manuales_r3.proyectoid);
} }
function MisdocumentosComponent_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "NOMBRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "DESCRIPCI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "TIPO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "AUTOR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "PROYECTO ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MisdocumentosComponent_table_6_tr_13_Template, 13, 5, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listMisdocumentos);
} }
function MisdocumentosComponent_h5_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No hay documentos para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MisdocumentosComponent {
    constructor(_misdocumentosService, toastr) {
        this._misdocumentosService = _misdocumentosService;
        this.toastr = toastr;
        this.listMisdocumentos = [];
    }
    ngOnInit() {
        this.obtenerManuales();
    }
    obtenerManuales() {
        this._misdocumentosService.getMisdocumentos().subscribe(data => {
            console.log(data);
            this.listMisdocumentos = data;
        }, error => {
            console.log(error);
        });
    }
    eliminarManual(id) {
        this._misdocumentosService.eliminarMisdocumentos(id).subscribe(data => {
            this.toastr.error('El documento fue eliminado con exito', 'Manual Eliminado');
            this.obtenerManuales();
        }, error => {
            console.log(error);
        });
    }
}
MisdocumentosComponent.ɵfac = function MisdocumentosComponent_Factory(t) { return new (t || MisdocumentosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_protected_services_misdocumentos_service__WEBPACK_IMPORTED_MODULE_0__.MisdocumentosService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService)); };
MisdocumentosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MisdocumentosComponent, selectors: [["app-misdocumentos"]], decls: 8, vars: 2, consts: [[1, "hideScroll"], [1, "espejo"], [1, "title"], ["routerLink", "/usuario/crear-misdocumentos", 1, "btn", "btn-nuevo"], [4, "ngIf"], ["class", "etiquetas", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "fas", "fa-trash", "text-danger", 3, "click"], [1, "etiquetas"]], template: function MisdocumentosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " MIS REPORTES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "NUEVO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MisdocumentosComponent_table_6_Template, 14, 1, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MisdocumentosComponent_h5_7_Template, 2, 0, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listMisdocumentos.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listMisdocumentos.length == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXNkb2N1bWVudG9zLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2276:
/*!*************************************************************************************!*\
  !*** ./src/app/protected/workzone/misnotificaciones/misnotificaciones.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisnotificacionesComponent": () => (/* binding */ MisnotificacionesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_protected_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/protected/services/notificaciones.service */ 3290);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function MisnotificacionesComponent_table_4_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notificaciones_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notificaciones_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notificaciones_r3.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notificaciones_r3.fechacreacion);
} }
function MisnotificacionesComponent_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Fecha Creaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MisnotificacionesComponent_table_4_tr_9_Template, 7, 3, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listNotificaciones);
} }
function MisnotificacionesComponent_h5_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No hay notificaciones para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MisnotificacionesComponent {
    constructor(_notificacionesService, toastr) {
        this._notificacionesService = _notificacionesService;
        this.toastr = toastr;
        this.listNotificaciones = [];
    }
    ngOnInit() {
        this.obtenerNotificaciones();
    }
    obtenerNotificaciones() {
        this._notificacionesService.getNotificaciones().subscribe(data => {
            console.log(data);
            this.listNotificaciones = data;
        }, error => {
            console.log(error);
        });
    }
    eliminarNotificacion(id) {
        this._notificacionesService.eliminarNotificaciones(id).subscribe(data => {
            this.toastr.error('La notificación fue eliminada con exito', 'Notificación Eliminado');
            this.obtenerNotificaciones();
        }, error => {
            console.log(error);
        });
    }
}
MisnotificacionesComponent.ɵfac = function MisnotificacionesComponent_Factory(t) { return new (t || MisnotificacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_protected_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_0__.NotificacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService)); };
MisnotificacionesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MisnotificacionesComponent, selectors: [["app-misnotificaciones"]], decls: 8, vars: 2, consts: [[1, "hideScroll"], [1, "espejo"], [1, "title"], [4, "ngIf"], ["class", "etiquetas", 4, "ngIf"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "etiquetas"]], template: function MisnotificacionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " NOTIFICACIONES GENERALES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MisnotificacionesComponent_table_4_Template, 10, 1, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MisnotificacionesComponent_h5_5_Template, 2, 0, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " NOTIFICACIONES PROPIAS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listNotificaciones.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listNotificaciones.length == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXNub3RpZmljYWNpb25lcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8556:
/*!*********************************************************************!*\
  !*** ./src/app/protected/workzone/prestamos/prestamos.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrestamosComponent": () => (/* binding */ PrestamosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_protected_services_prestamos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/protected/services/prestamos.service */ 7137);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





function PrestamosComponent_table_6_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td")(22, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "PAGO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td")(25, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "MORA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const prestamos_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prestamos_r3.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prestamos_r3.folio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prestamos_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prestamos_r3.direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prestamos_r3.colonia);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prestamos_r3.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prestamos_r3.cobranza);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prestamos_r3.cantidadprestamo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prestamos_r3.pagodiario);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prestamos_r3.plazoprestamo);
} }
function PrestamosComponent_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "FECHA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "FOLIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "NOMBRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "DIRECCI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "COLONIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "TELEFONO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "DIR. DE COBRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "CANTIDAD A PRESTAMO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "PAGO DIARIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "PLAZO DEL PRESTAMO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "PAGO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "MORA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, PrestamosComponent_table_6_tr_27_Template, 27, 10, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listPrestamos);
} }
function PrestamosComponent_h5_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No hay solicitudes para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PrestamosComponent {
    constructor(_prestamosService, toastr) {
        this._prestamosService = _prestamosService;
        this.toastr = toastr;
        this.listPrestamos = [];
    }
    ngOnInit() {
        this.obtenerPrestamos();
    }
    obtenerPrestamos() {
        this._prestamosService.getPrestamos().subscribe(data => {
            console.log(data);
            this.listPrestamos = data;
        }, error => {
            console.log(error);
        });
    }
    eliminarPrestamos(id) {
        this._prestamosService.eliminarPrestamos(id).subscribe(data => {
            this.toastr.error('El prestamo fue eliminado con exito', 'prestamo Eliminado');
            this.obtenerPrestamos();
        }, error => {
            console.log(error);
        });
    }
}
PrestamosComponent.ɵfac = function PrestamosComponent_Factory(t) { return new (t || PrestamosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_protected_services_prestamos_service__WEBPACK_IMPORTED_MODULE_0__.PrestamosService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService)); };
PrestamosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PrestamosComponent, selectors: [["app-prestamos"]], decls: 8, vars: 2, consts: [[1, "hideScroll"], [1, "espejo"], [1, "title"], ["routerLink", "/usuario/crear-prestamos", 1, "btn", "btn-nuevo"], [4, "ngIf"], ["class", "etiquetas", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-nuevo"], [1, "btn", "btn-eliminar"], [1, "etiquetas"]], template: function PrestamosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " PRESTAMOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "NUEVO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PrestamosComponent_table_6_Template, 28, 1, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PrestamosComponent_h5_7_Template, 2, 0, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listPrestamos.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listPrestamos.length == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzdGFtb3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 898:
/*!***************************************************************!*\
  !*** ./src/app/protected/workzone/ventas/ventas.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentasComponent": () => (/* binding */ VentasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_protected_services_almacen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/protected/services/almacen.service */ 8977);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function VentasComponent_table_17_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const almacen_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](almacen_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", almacen_r2.precioventa, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", almacen_r2.preciocompra, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](almacen_r2.stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](almacen_r2.fechacaducidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](almacen_r2.codigobarras);
} }
function VentasComponent_table_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "NOMBRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "PRECIO VENTA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "PRECIO COMPRA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "STOCK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Fecha de caducidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Codigo de barras");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, VentasComponent_table_17_tr_15_Template, 13, 6, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listAlmacen);
} }
class VentasComponent {
    constructor(_almacenService, toastr) {
        this._almacenService = _almacenService;
        this.toastr = toastr;
        this.listAlmacen = [];
    }
    ngOnInit() {
        this.obtenerAlmacen();
    }
    obtenerAlmacen() {
        this._almacenService.getAlmacen().subscribe(data => {
            console.log(data);
            this.listAlmacen = data;
        }, error => {
            console.log(error);
        });
    }
    eliminarAlmacen(id) {
        this._almacenService.eliminarAlmacen(id).subscribe(data => {
            this.toastr.error('El producto fue eliminado con exito', 'Producto Eliminado');
            this.obtenerAlmacen();
        }, error => {
            console.log(error);
        });
    }
}
VentasComponent.ɵfac = function VentasComponent_Factory(t) { return new (t || VentasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_protected_services_almacen_service__WEBPACK_IMPORTED_MODULE_0__.AlmacenService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService)); };
VentasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VentasComponent, selectors: [["app-ventas"]], decls: 18, vars: 1, consts: [[1, "hideScroll-ventas"], [1, "espejo-ventas-izq"], [1, "title"], [1, "busqueda"], [1, "busqueda-text"], ["type", "text", "formControlName", "nombre", "placeholder", "Buscar", "autofocus", "", "required", "", 1, "c-busqueda"], [1, "button"], ["type", "submit", "value", "VENDER", 1, "btn", "btn-nuevo"], [1, "espejo-ventas-der"], [4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function VentasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " VENTAS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " INGRESE EL NOMBRE DEL PRODUCTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " INGRESE EL NOMBRE DEL PRODUCTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, VentasComponent_table_17_Template, 16, 1, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listAlmacen.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: [".espejo-ventas-izq[_ngcontent-%COMP%] {\r\n\r\n   display: grid;\r\n    background-color: rgba(6, 28, 99, 0.5);\r\n    width: 40vw;\r\n    height: 85vh;\r\n  \r\n    border-radius: 15px;\r\n    align-content: center;\r\n    text-align: center;\r\n    margin-left: 0;\r\n    \r\n    padding-top: 60px;\r\n  \r\n  \r\n  }\r\n  \r\n\r\n  .espejo-ventas-der[_ngcontent-%COMP%] {\r\n\r\n\r\n    display: grid;\r\n\r\n    background-color: rgba(94, 111, 166, 0.5);\r\n    width: 59vw;\r\n    height: 85vh;\r\n  \r\n    border-radius: 15px;\r\n    align-content: center;\r\n    text-align: center;\r\n    \r\nmargin-block-end: auto;\r\n  \r\n  }\r\n  \r\n\r\n  .hideScroll-ventas[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n    height: 80vh;\r\n    scroll-width: none;\r\n    \r\n    display: flex;\r\n  }\r\n  \r\n\r\n  .busqueda[_ngcontent-%COMP%]{\r\n  text-align: left;\r\n  padding-left: 5vw;\r\n  padding-top: 2vh;\r\n}\r\n  \r\n\r\n  .busqueda-text[_ngcontent-%COMP%]{\r\ncolor: white;\r\nfont-size: 90%;\r\ntext-align: left;\r\n}\r\n  \r\n\r\n  .c-busqueda[_ngcontent-%COMP%]{\r\nwidth: 50%;\r\nbackground-color: rgba(0, 0, 0, 0.3);\r\ncolor: white;\r\nborder-radius: 15px;\r\nfont-size: 16px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnRhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHLGFBQWE7SUFDWixzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLFlBQVk7O0lBRVosbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsY0FBYzs7SUFFZCxpQkFBaUI7OztFQUduQjs7O0VBR0E7OztJQUdFLGFBQWE7O0lBRWIseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCxZQUFZOztJQUVaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCOztBQUV0QixzQkFBc0I7O0VBRXBCOzs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0VBQ2Y7OztFQUdGO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7OztFQUNBO0FBQ0EsWUFBWTtBQUNaLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEI7OztFQUNBO0FBQ0EsVUFBVTtBQUNWLG9DQUFvQztBQUNwQyxZQUFZO0FBQ1osbUJBQW1CO0FBQ25CLGVBQWU7O0FBRWYiLCJmaWxlIjoidmVudGFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXNwZWpvLXZlbnRhcy1penEge1xyXG5cclxuICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgMjgsIDk5LCAwLjUpO1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIFxyXG4gIFxyXG4gIH1cclxuICBcclxuXHJcbiAgLmVzcGVqby12ZW50YXMtZGVyIHtcclxuXHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk0LCAxMTEsIDE2NiwgMC41KTtcclxuICAgIHdpZHRoOiA1OXZ3O1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG4gIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG5tYXJnaW4tYmxvY2stZW5kOiBhdXRvO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmhpZGVTY3JvbGwtdmVudGFzIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgc2Nyb2xsLXdpZHRoOiBub25lO1xyXG4gICAgLypGaXJlZm94Ki9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuXHJcbi5idXNxdWVkYXtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogNXZ3O1xyXG4gIHBhZGRpbmctdG9wOiAydmg7XHJcbn1cclxuLmJ1c3F1ZWRhLXRleHR7XHJcbmNvbG9yOiB3aGl0ZTtcclxuZm9udC1zaXplOiA5MCU7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmMtYnVzcXVlZGF7XHJcbndpZHRoOiA1MCU7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuY29sb3I6IHdoaXRlO1xyXG5ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5mb250LXNpemU6IDE2cHg7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 3289:
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


/***/ })

}]);
//# sourceMappingURL=src_app_protected_protected_module_ts.js.map