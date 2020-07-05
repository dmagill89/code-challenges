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

function hasDependencyIterative(package, dependency) {
  const queue = [];
  const seen = new Set();

  queue.push(package);
  while (queue.length > 0) {

    const current = queue.shift();
    if (!seen.has(current.name)) {
      const dependencies = current.dependencies;
      const numDependencies = dependencies.length;

      seen.add(current.name);

      for (let i = 0; i < numDependencies; i++) {
        const dep = dependencies[i];

        if (dep.name === dependency) {
          return true;
        } else if (!seen.has(dep.name)) {
          queue.push(dep);
        }
      }
    }
  }

  return false;
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