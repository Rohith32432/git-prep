export const basic = [
    {
        "heading": "git add",
        "para": "The command `git add` adds changes in your working directory to the staging area. This prepares the changes to be committed to the local repository. It can be used to add individual files or all changes.",
        "points": "Purpose: Stages changes for the next commit.\bUsage: Prepares changes to be committed by adding them to the staging area.",
        "cmd": "git add <file>"
    },
    {
        "heading": "git commit",
        "para": "The command `git commit` records the changes staged in the staging area to the local repository. It creates a new commit with a message describing the changes made.",
        "points": "Purpose: Records changes to the local repository.\bUsage: Commits staged changes with a descriptive message.",
        "cmd": "git commit -m 'Your commit message'"
    },
    {
        "heading": "git push",
        "para": "The command `git push` uploads your local repository changes to a remote repository. It updates the remote repository with the commits from your local branch.",
        "points": "Purpose: Uploads local commits to a remote repository.\bUsage: Updates the remote repository with your local changes.",
        "cmd": "git push origin <branch>"
    },
    {
        "heading": "git remote add origin",
        "para": "The command `git remote add origin <URL>` adds a new remote repository with the name 'origin' to your local repository. This is usually done after initializing a new Git repository to link it with a remote server.",
        "points": "Purpose: Links your local repository with a remote repository.\bRemote Name: 'origin' is the default name for the primary remote repository.\bURL: Specifies the location of the remote repository.\bUsage: Allows interaction with the remote repository for pushing and pulling changes.",
        "cmd": "git remote add origin https://github.com/YourAccount/YourRepo"
    },
    {
        "heading": "git branch",
        "para": "The command `git branch` lists, creates, or deletes branches in your repository. Branches are used to develop features or fix bugs in isolation from the main codebase.",
        "points": "Purpose: Manages branches in your repository.\bUsage: Lists existing branches, creates new ones, or deletes them.",
        "cmd": "git branch <branch-name>"
    },
];

export const branch = [
    {
        "heading": "git branch &lt;branch-name&gt;",
        "para": "The command `git branch &lt;branch-name&gt;` creates a new branch with the specified name. It does not switch to the new branch immediately; it only creates it.",
        "points": "Purpose: Creates a new branch.\bUsage: Used to create a new branch in your repository.",
        "cmd": "git branch &lt;branch-name&gt;"
    },
    {
        "heading": "git checkout &lt;branch-name&gt;",
        "para": "The command `git checkout &lt;branch-name&gt;` switches the working directory to the specified branch. It updates the files in the working directory to match the branch content.",
        "points": "Purpose: Switches to a specified branch.\bUsage: Used to change the current working branch.",
        "cmd": "git checkout &lt;branch-name&gt;"
    },
    {
        "heading": "git switch &lt;branch-name&gt;",
        "para": "The command `git switch &lt;branch-name&gt;` is a newer command introduced to switch branches. It is a more intuitive alternative to `git checkout` for branch switching.",
        "points": "Purpose: Switches to a specified branch in a more user-friendly manner.\bUsage: Used to change the current working branch, similar to `git checkout`.",
        "cmd": "git switch &lt;branch-name&gt;"
    },
    {
        "heading": "git checkout -b &lt;branch-name&gt;",
        "para": "The command `git checkout -b &lt;branch-name&gt;` creates a new branch and immediately switches to it. It combines the functionalities of `git branch` and `git checkout`.",
        "points": "Purpose: Creates and switches to a new branch in one command.\bUsage: Used to create a new branch and switch to it at the same time.",
        "cmd": "git checkout -b &lt;branch-name&gt;"
    },
    {
        "heading": "git switch -c &lt;branch-name&gt;",
        "para": "The command `git switch -c &lt;branch-name&gt;` creates a new branch and switches to it, similar to `git checkout -b` but using the newer `git switch` command.",
        "points": "Purpose: Creates and switches to a new branch using the `git switch` command.\bUsage: Used as a modern alternative to `git checkout -b`.",
        "cmd": "git switch -c &lt;branch-name&gt;"
    },
    {
        "heading": "git merge &lt;branch-name&gt;",
        "para": "The command `git merge &lt;branch-name&gt;` merges the specified branch into the current branch. It combines the changes from the specified branch into the branch you are currently on.",
        "points": "Purpose: Merges changes from one branch into the current branch.\bUsage: Used to integrate changes from another branch into the current branch.",
        "cmd": "git merge &lt;branch-name&gt;"
    },
    {
        "heading": "git rebase &lt;branch-name&gt;",
        "para": "The command `git rebase &lt;branch-name&gt;` re-applies commits from the current branch onto the specified branch. This is used to integrate changes from one branch to another in a linear fashion.",
        "points": "Purpose: Re-applies commits from the current branch onto the specified branch.\bUsage: Used to rebase the current branch on top of another branch.",
        "cmd": "git rebase &lt;branch-name&gt;"
    },
    {
        "heading": "git branch -d &lt;branch-name&gt;",
        "para": "The command `git branch -d &lt;branch-name&gt;` deletes the specified branch if it has been fully merged into the current branch. If the branch contains unmerged changes, use `-D` to force deletion.",
        "points": "Purpose: Deletes a branch that has been fully merged.\bUsage: Used to remove branches that are no longer needed.",
        "cmd": "git branch -d &lt;branch-name&gt;"
    },
    {
        "heading": "git branch -D &lt;branch-name&gt;",
        "para": "The command `git branch -D &lt;branch-name&gt;` forcefully deletes the specified branch, regardless of whether it has been merged or not.",
        "points": "Purpose: Forcefully deletes a branch.\bUsage: Used to remove a branch regardless of its merge status.",
        "cmd": "git branch -D &lt;branch-name&gt;"
    },
    {
        "heading": "git branch --merged",
        "para": "The command `git branch --merged` lists all branches that have been fully merged into the current branch. This helps in identifying branches that are safe to delete.",
        "points": "Purpose: Lists branches that have been merged into the current branch.\bUsage: Used to find branches that can be deleted safely.",
        "cmd": "git branch --merged"
    },
    {
        "heading": "git branch --no-merged",
        "para": "The command `git branch --no-merged` lists all branches that have not been fully merged into the current branch. This helps in identifying branches with unmerged changes.",
        "points": "Purpose: Lists branches that have not been merged into the current branch.\bUsage: Used to find branches with unmerged changes.",
        "cmd": "git branch --no-merged"
    }
];

