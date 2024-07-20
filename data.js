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
export const branch=[{

}]
export const mointor=[{
    
}]