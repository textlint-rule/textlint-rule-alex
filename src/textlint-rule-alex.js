// LICENSE : MIT
"use strict";
import {RuleHelper} from "textlint-rule-helper";
import alex from "alex";
const defaultOptions = {
    allow: []
};
module.exports = function textlintRuleAlex(context, options = {}) {
    const {Syntax, RuleError, report, getSource} = context;
    const helper = new RuleHelper(context);
    const allowWords = options.allow || defaultOptions.allow;
    /*
    { [1:5-1:14: `boogeyman` may be insensitive, use `boogey` instead]
    message: '`boogeyman` may be insensitive, use `boogey` instead',
    name: '1:5-1:14',
    file: '',
    reason: '`boogeyman` may be insensitive, use `boogey` instead',
    line: 1,
    column: 5,
    location: Position { start: [Object], end: [Object] },
    fatal: false,
    ruleId: 'boogeyman-boogeywoman',
    source: 'retext-equality' }
     */
    const reportError = (node, result) => {
        const ruleError = new RuleError(`[${result.ruleId}] ${result.message}`, {
            line: result.line - 1,
            column: result.column - 1
        });
        report(node, ruleError);
    };
    return {
        [Syntax.Str](node){
            if (helper.isChildNode(node, [Syntax.Link, Syntax.Image, Syntax.BlockQuote, Syntax.Emphasis])) {
                return;
            }
            const text = getSource(node);
            const messages = alex(text, allowWords).messages;
            messages.forEach((result) => {
                reportError(node, result);
            });
        }
    }
}