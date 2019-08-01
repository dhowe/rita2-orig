// Generated from grammars/RitaScript.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by RitaScriptParser.

function RitaScriptVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RitaScriptVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RitaScriptVisitor.prototype.constructor = RitaScriptVisitor;

// Visit a parse tree produced by RitaScriptParser#script.
RitaScriptVisitor.prototype.visitScript = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RitaScriptParser#transform.
RitaScriptVisitor.prototype.visitTransform = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RitaScriptParser#ident.
RitaScriptVisitor.prototype.visitIdent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RitaScriptParser#symbol.
RitaScriptVisitor.prototype.visitSymbol = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RitaScriptParser#choice.
RitaScriptVisitor.prototype.visitChoice = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RitaScriptParser#assign.
RitaScriptVisitor.prototype.visitAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RitaScriptParser#expr.
RitaScriptVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.RitaScriptVisitor = RitaScriptVisitor;