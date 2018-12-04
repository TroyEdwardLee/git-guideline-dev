# GitHub

## GitHub Workflow

![GitHUb Workflow](/img/github_workflow.png)

## AutoCRLF && SafeCRLF

- convert to LF when commit，convert to CRLF when checkout

  `git config --global core.autocrlf true`

- convert to LF when commit，no convertion when checkout

  `git config --global core.autocrlf input`

- no convertion for both commit and checkout

  `git config --global core.autocrlf false`

- reject when CRLF and LF mixed

  `git config --global core.safecrlf true`

- ok for CRLF and LF mixed

  `git config --global core.safecrlf false`

- warn when CRLF and LF mixed

  `git config --global core.safecrlf warn`

## Branching

- [Using git-flow to automate your git branching workflow](https://jeffkreeftmeijer.com/git-flow/)
- [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
- [Git Style Guide](https://github.com/agis/git-style-guide)
- [Branching](https://gist.github.com/digitaljhelms/4287848)
- [git branch naming best practices](https://stackoverflow.com/questions/273695/git-branch-naming-best-practices)

## Pull Request

Pull Request = Code Review

- [About pull request reviews](https://help.github.com/articles/about-pull-request-reviews/)
- [Reviewing proposed changes in a pull request](https://help.github.com/articles/reviewing-proposed-changes-in-a-pull-request/)
  - [sample](https://github.wdf.sap.corp/Entitlement/ems-ui-app-conf-transport/pull/149)
- [How to write the perfect pull request](https://blog.github.com/2015-01-21-how-to-write-the-perfect-pull-request/)
- [10 tips for better Pull Requests](http://blog.ploeh.dk/2015/01/15/10-tips-for-better-pull-requests/)
  - [bad sample](https://github.wdf.sap.corp/Entitlement/ems-ui-app-int-variant/pull/192)
