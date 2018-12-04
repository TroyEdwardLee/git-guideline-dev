# Development Guidelines

- [Development Guidelines](#development-guidelines)
  - [General](#general)
  - [GitHub](#github)
    - [Branching](#branching)
    - [Branch Name Pattern](#branch-name-pattern)
      - [Type](#type)
      - [Sample](#sample)
    - [Git Commit](#git-commit)
    - [Pull Request](#pull-request)
  - [Constants](#constants)
  - [JavaScript](#javascript)
  - [Control](#control)
  - [View](#view)
  - [Controller](#controller)
  - [I18N Naming Convention](#i18n-naming-convention)
  - [EMS Developments Guidelines](#ems-developments-guidelines)

## General

- Always consider the developers who use your control or code! Do not surprise them, but give them what they expect. And make it simple.
- Use Prettier for code format
- Use comments; do not rephrase the code, but tell the reader what is not in the code. Describe why your code does what it does. Prefer line comments.

## GitHub

Important general guide:

- [Git Style Guide](https://github.com/agis/git-style-guide)

### Branching

Git Branching Workflow:

![git branching workflow](/km/git/git_workflow_diagram.png)

**Quick Legend**:

| Instance        | Branch                              | Description, Instructions, Notes                 |
| --------------- | ----------------------------------- | ------------------------------------------------ |
| Stable          | release, stable                     | Accepts merges from Working and Hotfixes         |
| Working         | master                              | Accepts merges from Features/Issues and Hotfixes |
| Features/Issues | topic-\*, feat-\*, bug-\*, issue-\* | Always branch off HEAD of Working                |
| Hotfix          | hotfix-*                            | Always branch off Stable                         |

`git branch --list "feat-*"`

### Branch Name Pattern

{Type}-{ID}-[Keywords]

- *Use hyphens to separate words.*
- *Only lowercase is allowed.*
- *Delete your branch from the upstream repository after it's merged, unless there is a specific reason not to.*

#### Type

- `wip` - Works in progress; stuff I know won't be finished soon
- `junk` - Experiments (will never be merged).
- `hotfix` - Quick fixes to the codebase.
- `bug` - Code changes linked to a known issue.
- `feat` - New feature that I'm adding or expanding, JIRA task
- `issue` - from GitHub issue

#### Sample

- Feature

  `feat-cscems-888`, it is a backlog or task id in JIRA.

  When several people are working on the same feature, it might be convenient to have personal feature branches and a team-wide feature branch. Use the following naming convention:

  - `feat-cscems-888-master`   # team-wide branch, JIRA Backlog ID
  - `feat-cscems-888-{taksid,keywords}`  # task branch of feature

  `git checkout -b feat-cscems-888-master`

- Bug

  `bug-cscems-888` bug from JIRA

  `bug-bcp-123456` bug from SAP BCP system.

- Hotfix

  `hotfix-cscems-888` bug from JIRA

  `hotfix-bcp-123456` bug from SAP BCP system.

- Issue

  `issue-12345` issue in current repo from GitHub

  `issue-ems-dev-123` issue in ems-dev repo from GitHub that internal adjustments for common tasks.

### Git Commit

- [Writing good commit messages](https://github.com/erlang/otp/wiki/writing-good-commit-messages)

  ```text
    Summarize changes in around 50 characters or less

    More detailed explanatory text, if necessary. Wrap it to about 72
    characters or so. In some contexts, the first line is treated as the
    subject of the commit and the rest of the text as the body. The
    blank line separating the summary from the body is critical (unless
    you omit the body entirely); various tools like `log`, `shortlog`
    and `rebase` can get confused if you run the two together.

    Explain the problem that this commit is solving. Focus on why you
    are making this change as opposed to how (the code explains that).
    Are there side effects or other unintuitive consequences of this
    change? Here's the place to explain them.

    Further paragraphs come after blank lines.

    - Bullet points are okay, too

    - Typically a hyphen or asterisk is used for the bullet, preceded
    by a single space, with blank lines in between, but conventions
    vary here

    If you use an issue tracker, put references to them at the bottom,
    like this:

    Resolves: #123
    See also: #456, #789
  ```

  - DO

    - Write the summary line and description of what you have done in the imperative mode, that is as if you were commanding someone. Start the line with "Fix", "Add", "Change" instead of "Fixed", "Added", "Changed".

    - Always leave the second line blank.

    - Line break the commit message (to make the commit message readable without having to scroll horizontally in `gitk`).

  - DON'T

    - Don't end the summary line with a period - it's a title and titles don't end with a period.

  - Tips

    - If it seems difficult to summarize what your commit does, it may be because it includes several logical changes or bug fixes, and are better split up into several commits using `git add -p`.

- [Providing Context with Commit Messages and Bug Reports](https://github.wdf.sap.corp/I074174/code-health/blob/master/code_health/8_Providing_Context_with_Commit_Messages_and_Bug_Reports.pdf)

- [The Art of the Commit](http://alistapart.com/article/the-art-of-the-commit)

- Further constraints in EMS Project

  ```text
  [FIX]summarization of bug or issue

  Resolves: #123 or URL
  See also: #456, #789
  ```

  ```text
  [FEATURE]summarization of sprint backlog

  Spec or description: #123 or URL

  Explain what is the commit that has been done.
  ```

  ```text
  [INTERNAL]refactor | clean up | testing short description

  Resolves: #123 or URL
  See also: #456, #789
  ```

### Pull Request

Pull Request = Code Review

- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)
- [About pull request merges](https://help.github.com/articles/about-pull-request-merges/)
- [Reviewing proposed changes in a pull request](https://help.github.com/articles/reviewing-proposed-changes-in-a-pull-request/)
  - [sample](https://github.wdf.sap.corp/Entitlement/ems-ui-app-conf-transport/pull/149)
- [How to write the perfect pull request](https://blog.github.com/2015-01-21-how-to-write-the-perfect-pull-request/)
- [10 tips for better Pull Requests](http://blog.ploeh.dk/2015/01/15/10-tips-for-better-pull-requests/)
  - Make it small

    >How small is small enough? Obviously, it depends on what the Pull Request is about, but a Pull Request that touches less than a dozen files isn't too bad.

  - Do only one thing

    >Imagine, as a counter-example, that you submit a Pull Request that addresses three independent, separate concerns (let's call them A, B, and C). The reviewer may immediately agree with you that A and C are valid concerns, and that your solution is correct. However, the reviewer has issues with your B concern. Perhaps he or she thinks it's not a concern at all, or she disagrees with the way you've addressed it.

  - Watch your line width

    >There are [many reasons to keep line width below 80 characters](http://richarddingwall.name/2008/05/31/is-the-80-character-line-limit-still-relevant/); making your code easy to review just adds another reason to that list.
  - Avoid re-formatting

    >You may feel the urge to change the formatting of the existing code to fit 'your' style. Please abstain.

    > If you really need to address white space issues, move code around within files, change formatting, or do other stylistic changes to the code, please do so in an isolated pull request that does only that, and state so in your Pull Request comment.

  - Make sure the code builds

    >Before submitting a Pull Request, build it on your own machine.

  - Make sure all tests pass

    >Assuming that the code base in question has automated tests, make sure all tests pass before submitting a Pull Request.

  - Add tests

    >Again, assuming that the code in question already has automated (unit) tests, do add tests for the code you submit.

  - Document your reasoning

    >Yes, [code comments are apologies](http://butunclebob.com/ArticleS.TimOttinger.ApologizeIncode), and I definitely prefer well-named operations, types, and values over comments. Still, when writing code, you often have to make decisions that aren't self-evident (particularly when dealing with Business 'Logic').
    >Document why you wrote the code in the way you did; not what it does.
    - Self-documenting code: `clean code`
    - Code comments: If you can't make the code sufficiently self-documenting, add a code comment
    - Commit messages
      >Sometimes, you'll need to explain why you're doing things in a certain order. This doesn't fit well in code comments, but is a good fit for a commit message.
    - Pull Request comments
      >Still, occasionally, I find that I need to explain myself to the reviewer, but the explanation involves something external to the source code anyway

  - Write well

    >Write good code, but also write good prose. This is partly subjective, but there are rules for both code and prose. Code has correctness rules: if you break them, it doesn't compile (or, for interpreted languages, it fails at run-time).

    >The same goes for the prose you may add: Code comments. Commit messages. Pull Request messages.

    >Please use correct spelling, grammar, and punctuation. If you don't, your prose is harder to understand, and your reviewer is a human being.

  - Avoid thrashing

    It is *Important*, please refer to [original description](http://blog.ploeh.dk/2015/01/15/10-tips-for-better-pull-requests/).

*Do you best to follow 10 tips for better Pull Requests.*

Bad samples:

- [bad sample](https://github.wdf.sap.corp/Entitlement/ems-ui-app-int-variant/pull/192)

## Constants

- Constants should only contains uppercase.
- Using `snakeCase` style of the constant name. e.g. MAX_TABLE_LENGTH.
- If a string is used more one time, do use a contants for it.

## JavaScript

- Naming Conventions

  | Sample             | Type               |
  | ------------------ | ------------------ |
  | <b>s</b>Id         | string             |
  | <b>o</b>DomRef     | object             |
  | <b>$</b>DomRef     | jQuery object      |
  | <b>i</b>Count      | int                |
  | <b>m</b>Parameters | map / assoc. array |
  | <b>a</b>Entries    | array              |
  | <b>d</b>Today      | date               |
  | <b>f</b>Decimal    | float              |
  | <b>b</b>Enabled    | boolean            |
  | <b>r</b>Pattern    | RegExp             |
  | <b>fn</b>Function  | function           |
  | <b>v</b>Variant    | variant types      |

- Do not use global JavaScript variables; organize all global objects in an sap.* namespace structure, or extend the jQuery.sap object. The method jQuery.sap.getObject(...) assists in doing so

  ```javascript
  // A declaration, ensures that sap.ui.sample exists
  jQuery.sap.getObject("sap.ui.sample.myNamespace", 0);
  ```

- [JavaScript Code Issues](https://openui5.hana.ondemand.com/#/topic/030fcd14963048218488048f407f8f34)

- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- String template that text mixed with variable, **only use it in test not use it in productive codes**.

  ```javascript
  var text = `Should have ${iNum} items.`;

  //instead of below

  var text = 'Should have ' + iNum + ' items.';
  ```

## Control

- [SAPUI5 Control Development Guidelines](https://sapui5.hana.ondemand.com/#/topic/4549da61e2d949d6a3d20ad8a9d17a6f)

## View

- control id: `id-page-title`. _do not use global id for the control._

## Controller

- Using prefix `handle` in controller for _view_ event that events from these controls in the view, so event press from cancle button should use method name like `handleCancelPress`, `Route Matched` should use method name like `onRouteMatched`.
- For private methods in controller, most of methods in controller should be event handler, the method used in event handler should be private, so use prefix `_` for them.

## I18N Naming Convention

The general naming convention separates below groups of texts:

- Common Controls (CTRL)
- Messages (MSG)
- Database Keys (DB)

In general a text name then is identified by the combination of 4 components

- Group (see above)
- Name of the Component (e.g. Name of Control, View, DB Key, DB Package)
- X- or Y-Type (w/o the leading X/Y)
- Key (the meaning of the text)

Concatenating those components identifies the text `<group>_<name>_<type>_<key>`.

e.g.

- Control IdeaCard Label: CTRL_IDEACARD_FLD_STATUS
- DB Key idea_phase_code Text: DB_IDEA_PHASE_CODE_TXT_PROJECT
- Message Idea (X-Type always MSG/INS): MSG_IDEA_NAME_MANDATORY

## EMS Developments Guidelines

- [EMS Developments Guidelines on WIKI](https://wiki.wdf.sap.corp/wiki/display/SAPEMS/EMS+SAPUI5+Development+Guidelines)
