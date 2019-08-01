// Generated from grammars/RitaScript.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0010o\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0006\t1\n\t\r\t\u000e\t2\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0007\u000b9\n\u000b\f\u000b\u000e\u000b",
    "<\u000b\u000b\u0003\u000b\u0003\u000b\u0007\u000b@\n\u000b\f\u000b\u000e",
    "\u000bC\u000b\u000b\u0003\f\u0007\fF\n\f\f\f\u000e\fI\u000b\f\u0003",
    "\f\u0003\f\u0007\fM\n\f\f\f\u000e\fP\u000b\f\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0005\rV\n\r\u0006\rX\n\r\r\r\u000e\rY\u0003\u000e\u0003\u000e",
    "\u0006\u000e^\n\u000e\r\u000e\u000e\u000e_\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0006\u000fe\n\u000f\r\u000f\u000e\u000ff\u0003\u0010\u0003\u0010",
    "\u0007\u0010k\n\u0010\f\u0010\u000e\u0010n\u000b\u0010\u0002\u0002\u0011",
    "\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t",
    "\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010",
    "\u001f\u0002\u0003\u0002\u0007\u0004\u0002\u000b\u000b\"\"\u0006\u0002",
    "%%2;C\\c|\u000b\u0002\u000b\u000b\"\"&&*+00??]]__}\u007f\u0005\u0002",
    "C\\aac|\u0007\u0002//2;C\\aac|\u0002w\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
    "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0003!\u0003\u0002\u0002",
    "\u0002\u0005#\u0003\u0002\u0002\u0002\u0007%\u0003\u0002\u0002\u0002",
    "\t\'\u0003\u0002\u0002\u0002\u000b)\u0003\u0002\u0002\u0002\r+\u0003",
    "\u0002\u0002\u0002\u000f-\u0003\u0002\u0002\u0002\u00110\u0003\u0002",
    "\u0002\u0002\u00134\u0003\u0002\u0002\u0002\u0015:\u0003\u0002\u0002",
    "\u0002\u0017G\u0003\u0002\u0002\u0002\u0019W\u0003\u0002\u0002\u0002",
    "\u001b[\u0003\u0002\u0002\u0002\u001dd\u0003\u0002\u0002\u0002\u001f",
    "h\u0003\u0002\u0002\u0002!\"\u0007*\u0002\u0002\"\u0004\u0003\u0002",
    "\u0002\u0002#$\u0007+\u0002\u0002$\u0006\u0003\u0002\u0002\u0002%&\u0007",
    "]\u0002\u0002&\b\u0003\u0002\u0002\u0002\'(\u0007_\u0002\u0002(\n\u0003",
    "\u0002\u0002\u0002)*\u0007}\u0002\u0002*\f\u0003\u0002\u0002\u0002+",
    ",\u0007\u007f\u0002\u0002,\u000e\u0003\u0002\u0002\u0002-.\u00070\u0002",
    "\u0002.\u0010\u0003\u0002\u0002\u0002/1\t\u0002\u0002\u00020/\u0003",
    "\u0002\u0002\u000212\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u0002",
    "23\u0003\u0002\u0002\u00023\u0012\u0003\u0002\u0002\u000245\u0007&\u0002",
    "\u000256\u0005\u001f\u0010\u00026\u0014\u0003\u0002\u0002\u000279\u0005",
    "\u0011\t\u000287\u0003\u0002\u0002\u00029<\u0003\u0002\u0002\u0002:",
    "8\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;=\u0003\u0002\u0002",
    "\u0002<:\u0003\u0002\u0002\u0002=A\u0007~\u0002\u0002>@\u0005\u0011",
    "\t\u0002?>\u0003\u0002\u0002\u0002@C\u0003\u0002\u0002\u0002A?\u0003",
    "\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002B\u0016\u0003\u0002\u0002",
    "\u0002CA\u0003\u0002\u0002\u0002DF\u0005\u0011\t\u0002ED\u0003\u0002",
    "\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002GH\u0003",
    "\u0002\u0002\u0002HJ\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002",
    "JN\u0007?\u0002\u0002KM\u0005\u0011\t\u0002LK\u0003\u0002\u0002\u0002",
    "MP\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002",
    "\u0002O\u0018\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QR\u0007",
    "0\u0002\u0002RU\u0005\u001f\u0010\u0002ST\u0007*\u0002\u0002TV\u0007",
    "+\u0002\u0002US\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VX",
    "\u0003\u0002\u0002\u0002WQ\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002",
    "\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z\u001a\u0003",
    "\u0002\u0002\u0002[]\u0007(\u0002\u0002\\^\t\u0003\u0002\u0002]\\\u0003",
    "\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002",
    "_`\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ab\u0007=\u0002",
    "\u0002b\u001c\u0003\u0002\u0002\u0002ce\n\u0004\u0002\u0002dc\u0003",
    "\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002",
    "fg\u0003\u0002\u0002\u0002g\u001e\u0003\u0002\u0002\u0002hl\t\u0005",
    "\u0002\u0002ik\t\u0006\u0002\u0002ji\u0003\u0002\u0002\u0002kn\u0003",
    "\u0002\u0002\u0002lj\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002",
    "m \u0003\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002\r\u00022:AGNUY",
    "_fl\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function RitaScriptLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

RitaScriptLexer.prototype = Object.create(antlr4.Lexer.prototype);
RitaScriptLexer.prototype.constructor = RitaScriptLexer;

Object.defineProperty(RitaScriptLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

RitaScriptLexer.EOF = antlr4.Token.EOF;
RitaScriptLexer.LP = 1;
RitaScriptLexer.RP = 2;
RitaScriptLexer.LB = 3;
RitaScriptLexer.RB = 4;
RitaScriptLexer.LCB = 5;
RitaScriptLexer.RCB = 6;
RitaScriptLexer.FS = 7;
RitaScriptLexer.WS = 8;
RitaScriptLexer.SYM = 9;
RitaScriptLexer.OR = 10;
RitaScriptLexer.EQ = 11;
RitaScriptLexer.TF = 12;
RitaScriptLexer.ENT = 13;
RitaScriptLexer.CHR = 14;

RitaScriptLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

RitaScriptLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

RitaScriptLexer.prototype.literalNames = [ null, "'('", "')'", "'['", "']'", 
                                           "'{'", "'}'", "'.'" ];

RitaScriptLexer.prototype.symbolicNames = [ null, "LP", "RP", "LB", "RB", 
                                            "LCB", "RCB", "FS", "WS", "SYM", 
                                            "OR", "EQ", "TF", "ENT", "CHR" ];

RitaScriptLexer.prototype.ruleNames = [ "LP", "RP", "LB", "RB", "LCB", "RCB", 
                                        "FS", "WS", "SYM", "OR", "EQ", "TF", 
                                        "ENT", "CHR", "IDENT" ];

RitaScriptLexer.prototype.grammarFileName = "RitaScript.g4";



exports.RitaScriptLexer = RitaScriptLexer;

