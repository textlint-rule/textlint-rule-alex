// LICENSE : MIT
"use strict";
import TextLintTester from "textlint-tester";
// rules
import rule from "../src/textlint-rule-alex";
var tester = new TextLintTester();
// ruleName, rule, expected[]
tester.run("alex", rule, {
    valid: [
        "This is a pen",
        "男女",
        {
            text: "The boogeyman",
            options: {
                allow: ["boogeyman-boogeywoman"]
            }
        }
    ],
    invalid: [
        {
            text: "The boogeyman",
            errors: [
                {
                    message: "[boogeyman-boogeywoman] `boogeyman` may be insensitive, use `boogeymonster` instead",
                    line: 1,
                    column: 5
                }
            ]
        }
    ]
});