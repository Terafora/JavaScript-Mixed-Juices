/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    return name == "Pure Strawberry Joy" ? 0.5
      : name == "Energizer" || name == "Green Garden" ? 1.5
      : name == "Tropical Island" ? 3
      : name == "All or Nothing" ? 5
      : 2.5;
  };
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  export function limesToCut(wedgesNeeded, limes) {
    let limeWedges = 0;
    let cutLimes = 0;
  
    while (limeWedges < wedgesNeeded && cutLimes < limes.length) {
      if (limes[cutLimes] === "small") {
        limeWedges += 6;
      } else if (limes[cutLimes] === "medium") {
        limeWedges += 8;
      } else if (limes[cutLimes] === "large") {
        limeWedges += 10;
      }
      cutLimes++;
    }
  
    return cutLimes;
  }
  
  
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
  export function remainingOrders(timeLeft, orders) {
    let ordersForDmitry = [];
    for (let order of orders) {
      if (timeLeft <= 0) {
        ordersForDmitry.push(order);      
      } else {
        timeLeft -= timeToMixJuice(order);
      }   
    }
    return ordersForDmitry;
  }