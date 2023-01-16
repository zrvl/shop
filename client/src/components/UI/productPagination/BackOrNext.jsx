import React from 'react'

const BackOrNext = (props) => {

  const changePage = () => {
    if (props.name == 'prev' && props.activePage !== 1) {
      props.setActivePage(props.activePage - 1);
    }
    else if (props.name == 'next' && props.activePage <= props.btns.length) {
      props.setActivePage(props.activePage + 1);
    }
  }

  return (
    <button className="pagination__btn" onClick={changePage}>{props.name}</button>
  )
}

export default BackOrNext