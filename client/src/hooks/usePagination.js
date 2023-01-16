
export const usePagination = (productsCount, limit, pageActive) => {

  let btns = Math.ceil(productsCount / limit);
  const resBtns = [pageActive]
  if (btns > pageActive) resBtns.push(pageActive+1)
  if (pageActive != 1) resBtns.unshift(pageActive-1)
  
  return resBtns
}