export const mointor = [
    {
        "heading": "git status",
        "para": "The command `git status` displays the state of the working directory and the staging area. It shows which changes have been staged, which haven't, and which files aren't being tracked by Git.",
        "points": "Purpose: Shows the current status of the repository.\bUsage: Used to view the state of the working directory and staging area.",
        "cmd": "git status"
    },
    {
        "heading": "git log",
        "para": "The command `git log` shows the commit history for the repository. It displays a list of commits, starting with the most recent, along with details like the commit message, author, and date.",
        "points": "Purpose: Displays the commit history.\bUsage: Used to view the history of commits in the repository.",
        "cmd": "git log"
    },
    {
        "heading": "git remote -v",
        "para": "The command `git remote -v` displays the URLs that Git has stored for the remote repositories. It shows both the fetch and push URLs for each remote.",
        "points": "Purpose: Lists the remote repositories and their URLs.\bUsage: Used to view the URLs of the remote repositories associated with the local repository.",
        "cmd": "git remote -v"
    },
    {
        "heading": "git remote set-url",
        "para": "The command `git remote set-url` changes the URL of an existing remote repository. This is useful if the remote repository URL has changed or if you want to switch to a different remote.",
        "points": "Purpose: Updates the URL of a remote repository.\bUsage: Used when the URL of a remote repository changes or when switching to a different remote.",
        "cmd": "git remote set-url &lt;remote-name&gt; &lt;new-url&gt;"
    },
    {
        "heading": "git remote get-url",
        "para": "The command `git remote get-url` retrieves the URL of a specified remote repository. This is useful for verifying the URL of a remote repository.",
        "points": "Purpose: Retrieves the URL of a remote repository.\bUsage: Used to verify or check the URL of a remote repository.",
        "cmd": "git remote get-url &lt;remote-name&gt;"
    },
    {
        "heading": "git remote remove origin",
        "para": "The command `git remote remove origin` removes the remote repository named 'origin' from your local Git configuration. It keeps all your local files and directories unchanged.",
        "points": "Purpose: Removes the reference to a remote repository.\bUsage: Used when you no longer want to track a remote repository.",
        "cmd": "git remote remove origin"
    },
    {
        "heading": "git rm -r &lt;path/to/directory&gt;",
        "para": "The command `git rm -r &lt;path/to/directory&gt;` removes a directory and its contents from your working directory and stages the removal for the next commit.",
        "points": "Purpose: Deletes a directory and its contents.\bUsage: Used to remove unwanted directories from your project and track the removal with Git.",
        "cmd": "git rm -r &lt;path/to/directory&gt;"
    },
    {
        "heading": "Remove-Item -Recurse -Force .git",
        "para": "The command `Remove-Item -Recurse -Force .git` is used in PowerShell to delete the .git directory and all its contents, effectively uninitializing a Git repository.",
        "points": "Purpose: Deletes the .git directory, removing Git version control from a project.\bUsage: Used when you want to completely remove Git tracking from a project.",
        "cmd": "Remove-Item -Recurse -Force .git"
    },
    {
        "heading": "git rm -r --cached &lt;path/to/directory&gt;",
        "para": "The command `git rm -r --cached &lt;path/to/directory&gt;` removes a directory from the staging area without deleting it from your working directory, effectively stopping Git from tracking it.",
        "points": "Purpose: Untracks a directory while keeping it in your local working directory.\bUsage: Used when you want to stop tracking a directory but keep its contents.",
        "cmd": "git rm -r --cached &lt;path/to/directory&gt;"
    }
];
