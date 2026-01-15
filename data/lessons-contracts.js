// data/lesson-contracts.js

export const LESSON_CONTRACT_SCHEMA = {
  subjectId: "string",
  pillarId: "string",
  lessonId: "string",
  title: "string",

  learningGoal: {
    coreConcept: "string",
    transferableSkill: "string",
    whyItMatters: "string",
    misconceptionsToAvoid: ["string"]
  },

  depthSpec: {
    abstractionLevel: [
      "elementary",
      "middle",
      "high",
      "intro-college"
    ],

    explanationDepth: [
      "surface",
      "conceptual",
      "conceptual+counterexample",
      "formal"
    ],

    examplesRequired: "boolean",
    counterexamplesRequired: "boolean",
    edgeCasesRequired: "boolean"
  },

  learn: {
    mustInclude: ["string"],
    allowedContent: ["string"],
    forbiddenContent: ["string"],

    outputFormat: {
      paragraphs: "boolean",
      bulletLists: "boolean",
      diagrams: "text-described-only"
    }
  },

  practice: {
    taskTypes: ["string"],
    evaluationSignals: ["string"],
    aiRole: "hint-only",
    forbiddenAIBehaviors: ["string"]
  },

  quiz: {
    questionTypes: ["string"],
    masteryThreshold: 1.0,

    gradingRules: {
      deterministic: true,
      partialCredit: false,
      retriesAllowed: true
    },

    aiDisabled: true,

    feedbackRules: {
      allowed: ["string"],
      forbidden: ["string"]
    }
  },

  meta: {
    noAnswersOutsideQuiz: true,
    regenerationAllowed: true,
    progressionLockedUntilMastery: true
  }
};

export const LESSON_CONTRACTS = {
  "computer-science": {
    "algorithmic-thinking": {
      "what-is-an-algorithm": {
        subjectId: "computer-science",
        pillarId: "algorithmic-thinking",
        lessonId: "what-is-an-algorithm",
        title: "What Is an Algorithm?",

        learningGoal: {
          coreConcept:
            "An algorithm is a finite, ordered set of steps that transforms input into output",
          transferableSkill:
            "Structured problem decomposition",
          whyItMatters:
            "Algorithms underpin all software, automation, and computational reasoning",
          misconceptionsToAvoid: [
            "Algorithms require programming",
            "Algorithms are only mathematical"
          ]
        },

        depthSpec: {
          abstractionLevel: "middle",
          explanationDepth: "conceptual+counterexample",
          examplesRequired: true,
          counterexamplesRequired: true,
          edgeCasesRequired: false
        },

        learn: {
          mustInclude: [
            "plain-language definition",
            "real-world analogy",
            "bad algorithm example"
          ],
          allowedContent: [
            "step-by-step explanation",
            "visualizable examples"
          ],
          forbiddenContent: [
            "code",
            "quiz answers"
          ],
          outputFormat: {
            paragraphs: true,
            bulletLists: true,
            diagrams: "text-described-only"
          }
        },

        practice: {
          taskTypes: [
            "reorder steps",
            "explain reasoning"
          ],
          evaluationSignals: [
            "logical order",
            "clarity"
          ],
          aiRole: "hint-only",
          forbiddenAIBehaviors: [
            "giving final answer"
          ]
        },

        quiz: {
          questionTypes: [
            "multiple-choice",
            "ordering"
          ],
          masteryThreshold: 1.0,
          gradingRules: {
            deterministic: true,
            partialCredit: false,
            retriesAllowed: true
          },
          aiDisabled: true,
          feedbackRules: {
            allowed: [
              "conceptual explanation"
            ],
            forbidden: [
              "revealing correct answer"
            ]
          }
        },

        meta: {
          noAnswersOutsideQuiz: true,
          regenerationAllowed: true,
          progressionLockedUntilMastery: true
        }
      }
    }
  }
};

