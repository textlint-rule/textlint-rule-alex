// LICENSE : MIT
"use strict";
var TextLintTester = require("textlint-tester");
// rules
var rule = require("../src/textlint-rule-alex");
var tester = new TextLintTester();
// ruleName, rule, expected[]
tester.run("alex", rule, {
    valid: [
        "This is a pen",
        "男女"
    ],
    invalid: [
        {
            text: "The boogeyman",
            errors: [
                {
                    message: "[boogeyman-boogeywoman] `boogeyman` may be insensitive, use `boogey` instead",
                    line: 1,
                    column: 5
                }
            ]
        }
    ]
});