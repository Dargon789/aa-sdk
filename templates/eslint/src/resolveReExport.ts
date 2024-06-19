import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

/**
 * Takes a given file and returns the ts node that matches the importedName.
 * If the name is re-exported from another file, this recursively follows the re-export.
 *
 * @param filePath the file to find the imported name
 * @param importedName the name of the node to find
 * @returns a ts node that matches the imported name or null if it cannot be found
 */
export function resolveReExport(
  filePath: string,
  importedName: string
): ts.FunctionDeclaration | ts.ClassDeclaration | ts.VariableStatement | null {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const sourceFile = ts.createSourceFile(
    filePath,
    fileContent,
    ts.ScriptTarget.Latest,
    true
  );

  let resolvedNode:
    | ts.FunctionDeclaration
    | ts.ClassDeclaration
    | ts.VariableStatement
    | null = null;

  function visit(node: ts.Node) {
    if (
      ts.isExportDeclaration(node) &&
      node.moduleSpecifier &&
      ts.isStringLiteral(node.moduleSpecifier)
    ) {
      const exportedFilePath = path.resolve(
        path.dirname(filePath),
        node.moduleSpecifier.text.replace(".js", ".ts")
      );

      if (node.exportClause && ts.isNamedExports(node.exportClause)) {
        node.exportClause.elements.forEach((element) => {
          if (element.name.text === importedName) {
            resolvedNode = resolveReExport(
              exportedFilePath,
              element.propertyName?.text || element.name.text
            );
          }
        });
      }
    } else if (
      (ts.isFunctionDeclaration(node) && node.name?.text === importedName) ||
      (ts.isClassDeclaration(node) &&
        node.name?.escapedText === importedName) ||
      (ts.isVariableStatement(node) &&
        node.declarationList.declarations.some(
          (decl) =>
            ts.isIdentifier(decl.name) &&
            decl.name.text === importedName &&
            decl.initializer &&
            (ts.isArrowFunction(decl.initializer) ||
              ts.isFunctionExpression(decl.initializer))
        ))
    ) {
      resolvedNode = node;
    }

    if (resolvedNode) return;

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return resolvedNode;
}