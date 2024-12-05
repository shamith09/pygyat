import re
import os

from pygyat import GYAT2PY_MAPPINGS

"""
Python module for converting pygyat code to python code.
"""


def _ends_in_gyat(word):
    """
    Returns True if word ends in .gyat, else False

    Args:
        word (str):     Filename to check

    Returns:
        boolean: Whether 'word' ends with 'gyat' or not
    """
    return word[-5:] == ".gyat"


def _change_file_name(name, outputname=None):
    """
    Changes *.gyat filenames to *.py filenames. If filename does not end in .gyat,
    it adds .py to the end.

    Args:
        name (str):         Filename to edit
        outputname (str):   Optional. Overrides result of function.

    Returns:
        str: Resulting filename with *.py at the end (unless 'outputname' is
        specified, then that is returned).
    """

    # If outputname is specified, return that
    if outputname is not None:
        return outputname

    # Otherwise, create a new name
    if _ends_in_gyat(name):
        return name[:-5] + ".py"

    else:
        return name + ".py"


def parse_glazes(filename):
    """
    Reads the file, and scans for imports. Returns all the assumed filename
    of all the imported modules (ie, module name appended with ".gyat")

    Args:
        filename (str):     Path to file

    Returns:
        list of str: All imported modules, suffixed with '.gyat'. Ie, the name
        the imported files must have if they are pygyat files.
    """
    infile = open(filename, "r")
    infile_str = ""

    for line in infile:
        infile_str += line

    glazes = re.findall(r"(?<=glaze\s)[\w.]+(?=;|\s|$)", infile_str)
    glazes2 = re.findall(r"(?<=lock in\s)[\w.]+(?=\s+glaze)", infile_str)

    glazes_with_suffixes = [im + ".gyat" for im in glazes + glazes2]

    return glazes_with_suffixes


def safe_substitute(value, deescaped_key, line):
    """
    Performs Pygyat token substitution on a line, but ignores tokens inside of strings.
    TODO: Can be extended to ignore tokens inside of comments as well.

    Args:
        value (str):             Python token
        deescaped_key (str):     Pygyat token
        line (str):              Code line

    Returns:
        Code line with safe Pygyat token substitutions
    """
    string_pattern = r"""
        (?P<string>(['"])(?:\\.|(?!\2).)*\2)  # Match single or double-quoted strings
    """

    def replace_callback(match):
        if match.group("string"):
            return match.group(0)
        else:
            return re.sub(
                rf'(?<!["\'#])\b{re.escape(value)}\b(?!["\'])',
                f"dont_use_{value}_use_{deescaped_key}",
                match.group(0)
            )
    return re.sub(string_pattern, replace_callback, line)


def parse_file(filepath, filename_prefix, outputname=None, change_imports=None):
    """
    Converts a pygyat file to a python file and writes it to disk.

    Args:
        filename (str):             Path to the pygyat file you want to parse.
        filename_prefix (str):      Prefix to resulting file name (if -c or -k
                                    is not present, then the files are prefixed
                                    with a '.').
        outputname (str):           Optional. Override name of output file. If
                                    omitted it defaults to substituting '.gyat' to
                                    '.py'
        change_imports (dict):      Names of imported pygyat modules, and their
                                    python alternative.
    """
    filename = os.path.basename(filepath)

    infile = open(filepath, "r")
    outfile = open(filename_prefix + _change_file_name(filename, outputname), "w")

    # Read file to string
    infile_str_raw = ""
    for line in infile:
        infile_str_raw += line

    # Fix indentation
    infile_str_indented = ""
    for line in infile_str_raw.split("\n"):
        # Search for comments, and remove for now. Re-add them before writing to
        # result string
        m = re.search(r"[ \t]*(#.*$)", line)

        # Make sure # sign is not inside quotations. Delete match object if it is
        if m is not None:
            m2 = re.search(r"[\"'].*#.*[\"']", m.group(0))
            if m2 is not None:
                m = None

        if m is not None:
            add_comment = m.group(0)
            line = re.sub(r"[ \t]*(#.*$)", "", line)
        else:
            add_comment = ""

        # skip empty lines:
        if line.strip() in ("\n", "\r\n", ""):
            infile_str_indented += add_comment + "\n"
            continue

        # replace anything in mappings.keys() with its value, ignore comments
        # disallow real python
        for key, value in GYAT2PY_MAPPINGS.items():
            deescaped_key = key.replace("\s+", " ")
            line = safe_substitute(value, deescaped_key, line)
            line = re.sub(r'(?<!["\'#])\b{}\b(?!["\'])'.format(key), value, line)
        infile_str_indented += line + add_comment + "\n"

    # Change imported names if necessary
    if change_imports is not None:
        for module in change_imports:
            infile_str_indented = re.sub(
                r"(?<=import\\s{})\\b(?!\\s+as\\b)".format(module),
                "{} as {}".format(change_imports[module], module),
                infile_str_indented,
            )
            infile_str_indented = re.sub(
                "(?<=from\\s){}(?=\\s+import)".format(module),
                change_imports[module],
                infile_str_indented,
            )

    outfile.write(infile_str_indented)

    infile.close()
    outfile.close()
