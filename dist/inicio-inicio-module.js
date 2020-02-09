(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/forget/forget.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/forget/forget.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n    <main class=\"main d-flex align-items-center\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 mx-auto\">\n            <div class=\"card-group\">\n              <div class=\"card p-4\">\n                <div class=\"card-body\">\n                  <form>\n                    <h1>Recuperar senha</h1>\n                    <p class=\"text-muted\">Entre com seu email</p>\n                    <div class=\"input-group mb-3\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                      </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-6\">\n                        <button type=\"button\" class=\"btn btn-primary px-4\">Recuperar</button>\n                      </div>\n                      <div class=\"col-6 text-right\">\n                        <button type=\"button\" class=\"btn btn-link px-0\">Login?</button>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n                <div class=\"card-body text-center\">\n                  <div>\n                    <h2>Sign up</h2>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                    <button type=\"button\" class=\"btn btn-primary active mt-3\">Register Now!</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </main>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/login/login.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/login/login.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" >\n    <img src=\"assets/img/ativodigitais.png\" id=\"imagem\" style=\"width: 150px;  position: relative;  \" class=\"navbar-brand\" alt=\"admin@bootstrapmaster.com\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n     \n      <li class=\"nav-item\">\n        \n      </li>\n      \n     \n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      \n      \n      \n        <a href=\"/#/\" id=\"botao2\" style=\"border-radius: 20px; position: relative;  width: 150px;\" class=\"btn btn-outline-secondary\" aria-pressed=\"true\">Página inicial</a>\n      \n    </form>\n  </div>\n</nav>\n  </div><br>\n<div class=\"app-body\">\n    <main class=\"main d-flex align-items-center\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 mx-auto\">\n            \n            <div class=\"card-group\">\n              <div class=\"card p-4\">\n                <div class=\"card-body\">\n                  <form [formGroup]=\"registerForm\" (ngSubmit)=\"login()\">\n                    <h1>Login</h1>\n                    <p class=\"text-muted\">Entre com sua conta!</p>\n                    <div class=\"input-group mb-3\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                      </div>\n                      <input type=\"text\" formControlName=\"email\" class=\"form-control\" [(ngModel)]=\"data.username\" name=\"username\" placeholder=\"Username\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"  >\n                      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.email.errors.required\">Username é obrigatório</div>\n                    </div>\n                    </div>\n                    <div class=\"input-group mb-4\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                      </div>\n                      <input type=\"password\" formControlName=\"password\" class=\"form-control\" [(ngModel)]=\"data.password\" name=\"password\" placeholder=\"Password\" autocomplete=\"current-password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n                      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password é obrigatório</div>\n                        <div *ngIf=\"f.password.errors.minlength\">Password tem que ter pelo menos 8 caracteres</div>\n                    </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-6\">\n                        <button  class=\"btn btn-primary px-4\">Login</button>\n                      </div>\n                      <div class=\"col-6 text-right\">\n                        \n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n                <div class=\"card-body text-center\">\n                  <div>\n                    <h2>Não tem conta?</h2>\n                    <p>Crie uma conta e desfrute em nosso sistema totalmente profissional!.</p>\n                    \n                    <button type=\"button\" (click)=\"irregistre()\"  class=\"btn btn-primary active mt-3\">Registre agora!</button>\n                  </div>\n                </div>\n              </div>\n            </div><br>\n            <div *ngIf=\"resposta != null\" >\n              <div class=\"alert alert-warning\" role=\"alert\">\n                Username ou password errados!\n              </div>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n    </main>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/register/register.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/register/register.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" >\n    <img src=\"assets/img/ativodigitais.png\" id=\"imagem\" style=\"width: 150px;  position: relative;  \" class=\"navbar-brand\" alt=\"admin@bootstrapmaster.com\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n     \n      <li class=\"nav-item\">\n        \n      </li>\n      \n     \n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      \n      \n      \n        <a href=\"/#/\" id=\"botao2\" style=\"border-radius: 20px; position: relative;  width: 150px;\" class=\"btn btn-outline-secondary\" aria-pressed=\"true\">Página inicial</a>\n      \n    </form>\n  </div>\n</nav>\n  </div><br>\n<div class=\"app-body\">\n    <main class=\"main d-flex align-items-center\" >\n      <div class=\"container\">\n        <div class=\"row\" >\n          <div class=\"col-md-6 mx-auto\">\n            <div class=\"card mx-4\">\n              <div class=\"card-body p-4\">\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"create()\">\n                  <h1>Registre</h1>\n                  <p class=\"text-muted\">Crie sua conta aqui</p>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                    </div>\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\" [(ngModel)]=\"data.username\" name=\"username\" placeholder=\"Username\" autocomplete=\"username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.username.errors.required\">Username é obrigatório</div>\n                  </div>\n                  </div>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">@</span>\n                    </div>\n                    <input type=\"text\" formControlName=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\"  [(ngModel)]=\"data.email\" name=\"email\" autocomplete=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.email.errors.required\">Email é obrigatorio</div>\n                      <div *ngIf=\"f.email.errors.email\">Não é um Email válido</div>\n                  </div>\n                  </div>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                    </div>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"data.password\" name=\"password\" autocomplete=\"new-password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.password.errors.required\">Password é obrigatorio</div>\n                      <div *ngIf=\"f.password.errors.minlength\">Password precisa ter pelo menos 8 caracteres</div>\n                  </div>\n                  </div>\n                  <div class=\"input-group mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                    </div>\n                    <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" placeholder=\"Repeat password\" autocomplete=\"new-password\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\">\n                    <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.confirmPassword.errors.required\">Confirmação do password é obrigatório</div>\n                      <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Password diferentes</div>\n                  </div>\n                  </div>\n                  <button type=\"submit\"  class=\"btn btn-block btn-success\">Criar conta</button>\n                </form>\n                <div *ngIf=\"resposta != null\" >\n                  <div class=\"alert alert-warning\" role=\"alert\">\n                    <p> {{resposta}} </p>\n                  </div>\n                </div>\n              </div>\n             \n            </div>\n          </div>\n        </div>\n      </div>\n    </main>\n  </div>");

