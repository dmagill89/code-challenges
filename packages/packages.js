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
  const dependencies = package.dependencies;


  if (package.name === dependency) {
    return true;
  } else {

  }
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