// Generated from grammars/RitaScript.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RitaScriptVisitor = require('./RitaScriptVisitor').RitaScriptVisitor;

var grammarFileName = "RitaScript.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0010\u0081\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0006\u0002\u0012\n\u0002\r\u0002\u000e\u0002",
    "\u0013\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0007\u0005\u001e\n\u0005\f\u0005\u000e",
    "\u0005!\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0007\u0006\'\n\u0006\f\u0006\u000e\u0006*\u000b\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0006\u00063\n\u0006\r\u0006\u000e\u00064\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0006\u0006<\n\u0006\r\u0006\u000e\u0006",
    "=\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006K\n\u0006\u0003\u0006\u0007\u0006N\n\u0006\f\u0006\u000e\u0006",
    "Q\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007_\n\u0007\u0003\u0007\u0007\u0007b\n\u0007",
    "\f\u0007\u000e\u0007e\u000b\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0005\bm\n\b\u0003\b\u0006\bp\n\b\r\b\u000e\bq\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bz\n\b\u0007\b|\n\b\f\b\u000e",
    "\b\u007f\u000b\b\u0003\b\u0002\u0002\t\u0002\u0004\u0006\b\n\f\u000e",
    "\u0002\u0002\u0002\u0091\u0002\u0011\u0003\u0002\u0002\u0002\u0004\u0017",
    "\u0003\u0002\u0002\u0002\u0006\u0019\u0003\u0002\u0002\u0002\b\u001b",
    "\u0003\u0002\u0002\u0002\nJ\u0003\u0002\u0002\u0002\f^\u0003\u0002\u0002",
    "\u0002\u000el\u0003\u0002\u0002\u0002\u0010\u0012\u0005\u000e\b\u0002",
    "\u0011\u0010\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002",
    "\u0013\u0011\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002",
    "\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u0016\u0007\u0002\u0002\u0003",
    "\u0016\u0003\u0003\u0002\u0002\u0002\u0017\u0018\u0007\u000e\u0002\u0002",
    "\u0018\u0005\u0003\u0002\u0002\u0002\u0019\u001a\u0007\u000b\u0002\u0002",
    "\u001a\u0007\u0003\u0002\u0002\u0002\u001b\u001f\u0005\u0006\u0004\u0002",
    "\u001c\u001e\u0005\u0004\u0003\u0002\u001d\u001c\u0003\u0002\u0002\u0002",
    "\u001e!\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002",
    "\u001f \u0003\u0002\u0002\u0002 \t\u0003\u0002\u0002\u0002!\u001f\u0003",
    "\u0002\u0002\u0002\"(\u0007\u0003\u0002\u0002#$\u0005\u000e\b\u0002",
    "$%\u0007\f\u0002\u0002%\'\u0003\u0002\u0002\u0002&#\u0003\u0002\u0002",
    "\u0002\'*\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002()\u0003",
    "\u0002\u0002\u0002)+\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002",
    "+,\u0005\u000e\b\u0002,-\u0007\u0004\u0002\u0002-K\u0003\u0002\u0002",
    "\u0002.2\u0007\u0003\u0002\u0002/0\u0005\u000e\b\u000201\u0007\f\u0002",
    "\u000213\u0003\u0002\u0002\u00022/\u0003\u0002\u0002\u000234\u0003\u0002",
    "\u0002\u000242\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u000256\u0003",
    "\u0002\u0002\u000267\u0007\u0004\u0002\u00027K\u0003\u0002\u0002\u0002",
    "8;\u0007\u0003\u0002\u00029:\u0007\f\u0002\u0002:<\u0005\u000e\b\u0002",
    ";9\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002",
    "\u0002=>\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?@\u0007\u0004",
    "\u0002\u0002@K\u0003\u0002\u0002\u0002AB\u0007\u0003\u0002\u0002BC\u0007",
    "\f\u0002\u0002CK\u0007\u0004\u0002\u0002DE\u0007\u0003\u0002\u0002E",
    "F\u0007\f\u0002\u0002FG\u0005\u000e\b\u0002GH\u0007\f\u0002\u0002HI",
    "\u0007\u0004\u0002\u0002IK\u0003\u0002\u0002\u0002J\"\u0003\u0002\u0002",
    "\u0002J.\u0003\u0002\u0002\u0002J8\u0003\u0002\u0002\u0002JA\u0003\u0002",
    "\u0002\u0002JD\u0003\u0002\u0002\u0002KO\u0003\u0002\u0002\u0002LN\u0005",
    "\u0004\u0003\u0002ML\u0003\u0002\u0002\u0002NQ\u0003\u0002\u0002\u0002",
    "OM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002P\u000b\u0003\u0002",
    "\u0002\u0002QO\u0003\u0002\u0002\u0002RS\u0007\u0005\u0002\u0002ST\u0005",
    "\b\u0005\u0002TU\u0007\r\u0002\u0002UV\u0005\u000e\b\u0002VW\u0007\u0006",
    "\u0002\u0002W_\u0003\u0002\u0002\u0002XY\u0007\u0007\u0002\u0002YZ\u0005",
    "\b\u0005\u0002Z[\u0007\r\u0002\u0002[\\\u0005\u000e\b\u0002\\]\u0007",
    "\b\u0002\u0002]_\u0003\u0002\u0002\u0002^R\u0003\u0002\u0002\u0002^",
    "X\u0003\u0002\u0002\u0002_c\u0003\u0002\u0002\u0002`b\u0005\u0004\u0003",
    "\u0002a`\u0003\u0002\u0002\u0002be\u0003\u0002\u0002\u0002ca\u0003\u0002",
    "\u0002\u0002cd\u0003\u0002\u0002\u0002d\r\u0003\u0002\u0002\u0002ec",
    "\u0003\u0002\u0002\u0002fm\u0005\b\u0005\u0002gm\u0005\n\u0006\u0002",
    "hm\u0005\f\u0007\u0002im\u0007\u0010\u0002\u0002jm\u0007\t\u0002\u0002",
    "km\u0007\u000f\u0002\u0002lf\u0003\u0002\u0002\u0002lg\u0003\u0002\u0002",
    "\u0002lh\u0003\u0002\u0002\u0002li\u0003\u0002\u0002\u0002lj\u0003\u0002",
    "\u0002\u0002lk\u0003\u0002\u0002\u0002m}\u0003\u0002\u0002\u0002np\u0007",
    "\n\u0002\u0002on\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002q",
    "o\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002ry\u0003\u0002\u0002",
    "\u0002sz\u0005\b\u0005\u0002tz\u0005\n\u0006\u0002uz\u0005\f\u0007\u0002",
    "vz\u0007\u0010\u0002\u0002wz\u0007\t\u0002\u0002xz\u0007\u000f\u0002",
    "\u0002ys\u0003\u0002\u0002\u0002yt\u0003\u0002\u0002\u0002yu\u0003\u0002",
    "\u0002\u0002yv\u0003\u0002\u0002\u0002yw\u0003\u0002\u0002\u0002yx\u0003",
    "\u0002\u0002\u0002z|\u0003\u0002\u0002\u0002{o\u0003\u0002\u0002\u0002",
    "|\u007f\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002}~\u0003\u0002",
    "\u0002\u0002~\u000f\u0003\u0002\u0002\u0002\u007f}\u0003\u0002\u0002",
    "\u0002\u000f\u0013\u001f(4=JO^clqy}"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'['", "']'", "'{'", "'}'", "'.'" ];

