export default function() {
  const table = document.querySelector('.competitions__table');
  if(!table) return;

  function sortByName(viceVersa = false) {
    const rows = document.querySelectorAll('.competitions__table-tbody .competitions__table-tr');
    const sortList = Array.from(rows).sort((a, b) => {
      const nameA = a.querySelector('.competitions__table-text').textContent.toLowerCase();
      const nameB = b.querySelector('.competitions__table-text').textContent.toLowerCase();
      if(viceVersa) {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      } else {
        if (nameA < nameB) return 1;
        if (nameA > nameB) return -1;
      }
      return 0;
    });
    document.querySelector('.competitions__table-tbody').append(...sortList);
  }

  function sortByDate(viceVersa = false) {
    const rows2 = document.querySelectorAll('.competitions__table-tbody .competitions__table-tr');
    const sortedRows = Array.from(rows2).sort((a, b) => {
      const dateA = new Date(a.querySelector('.competitions__table-date-item--start').textContent);
      const dateB = new Date(b.querySelector('.competitions__table-date-item--start').textContent);
      if(!viceVersa) {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    document.querySelector('.competitions__table-tbody').append(...sortedRows);
  }


  const btnName = document.querySelector(".competitions__table-th-text--name");
  const btnDate = document.querySelector(".competitions__table-th-text--date")

  let activeBtnName = false;
  let activebtnDate = false;

  btnName.addEventListener("click", function() {
    if(!activeBtnName) {
      sortByName();
      btnName.querySelector('svg').style['transform'] = 'rotate(180deg)';
      activeBtnName = true;
    } else {
      sortByName(true);
      btnName.querySelector('svg').style['transform'] = 'rotate(0deg)';
      activeBtnName = false;
    }
  });


  btnDate.addEventListener("click", function() {
    if(!activebtnDate) {
      sortByDate();
      btnDate.querySelector('svg').style['transform'] = 'rotate(180deg)';
      activebtnDate = true;
    } else {
      sortByDate(true);
      btnDate.querySelector('svg').style['transform'] = 'rotate(0deg)';
      activebtnDate = false;
    }
  });
}
