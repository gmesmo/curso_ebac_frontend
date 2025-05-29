"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _nota = /*#__PURE__*/new WeakMap();
var Aluno = /*#__PURE__*/function () {
  function Aluno(nomeDoAluno, notaDoAluno) {
    _classCallCheck(this, Aluno);
    _classPrivateFieldInitSpec(this, _nota, 0);
    this.nome = nomeDoAluno;
    _classPrivateFieldSet(_nota, this, notaDoAluno);
  }
  return _createClass(Aluno, [{
    key: "exibeNota",
    value: function exibeNota() {
      console.log(_classPrivateFieldGet(_nota, this));
    }
  }, {
    key: "aprovado",
    value: function aprovado() {
      if (_classPrivateFieldGet(_nota, this) >= 6) {
        return true;
      } else {
        return false;
      }
    }
  }]);
}();
var alunos = [new Aluno("Guilherme", 10), new Aluno("Mariane", 3.5), new Aluno("Roger", 7), new Aluno("Wagner", 6)];
console.log(alunos);
alunos.forEach(function (aluno) {
  if (aluno.aprovado()) {
    console.log("".concat(aluno.nome, " foi aprovado!"));
  }
});