var symbolicNames = [ null, "LP", "RP", "LB", "RB", "LCB", "RCB", "FS", 
                      "WS", "SYM", "OR", "EQ", "TF", "ENT", "CHR" ];

var ruleNames =  [ "script", "transform", "ident", "symbol", "choice", "assign", 
                   "expr" ];

function RitaScriptParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RitaScriptParser.prototype = Object.create(antlr4.Parser.prototype);
RitaScriptParser.prototype.constructor = RitaScriptParser;

Object.defineProperty(RitaScriptParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RitaScriptParser.EOF = antlr4.Token.EOF;
RitaScriptParser.LP = 1;
RitaScriptParser.RP = 2;
RitaScriptParser.LB = 3;
RitaScriptParser.RB = 4;
RitaScriptParser.LCB = 5;
RitaScriptParser.RCB = 6;
RitaScriptParser.FS = 7;
RitaScriptParser.WS = 8;
RitaScriptParser.SYM = 9;
RitaScriptParser.OR = 10;
RitaScriptParser.EQ = 11;
RitaScriptParser.TF = 12;
RitaScriptParser.ENT = 13;
RitaScriptParser.CHR = 14;

RitaScriptParser.RULE_script = 0;
RitaScriptParser.RULE_transform = 1;
RitaScriptParser.RULE_ident = 2;
RitaScriptParser.RULE_symbol = 3;
RitaScriptParser.RULE_choice = 4;
RitaScriptParser.RULE_assign = 5;
RitaScriptParser.RULE_expr = 6;

function ScriptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RitaScriptParser.RULE_script;
    return this;
}

ScriptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScriptContext.prototype.constructor = ScriptContext;

ScriptContext.prototype.EOF = function() {
    return this.getToken(RitaScriptParser.EOF, 0);
};

ScriptContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ScriptContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RitaScriptVisitor ) {
        return visitor.visitScript(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RitaScriptParser.ScriptContext = ScriptContext;

RitaScriptParser.prototype.script = function() {

    var localctx = new ScriptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RitaScriptParser.RULE_script);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 14;
            this.expr();
            this.state = 17; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RitaScriptParser.LP) | (1 << RitaScriptParser.LB) | (1 << RitaScriptParser.LCB) | (1 << RitaScriptParser.FS) | (1 << RitaScriptParser.SYM) | (1 << RitaScriptParser.ENT) | (1 << RitaScriptParser.CHR))) !== 0));
        this.state = 19;
        this.match(RitaScriptParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TransformContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RitaScriptParser.RULE_transform;
    return this;
}

TransformContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TransformContext.prototype.constructor = TransformContext;

TransformContext.prototype.TF = function() {
    return this.getToken(RitaScriptParser.TF, 0);
};

TransformContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RitaScriptVisitor ) {
        return visitor.visitTransform(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RitaScriptParser.TransformContext = TransformContext;

RitaScriptParser.prototype.transform = function() {

    var localctx = new TransformContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RitaScriptParser.RULE_transform);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        this.match(RitaScriptParser.TF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RitaScriptParser.RULE_ident;
    return this;
}

IdentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentContext.prototype.constructor = IdentContext;

IdentContext.prototype.SYM = function() {
    return this.getToken(RitaScriptParser.SYM, 0);
};

IdentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RitaScriptVisitor ) {
        return visitor.visitIdent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RitaScriptParser.IdentContext = IdentContext;

RitaScriptParser.prototype.ident = function() {

    var localctx = new IdentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RitaScriptParser.RULE_ident);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this.match(RitaScriptParser.SYM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SymbolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RitaScriptParser.RULE_symbol;
    return this;
}

SymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolContext.prototype.constructor = SymbolContext;

SymbolContext.prototype.ident = function() {
    return this.getTypedRuleContext(IdentContext,0);
};

SymbolContext.prototype.transform = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TransformContext);
    } else {
        return this.getTypedRuleContext(TransformContext,i);
    }
};

SymbolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RitaScriptVisitor ) {
        return visitor.visitSymbol(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RitaScriptParser.SymbolContext = SymbolContext;

RitaScriptParser.prototype.symbol = function() {

    var localctx = new SymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RitaScriptParser.RULE_symbol);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this.ident();
        this.state = 29;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RitaScriptParser.TF) {
            this.state = 26;
            this.transform();
            this.state = 31;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ChoiceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RitaScriptParser.RULE_choice;
    return this;
}

ChoiceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChoiceContext.prototype.constructor = ChoiceContext;

ChoiceContext.prototype.transform = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TransformContext);
    } else {
        return this.getTypedRuleContext(TransformContext,i);
    }
};

ChoiceContext.prototype.LP = function() {
    return this.getToken(RitaScriptParser.LP, 0);
};

ChoiceContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ChoiceContext.prototype.RP = function() {
    return this.getToken(RitaScriptParser.RP, 0);
};

ChoiceContext.prototype.OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RitaScriptParser.OR);
    } else {
        return this.getToken(RitaScriptParser.OR, i);
    }
};


ChoiceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RitaScriptVisitor ) {
        return visitor.visitChoice(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RitaScriptParser.ChoiceContext = ChoiceContext;

RitaScriptParser.prototype.choice = function() {

    var localctx = new ChoiceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RitaScriptParser.RULE_choice);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.state = 32;
            this.match(RitaScriptParser.LP);
            this.state = 38;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 33;
                    this.expr();
                    this.state = 34;
                    this.match(RitaScriptParser.OR); 
                }
                this.state = 40;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
            }

            this.state = 41;
            this.expr();
            this.state = 42;
            this.match(RitaScriptParser.RP);
            break;

        case 2:
            this.state = 44;
            this.match(RitaScriptParser.LP);
            this.state = 48; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 45;
                this.expr();
                this.state = 46;
                this.match(RitaScriptParser.OR);
                this.state = 50; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RitaScriptParser.LP) | (1 << RitaScriptParser.LB) | (1 << RitaScriptParser.LCB) | (1 << RitaScriptParser.FS) | (1 << RitaScriptParser.SYM) | (1 << RitaScriptParser.ENT) | (1 << RitaScriptParser.CHR))) !== 0));
            this.state = 52;
            this.match(RitaScriptParser.RP);
            break;

        case 3:
            this.state = 54;
            this.match(RitaScriptParser.LP);
            this.state = 57; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 55;
                this.match(RitaScriptParser.OR);
                this.state = 56;
                this.expr();
                this.state = 59; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===RitaScriptParser.OR);
            this.state = 61;
            this.match(RitaScriptParser.RP);
            break;

        case 4:
            this.state = 63;
            this.match(RitaScriptParser.LP);
            this.state = 64;
            this.match(RitaScriptParser.OR);
            this.state = 65;
            this.match(RitaScriptParser.RP);
            break;

        case 5:
            this.state = 66;
            this.match(RitaScriptParser.LP);
            this.state = 67;
            this.match(RitaScriptParser.OR);
            this.state = 68;
            this.expr();
            this.state = 69;
            this.match(RitaScriptParser.OR);
            this.state = 70;
            this.match(RitaScriptParser.RP);
            break;

        }
        this.state = 77;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RitaScriptParser.TF) {
            this.state = 74;
            this.transform();
            this.state = 79;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RitaScriptParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;

AssignContext.prototype.transform = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TransformContext);
    } else {
        return this.getTypedRuleContext(TransformContext,i);
    }
};