/***/ }),

/***/ "./src/app/helpers/must-match.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/helpers/must-match.validator.ts ***!
  \*************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/inicio/forget/forget.component.css":
/*!****************************************************!*\
  !*** ./src/app/inicio/forget/forget.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9mb3JnZXQvZm9yZ2V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/inicio/forget/forget.component.ts":
/*!***************************************************!*\
  !*** ./src/app/inicio/forget/forget.component.ts ***!
  \***************************************************/
/*! exports provided: ForgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetComponent", function() { return ForgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgetComponent = /** @class */ (function () {
    function ForgetComponent() {
    }
    ForgetComponent.prototype.ngOnInit = function () {
    };
    ForgetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forget.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/forget/forget.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forget.component.css */ "./src/app/inicio/forget/forget.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ForgetComponent);
    return ForgetComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/inicio/inicio-routing.module.ts ***!
  \*************************************************/
/*! exports provided: InicioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioRoutingModule", function() { return InicioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/inicio/login/login.component.ts");
/* harmony import */ var _forget_forget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget/forget.component */ "./src/app/inicio/forget/forget.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/inicio/register/register.component.ts");






var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'forget', component: _forget_forget_component__WEBPACK_IMPORTED_MODULE_2__["ForgetComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] }
];
var InicioRoutingModule = /** @class */ (function () {
    function InicioRoutingModule() {
    }
    InicioRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], InicioRoutingModule);
    return InicioRoutingModule;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.module.ts":
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/*! exports provided: InicioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioModule", function() { return InicioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/inicio/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/inicio/register/register.component.ts");
/* harmony import */ var _forget_forget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget/forget.component */ "./src/app/inicio/forget/forget.component.ts");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/inicio/inicio-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var InicioModule = /** @class */ (function () {
    function InicioModule() {
    }
    InicioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _forget_forget_component__WEBPACK_IMPORTED_MODULE_5__["ForgetComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _inicio_routing_module__WEBPACK_IMPORTED_MODULE_6__["InicioRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ]
        })
    ], InicioModule);
    return InicioModule;
}());



/***/ }),

/***/ "./src/app/inicio/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/inicio/login/login.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/inicio/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/inicio/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_inicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/inicio.service */ "./src/app/services/inicio.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_inicio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/inicio */ "./src/app/models/inicio.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, InicioService, router) {
        this.formBuilder = formBuilder;
        this.InicioService = InicioService;
        this.router = router;
        this.submitted = false;
        this.data = new _models_inicio__WEBPACK_IMPORTED_MODULE_4__["Inicio"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8)]],
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.InicioService.login(this.data).subscribe(function (response) {
            //localStorage.setItem('access_token', 'nenhum_no_momento'),
            console.log(response);
            if (response) {
                localStorage.setItem('username', response.username),
                    localStorage.setItem('email', response.email),
                    localStorage.setItem('uid', response.uid),
                    localStorage.setItem('picture', response.picture),
                    _this.InicioService.starttoken().subscribe(function (resposta) {
                        localStorage.setItem('access_token', resposta.token),
                            document.location.reload(true);
                        _this.router.navigate(['']);
                    });
                _this.router.navigate(['']);
            }
        }, function (err) {
            _this.resposta = 'tem tem';
            console.log('erro');
        });
    };
    LoginComponent.prototype.irregistre = function () {
        this.router.navigate(['login/register']);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_inicio_service__WEBPACK_IMPORTED_MODULE_1__["InicioService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/login/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/inicio/login/login.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_inicio_service__WEBPACK_IMPORTED_MODULE_1__["InicioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/inicio/register/register.component.css":
/*!********************************************************!*\
  !*** ./src/app/inicio/register/register.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/inicio/register/register.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/inicio/register/register.component.ts ***!
  \*******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_inicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/inicio.service */ "./src/app/services/inicio.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_inicio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/inicio */ "./src/app/models/inicio.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/must-match.validator */ "./src/app/helpers/must-match.validator.ts");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(InicioService, router, formBuilder) {
        this.InicioService = InicioService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.data = new _models_inicio__WEBPACK_IMPORTED_MODULE_4__["Inicio"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_6__["MustMatch"])('password', 'confirmPassword')
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.create = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            console.log('pare!');
        }
        else {
            this.InicioService.register(this.data).subscribe(function (response) {
                _this.resposta = 'Cadastro feito com sucesso! Eespere por favor...';
                setTimeout(function () {
                    window.location.href = "https://sandbox.wavesreport.com/#/login";
                }, 2000);
            }, function (err) {
                _this.resposta = 'Erro! A base de dados já possui esse cadastro!';
                console.log('erro');
            });
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_inicio_service__WEBPACK_IMPORTED_MODULE_1__["InicioService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/register/register.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.css */ "./src/app/inicio/register/register.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_inicio_service__WEBPACK_IMPORTED_MODULE_1__["InicioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=inicio-inicio-module.js.map