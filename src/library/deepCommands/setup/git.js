export const gitDescription  = `Git is a fast, scalable, distributed revision control system with an unusually rich command set that provides both high-level operations and full access to internals.
See gittutorial[7] to get started, then see giteveryday[7] for a useful minimum set of commands. The Git User’s Manual has a more in-depth introduction.
After you mastered the basic concepts, you can come back to this page to learn what commands Git offers. You can learn more about individual Git commands with "git help command". gitcli[7] manual page gives you an overview of the command-line command syntax.
A formatted and hyperlinked copy of the latest Git documentation can be viewed at https://git.github.io/htmldocs/git.html or https://git-scm.com/docs.`

export const gitOptionsList = `The list of options commands for git alone are:
(-v, --version), (-h, --help), -C, -c, --config-env, --exec-path, --html-path, --man-path, --info-path, -p, (-P, --no-pager), --git-dir, --work-tree, --namespace, --super-prefix, --bare, --no-replace-objects, --literal-pathspecs, --glob-pathspecs, --icase-pathspecs, --no-optional-locks, --list-cmds `

export const gitOptions= (options) => {
    switch (options) {
    case '-v':
    case "--version":
        `Prints the Git suite version that the git program came from.
        This option is internally converted to git version ... and accepts the same options as the git-version[1] command. If --help is also given, it takes precedence over --version.`
        break;
    case "-h":
    case "--help":
        "Prints the synopsis and a list of the most commonly used commands. If the option --all or -a is given then all available commands are printed. If a Git command is named this option will bring up the manual page for that command." 
        "Other options are available to control how the manual page is displayed. See git-help[1] for more information, because git --help ... is converted internally into git help ...."
        break;

    case "-C":
        `full command: -C <path>\n`,
        "Run as if git was started in <path> instead of the current working directory. When multiple -C options are given, each subsequent non-absolute -C <path> is interpreted relative to the preceding -C <path>. If <path> is present but empty, e.g. -C , then the current working directory is left unchanged."
        "This option affects options that expect path name like --git-dir and --work-tree in that their interpretations of the path names would be made relative to the working directory caused by the -C option. For example the following invocations are equivalent:"
        "git --git-dir=a.git --work-tree=b -C c status\ngit --git-dir=c/a.git --work-tree=c/b status";
        break;

    case "-c":
        `full command: -c <name>=<value>\n`,
        "Pass a configuration parameter to the command. The value given will override values from configuration files. The <name> is expected in the same format as listed by git config (subkeys separated by dots)."
        "Note that omitting the = in git -c foo.bar ... is allowed and sets foo.bar to the boolean true value (just like [foo]bar would in a config file). Including the equals but with an empty value (like git -c foo.bar= ...) sets foo.bar to the empty string which git config --type=bool will convert to false."
        break;

    case "--config-env":
        `full command: --config-env=<name>=<envvar>\n`,
        "Like -c <name>=<value>, give configuration variable <name> a value, where <envvar> is the name of an environment variable from which to retrieve the value. Unlike -c there is no shortcut for directly setting the value to an empty string, instead the environment variable itself must be set to the empty string. It is an error if the <envvar> does not exist in the environment. <envvar> may not contain an equals sign to avoid ambiguity with <name> containing one." 
        "This is useful for cases where you want to pass transitory configuration options to git, but are doing so on OS’s where other processes might be able to read your cmdline (e.g. /proc/self/cmdline), but not your environ (e.g. /proc/self/environ). That behavior is the default on Linux, but may not be on your system."
        "Note that this might add security for variables such as http.extraHeader where the sensitive information is part of the value, but not e.g. url.<base>.insteadOf where the sensitive information can be part of the key."
        break;

    case "--exec-path":
        `full command: --exec-path=<name>=<envvar> \n`, 
        "Path to wherever your core Git programs are installed. This can also be controlled by setting the GIT_EXEC_PATH environment variable. If no path is given, git will print the current setting and then exit."
        break;

    case"--html-path":
        `Print the path, without trailing slash, where Git’s HTML documentation is installed and exit.`
        break;
  case "--man-path":
    `Print the manpath (see man(1)) for the man pages for this version of Git and exit.`
    break;
  case "--info-path":
    `Print the path where the Info files documenting this version of Git are installed and exit.`
    break;

  case "-p":
  case "--paginate":
    `Pipe all output into less (or if set, $PAGER) if standard output is a terminal. This overrides the pager.<cmd> configuration options (see the "Configuration Mechanism" section below).`
    break;

  case "-P":
  case "--no-pager":
    `Do not pipe Git output into a pager.`
    break;

  case "--git-dir":
    `full command: --git-dir=<path> \n`,
    `Set the path to the repository (".git" directory). This can also be controlled by setting the GIT_DIR environment variable. It can be an absolute path or relative path to current working directory.
    Specifying the location of the ".git" directory using this option (or GIT_DIR environment variable) turns off the repository discovery that tries to find a directory with ".git" subdirectory (which is how the repository and the top-level of the working tree are discovered), and tells Git that you are at the top level of the working tree. If you are not at the top-level directory of the working tree, you should tell Git where the top-level of the working tree is, with the --work-tree=<path> option (or GIT_WORK_TREE environment variable)
    If you just want to run git as if it was started in <path> then use git -C <path>.`
    break;

  case "--work-tree":
    `full command --work-tree=<path>\n`,
    `Set the path to the working tree. It can be an absolute path or a path relative to the current working directory. This can also be controlled by setting the GIT_WORK_TREE environment variable and the core.worktree configuration variable (see core.worktree in git-config[1] for a more detailed discussion).`
    break;

  case "--namespace":
    `full command: --namespace=<path>\n`,
    `Set the Git namespace. See gitnamespaces[7] for more details. Equivalent to setting the GIT_NAMESPACE environment variable.`
    break;

  case "--super-prefix=<path>":
    `full command: --super-prefix=<path>\n`,
    `Currently for internal use only. Set a prefix which gives a path from above a repository down to its root. One use is to give submodules context about the superproject that invoked it.`
    break;

  case "--bare":
    `Treat the repository as a bare repository. If GIT_DIR environment is not set, it is set to the current working directory.`
    break;

  case "--no-replace-objects":
    `Do not use replacement refs to replace Git objects. See git-replace[1] for more information.`
    break;

  case "--literal-pathspecs":
    `Treat pathspecs literally (i.e. no globbing, no pathspec magic). This is equivalent to setting the GIT_LITERAL_PATHSPECS environment variable to 1.`
    break;

  case "--glob-pathspecs":
    `Add "glob" magic to all pathspec. This is equivalent to setting the GIT_GLOB_PATHSPECS environment variable to 1. Disabling globbing on individual pathspecs can be done using pathspec magic ":(literal)"`
    break;

  case `--noglob-pathspecs`:
    `Add "literal" magic to all pathspec. This is equivalent to setting the GIT_NOGLOB_PATHSPECS environment variable to 1. Enabling globbing on individual pathspecs can be done using pathspec magic ":(glob)"`
    break;

  case `--icase-pathspecs`:
    `Add "icase" magic to all pathspec. This is equivalent to setting the GIT_ICASE_PATHSPECS environment variable to 1.`
    break;

  case `--no-optional-locks`:
    `Do not perform optional operations that require locks. This is equivalent to setting the GIT_OPTIONAL_LOCKS to 0.`
    break;
  case `--list-cmds`:
    `full command: --list-cmds=group[,group…​]\n`,
    `List commands by group. This is an internal/experimental option and may change or be removed in the future. Supported groups are: builtins, parseopt (builtin commands that use parse-options), main (all commands in libexec directory), others (all other commands in $PATH that have git- prefix), list-<category> (see categories in command-list.txt), nohelpers (exclude helper commands), alias and config (retrieve command list from config variable completion.commands)`
    
  default: 
    `This is not a listed command for git please try again`
    break;
}}

