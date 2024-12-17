# PyGyat
Python with rizz. Be a sigma and mog your skibidi toilet opps before they crashout. This language can only be used in Ohio.

Check out the [official PyGyat website](https://pygyat.vercel.app).

Join the [Telegram community](https://t.me/PyGyat_BrainRot)!

PyGyat is a Python preprosessor which translates regular Python code into brainrot by replacing certain keywords, operators, and built in functions with iPad kid vocabulary.

Implementation based on [Bython](https://github.com/mathialo/bython).

## Content of README:
  * [Key features](#key-features)
  * [Code example](#code-example)
  * [Installation](#installation)
  * [Keyword mappings](#keyword-mappings)
  * [Quick intro](#quick-intro)
  * [Structure of the repository](#structure-of-the-repository)


## Key features

 * Write Python using brainrot terms instead.

 * Run PyGyat files using the `pygyat` command, just like Python.

 * Translate Python files to PyGyat and vice versa.

 * Real Python keywords that have defined PyGyat mappings will not be allowed.

 * Edit your PyGyat code with syntax highlighting with the `vscode-pygyat` extension.

## Code example
![Code Example](https://github.com/shamith09/vscode-pygyat/blob/main/code-example.png?raw=true)

## Installation

You can install PyGyat directly from PyPI using pip (with or without `-H`, depending on your Python installation):

```
$ pip3 install pygyat
```

If you for some reason want to install it from the git repository you can use `git clone` and do a local install instead:

```
$ git clone https://github.com/shamith09/pygyat.git
$ cd pygyat
$ pip3 install .
```

The git version is sometimes a tiny bit ahead of the PyPI version, but not significantly.

To uninstall, simply run 

```
$ pip3 uninstall pygyat
```

which will undo all the changes.

To install the `vscode-pygyat` extension for Visual Studio Code, visit:

[https://marketplace.visualstudio.com/items?itemName=shamith-pasula.vscode-pygyat](https://marketplace.visualstudio.com/items?itemName=shamith-pasula.vscode-pygyat)

## Keyword mappings

Below is a table of all of the Python keywords or operators that should be replaced by their corresponding PyGyat keyword. Python keywords that don't have a mapping or aren't in this table can just be used as is. If you want to request that a new mapping be made, please submit a pull request.

| Python Keyword/Operator | PyGyat Translation          |
|-------------------------|----------------------------------|
| try/except/finally      | hawk/tuah/spit on that thang     |
| return                  | its giving                       |
| -                       | fanum tax                        |
| +                       | rizz                             |
| print                   | yap                              |
| True                    | Aura                             |
| False                   | Cooked                           |
| def                     | bop                              |
| while                   | let him cook                     |
| import                  | glaze                            |
| from                    | lock in                          |
| class                   | skibidi                          |
| if/elif/else            | chat is this real/yo chat/only in ohio |
| for                     | mewing                           |
| break                   | just put the fries in the bag bro|
| continue                | edge                             |
| assert                  | sus                              |
| raise                   | crashout                         |
| in                      | diddy                            |
| is                      |                                  |
| and                     |                                  |
| or                      |                                  |
| not                     |                                  |
| with                    | pookie                           |
| as                      | ahh                              |
| global                  | GOAT                             |
| nonlocal                | motion                           |
| del                     | delulu                           |
| yield                   | pause                            |
| yield from              | pause no diddy                   |
| None                    | NPC                              |
| pass                    | pluh                             |
| self                    | unc                              |
| range                   | huzz                             |
| >                       | sigma                            |
| <                       | beta                             |
| ≥                       | sigma twin                       |
| ≤                       | beta twin                        |
| ==                      | twin                             |
| =                       |                                  |
| async                   |                                  |
| await                   |                                  |
| open                    | mog                              |
| read                    |                                  |
| write                   |                                  |
| close                   | demure                           |
| list                    |                                  |
| set                     |                                  |
| dict                    |                                  |

## Quick intro

PyGyat works by first translating PyGyat files (suggested file ending: .gyat) into Python-files, and then using Python to run them. You therefore need a working installation of Python for PyGyat to work.


To run a PyGyat program, simply type

```
$ pygyat source.gyat arg1 arg2 ...
```

to run `source.gyat` with arg1, arg2, ... as command line arguments. If you want more details on how to run PyGyat files (flags, etc), type

```
$ pygyat -h
```

to print the built-in help page. You can also consult the man page by typing

```
$ man pygyat
```

PyGyat also includes a translator from Python to PyGyat. This is found via the `py2gyat` command:

```
$ py2gyat test.py
```

This will create a PyGyat file called `test.gyat`. A full explanation of `py2gyat`, is found by typing

```
$ py2gyat -h
```

or by consulting the man page:

```
$ man py2gyat
```

## Structure of the repository

At the moment, PyGyat is written in Python. The git repository is structured into 4 directories:

 * `pygyat` contains a Python package containing the parser and other utilities used by the main script
 * `etc` contains manual pages and other auxillary files
 * `scripts` contains the runnable Python scripts, ie the ones run from the shell
 * `testcases` contains a couple of sample \*.gyat and \*.py files intended for testing the implementation
 * [`vscode-pygyat`](https://github.com/shamith09/vscode-pygyat) contains the Visual Studio Code extension that enables syntax highlighting in VS Code.
