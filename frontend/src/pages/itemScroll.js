// import { FixedSizeList as List } from 'react-window';
//
// function useInfiniteScroll(loadMoreItems) {
//   useEffect(() => {
//     const options = { /* ... параметры ... */ };
//     const topObserver = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) loadMoreItems('top');
//     }, options);
//     const bottomObserver = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) loadMoreItems('bottom');
//     }, options);
//
//     topObserver.observe(document.getElementById('top-sentinel'));
//     bottomObserver.observe(document.getElementById('bottom-sentinel'));
//     return () => {
//       topObserver.disconnect();
//       bottomObserver.disconnect();
//     };
//   }, []);
// }
//
// const InfiniteLoader = ({ loadMoreItems }) => {
//   useInfiniteScroll(loadMoreItems);
//   return (
//     <List height={300} itemCount={1000} itemSize={35} width={300}>
//       {({ index, style }) => (
//         <>
//           {index === 0 && <div id="top-sentinel"></div>}
//           <div style={style}>Элемент {index}</div>
//           {index === 999 && <div id="bottom-sentinel"></div>}
//         </>
//       )}
//     </List>  // Всего 1000 элементов в списке
//   );
// };