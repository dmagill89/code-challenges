/**
 * package: {
 *  name: string,
 *  depdendencies: package[]
 * } 
 */

/**
 * 
 * @param {Package} package 
 * @param {String} dependency 
 */
function hasDependency(package, dependency) {
  const seen = new Set();

  if (package.name === dependency) {
    return true;
  }

  const recurse = (package) => {
    const dependencies = package.dependencies;

    dependencies.forEach(dep => {
      if (!seen.has(dep.name)) {
        seen.add(dep.name);
        recurse(dep);
      }
    });
  };

  recurse(package);
  return seen.has(dependency);
}

// package = {
//     name: 'A',
//     dependencies: [
//         {
//             name: 'B',
//             dependencies: []
//         },
//         {
//             name: 'C',
//             dependencies: []
//         }
//     ]
// }