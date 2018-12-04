# Git

## Rebase

```text
          C---D---E your_branch
         /
    A---B---F---G master
```

After rebase as following:

```text
                  C'--D'--E' your_branch
                 /
    A---B---F---G master
```

Using rebase to solve below 2 issues:

- This branch is out-of-date with the base branch

  ![Branch Conflicts](/img/branch_out_of_date.png)

- This branch has conflicts that must be resolved

  ![Branch Conflicts](/img/branch_conflicts.png)

Process Flow:

1.  `git checkout master`, and then `git pull`
2.  `git checkout <your_branch>`, if need, do `git pull`
3.  `git rebase master`
4.  Option step if there are CONFLICTs.

    1.  change conflicts and save them
    2.  `git add <file_name>` or `git add .`

        _Note: do not need commit during fixing conflicts._

    3.  `git rebase --continue`
    4.  loop above if conflicts still existed.

5.  `git push -u origin <your_branch> --force`

## Reset

### Resetting remote to a certain commit

Assuming that your branch is called master both here and remotely, and that your remote is called origin you could do:

1.  `git checkout <your_branch>`
2.  `git log` , find the commit-hash
3.  `git reset <commit-hash>` , undoes all commits after [commit]4
4.  `git push -f origin <your_branch>`

_Note:_

- `git remote -v` to get remote information
- `git log --pretty=oneline` or `git log -2` to show version history
