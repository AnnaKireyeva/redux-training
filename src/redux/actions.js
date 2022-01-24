// //это литерал объекта, статика, не настраиваемый
// export const myAction = {
//   type: 'MY_ACTION',
//   payload: 'super payload',
// };

// //мы хотим сделать actionCreator, это ф-ция,
// // кот можно передать аргументы,
// // она эти аргументы запишет в значения
// export const myAction_2 = value => {
//   return {
//     type: 'MY_ACTION_2',
//     payload: value,
//   };
// };
export const increment = value => ({
  type: 'counter/Increment',
  payload: value,
});
export const decrement = value => ({
  type: 'counter/Decrement',
  payload: value,
});