AssignContext.prototype.LB = function() {
    return this.getToken(RitaScriptParser.LB, 0);
};

AssignContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

AssignContext.prototype.EQ = function() {
    return this.getToken(RitaScriptParser.EQ, 0);
};

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.RB = function() {
    return this.getToken(RitaScriptParser.RB, 0);
};

AssignContext.prototype.LCB = function() {
    return this.getToken(RitaScriptParser.LCB, 0);
};

AssignContext.prototype.RCB = function() {
    return this.getToken(RitaScriptParser.RCB, 0);
};

AssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RitaScriptVisitor ) {
        return visitor.visitAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RitaScriptParser.AssignContext = AssignContext;

RitaScriptParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RitaScriptParser.RULE_assign);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RitaScriptParser.LB:
            this.state = 80;
            this.match(RitaScriptParser.LB);
            this.state = 81;
            this.symbol();
            this.state = 82;
            this.match(RitaScriptParser.EQ);
            this.state = 83;
            this.expr();
            this.state = 84;
            this.match(RitaScriptParser.RB);
            break;
        case RitaScriptParser.LCB:
            this.state = 86;
            this.match(RitaScriptParser.LCB);
            this.state = 87;
            this.symbol();
            this.state = 88;
            this.match(RitaScriptParser.EQ);
            this.state = 89;
            this.expr();
            this.state = 90;
            this.match(RitaScriptParser.RCB);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RitaScriptParser.TF) {
            this.state = 94;
            this.transform();
            this.state = 99;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RitaScriptParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.symbol = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SymbolContext);
    } else {
        return this.getTypedRuleContext(SymbolContext,i);
    }
};

ExprContext.prototype.choice = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ChoiceContext);
    } else {
        return this.getTypedRuleContext(ChoiceContext,i);
    }
};

ExprContext.prototype.assign = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignContext);
    } else {
        return this.getTypedRuleContext(AssignContext,i);
    }
};

ExprContext.prototype.CHR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RitaScriptParser.CHR);
    } else {
        return this.getToken(RitaScriptParser.CHR, i);
    }
};


ExprContext.prototype.FS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RitaScriptParser.FS);
    } else {
        return this.getToken(RitaScriptParser.FS, i);
    }
};


ExprContext.prototype.ENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RitaScriptParser.ENT);
    } else {
        return this.getToken(RitaScriptParser.ENT, i);
    }
};


ExprContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RitaScriptParser.WS);
    } else {
        return this.getToken(RitaScriptParser.WS, i);
    }
};


ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RitaScriptVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RitaScriptParser.ExprContext = ExprContext;

RitaScriptParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RitaScriptParser.RULE_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RitaScriptParser.SYM:
            this.state = 100;
            this.symbol();
            break;
        case RitaScriptParser.LP:
            this.state = 101;
            this.choice();
            break;
        case RitaScriptParser.LB:
        case RitaScriptParser.LCB:
            this.state = 102;
            this.assign();
            break;
        case RitaScriptParser.CHR:
            this.state = 103;
            this.match(RitaScriptParser.CHR);
            break;
        case RitaScriptParser.FS:
            this.state = 104;
            this.match(RitaScriptParser.FS);
            break;
        case RitaScriptParser.ENT:
            this.state = 105;
            this.match(RitaScriptParser.ENT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RitaScriptParser.WS) {
            this.state = 109; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 108;
                this.match(RitaScriptParser.WS);
                this.state = 111; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===RitaScriptParser.WS);
            this.state = 119;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RitaScriptParser.SYM:
                this.state = 113;
                this.symbol();
                break;
            case RitaScriptParser.LP:
                this.state = 114;
                this.choice();
                break;
            case RitaScriptParser.LB:
            case RitaScriptParser.LCB:
                this.state = 115;
                this.assign();
                break;
            case RitaScriptParser.CHR:
                this.state = 116;
                this.match(RitaScriptParser.CHR);
                break;
            case RitaScriptParser.FS:
                this.state = 117;
                this.match(RitaScriptParser.FS);
                break;
            case RitaScriptParser.ENT:
                this.state = 118;
                this.match(RitaScriptParser.ENT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 125;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.RitaScriptParser = RitaScriptParser;
